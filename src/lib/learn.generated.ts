// GENERATED from the finished videos — see admitcrew ai/app/agent/media.py compose_meta.
//
// Every field here was read off the rendered artefact rather than the brief it started as: the runtime is measured,
// the chapters are the scenes that were actually drawn with the durations they actually have, and the summary was
// written against the real narration. Regenerate rather than edit — an edit here will be silently overwritten the
// next time a video is re-cut.

export type Chapter = { at: string; title: string };
export type Lesson = {
	n: number;
	title: string;
	summary: string;
	runs: string;
	chapters: Chapter[];
	tags: string[];
	src: string;
	poster: string;
	captions: string;
};

export const PROBABILITY: Lesson[] = [
 {
  "n": 1,
  "title": "The 5 Words of Probability: A Complete Foundation",
  "summary": "This video breaks probability down into just five essential words\u2014experiment, outcome, sample space, event, and probability\u2014so you can understand what they actually mean instead of just saying them like everyone else in data science. Using a dice as a simple example, you'll learn how these concepts connect and why probability is actually just a fraction. After watching, you'll have the complete foundation needed to understand how probability works in any model.",
  "runs": "4:17",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:31",
    "title": "Experiment and Outcome"
   },
   {
    "at": "1:13",
    "title": "Sample Space"
   },
   {
    "at": "1:41",
    "title": "Event"
   },
   {
    "at": "2:11",
    "title": "Probability Itself"
   },
   {
    "at": "2:52",
    "title": "Common Mix-Ups"
   },
   {
    "at": "3:35",
    "title": "Putting It Together"
   }
  ],
  "tags": [
   "probability",
   "experiment",
   "outcome",
   "sample space",
   "event",
   "statistics",
   "data science",
   "foundations",
   "dice",
   "fractions"
  ],
  "src": "/media/learn/probability/probability-01.mp4",
  "poster": "/media/learn/probability/probability-01.jpg",
  "captions": "/media/learn/probability/probability-01.vtt"
 },
 {
  "n": 2,
  "title": "Two Events and Their Relationships: Mutually Exclusive vs. Independent",
  "summary": "Learn the critical difference between mutually exclusive events and independent events in probability\u2014two distinct concepts that are often confused. This video teaches you how to identify which type of relationship two events have, why it matters for calculations, and how to avoid the common mistake of using the wrong formula. After watching, you'll know to ask two key questions before solving any multi-event probability problem.",
  "runs": "4:41",
  "chapters": [
   {
    "at": "0:00",
    "title": "Two Events Walk Into a Sample Space"
   },
   {
    "at": "0:49",
    "title": "Part One: Mutually Exclusive Events"
   },
   {
    "at": "1:38",
    "title": "Part Two: Independent Events"
   },
   {
    "at": "2:32",
    "title": "Part Three: Related, But Not Independent"
   },
   {
    "at": "3:26",
    "title": "Where People Trip Up"
   },
   {
    "at": "4:00",
    "title": "Recap"
   }
  ],
  "tags": [
   "probability",
   "mutually exclusive events",
   "independent events",
   "conditional probability",
   "sample space",
   "probability formulas",
   "common mistakes",
   "event relationships",
   "basic probability",
   "statistics"
  ],
  "src": "/media/learn/probability/probability-02.mp4",
  "poster": "/media/learn/probability/probability-02.jpg",
  "captions": "/media/learn/probability/probability-02.vtt"
 },
 {
  "n": 3,
  "title": "What Does That Number Even Mean? Two Stories of Probability",
  "summary": "When a weather app says 70% chance of rain, what does that actually mean? This video unpacks how probability has two honest interpretations: as a long-run frequency (how often something happens when repeated forever) and as a degree of belief (confidence in a one-off event). You'll learn to read the same number two different ways and understand the common mistakes people make when thinking about probability.",
  "runs": "5:08",
  "chapters": [
   {
    "at": "0:00",
    "title": "What Does That Number Even Mean?"
   },
   {
    "at": "0:42",
    "title": "Story One: The Long Run"
   },
   {
    "at": "1:47",
    "title": "Story Two: Degree of Belief"
   },
   {
    "at": "2:43",
    "title": "Same Number, Two Readings"
   },
   {
    "at": "3:27",
    "title": "Where People Trip Up"
   },
   {
    "at": "4:13",
    "title": "Putting It Together"
   }
  ],
  "tags": [
   "probability",
   "frequentist",
   "Bayesian",
   "degree of belief",
   "long-run frequency",
   "statistics",
   "data science",
   "weather forecasting",
   "uncertainty"
  ],
  "src": "/media/learn/probability/probability-03.mp4",
  "poster": "/media/learn/probability/probability-03.jpg",
  "captions": "/media/learn/probability/probability-03.vtt"
 },
 {
  "n": 4,
  "title": "Random Variables: Turning Outcomes Into Numbers",
  "summary": "Learn what a random variable is and why we need them in probability and data science. This video teaches you that a random variable is a function that converts outcomes from a sample space (like 'heads' or a dice pair) into real numbers, so we can apply arithmetic and formulas to probability. After watching, you'll understand the formal definition, see worked examples with coins and dice, and recognize the common mistake of confusing the variable itself with its realized values.",
  "runs": "3:58",
  "chapters": [
   {
    "at": "0:00",
    "title": "Why Do We Need Numbers At All?"
   },
   {
    "at": "0:33",
    "title": "The Actual Definition"
   },
   {
    "at": "1:01",
    "title": "Worked Example: One Coin Flip"
   },
   {
    "at": "1:30",
    "title": "Worked Example: Two Dice, Sum As The Var"
   },
   {
    "at": "2:09",
    "title": "Discrete vs Continuous, Briefly"
   },
   {
    "at": "2:36",
    "title": "The Mix-Up People Make"
   },
   {
    "at": "3:21",
    "title": "Recap"
   }
  ],
  "tags": [
   "random variable",
   "probability",
   "sample space",
   "outcomes",
   "discrete",
   "continuous",
   "function",
   "coin flip",
   "dice",
   "data science"
  ],
  "src": "/media/learn/probability/probability-04.mp4",
  "poster": "/media/learn/probability/probability-04.jpg",
  "captions": "/media/learn/probability/probability-04.vtt"
 },
 {
  "n": 5,
  "title": "The Shape of Chance: Understanding Probability Distributions",
  "summary": "Learn how to visualize the probability of every outcome in a sample space by drawing a distribution\u2014a shape that shows the whole picture of chance at once. You'll discover how discrete outcomes become bar charts and continuous outcomes become smooth curves, and why reading probability from a curve requires area, not just height. After this lesson, you'll understand what distributions are, how to draw them, and the common mistakes that trip up most learners.",
  "runs": "4:43",
  "chapters": [
   {
    "at": "0:00",
    "title": "Maya's Question"
   },
   {
    "at": "0:28",
    "title": "Part One: Discrete Distributions"
   },
   {
    "at": "1:14",
    "title": "A Less Boring Example: Two Dice"
   },
   {
    "at": "1:53",
    "title": "Part Two: When Outcomes Aren't Countable"
   },
   {
    "at": "2:46",
    "title": "Maya Checks Her Understanding"
   },
   {
    "at": "3:20",
    "title": "Common Mistakes"
   },
   {
    "at": "4:03",
    "title": "Recap"
   }
  ],
  "tags": [
   "probability",
   "distributions",
   "discrete vs continuous",
   "sample space",
   "bar charts",
   "probability curves",
   "statistics fundamentals",
   "visual learning"
  ],
  "src": "/media/learn/probability/probability-05.mp4",
  "poster": "/media/learn/probability/probability-05.jpg",
  "captions": "/media/learn/probability/probability-05.vtt"
 },
 {
  "n": 6,
  "title": "Expected Value: Understanding the Balance Point",
  "summary": "Learn what expected value is and why it's called the \"balance point\" of a random variable. This video teaches you how to calculate expected value by weighting each outcome by its probability, and shows you how to use it to evaluate real decisions\u2014like whether a coin flip bet is worth taking.",
  "runs": "3:00",
  "chapters": [
   {
    "at": "0:00",
    "title": "What Number Should I Expect?"
   },
   {
    "at": "0:28",
    "title": "The Formula: Weight Each Outcome"
   },
   {
    "at": "1:03",
    "title": "A Game With Real Stakes"
   },
   {
    "at": "1:35",
    "title": "Why 'Balance Point' Makes Sense"
   },
   {
    "at": "2:02",
    "title": "Two Traps People Fall Into"
   },
   {
    "at": "2:30",
    "title": "Putting It Together"
   }
  ],
  "tags": [
   "expected value",
   "probability",
   "weighted average",
   "balance point",
   "random variables",
   "statistics",
   "decision making",
   "gambling odds",
   "long-run average",
   "dice"
  ],
  "src": "/media/learn/probability/probability-06.mp4",
  "poster": "/media/learn/probability/probability-06.jpg",
  "captions": "/media/learn/probability/probability-06.vtt"
 },
 {
  "n": 7,
  "title": "Variance: Measuring Spread Around the Mean",
  "summary": "Learn what variance is and why it matters: two games can have identical average payouts but feel completely different to play. This video shows you how variance measures the typical squared distance from outcomes to the mean, revealing the spread that the average alone hides.",
  "runs": "3:36",
  "chapters": [
   {
    "at": "0:00",
    "title": "Same Average, Different Feel"
   },
   {
    "at": "0:29",
    "title": "What Variance Actually Measures"
   },
   {
    "at": "1:06",
    "title": "One Fair Dice Roll"
   },
   {
    "at": "1:50",
    "title": "Two Games, Same Mean"
   },
   {
    "at": "2:22",
    "title": "Where People Trip Up"
   },
   {
    "at": "2:59",
    "title": "Bringing It Together"
   }
  ],
  "tags": [
   "variance",
   "mean",
   "spread",
   "statistics",
   "probability",
   "standard deviation",
   "data",
   "outcomes",
   "distance",
   "squared units"
  ],
  "src": "/media/learn/probability/probability-07.mp4",
  "poster": "/media/learn/probability/probability-07.jpg",
  "captions": "/media/learn/probability/probability-07.vtt"
 },
 {
  "n": 8,
  "title": "Joint Probability: Reading Two Things Happening Together",
  "summary": "Learn what joint probability is and how to read it directly from a table to find the chance that two events happen together. You'll understand why you can't just multiply or add separate probabilities, and see how this foundational concept powers machine learning classifiers like spam filters. By the end, you'll be able to distinguish joint probability from marginal probability and know when shortcuts actually apply.",
  "runs": "4:14",
  "chapters": [
   {
    "at": "0:00",
    "title": "Two Things Happening Together"
   },
   {
    "at": "0:31",
    "title": "What Joint Probability Actually Means"
   },
   {
    "at": "1:08",
    "title": "Reading a Joint Probability Table"
   },
   {
    "at": "1:54",
    "title": "From Joint Back to Marginal"
   },
   {
    "at": "2:35",
    "title": "The Two Mistakes People Make"
   },
   {
    "at": "3:18",
    "title": "Why ML Cares About This"
   },
   {
    "at": "3:45",
    "title": "Recap"
   }
  ],
  "tags": [
   "joint probability",
   "probability tables",
   "two random variables",
   "marginal probability",
   "probability fundamentals",
   "conditional events",
   "independence",
   "machine learning",
   "statistics",
   "data analysis"
  ],
  "src": "/media/learn/probability/probability-08.mp4",
  "poster": "/media/learn/probability/probability-08.jpg",
  "captions": "/media/learn/probability/probability-08.vtt"
 },
 {
  "n": 9,
  "title": "Marginal Probability: Collapsing Joint Tables",
  "summary": "Learn how to extract single-variable probabilities from a joint probability table by adding across rows or columns\u2014a technique called collapsing. You'll see why a single cell isn't the same as a marginal probability, and how marginalization lets you zoom out to answer simpler questions from data that tracks multiple variables.",
  "runs": "4:30",
  "chapters": [
   {
    "at": "0:00",
    "title": "Maya's Question"
   },
   {
    "at": "0:36",
    "title": "The Joint Table We Start From"
   },
   {
    "at": "1:11",
    "title": "Collapsing Across Mood"
   },
   {
    "at": "1:51",
    "title": "Collapsing the Other Way"
   },
   {
    "at": "2:32",
    "title": "The Mistake People Make"
   },
   {
    "at": "3:18",
    "title": "Why This Matters for ML"
   },
   {
    "at": "3:44",
    "title": "Recap"
   }
  ],
  "tags": [
   "marginal probability",
   "joint probability",
   "collapsing",
   "probability tables",
   "single variable",
   "conditional probability fundamentals",
   "data analysis",
   "machine learning basics"
  ],
  "src": "/media/learn/probability/probability-09.mp4",
  "poster": "/media/learn/probability/probability-09.jpg",
  "captions": "/media/learn/probability/probability-09.vtt"
 },
 {
  "n": 10,
  "title": "Conditional Probability: The Fundamentals",
  "summary": "Learn what conditional probability is and how knowing that one event happened changes the probability of another. This video teaches you to shrink the sample space to only the outcomes where the given condition is true, then recalculate probabilities within that smaller world. You'll understand the key formula, recognize when conditioning doesn't change a probability (independence), and avoid the most common trap: confusing P(A given B) with P(B given A).",
  "runs": "3:23",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:26",
    "title": "The Definition"
   },
   {
    "at": "1:04",
    "title": "Rolling Dice, Knowing Something"
   },
   {
    "at": "1:45",
    "title": "When Knowing Changes Nothing"
   },
   {
    "at": "2:13",
    "title": "The Trap: Flipping the Order"
   },
   {
    "at": "2:47",
    "title": "Putting It Together"
   }
  ],
  "tags": [
   "conditional probability",
   "probability given event",
   "sample space",
   "independence",
   "Bayes",
   "dice probability",
   "common probability mistakes",
   "probability formula",
   "statistics fundamentals",
   "conditional events"
  ],
  "src": "/media/learn/probability/probability-10.mp4",
  "poster": "/media/learn/probability/probability-10.jpg",
  "captions": "/media/learn/probability/probability-10.vtt"
 },
 {
  "n": 11,
  "title": "Independence: When Knowing One Event Tells You Nothing About Another",
  "summary": "Learn what it means for two events to be independent in probability\u2014when the outcome of one event doesn't change the probability of another. You'll see worked examples with coins and dice, discover the common trap of confusing independence with mutual exclusivity, and understand why independence is crucial for machine learning models.",
  "runs": "4:17",
  "chapters": [
   {
    "at": "0:00",
    "title": "The question"
   },
   {
    "at": "0:29",
    "title": "The real definition"
   },
   {
    "at": "1:15",
    "title": "Worked example: coin and dice"
   },
   {
    "at": "1:46",
    "title": "Worked example: when knowing DOES help"
   },
   {
    "at": "2:18",
    "title": "The mistake almost everyone makes"
   },
   {
    "at": "2:59",
    "title": "Why this matters for machine learning"
   },
   {
    "at": "3:34",
    "title": "Recap"
   }
  ],
  "tags": [
   "independence",
   "probability",
   "conditional probability",
   "mutually exclusive",
   "machine learning",
   "iid",
   "events",
   "joint probability",
   "dependent events",
   "probability fundamentals"
  ],
  "src": "/media/learn/probability/probability-11.mp4",
  "poster": "/media/learn/probability/probability-11.jpg",
  "captions": "/media/learn/probability/probability-11.vtt"
 },
 {
  "n": 12,
  "title": "Bayes' Theorem: Updating Beliefs with Evidence",
  "summary": "Learn how Bayes' theorem provides a precise mathematical way to update your beliefs when new evidence arrives. This video walks through the key concepts\u2014prior, likelihood, and posterior\u2014and shows why even highly accurate tests can produce mostly false alarms for rare conditions. You'll understand the common mistake of ignoring base rates and how to properly weigh evidence against how common something actually is.",
  "runs": "4:26",
  "chapters": [
   {
    "at": "0:00",
    "title": "The question: how do you update a belief"
   },
   {
    "at": "0:29",
    "title": "Prior and posterior"
   },
   {
    "at": "1:10",
    "title": "The formula in plain words"
   },
   {
    "at": "2:02",
    "title": "Worked example: the medical test"
   },
   {
    "at": "3:04",
    "title": "The mistake: ignoring the base rate"
   },
   {
    "at": "3:45",
    "title": "Recap"
   }
  ],
  "tags": [
   "Bayes' theorem",
   "conditional probability",
   "prior and posterior",
   "likelihood",
   "base rate neglect",
   "medical testing",
   "probability",
   "Bayesian inference",
   "updating beliefs",
   "false positives"
  ],
  "src": "/media/learn/probability/probability-12.mp4",
  "poster": "/media/learn/probability/probability-12.jpg",
  "captions": "/media/learn/probability/probability-12.vtt"
 },
 {
  "n": 13,
  "title": "Why a 99% Accurate Test Doesn't Mean What You Think",
  "summary": "Learn why a positive result on a 99% accurate medical test often means you're probably healthy, not sick. This video reveals the hidden logic flaw in medical testing: a test's accuracy is different from your actual probability of having a disease, especially when the disease is rare. You'll discover how to interpret test results correctly and understand why doctors order second tests.",
  "runs": "3:57",
  "chapters": [
   {
    "at": "0:00",
    "title": "A ninety-nine percent accurate test"
   },
   {
    "at": "0:30",
    "title": "Two ways a test can be wrong"
   },
   {
    "at": "1:05",
    "title": "Picture a thousand people"
   },
   {
    "at": "1:45",
    "title": "Comparing the two piles of positives"
   },
   {
    "at": "2:23",
    "title": "Giving it a name: the base rate"
   },
   {
    "at": "2:56",
    "title": "The mistake people make"
   },
   {
    "at": "3:30",
    "title": "Recap: rare plus imperfect equals surpri"
   }
  ],
  "tags": [
   "Bayes' theorem",
   "base rate",
   "false positive",
   "medical testing",
   "probability",
   "test accuracy",
   "conditional probability",
   "statistics",
   "intuition bias",
   "disease prevalence"
  ],
  "src": "/media/learn/probability/probability-13.mp4",
  "poster": "/media/learn/probability/probability-13.jpg",
  "captions": "/media/learn/probability/probability-13.vtt"
 }
];

export const NEO4J: Lesson[] = [
 {
  "n": 1,
  "title": "Knowledge Graphs vs SQL: When to Use Graph Databases",
  "summary": "Learn why graph databases solve problems that SQL tables can't handle efficiently, using a concrete example of finding colleges whose professors match a student's background. You'll understand how relationships work as first-class citizens in graphs, why traversing connections is faster than joining tables, and when to reach for a graph database instead of SQL.",
  "runs": "6:43",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:55",
    "title": "Tables Store Things, Not Connections"
   },
   {
    "at": "2:04",
    "title": "Nodes and Relationships"
   },
   {
    "at": "3:42",
    "title": "Why This Shape Answers Ana's Question Fast"
   },
   {
    "at": "4:41",
    "title": "Where People Get Confused"
   },
   {
    "at": "5:39",
    "title": "Recap: Knowledge Graphs vs Tables"
   },
   {
    "at": "6:33",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "knowledge graph",
   "graph database",
   "SQL",
   "database design",
   "nodes and relationships",
   "graph traversal"
  ],
  "src": "/media/learn/neo4j/neo4j-01.mp4",
  "poster": "/media/learn/neo4j/neo4j-01.jpg",
  "captions": "/media/learn/neo4j/neo4j-01.vtt"
 },
 {
  "n": 2,
  "title": "Graph Database Fundamentals: Nodes, Labels, Relationships, and Properties",
  "summary": "Learn the precise definitions of the core concepts in graph databases: nodes, labels, relationships, and properties. Using the example of a student choosing a college, this video moves beyond metaphors to teach you the actual rules, including why properties can exist on both nodes and relationships, and what mistakes to avoid when designing a graph.",
  "runs": "7:32",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:44",
    "title": "Part One: The Node"
   },
   {
    "at": "1:47",
    "title": "Part Two: The Label"
   },
   {
    "at": "2:48",
    "title": "Relationships and Relationship Types"
   },
   {
    "at": "4:09",
    "title": "Part Four: The Property"
   },
   {
    "at": "5:13",
    "title": "Common Mistakes"
   },
   {
    "at": "6:18",
    "title": "Recap: Graph vocabulary"
   },
   {
    "at": "7:17",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "graph database",
   "nodes",
   "relationships",
   "labels",
   "properties",
   "database fundamentals"
  ],
  "src": "/media/learn/neo4j/neo4j-02.mp4",
  "poster": "/media/learn/neo4j/neo4j-02.jpg",
  "captions": "/media/learn/neo4j/neo4j-02.vtt"
 },
 {
  "n": 3,
  "title": "Why Graph Queries Stay Fast: Index-Free Adjacency",
  "summary": "Discover why finding connected nodes in Neo4j doesn't slow down as your graph grows, unlike SQL joins on large tables. This video explains how node and relationship records are physically stored on disk and how pointers let you traverse connections through direct hops instead of index searches—a pattern called index-free adjacency.",
  "runs": "6:35",
  "chapters": [
   {
    "at": "0:00",
    "title": "Why No Searching?"
   },
   {
    "at": "1:01",
    "title": "What's Actually on Disk"
   },
   {
    "at": "2:22",
    "title": "Following the Pointer Hop"
   },
   {
    "at": "3:30",
    "title": "Why SQL Can't Just Do This"
   },
   {
    "at": "4:28",
    "title": "Where People Get Confused"
   },
   {
    "at": "5:31",
    "title": "Bringing It Together"
   },
   {
    "at": "6:22",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "Neo4j",
   "graph database",
   "index-free adjacency",
   "performance",
   "pointers",
   "query optimization"
  ],
  "src": "/media/learn/neo4j/neo4j-03.mp4",
  "poster": "/media/learn/neo4j/neo4j-03.jpg",
  "captions": "/media/learn/neo4j/neo4j-03.vtt"
 },
 {
  "n": 4,
  "title": "Cypher Query Syntax: Nodes, Relationships, and Basic Queries",
  "summary": "Learn the core syntax of Cypher, Neo4j's graph query language, by mapping visual patterns directly to code. This video teaches you how to write nodes in parentheses, relationships in square brackets with direction arrows, and how to use MATCH, WHERE, RETURN, and ORDER BY to ask questions of your graph database. By the end, you'll be able to construct basic graph queries using the same logic as SQL, but with syntax designed to match the graph structure itself.",
  "runs": "7:06",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:46",
    "title": "Nodes in Parentheses"
   },
   {
    "at": "1:41",
    "title": "Relationships in Square Brackets"
   },
   {
    "at": "2:44",
    "title": "Why Direction Matters"
   },
   {
    "at": "3:37",
    "title": "MATCH and WHERE"
   },
   {
    "at": "4:35",
    "title": "RETURN and ORDER BY"
   },
   {
    "at": "5:18",
    "title": "Common Mistakes"
   },
   {
    "at": "6:07",
    "title": "Recap"
   }
  ],
  "tags": [
   "Cypher",
   "Neo4j",
   "graph database",
   "query syntax",
   "nodes",
   "relationships"
  ],
  "src": "/media/learn/neo4j/neo4j-04.mp4",
  "poster": "/media/learn/neo4j/neo4j-04.jpg",
  "captions": "/media/learn/neo4j/neo4j-04.vtt"
 },
 {
  "n": 5,
  "title": "Writing to Graphs Safely: CREATE, MERGE, and Beyond",
  "summary": "Learn how to write data to Neo4j without accidentally creating duplicates or orphaned relationships. This video covers CREATE versus MERGE, the ON CREATE SET and ON MATCH SET branches, and the critical difference between DELETE and DETACH DELETE, plus three common mistakes that cause problems in production.",
  "runs": "8:26",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:47",
    "title": "CREATE: Always Makes a New Thing"
   },
   {
    "at": "1:43",
    "title": "MERGE: Find It, Or Make It"
   },
   {
    "at": "2:57",
    "title": "ON CREATE SET vs ON MATCH SET"
   },
   {
    "at": "4:05",
    "title": "SET and REMOVE: Editing What's Already There"
   },
   {
    "at": "5:13",
    "title": "DELETE and DETACH DELETE"
   },
   {
    "at": "6:21",
    "title": "Where People Get Burned"
   },
   {
    "at": "7:13",
    "title": "Recap"
   },
   {
    "at": "8:11",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "Neo4j",
   "Cypher",
   "MERGE",
   "CREATE",
   "graph database",
   "data integrity"
  ],
  "src": "/media/learn/neo4j/neo4j-05.mp4",
  "poster": "/media/learn/neo4j/neo4j-05.jpg",
  "captions": "/media/learn/neo4j/neo4j-05.vtt"
 },
 {
  "n": 6,
  "title": "Graph Embeddings and Vector Search: Building GraphRAG Systems",
  "summary": "Learn what embeddings actually are—lists of numbers that capture the meaning of text—and how to store them on graph nodes for fast similarity search. This video teaches you to build a vector index in Cypher and combine vector search with graph traversal (GraphRAG) to answer nuanced questions that pure text matching can't handle.",
  "runs": "9:21",
  "chapters": [
   {
    "at": "0:00",
    "title": "The Question"
   },
   {
    "at": "0:59",
    "title": "What An Embedding Actually Is"
   },
   {
    "at": "2:34",
    "title": "Building and Querying a Vector Index"
   },
   {
    "at": "4:14",
    "title": "Why Vector Search Alone Falls Short"
   },
   {
    "at": "5:40",
    "title": "Putting It Together: GraphRAG"
   },
   {
    "at": "7:04",
    "title": "Mistakes People Make"
   },
   {
    "at": "8:08",
    "title": "Recap: Embeddings and GraphRAG"
   },
   {
    "at": "9:03",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "embeddings",
   "vector search",
   "vector index",
   "GraphRAG",
   "neo4j",
   "cypher"
  ],
  "src": "/media/learn/neo4j/neo4j-06.mp4",
  "poster": "/media/learn/neo4j/neo4j-06.jpg",
  "captions": "/media/learn/neo4j/neo4j-06.vtt"
 },
 {
  "n": 7,
  "title": "Running Neo4j: Aura vs Self-Hosted and How to Connect",
  "summary": "This video covers when to use Neo4j Aura (the managed cloud service) versus self-hosting, what you gain and lose with each approach, and how to connect your code through the official driver. You'll learn the practical rule of thumb for choosing between them, how to securely parameterize queries to prevent injection attacks, and the common mistakes teams make when deploying graph databases.",
  "runs": "6:55",
  "chapters": [
   {
    "at": "0:00",
    "title": "Someone Still Has to Run the Thing"
   },
   {
    "at": "0:49",
    "title": "What Aura Actually Is"
   },
   {
    "at": "1:41",
    "title": "What You Give Up"
   },
   {
    "at": "2:23",
    "title": "When To Choose Aura"
   },
   {
    "at": "2:57",
    "title": "The Official Driver"
   },
   {
    "at": "4:14",
    "title": "Don't Paste, Parameterize"
   },
   {
    "at": "4:46",
    "title": "Letting a Model Write Cypher"
   },
   {
    "at": "5:37",
    "title": "The Mistakes People Make"
   },
   {
    "at": "6:04",
    "title": "Recap: Running Neo4j"
   },
   {
    "at": "6:39",
    "title": "Closing Card"
   }
  ],
  "tags": [
   "Neo4j",
   "Aura",
   "database deployment",
   "managed services",
   "graph database",
   "driver"
  ],
  "src": "/media/learn/neo4j/neo4j-07.mp4",
  "poster": "/media/learn/neo4j/neo4j-07.jpg",
  "captions": "/media/learn/neo4j/neo4j-07.vtt"
 }
];

