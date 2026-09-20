import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import sanitizeHtml from 'sanitize-html';

const marked = new Marked(
	markedHighlight({
		emptyLangClass: 'hljs',
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
);
marked.setOptions({ gfm: true, breaks: false });

const SANITIZE: sanitizeHtml.IOptions = {
	allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'span', 'del', 'input']),
	allowedAttributes: {
		...sanitizeHtml.defaults.allowedAttributes,
		a: ['href', 'name', 'target', 'rel'],
		img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
		code: ['class'],
		span: ['class'],
		pre: ['class'],
		input: ['type', 'checked', 'disabled'],
		'*': ['id']
	},
	allowedClasses: { code: ['hljs', 'language-*'], span: ['hljs-*'], pre: ['hljs'] },
	allowedSchemes: ['http', 'https', 'mailto'],
	transformTags: {
		a: (tagName, attribs) => ({
			tagName,
			attribs: { ...attribs, rel: 'noopener noreferrer', ...(attribs.href?.startsWith('http') ? { target: '_blank' } : {}) }
		}),
		img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: 'lazy' } })
	}
};

/** Markdown → sanitized HTML (server only). */
export function renderMarkdown(md: string): string {
	const html = marked.parse(md, { async: false }) as string;
	return sanitizeHtml(html, SANITIZE);
}

export function readingMinutes(md: string): number {
	const words = md.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}

/** First ~200 chars of plain text, for auto-excerpts. */
export function excerptOf(md: string, max = 200): string {
	const text = md
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/[#>*_`~\[\]()!-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	return text.length > max ? text.slice(0, max - 1).trimEnd() + '…' : text;
}
