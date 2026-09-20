---
title: MCP Servers, Explained Like You're Going to Build One
topic: mcp-servers
featured: false
excerpt: The Model Context Protocol standardizes how models discover and call tools. Here's the mental model, the three primitives, and a server in forty lines.
---
Before MCP, every AI app wrote its own glue for every integration. Your agent wants GitHub? Write a wrapper. Slack? Another wrapper. Switch to a different AI client? Rewrite all of them. The **Model Context Protocol** fixes this with a simple idea: integrations are *servers*, AI apps are *clients*, and they speak a shared protocol.

## The three primitives

- **Tools**: functions the model can call. Each has a name, a description, and a JSON schema for arguments. `create_issue(repo, title, body)`.
- **Resources**: things the model can read. Files, database rows, URLs. Addressed by URI, returned as text or binary.
- **Prompts**: reusable prompt templates the server offers, with arguments. "Summarize this PR" as a first-class thing.

A client connects, asks the server what it offers (`tools/list`, `resources/list`), and the model picks from that catalog.

## Transport

Two options. **stdio**: the client spawns the server as a subprocess and talks over stdin/stdout. Perfect for local tools. **Streamable HTTP**: the server is a web service; good for shared or remote servers. Same protocol either way, JSON-RPC underneath.

## A server in Python

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("notes")
NOTES: dict[str, str] = {}

@mcp.tool()
def add_note(title: str, body: str) -> str:
    """Save a note. Returns the note title."""
    NOTES[title] = body
    return title

@mcp.tool()
def search_notes(query: str) -> list[str]:
    """Titles of notes whose body mentions the query."""
    return [t for t, b in NOTES.items() if query.lower() in b.lower()]

@mcp.resource("note://{title}")
def get_note(title: str) -> str:
    return NOTES.get(title, "")

if __name__ == "__main__":
    mcp.run()  # stdio by default
```

Point any MCP client at it and the model can now take and search notes.

## Things people get wrong

- **Tool descriptions are prompts.** They're the only thing the model sees. "Search notes" is useless; "Titles of notes whose body mentions the query; case-insensitive substring match" lets the model use it correctly.
- **Too many tools.** A server exposing 80 tools blows up the context window. Group, or let clients load tool definitions lazily.
- **Trusting tool output.** A resource can contain text that looks like instructions ("ignore previous rules and…"). Treat everything a tool returns as data. See [harness engineering](/topics/harness-engineering).
- **No auth story.** Remote servers need OAuth or tokens. Don't ship a server that will happily delete production because a model asked.

## Why it won

Not because the protocol is clever (it's deliberately boring) but because it turned an N×M integration problem into N+M. Build a server once; every client gets it.