export const LLM_EVAL: Lesson[] = [
  {
   "n": 1,
   "title": "Why Testing Language Models Is Different",
   "summary": "Learn the four core challenges that make testing language models fundamentally different from traditional software testing: multiple acceptable outputs, the difficulty of automatically judging meaning, non-deterministic behavior, and varying degrees of wrongness. After watching, you'll understand why exact string matching and single-run tests fail, and what teams need to do instead.",
   "runs": "7:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "1:04",
     "title": "Part One: Many Acceptable Outputs"
    },
    {
     "at": "2:05",
     "title": "Part Two: No Automatic Judge"
    },
    {
     "at": "3:09",
     "title": "Part Three: The Model Isn't Even Consistent With Itself"
    },
    {
     "at": "4:07",
     "title": "Part Four: Different Ways to Be Wrong"
    },
    {
     "at": "4:59",
     "title": "Common Mistakes Teams Make"
    },
    {
     "at": "5:58",
     "title": "Recap"
    }
   ],
   "tags": [
    "language models",
    "testing",
    "LLM evaluation",
    "software testing",
    "hallucination",
    "non-deterministic",
    "oracle problem",
    "prompt testing"
   ],
   "src": "/media/learn/llm-eval/llm-eval-01.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-01.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-01.vtt"
  },
  {
   "n": 2,
   "title": "Building Evaluations for AI Systems: Rubrics, Judges, and Testing",
   "summary": "Learn how to evaluate AI model outputs when there's no single right answer. This video teaches you to build a three-part evaluation system: writing clear rubrics that break down what \"good\" looks like, choosing and calibrating a judge (human or model-based) to apply those standards, and testing multiple generations per prompt to get reliable pass rates across your test set.",
   "runs": "5:30",
   "chapters": [
    {
     "at": "0:00",
     "title": "Where Do We Even Start"
    },
    {
     "at": "0:43",
     "title": "Part One: Writing the Rubric"
    },
    {
     "at": "1:39",
     "title": "Part Two: Picking a Judge"
    },
    {
     "at": "2:30",
     "title": "Calibrating the Judge"
    },
    {
     "at": "3:15",
     "title": "Part Three: Many Outputs, Not One"
    },
    {
     "at": "3:56",
     "title": "Where People Get It Wrong"
    },
    {
     "at": "4:40",
     "title": "Putting It Together"
    }
   ],
   "tags": [
    "AI evaluation",
    "rubrics",
    "LLM grading",
    "model assessment",
    "quality metrics",
    "inter-rater agreement",
    "testing frameworks",
    "machine learning",
    "output validation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-02.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-02.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-02.vtt"
  },
  {
   "n": 3,
   "title": "Writing Guidelines: Making Your Rubric Actually Work",
   "summary": "A rubric alone isn't enough—you need guidelines to make sure real annotators agree on real outputs. Learn how to write explicit scoring rules using worked examples, measure agreement with Cohen's kappa, and turn annotator disagreements into the rules that make labeling consistent.",
   "runs": "5:28",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Rubric Isn't the Finish Line"
    },
    {
     "at": "0:48",
     "title": "Why Smart People Disagree"
    },
    {
     "at": "1:34",
     "title": "Writing Guidelines That Survive Contact"
    },
    {
     "at": "2:44",
     "title": "Measuring If They Actually Agree"
    },
    {
     "at": "3:42",
     "title": "Where Teams Go Wrong"
    },
    {
     "at": "4:24",
     "title": "Bringing It Together"
    }
   ],
   "tags": [
    "rubric",
    "annotation guidelines",
    "inter-rater agreement",
    "Cohen's kappa",
    "data labeling",
    "scoring rules",
    "worked examples",
    "quality assurance",
    "annotator training",
    "measurement"
   ],
   "src": "/media/learn/llm-eval/llm-eval-03.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-03.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-03.vtt"
  },
  {
   "n": 4,
   "title": "Hidden Biases in Judge Models: Position, Verbosity, Self-Preference",
   "summary": "Even when a judge model passes calibration checks on average, it can still systematically favor certain answers due to position bias, verbosity bias, and self-preference bias. This video teaches you to identify these hidden patterns and the common mistakes people make when deploying judge models, so you can catch and correct for these biases in your own evaluation systems.",
   "runs": "5:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Judge That Grades Itself an A"
    },
    {
     "at": "0:42",
     "title": "Position Bias: The One That Goes First Wins"
    },
    {
     "at": "1:36",
     "title": "Verbosity Bias: Longer Isn't Better, Just Louder"
    },
    {
     "at": "2:29",
     "title": "Self-Preference: A Judge That Likes Its Own Voice"
    },
    {
     "at": "3:19",
     "title": "Mistakes People Actually Make"
    },
    {
     "at": "4:08",
     "title": "Recap: A Judge Is a Tool, Not an Oracle"
    }
   ],
   "tags": [
    "judge model",
    "bias",
    "position bias",
    "verbosity bias",
    "self-preference",
    "model evaluation",
    "calibration",
    "pairwise comparison",
    "LLM evaluation",
    "systematic bias"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why BLEU and ROUGE Fail for LLMs",
   "summary": "Learn why popular metrics like exact match, BLEU, and ROUGE measure word overlap, not actual correctness—and why they fail when applied to chat models and agents. You'll understand what these metrics were built for, where they break down, and what approaches actually work instead: semantic similarity, LLM-as-judge, and task-based evaluation.",
   "runs": "8:11",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:44",
     "title": "Exact Match — Right For The Wrong Reason"
    },
    {
     "at": "1:49",
     "title": "BLEU — Built For A Different Job"
    },
    {
     "at": "3:06",
     "title": "ROUGE — Overlap's Cousin, Same Blind Spot"
    },
    {
     "at": "4:18",
     "title": "What The Score Is Really Measuring"
    },
    {
     "at": "5:04",
     "title": "What Actually Works Instead"
    },
    {
     "at": "6:25",
     "title": "Where Teams Go Wrong"
    },
    {
     "at": "7:16",
     "title": "Recap"
    }
   ],
   "tags": [
    "metrics",
    "evaluation",
    "BLEU",
    "ROUGE",
    "exact match",
    "LLM evaluation",
    "semantic similarity",
    "LLM-as-judge",
    "hallucination",
    "model assessment"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Scoring RAG Systems: Retriever and Generator Separately",
   "summary": "Learn why tracking a single end-to-end score for RAG systems fails, and how to diagnose failures by measuring retriever and generator performance independently. You'll see how to score retrieval (using recall@k and precision@k) and generation (using faithfulness) separately, so when your system gives a bad answer you know immediately which component to fix.",
   "runs": "7:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Score, Two Ways to Fail"
    },
    {
     "at": "1:11",
     "title": "Scoring the Retriever by Itself"
    },
    {
     "at": "2:42",
     "title": "Scoring the Generator by Itself"
    },
    {
     "at": "4:09",
     "title": "Walking Through One Real Failure"
    },
    {
     "at": "5:24",
     "title": "Where Teams Get This Wrong"
    },
    {
     "at": "6:27",
     "title": "Two Scores, Not One"
    }
   ],
   "tags": [
    "RAG",
    "retrieval augmented generation",
    "evaluation",
    "retriever",
    "generator",
    "scoring",
    "recall",
    "precision",
    "faithfulness",
    "debugging"
   ],
   "src": "/media/learn/llm-eval/llm-eval-06.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-06.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-06.vtt"
  },
  {
   "n": 7,
   "title": "Building a Safety Net: Automated Model Evaluation in CI/CD",
   "summary": "Learn how to move beyond one-time model evaluations to an automated safety net that catches regressions with every code change. You'll understand how to build a golden set of test examples, choose meaningful metrics and thresholds, and integrate continuous evaluation into your CI/CD pipeline—plus the three critical mistakes that can make it fail.",
   "runs": "5:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Study Versus a Safety Net"
    },
    {
     "at": "0:45",
     "title": "Choosing a Golden Set"
    },
    {
     "at": "1:54",
     "title": "Metrics and Thresholds"
    },
    {
     "at": "2:57",
     "title": "Wiring It Into Every Change"
    },
    {
     "at": "3:54",
     "title": "Where Daily Evaluation Goes Wrong"
    },
    {
     "at": "5:01",
     "title": "Recap"
    }
   ],
   "tags": [
    "model evaluation",
    "CI/CD pipeline",
    "golden set",
    "automated testing",
    "machine learning metrics",
    "threshold testing",
    "continuous deployment",
    "regression detection",
    "safety nets",
    "MLOps"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Why a High Test Score Doesn't Guarantee Model Safety",
   "summary": "Learn the critical difference between evaluation (testing a model on fixed questions) and red-teaming (actively searching for new failure modes), and why a passing score only tells you about the questions you asked, not the ones you didn't. You'll understand why three common mistakes—treating scores as safety guarantees, doing red-teaming only once, and having the same team design both—leave models vulnerable to attacks they haven't encountered before.",
   "runs": "5:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:26",
     "title": "Two Different Jobs: Measuring vs. Attacking"
    },
    {
     "at": "1:26",
     "title": "Worked Example: The Ninety-Four Percent Model"
    },
    {
     "at": "2:19",
     "title": "Why a Passing Score Can't See What You Didn't Think Of"
    },
    {
     "at": "3:14",
     "title": "The Mistakes People Make"
    },
    {
     "at": "4:08",
     "title": "Recap"
    }
   ],
   "tags": [
    "model evaluation",
    "red-teaming",
    "AI safety",
    "test sets",
    "model security",
    "adversarial testing",
    "machine learning validation",
    "model assessment",
    "chatbot safety"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Model Servers Struggle on Sunday Night",
   "summary": "Learn why serving language model requests is fundamentally different from running a normal web app, and why a thousand simultaneous students can overwhelm a system. This video teaches you how models generate text one token at a time, how servers batch requests to keep GPUs efficient, and the hard tradeoff between making individual responses fast and serving many users simultaneously.",
   "runs": "7:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "Three Hundred Students, One Sunday Night"
    },
    {
     "at": "1:03",
     "title": "Part One: Words Come Out One at a Time"
    },
    {
     "at": "2:09",
     "title": "Part Two: Batching — Sharing the GPU"
    },
    {
     "at": "3:13",
     "title": "Part Three: Latency Versus Throughput"
    },
    {
     "at": "4:30",
     "title": "Part Four: The Memory the Model Has to Carry"
    },
    {
     "at": "5:34",
     "title": "Common Mistakes"
    },
    {
     "at": "6:22",
     "title": "Recap"
    }
   ],
   "tags": [
    "language models",
    "system design",
    "GPU",
    "batching",
    "latency",
    "throughput",
    "KV cache",
    "inference"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: How LLMs Use GPUs Efficiently",
   "summary": "Learn why grouping LLM inference requests naively wastes GPU time, and how continuous batching solves it by reassigning idle slots to waiting requests after every token step. You'll understand the difference between static and continuous batching, see a worked example with real request lengths, and learn the common misconceptions that trip people up.",
   "runs": "6:22",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Waiting Room Problem"
    },
    {
     "at": "0:53",
     "title": "Static Batching: One Group, One Finish Line"
    },
    {
     "at": "2:22",
     "title": "Continuous Batching: Swap Seats, Not Whole Tables"
    },
    {
     "at": "3:38",
     "title": "Worked Example: A Small Serving Queue"
    },
    {
     "at": "4:31",
     "title": "Where People Get Tripped Up"
    },
    {
     "at": "5:39",
     "title": "Recap"
    }
   ],
   "tags": [
    "large language models",
    "GPU inference",
    "continuous batching",
    "static batching",
    "LLM optimization",
    "batch scheduling",
    "token generation",
    "compute efficiency",
    "inference systems",
    "machine learning"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache and Paging",
   "summary": "Learn why a single GPU serving multiple concurrent requests fills up so quickly, even though only a few are running. This video explains how the KV cache consumes memory, why naive reservation strategies cause fragmentation, and how operating system paging techniques can fix both the waste and unlock memory sharing across requests.",
   "runs": "6:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why does one GPU run out of room so fast?"
    },
    {
     "at": "0:50",
     "title": "Reserving for the worst case"
    },
    {
     "at": "1:56",
     "title": "How the waste shows up as fragmentation"
    },
    {
     "at": "2:45",
     "title": "The fix: pages, blocks, and a lookup table"
    },
    {
     "at": "4:09",
     "title": "The bonus: sharing blocks across requests"
    },
    {
     "at": "5:03",
     "title": "Where people trip up"
    },
    {
     "at": "5:48",
     "title": "Recap: what paging buys you"
    }
   ],
   "tags": [
    "GPU memory",
    "KV cache",
    "paging",
    "memory fragmentation",
    "LLM inference",
    "block allocation",
    "memory management",
    "token",
    "cache optimization"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "Learn three practical techniques for reducing model size and improving inference speed: quantization (rounding parameters to fewer bits), distillation (training a small model to imitate a large one), and pruning (removing parameters that barely contribute). You'll understand the tradeoffs of each approach and the critical mistake to avoid—always measure performance on your actual tasks before and after compression.",
   "runs": "7:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: Can the Model Just Weigh Less?"
    },
    {
     "at": "0:55",
     "title": "Idea One: Quantization — Rounding the Numbers"
    },
    {
     "at": "2:29",
     "title": "Idea Two: Distillation — Teaching a Small Model to Copy a Big One"
    },
    {
     "at": "4:08",
     "title": "Idea Three: Pruning — Cutting Out Knobs That Barely Matter"
    },
    {
     "at": "5:23",
     "title": "Where Engineers Get This Wrong"
    },
    {
     "at": "6:38",
     "title": "Recap: Three Ways to Shrink a Model"
    }
   ],
   "tags": [
    "model compression",
    "quantization",
    "distillation",
    "pruning",
    "machine learning",
    "inference optimization",
    "parameters",
    "model efficiency",
    "deep learning",
    "performance tuning"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "How Companies Run Hundreds of Custom Models on Shared Hardware",
   "summary": "Learn how to serve hundreds of fine-tuned language models without running five hundred separate copies. This video explains the architecture behind shared base models, small adapters per customer, and intelligent routing—the practical system that makes personalized AI affordable at scale.",
   "runs": "6:54",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:30",
     "title": "Why One Copy Per Customer Doesn't Fit"
    },
    {
     "at": "1:32",
     "title": "Adapters: The Small Add-On"
    },
    {
     "at": "2:43",
     "title": "Swapping Adapters Between Requests"
    },
    {
     "at": "3:48",
     "title": "Cold Starts"
    },
    {
     "at": "4:30",
     "title": "The Router: Which Machine Gets the Request"
    },
    {
     "at": "5:19",
     "title": "Where People Get Tripped Up"
    },
    {
     "at": "5:57",
     "title": "Recap"
    }
   ],
   "tags": [
    "language models",
    "model serving",
    "adapters",
    "fine-tuning",
    "GPU memory",
    "scaling",
    "machine learning infrastructure",
    "routers",
    "cold starts",
    "custom models"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How Models Guess Ahead to Speed Up",
   "summary": "Learn how speculative decoding uses a small, fast draft model to propose multiple tokens while a large target model verifies them all at once, cutting inference latency without sacrificing output quality. This lesson explains the two-model architecture, why the final answer stays the same, common implementation mistakes, and how the speedup actually works in practice.",
   "runs": "5:36",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:45",
     "title": "Two Models, Different Jobs"
    },
    {
     "at": "1:35",
     "title": "Guess, Then Check All At Once"
    },
    {
     "at": "2:52",
     "title": "Why the Output Doesn't Get Worse"
    },
    {
     "at": "3:48",
     "title": "Where People Trip Up"
    },
    {
     "at": "4:38",
     "title": "Saying It Back"
    }
   ],
   "tags": [
    "speculative decoding",
    "language models",
    "inference optimization",
    "draft models",
    "token generation",
    "latency reduction",
    "model verification",
    "LLM efficiency"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Use Multiple GPUs for Large Language Models",
   "summary": "When one GPU isn't enough to serve a model, you need a strategy—and there are three fundamentally different approaches. This video teaches data parallelism (copies of the model), tensor parallelism (splitting one calculation across GPUs), and pipeline parallelism (splitting layers into stages), along with the real mistakes teams make when deploying them. You'll finish understanding exactly when and why to use each technique in production systems.",
   "runs": "7:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "One GPU Was Never Going to Be Enough"
    },
    {
     "at": "0:44",
     "title": "Copies of the Whole Model — Data Parallelism"
    },
    {
     "at": "1:44",
     "title": "When the Model Doesn't Fit on One Card"
    },
    {
     "at": "2:27",
     "title": "Splitting the Work Inside a Single Step — Tensor Parallelism"
    },
    {
     "at": "3:37",
     "title": "Splitting the Model Into Stages — Pipeline Parallelism"
    },
    {
     "at": "4:38",
     "title": "Maya Checks Her Understanding"
    },
    {
     "at": "5:27",
     "title": "Where Teams Get This Wrong"
    },
    {
     "at": "6:17",
     "title": "Putting It Together"
    }
   ],
   "tags": [
    "GPU parallelism",
    "data parallelism",
    "tensor parallelism",
    "pipeline parallelism",
    "large language models",
    "distributed inference",
    "model scaling",
    "GPU optimization",
    "machine learning deployment",
    "deep learning infrastructure"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Shipping LLMs: Latency, Costs, and Operating at Scale",
   "summary": "Once an LLM is live in production, the questions change from \"how does it work\" to \"how do we know it's healthy and what does it cost?\" Learn what metrics actually matter (p99 latency and time-to-first-token, not averages), how to instrument your dashboard, why autoscaling fails for models, and the four silent failure modes that break systems at 3 AM.",
   "runs": "7:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Asks Before Launch"
    },
    {
     "at": "0:36",
     "title": "Stop Measuring the Average"
    },
    {
     "at": "1:58",
     "title": "Two Clocks, Not One"
    },
    {
     "at": "3:04",
     "title": "The Machine That Wakes Up Slowly"
    },
    {
     "at": "4:10",
     "title": "What The Dashboard Should Actually Show"
    },
    {
     "at": "5:06",
     "title": "What Actually Moves The Bill"
    },
    {
     "at": "6:12",
     "title": "The Three A.M. List"
    },
    {
     "at": "7:02",
     "title": "Saying It Back"
    }
   ],
   "tags": [
    "LLM deployment",
    "production systems",
    "latency monitoring",
    "cost optimization",
    "p99 metrics",
    "autoscaling",
    "queue depth",
    "time-to-first-token",
    "observability",
    "operational reliability"
   ],
   "src": "/media/learn/serving/serving-08.mp4",
   "poster": "/media/learn/serving/serving-08.jpg",
   "captions": "/media/learn/serving/serving-08.vtt"
  }
 ];

export const LEARNING: Lesson[] = [
  {
   "n": 1,
   "title": "Fitting vs. Memorizing: How Models Really Learn",
   "summary": "Learn what it actually means for a model to \"learn\" from data by exploring the critical difference between fitting—finding a rule that generalizes to new examples—and memorizing, where a model perfectly predicts training data but fails on anything new. This video teaches you how to spot overfitting and underfitting using training and test sets, so your models solve real problems instead of just echoing patterns they've already seen.",
   "runs": "5:53",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:48",
     "title": "What Fitting Means"
    },
    {
     "at": "1:59",
     "title": "What Memorising Looks Like"
    },
    {
     "at": "3:04",
     "title": "How We Actually Catch This"
    },
    {
     "at": "4:01",
     "title": "Where People Go Wrong"
    },
    {
     "at": "5:06",
     "title": "Putting It Together"
    }
   ],
   "tags": [
    "machine learning",
    "overfitting",
    "underfitting",
    "model fitting",
    "training vs test",
    "generalization",
    "parameters",
    "loss function",
    "memorization"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Even Mean? Linear Regression Fundamentals",
   "summary": "Learn what 'best fit' actually means mathematically when fitting a line to data. You'll understand the linear model (rent-hat = w × size + b), how residuals measure prediction error, and why we use sum of squared errors (SSE) to evaluate fit—transforming a vague concept into something you can actually compute and optimize.",
   "runs": "5:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "What Does 'Best Fit' Even Mean?"
    },
    {
     "at": "0:45",
     "title": "The Linear Model"
    },
    {
     "at": "1:41",
     "title": "The Residual: How Wrong Were We?"
    },
    {
     "at": "2:25",
     "title": "Turning Residuals Into One Number"
    },
    {
     "at": "3:12",
     "title": "So How Do You Find That Best Line?"
    },
    {
     "at": "3:45",
     "title": "Where People Trip Up"
    },
    {
     "at": "4:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "linear regression",
    "best fit line",
    "residuals",
    "sum of squared errors",
    "modeling",
    "statistics",
    "least squares",
    "prediction error",
    "data fitting",
    "machine learning basics"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Models Learn: Loss Functions and Gradient Descent",
   "summary": "This video explains how machine learning models actually learn by adjusting their parameters. You'll learn how loss functions measure prediction errors, how gradients point toward improvement, and how gradient descent uses small repeated steps to find better knob settings—the fundamental mechanism behind all model training.",
   "runs": "7:08",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: what does 'learning' even mean?"
    },
    {
     "at": "0:41",
     "title": "Part one: the loss function"
    },
    {
     "at": "2:02",
     "title": "Part two: which way is downhill?"
    },
    {
     "at": "3:07",
     "title": "Part three: gradient descent, the actual recipe"
    },
    {
     "at": "4:21",
     "title": "Walking it through with real numbers"
    },
    {
     "at": "5:20",
     "title": "Where people trip up"
    },
    {
     "at": "6:12",
     "title": "Recap"
    }
   ],
   "tags": [
    "machine learning",
    "gradient descent",
    "loss function",
    "model training",
    "parameters",
    "optimization",
    "learning rate",
    "calculus",
    "neural networks",
    "how models learn"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting vs Underfitting: Train, Validate, and Test Your Model",
   "summary": "Learn why zero training error is a red flag and how to spot when your model memorizes noise instead of learning patterns. This video teaches you to split data into training, validation, and test sets, recognize overfitting and underfitting, and use regularization to build models that actually work on new data.",
   "runs": "6:24",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Model That Aced the Homework"
    },
    {
     "at": "0:48",
     "title": "Two Kinds of Error"
    },
    {
     "at": "1:34",
     "title": "Overfitting: The Wiggly Curve"
    },
    {
     "at": "2:31",
     "title": "Underfitting: The Model That's Too Lazy"
    },
    {
     "at": "3:16",
     "title": "The Tradeoff: Bias and Variance"
    },
    {
     "at": "4:14",
     "title": "Catching It Before You Ship It"
    },
    {
     "at": "4:55",
     "title": "A Quick Fix: Regularization"
    },
    {
     "at": "5:37",
     "title": "Recap"
    }
   ],
   "tags": [
    "overfitting",
    "underfitting",
    "bias-variance tradeoff",
    "model validation",
    "regularization",
    "training error",
    "test error",
    "machine learning fundamentals",
    "model evaluation",
    "generalization"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "Logistic Regression: Predicting Categories Instead of Numbers",
   "summary": "Learn how to shift from predicting quantities to predicting categories using logistic regression. This video explains why linear regression fails for classification problems, introduces the sigmoid function to map predictions between 0 and 1, and shows how decision boundaries split data into yes/no predictions. You'll understand how to set thresholds and avoid common mistakes when building category-prediction models.",
   "runs": "6:30",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: what if the answer isn't a number?"
    },
    {
     "at": "0:56",
     "title": "Why not just reuse linear regression?"
    },
    {
     "at": "1:40",
     "title": "The sigmoid function"
    },
    {
     "at": "2:57",
     "title": "A worked example with real numbers"
    },
    {
     "at": "3:55",
     "title": "What a decision boundary looks like"
    },
    {
     "at": "4:41",
     "title": "The mistakes people make"
    },
    {
     "at": "5:38",
     "title": "Recap"
    }
   ],
   "tags": [
    "logistic regression",
    "classification",
    "sigmoid function",
    "decision boundary",
    "machine learning",
    "categorical prediction",
    "probability",
    "threshold",
    "linear regression",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Confusion Matrix, Precision, and Recall",
   "summary": "Learn why accuracy alone is a misleading metric for evaluating machine learning models, especially with imbalanced data. This video teaches you how to build and interpret a confusion matrix, calculate precision and recall, and avoid the critical mistake of testing on training data—so you can actually know whether your model works.",
   "runs": "6:37",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:42",
     "title": "Why Accuracy Lies"
    },
    {
     "at": "1:42",
     "title": "The Confusion Matrix"
    },
    {
     "at": "2:59",
     "title": "Precision and Recall"
    },
    {
     "at": "4:26",
     "title": "The Trap of Testing on What You Trained On"
    },
    {
     "at": "5:36",
     "title": "Recap"
    }
   ],
   "tags": [
    "machine learning",
    "model evaluation",
    "confusion matrix",
    "precision",
    "recall",
    "accuracy",
    "class imbalance",
    "train-test split",
    "classification metrics",
    "data science"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "The Model That Was Too Good: Spotting Data Leakage",
   "summary": "Learn why a model that performs perfectly on test data might fail completely in the real world — the trap of data leakage. This video teaches you how to build features carefully, handle missing data without introducing bias, and spot when information sneaks into your training that you wouldn't actually have at prediction time.",
   "runs": "7:56",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Model That Was Too Good"
    },
    {
     "at": "0:50",
     "title": "What a Feature Actually Is"
    },
    {
     "at": "1:43",
     "title": "Why Distance Falls Apart Without Scaling"
    },
    {
     "at": "2:53",
     "title": "Categories Without Inventing an Order"
    },
    {
     "at": "3:54",
     "title": "What To Do With Missing Values"
    },
    {
     "at": "4:36",
     "title": "Leakage Part One: The Column Recorded Too Late"
    },
    {
     "at": "5:37",
     "title": "Leakage Part Two: Averaging Before Splitting, and the Date That Knows"
    },
    {
     "at": "6:59",
     "title": "Recap"
    }
   ],
   "tags": [
    "data leakage",
    "feature engineering",
    "machine learning",
    "data preprocessing",
    "train test split",
    "categorical encoding",
    "scaling",
    "data science"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "End-to-End Machine Learning: The Full Pipeline",
   "summary": "Watch all seven steps of building a predictive model work together as one complete system—from cleaning raw apartment data through training and testing. You'll see the exact order to follow: split your data first, build features, define your model and loss function, run gradient descent with regularization, and validate honestly on held-out test data. By the end, you'll understand how to build a trustworthy formula that predicts rent from size, distance, age, and floor.",
   "runs": "5:02",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Whole Thing, Start to Finish"
    },
    {
     "at": "0:31",
     "title": "Step One and Two: Data and Features"
    },
    {
     "at": "1:13",
     "title": "Step Three and Four: Model and Loss"
    },
    {
     "at": "1:51",
     "title": "Step Five: Gradient Descent Finds the Weights"
    },
    {
     "at": "2:24",
     "title": "Step Six and Seven: Split It, Then Rein It In"
    },
    {
     "at": "3:05",
     "title": "Maya Checks Her Understanding"
    },
    {
     "at": "3:42",
     "title": "Where People Trip"
    },
    {
     "at": "4:24",
     "title": "Recap: The Full Pipeline"
    }
   ],
   "tags": [
    "machine learning",
    "linear regression",
    "gradient descent",
    "training pipeline",
    "regularization",
    "train-test split",
    "feature engineering",
    "loss function",
    "model validation",
    "overfitting"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Fairly",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation solves this problem. You'll discover how to compare machine learning models fairly by rotating which data gets tested, and learn two critical mistakes to avoid when implementing it.",
   "runs": "6:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Split That Got Lucky"
    },
    {
     "at": "0:42",
     "title": "Why the Split Wiggles"
    },
    {
     "at": "1:33",
     "title": "Defining K-Fold Cross-Validation"
    },
    {
     "at": "2:36",
     "title": "Cross-Validation on the Rent Model"
    },
    {
     "at": "3:23",
     "title": "Using It to Compare Models"
    },
    {
     "at": "4:10",
     "title": "Two Ways to Get This Wrong"
    },
    {
     "at": "5:14",
     "title": "Recap"
    }
   ],
   "tags": [
    "cross-validation",
    "k-fold",
    "model evaluation",
    "train-test split",
    "machine learning",
    "data splitting",
    "model comparison",
    "mean absolute error"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees for Prediction: From Splits to Leaves",
   "summary": "Learn how decision trees predict values by asking a series of yes-or-no questions about your data, starting at a root node and following branches through splits until reaching a leaf that gives the answer. You'll understand how trees choose which questions to ask by measuring variance (for numbers) or impurity (for categories), and discover why letting a tree grow too deep leads to overfitting rather than learning real patterns.",
   "runs": "5:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:43",
     "title": "Splits, roots, and leaves"
    },
    {
     "at": "1:45",
     "title": "Picking the first question"
    },
    {
     "at": "3:06",
     "title": "Classification trees and impurity"
    },
    {
     "at": "3:56",
     "title": "Growing too deep"
    },
    {
     "at": "5:01",
     "title": "Putting it together"
    }
   ],
   "tags": [
    "decision trees",
    "regression trees",
    "classification trees",
    "variance",
    "impurity",
    "overfitting",
    "machine learning",
    "prediction models",
    "splits and leaves",
    "tree depth"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Bagging and Random Forests: Why Many Weak Models Beat One Strong One",
   "summary": "Learn why training many simple decision trees on slightly different samples and averaging their predictions often outperforms a single carefully-tuned tree. This video explains bagging and random forests through apartment price prediction, showing how reducing variance through ensemble methods can lead to more stable and reliable predictions than relying on any single model.",
   "runs": "6:49",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:31",
     "title": "Why one tree wobbles"
    },
    {
     "at": "1:21",
     "title": "Bootstrap sampling"
    },
    {
     "at": "2:08",
     "title": "Bagging: average the votes"
    },
    {
     "at": "3:09",
     "title": "The bias-variance intuition"
    },
    {
     "at": "4:01",
     "title": "A cousin: random forests"
    },
    {
     "at": "4:51",
     "title": "Common mistakes"
    },
    {
     "at": "5:54",
     "title": "Recap"
    }
   ],
   "tags": [
    "bagging",
    "bootstrap sampling",
    "random forests",
    "ensemble learning",
    "decision trees",
    "variance reduction",
    "machine learning",
    "model averaging",
    "bootstrap aggregating"
   ],
   "src": "/media/learn/learning/learning-11.mp4",
   "poster": "/media/learn/learning/learning-11.jpg",
   "captions": "/media/learn/learning/learning-11.vtt"
  },
  {
   "n": 12,
   "title": "Hyperparameters: Choosing Settings Before Training",
   "summary": "Learn the difference between parameters (found during training) and hyperparameters (chosen before training), and discover why the numbers you pick matter enormously. This video teaches you how to use validation sets and grid search to find the best hyperparameter values without cheating your test set, so your final model performance is actually trustworthy.",
   "runs": "6:20",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Knob Question"
    },
    {
     "at": "0:46",
     "title": "Parameter vs Hyperparameter"
    },
    {
     "at": "1:48",
     "title": "Why the Knob Setting Matters"
    },
    {
     "at": "2:30",
     "title": "Using a Validation Set to Choose"
    },
    {
     "at": "3:27",
     "title": "Maya Checks Her Understanding"
    },
    {
     "at": "4:10",
     "title": "Grid Search and Cross-Validation"
    },
    {
     "at": "4:58",
     "title": "Where People Go Wrong"
    },
    {
     "at": "5:35",
     "title": "Recap"
    }
   ],
   "tags": [
    "hyperparameters",
    "parameters",
    "learning rate",
    "lambda",
    "regularization",
    "validation set",
    "grid search",
    "cross-validation",
    "model tuning",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Imbalanced Data: Why Accuracy Fails and How to Fix It",
   "summary": "When you're trying to predict something rare (like scams in apartment listings), a model that always guesses \"not a scam\" can claim 99% accuracy while catching zero scams. Learn why accuracy is misleading for imbalanced data, how to use precision, recall, and confusion matrices to see what's really happening, and what techniques (resampling, class weights, thresholds) actually fix the problem.",
   "runs": "7:17",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Ninety-Nine Percent Trap"
    },
    {
     "at": "0:47",
     "title": "The Base Rate and Why Accuracy Lies"
    },
    {
     "at": "1:34",
     "title": "The Confusion Matrix"
    },
    {
     "at": "2:24",
     "title": "Precision and Recall"
    },
    {
     "at": "3:22",
     "title": "The Precision-Recall Tradeoff"
    },
    {
     "at": "4:22",
     "title": "Fixing the Imbalance: Resampling and Weights"
    },
    {
     "at": "5:20",
     "title": "Mistakes People Make"
    },
    {
     "at": "6:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "imbalanced data",
    "precision and recall",
    "confusion matrix",
    "class imbalance",
    "decision threshold",
    "base rate",
    "oversampling",
    "class weights",
    "machine learning",
    "model evaluation"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Unsupervised Learning and K-Means Clustering",
   "summary": "Learn how to find patterns and structure in data without a labeled answer key using unsupervised learning and the k-means clustering algorithm. This video teaches you how k-means groups similar data points together, how to choose the right number of clusters, and common mistakes to avoid like forgetting to scale your features or ignoring outliers.",
   "runs": "8:57",
   "chapters": [
    {
     "at": "0:00",
     "title": "No Labels This Time"
    },
    {
     "at": "1:01",
     "title": "Defining Unsupervised Learning"
    },
    {
     "at": "2:09",
     "title": "Meet K-Means"
    },
    {
     "at": "3:38",
     "title": "Sorting the Apartments by Hand"
    },
    {
     "at": "5:24",
     "title": "How Many Clusters?"
    },
    {
     "at": "6:40",
     "title": "Where People Go Wrong"
    },
    {
     "at": "7:50",
     "title": "Putting It Together"
    }
   ],
   "tags": [
    "unsupervised learning",
    "k-means clustering",
    "clustering algorithm",
    "machine learning",
    "data grouping",
    "elbow method",
    "feature scaling",
    "centroids",
    "data analysis",
    "pattern recognition"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Principal Component Analysis: Cleaning Up High-Dimensional Data",
   "summary": "Learn how to handle datasets with too many features using Principal Component Analysis (PCA). This video teaches you why high-dimensional data becomes sparse and redundant, then walks through how PCA identifies the most important directions of variance in your data so you can keep only the essential components. You'll understand covariance matrices, eigenvectors, and the critical mistakes to avoid when applying PCA.",
   "runs": "8:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Spreadsheet That Won't Stop Growing"
    },
    {
     "at": "1:00",
     "title": "The Curse of Dimensionality"
    },
    {
     "at": "2:14",
     "title": "When Columns Say the Same Thing Twice"
    },
    {
     "at": "3:02",
     "title": "PCA: Finding the Directions That Matter"
    },
    {
     "at": "4:39",
     "title": "Under the Hood: Covariance and Eigenvectors"
    },
    {
     "at": "5:50",
     "title": "Where People Go Wrong With PCA"
    },
    {
     "at": "7:04",
     "title": "Recap"
    }
   ],
   "tags": [
    "PCA",
    "principal component analysis",
    "dimensionality reduction",
    "covariance matrix",
    "eigenvectors",
    "feature selection",
    "variance",
    "data preprocessing",
    "high-dimensional data",
    "standardization"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "After Training: Calibration, Explanation, and Drift",
   "summary": "A high-accuracy model in the lab isn't ready for production. This video teaches three critical checks you need before deployment: calibration (ensuring confidence scores are honest), explanation (showing why individual predictions were made), and drift detection (catching when your live data no longer matches your training data). You'll learn how to spot and fix these issues before they surprise you in the real world.",
   "runs": "6:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Model Is Done Training. Now What?"
    },
    {
     "at": "0:51",
     "title": "Confidence That Means Something"
    },
    {
     "at": "2:23",
     "title": "Fixing an Overconfident Model"
    },
    {
     "at": "3:02",
     "title": "Why Did It Say No?"
    },
    {
     "at": "4:24",
     "title": "The World Keeps Moving"
    },
    {
     "at": "5:30",
     "title": "Where People Trip Up"
    },
    {
     "at": "6:13",
     "title": "Putting the Three Together"
    }
   ],
   "tags": [
    "model calibration",
    "model deployment",
    "machine learning in production",
    "SHAP explanation",
    "data drift",
    "concept drift",
    "confidence scores",
    "model monitoring"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks: From Logistic Regression to Stacked Neurons",
   "summary": "Discover that neural networks aren't entirely new—a single neuron is just logistic regression. Learn why stacking neurons without nonlinearity adds nothing, but adding activation functions between layers unlocks new representational power. Walk through the algebra and architecture to understand exactly how neural networks go beyond what linear models can do.",
   "runs": "6:58",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:39",
     "title": "Logistic regression, redrawn as a neuron"
    },
    {
     "at": "1:48",
     "title": "Why stacking lines buys you nothing"
    },
    {
     "at": "3:14",
     "title": "What one nonlinearity buys you"
    },
    {
     "at": "4:27",
     "title": "The shape: layers and parameter count"
    },
    {
     "at": "5:22",
     "title": "The mistakes people make"
    },
    {
     "at": "6:07",
     "title": "Recap"
    }
   ],
   "tags": [
    "neural networks",
    "logistic regression",
    "activation functions",
    "sigmoid",
    "nonlinearity",
    "hidden layers",
    "deep learning",
    "machine learning fundamentals",
    "network architecture",
    "parameters"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "What Hidden Units Actually Do: Activation Functions and Feature Learning",
   "summary": "Learn what's inside those hidden circles in neural networks—how activation functions like ReLU create non-linearity, and how hidden units end up tuned to weighted combinations of inputs rather than individual features. By the end, you'll be able to look at a hidden unit and describe roughly what pattern it responds to, and understand why learned features lack the explainability of hand-built columns.",
   "runs": "7:38",
   "chapters": [
    {
     "at": "0:00",
     "title": "The box with a hidden layer"
    },
    {
     "at": "0:49",
     "title": "The menu of activations"
    },
    {
     "at": "1:51",
     "title": "ReLU and why it won"
    },
    {
     "at": "2:34",
     "title": "The dying-ReLU caveat"
    },
    {
     "at": "3:15",
     "title": "A hidden unit learns a feature, not a column"
    },
    {
     "at": "4:26",
     "title": "When the rent table is the wrong shape"
    },
    {
     "at": "5:08",
     "title": "The cost: no names"
    },
    {
     "at": "5:46",
     "title": "Width versus depth"
    },
    {
     "at": "6:20",
     "title": "Mistakes people make"
    },
    {
     "at": "6:52",
     "title": "Recap"
    }
   ],
   "tags": [
    "neural networks",
    "hidden units",
    "activation functions",
    "ReLU",
    "sigmoid",
    "feature learning",
    "gradient descent",
    "deep learning",
    "neural network training",
    "explainability"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: The Chain Rule Applied to Neural Networks",
   "summary": "Learn how gradients flow backward through a multi-layer neural network using the chain rule—the key mechanism that allows weights buried deep in the network to learn. This video builds intuition with a concrete example, showing exactly how each weight gets blamed for the loss and updated, and explains why deep networks face vanishing and exploding gradient problems.",
   "runs": "7:54",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:44",
     "title": "The Tiny Network"
    },
    {
     "at": "1:26",
     "title": "Forward Pass, With Real Numbers"
    },
    {
     "at": "2:22",
     "title": "Why We Kept Every Number"
    },
    {
     "at": "3:07",
     "title": "Backward Pass: Blame at the Output"
    },
    {
     "at": "4:05",
     "title": "Passing Blame Further Back"
    },
    {
     "at": "5:07",
     "title": "One Update, Done"
    },
    {
     "at": "5:45",
     "title": "When the Chain Gets Long"
    },
    {
     "at": "6:31",
     "title": "What Backprop Actually Is"
    },
    {
     "at": "7:17",
     "title": "Recap"
    }
   ],
   "tags": [
    "backpropagation",
    "gradient descent",
    "chain rule",
    "neural networks",
    "deep learning",
    "backprop",
    "gradients",
    "vanishing gradients",
    "ReLU",
    "training"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Neural Networks: Hyperparameters and Practical Techniques",
   "summary": "Learn the practical skills needed to actually train a neural network—the knobs and settings that gradient descent alone doesn't tell you. You'll master weight initialization, learning rate selection, batch size trade-offs, and regularization techniques like dropout, so you can diagnose what's wrong when your model fails and get it working right.",
   "runs": "9:52",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Gap Between Knowing the Maths and Getting a Model"
    },
    {
     "at": "0:48",
     "title": "Weight Initialisation — Breaking the Symmetry"
    },
    {
     "at": "2:11",
     "title": "Learning Rate — the One Knob That Matters Most"
    },
    {
     "at": "3:27",
     "title": "Batch Size — Noise Versus Hardware"
    },
    {
     "at": "4:47",
     "title": "Epochs and the Curve That Tells You Everything"
    },
    {
     "at": "5:55",
     "title": "Regularisers Built for Networks"
    },
    {
     "at": "7:24",
     "title": "Where the Rent Table Stops Being the Right Shape"
    },
    {
     "at": "8:04",
     "title": "Reading the Loss Curve — a Checklist"
    },
    {
     "at": "8:56",
     "title": "Recap — From Zero Weights to a Converged Model"
    }
   ],
   "tags": [
    "neural networks",
    "hyperparameters",
    "learning rate",
    "batch size",
    "weight initialization",
    "dropout",
    "regularization",
    "loss curves",
    "deep learning",
    "training"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutional Neural Networks: Why Structure Matters for Images",
   "summary": "This video explains why images need a different approach than tables in neural networks. You'll learn how convolutional kernels slide across images instead of using expensive fully-connected layers, and why parameter sharing, locality, and translation invariance make this approach work so well for detecting edges, textures, and patterns at different depths.",
   "runs": "8:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "The rent table is the wrong shape"
    },
    {
     "at": "0:58",
     "title": "Why a fully connected layer chokes on pixels"
    },
    {
     "at": "2:06",
     "title": "The fix: a small kernel that slides"
    },
    {
     "at": "2:53",
     "title": "Doing it by hand: a 3 by 3 edge kernel"
    },
    {
     "at": "4:14",
     "title": "Sharing, locality, invariance"
    },
    {
     "at": "5:07",
     "title": "Stride, padding, channels, pooling"
    },
    {
     "at": "6:16",
     "title": "What a stack of convolutions learns"
    },
    {
     "at": "7:01",
     "title": "Where people trip up"
    },
    {
     "at": "7:42",
     "title": "Recap: structure beats hoping"
    }
   ],
   "tags": [
    "convolutional neural networks",
    "image recognition",
    "kernels",
    "filters",
    "parameter sharing",
    "edge detection",
    "stride and padding",
    "deep learning",
    "computer vision",
    "neural network architecture"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Words into Numbers for Machine Learning",
   "summary": "Learn why simple approaches to encoding words—assigning integers or using one-hot vectors—fail, and discover how embeddings solve the problem by learning dense vectors from context. This video teaches you how words can be represented as meaningful numbers that capture semantic relationships, and why a single vector per word still has limits.",
   "runs": "8:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "A word is not a number"
    },
    {
     "at": "0:54",
     "title": "Wrong answer one: just number them"
    },
    {
     "at": "1:33",
     "title": "Wrong answer two: one-hot vectors"
    },
    {
     "at": "2:19",
     "title": "The idea: learn a dense vector from context"
    },
    {
     "at": "3:28",
     "title": "Seeing it: a small vocabulary in two dimensions"
    },
    {
     "at": "4:21",
     "title": "The famous arithmetic, done honestly"
    },
    {
     "at": "5:22",
     "title": "One vector per word isn't enough"
    },
    {
     "at": "6:09",
     "title": "The link back to part fifteen"
    },
    {
     "at": "6:49",
     "title": "Where people go wrong"
    },
    {
     "at": "7:20",
     "title": "Recap: back to the rents"
    }
   ],
   "tags": [
    "embeddings",
    "word vectors",
    "natural language processing",
    "categorical features",
    "one-hot encoding",
    "feature representation",
    "machine learning fundamentals",
    "semantic meaning",
    "neural networks"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "What Is a Transformer? Building It From the Ground Up",
   "summary": "Learn what a transformer is by building one from first principles, starting with the core problem it solves: how language models can process entire sentences at once instead of sequentially. You'll understand how attention works—queries, keys, and values—and how stacking attention blocks with feed-forward layers, positional encoding, and residual connections creates a large language model.",
   "runs": "9:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Fading Memory Problem"
    },
    {
     "at": "0:55",
     "title": "The Fix: Look at Everything, Weighted by Relevance"
    },
    {
     "at": "1:48",
     "title": "Naming the Parts: Query, Key, Value"
    },
    {
     "at": "2:51",
     "title": "Computing One Attention Row by Hand"
    },
    {
     "at": "4:12",
     "title": "Why the Rent Table Doesn't Fit Here"
    },
    {
     "at": "4:49",
     "title": "Assembling the Transformer Block"
    },
    {
     "at": "6:00",
     "title": "Adding Back a Sense of Order"
    },
    {
     "at": "6:47",
     "title": "So What Is a Large Language Model?"
    },
    {
     "at": "7:41",
     "title": "Where People Get Confused"
    },
    {
     "at": "8:33",
     "title": "Recap"
    }
   ],
   "tags": [
    "transformer",
    "attention mechanism",
    "neural networks",
    "language models",
    "machine learning",
    "deep learning",
    "query key value",
    "multi-head attention",
    "sequence processing"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When to Use Deep Learning: A Practical Decision Guide",
   "summary": "Deep learning isn't always the best choice—this video teaches exactly when it wins and when simpler methods like gradient boosting are the better tool. You'll learn the five practical questions to ask before picking a model, and why tabular data often calls for trees rather than neural networks.",
   "runs": "8:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Everyone Asks Eventually"
    },
    {
     "at": "0:39",
     "title": "What 'Structure' Actually Means"
    },
    {
     "at": "1:30",
     "title": "Tabular Relationships Are Often Additive"
    },
    {
     "at": "2:15",
     "title": "Less Data, Less Tuning"
    },
    {
     "at": "2:56",
     "title": "An Answer You Can Read"
    },
    {
     "at": "3:36",
     "title": "Where the Rent Table Isn't Invited"
    },
    {
     "at": "4:24",
     "title": "Transfer Learning Changes the Answer"
    },
    {
     "at": "5:17",
     "title": "The Costs People Forget to Mention"
    },
    {
     "at": "6:10",
     "title": "The Honest Decision Guide"
    },
    {
     "at": "6:52",
     "title": "Recap"
    },
    {
     "at": "7:35",
     "title": "Closing the Series"
    }
   ],
   "tags": [
    "deep learning",
    "gradient boosting",
    "model selection",
    "tabular data",
    "neural networks",
    "decision guide",
    "transfer learning",
    "interpretability",
    "machine learning",
    "when to use"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series Data: Why Random Splits Leak the Future",
   "summary": "Learn why k-fold cross-validation fails on time-ordered data and how it allows models to peek at future information. You'll master chronological splits, rolling-origin validation, and how to audit any dataset split to catch hidden leakage from autocorrelation, trend, and seasonality.",
   "runs": "7:30",
   "chapters": [
    {
     "at": "0:00",
     "title": "The debt from part nine comes due"
    },
    {
     "at": "0:40",
     "title": "Shuffle three years, train on the future"
    },
    {
     "at": "1:51",
     "title": "The fix, step one: a chronological split"
    },
    {
     "at": "2:27",
     "title": "Rolling-origin, or walk-forward, validation"
    },
    {
     "at": "3:28",
     "title": "The gap: when the label takes time to arrive"
    },
    {
     "at": "4:21",
     "title": "Why time series is a different kind of data: autocorrelation"
    },
    {
     "at": "5:09",
     "title": "Trend and seasonality, shown on the rent series"
    },
    {
     "at": "6:07",
     "title": "The audit question for any split"
    },
    {
     "at": "6:44",
     "title": "Recap"
    }
   ],
   "tags": [
    "time series",
    "cross-validation",
    "data leakage",
    "rolling-origin validation",
    "chronological split",
    "autocorrelation",
    "train-test split",
    "temporal data",
    "machine learning",
    "model validation"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: From Persistence to Predictions",
   "summary": "Learn how to build honest time series forecasts by starting with a deceptively simple baseline—the persistence model—and understanding why it's so hard to beat. This video teaches the core concepts of forecasting: decomposing series into trend, seasonality, and remainder; converting forecasting into standard regression using lag features; and why giving a range of predictions matters more than a single number.",
   "runs": "7:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:53",
     "title": "The Baseline: Persistence"
    },
    {
     "at": "1:45",
     "title": "Trend, Seasonality, Remainder"
    },
    {
     "at": "2:44",
     "title": "Lag Features: The Bridge Back"
    },
    {
     "at": "4:03",
     "title": "Metrics: Honest Errors"
    },
    {
     "at": "5:01",
     "title": "The Horizon Problem"
    },
    {
     "at": "5:43",
     "title": "Where People Go Wrong"
    },
    {
     "at": "6:09",
     "title": "What Can't Be Forecast"
    },
    {
     "at": "6:47",
     "title": "Recap"
    }
   ],
   "tags": [
    "forecasting",
    "time series",
    "persistence baseline",
    "lag features",
    "trend and seasonality",
    "prediction intervals",
    "regression",
    "error metrics",
    "MAE",
    "RMSE"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Good Models Can Lead to Bad Decisions",
   "summary": "Learn the critical difference between predictive questions (\"what will happen?\") and causal questions (\"what will happen if I do this?\")—and why a model can score perfectly on held-out data yet give terrible guidance for action. You'll see how confounders like building quality can make doormen look like they drive rent, then learn the discipline of asking the right question before you build anything.",
   "runs": "5:35",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Asked Yet"
    },
    {
     "at": "0:38",
     "title": "The Doorman That Predicts Beautifully"
    },
    {
     "at": "1:24",
     "title": "Two Different Questions, Defined"
    },
    {
     "at": "2:18",
     "title": "The Canonical Trap"
    },
    {
     "at": "3:07",
     "title": "Part Six's Best Metric, Still Wrong Basis"
    },
    {
     "at": "3:50",
     "title": "The Thing You Actually Want"
    },
    {
     "at": "4:40",
     "title": "The Discipline Before You Build"
    }
   ],
   "tags": [
    "causation",
    "prediction",
    "confounders",
    "causal inference",
    "counterfactual",
    "intervention vs observation",
    "model limitations",
    "data science fundamentals",
    "actionable insights",
    "do-calculus"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Causal Inference: Randomised Experiments and Why They Work",
   "summary": "Learn how randomisation lets you identify causal effects instead of just correlations, using a real example of a university shuttle stop and rent prices. You'll discover why randomising the right unit matters, how sample size determines confidence, and three critical mistakes that can break an experiment's validity—plus when randomisation simply isn't possible.",
   "runs": "7:49",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Experiments Answer"
    },
    {
     "at": "0:53",
     "title": "Why Randomising Buys the Guarantee"
    },
    {
     "at": "2:21",
     "title": "Running It on the Shuttle Stop"
    },
    {
     "at": "3:10",
     "title": "Randomise Buildings, Not Apartments"
    },
    {
     "at": "3:56",
     "title": "Sample Size and Two Kinds of Significance"
    },
    {
     "at": "4:52",
     "title": "Mistake One: Peeking and Stopping Early"
    },
    {
     "at": "5:43",
     "title": "Mistake Two and Three: Many Variants, and Interference"
    },
    {
     "at": "6:28",
     "title": "What an Experiment Cannot Do"
    },
    {
     "at": "7:01",
     "title": "Recap"
    }
   ],
   "tags": [
    "causal inference",
    "randomised experiments",
    "treatment effect",
    "statistical significance",
    "experimental design",
    "confounding variables",
    "hypothesis testing",
    "sample size",
    "randomisation",
    "shuttle stop example"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Causal Inference: Did the Shuttle Stop Really Raise Rent?",
   "summary": "Learn how to distinguish correlation from causation when you can't run a randomized experiment. This video teaches three techniques—controlling for confounders, difference-in-differences, and matching—and shows you how to identify which variables to include and which to avoid, so you can make causal claims from observational data.",
   "runs": "7:14",
   "chapters": [
    {
     "at": "0:00",
     "title": "Did the Shuttle Really Change Rent?"
    },
    {
     "at": "0:58",
     "title": "The Confounder, Drawn as Three Nodes"
    },
    {
     "at": "2:02",
     "title": "Controlling — and Its Fatal Requirement"
    },
    {
     "at": "3:06",
     "title": "Difference in Differences"
    },
    {
     "at": "4:22",
     "title": "Matching — Like for Like"
    },
    {
     "at": "5:03",
     "title": "The Trap: Controlling for the Wrong Thing"
    },
    {
     "at": "6:07",
     "title": "What a Causal Claim Actually Warrants"
    }
   ],
   "tags": [
    "causal inference",
    "confounders",
    "regression",
    "difference in differences",
    "matching",
    "observational data",
    "causation vs correlation",
    "natural experiment",
    "mediators",
    "experimental design"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Reinforcement Learning: How Agents Learn by Acting",
   "summary": "This video introduces reinforcement learning through a concrete apartment rental pricing problem, showing how an agent learns by observing states, taking actions, and receiving rewards—where the challenge is figuring out which past decision caused a bad outcome. You'll learn how Q-learning estimates the value of state-action pairs, why discounting makes nearby rewards matter more than distant ones, and why simulators are essential for training agents without costly real-world mistakes.",
   "runs": "7:41",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Question With No Fixed Dataset"
    },
    {
     "at": "0:49",
     "title": "The Agent Setting Rent"
    },
    {
     "at": "1:50",
     "title": "Whose Fault Was the Bad Month?"
    },
    {
     "at": "2:52",
     "title": "The Value of a State, and Why Later Matters Less"
    },
    {
     "at": "3:56",
     "title": "Q-Learning: The Value of an Action"
    },
    {
     "at": "4:51",
     "title": "Where This Actually Earns Its Keep"
    },
    {
     "at": "5:56",
     "title": "Where People Trip"
    },
    {
     "at": "6:45",
     "title": "Recap"
    }
   ],
   "tags": [
    "reinforcement learning",
    "Q-learning",
    "credit assignment",
    "Markov decision process",
    "temporal discounting",
    "policy learning",
    "agent training",
    "reward signal"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "The Explore-Exploit Tradeoff: Bandits and Uncertainty",
   "summary": "Learn how to make smart decisions when you must learn from your own choices rather than a fixed dataset. This video teaches strategies for balancing exploration (trying new options) and exploitation (using what works best), from simple epsilon-greedy to the more sophisticated upper confidence bound and Thompson sampling methods, with apartment pricing as the running example.",
   "runs": "7:22",
   "chapters": [
    {
     "at": "0:00",
     "title": "Three Prices, One Dilemma"
    },
    {
     "at": "0:52",
     "title": "When Always-Exploit Fails"
    },
    {
     "at": "1:43",
     "title": "Epsilon-Greedy"
    },
    {
     "at": "2:41",
     "title": "Decaying Epsilon"
    },
    {
     "at": "3:14",
     "title": "Optimism in the Face of Uncertainty"
    },
    {
     "at": "4:34",
     "title": "Thompson Sampling"
    },
    {
     "at": "5:11",
     "title": "Regret: The Honest Score"
    },
    {
     "at": "5:45",
     "title": "Bandits Versus A/B Tests"
    },
    {
     "at": "6:32",
     "title": "Recap"
    }
   ],
   "tags": [
    "explore-exploit tradeoff",
    "multi-armed bandits",
    "upper confidence bound",
    "epsilon-greedy",
    "Thompson sampling",
    "regret",
    "decision-making",
    "uncertainty",
    "online learning",
    "A/B testing"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Questions, One Dataset: Choosing the Right ML Paradigm",
   "summary": "Learn which machine learning approach fits your question: supervised learning for prediction, unsupervised for structure, causal inference for interventions, or reinforcement learning for repeated action. After this video, you'll know how to identify what your question actually demands before writing any code, and avoid the critical mistake of answering with the wrong paradigm.",
   "runs": "7:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "Four Questions, One Dataset"
    },
    {
     "at": "0:50",
     "title": "Supervised: You Need Labels"
    },
    {
     "at": "1:45",
     "title": "Unsupervised: No Answer Key, Only Structure"
    },
    {
     "at": "2:41",
     "title": "Causal: An Intervention or an Assumption"
    },
    {
     "at": "4:05",
     "title": "The Question We Can't Answer Yet"
    },
    {
     "at": "4:51",
     "title": "Reinforcement: Act, Observe, Repeat"
    },
    {
     "at": "5:49",
     "title": "The Mistake: Answering with the Wrong Paradigm"
    },
    {
     "at": "6:23",
     "title": "The Decision Guide, Recapped"
    },
    {
     "at": "7:05",
     "title": "Closing the Series"
    }
   ],
   "tags": [
    "machine learning paradigms",
    "supervised learning",
    "unsupervised learning",
    "causal inference",
    "reinforcement learning",
    "model selection",
    "decision framework",
    "data science workflow"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn how to fix overfitting by adding penalties to coefficient size in your loss function. This lesson builds three regularization methods from the ground up—ridge regression, lasso, and elastic net—and shows you why lasso can shrink coefficients exactly to zero while ridge only shrinks them smoothly.",
   "runs": "8:11",
   "chapters": [
    {
     "at": "0:00",
     "title": "The gap a coverage check found"
    },
    {
     "at": "0:49",
     "title": "The coefficients go insane"
    },
    {
     "at": "1:49",
     "title": "Ridge: squaring the price"
    },
    {
     "at": "3:15",
     "title": "Lasso: the same picture, completely different"
    },
    {
     "at": "4:12",
     "title": "Why: the diamond has corners"
    },
    {
     "at": "5:26",
     "title": "Elastic net: when two features are twins"
    },
    {
     "at": "6:10",
     "title": "Choosing lambda, and the mistake that wastes a day"
    },
    {
     "at": "7:17",
     "title": "Recap"
    }
   ],
   "tags": [
    "regularization",
    "ridge regression",
    "lasso",
    "elastic net",
    "overfitting",
    "cross-validation",
    "feature selection",
    "coefficients",
    "lambda tuning",
    "standardization"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: Sequential Error Correction",
   "summary": "Learn how gradient boosting differs from bagging by training sequential weak models that specifically correct previous errors instead of averaging independent opinions. This video walks through concrete examples with apartment rental data to show how each new stump targets residuals, scaled by a learning rate, gradually reducing prediction error—and why this approach is called gradient boosting.",
   "runs": "8:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Gap in the Coverage"
    },
    {
     "at": "0:43",
     "title": "Independent Opinions vs. A Chain of Corrections"
    },
    {
     "at": "1:22",
     "title": "Round One: One Bad Stump"
    },
    {
     "at": "2:26",
     "title": "Round Two: Fitting a Stump to the Errors"
    },
    {
     "at": "3:26",
     "title": "Five Rounds, Creeping Toward Truth"
    },
    {
     "at": "4:16",
     "title": "Where the Name Comes From"
    },
    {
     "at": "4:58",
     "title": "The Ancestor: AdaBoost"
    },
    {
     "at": "5:38",
     "title": "What Modern Libraries Bolt On"
    },
    {
     "at": "6:31",
     "title": "Where Boosting Bites You"
    },
    {
     "at": "7:19",
     "title": "Recap"
    }
   ],
   "tags": [
    "gradient boosting",
    "boosting",
    "weak learners",
    "residuals",
    "XGBoost",
    "LightGBM",
    "AdaBoost",
    "tabular data",
    "ensemble methods",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Clustering Assumptions: K-means, Hierarchical, and DBSCAN",
   "summary": "K-means assumes round clusters and a known k, but those assumptions break on real data like rent prices across roads. This lesson reveals the hidden assumptions behind three clustering methods and teaches you how to choose the right one by matching its assumptions to your data's actual shape and structure.",
   "runs": "7:02",
   "chapters": [
    {
     "at": "0:00",
     "title": "A coverage gap and a question"
    },
    {
     "at": "0:47",
     "title": "K-means cuts the bands the wrong way"
    },
    {
     "at": "1:34",
     "title": "Hierarchical clustering: start from the picture"
    },
    {
     "at": "2:19",
     "title": "Reading the dendrogram"
    },
    {
     "at": "3:13",
     "title": "Linkage: how do you measure 'closest cluster'?"
    },
    {
     "at": "4:07",
     "title": "DBSCAN: density, not roundness"
    },
    {
     "at": "4:56",
     "title": "The honest cost of DBSCAN"
    },
    {
     "at": "5:40",
     "title": "A table to choose by"
    },
    {
     "at": "6:18",
     "title": "Recap"
    }
   ],
   "tags": [
    "clustering",
    "k-means",
    "hierarchical clustering",
    "DBSCAN",
    "assumptions",
    "dendrogram",
    "linkage",
    "machine learning",
    "data analysis",
    "unsupervised learning"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Beyond PCA: t-SNE and UMAP for curved data",
   "summary": "Learn why PCA fails on curved data structures and when to use t-SNE and UMAP instead. This lesson teaches you how each method works, what perplexity does, and most importantly—how to correctly interpret the visualizations these algorithms produce without falling into common traps.",
   "runs": "7:02",
   "chapters": [
    {
     "at": "0:00",
     "title": "The picture PCA can't draw"
    },
    {
     "at": "0:55",
     "title": "Watching PCA flatten the bend"
    },
    {
     "at": "1:31",
     "title": "t-SNE: keep neighbours as neighbours"
    },
    {
     "at": "2:37",
     "title": "Perplexity: how many neighbours to care about"
    },
    {
     "at": "3:21",
     "title": "UMAP: same job, faster, keeps more of the layout"
    },
    {
     "at": "4:06",
     "title": "The most important part: how to read the picture"
    },
    {
     "at": "5:30",
     "title": "The working rule"
    },
    {
     "at": "6:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "dimensionality reduction",
    "t-SNE",
    "UMAP",
    "PCA",
    "nonlinear methods",
    "data visualization",
    "perplexity",
    "manifold learning",
    "clustering",
    "interpretation"
   ],
   "src": "/media/learn/learning/learning-36.mp4",
   "poster": "/media/learn/learning/learning-36.jpg",
   "captions": "/media/learn/learning/learning-36.vtt"
  }
 ];

export const COUNTING: Lesson[] = [
  {
   "n": 1,
   "title": "Multiplication vs Addition in Counting: The Badge Code Problem",
   "summary": "Learn why we multiply instead of add when counting arrangements like badge codes, by visualizing problems as rectangles and trees. After watching, you'll know the fundamental difference between the multiplication rule (for independent sequential choices) and the addition rule (for separate non-overlapping cases), and you'll be able to solve counting problems with or without repetition allowed.",
   "runs": "8:43",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Badge Code Question"
    },
    {
     "at": "0:41",
     "title": "The Rectangle of Possibilities"
    },
    {
     "at": "1:57",
     "title": "Drawing the Tree"
    },
    {
     "at": "2:49",
     "title": "Extending to k Stages"
    },
    {
     "at": "3:47",
     "title": "With Replacement vs Without"
    },
    {
     "at": "4:50",
     "title": "The Rule That Saves You From Mistakes"
    },
    {
     "at": "6:30",
     "title": "The Partner Rule: When You Add Instead"
    },
    {
     "at": "7:29",
     "title": "Recap"
    }
   ],
   "tags": [
    "counting problems",
    "multiplication principle",
    "permutations",
    "combinatorics",
    "independent events",
    "badge codes",
    "discrete math",
    "probability foundations"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the different ways to arrange things in order using the multiplication principle—from arranging all items to selecting and ordering just some of them. You'll discover the factorial formula, understand when order matters versus when it doesn't, and be able to solve permutation problems by thinking through choices one slot at a time.",
   "runs": "5:44",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Podium Problem"
    },
    {
     "at": "0:48",
     "title": "Arranging Everything: Factorial"
    },
    {
     "at": "1:53",
     "title": "When You Don't Use Everything"
    },
    {
     "at": "3:07",
     "title": "Where People Trip Up"
    },
    {
     "at": "4:09",
     "title": "Put It Together: Password Case"
    },
    {
     "at": "4:54",
     "title": "Recap"
    }
   ],
   "tags": [
    "permutations",
    "factorial",
    "multiplication principle",
    "counting",
    "combinatorics",
    "arranging in order",
    "selecting and arranging",
    "order matters",
    "n choose r"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: Counting Groups Where Order Doesn't Matter",
   "summary": "Learn why picking committee members or lottery numbers requires different counting than assigning ordered roles. This video teaches the combinations formula (n choose k) by showing how many ways to arrange a group hide inside each selection, and how to recognize when order actually matters versus when it doesn't.",
   "runs": "6:43",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Committee Problem"
    },
    {
     "at": "0:49",
     "title": "Start With Order, On Purpose"
    },
    {
     "at": "1:37",
     "title": "How Many Orders Hide Inside One Group"
    },
    {
     "at": "2:36",
     "title": "The Combinations Formula"
    },
    {
     "at": "3:51",
     "title": "A New Example: Lottery Numbers"
    },
    {
     "at": "4:44",
     "title": "The Trap: Looks Ordered But Isn't"
    },
    {
     "at": "5:42",
     "title": "Recap"
    }
   ],
   "tags": [
    "combinations",
    "n choose k",
    "counting",
    "permutations vs combinations",
    "factorial",
    "unordered selection",
    "lottery",
    "committee problem",
    "discrete math",
    "counting principle"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "Combinatorial Identities: The Structure Behind Binomial Coefficients",
   "summary": "Discover that binomial coefficients C(n,k) aren't just formulas—they have deep structural properties that make calculations simpler and proofs nearly obvious. Learn five key identities (symmetry, Pascal's recurrence, the binomial theorem, 2^n, and the hockey-stick identity) by understanding them as counting arguments rather than algebraic tricks, so you can use them to dodge arithmetic and solve problems efficiently.",
   "runs": "8:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Question About Committees"
    },
    {
     "at": "0:46",
     "title": "Choosing Who's In vs Who's Out"
    },
    {
     "at": "2:01",
     "title": "Ada the Fixed Member"
    },
    {
     "at": "3:16",
     "title": "Expanding (1+x)^n by Counting"
    },
    {
     "at": "4:21",
     "title": "2 to the n, Proved Twice"
    },
    {
     "at": "5:52",
     "title": "The Hockey-Stick Shortcut"
    },
    {
     "at": "6:26",
     "title": "C(40,37) Without the Big Numbers"
    },
    {
     "at": "7:08",
     "title": "Recap"
    }
   ],
   "tags": [
    "binomial coefficients",
    "combinatorial identities",
    "Pascal's triangle",
    "binomial theorem",
    "counting arguments",
    "bijection",
    "combinatorics",
    "C(n,k)"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "The Four Types of Counting Problems",
   "summary": "Learn to sort any counting problem into one of four categories by asking two key questions: does order matter, and can things repeat? This video shows how the same items can produce wildly different answers depending on which type of problem you're solving, and teaches you the right counting method for each case—from passwords to committees to podium rankings.",
   "runs": "6:53",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Same Numbers, Different Answers"
    },
    {
     "at": "1:02",
     "title": "The Two Questions"
    },
    {
     "at": "1:46",
     "title": "Order Matters, Repeats Allowed"
    },
    {
     "at": "2:41",
     "title": "Order Matters, No Repeats"
    },
    {
     "at": "3:33",
     "title": "Order Doesn't Matter, No Repeats"
    },
    {
     "at": "4:29",
     "title": "Order Doesn't Matter, Repeats Allowed"
    },
    {
     "at": "5:13",
     "title": "Where People Slip Up"
    },
    {
     "at": "5:58",
     "title": "Recap"
    }
   ],
   "tags": [
    "counting principles",
    "permutations",
    "combinations",
    "multiplication principle",
    "order matters",
    "repetition allowed",
    "combinatorics",
    "problem-solving"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modelling Counting Problems: Breaking Down Word Problems into Stages",
   "summary": "Learn how to translate word problems into counting problems by breaking them into clear sequential stages. This video teaches you to identify whether order matters in your choices and how to determine the actual number of options at each stage—including when earlier choices affect later ones. Master the modelling skill that makes the multiplication principle simple to apply.",
   "runs": "5:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:42",
     "title": "Idea One: Break It Into Stages"
    },
    {
     "at": "1:41",
     "title": "Idea Two: Does Order Matter?"
    },
    {
     "at": "2:42",
     "title": "A Full Worked Example"
    },
    {
     "at": "3:53",
     "title": "Where People Go Wrong"
    },
    {
     "at": "4:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "counting principles",
    "combinatorics",
    "multiplication principle",
    "word problems",
    "problem modelling",
    "stages and sequences",
    "permutations",
    "decision trees",
    "order matters",
    "repeated choices"
   ],
   "src": "/media/learn/counting/counting-06.mp4",
   "poster": "/media/learn/counting/counting-06.jpg",
   "captions": "/media/learn/counting/counting-06.vtt"
  },
  {
   "n": 7,
   "title": "Combining Counting Tools: Multi-Step Problems",
   "summary": "Learn how to solve counting problems that require stacking multiple techniques together—like choosing a committee then arranging officers, or subtracting restricted cases from totals. This video covers the four most common mistakes that lead to double-counting or missed cases: treating unordered groups as ordered, guessing instead of counting restrictions, mishandling overlapping restrictions with inclusion-exclusion, and incorrectly selecting items with specific properties.",
   "runs": "8:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:46",
     "title": "Problem one: choose then arrange"
    },
    {
     "at": "2:14",
     "title": "Sanity check"
    },
    {
     "at": "2:46",
     "title": "Problem two: at least one restriction"
    },
    {
     "at": "4:06",
     "title": "Two restrictions overlapping"
    },
    {
     "at": "5:09",
     "title": "Problem three: exactly k defective"
    },
    {
     "at": "6:43",
     "title": "Sanity check on the shipment"
    },
    {
     "at": "7:15",
     "title": "The costly mistakes"
    },
    {
     "at": "8:12",
     "title": "Recap"
    }
   ],
   "tags": [
    "counting",
    "combinations",
    "permutations",
    "inclusion-exclusion",
    "probability",
    "exam mistakes",
    "combinatorics",
    "restrictions",
    "multi-step problems",
    "stacking methods"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Set Operations and Events: The Language of Probability",
   "summary": "Learn the foundational language of probability through set operations: unions, intersections, complements, and differences. Using a practical robotics sensor-testing scenario, you'll master how to translate real-world events into mathematical notation and understand key algebraic properties including De Morgan's Laws, so you can confidently turn English descriptions into precise set expressions.",
   "runs": "12:50",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Sensor, a Test, and a Question"
    },
    {
     "at": "0:50",
     "title": "The Experiment and Its Sample Space"
    },
    {
     "at": "1:58",
     "title": "An Event Is a Subset"
    },
    {
     "at": "3:17",
     "title": "Union Is 'Or', Intersection Is 'And'"
    },
    {
     "at": "4:33",
     "title": "Complement, Difference, and Disjoint"
    },
    {
     "at": "5:59",
     "title": "The Algebra: Commutativity, Associativity, Distributivity"
    },
    {
     "at": "7:29",
     "title": "De Morgan's Laws: Turning Hard Events Into Easy Ones"
    },
    {
     "at": "8:56",
     "title": "Countable and Uncountable, Briefly"
    },
    {
     "at": "9:50",
     "title": "Where People Slip Up"
    },
    {
     "at": "10:37",
     "title": "Translate Three Sentences"
    },
    {
     "at": "11:49",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability",
    "set operations",
    "sample space",
    "events",
    "union intersection",
    "complement",
    "De Morgan's laws",
    "mathematical notation",
    "discrete mathematics"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability as a Function: The Three Axioms",
   "summary": "Learn the formal definition of probability: a function that maps events to numbers and must satisfy three axioms—non-negativity, totality, and additivity. After this video, you'll understand what probability actually is, not just as intuition but as a mathematical definition, and you'll be able to derive new results from these axioms and identify the most common mistake when applying them.",
   "runs": "10:54",
   "chapters": [
    {
     "at": "0:00",
     "title": "What IS probability, actually?"
    },
    {
     "at": "1:10",
     "title": "The stage: sample space and events, one-line reminder"
    },
    {
     "at": "1:39",
     "title": "Axiom one: non-negativity"
    },
    {
     "at": "2:16",
     "title": "Axiom two: total probability is one"
    },
    {
     "at": "2:56",
     "title": "Axiom three: additivity, and the word DISJOINT"
    },
    {
     "at": "4:27",
     "title": "Finite versus countable additivity"
    },
    {
     "at": "5:33",
     "title": "Checking the axioms: equally likely outcomes"
    },
    {
     "at": "6:44",
     "title": "Checking the axioms: relative frequency"
    },
    {
     "at": "7:51",
     "title": "The first theorem: P of the empty set is zero"
    },
    {
     "at": "9:27",
     "title": "Where people go wrong"
    },
    {
     "at": "10:07",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability",
    "axioms",
    "functions",
    "sample space",
    "events",
    "additivity",
    "disjoint events",
    "Kolmogorov",
    "mathematical definition",
    "proof"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "Probability Rules: From Axioms to the Inclusion-Exclusion Principle",
   "summary": "Build essential probability rules directly from first principles, starting with the complement rule and working up to the inclusion-exclusion principle for overlapping events. Learn why \"at least one\" problems reduce to a single subtraction, and discover the two mistakes that trip up students on exams.",
   "runs": "10:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Six-Term Problem"
    },
    {
     "at": "1:00",
     "title": "The Complement Rule"
    },
    {
     "at": "2:26",
     "title": "Never Above One, and Bigger Sets Win"
    },
    {
     "at": "3:46",
     "title": "The General Addition Rule"
    },
    {
     "at": "5:16",
     "title": "Extending to Three Events"
    },
    {
     "at": "6:24",
     "title": "At Least One Becomes One Minus None"
    },
    {
     "at": "8:05",
     "title": "Where People Trip Up"
    },
    {
     "at": "9:07",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability",
    "axioms",
    "complement rule",
    "inclusion-exclusion",
    "union rule",
    "at least one",
    "mathematical derivation",
    "problem-solving"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability: Formula, Failures, and Applications",
   "summary": "This lesson connects counting (lessons 1-7) to probability rules (lessons 8-9) through the classical probability formula: when outcomes are equally likely, probability equals the count of favorable outcomes divided by total outcomes. Learn when this formula applies, common mistakes that trap even careful problem-solvers, and how to solve real-world probability problems using combinatorics tools like combinations and factorials.",
   "runs": "10:46",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:54",
     "title": "The Classical Probability Formula"
    },
    {
     "at": "2:24",
     "title": "When It Fails"
    },
    {
     "at": "3:43",
     "title": "Worked Example: The Committee"
    },
    {
     "at": "5:39",
     "title": "Worked Example: The Shipment"
    },
    {
     "at": "7:32",
     "title": "Worked Example: Side by Side"
    },
    {
     "at": "8:44",
     "title": "Two Common Mistakes"
    },
    {
     "at": "9:45",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability",
    "classical probability formula",
    "combinatorics",
    "equally likely outcomes",
    "sample space",
    "counting problems",
    "committees and arrangements",
    "common probability mistakes",
    "applied probability"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Continuity and Probability Interpretation",
   "summary": "This video builds two crucial foundations often rushed in probability courses: how probability behaves when events form infinite nested sequences, and what a probability number actually means when applied to a single outcome. You'll learn the continuity axiom through growing and shrinking sequences, see how it solves real problems like repeated testing, and discover the two legitimate interpretations of probability—long-run frequency and degree of belief—along with the common mistakes that conflate them.",
   "runs": "8:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Sensor, One Number"
    },
    {
     "at": "0:40",
     "title": "Nested Sets Growing Outward"
    },
    {
     "at": "1:56",
     "title": "Shrinking Sets and the Mirror Version"
    },
    {
     "at": "2:34",
     "title": "Will the Test Ever Catch the Defect?"
    },
    {
     "at": "3:45",
     "title": "Back to the One Sensor on the Bench"
    },
    {
     "at": "4:22",
     "title": "The Long-Run Reading"
    },
    {
     "at": "5:10",
     "title": "Degree of Belief, and Updating on a Test"
    },
    {
     "at": "6:29",
     "title": "Where People Slip"
    },
    {
     "at": "7:16",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability axioms",
    "continuity axiom",
    "nested sets",
    "limit of sequences",
    "probability interpretation",
    "frequentist vs subjective",
    "degree of belief",
    "diagnostic testing",
    "relative frequency",
    "probability foundations"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proving with Probability Axioms: The Four Essential Moves",
   "summary": "This lesson closes the gap between knowing the probability axioms and being able to use them in proofs. You'll learn the four core techniques—disjoint decomposition, the complement trick, monotonicity, and De Morgan's law—and see them applied to prove major results like the addition rule for three events and Boole's inequality. By the end, you'll know exactly what a full-marks proof looks like and how to cite your reasoning at every step.",
   "runs": "14:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Exams Actually Ask"
    },
    {
     "at": "1:08",
     "title": "The Four Moves, Named"
    },
    {
     "at": "3:01",
     "title": "Warm-Up Proof: Monotonicity"
    },
    {
     "at": "4:04",
     "title": "The Addition Rule for Three Events"
    },
    {
     "at": "6:32",
     "title": "Boole's Inequality: Bounding Without Computing"
    },
    {
     "at": "8:48",
     "title": "If P(A) is Zero"
    },
    {
     "at": "9:55",
     "title": "A Plausible Claim That's False"
    },
    {
     "at": "12:05",
     "title": "What Earns Full Marks"
    },
    {
     "at": "13:28",
     "title": "Recap: The Whole Toolkit"
    }
   ],
   "tags": [
    "probability axioms",
    "mathematical proof",
    "disjoint decomposition",
    "inclusion-exclusion principle",
    "Boole's inequality",
    "axiom three",
    "complement rule",
    "monotonicity",
    "exam preparation",
    "De Morgan's law"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Restricting the Sample Space",
   "summary": "Learn what conditional probability is and how it works: when you're told an event B has happened, you shrink your sample space down to just B and ask what fraction is also in event A. This video proves that conditional probability satisfies all the axioms of a probability measure, walks through a worked example with a sensor quality-control scenario, and exposes the critical mistake of confusing P(A given B) with P(B given A).",
   "runs": "11:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "Two different numbers about the same sensor"
    },
    {
     "at": "0:54",
     "title": "Restricting the sample space"
    },
    {
     "at": "2:22",
     "title": "On equally likely outcomes: just counting inside B"
    },
    {
     "at": "3:38",
     "title": "Proving conditioning is a genuine probability"
    },
    {
     "at": "6:03",
     "title": "Worked example: the full table, shaded"
    },
    {
     "at": "7:28",
     "title": "Worked example: the tree, shaded"
    },
    {
     "at": "8:41",
     "title": "The mistake that will haunt Bayes"
    },
    {
     "at": "10:17",
     "title": "Recap: what conditioning does and doesn't do"
    }
   ],
   "tags": [
    "conditional probability",
    "sample space",
    "Bayes",
    "probability axioms",
    "sensor defect example",
    "intersection",
    "probability trees",
    "working with data"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "The Multiplication Rule and Probability Trees",
   "summary": "Learn where the multiplication rule for sequential probabilities comes from, why you multiply when drawing without replacement, and how to build and read probability trees. You'll be able to calculate multi-stage probabilities by following paths through a tree diagram and spot the most common mistakes that come up with dependent events.",
   "runs": "9:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "Two draws, one question"
    },
    {
     "at": "0:42",
     "title": "Where the multiplication rule comes from"
    },
    {
     "at": "2:04",
     "title": "Three events: the chain rule"
    },
    {
     "at": "3:03",
     "title": "Building the tree"
    },
    {
     "at": "4:22",
     "title": "Reading a path both ways"
    },
    {
     "at": "5:19",
     "title": "With replacement — the contrast"
    },
    {
     "at": "6:15",
     "title": "First defective on the third draw"
    },
    {
     "at": "7:27",
     "title": "Where people slip"
    },
    {
     "at": "8:11",
     "title": "Recap"
    }
   ],
   "tags": [
    "multiplication rule",
    "conditional probability",
    "probability trees",
    "sequential events",
    "dependent events",
    "without replacement",
    "chain rule",
    "independence"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "The Law of Total Probability: Combining Paths to an Outcome",
   "summary": "Learn how to find the probability of an event when there are multiple paths to it, using the law of total probability. You'll partition the sample space into disjoint slices, understand why the formula works from first principles, and apply it to real problems like finding defect rates across multiple suppliers.",
   "runs": "8:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The bin you can't sort"
    },
    {
     "at": "0:39",
     "title": "Slicing the sample space"
    },
    {
     "at": "1:46",
     "title": "Stating the law"
    },
    {
     "at": "2:34",
     "title": "Two lines from the axioms"
    },
    {
     "at": "3:41",
     "title": "The sensor bin, worked"
    },
    {
     "at": "5:09",
     "title": "Partitioning on what happened first"
    },
    {
     "at": "6:35",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "law of total probability",
    "partition",
    "conditional probability",
    "probability theory",
    "weighted average",
    "sample space",
    "disjoint events",
    "axioms of probability"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Formula: From Test Accuracy to True Probability",
   "summary": "This video teaches Bayes' formula and why a test that's 95% accurate can still give misleading results. You'll learn to reverse conditional probabilities, understand the base rate fallacy, and correctly interpret test results by distinguishing between how accurate a test is and how confident you should actually be in a positive result.",
   "runs": "8:41",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question That Won't Let Go"
    },
    {
     "at": "0:45",
     "title": "Three Lines, No New Assumptions"
    },
    {
     "at": "2:05",
     "title": "Prior, Likelihood, Posterior, Evidence"
    },
    {
     "at": "2:52",
     "title": "The Flagged Sensor"
    },
    {
     "at": "4:15",
     "title": "Seeing It With a Thousand Sensors"
    },
    {
     "at": "5:17",
     "title": "Naming the Mistake"
    },
    {
     "at": "6:07",
     "title": "Testing Twice"
    },
    {
     "at": "7:11",
     "title": "Reading the Result Honestly"
    },
    {
     "at": "7:53",
     "title": "Recap"
    }
   ],
   "tags": [
    "Bayes' formula",
    "conditional probability",
    "base rate fallacy",
    "posterior probability",
    "likelihood",
    "prior probability",
    "test accuracy",
    "Bayesian reasoning",
    "probability interpretation",
    "sequential testing"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Equation, Not the Intuition",
   "summary": "Independence isn't about whether two things feel related—it's a precise mathematical condition: P(A and B) = P(A) × P(B). This video teaches you to recognize when events are truly independent by checking the equation, and shows why events can be physically connected yet independent, or feel unrelated yet dependent. You'll learn to distinguish independence from disjoint events and handle multiple independent events correctly.",
   "runs": "7:10",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:40",
     "title": "The definition"
    },
    {
     "at": "1:35",
     "title": "Connected yet independent"
    },
    {
     "at": "2:15",
     "title": "Unrelated yet dependent"
    },
    {
     "at": "2:55",
     "title": "Disjoint is not independent"
    },
    {
     "at": "4:04",
     "title": "Three or more events"
    },
    {
     "at": "5:04",
     "title": "Repeated trials and the binomial coefficient"
    },
    {
     "at": "6:14",
     "title": "Recap"
    }
   ],
   "tags": [
    "independence",
    "probability",
    "conditional probability",
    "disjoint events",
    "binomial distribution",
    "dependent events",
    "pairwise independence",
    "probability theory",
    "mathematical definition",
    "intuition vs numbers"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems: Applying Conditional Probability, Bayes, and Independence",
   "summary": "This workshop applies conditional probability, Bayes' theorem, total probability, and independence to six realistic problems without telling you which tool to use. You'll learn to identify the right approach, avoid common traps like reversing conditionals or double-counting overlaps, and handle cases ranging from familiar Bayes calculations to tree diagrams and the classic three-box switching problem. Afterward, you'll be able to recognize which tool applies and in which direction—the core skill for handling conditional probability under exam pressure.",
   "runs": "9:56",
   "chapters": [
    {
     "at": "0:00",
     "title": "Six problems, no re-runs"
    },
    {
     "at": "0:36",
     "title": "Problem one: yesterday's posterior is today's prior"
    },
    {
     "at": "2:09",
     "title": "Problem two: you have to choose the partition"
    },
    {
     "at": "3:21",
     "title": "Problem three: looks like Bayes, isn't"
    },
    {
     "at": "4:17",
     "title": "Problem four: compute it, don't guess it"
    },
    {
     "at": "5:29",
     "title": "Problem five: without replacement"
    },
    {
     "at": "6:28",
     "title": "Problem six: the counterintuitive classic"
    },
    {
     "at": "8:03",
     "title": "The three that cost the most marks"
    },
    {
     "at": "9:11",
     "title": "Recap"
    }
   ],
   "tags": [
    "conditional probability",
    "Bayes theorem",
    "total probability",
    "independence",
    "problem-solving",
    "probability traps",
    "tree diagrams",
    "exam preparation"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "Decision Tree for Counting vs. Probability Problems",
   "summary": "This video teaches a practical decision tree to identify which combinatorics or probability tool applies to an unlabelled exam problem in seconds. You'll learn to ask the right diagnostic questions—is it counting or probability, does order matter, is there a condition—and practice recognizing permutations, combinations, conditional probability, and Bayes' theorem on five realistic problems with no labels. By the end, you'll have a reliable map to name the correct tool before doing any arithmetic.",
   "runs": "8:22",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question under time pressure"
    },
    {
     "at": "0:36",
     "title": "First fork: counting or probability"
    },
    {
     "at": "1:27",
     "title": "Inside counting: order and repetition"
    },
    {
     "at": "2:04",
     "title": "Inside probability: conditional, partition, or reversed"
    },
    {
     "at": "3:01",
     "title": "Unlabelled problem one: at-least-one"
    },
    {
     "at": "3:50",
     "title": "Unlabelled problem two: Bayes update"
    },
    {
     "at": "4:42",
     "title": "Unlabelled problem three: independence and a committee"
    },
    {
     "at": "5:35",
     "title": "Unlabelled problem four: inclusion-exclusion"
    },
    {
     "at": "6:05",
     "title": "Unlabelled problem five: plain equally-likely count"
    },
    {
     "at": "6:31",
     "title": "What actually saves you in the exam"
    },
    {
     "at": "7:20",
     "title": "Recap: the whole map in one breath"
    }
   ],
   "tags": [
    "combinatorics",
    "probability",
    "permutations",
    "combinations",
    "conditional probability",
    "Bayes theorem",
    "problem solving",
    "exam strategy",
    "decision tree",
    "counting"
   ],
   "src": "/media/learn/counting/counting-20.mp4",
   "poster": "/media/learn/counting/counting-20.jpg",
   "captions": "/media/learn/counting/counting-20.vtt"
  }
 ];

export const PATTERNS: Lesson[] = [
  {
   "n": 1,
   "title": "The Data-Mining Pipeline: From Question to Decision",
   "summary": "Learn the complete structure of a real-world data project: how to move from a research question through selection, preprocessing, modelling, and interpretation to arrive at an actual decision. Using a bike-share dataset, this video shows you where the time really goes (preprocessing, not algorithms) and why the pipeline loops rather than ends.",
   "runs": "10:56",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question Jamal actually has"
    },
    {
     "at": "1:07",
     "title": "The question comes before the data touches anything"
    },
    {
     "at": "2:54",
     "title": "Selection: which trips, and what you throw away by choosing"
    },
    {
     "at": "4:19",
     "title": "Preprocessing: the part nobody warned you about"
    },
    {
     "at": "6:13",
     "title": "Modelling: fitting a rule to examples"
    },
    {
     "at": "7:11",
     "title": "Interpretation: where a number becomes a decision"
    },
    {
     "at": "8:13",
     "title": "Where the time actually goes"
    },
    {
     "at": "9:07",
     "title": "A loop, not a line"
    },
    {
     "at": "9:58",
     "title": "Recap"
    }
   ],
   "tags": [
    "data pipeline",
    "data preprocessing",
    "data selection",
    "modelling",
    "interpretation",
    "data mining workflow",
    "real-world data projects",
    "data cleaning",
    "bike-share analysis"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Exploratory Data Analysis: Before You Build a Model",
   "summary": "Learn the essential data investigation techniques you must perform before training any machine learning model. This lesson covers histograms, summary statistics, scatterplots, correlation, and how to handle missing values, outliers, and duplicates—using a real bike trip dataset as the working example.",
   "runs": "12:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why look before you leap"
    },
    {
     "at": "0:56",
     "title": "The histogram and the shape of duration"
    },
    {
     "at": "2:07",
     "title": "Mean versus median"
    },
    {
     "at": "3:27",
     "title": "Spread: variance, standard deviation, and quartiles"
    },
    {
     "at": "4:56",
     "title": "Scatterplots and correlation"
    },
    {
     "at": "7:04",
     "title": "Missing values: two very different reasons"
    },
    {
     "at": "8:28",
     "title": "Outliers versus errors, and duplicates"
    },
    {
     "at": "9:37",
     "title": "Standardizing, and why distance will demand it"
    },
    {
     "at": "10:53",
     "title": "Recap: the habit, not just the tools"
    }
   ],
   "tags": [
    "exploratory data analysis",
    "data validation",
    "histograms",
    "correlation",
    "outliers",
    "missing values",
    "data cleaning",
    "statistics",
    "machine learning preparation",
    "data quality"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing and P-Values: Testing if a New Dock Changed Trip Counts",
   "summary": "Learn the logic of hypothesis testing through a real example: did a new dock actually increase trips, or was the change just random noise? This video walks you through forming a null hypothesis, calculating a test statistic, understanding the sampling distribution, and interpreting p-values correctly—plus two critical traps that catch many practitioners.",
   "runs": "9:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "412 to 448 — Is That the Dock?"
    },
    {
     "at": "1:11",
     "title": "The Null: The Boring Explanation"
    },
    {
     "at": "2:26",
     "title": "One Number to Summarise the Evidence"
    },
    {
     "at": "3:33",
     "title": "What t Would Look Like If Nothing Changed"
    },
    {
     "at": "4:42",
     "title": "The P-Value: Probability of This or Worse, Given the Null"
    },
    {
     "at": "6:07",
     "title": "Running the Numbers on the Dock"
    },
    {
     "at": "7:14",
     "title": "Significant Isn't the Same as Important"
    },
    {
     "at": "8:00",
     "title": "Testing Until Something Sticks"
    },
    {
     "at": "8:49",
     "title": "Recap: The Logic, Not the Ritual"
    }
   ],
   "tags": [
    "hypothesis testing",
    "p-value",
    "null hypothesis",
    "test statistic",
    "statistics",
    "sampling distribution",
    "statistical significance",
    "data analysis",
    "multiple testing",
    "inference"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: From Standard Error to Honest Inference",
   "summary": "Learn how to honestly quantify uncertainty when reporting a single number from data, building confidence intervals that correctly capture what repeated sampling would show. This video teaches the standard error, why sample size improvements follow a square root relationship, and how to interpret and compare intervals without confusing statistical significance with practical importance.",
   "runs": "7:57",
   "chapters": [
    {
     "at": "0:00",
     "title": "Fourteen point two minutes, but which fourteen point two"
    },
    {
     "at": "0:44",
     "title": "The spread of the estimate, not the spread of the data"
    },
    {
     "at": "1:54",
     "title": "Four times the data buys twice the precision"
    },
    {
     "at": "2:50",
     "title": "Building the interval"
    },
    {
     "at": "3:42",
     "title": "What ninety-five percent actually promises"
    },
    {
     "at": "4:55",
     "title": "Comparing two intervals, honestly"
    },
    {
     "at": "5:56",
     "title": "Does it matter — effect size"
    },
    {
     "at": "7:05",
     "title": "Putting it together"
    }
   ],
   "tags": [
    "confidence intervals",
    "standard error",
    "sampling distribution",
    "sample size",
    "statistical inference",
    "effect size",
    "hypothesis testing",
    "normal distribution",
    "uncertainty quantification"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Checking Claims: Four Questions Before You Believe",
   "summary": "Learn how to take apart confident claims before they become decisions. This video walks through six real-world claims about bike-share data—covering confounds, outliers, statistical significance versus practical size, and data gaps—and shows you the four questions to ask before you believe anything. Afterwards, you'll know how to catch flawed reasoning before the computing even starts.",
   "runs": "7:16",
   "chapters": [
    {
     "at": "0:00",
     "title": "Six sentences from a meeting"
    },
    {
     "at": "0:30",
     "title": "Claim one: the new dock increased usage"
    },
    {
     "at": "1:35",
     "title": "Claim two: members ride longer than casuals"
    },
    {
     "at": "2:33",
     "title": "Claim three: rain halves our trips"
    },
    {
     "at": "3:23",
     "title": "Claim four: station fourteen has a broken-bike problem"
    },
    {
     "at": "4:12",
     "title": "Claim five: weekend trips are different"
    },
    {
     "at": "5:09",
     "title": "Claim six: our busiest station is the one downtown"
    },
    {
     "at": "5:56",
     "title": "Four questions for any claim"
    },
    {
     "at": "6:40",
     "title": "Recap"
    }
   ],
   "tags": [
    "hypothesis testing",
    "statistical claims",
    "confounding variables",
    "statistical significance",
    "two-sample tests",
    "data analysis",
    "critical thinking",
    "bike-share data",
    "research design",
    "p-values"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: How the Algorithm Works",
   "summary": "Learn how k-nearest neighbours classifies new data by finding the k most similar past examples and taking a vote. This video walks you through the full algorithm—from the core intuition, through Euclidean distance and feature scaling, to the crucial bias-variance tradeoff and when kNN is actually the right choice over fancier methods.",
   "runs": "9:55",
   "chapters": [
    {
     "at": "0:00",
     "title": "A trip with no label"
    },
    {
     "at": "0:48",
     "title": "Voting by hand"
    },
    {
     "at": "1:48",
     "title": "What 'closest' even means"
    },
    {
     "at": "3:18",
     "title": "The trap: seconds versus years"
    },
    {
     "at": "4:50",
     "title": "Choosing k: jagged to smooth"
    },
    {
     "at": "6:19",
     "title": "Should every neighbour get an equal vote?"
    },
    {
     "at": "7:15",
     "title": "The honest costs"
    },
    {
     "at": "8:15",
     "title": "When kNN is genuinely right"
    },
    {
     "at": "8:55",
     "title": "Recap"
    }
   ],
   "tags": [
    "k-nearest neighbours",
    "kNN",
    "classification",
    "machine learning",
    "Euclidean distance",
    "feature scaling",
    "bias-variance tradeoff",
    "supervised learning",
    "nearest neighbours voting"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality in k-Nearest Neighbours",
   "summary": "Learn why adding more features to k-nearest neighbours breaks the algorithm rather than improving it. This video explains the geometry behind the curse of dimensionality and teaches three concrete strategies—feature selection, feature engineering, and dimensionality reduction—to fix the problem in practice.",
   "runs": "9:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:44",
     "title": "Setting up the measurement"
    },
    {
     "at": "2:04",
     "title": "The ratio that goes to one"
    },
    {
     "at": "3:23",
     "title": "Why: the corners of the cube"
    },
    {
     "at": "4:28",
     "title": "The exponential data problem"
    },
    {
     "at": "5:32",
     "title": "The mistakes people make"
    },
    {
     "at": "6:25",
     "title": "Three ways out, each named"
    },
    {
     "at": "7:44",
     "title": "Recap"
    }
   ],
   "tags": [
    "curse of dimensionality",
    "k-nearest neighbours",
    "kNN",
    "feature selection",
    "feature engineering",
    "high-dimensional data",
    "distance metrics",
    "machine learning pitfalls",
    "indicator variables",
    "data science"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes: Probabilistic Classification with Bayes' Rule",
   "summary": "Learn how to classify data by computing probabilities instead of measuring distance, using Bayes' rule to flip the question from \"what's nearby?\" to \"how likely is this?\" You'll work through the naive Bayes algorithm by hand, discover why the false independence assumption still produces useful results, and master the practical tricks—smoothing, logarithms, and feature engineering—needed to make it work in practice.",
   "runs": "11:14",
   "chapters": [
    {
     "at": "0:00",
     "title": "A classifier that isn't geometry"
    },
    {
     "at": "0:51",
     "title": "Flipping the question with Bayes' rule"
    },
    {
     "at": "2:04",
     "title": "The joint probability nobody has enough data for"
    },
    {
     "at": "3:15",
     "title": "The naive assumption"
    },
    {
     "at": "4:28",
     "title": "Working it by hand"
    },
    {
     "at": "6:00",
     "title": "The zero-probability trap and Laplace smoothing"
    },
    {
     "at": "7:07",
     "title": "Why we add instead of multiply"
    },
    {
     "at": "7:51",
     "title": "Right answer, wrong confidence"
    },
    {
     "at": "8:43",
     "title": "Why the false assumption still wins"
    },
    {
     "at": "9:22",
     "title": "Where people trip up"
    },
    {
     "at": "10:05",
     "title": "Recap"
    }
   ],
   "tags": [
    "naive Bayes",
    "Bayes' rule",
    "classification",
    "probability",
    "machine learning",
    "conditional probability",
    "Laplace smoothing",
    "feature independence",
    "probabilistic models"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning a Line",
   "summary": "Learn how the perceptron algorithm draws a decision boundary by computing a weighted sum of features and repeatedly adjusting weights when it makes mistakes. You'll see step-by-step how it learns from errors to separate two classes of data, and understand its mathematical guarantee of success on linearly separable data—along with its real limitations.",
   "runs": "8:16",
   "chapters": [
    {
     "at": "0:00",
     "title": "A line that learns"
    },
    {
     "at": "0:40",
     "title": "The weighted sum and the threshold"
    },
    {
     "at": "1:45",
     "title": "The learning rule"
    },
    {
     "at": "2:42",
     "title": "Four steps, by hand"
    },
    {
     "at": "4:28",
     "title": "The promise, stated precisely"
    },
    {
     "at": "5:21",
     "title": "When it never stops"
    },
    {
     "at": "6:20",
     "title": "Converged, but not good"
    },
    {
     "at": "7:20",
     "title": "Recap"
    }
   ],
   "tags": [
    "perceptron",
    "linear classifier",
    "machine learning",
    "decision boundary",
    "supervised learning",
    "classification algorithm",
    "weights and bias",
    "convergence",
    "linearly separable"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: From Line to Probability",
   "summary": "Learn how to move from binary classification to probability predictions by squashing a linear model through the sigmoid function. You'll understand how coefficients translate to odds multipliers, why cross-entropy loss is the right training objective, and how to choose a decision threshold that matches your business costs rather than defaulting to 0.5.",
   "runs": "9:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Number, Not a Label"
    },
    {
     "at": "0:45",
     "title": "Why a Straight Line Can't Give You a Probability"
    },
    {
     "at": "1:38",
     "title": "The Sigmoid: Squashing Any Number Into (0, 1)"
    },
    {
     "at": "2:38",
     "title": "The Model: A Line Inside a Squash"
    },
    {
     "at": "3:44",
     "title": "Log-Odds: What a Coefficient Actually Means"
    },
    {
     "at": "5:05",
     "title": "Training: Cross-Entropy, Not Squared Error"
    },
    {
     "at": "6:26",
     "title": "The Threshold Is a Choice, Not Part of the Model"
    },
    {
     "at": "7:21",
     "title": "Two Ways People Get This Wrong"
    },
    {
     "at": "7:59",
     "title": "Recap: Line In, Probability Out"
    }
   ],
   "tags": [
    "logistic regression",
    "sigmoid function",
    "probability prediction",
    "cross-entropy loss",
    "log-odds",
    "classification threshold",
    "odds ratio",
    "binary classification",
    "machine learning",
    "model calibration"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: How to Pick the First Question",
   "summary": "Learn how decision trees make predictions by asking yes-or-no questions about features, and discover the key insight: information gain. You'll understand entropy, Gini impurity, and exactly how to choose which question to ask at each step to build an accurate tree.",
   "runs": "11:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question the lesson answers"
    },
    {
     "at": "1:01",
     "title": "Node, branch, leaf, prediction"
    },
    {
     "at": "2:03",
     "title": "Entropy: measuring how mixed a node is"
    },
    {
     "at": "3:27",
     "title": "Information gain: entropy before minus entropy after"
    },
    {
     "at": "5:42",
     "title": "Gini impurity: the cheaper cousin"
    },
    {
     "at": "7:23",
     "title": "Numeric thresholds and a trap for many-valued features"
    },
    {
     "at": "9:02",
     "title": "Where people trip up"
    },
    {
     "at": "9:53",
     "title": "Recap"
    }
   ],
   "tags": [
    "decision trees",
    "entropy",
    "information gain",
    "Gini impurity",
    "machine learning",
    "classification",
    "splitting criteria",
    "tree-based models",
    "threshold selection",
    "feature selection"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Decision Tree Pruning: Stopping Memorization and Finding the Right Size",
   "summary": "Learn why decision trees grown to their full depth memorize training data instead of learning real patterns, and how to fix it using pre-pruning and post-pruning techniques. You'll understand the classic U-shaped validation curve and how to use it to find the optimal tree size, then read your final tree as interpretable if-then rules.",
   "runs": "8:33",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Tree That Got Everything Right"
    },
    {
     "at": "0:53",
     "title": "Why the Failure Is Structural"
    },
    {
     "at": "1:55",
     "title": "Pre-Pruning: Stop It Early"
    },
    {
     "at": "3:02",
     "title": "Post-Pruning: Grow It, Then Cut"
    },
    {
     "at": "4:19",
     "title": "The Classic Curve"
    },
    {
     "at": "5:22",
     "title": "Where People Go Wrong"
    },
    {
     "at": "6:19",
     "title": "Reading the Pruned Tree as Rules"
    },
    {
     "at": "7:19",
     "title": "Recap"
    }
   ],
   "tags": [
    "decision trees",
    "overfitting",
    "pruning",
    "pre-pruning",
    "post-pruning",
    "validation",
    "model selection",
    "tree depth",
    "memorization",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-12.mp4",
   "poster": "/media/learn/patterns/patterns-12.jpg",
   "captions": "/media/learn/patterns/patterns-12.vtt"
  },
  {
   "n": 13,
   "title": "Support Vector Machines: The Widest Street and Soft Margins",
   "summary": "Learn how support vector machines find the best decision boundary by maximizing the margin—the gap around a separating line—and how the slack variable and parameter C allow the method to handle real, messy data where perfect separation isn't possible. You'll understand the optimization problem, which points actually determine the boundary, and how to balance margin width against training violations.",
   "runs": "10:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "Which line do you trust?"
    },
    {
     "at": "1:09",
     "title": "Defining the margin"
    },
    {
     "at": "2:58",
     "title": "The points that matter"
    },
    {
     "at": "4:11",
     "title": "Stating the optimisation"
    },
    {
     "at": "5:36",
     "title": "Real data isn't that clean"
    },
    {
     "at": "6:06",
     "title": "The soft margin and C"
    },
    {
     "at": "7:30",
     "title": "Small, medium, large C on the same data"
    },
    {
     "at": "8:22",
     "title": "Where people trip up"
    },
    {
     "at": "9:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "support vector machines",
    "SVM",
    "margin",
    "support vectors",
    "slack variables",
    "optimization",
    "classification",
    "machine learning",
    "soft margin",
    "hyperparameter C"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Inseparable Data",
   "summary": "When a straight line cannot separate your classes, kernel methods compute dot products in a higher-dimensional space without explicitly creating those dimensions. You'll learn why support vector machines only ever need dot products, how the polynomial and RBF kernels work, and when to actually use them instead of reaching for complexity you don't need.",
   "runs": "9:46",
   "chapters": [
    {
     "at": "0:00",
     "title": "The line that refuses to exist"
    },
    {
     "at": "0:49",
     "title": "Add a feature, watch it separate"
    },
    {
     "at": "2:08",
     "title": "The bill for all those new coordinates"
    },
    {
     "at": "3:16",
     "title": "The trick: only dot products, ever"
    },
    {
     "at": "4:27",
     "title": "A kernel function, computed directly"
    },
    {
     "at": "6:01",
     "title": "Two kernels worth knowing by name"
    },
    {
     "at": "7:13",
     "title": "Turn gamma up and watch it memorise"
    },
    {
     "at": "8:02",
     "title": "When to actually reach for this"
    },
    {
     "at": "8:49",
     "title": "Recap"
    }
   ],
   "tags": [
    "kernel methods",
    "support vector machines",
    "RBF kernel",
    "polynomial kernel",
    "feature engineering",
    "overfitting",
    "hyperparameter tuning",
    "nonlinear classification",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "How to Choose a Classifier: A Defense-Based Framework",
   "summary": "Learn to defend your choice of machine learning classifier by matching model assumptions to your actual problem constraints. Through five real bike-share scenarios, you'll see how data size, interpretability needs, feature structure, and decision boundary shape each point you toward logistic regression, decision trees, k-NN, naive Bayes, or kernel SVMs—and how to explain that choice when accuracy scores alone won't settle it.",
   "runs": "12:08",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Answers Honestly"
    },
    {
     "at": "0:58",
     "title": "Case One — Fifty Thousand Trips, Ten Clean Numbers"
    },
    {
     "at": "2:36",
     "title": "Case Two — Two Hundred Rows, Eighty Features"
    },
    {
     "at": "4:12",
     "title": "Case Three — A Model the Council Must Read"
    },
    {
     "at": "5:29",
     "title": "Case Four — Text Notes from the Mechanics"
    },
    {
     "at": "6:50",
     "title": "Case Five — A Boundary That Visibly Curves"
    },
    {
     "at": "7:50",
     "title": "When Two Answers Are Both Right"
    },
    {
     "at": "8:41",
     "title": "Head to Head, on the Axes That Matter"
    },
    {
     "at": "10:39",
     "title": "The Trap: Picking by Leaderboard, Not by Reason"
    },
    {
     "at": "11:22",
     "title": "Recap"
    }
   ],
   "tags": [
    "classifier selection",
    "machine learning",
    "model comparison",
    "interpretability",
    "algorithm choice",
    "decision trees",
    "logistic regression",
    "SVM",
    "naive Bayes",
    "k-nearest neighbors"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Getting Trustworthy Model Error Estimates",
   "summary": "Learn why a single train-test split can give misleading results, and how k-fold cross-validation solves this by testing your model on multiple different slices of data. This video teaches you to average those test errors into a reliable estimate of how well your method actually works, and shows the common mistakes that can undermine cross-validation's trustworthiness.",
   "runs": "5:24",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Split, One Lucky Guess"
    },
    {
     "at": "0:42",
     "title": "Why a Single Split Can Fool You"
    },
    {
     "at": "1:22",
     "title": "K-Fold Cross-Validation, Defined"
    },
    {
     "at": "2:15",
     "title": "Five Folds of Station Data"
    },
    {
     "at": "3:07",
     "title": "Not the Same as Training on Everything"
    },
    {
     "at": "3:52",
     "title": "Two Ways to Ruin It"
    },
    {
     "at": "4:37",
     "title": "Recap"
    }
   ],
   "tags": [
    "cross-validation",
    "k-fold",
    "model evaluation",
    "train-test split",
    "error estimation",
    "machine learning",
    "validation technique",
    "time series",
    "data splitting"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Accuracy Lies: Precision, Recall, and Choosing the Right Threshold",
   "summary": "Learn why accuracy is a trap when predicting rare events, and discover the four metrics that actually matter: precision, recall, F1, and ROC curves. You'll understand how to build a confusion matrix, read what each metric protects against, and most importantly, how to set your decision threshold based on the real costs of different mistakes—not just statistical scores.",
   "runs": "8:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "Ninety-Seven Percent Accurate and Useless"
    },
    {
     "at": "0:58",
     "title": "The Four Cells, In Mechanic's Words"
    },
    {
     "at": "2:02",
     "title": "Two Questions, Two Numbers"
    },
    {
     "at": "2:55",
     "title": "Moving the Threshold"
    },
    {
     "at": "3:55",
     "title": "Squashing Two Numbers Into One"
    },
    {
     "at": "4:50",
     "title": "Sweeping the Threshold: The ROC Curve"
    },
    {
     "at": "6:08",
     "title": "When ROC Flatters You"
    },
    {
     "at": "7:01",
     "title": "The Threshold Is a Decision About People"
    },
    {
     "at": "7:49",
     "title": "Recap"
    }
   ],
   "tags": [
    "accuracy",
    "precision",
    "recall",
    "confusion matrix",
    "F1 score",
    "ROC curve",
    "classification metrics",
    "threshold selection",
    "imbalanced data",
    "machine learning evaluation"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: Data Leakage and Evaluation Traps",
   "summary": "Learn to spot five critical mistakes that produce excellent-looking models that actually don't work: leaking information from the future into features, standardizing before splitting data, comparing high accuracy to the wrong baseline, overfitting during model selection, and ignoring time when it matters. After watching, you'll be able to audit any model using a five-question pre-flight checklist that catches these errors before wasting time on fancy training.",
   "runs": "8:37",
   "chapters": [
    {
     "at": "0:00",
     "title": "Five Suspiciously Good Models"
    },
    {
     "at": "0:46",
     "title": "Model A: The Feature From the Future"
    },
    {
     "at": "2:00",
     "title": "Model B: Standardized Before the Split"
    },
    {
     "at": "3:14",
     "title": "Model C: Ninety-Eight Percent Accurate, Two Percent Positive"
    },
    {
     "at": "4:18",
     "title": "Model D: Best of Forty, Worst in the World"
    },
    {
     "at": "5:37",
     "title": "Model E: Trained on Yesterday, Deployed on Tomorrow"
    },
    {
     "at": "6:52",
     "title": "The Pre-Flight Checklist"
    },
    {
     "at": "7:40",
     "title": "Recap"
    }
   ],
   "tags": [
    "data leakage",
    "model evaluation",
    "train-test split",
    "class imbalance",
    "overfitting",
    "baseline comparison",
    "feature engineering",
    "validation mistakes",
    "data science",
    "machine learning pitfalls"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "One-Page Study Guide: 6 Classification Algorithms Compared",
   "summary": "This video condenses six machine learning classification methods—k-nearest neighbors, naive Bayes, perceptron, logistic regression, decision trees, and SVM—into a single-page reference sheet. You'll learn the eight key questions that characterize each method (assumptions, optimization, costs, hyperparameters, scaling needs, interpretability, calibration, and failure modes), plus essential formulas and a decision flow chart to pick the right method for any problem.",
   "runs": "13:13",
   "chapters": [
    {
     "at": "0:00",
     "title": "The night before the exam"
    },
    {
     "at": "0:49",
     "title": "The eight questions"
    },
    {
     "at": "1:39",
     "title": "Row one and two: kNN, naive Bayes"
    },
    {
     "at": "3:30",
     "title": "Row three and four: perceptron, logistic regression"
    },
    {
     "at": "4:48",
     "title": "Row five and six: decision trees, SVM"
    },
    {
     "at": "6:51",
     "title": "The formulas worth knowing cold"
    },
    {
     "at": "9:39",
     "title": "The decision flow"
    },
    {
     "at": "11:12",
     "title": "How people misuse the sheet"
    },
    {
     "at": "12:14",
     "title": "Recap: what's actually on the page"
    }
   ],
   "tags": [
    "classification algorithms",
    "machine learning",
    "k-nearest neighbors",
    "naive Bayes",
    "logistic regression",
    "decision trees",
    "SVM",
    "study guide",
    "algorithm comparison",
    "hyperparameters"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Strategy: From Derivations to Avoiding Common Mistakes",
   "summary": "Learn how to approach a machine learning exam by focusing on the few core ideas that get tested repeatedly: spotting problem types (regression, classification, clustering), reproducing key derivations like least squares and gradient descent, and understanding bias-variance as causes rather than outcomes. The video walks you through the exact mistakes examiners see every year and how to avoid losing points on labels, units, and assumptions.",
   "runs": "5:51",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Night Before the Exam"
    },
    {
     "at": "0:34",
     "title": "Spotting the Problem Type"
    },
    {
     "at": "1:14",
     "title": "The Derivation Examiners Love: Least Squares"
    },
    {
     "at": "2:04",
     "title": "Gradient Descent, One More Time"
    },
    {
     "at": "2:47",
     "title": "The Correction: Bias-Variance Isn't Overfitting Itself"
    },
    {
     "at": "3:31",
     "title": "Trees and Clusters, the Quick Versions"
    },
    {
     "at": "4:10",
     "title": "Where Points Get Lost"
    },
    {
     "at": "4:55",
     "title": "Recap"
    }
   ],
   "tags": [
    "exam strategy",
    "machine learning",
    "least squares",
    "gradient descent",
    "bias-variance",
    "overfitting",
    "classification",
    "regression",
    "clustering",
    "derivations"
   ],
   "src": "/media/learn/patterns/patterns-20.mp4",
   "poster": "/media/learn/patterns/patterns-20.jpg",
   "captions": "/media/learn/patterns/patterns-20.vtt"
  }
 ];

export const HOWITWORKS: Lesson[] = [
  {
   "n": 1,
   "title": "Why Lessons Take a Week: The Scaling Problem",
   "summary": "This video explains why producing high-quality educational lessons at scale is so difficult, starting with the reality that a single polished lesson once required a full week of skilled work. You'll learn the specific constraints—cost, time, and quality control—that define what an automated teaching system must actually solve, and why preventing \"plausible but wrong\" content is the central design challenge that drives every decision in the pipeline.",
   "runs": "5:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "1:04",
     "title": "The arithmetic doesn't work"
    },
    {
     "at": "1:50",
     "title": "The actual goal, stated precisely"
    },
    {
     "at": "2:48",
     "title": "The constraint that shapes everything else"
    },
    {
     "at": "3:54",
     "title": "Why this shapes every later decision"
    },
    {
     "at": "4:39",
     "title": "Recap"
    }
   ],
   "tags": [
    "educational production",
    "curriculum scaling",
    "lesson design",
    "quality assurance",
    "automation",
    "teaching systems",
    "production pipeline",
    "cost constraints",
    "subject matter expertise",
    "content verification"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why Animation Models Describe Instead of Code",
   "summary": "Learn why letting AI models write animation code directly doesn't work, and how a fixed-vocabulary description layer with validation catches errors before rendering. You'll understand the scene/1 contract and why architecture matters more than model skill for reliable video generation.",
   "runs": "6:52",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:36",
     "title": "The Obvious Approach"
    },
    {
     "at": "1:14",
     "title": "No Safety Net"
    },
    {
     "at": "2:19",
     "title": "Say Back: Not a Bug Problem"
    },
    {
     "at": "2:58",
     "title": "Describe, Don't Program"
    },
    {
     "at": "3:44",
     "title": "The Consequence That Matters"
    },
    {
     "at": "4:37",
     "title": "The scene/1 Contract"
    },
    {
     "at": "5:28",
     "title": "Where People Trip"
    },
    {
     "at": "6:07",
     "title": "Recap"
    }
   ],
   "tags": [
    "animation",
    "code generation",
    "validation",
    "system design",
    "Manim",
    "architecture",
    "AI safety",
    "contracts",
    "error checking",
    "video generation"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "From One Sentence to Finished Video: The Nine Stops",
   "summary": "Learn the complete end-to-end process that transforms a single sentence topic into a finished teaching video. This video maps all nine named stops in the production pipeline—from the initial brief through script, description, validation, proof rendering, rubric scoring, repair loops, final rendering, review, and human-initiated publishing—so you can understand where each critical step lives and how the whole system works together.",
   "runs": "9:51",
   "chapters": [
    {
     "at": "0:00",
     "title": "From a sentence to a video"
    },
    {
     "at": "0:53",
     "title": "Stop one: the brief"
    },
    {
     "at": "1:47",
     "title": "Stop two: the script"
    },
    {
     "at": "2:44",
     "title": "Stop three: describe, against the contract"
    },
    {
     "at": "3:58",
     "title": "Stop four: the gate"
    },
    {
     "at": "4:37",
     "title": "Stop five: the proof render"
    },
    {
     "at": "5:25",
     "title": "Stop six: the rubric"
    },
    {
     "at": "6:15",
     "title": "Stop seven: the repair loop"
    },
    {
     "at": "7:10",
     "title": "Stop eight: the final render"
    },
    {
     "at": "7:43",
     "title": "Stops nine and ten: review, then publish"
    },
    {
     "at": "8:25",
     "title": "Recap: the one picture"
    }
   ],
   "tags": [
    "video production",
    "automation workflow",
    "lesson pipeline",
    "rendering",
    "quality control",
    "content creation",
    "system design",
    "technical process",
    "describing",
    "gate validation"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "Quality Control Before the Picture: How scene_spec.py Validates Teaching Videos",
   "summary": "Learn how teaching videos enforce quality before a single pixel is drawn by validating the spec—a JSON blueprint of the scene. You'll discover four concrete rules that prevent common mistakes (bare numbers on labels, weak final images, invisible grids, and decorative icons), how the validator gives specific actionable feedback, and why the retry loop tolerates genuine judgment calls over perfect compliance.",
   "runs": "6:44",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Picture That Doesn't Exist Yet"
    },
    {
     "at": "0:42",
     "title": "What's Inside a Spec"
    },
    {
     "at": "1:34",
     "title": "Rule One: Words, Not Bare Numbers"
    },
    {
     "at": "2:13",
     "title": "Rule Two: Don't End on Your Weakest Picture"
    },
    {
     "at": "2:56",
     "title": "Rule Three: The Grid That Died — Sixty-Four Empty Boxes"
    },
    {
     "at": "3:49",
     "title": "Rule Four: Collapse or Summary — The Caption Test"
    },
    {
     "at": "4:44",
     "title": "The Retry Loop: Five Chances and a Judgement Call"
    },
    {
     "at": "5:50",
     "title": "Recap"
    }
   ],
   "tags": [
    "spec validation",
    "scene_spec.py",
    "teaching video pipeline",
    "quality control",
    "JSON specification",
    "diagram rules",
    "visual hierarchy",
    "content validation"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks and Artifacts Disagree",
   "summary": "Learn why a pipeline's silent failures are more dangerous than crashes by examining six real cases where automated checks reported defects that didn't actually exist in the artifacts. You'll discover the core rule: when a check and an artifact disagree, always trust the artifact and go inspect the actual file, transcript, or code before accepting the verdict.",
   "runs": "7:45",
   "chapters": [
    {
     "at": "0:00",
     "title": "Six Lies"
    },
    {
     "at": "0:44",
     "title": "Case One: The Check That Created The Defect"
    },
    {
     "at": "1:28",
     "title": "Case Two: The Word That Passed The Check"
    },
    {
     "at": "2:19",
     "title": "Case Three: The Job That Finished An Hour Ago"
    },
    {
     "at": "3:18",
     "title": "Case Four: The Fix That Wasn't Running"
    },
    {
     "at": "4:12",
     "title": "Case Five: The Guard That Hid Everything"
    },
    {
     "at": "5:01",
     "title": "Case Six: The Score That Named A Symptom"
    },
    {
     "at": "5:58",
     "title": "The Rule Underneath All Six"
    },
    {
     "at": "6:48",
     "title": "Recap"
    }
   ],
   "tags": [
    "automated testing",
    "quality checks",
    "debugging",
    "pipeline failures",
    "silent bugs",
    "code review",
    "verification systems",
    "artifact inspection",
    "system design",
    "error detection"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "Five Pieces: Understanding the System Architecture",
   "summary": "This video maps out the five core pieces of a video generation system—the AI service, the contract, the renderer, the datastore, and the harness—and shows how they communicate and fail when they disagree. You'll learn where each piece lives in the codebase, what it owns, and the two critical boundaries where new engineers trip up: the renderer's named fields and the contract's pure functions.",
   "runs": "7:17",
   "chapters": [
    {
     "at": "0:00",
     "title": "What talks to what"
    },
    {
     "at": "0:43",
     "title": "The AI service — the one that owns the job"
    },
    {
     "at": "1:33",
     "title": "The contract — no I/O, so it's fast to trust"
    },
    {
     "at": "2:22",
     "title": "The renderer — a separate container, and a named list"
    },
    {
     "at": "3:27",
     "title": "The lesson that rendered in one voice"
    },
    {
     "at": "4:18",
     "title": "DynamoDB and S3 — state and artefacts"
    },
    {
     "at": "4:52",
     "title": "The harness and the two front ends"
    },
    {
     "at": "5:44",
     "title": "Where new engineers get lost"
    },
    {
     "at": "6:20",
     "title": "Recap"
    }
   ],
   "tags": [
    "system architecture",
    "microservices",
    "AI service",
    "renderer",
    "contract",
    "DynamoDB",
    "S3",
    "codebase navigation",
    "debugging patterns",
    "integration boundaries"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "Deployment Architecture: AWS Services Behind the Pipeline",
   "summary": "Learn which AWS services run the rendering pipeline and why each was chosen. This video covers Fargate tasks, S3 storage, DynamoDB tracking, CloudFront delivery, and the narration cache—mapping the concrete infrastructure behind the system architecture. You'll understand the tradeoffs that shaped these decisions and the mistakes that cause real failures in production.",
   "runs": "8:56",
   "chapters": [
    {
     "at": "0:00",
     "title": "What Actually Runs?"
    },
    {
     "at": "0:54",
     "title": "Why Fargate, Not a Server"
    },
    {
     "at": "2:04",
     "title": "Pin the Digest, Not the Tag"
    },
    {
     "at": "3:19",
     "title": "S3: Payload, Scenes, Video, and the Narration Cache"
    },
    {
     "at": "4:22",
     "title": "DynamoDB Holds the Job"
    },
    {
     "at": "4:49",
     "title": "The Character Quota That Stopped the Line"
    },
    {
     "at": "5:35",
     "title": "CloudFront, and the Gap Nobody Should Miss"
    },
    {
     "at": "6:39",
     "title": "Where People Get This Wrong"
    },
    {
     "at": "7:21",
     "title": "Recap"
    }
   ],
   "tags": [
    "AWS",
    "Fargate",
    "S3",
    "DynamoDB",
    "CloudFront",
    "deployment",
    "infrastructure",
    "narration cache",
    "container tasks",
    "system design"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "The Three Cost Pieces: Why One Lesson Costs $2.39 and Another Costs $7.22",
   "summary": "This lesson breaks down the three components that determine lesson cost: model API calls (which vary based on rewrites and rubric failures), speech synthesis charges (per character with caching), and Fargate rendering time (which doubles between proof and final passes). Learn why catching defects before final render is the real cost lever, and which model optimizations actually save money versus which ones don't.",
   "runs": "7:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "Nova's Question"
    },
    {
     "at": "0:39",
     "title": "Piece One — Model Calls"
    },
    {
     "at": "1:25",
     "title": "Piece Two — Speech Synthesis"
    },
    {
     "at": "1:57",
     "title": "Piece Three — Fargate Time"
    },
    {
     "at": "2:45",
     "title": "The Measured Spread"
    },
    {
     "at": "3:42",
     "title": "The Real Cost Lever"
    },
    {
     "at": "4:38",
     "title": "The One Model Change That Paid"
    },
    {
     "at": "5:32",
     "title": "Where People Get This Wrong"
    },
    {
     "at": "6:09",
     "title": "Recap"
    }
   ],
   "tags": [
    "lesson cost",
    "model calls",
    "speech synthesis",
    "Fargate rendering",
    "cost optimization",
    "proof pass",
    "rubric quality",
    "pipeline economics",
    "infrastructure costs",
    "cost control"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "Building a Business Case for Automated Video Production",
   "summary": "This video explains why automated video production matters as a business strategy, beyond just cutting costs. You'll learn the three core capabilities—building large curricula affordably, remixing lessons cheaply when content changes, and adapting the same lesson for different audiences—and why the real competitive advantage lies in accumulated rules and failure catalogues rather than the pipeline itself.",
   "runs": "8:51",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why does this need a business case at all"
    },
    {
     "at": "0:44",
     "title": "Capability one: a library, not a video"
    },
    {
     "at": "1:34",
     "title": "Capability two: cheap to redo"
    },
    {
     "at": "2:39",
     "title": "Capability three: the audience is an input"
    },
    {
     "at": "3:34",
     "title": "Where the moat actually is — and isn't"
    },
    {
     "at": "4:49",
     "title": "Who is actually allowed to decide"
    },
    {
     "at": "6:01",
     "title": "The value chain, brief to student"
    },
    {
     "at": "6:54",
     "title": "Where teams get this wrong"
    },
    {
     "at": "7:43",
     "title": "Recap"
    }
   ],
   "tags": [
    "business case",
    "video production",
    "automation",
    "curriculum",
    "scale",
    "production pipeline",
    "cost analysis",
    "content strategy",
    "competitive advantage",
    "EdTech"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why They Failed and What We Learned",
   "summary": "This lesson walks through five pipeline optimizations that seemed reasonable but failed when tested against real data: a cheaper animation model, fully automatic publishing, two text-similarity checks for duplicate detection, a hard length cap, and a ban on full-frame layouts. You'll see the actual evidence that rejected each idea—not guesses, but measurements—and learn the core habit behind all five failures: testing promising ideas against known-answer test cases before implementation.",
   "runs": "7:34",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question this lesson answers"
    },
    {
     "at": "0:42",
     "title": "Rejected: a cheaper model for animation CODE"
    },
    {
     "at": "1:50",
     "title": "But the same cheap model writes SPECS just fine"
    },
    {
     "at": "2:42",
     "title": "Rejected: fully automatic publishing"
    },
    {
     "at": "3:38",
     "title": "Rejected, twice: a text-similarity check for repeats"
    },
    {
     "at": "4:55",
     "title": "Rejected: a hard length limit"
    },
    {
     "at": "5:37",
     "title": "Rejected, after checking: banning full-frame after one bad scene"
    },
    {
     "at": "6:30",
     "title": "Recap: the habit underneath all five"
    }
   ],
   "tags": [
    "pipeline optimization",
    "rejected ideas",
    "testing and validation",
    "animation code generation",
    "measurement over intuition",
    "engineering decisions",
    "known-answer testing",
    "avoiding reinvention"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "Random Variables: The Function, Not the Value",
   "summary": "This video reveals why a random variable is actually a function that maps outcomes to numbers, not a mysterious hidden value. Using a university helpdesk as a running example, you'll learn to distinguish discrete random variables (like counting tickets) from continuous ones (like time until the next arrival), and to read probability notation correctly by understanding what it really means in terms of the underlying sample space.",
   "runs": "6:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:48",
     "title": "The helpdesk experiment"
    },
    {
     "at": "1:36",
     "title": "Assigning a number"
    },
    {
     "at": "2:35",
     "title": "Discrete and continuous"
    },
    {
     "at": "3:23",
     "title": "Reading the notation"
    },
    {
     "at": "4:34",
     "title": "The mistake almost everyone makes"
    },
    {
     "at": "5:14",
     "title": "Why this pays off"
    },
    {
     "at": "5:52",
     "title": "Recap"
    }
   ],
   "tags": [
    "random variable",
    "probability",
    "discrete random variable",
    "continuous random variable",
    "sample space",
    "function",
    "probability notation",
    "probability foundations"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF and CDF: Two Ways to Describe a Distribution",
   "summary": "Learn the two standard functions used to describe a random variable's distribution: the probability mass function (PMF), which gives the exact probability of each outcome, and the cumulative distribution function (CDF), which gives the probability of being at or below a value. You'll master how to use each function to answer different probability questions and convert between them.",
   "runs": "7:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Variable, Two Descriptions"
    },
    {
     "at": "0:40",
     "title": "The Probability Mass Function"
    },
    {
     "at": "1:32",
     "title": "Two Properties That Make It Legitimate"
    },
    {
     "at": "2:32",
     "title": "The Cumulative Distribution Function"
    },
    {
     "at": "3:27",
     "title": "Running Total and Jump Size"
    },
    {
     "at": "4:20",
     "title": "Which Function Answers Which Question"
    },
    {
     "at": "5:13",
     "title": "The Endpoint Trap"
    },
    {
     "at": "6:19",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability mass function",
    "cumulative distribution function",
    "PMF",
    "CDF",
    "random variable",
    "probability distribution",
    "discrete distributions",
    "probability questions"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expected Value: Definition, Properties, and LOTUS",
   "summary": "Learn what expectation is and why it's not just the most likely value—it's the balance point of a probability distribution. This video teaches you how to calculate expected values, apply linearity to solve real problems, and use LOTUS to find expectations of functions of random variables without making common mistakes.",
   "runs": "9:51",
   "chapters": [
    {
     "at": "0:00",
     "title": "What number is the distribution about?"
    },
    {
     "at": "0:40",
     "title": "The definition: sum of k times p of k"
    },
    {
     "at": "2:02",
     "title": "The physical picture: where the bars balance"
    },
    {
     "at": "3:39",
     "title": "Linearity: the fact people don't trust"
    },
    {
     "at": "5:14",
     "title": "Expected total minutes of work in a shift"
    },
    {
     "at": "6:26",
     "title": "Averaging a function of X: LOTUS"
    },
    {
     "at": "7:56",
     "title": "The two mistakes people make"
    },
    {
     "at": "8:45",
     "title": "Recap"
    }
   ],
   "tags": [
    "expectation",
    "expected value",
    "probability distribution",
    "PMF",
    "linearity",
    "LOTUS",
    "random variables",
    "statistics",
    "balance point"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Data Spread",
   "summary": "Learn why the average alone can't compare two datasets that look completely different despite having identical means. This video develops variance—the expected squared deviation from the mean—and standard deviation as tools to measure spread, then derives the shortcut formula and transformation rules you'll use constantly.",
   "runs": "9:23",
   "chapters": [
    {
     "at": "0:00",
     "title": "Two Shifts, Same Average"
    },
    {
     "at": "0:58",
     "title": "Why Not Just Use the Distance"
    },
    {
     "at": "1:44",
     "title": "Absolute Value or Square?"
    },
    {
     "at": "2:48",
     "title": "Defining Variance"
    },
    {
     "at": "3:22",
     "title": "Computing Variance the Long Way"
    },
    {
     "at": "4:37",
     "title": "The Shortcut Formula"
    },
    {
     "at": "5:54",
     "title": "Standard Deviation: Back to Real Units"
    },
    {
     "at": "6:29",
     "title": "Two Properties, Proved"
    },
    {
     "at": "7:43",
     "title": "Common Mistakes"
    },
    {
     "at": "8:14",
     "title": "Recap"
    }
   ],
   "tags": [
    "variance",
    "standard deviation",
    "spread",
    "expected value",
    "deviation",
    "dispersion",
    "statistics fundamentals",
    "mean absolute deviation",
    "transformation rules",
    "probability"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Expectation and Variance: Six Exam-Speed Problems",
   "summary": "Learn to solve expectation and variance problems quickly and reliably under exam conditions. Work through six different problem types—from basic PMF calculations to spotting shortcuts—with a consistent method: identify what's asked, pick the right tool, compute, and sanity-check your answer. After this workshop, you'll recognize the common traps and have the speed to handle these problems on an exam.",
   "runs": "9:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "The exam-speed problem"
    },
    {
     "at": "0:53",
     "title": "Problem one: expectation and variance from a PMF"
    },
    {
     "at": "1:57",
     "title": "Problem two: linearity without the joint distribution"
    },
    {
     "at": "2:51",
     "title": "Problem three: reversing the computational formula"
    },
    {
     "at": "3:55",
     "title": "Problem four: the function trap"
    },
    {
     "at": "5:22",
     "title": "Problem five: the missing probability"
    },
    {
     "at": "6:10",
     "title": "Problem six: recognising a shift"
    },
    {
     "at": "7:30",
     "title": "The three costliest slips"
    },
    {
     "at": "8:22",
     "title": "Recap"
    }
   ],
   "tags": [
    "expectation",
    "variance",
    "probability",
    "PMF",
    "exam preparation",
    "random variables",
    "probability formulas",
    "quick methods",
    "problem-solving",
    "helpdesk examples"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "The Binomial Distribution: Counting Successes Across Multiple Trials",
   "summary": "Learn how to find the exact probability distribution when you have a fixed number of independent trials, each with the same success probability—the binomial distribution. You'll derive the PMF from first principles, calculate its mean and variance, and master the three key types of probability questions (exactly k, at least k, at most k). By the end, you'll know when to use this formula and when the conditions actually break down.",
   "runs": "8:25",
   "chapters": [
    {
     "at": "0:00",
     "title": "Twelve Tickets, How Many Fixed?"
    },
    {
     "at": "0:53",
     "title": "The Probability of One Exact Pattern"
    },
    {
     "at": "1:50",
     "title": "Counting the Patterns"
    },
    {
     "at": "2:37",
     "title": "Assembling the PMF"
    },
    {
     "at": "3:15",
     "title": "The Four Conditions — and When They Break"
    },
    {
     "at": "4:19",
     "title": "Mean and Variance via Indicators"
    },
    {
     "at": "5:28",
     "title": "How the Shape Changes"
    },
    {
     "at": "6:05",
     "title": "Exactly, At Least, At Most"
    },
    {
     "at": "7:02",
     "title": "Where People Slip Up"
    },
    {
     "at": "7:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "binomial distribution",
    "PMF",
    "probability mass function",
    "success probability",
    "expected value",
    "variance",
    "independence",
    "counting principle",
    "complement rule",
    "conditions for binomial"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Modeling Events Over Time",
   "summary": "Learn when and how to use the Poisson distribution to count random events arriving over a continuous window of time, like help desk tickets or phone calls. This video derives the Poisson PMF from first principles using the binomial, explains its key assumptions, and teaches you to identify when it applies and how to avoid common mistakes like using the wrong rate or applying it when the rate isn't constant.",
   "runs": "8:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "Nine tickets next hour?"
    },
    {
     "at": "1:02",
     "title": "Chopping the hour into slivers"
    },
    {
     "at": "2:24",
     "title": "The Poisson PMF"
    },
    {
     "at": "3:19",
     "title": "What the Poisson is quietly assuming"
    },
    {
     "at": "4:20",
     "title": "The fingerprint: mean equals variance"
    },
    {
     "at": "5:23",
     "title": "Two hours together"
    },
    {
     "at": "6:22",
     "title": "Two mistakes to watch for"
    },
    {
     "at": "7:16",
     "title": "Recap"
    }
   ],
   "tags": [
    "Poisson distribution",
    "counting events",
    "probability mass function",
    "rate parameter",
    "binomial approximation",
    "mean equals variance",
    "statistical modeling",
    "independence assumption",
    "discrete distributions"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric and Negative Binomial Distributions: Waiting for Success",
   "summary": "This video flips the binomial question: instead of fixing the number of tries and counting successes, you fix the target success and ask how long you wait. You'll learn the geometric and negative binomial PMFs, discover the counter-intuitive memorylessness property, and understand when to apply each of the three major count distributions—binomial, Poisson, and geometric—to real problems.",
   "runs": "8:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "A Different Question"
    },
    {
     "at": "0:46",
     "title": "Deriving the Geometric PMF"
    },
    {
     "at": "1:55",
     "title": "Two Conventions, Same Idea"
    },
    {
     "at": "2:41",
     "title": "The Mean: Why 1/p"
    },
    {
     "at": "3:37",
     "title": "Memorylessness"
    },
    {
     "at": "5:26",
     "title": "Waiting for the r-th Success"
    },
    {
     "at": "6:37",
     "title": "Where People Slip"
    },
    {
     "at": "7:11",
     "title": "Three Families, Three Questions"
    }
   ],
   "tags": [
    "geometric distribution",
    "negative binomial",
    "waiting time",
    "memorylessness",
    "probability mass function",
    "discrete probability",
    "binomial comparison",
    "expectation",
    "failure-success sequence"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "Recognizing Binomial, Poisson, Geometric, and Negative Binomial Distributions",
   "summary": "Learn to identify which discrete distribution applies to a real-world scenario by asking three key questions: Is there a fixed number of trials, or are you counting events in a window, or waiting for something? Are the trials or arrivals independent? Is the probability or rate constant? Master this recognition skill through twelve worked examples so you can confidently name the right distribution on an exam.",
   "runs": "7:24",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question this lesson answers"
    },
    {
     "at": "0:30",
     "title": "The three questions"
    },
    {
     "at": "1:13",
     "title": "Round one — the easy ones"
    },
    {
     "at": "2:07",
     "title": "Round two — same shapes, sharper edges"
    },
    {
     "at": "3:19",
     "title": "Round three — bursts and dependence"
    },
    {
     "at": "4:24",
     "title": "Round four — the tricky finish"
    },
    {
     "at": "5:57",
     "title": "The three confusions that cost the most marks"
    },
    {
     "at": "6:44",
     "title": "Recap"
    }
   ],
   "tags": [
    "binomial distribution",
    "Poisson distribution",
    "geometric distribution",
    "negative binomial",
    "distribution recognition",
    "probability distributions",
    "discrete distributions",
    "independence",
    "constant probability",
    "random variables"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability Distributions and Probability Density Functions",
   "summary": "Learn why a specific exact value in a continuous distribution has zero probability, and how probability density functions (PDFs) differ from probability mass functions. You'll master the key concepts of continuous probability: densities, cumulative distribution functions, and why endpoints don't matter—then practice finding probabilities, expectations, and variances using integration.",
   "runs": "7:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "The number that isn't a whole number"
    },
    {
     "at": "0:48",
     "title": "Probability as area"
    },
    {
     "at": "1:53",
     "title": "Defining the density"
    },
    {
     "at": "2:44",
     "title": "A concrete helpdesk density"
    },
    {
     "at": "3:44",
     "title": "The CDF and the two-way street"
    },
    {
     "at": "4:39",
     "title": "The exam trap: endpoints don't matter"
    },
    {
     "at": "5:14",
     "title": "Expectation and variance as integrals"
    },
    {
     "at": "6:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "continuous probability",
    "probability density function",
    "PDF",
    "CDF",
    "cumulative distribution function",
    "continuous distributions",
    "expectation",
    "variance",
    "integration",
    "probability"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Exponential Distributions: From Poisson Arrivals to Waiting Times",
   "summary": "Learn how the exponential distribution models waiting times between random arrivals and why it emerges directly from the Poisson process. You'll discover the surprising property that the mean and standard deviation are equal, explore memorylessness (why your eight-minute wait doesn't make the next ticket more likely), and learn when this model fits reality and when it doesn't.",
   "runs": "9:08",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:56",
     "title": "The Uniform Distribution"
    },
    {
     "at": "2:40",
     "title": "From Poisson Counts to Exponential Waits"
    },
    {
     "at": "3:55",
     "title": "Mean and the Surprising Standard Deviation"
    },
    {
     "at": "4:53",
     "title": "Memorylessness"
    },
    {
     "at": "6:20",
     "title": "Where This Model Fits, and Where It Doesn't"
    },
    {
     "at": "7:18",
     "title": "Common Mistakes"
    },
    {
     "at": "8:05",
     "title": "Recap"
    }
   ],
   "tags": [
    "exponential distribution",
    "Poisson process",
    "waiting time",
    "continuous distributions",
    "memorylessness",
    "probability density",
    "helpdesk arrivals",
    "standard deviation"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Formula, and Standardization",
   "summary": "Learn what makes the normal distribution so fundamental in statistics—why it appears everywhere and how to use it. This lesson walks you through the formula, how the parameters mu and sigma control the shape, the standardization transformation to the standard normal, and how to solve both forward problems (finding probabilities) and reverse problems (finding cutoffs). You'll also learn the 68-95-99.7 rule and symmetry shortcuts to check your work.",
   "runs": "8:34",
   "chapters": [
    {
     "at": "0:00",
     "title": "The shape everything leans towards"
    },
    {
     "at": "0:52",
     "title": "The density, mu and sigma"
    },
    {
     "at": "1:48",
     "title": "Drawing three of them"
    },
    {
     "at": "2:22",
     "title": "Why tables exist"
    },
    {
     "at": "3:06",
     "title": "Standardising: z is a distance in standard deviations"
    },
    {
     "at": "3:57",
     "title": "Worked example: probability it exceeds a threshold"
    },
    {
     "at": "4:42",
     "title": "Worked example: probability within a range"
    },
    {
     "at": "5:26",
     "title": "The reverse problem: finding the cut-off"
    },
    {
     "at": "6:37",
     "title": "The 68-95-99.7 rule, as a sanity check"
    },
    {
     "at": "7:10",
     "title": "Symmetry and negative z"
    },
    {
     "at": "7:38",
     "title": "Recap"
    }
   ],
   "tags": [
    "normal distribution",
    "bell curve",
    "standardization",
    "z-score",
    "probability",
    "statistics",
    "mu and sigma",
    "standard normal",
    "density function",
    "statistical tables"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit: When to Use Density, CDF, Uniform, Exponential, Normal",
   "summary": "Most exam questions mix together density, CDF, uniform, exponential, and normal distributions. Learn the four-step routine—sketch first, set up the integral, compute, check—that works across all six realistic problems. By drawing the picture before any algebra, you'll spot mistakes before you make them and know exactly which tool to reach for.",
   "runs": "8:04",
   "chapters": [
    {
     "at": "0:00",
     "title": "Six Problems, One Habit to Break"
    },
    {
     "at": "0:40",
     "title": "Problem One: Find the Constant, Then the Mean"
    },
    {
     "at": "1:46",
     "title": "Problem Two: Density to CDF and Back"
    },
    {
     "at": "2:38",
     "title": "Problem Three: Probability Over an Interval"
    },
    {
     "at": "3:20",
     "title": "Problem Four: Exponential Waiting Meets Poisson Count"
    },
    {
     "at": "4:33",
     "title": "Problem Five: Normal in Reverse — Finding a Threshold"
    },
    {
     "at": "5:37",
     "title": "Problem Six: The Trap — Looks Continuous, Isn't"
    },
    {
     "at": "6:32",
     "title": "The Three Recurring Mistakes"
    },
    {
     "at": "7:23",
     "title": "Recap: The Four-Step Routine"
    }
   ],
   "tags": [
    "density",
    "CDF",
    "exponential distribution",
    "normal distribution",
    "uniform distribution",
    "probability",
    "integral",
    "continuous distributions",
    "problem solving",
    "exam preparation"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions: Two Random Variables on One Clock",
   "summary": "Learn how to work with two random variables at the same time using joint probability distributions. This video covers joint PMFs and densities, marginal distributions, independence, and conditioning—and reveals why E(XY) ≠ E(X)E(Y) when variables are dependent.",
   "runs": "8:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "Two technicians, one shift"
    },
    {
     "at": "0:51",
     "title": "The joint PMF as a table"
    },
    {
     "at": "1:45",
     "title": "Marginals: summing along a row"
    },
    {
     "at": "2:42",
     "title": "The continuous version"
    },
    {
     "at": "3:35",
     "title": "Independence: the joint factors"
    },
    {
     "at": "4:55",
     "title": "Conditioning is a renormalised row"
    },
    {
     "at": "5:37",
     "title": "E of X times Y, both cases"
    },
    {
     "at": "6:44",
     "title": "Two traps"
    },
    {
     "at": "7:36",
     "title": "Recap"
    }
   ],
   "tags": [
    "joint distribution",
    "joint PMF",
    "marginal distribution",
    "independence",
    "conditioning",
    "covariance",
    "continuous random variables",
    "probability table",
    "dependent variables",
    "expectation"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Measuring How Variables Move Together",
   "summary": "Learn to measure whether two variables move together using covariance and correlation. You'll compute both quantities from a probability table, discover a computational shortcut, and understand the critical limitation: correlation only detects straight-line patterns, never causation. By the end, you'll know why zero covariance doesn't prove independence and how to interpret correlation coefficients correctly.",
   "runs": "7:34",
   "chapters": [
    {
     "at": "0:00",
     "title": "Do they rise and fall together?"
    },
    {
     "at": "0:39",
     "title": "Covariance, defined"
    },
    {
     "at": "1:34",
     "title": "Computing it on the table"
    },
    {
     "at": "2:31",
     "title": "The computational shortcut"
    },
    {
     "at": "3:17",
     "title": "Zero covariance is not independence"
    },
    {
     "at": "4:42",
     "title": "Scaling it into correlation"
    },
    {
     "at": "5:47",
     "title": "The warning for the rest of your career"
    },
    {
     "at": "6:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "covariance",
    "correlation",
    "joint distributions",
    "linear association",
    "expectation",
    "probability",
    "causation",
    "independence",
    "standard deviation"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Adding Variances: When Does Variance Add Up?",
   "summary": "Learn why expectation of a sum always adds, but variance only adds when covariance is zero—and why this matters for real-world decisions like scheduling. You'll discover how to compute variance of a sum, see why independence is crucial, and understand how larger teams produce steadier, more predictable results.",
   "runs": "8:17",
   "chapters": [
    {
     "at": "0:00",
     "title": "Two technicians, one total"
    },
    {
     "at": "0:55",
     "title": "Expectation always adds"
    },
    {
     "at": "2:04",
     "title": "Deriving Var(X+Y)"
    },
    {
     "at": "3:17",
     "title": "Same average, different risk"
    },
    {
     "at": "4:17",
     "title": "The common mistake"
    },
    {
     "at": "5:07",
     "title": "Extending to n technicians"
    },
    {
     "at": "5:54",
     "title": "Variance of the mean: sigma-squared over n"
    },
    {
     "at": "6:53",
     "title": "Which families survive addition"
    },
    {
     "at": "7:29",
     "title": "Recap"
    }
   ],
   "tags": [
    "variance",
    "covariance",
    "expectation",
    "independent random variables",
    "sum of random variables",
    "probability",
    "risk and variability",
    "normal distribution",
    "Poisson distribution",
    "variance of the mean"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Distribution Recognition: Which Tool to Use",
   "summary": "Learn to spot which probability distribution a problem is asking for before attempting to solve it. Using a decision flow of three key questions—discrete or continuous, what output is needed, and whether you need a joint distribution—you'll work through 15 helpdesk problems to recognize the right tool instantly, from binomial and Poisson to exponential, normal, and geometric distributions.",
   "runs": "7:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "The last skill: recognition"
    },
    {
     "at": "0:39",
     "title": "The decision flow"
    },
    {
     "at": "1:28",
     "title": "Warm-up: five singles"
    },
    {
     "at": "2:34",
     "title": "Two-step problems"
    },
    {
     "at": "3:39",
     "title": "The three that trick people"
    },
    {
     "at": "5:05",
     "title": "Last three, mixed"
    },
    {
     "at": "6:09",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability distributions",
    "binomial",
    "Poisson",
    "exponential",
    "normal distribution",
    "geometric",
    "PMF",
    "CDF",
    "problem recognition",
    "discrete vs continuous"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Settle",
   "summary": "This video explains the law of large numbers—why a running average converges to its true expectation as you collect more data, and why the past never \"catches up\" to balance out the future. You'll learn the mathematical mechanism (how variance shrinks by a factor of n), the difference between the weak and strong versions of the law, and how to spot the gambler's fallacy. By the end, you'll understand exactly what \"large numbers\" means in practice and why it has nothing to do with evening out random events.",
   "runs": "8:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:52",
     "title": "Noisy hour, settled week"
    },
    {
     "at": "2:00",
     "title": "Stating the law properly"
    },
    {
     "at": "2:59",
     "title": "The mechanism: variance of the mean"
    },
    {
     "at": "4:12",
     "title": "Weak law, strong law, honestly"
    },
    {
     "at": "5:14",
     "title": "The mistake: the gambler's fallacy"
    },
    {
     "at": "6:45",
     "title": "How large is 'large'?"
    },
    {
     "at": "7:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "law of large numbers",
    "probability",
    "convergence",
    "variance",
    "running average",
    "gambler's fallacy",
    "expectation",
    "statistics",
    "random variables",
    "sample mean"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "The Central Limit Theorem: Why the Normal Distribution Appears Everywhere",
   "summary": "Discover why the bell curve keeps appearing even when individual data—like skewed ticket handling times—doesn't follow it. This lesson reveals how the sum or average of many independent observations becomes approximately normal, and teaches you to standardize these aggregates to answer real probability questions. Learn the precise statement, the conditions required (independence and finite variance), and the practical limits of the approximation.",
   "runs": "8:23",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:51",
     "title": "Watching it happen"
    },
    {
     "at": "1:53",
     "title": "The precise statement"
    },
    {
     "at": "3:15",
     "title": "Will the shift's work fit?"
    },
    {
     "at": "4:40",
     "title": "A common mix-up"
    },
    {
     "at": "5:35",
     "title": "The fine print"
    },
    {
     "at": "6:38",
     "title": "Connecting back"
    },
    {
     "at": "7:20",
     "title": "Recap"
    }
   ],
   "tags": [
    "central limit theorem",
    "normal distribution",
    "sum of random variables",
    "approximately normal",
    "finite variance",
    "independence",
    "standardization",
    "probability distributions",
    "aggregates",
    "sampling"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "One Page of Probability: The Distributions and Formulas You Need",
   "summary": "Learn what actually matters for probability exams by building a single reference sheet that holds all six key distributions, their stories, and six essential formulas. You'll learn to identify which tool to use by reading the problem language, not the formula, and work through five realistic exam problems that deliberately don't tell you which distribution to reach for.",
   "runs": "7:23",
   "chapters": [
    {
     "at": "0:00",
     "title": "What actually needs to be on the page"
    },
    {
     "at": "0:34",
     "title": "The discrete rows"
    },
    {
     "at": "1:24",
     "title": "The continuous rows"
    },
    {
     "at": "2:06",
     "title": "The six formulas worth knowing cold"
    },
    {
     "at": "3:11",
     "title": "Problem one: name it and compute"
    },
    {
     "at": "3:40",
     "title": "Problem two: Poisson feeds exponential"
    },
    {
     "at": "4:12",
     "title": "Problem three: joint table to variance of a sum"
    },
    {
     "at": "5:00",
     "title": "Problem four: normal in reverse"
    },
    {
     "at": "5:30",
     "title": "Problem five: the linearity trap"
    },
    {
     "at": "6:03",
     "title": "The sixty-second check"
    },
    {
     "at": "6:39",
     "title": "Recap"
    }
   ],
   "tags": [
    "probability distributions",
    "binomial",
    "Poisson",
    "exponential",
    "normal distribution",
    "exam strategy",
    "probability formulas",
    "variance",
    "expectation",
    "problem-solving"
   ],
   "src": "/media/learn/chance/chance-20.mp4",
   "poster": "/media/learn/chance/chance-20.jpg",
   "captions": "/media/learn/chance/chance-20.vtt"
  }
 ];

export const SHIFT: Lesson[] = [
  {
   "n": 1,
   "title": "Why Legacy Systems Can't Do Certain Things",
   "summary": "This video explains the structural limitations of long-running legacy systems: they can only handle situations that were imagined and written into their requirements document years in advance. You'll learn to identify three critical gaps where legacy systems hand work to people—reading customer intent, spotting patterns across separate events, and writing coherent summaries—and how to evaluate whether new technology can actually do these things better.",
   "runs": "5:58",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:39",
     "title": "Bounded By a Document"
    },
    {
     "at": "1:34",
     "title": "The Angry Email"
    },
    {
     "at": "2:25",
     "title": "The Shared Cause"
    },
    {
     "at": "3:16",
     "title": "The Incident Summary"
    },
    {
     "at": "4:01",
     "title": "The System Isn't Bad"
    },
    {
     "at": "4:53",
     "title": "The Real Question"
    }
   ],
   "tags": [
    "legacy systems",
    "system limitations",
    "requirements documentation",
    "automation gaps",
    "business process",
    "digital transformation",
    "system design",
    "workflow automation",
    "technical debt"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts That Changed Software: From APIs to Foundation Models",
   "summary": "This video explains three fundamental changes that made large language models practical for real-world business applications: the shift from fixed APIs to natural language instructions, the emergence of one model handling many unprepared tasks, and the achievement of speed and cost efficiency for live transactions. You'll learn what a foundation model actually is, what critical limitations remain, and why this represents a departure from how software used to be built.",
   "runs": "7:22",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:55",
     "title": "Shift One: Instructions, Not APIs"
    },
    {
     "at": "2:16",
     "title": "Shift Two: One Model, Many Jobs"
    },
    {
     "at": "3:29",
     "title": "Shift Three: Fast and Cheap Enough to Matter"
    },
    {
     "at": "4:29",
     "title": "What A Foundation Model Actually Is"
    },
    {
     "at": "5:23",
     "title": "What Did NOT Change"
    },
    {
     "at": "6:16",
     "title": "Recap"
    }
   ],
   "tags": [
    "foundation models",
    "large language models",
    "API design",
    "software architecture",
    "machine learning in production",
    "dispatch systems",
    "natural language instructions",
    "business applications",
    "system design",
    "technology shifts"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "Why Adding AI to Existing Systems Quietly Fails",
   "summary": "Learn why bolting AI features onto existing screens creates unusable products, even when the technology works perfectly. This video teaches you to identify where AI actually belongs in your system—at the load-bearing points where humans are manually gluing steps together—and shows what successful integration looks like on a real logistics platform.",
   "runs": "6:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:38",
     "title": "The First Attempt"
    },
    {
     "at": "1:37",
     "title": "Why It Keeps Happening"
    },
    {
     "at": "2:15",
     "title": "The Other Way"
    },
    {
     "at": "3:47",
     "title": "The Architectural Difference"
    },
    {
     "at": "4:46",
     "title": "The Expensive Mistake, Named"
    },
    {
     "at": "5:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI integration",
    "system architecture",
    "product strategy",
    "AI implementation mistakes",
    "software design",
    "workflow automation",
    "AI placement",
    "technical strategy",
    "process optimization",
    "dispatch systems"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: Building Software with ML",
   "summary": "When you add machine learning to a feature, the daily work changes for architects, product owners, scrum masters, testers, and developers — in specific, concrete ways. This video walks through a real dispatch-suggestion example and shows exactly how each role's job shifts: from designing around certainty to designing around guesses, from writing specs to writing examples, from binary done to continuous improvement. You'll learn the three mistakes teams make most often and how to avoid them.",
   "runs": "7:32",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Feature, Five Different Jobs"
    },
    {
     "at": "0:47",
     "title": "The Architect: Designing Around a Guess"
    },
    {
     "at": "1:54",
     "title": "The Product Owner: Examples Instead of a Spec"
    },
    {
     "at": "2:53",
     "title": "The Scrum Master: Eighty Percent Isn't a Status"
    },
    {
     "at": "3:39",
     "title": "The Tester: From Enumerating Cases to Watching a Score"
    },
    {
     "at": "4:48",
     "title": "The Developer: Plumbing Around an Unreliable Part"
    },
    {
     "at": "5:48",
     "title": "Where Teams Get This Wrong"
    },
    {
     "at": "6:32",
     "title": "Recap: Same Team, Different Questions"
    }
   ],
   "tags": [
    "machine learning",
    "software architecture",
    "product management",
    "team roles",
    "ML engineering",
    "requirements",
    "testing",
    "fallback design",
    "ML operations",
    "feature development"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "Where AI Actually Saves Time (and Where It Doesn't)",
   "summary": "This video breaks down the real speedup from AI-assisted coding by separating what actually gets faster from what doesn't. You'll learn which tasks see genuine 2-5x gains, why business decisions and requirement agreement remain unchanged, and how compressing the middle of development creates a new bottleneck in code review.",
   "runs": "8:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Answers Honestly"
    },
    {
     "at": "0:49",
     "title": "Well-Specified Work: The Big Wins"
    },
    {
     "at": "2:17",
     "title": "The Pattern Behind the Wins"
    },
    {
     "at": "2:55",
     "title": "What Doesn't Get Faster, and Why"
    },
    {
     "at": "4:24",
     "title": "The Part Teams Discover Late"
    },
    {
     "at": "5:31",
     "title": "The Dispatch Rewrite, Counted in Weeks"
    },
    {
     "at": "6:23",
     "title": "The Mistake People Make"
    },
    {
     "at": "7:03",
     "title": "Recap: The Middle, Not the Ends"
    }
   ],
   "tags": [
    "AI coding",
    "developer productivity",
    "code generation",
    "project management",
    "software development bottlenecks",
    "AI limitations",
    "technical leadership",
    "realistic expectations",
    "code review",
    "development cycles"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing and Planning Probabilistic Systems: The Hidden Work",
   "summary": "This video reveals why probabilistic AI systems require different staffing, planning, and maintenance than traditional software projects—and why estimates typically fail if you don't account for this. You'll learn the three unfamiliar job roles that emerge, why the working demo is actually just the beginning, and how to budget for ongoing drift in models, prompts, and external providers.",
   "runs": "9:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Asks Until It's Too Late"
    },
    {
     "at": "0:57",
     "title": "Someone Has to Say What 'Good' Means"
    },
    {
     "at": "2:04",
     "title": "The Tester Nobody Expected"
    },
    {
     "at": "3:11",
     "title": "Who Owns the Thing That's Sometimes Wrong"
    },
    {
     "at": "4:16",
     "title": "The Demo Lies"
    },
    {
     "at": "5:36",
     "title": "The Honest Planning Rule"
    },
    {
     "at": "6:11",
     "title": "It Doesn't Stay Fixed Once You Fix It"
    },
    {
     "at": "7:18",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "8:07",
     "title": "Say It Back"
    }
   ],
   "tags": [
    "AI systems",
    "probabilistic systems",
    "project planning",
    "team staffing",
    "estimation",
    "machine learning operations",
    "reliability",
    "logistics",
    "software engineering"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "The Honest Model Call: What Actually Happens in Code",
   "summary": "Learn what a model call actually is when code invokes an LLM: stateless text-in, text-out with no memory between requests, variable outputs due to temperature, and latency constraints that determine where it can run. You'll understand the five-part component architecture (input, prompt, model, validate, fallback) and the critical engineering practices—like deciding failure cases before shipping—that separate teams that panic from teams that planned.",
   "runs": "8:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "The smallest honest unit"
    },
    {
     "at": "0:52",
     "title": "Request in, text out, nothing remembered"
    },
    {
     "at": "2:02",
     "title": "Making output usable by code"
    },
    {
     "at": "3:13",
     "title": "Same input, different output"
    },
    {
     "at": "4:03",
     "title": "Where you're allowed to put it"
    },
    {
     "at": "4:44",
     "title": "The exception classifier"
    },
    {
     "at": "5:35",
     "title": "Decide the wrong answer before you ship"
    },
    {
     "at": "6:24",
     "title": "Where people trip"
    },
    {
     "at": "6:56",
     "title": "Recap"
    }
   ],
   "tags": [
    "language models",
    "API design",
    "software engineering",
    "model validation",
    "system architecture",
    "LLM integration",
    "error handling",
    "fallback strategy",
    "latency",
    "production deployment"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What Actually Is an Agent?",
   "summary": "This video gives agents one clear, testable definition: a model in a loop with tools that pursues a goal by making calls, observing results, and deciding what to do next. You'll learn how agents differ from single model calls, what makes them risky, and the engineering controls needed to keep them safe—and exactly when to use one instead of a fixed pipeline.",
   "runs": "8:04",
   "chapters": [
    {
     "at": "0:00",
     "title": "The most over-used word in the field"
    },
    {
     "at": "0:44",
     "title": "A model in a loop, with tools"
    },
    {
     "at": "1:41",
     "title": "Function versus process"
    },
    {
     "at": "2:19",
     "title": "Classifying is a call"
    },
    {
     "at": "2:55",
     "title": "Resolving is an agent"
    },
    {
     "at": "3:58",
     "title": "The honest engineering reality"
    },
    {
     "at": "5:04",
     "title": "The controls are the subject"
    },
    {
     "at": "6:10",
     "title": "The rule of thumb"
    },
    {
     "at": "7:06",
     "title": "Recap"
    }
   ],
   "tags": [
    "agent",
    "AI",
    "model loop",
    "tools",
    "engineering",
    "LLM",
    "unbounded steps",
    "risk management",
    "control mechanisms",
    "workflow design"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "The Glue Problem: Why Tool Integration Needs a Standard",
   "summary": "Learn why custom integrations between AI models and business systems become expensive and fragile, and how a common protocol solves the \"glue problem.\" You'll understand what MCP does, why exposing tools requires separate safety decisions from mere standardization, and how to decide which integrations are worth making reusable.",
   "runs": "7:32",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:41",
     "title": "The Glue Problem"
    },
    {
     "at": "1:45",
     "title": "A Common Way to Describe What You Offer"
    },
    {
     "at": "2:55",
     "title": "The Integration Becomes an Asset"
    },
    {
     "at": "3:47",
     "title": "What It Doesn't Promise"
    },
    {
     "at": "4:57",
     "title": "The Mistake Teams Make"
    },
    {
     "at": "5:41",
     "title": "The CTO Decision"
    },
    {
     "at": "6:37",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI agents",
    "tool integration",
    "MCP protocol",
    "model frameworks",
    "system design",
    "API standards",
    "logistics example",
    "safety decisions",
    "technical architecture",
    "best practices"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "GraphRAG vs RAG: Grounding LLMs in Your Own Data",
   "summary": "Learn why foundation models hallucinate about your business data and how to fix it. This lesson contrasts RAG (retrieval-augmented generation) with GraphRAG, showing how semantic search alone fails at multi-hop questions, but walking a knowledge graph of your entities and relationships gets the right answers. You'll understand the operational cost of building a graph and why keeping both systems in sync matters.",
   "runs": "8:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "It doesn't know anything about us"
    },
    {
     "at": "1:15",
     "title": "Search by meaning, not keyword"
    },
    {
     "at": "2:13",
     "title": "The business, written down as a graph"
    },
    {
     "at": "3:18",
     "title": "Naming the two generations"
    },
    {
     "at": "4:34",
     "title": "One question, answered both ways"
    },
    {
     "at": "5:30",
     "title": "One store instead of two"
    },
    {
     "at": "6:22",
     "title": "The honest cost"
    },
    {
     "at": "7:04",
     "title": "Recap"
    }
   ],
   "tags": [
    "RAG",
    "GraphRAG",
    "retrieval-augmented generation",
    "knowledge graphs",
    "LLM grounding",
    "semantic search",
    "vector embeddings",
    "Neo4j",
    "hallucination",
    "business data retrieval"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls: Guardrails, Routing, and Context Engineering",
   "summary": "Learn the three foundational controls that prevent bad outputs, control costs, and keep models efficient in production systems. After watching, you'll understand how guardrails catch dangerous answers, how routing directs tasks to the right model based on difficulty, and why limiting what a model sees actually makes it perform better.",
   "runs": "8:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:57",
     "title": "Guardrails: In and Out"
    },
    {
     "at": "2:00",
     "title": "Where the List Comes From"
    },
    {
     "at": "2:47",
     "title": "Not Every Job Needs the Expensive Model"
    },
    {
     "at": "3:48",
     "title": "The Catch: You Have to Catch the Mistake"
    },
    {
     "at": "4:37",
     "title": "Context Engineering: What the Model Sees"
    },
    {
     "at": "5:33",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "6:21",
     "title": "What Each One Costs"
    },
    {
     "at": "7:03",
     "title": "Recap"
    }
   ],
   "tags": [
    "guardrails",
    "routing",
    "context engineering",
    "AI safety",
    "production systems",
    "cost optimization",
    "evaluation",
    "model management",
    "dispatch systems",
    "system design"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Separating Prompt, Context, Loop, and Harness Engineering",
   "summary": "\"Prompt engineering\" is a catch-all term hiding four distinct disciplines that teams routinely confuse, leading to wasted budget in the wrong places. This video breaks apart prompt engineering, context engineering, loop engineering, and harness engineering using a real exception-handling pipeline, showing you which of the four is doing the actual work and which one most teams incorrectly skip in production.",
   "runs": "6:37",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Word, Four Jobs"
    },
    {
     "at": "0:39",
     "title": "Prompt Engineering: The Smallest One"
    },
    {
     "at": "1:29",
     "title": "Context Engineering: What Goes In The Window"
    },
    {
     "at": "2:33",
     "title": "Loop Engineering: What Happens On Attempt Two"
    },
    {
     "at": "3:34",
     "title": "Harness Engineering: Everything Around It"
    },
    {
     "at": "4:40",
     "title": "All Four On One Exception"
    },
    {
     "at": "5:13",
     "title": "The Mistake: Funding The Wrong One"
    },
    {
     "at": "5:58",
     "title": "Recap"
    }
   ],
   "tags": [
    "prompt engineering",
    "context engineering",
    "loop engineering",
    "harness engineering",
    "LLM engineering",
    "machine learning operations",
    "production systems",
    "model pipeline",
    "cost optimization",
    "validation"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Four Types of AI Engineering: Prompt, Context, Loop, and Harness",
   "summary": "Learn the difference between prompt engineering, context engineering, loop engineering, and harness engineering—four distinct jobs often confused with each other. This video teaches what each one is, why teams get them wrong in the wrong order, and which one your team is probably neglecting in production systems.",
   "runs": "6:38",
   "chapters": [
    {
     "at": "0:00",
     "title": "Four words that get mashed into one"
    },
    {
     "at": "0:49",
     "title": "Prompt engineering - the smallest piece"
    },
    {
     "at": "1:46",
     "title": "Context engineering - what goes in the window"
    },
    {
     "at": "2:57",
     "title": "Loop engineering - what happens on the second try"
    },
    {
     "at": "3:56",
     "title": "Harness engineering - everything around the model"
    },
    {
     "at": "4:58",
     "title": "Where teams get the order wrong"
    },
    {
     "at": "5:41",
     "title": "Recap: four boxes, one order"
    }
   ],
   "tags": [
    "prompt engineering",
    "context engineering",
    "loop engineering",
    "harness engineering",
    "AI production",
    "LLM deployment",
    "machine learning operations",
    "AI systems design",
    "model validation",
    "fallback systems"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When NOT to Use a Language Model",
   "summary": "Learn which tools to use for different data problems and when to skip language models entirely. This video teaches you to match the right approach—classical machine learning, retrieval, or fine-tuning—based on whether your input is structured data or messy language, and what your output needs to be.",
   "runs": "6:25",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody asks"
    },
    {
     "at": "0:36",
     "title": "Regression: numbers from numbers"
    },
    {
     "at": "1:51",
     "title": "Classification: same argument, different output"
    },
    {
     "at": "2:35",
     "title": "The honest boundary"
    },
    {
     "at": "3:17",
     "title": "Fine-tuning: the piece in between"
    },
    {
     "at": "4:44",
     "title": "The mistake in the wild"
    },
    {
     "at": "5:18",
     "title": "Recap: shape of the input, shape of the answer"
    }
   ],
   "tags": [
    "language models",
    "machine learning",
    "regression",
    "classification",
    "fine-tuning",
    "retrieval",
    "structured data",
    "when not to use AI",
    "practical ML",
    "model selection"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "Cost of AI Agents: From Tokens to Production Bills",
   "summary": "This video breaks down how AI agent systems actually cost money—from the tokens you send in and out, through multi-step agent calls, retries, evaluation runs, and human review—and why that cost grows with transaction volume, not with seats. You'll learn the four levers that move costs down most effectively and how to instrument a system from day one so you can forecast expenses and identify which optimizations will actually help.",
   "runs": "7:27",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question that kills projects after launch"
    },
    {
     "at": "0:51",
     "title": "The first layer: tokens in, tokens out"
    },
    {
     "at": "1:31",
     "title": "Multiply by steps, add retries"
    },
    {
     "at": "2:19",
     "title": "Add evaluation runs and the human you haven't removed"
    },
    {
     "at": "3:17",
     "title": "Per transaction, not per seat"
    },
    {
     "at": "4:05",
     "title": "The levers that actually move the number"
    },
    {
     "at": "5:04",
     "title": "Two fifty versus seven dollars — same system, same day"
    },
    {
     "at": "5:54",
     "title": "What to instrument from day one"
    },
    {
     "at": "6:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI cost",
    "cost modeling",
    "agents",
    "tokens",
    "production systems",
    "cost optimization",
    "evaluation",
    "caching",
    "human review",
    "forecasting"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "It Doesn't Fall Over: Catching Silent AI Failures in Production",
   "summary": "Learn what actually happens when AI systems fail in production—they don't crash, they confidently produce wrong answers and quietly degrade. This lesson teaches you how to design logging, accountability, and policy frameworks to catch four types of silent failures (confident wrong answers, degradation, stalls, and compounding errors) before they reach customers.",
   "runs": "7:31",
   "chapters": [
    {
     "at": "0:00",
     "title": "It Doesn't Fall Over"
    },
    {
     "at": "0:44",
     "title": "The Confident Wrong Answer"
    },
    {
     "at": "1:31",
     "title": "Silent Degradation"
    },
    {
     "at": "2:25",
     "title": "The Stall"
    },
    {
     "at": "3:13",
     "title": "Compounding Error"
    },
    {
     "at": "4:04",
     "title": "Who's Responsible"
    },
    {
     "at": "4:53",
     "title": "What You Actually Log"
    },
    {
     "at": "5:39",
     "title": "Alone, Propose, Never"
    },
    {
     "at": "6:34",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI systems",
    "production failures",
    "silent degradation",
    "logging",
    "accountability",
    "error detection",
    "policy design",
    "AI governance",
    "agent systems",
    "operational risk"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Migrating a Live System: The Front-Door Pattern",
   "summary": "Learn how to add AI to a critical business system that cannot be taken offline for rebuilding. This video teaches the front-door pattern—placing your model before the existing system to read messy input and act through existing interfaces—and shows why you should start with high-volume, tolerant processes in shadow mode before moving to human-in-the-loop operation.",
   "runs": "5:49",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Rewrite Nobody Gets"
    },
    {
     "at": "0:41",
     "title": "In Front, Not Inside"
    },
    {
     "at": "1:38",
     "title": "Where the First One Goes"
    },
    {
     "at": "2:32",
     "title": "Shadow, Then Human, Then Narrow Autonomy"
    },
    {
     "at": "3:31",
     "title": "What You Leave Alone"
    },
    {
     "at": "4:05",
     "title": "The Month-Three Failure"
    },
    {
     "at": "4:55",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI deployment",
    "legacy systems",
    "system migration",
    "production constraints",
    "shadow mode",
    "human-in-the-loop",
    "logistics",
    "system design",
    "risk management",
    "operations"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Actually Changes for You as a Backend Developer",
   "summary": "Learn which of your existing engineering skills transfer directly to building systems with unreliable AI components and what genuinely new capabilities you need to develop. This lesson maps out the specific mindset shifts—from thinking in cases to thinking in distributions, from writing tests to maintaining evaluation sets, from handling loud failures to designing loops around quiet ones—and shows you where to focus your learning to actually ship reliable systems.",
   "runs": "8:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "So what do I actually need to learn?"
    },
    {
     "at": "0:42",
     "title": "What Transfers Almost Entirely"
    },
    {
     "at": "1:51",
     "title": "New Skill One: Thinking in Distributions"
    },
    {
     "at": "2:41",
     "title": "New Skill Two: Owning an Evaluation Set"
    },
    {
     "at": "3:36",
     "title": "New Skill Three and Four: The Loop and the Cost"
    },
    {
     "at": "4:40",
     "title": "What's Not Worth Your Time"
    },
    {
     "at": "5:28",
     "title": "Where Each Role Lands"
    },
    {
     "at": "6:20",
     "title": "A Realistic Order of Learning"
    },
    {
     "at": "7:02",
     "title": "The Mistake People Make"
    },
    {
     "at": "7:35",
     "title": "Recap"
    }
   ],
   "tags": [
    "backend development",
    "AI systems",
    "skill transfer",
    "evaluation sets",
    "model deployment",
    "systems thinking",
    "unreliable components",
    "learning path",
    "practical AI",
    "engineering mindset"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Questions for Deciding Whether Your Company Should Use AI",
   "summary": "Learn the six questions you must answer honestly—in order—to decide whether AI makes business sense for your company, not just whether the technology is impressive. This framework helps you avoid the common mistake of falling in love with the technology first, then looking for problems to justify it. By the end, you'll know how to evaluate whether shifting work to a probabilistic system actually pays for itself.",
   "runs": "6:35",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Answers Honestly"
    },
    {
     "at": "0:40",
     "title": "Question One — What Can't Software Do, and What's It Costing You"
    },
    {
     "at": "1:28",
     "title": "Question Two — Can a Wrong Answer Reach the Customer"
    },
    {
     "at": "2:05",
     "title": "Question Three — Do You Have the Data"
    },
    {
     "at": "2:49",
     "title": "Question Four — Can You Afford the Curve"
    },
    {
     "at": "3:18",
     "title": "Question Five — Who Owns the Probabilistic Component"
    },
    {
     "at": "3:45",
     "title": "Question Six — Will the Sponsor Still Be There"
    },
    {
     "at": "4:17",
     "title": "Three Honest Scenarios"
    },
    {
     "at": "5:20",
     "title": "The Mistake — Starting From the Technology"
    },
    {
     "at": "5:52",
     "title": "Recap"
    }
   ],
   "tags": [
    "AI decision-making",
    "business evaluation",
    "probabilistic systems",
    "cost analysis",
    "implementation framework",
    "data requirements",
    "accountability",
    "ROI assessment",
    "risk evaluation",
    "organizational readiness"
   ],
   "src": "/media/learn/shift/shift-19.mp4",
   "poster": "/media/learn/shift/shift-19.jpg",
   "captions": "/media/learn/shift/shift-19.vtt"
  }
 ];

export const MODELLING: Lesson[] = [
  {
   "n": 1,
   "title": "Graph Schema Design: Questions Before Nodes",
   "summary": "Learn the fundamental discipline of graph data modelling by building from the questions your product needs answered, not from domain entities. You'll see how starting with traversals instead of relational thinking dramatically reduces query hops and creates genuinely graph-shaped schemas.",
   "runs": "9:30",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Ava Actually Has"
    },
    {
     "at": "0:46",
     "title": "Five Real Questions"
    },
    {
     "at": "1:45",
     "title": "Shape One — The Relational Habit"
    },
    {
     "at": "2:57",
     "title": "Shape Two — Built From the Questions"
    },
    {
     "at": "4:30",
     "title": "The Whole Argument Is a Count"
    },
    {
     "at": "5:36",
     "title": "The Discipline — Name It, Say It, Then Draw It"
    },
    {
     "at": "6:33",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "7:29",
     "title": "A Model Tuned to Five Questions"
    },
    {
     "at": "8:26",
     "title": "Recap"
    }
   ],
   "tags": [
    "graph modelling",
    "schema design",
    "Cypher",
    "query optimization",
    "database design",
    "Neo4j",
    "relationship design",
    "traversals",
    "data structure"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 2,
   "title": "One Fact, Three Shapes: Modelling Facts in Cypher Graphs",
   "summary": "Learn the three fundamentally different ways to model a single fact in a graph database—as a property, a relationship to a shared node, or a node with its own relationships—and how to choose the right shape based on the questions you need to ask. This video teaches concrete rules for deciding when to use each pattern, with counter-examples showing how the same fact changes shape when your questions change.",
   "runs": "7:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "One Fact, Three Shapes"
    },
    {
     "at": "0:48",
     "title": "Shape One: The Property"
    },
    {
     "at": "1:36",
     "title": "Shape Two: The Relationship to a Shared Node"
    },
    {
     "at": "2:36",
     "title": "Shape Three: A Node With Its Own Relationships"
    },
    {
     "at": "3:49",
     "title": "The Working Rules"
    },
    {
     "at": "4:44",
     "title": "Counter-Example One: The Test Score"
    },
    {
     "at": "5:25",
     "title": "Counter-Example Two: The Home State"
    },
    {
     "at": "6:07",
     "title": "The Cost of Getting It Wrong"
    },
    {
     "at": "6:49",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "graph databases",
    "data modeling",
    "schema design",
    "Neo4j",
    "graph patterns",
    "properties vs nodes",
    "query design",
    "database architecture"
   ],
   "src": "/media/learn/modelling/modelling-02.mp4",
   "poster": "/media/learn/modelling/modelling-02.jpg",
   "captions": "/media/learn/modelling/modelling-02.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels in Cypher: The Rule and Common Mistakes",
   "summary": "Learn what labels actually are in Neo4j and when to use them correctly. This lesson covers the fundamental rule—labels answer \"what kind of thing is this\"—and shows three common ways labels get misused: as status flags, as data values, and as tenant identifiers. You'll understand why each misuse creates problems and how to model those scenarios properly with properties or nodes instead.",
   "runs": "6:31",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:37",
     "title": "A label is an index, not a description"
    },
    {
     "at": "1:10",
     "title": "Good use — two stable kinds at once"
    },
    {
     "at": "2:00",
     "title": "Bad use — status as a label"
    },
    {
     "at": "3:04",
     "title": "Bad use — value as a label"
    },
    {
     "at": "4:01",
     "title": "Bad use — a label per tenant"
    },
    {
     "at": "4:44",
     "title": "The rule and the limits of hierarchy"
    },
    {
     "at": "5:43",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "Cypher",
    "labels",
    "graph database",
    "data modeling",
    "schema design",
    "properties",
    "best practices",
    "database optimization",
    "query performance"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j",
   "summary": "Learn why every Neo4j relationship must have a direction, and why that direction matters for data integrity rather than query performance. Discover how to choose between storing related data as a single relationship type with properties or splitting into multiple relationship types for better query efficiency.",
   "runs": "6:56",
   "chapters": [
    {
     "at": "0:00",
     "title": "An Arrow Only Points One Way"
    },
    {
     "at": "0:47",
     "title": "Direction Records the Fact, Not the Query"
    },
    {
     "at": "1:45",
     "title": "The Duplicate-Edge Trap"
    },
    {
     "at": "2:35",
     "title": "Now the Real Lesson: How Many Types?"
    },
    {
     "at": "3:19",
     "title": "The Arithmetic on a Dense Node"
    },
    {
     "at": "4:22",
     "title": "The Limit — When Splitting Goes Too Far"
    },
    {
     "at": "5:36",
     "title": "Naming: Read It Like a Sentence"
    },
    {
     "at": "6:07",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "relationships",
    "direction",
    "schema design",
    "relationship types",
    "properties",
    "query performance",
    "graph database",
    "Cypher"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reified Relationships: When Facts Need Their Own Nodes",
   "summary": "Learn when a relationship between two nodes should be promoted to its own node—when facts involve multiple things, properties accumulate, or the same pair repeats. You'll understand the reified relationship pattern, see it applied across real examples like applications and course enrollments, and know the true cost of this design choice.",
   "runs": "6:53",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody's relationship can answer"
    },
    {
     "at": "0:54",
     "title": "A relationship joins exactly two nodes"
    },
    {
     "at": "1:30",
     "title": "Promoting the relationship to a node"
    },
    {
     "at": "2:58",
     "title": "How you know you've hit this"
    },
    {
     "at": "3:40",
     "title": "The same pattern, twice more"
    },
    {
     "at": "4:24",
     "title": "The reified relationship"
    },
    {
     "at": "5:04",
     "title": "The honest cost"
    },
    {
     "at": "5:34",
     "title": "Where people go wrong"
    },
    {
     "at": "6:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "graph databases",
    "data modeling",
    "reified relationships",
    "node design",
    "many-to-many relationships",
    "property accumulation",
    "schema design",
    "entity relationships",
    "database patterns",
    "graph theory"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graphs: Three Patterns for Historical Data",
   "summary": "Learn three concrete patterns for storing historical data in graph databases so facts aren't lost when they change—validity windows on relationships, version nodes chained together, and time trees built from calendar nodes. You'll see how to answer \"how did this move over time\" questions under each model and understand which pattern fits your access patterns, plus three fundamental rules about never overwriting queryable facts, storing events instead of aggregates, and keeping time consistent within a domain.",
   "runs": "7:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Vanishing Acceptance Rate"
    },
    {
     "at": "0:45",
     "title": "The Real Question"
    },
    {
     "at": "1:18",
     "title": "Option One — Validity Windows on the Relationship"
    },
    {
     "at": "2:14",
     "title": "Option Two — A Version Node Per Snapshot"
    },
    {
     "at": "3:13",
     "title": "Option Three — A Time Tree"
    },
    {
     "at": "4:23",
     "title": "The Four-Cycle Question, Under All Three"
    },
    {
     "at": "5:05",
     "title": "The Mistakes"
    },
    {
     "at": "5:57",
     "title": "Bitemporality — What Changed vs. What You Knew"
    },
    {
     "at": "6:53",
     "title": "Recap"
    }
   ],
   "tags": [
    "graph databases",
    "temporal modeling",
    "time series",
    "Neo4j",
    "data modeling",
    "historical data",
    "versioning",
    "bitemporality",
    "schema design",
    "queries"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Database Constraints: Enforcing Data Shape in Neo4j",
   "summary": "Learn how to enforce data integrity in Neo4j by building constraints that match the decisions you've already made about your data model. This lesson covers uniqueness, node keys, existence, and property type constraints—the tools that prevent the database model from drifting away from your intended design and also unlock performance benefits through automatic indexing.",
   "runs": "9:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "Half the Colleges Have a Code"
    },
    {
     "at": "0:51",
     "title": "Uniqueness: The Whitespace Duplicate"
    },
    {
     "at": "2:09",
     "title": "Node Key: Identity Made of Several Parts"
    },
    {
     "at": "3:36",
     "title": "Existence: The Property Nobody's Allowed to Skip"
    },
    {
     "at": "4:41",
     "title": "Property Type: The Test Score That Arrived as Text"
    },
    {
     "at": "5:57",
     "title": "The Part People Miss: Uniqueness Is Also an Index"
    },
    {
     "at": "6:43",
     "title": "One Script, In Order, Before the Data"
    },
    {
     "at": "7:42",
     "title": "What Constraints Cannot Do"
    },
    {
     "at": "8:38",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "constraints",
    "data integrity",
    "uniqueness constraint",
    "node key",
    "existence constraint",
    "property type",
    "database design",
    "indexing",
    "data validation"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 8,
   "title": "Indexes: Finding the Starting Node Without Scanning",
   "summary": "Learn when and why indexes matter in graph database design—not as a performance fix applied later, but as a modelling decision made from day one. Discover the five index types (range, composite, text, full-text, and relationship indexes), see real PROFILE output showing the difference between indexed and non-indexed lookups, and understand the write and storage cost that comes with each index you create.",
   "runs": "9:36",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question That Starts This One"
    },
    {
     "at": "0:45",
     "title": "Finding the First Node vs Walking From It"
    },
    {
     "at": "2:02",
     "title": "Range Indexes — Equality, Comparison, Dates"
    },
    {
     "at": "2:57",
     "title": "Composite Indexes — Order Matters"
    },
    {
     "at": "4:11",
     "title": "Text Indexes — CONTAINS, ENDS WITH, and the Wildcard Limit"
    },
    {
     "at": "5:13",
     "title": "Full-Text Indexes — Real Search, a Different Query Shape"
    },
    {
     "at": "6:12",
     "title": "When the Question Is Anchored on a Relationship"
    },
    {
     "at": "7:12",
     "title": "With and Without — Reading db hits"
    },
    {
     "at": "7:49",
     "title": "The Cost Nobody Mentions"
    },
    {
     "at": "8:38",
     "title": "Recap"
    }
   ],
   "tags": [
    "graph databases",
    "Neo4j",
    "indexes",
    "database design",
    "query optimization",
    "range index",
    "composite index",
    "text index",
    "full-text search",
    "database performance"
   ],
   "src": "/media/learn/modelling/modelling-08.mp4",
   "poster": "/media/learn/modelling/modelling-08.jpg",
   "captions": "/media/learn/modelling/modelling-08.vtt"
  },
  {
   "n": 10,
   "title": "Migrating Properties to Nodes on a Live Database",
   "summary": "When your graph grows to millions of nodes, string properties need to become real nodes so they can hold relationships. This lesson teaches a five-step migration method—add new shape, merge nodes, batch-attach relationships, verify counts, then gradually remove the old—that keeps the database live and reversible at every step.",
   "runs": "8:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Asks Until Four Million Students Show Up"
    },
    {
     "at": "0:40",
     "title": "The Principle: Expand, Migrate, Contract"
    },
    {
     "at": "1:24",
     "title": "Step One: The Constraint Before the Nodes"
    },
    {
     "at": "2:04",
     "title": "Step Two: Nodes From the Distinct Values"
    },
    {
     "at": "2:45",
     "title": "Step Three: Attaching Relationships in Batches"
    },
    {
     "at": "3:41",
     "title": "Step Four: Count Both, Compare — The Step Everyone Skips"
    },
    {
     "at": "4:35",
     "title": "Step Five and Six: Run Both, Then Drop the Old"
    },
    {
     "at": "5:21",
     "title": "Three Harder Refactors, in Brief"
    },
    {
     "at": "6:41",
     "title": "Recap: Additive, Batched, Proven"
    },
    {
     "at": "7:15",
     "title": "The Real Lesson of the Whole Series"
    }
   ],
   "tags": [
    "graph database",
    "schema migration",
    "neo4j",
    "live data",
    "refactoring",
    "constraints",
    "MERGE",
    "batch processing",
    "data verification",
    "production deployment"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Neptune vs Neo4j: Costs, Tradeoffs, and When to Migrate",
   "summary": "Learn whether migrating from AWS Neptune to Neo4j makes sense for your team by understanding what each database actually is, where each wins, and what hidden design and operational work you'd take on. This lesson walks through five concrete questions to answer before considering a move, using a real 40-million-node graph as a worked example.",
   "runs": "8:28",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody wants to ask out loud"
    },
    {
     "at": "0:53",
     "title": "What each engine actually is"
    },
    {
     "at": "1:51",
     "title": "The language difference, in one sentence"
    },
    {
     "at": "2:31",
     "title": "The tooling gap — the honest main reason teams move"
    },
    {
     "at": "3:29",
     "title": "Where Neptune wins — say it plainly"
    },
    {
     "at": "4:20",
     "title": "Cost — the arithmetic, not a claim"
    },
    {
     "at": "5:27",
     "title": "What people assume transfers — and doesn't"
    },
    {
     "at": "6:32",
     "title": "The decision checklist — five questions"
    },
    {
     "at": "7:35",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neptune",
    "Neo4j",
    "graph database",
    "Cypher",
    "Gremlin",
    "database migration",
    "cost analysis",
    "managed vs self-hosted",
    "database comparison",
    "architecture"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: Five Critical Differences Between Neptune and Neo4j",
   "summary": "Both Neptune and Neo4j are property graphs, but they handle labels, IDs, properties, types, and edges differently in five specific places where migrations typically break. This lesson walks through each difference — from labels (one vs. many) to the most common bug (ID stability) — and shows how to use these differences as an opportunity to reshape your graph for your data. You'll learn a mapping table that covers all five distinctions and how to decide when to refactor flags, workarounds, and stored types during migration.",
   "runs": "8:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "Same Model, Different Shape"
    },
    {
     "at": "1:02",
     "title": "Labels: One Versus Several"
    },
    {
     "at": "2:09",
     "title": "IDs: The Bug Everyone Hits"
    },
    {
     "at": "3:38",
     "title": "Properties: Multi-Valued and Meta"
    },
    {
     "at": "5:04",
     "title": "Types: Smaller and Stricter"
    },
    {
     "at": "5:51",
     "title": "Edges: Mostly the Same Story"
    },
    {
     "at": "6:23",
     "title": "The Opportunity: Fix the Shape You're Stuck With"
    },
    {
     "at": "7:08",
     "title": "The Mapping Table"
    },
    {
     "at": "8:02",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neptune",
    "Neo4j",
    "graph databases",
    "migration",
    "property graphs",
    "data modeling",
    "schema mapping",
    "graph transformation"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Rewriting Gremlin Queries in Cypher: The Complete Translation Guide",
   "summary": "Learn how to translate Gremlin graph traversal code into Cypher by understanding the fundamental differences between imperative and declarative query languages. This video walks through pattern-by-pattern conversions—from node lookups and filters to loops, grouping, and write operations—showing you both where the two languages map cleanly and where you need to rethink your approach entirely.",
   "runs": "10:11",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:47",
     "title": "The Simplest Thing: Finding a Node"
    },
    {
     "at": "1:20",
     "title": "Directions and Filters"
    },
    {
     "at": "2:26",
     "title": "Shaping the Result"
    },
    {
     "at": "3:15",
     "title": "Where It Stops Mapping Cleanly: Loops"
    },
    {
     "at": "4:40",
     "title": "The Biggest Shift: Grouping"
    },
    {
     "at": "5:49",
     "title": "Named Paths and Deduplication"
    },
    {
     "at": "6:28",
     "title": "The Genuine Win: Upsert"
    },
    {
     "at": "7:33",
     "title": "Mutating Steps and the Write Clauses"
    },
    {
     "at": "8:15",
     "title": "The Mistake Almost Everyone Makes"
    },
    {
     "at": "8:58",
     "title": "Recap"
    }
   ],
   "tags": [
    "Gremlin",
    "Cypher",
    "query rewrite",
    "graph databases",
    "Neo4j",
    "query translation",
    "database migration",
    "traversal patterns",
    "declarative vs imperative",
    "graph query language"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating RDF to Neo4j: SPARQL to Cypher",
   "summary": "Learn how to convert RDF triple stores and SPARQL queries into Neo4j's property graph model. This video covers the core migration rules—mapping RDF predicates to properties and relationships, handling blank nodes, reification, named graphs, and the practical pitfalls teams encounter in production.",
   "runs": "9:35",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question RDF folks actually have"
    },
    {
     "at": "0:51",
     "title": "The rule: literal object, or resource object"
    },
    {
     "at": "2:21",
     "title": "Blank nodes"
    },
    {
     "at": "3:17",
     "title": "Reification maps onto the intermediate node"
    },
    {
     "at": "4:10",
     "title": "Named graphs and the ontology gap"
    },
    {
     "at": "5:42",
     "title": "IRIs, uniqueness, and neosemantics"
    },
    {
     "at": "6:46",
     "title": "SPARQL patterns to Cypher, briefly"
    },
    {
     "at": "7:37",
     "title": "Where teams get burned"
    },
    {
     "at": "8:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "RDF migration",
    "SPARQL to Cypher",
    "Neo4j",
    "Neptune",
    "property graphs",
    "data modeling",
    "triples",
    "graph databases",
    "neosemantics",
    "ontology"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large AWS Neptune Graphs: Strategy and Pitfalls",
   "summary": "Learn the only practical way to export a large production graph database without downtime: take a snapshot, enable streams for change capture, and use Neptune's export utility on a restored clone. This video walks through why naive approaches fail at scale, what the CSV output actually contains, and the critical validation steps that prevent silent data loss.",
   "runs": "8:28",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody wants to answer honestly"
    },
    {
     "at": "0:58",
     "title": "Gremlin export — fine for a slice, not for the graph"
    },
    {
     "at": "1:46",
     "title": "Neptune's own export utility — the real workhorse, and its price tag"
    },
    {
     "at": "2:56",
     "title": "The cluster snapshot — the safe, consistent starting line"
    },
    {
     "at": "3:42",
     "title": "Neptune Streams — turn it on before the snapshot, not after"
    },
    {
     "at": "4:53",
     "title": "What the export actually looks like on disk"
    },
    {
     "at": "6:08",
     "title": "What gets lost, and what you must check by hand"
    },
    {
     "at": "7:17",
     "title": "Recap — write the numbers down before you move on"
    }
   ],
   "tags": [
    "AWS Neptune",
    "graph database export",
    "data migration",
    "Gremlin",
    "database snapshots",
    "Neptune Streams",
    "CSV export",
    "data validation"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Loading Neptune Data Into Neo4j: The Right Order Matters",
   "summary": "Learn why a 40-million-node Neptune-to-Neo4j migration can take an hour or three days depending on your load order, and the specific sequence of steps that prevents silent failures and quadratic performance. You'll understand when to use neo4j-admin import versus LOAD CSV, why constraints must come first, and how to verify your migration succeeded by comparing node and relationship counts.",
   "runs": "9:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: How Long Should This Take?"
    },
    {
     "at": "0:55",
     "title": "The Arithmetic Behind the Rule"
    },
    {
     "at": "2:10",
     "title": "Two Loaders, Two Jobs"
    },
    {
     "at": "3:27",
     "title": "CALL IN TRANSACTIONS: A Real Batch Size"
    },
    {
     "at": "4:36",
     "title": "The Field Mapping, Neptune to Neo4j"
    },
    {
     "at": "5:59",
     "title": "Where Migrations Actually Go Wrong Here"
    },
    {
     "at": "6:57",
     "title": "Proving It Landed: The Count Check"
    },
    {
     "at": "8:22",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "Neptune",
    "data migration",
    "bulk load",
    "LOAD CSV",
    "neo4j-admin import",
    "constraints",
    "Cypher",
    "graph database"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Rewriting the Application Layer: Migrating from Gremlin to Cypher",
   "summary": "Moving a graph application from Neptune to Neo4j requires rewriting far more than just query strings—the entire application layer changes, from drivers and sessions to transaction handling and result mapping. Learn the six key architectural differences, how to run both engines simultaneously with a single interface, and how to validate correctness across both systems before cutting over.",
   "runs": "7:11",
   "chapters": [
    {
     "at": "0:00",
     "title": "The part everyone underestimates"
    },
    {
     "at": "0:45",
     "title": "Traversal source versus driver and sessions"
    },
    {
     "at": "1:47",
     "title": "Implicit versus explicit transactions"
    },
    {
     "at": "3:04",
     "title": "Reading results back"
    },
    {
     "at": "3:56",
     "title": "Routing reads and parameters"
    },
    {
     "at": "4:53",
     "title": "The interface: running both engines at once"
    },
    {
     "at": "5:45",
     "title": "One test suite, two engines"
    },
    {
     "at": "6:23",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "Gremlin",
    "Cypher",
    "database migration",
    "application layer",
    "transactions",
    "interface pattern",
    "testing",
    "graph database"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Database Migration: A Five-Phase Cutover Strategy",
   "summary": "Learn how to safely migrate from one graph database to another without a risky single-step cutover. This lesson walks through five phases—shadow reads, dual writes, graduated read migration, role reversal, and decommission—with the measurement points and rollback procedures that keep production data safe throughout. After watching, you'll understand how to plan a database migration that catches bugs early, maintains a source of truth, and can roll back at any point using just a feature flag.",
   "runs": "6:36",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Wants To Ask"
    },
    {
     "at": "0:42",
     "title": "Phase One — Shadow Reads"
    },
    {
     "at": "1:47",
     "title": "Phase Two — Dual Writes"
    },
    {
     "at": "2:46",
     "title": "Phase Three — Read Migration By Query Class"
    },
    {
     "at": "3:20",
     "title": "Phase Four and Five — Neptune As Shadow, Then Decommission"
    },
    {
     "at": "4:02",
     "title": "What To Measure, And The Rollback"
    },
    {
     "at": "4:48",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "5:28",
     "title": "Recap"
    },
    {
     "at": "6:07",
     "title": "What To Tell Whoever Approves This"
    }
   ],
   "tags": [
    "database migration",
    "Neo4j",
    "graph database",
    "cutover strategy",
    "shadow reads",
    "dual writes",
    "feature flags",
    "production safety",
    "query classes",
    "rollback"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: Query Syntax That Replaces Join Plans",
   "summary": "Learn how Cypher's pattern syntax lets you write graph queries as a single readable line instead of complex joins, and master the small details—direction, anonymous nodes, optional matching—that separate working queries from correct ones. After this lesson you'll understand why MATCH chains and comma-separated patterns work the way they do, and you'll recognize the three most common mistakes that silently return wrong answers rather than errors.",
   "runs": "9:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:48",
     "title": "One Line, One Question"
    },
    {
     "at": "1:56",
     "title": "Naming Only What You Use"
    },
    {
     "at": "2:51",
     "title": "Direction Asks Different Questions"
    },
    {
     "at": "3:47",
     "title": "Several Patterns, One MATCH"
    },
    {
     "at": "4:55",
     "title": "Labels And Types As Filters"
    },
    {
     "at": "5:36",
     "title": "The Student Who Disappears"
    },
    {
     "at": "6:38",
     "title": "OPTIONAL MATCH, Side By Side"
    },
    {
     "at": "7:28",
     "title": "Common Mistakes"
    },
    {
     "at": "8:09",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "Neo4j",
    "graph database",
    "query syntax",
    "pattern matching",
    "OPTIONAL MATCH",
    "relationship direction",
    "database joins",
    "query design",
    "common mistakes"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 2,
   "title": "WITH: The Checkpoint Clause in Cypher Queries",
   "summary": "Learn how the WITH clause acts as a checkpoint in the middle of your Cypher query pipeline, allowing you to reshape, aggregate, and filter rows before passing them to the next clause. Understand why WITH is a \"wall\" that blocks any variables you don't explicitly carry through, and discover when to use it for renaming, limiting row counts early, and building readable multi-step queries.",
   "runs": "6:58",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question you can't answer yet"
    },
    {
     "at": "1:03",
     "title": "Rows in, rows out"
    },
    {
     "at": "1:49",
     "title": "WITH computes it, WHERE filters it"
    },
    {
     "at": "3:14",
     "title": "WITH is a wall"
    },
    {
     "at": "4:23",
     "title": "Renaming, and doing the expensive part on fewer rows"
    },
    {
     "at": "5:28",
     "title": "Chaining WITHs so each step is one idea"
    },
    {
     "at": "6:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "Neo4j",
    "WITH clause",
    "query pipeline",
    "aggregation",
    "filtering",
    "SQL HAVING",
    "graph queries"
   ],
   "src": "/media/learn/cypher/cypher-02.mp4",
   "poster": "/media/learn/cypher/cypher-02.jpg",
   "captions": "/media/learn/cypher/cypher-02.vtt"
  },
  {
   "n": 3,
   "title": "Counting Properly in Cypher: Aggregation Without GROUP BY",
   "summary": "Learn how Cypher automatically determines grouping keys from non-aggregated columns in RETURN statements, eliminating the need for explicit GROUP BY. Discover the critical differences between count(x), count(*), and count(DISTINCT x), and master aggregation functions like collect(), avg, min, max, and sum—including common pitfalls with null values and OPTIONAL MATCH.",
   "runs": "8:20",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question with no GROUP BY"
    },
    {
     "at": "0:45",
     "title": "The rule: everything else is the group"
    },
    {
     "at": "1:43",
     "title": "Add one column, watch it break"
    },
    {
     "at": "2:41",
     "title": "count(x) vs count(*) vs count(DISTINCT x)"
    },
    {
     "at": "3:49",
     "title": "collect(): the one people fall in love with"
    },
    {
     "at": "4:53",
     "title": "avg, min, max, sum — and nulls"
    },
    {
     "at": "5:41",
     "title": "The trap: OPTIONAL MATCH and the phantom zero"
    },
    {
     "at": "7:16",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "SQL aggregation",
    "GROUP BY",
    "count",
    "collect",
    "null handling",
    "OPTIONAL MATCH",
    "database queries",
    "Neo4j"
   ],
   "src": "/media/learn/cypher/cypher-03.mp4",
   "poster": "/media/learn/cypher/cypher-03.jpg",
   "captions": "/media/learn/cypher/cypher-03.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths and Shortest Path Queries in Cypher",
   "summary": "Learn how to find relationships across multiple hops in graph databases using Cypher's variable-length path syntax and the shortestPath function. This video teaches you how to write efficient queries that explore connected data at configurable distances, how to inspect the paths you find, and the performance pitfalls to avoid when working with large result sets.",
   "runs": "8:15",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question joins can't answer"
    },
    {
     "at": "1:06",
     "title": "The asterisk and its bounds"
    },
    {
     "at": "2:19",
     "title": "Watching the row count explode"
    },
    {
     "at": "3:18",
     "title": "Paths as values you can inspect"
    },
    {
     "at": "4:26",
     "title": "shortestPath: stop at the first one"
    },
    {
     "at": "5:36",
     "title": "How this differs from plain variable-length"
    },
    {
     "at": "6:17",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "graph databases",
    "variable-length paths",
    "shortest path",
    "query optimization",
    "path matching",
    "Neo4j",
    "graph traversal",
    "relationship queries",
    "database performance"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "Cypher: Lists, Maps, and Data Shaping",
   "summary": "Learn the parts of Cypher that shape query results for output—lists, maps, and the operations that transform them. After this video, you'll be able to use list and pattern comprehensions, UNWIND row expansion, map projection for clean output, and parameterized queries to build real-world result sets efficiently.",
   "runs": "6:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Part of Cypher That Isn't About the Graph"
    },
    {
     "at": "0:35",
     "title": "Lists Are First-Class"
    },
    {
     "at": "1:16",
     "title": "List Comprehensions — Set-Builder Notation"
    },
    {
     "at": "2:06",
     "title": "Pattern Comprehensions — Same Idea, Over a Path"
    },
    {
     "at": "2:58",
     "title": "UNWIND — The Inverse Operation"
    },
    {
     "at": "4:05",
     "title": "Maps and Map Projection"
    },
    {
     "at": "5:19",
     "title": "Where People Trip"
    },
    {
     "at": "6:02",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "list comprehensions",
    "pattern comprehensions",
    "UNWIND",
    "map projection",
    "query parameters",
    "data shaping",
    "Neo4j",
    "graph queries",
    "result formatting"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 6,
   "title": "Cypher Subqueries: EXISTS, COUNT, and CALL",
   "summary": "Learn how to ask questions inside questions using Cypher subqueries—EXISTS for yes-or-no checks, COUNT for filtering by numbers, and CALL for per-row result sets. Master the pattern that replaces expensive loops with a single round-trip query, from simple existence checks to building complex results like top-N rankings per group.",
   "runs": "6:03",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:41",
     "title": "The old way: MATCH and DISTINCT"
    },
    {
     "at": "1:21",
     "title": "EXISTS — does a pattern exist at all"
    },
    {
     "at": "2:06",
     "title": "COUNT subquery — a number inline"
    },
    {
     "at": "2:52",
     "title": "CALL — the general subquery"
    },
    {
     "at": "3:40",
     "title": "Building the top-N: per college"
    },
    {
     "at": "4:37",
     "title": "Where people trip"
    },
    {
     "at": "5:14",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "subqueries",
    "EXISTS",
    "COUNT",
    "CALL",
    "Neo4j",
    "query optimization",
    "database queries"
   ],
   "src": "/media/learn/cypher/cypher-06.mp4",
   "poster": "/media/learn/cypher/cypher-06.jpg",
   "captions": "/media/learn/cypher/cypher-06.vtt"
  },
  {
   "n": 8,
   "title": "Importing Data into Neo4j: CSV to Graph",
   "summary": "Learn how to import CSV data into Neo4j by loading colleges, departments, and professors into a graph database. This lesson covers the critical patterns that prevent common import pitfalls: using constraints for safe merges, processing nodes before relationships, type conversion from strings, handling missing and list data, and batching large files to avoid memory issues.",
   "runs": "8:50",
   "chapters": [
    {
     "at": "0:00",
     "title": "An Empty Graph Is Not a Graph"
    },
    {
     "at": "0:35",
     "title": "LOAD CSV and the String Problem"
    },
    {
     "at": "1:54",
     "title": "One Pass Per Node Type"
    },
    {
     "at": "2:57",
     "title": "Constraints Before, Not After"
    },
    {
     "at": "4:02",
     "title": "Batching With CALL IN TRANSACTIONS"
    },
    {
     "at": "5:22",
     "title": "Blanks, Lists, and Splitting a Column"
    },
    {
     "at": "6:43",
     "title": "Verification Nobody Does"
    },
    {
     "at": "7:45",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "CSV import",
    "LOAD CSV",
    "data import",
    "constraints",
    "MERGE",
    "transactions",
    "batching",
    "graph database",
    "data loading"
   ],
   "src": "/media/learn/cypher/cypher-08.mp4",
   "poster": "/media/learn/cypher/cypher-08.jpg",
   "captions": "/media/learn/cypher/cypher-08.vtt"
  },
  {
   "n": 9,
   "title": "Neo4j Query Performance: Indexes and Reading Execution Plans",
   "summary": "Learn why queries that work on small datasets become slow on real databases, and how to fix them using indexes and execution plans. This video teaches you to read PROFILE output to spot performance bottlenecks, and to choose the right index type—range, composite, or text—for your filters. You'll walk away able to diagnose slow queries and apply the three most common solutions.",
   "runs": "9:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:53",
     "title": "What 'No Index' Actually Does"
    },
    {
     "at": "1:43",
     "title": "Range Indexes"
    },
    {
     "at": "2:33",
     "title": "Composite Indexes"
    },
    {
     "at": "3:15",
     "title": "Text Indexes and the Wildcard Trap"
    },
    {
     "at": "4:19",
     "title": "Constraints Are Indexes With a Promise"
    },
    {
     "at": "5:02",
     "title": "EXPLAIN vs PROFILE"
    },
    {
     "at": "5:51",
     "title": "Reading One, Top to Bottom"
    },
    {
     "at": "7:02",
     "title": "Operators Worth Knowing, and Eager"
    },
    {
     "at": "7:56",
     "title": "Mistakes People Make"
    },
    {
     "at": "8:48",
     "title": "Recap"
    }
   ],
   "tags": [
    "Neo4j",
    "query performance",
    "indexes",
    "PROFILE",
    "execution plans",
    "database optimization",
    "range index",
    "composite index",
    "text index",
    "query tuning"
   ],
   "src": "/media/learn/cypher/cypher-09.mp4",
   "poster": "/media/learn/cypher/cypher-09.jpg",
   "captions": "/media/learn/cypher/cypher-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Queries That Look Correct (But Aren't)",
   "summary": "Learn to spot five common query mistakes that produce wrong results or timeout in production—each runs without errors, making them dangerous. The video covers Cartesian products, unbounded traversals, count miscalculations, MERGE misunderstandings, and how new labels can change query performance, then shows you how to diagnose and fix each one.",
   "runs": "9:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The queries that looked fine"
    },
    {
     "at": "0:39",
     "title": "Mistake one: every student paired with every professor"
    },
    {
     "at": "2:18",
     "title": "Mistake two: the traversal that ate the graph"
    },
    {
     "at": "3:38",
     "title": "Mistake three: the count that lied"
    },
    {
     "at": "5:14",
     "title": "Mistake four: two Doctor Lins"
    },
    {
     "at": "6:43",
     "title": "Mistake five: slower after we helped it"
    },
    {
     "at": "8:04",
     "title": "Five habits, one sentence each"
    }
   ],
   "tags": [
    "Neo4j",
    "Cypher",
    "query optimization",
    "common mistakes",
    "Cartesian products",
    "unbounded paths",
    "debugging",
    "query performance",
    "MERGE",
    "PROFILE"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];
