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
   "summary": "Discover why traditional software testing practices break down with language models, which can produce many valid outputs where no single correct answer exists. Learn the four fundamental challenges: multiple acceptable outputs, the difficulty of automatically judging meaning, non-deterministic behavior, and the spectrum of severity when models fail—and see the common mistakes teams make when trying to test them.",
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
    "language model testing",
    "LLM evaluation",
    "software testing",
    "hallucination",
    "non-deterministic",
    "oracle problem",
    "test automation",
    "AI quality assurance"
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
   "title": "Judge Model Biases: Position, Verbosity, and Self-Preference",
   "summary": "A judge model can pass calibration checks and still harbor systematic biases that consistently misgrade outputs in predictable ways. This video identifies four concrete biases—position bias, verbosity bias, self-preference bias, and improper calibration—and shows you how to detect and avoid them when using language models as evaluators.",
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
    "judge models",
    "evaluation bias",
    "position bias",
    "verbosity bias",
    "self-preference",
    "LLM evaluation",
    "model calibration",
    "pairwise comparison",
    "bias detection",
    "systematic error"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why BLEU, ROUGE, and Exact Match Fail",
   "summary": "Learn why common LLM evaluation metrics like BLEU, ROUGE, and exact match measure word overlap, not actual correctness—and what to use instead. This video shows you how these metrics were built for translation and summarization, where one phrasing is expected, but fail when models paraphrase, and walks you through semantic similarity, LLM-as-judge, and task-based evaluation as better alternatives.",
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
    "LLM evaluation",
    "BLEU",
    "ROUGE",
    "exact match",
    "semantic similarity",
    "metrics",
    "LLM-as-judge",
    "hallucination",
    "evaluation methods",
    "model assessment"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Scoring RAG Systems: Retriever and Generator Separately",
   "summary": "Learn how to diagnose failures in retrieval-augmented generation (RAG) systems by splitting evaluation into two independent scores instead of relying on one end-to-end metric. You'll discover how to measure retriever performance using recall and precision against labeled ground truth passages, and how to evaluate generator faithfulness and answer relevance separately, so you know exactly which component to fix when your system gives a bad answer.",
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
    "evaluation metrics",
    "retriever scoring",
    "generator scoring",
    "LLM",
    "recall at k",
    "precision at k",
    "faithfulness",
    "debugging"
   ],
   "src": "/media/learn/llm-eval/llm-eval-06.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-06.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-06.vtt"
  },
  {
   "n": 7,
   "title": "Building a Safety Net: Automated Evaluation in CI/CD Pipelines",
   "summary": "Learn how to move beyond one-time model evaluation to continuous automated testing that catches regressions before they reach users. This video teaches you how to build a golden set of examples, choose the right metrics and thresholds, and wire evaluation into your CI/CD pipeline so every code change is automatically validated against your quality standards.",
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
    "safety net",
    "automated testing",
    "metrics",
    "thresholds",
    "LLM deployment",
    "quality assurance",
    "regression detection"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Why Passing Scores Don't Guarantee Safety",
   "summary": "Learn the critical difference between evaluation (testing a model on known questions) and red-teaming (actively trying to break it with new attacks). Understand why a high test score only measures performance on questions you asked, not on the infinite space of questions you didn't, and discover three common mistakes teams make when deploying AI systems.",
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
    "evaluation",
    "red-teaming",
    "model safety",
    "testing",
    "AI deployment",
    "adversarial attacks",
    "machine learning",
    "safety testing",
    "model validation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Model Servers Are Different: Batching, Latency, and Memory",
   "summary": "Learn why running a language model at scale creates unique challenges that don't exist in normal web apps. This video explains how models generate text one token at a time, how servers batch requests to keep GPUs efficient, and how the memory required for key-value caches forces you to choose between latency and throughput.",
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
    "GPU batching",
    "latency vs throughput",
    "key-value cache",
    "token generation",
    "inference optimization",
    "machine learning systems",
    "autoregressive generation",
    "resource constraints"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: How LLMs Process Multiple Requests Efficiently",
   "summary": "This video explains how continuous batching fixes the GPU inefficiency of static batching when processing multiple language model requests of different lengths. You'll learn why static batching wastes compute by forcing short requests to wait for long ones, and how continuous batching reschedules requests at every token step so that GPU slots are never idle. After watching, you'll understand the key trade-off between batch size limits and the dramatic efficiency gains continuous batching provides.",
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
    "continuous batching",
    "static batching",
    "LLM inference",
    "GPU scheduling",
    "token generation",
    "batch processing",
    "language models",
    "request queueing",
    "compute efficiency",
    "attention mechanism"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache and Block Paging",
   "summary": "Learn why GPUs serving AI models fill up so quickly despite having capacity for many concurrent requests, and discover how block paging—borrowed from operating systems—solves the memory fragmentation problem. This video explains the KV cache bottleneck and shows how sharing cache blocks across requests can dramatically improve GPU efficiency.",
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
    "memory fragmentation",
    "block paging",
    "token inference",
    "LLM serving",
    "virtual memory",
    "concurrent requests",
    "memory management",
    "transformer models"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "This video explores three practical techniques for reducing model size and inference speed: quantization (rounding parameter precision), distillation (training a small model to copy a large one), and pruning (removing parameters that barely matter). You'll learn how each approach works, why they're effective, and the critical mistakes to avoid—like compressing blindly without measuring performance on your actual use cases.",
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
    "machine learning optimization",
    "inference speed",
    "parameters",
    "model size",
    "neural networks",
    "performance measurement"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "Serving Hundreds of Custom Models: Adapters and Routing",
   "summary": "Learn why companies can't run one full language model per customer and how they solve it instead with shared base models and tiny adapters. You'll understand how adapter swaps work, why cold starts matter, and how routers direct requests to the right machines—the complete architecture for serving personalized models at scale.",
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
    "adapters",
    "model serving",
    "GPU memory",
    "routing",
    "fine-tuning",
    "cold starts",
    "machine learning systems"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: Making LLMs Faster Without Lowering Quality",
   "summary": "Learn how speculative decoding lets a small, fast draft model propose multiple tokens ahead while a large, accurate target model verifies them all at once—speeding up inference without sacrificing output quality. You'll understand why this works, what can go wrong in implementation, and how the final answer remains exactly what the big model would have written anyway.",
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
    "LLM inference",
    "language model optimization",
    "draft model",
    "token generation",
    "model acceleration",
    "machine learning",
    "neural networks",
    "transformer inference",
    "prompt optimization"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Use Multiple GPUs for AI Models",
   "summary": "Learn the three fundamentally different strategies for scaling AI model inference across multiple GPUs: data parallelism for handling more requests, tensor parallelism for splitting large calculations, and pipeline parallelism for dividing model layers into stages. After watching, you'll understand which approach solves which problem, why teams often combine all three, and where the real engineering challenges actually lie.",
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
    "GPU scaling",
    "data parallelism",
    "tensor parallelism",
    "pipeline parallelism",
    "machine learning inference",
    "distributed computing",
    "neural networks",
    "model optimization"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Production ML: Latency, Dashboards, and Cost",
   "summary": "Learn what actually matters once an LLM is live in production—the promises you make about speed, the metrics that predict failure, and why most teams measure the wrong thing. You'll walk away knowing exactly what to put on your dashboard, how to catch problems before users do, and why the bill is shaped by server busyness, not just model choice.",
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
    "LLM production",
    "latency",
    "p99",
    "time to first token",
    "monitoring",
    "observability",
    "autoscaling",
    "cost per inference",
    "dashboards",
    "reliability"
   ],
   "src": "/media/learn/serving/serving-08.mp4",
   "poster": "/media/learn/serving/serving-08.jpg",
   "captions": "/media/learn/serving/serving-08.vtt"
  }
 ];

export const LEARNING: Lesson[] = [
  {
   "n": 1,
   "title": "Fitting vs. Memorizing: What Models Actually Learn",
   "summary": "This video explains the crucial difference between a model that learns a genuine pattern and one that memorizes noise in the training data. Using apartment rental prediction as an example, you'll learn how fitting works, why overfitting breaks predictions on new data, and how train-test splits reveal whether your model has truly learned or just memorized. After watching, you'll understand the gap between low training error and real-world predictive power.",
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
    "generalization",
    "training and testing",
    "train-test split",
    "supervised learning",
    "parameters",
    "prediction error"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Actually Mean? | Linear Regression Fundamentals",
   "summary": "Learn what \"best fit\" really means when fitting a line to data—it's not just a vibe, it's a measurable concept. This video explains how residuals (prediction errors) are squared and summed into a single metric called sum of squared errors, and how the best-fitting line is simply whichever one minimizes that number. You'll understand the core goal of linear regression and why we use math instead of just eyeballing a line.",
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
    "least squares",
    "prediction",
    "modeling",
    "statistics",
    "machine learning",
    "regression basics"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Models Learn: Gradient Descent and the Loss Function",
   "summary": "Learn how machine learning models actually learn by starting with random guesses and iteratively improving them. This video walks through the loss function, the gradient, and the gradient descent algorithm—the core recipe that adjusts a model's knobs (parameters) downhill toward better predictions.",
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
    "learning rate",
    "calculus",
    "neural networks",
    "optimization",
    "mean squared error"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting vs Underfitting: The Bias-Variance Tradeoff",
   "summary": "Learn why a model that perfectly predicts your training data can fail on new data, and how to catch overfitting before it ruins your model. This video teaches the bias-variance tradeoff and practical techniques like train-validation-test splits and regularization to build models that generalize well.",
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
    "generalization",
    "regularization",
    "machine learning",
    "model validation",
    "training error",
    "test error",
    "model complexity"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "From Regression to Classification: Introduction to Logistic Regression",
   "summary": "Learn how to shift from predicting numbers to predicting categories using logistic regression. This video explains why linear regression fails for classification problems, introduces the sigmoid function to constrain outputs between 0 and 1, and shows how to set decision boundaries to make yes-or-no predictions. By the end, you'll understand the fundamentals of classification and how to interpret probability outputs as concrete predictions.",
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
    "probability",
    "machine learning",
    "categorical prediction",
    "threshold",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Confusion Matrices, Precision, and Recall",
   "summary": "Learn why accuracy alone is a misleading metric for evaluating machine learning models, especially with imbalanced datasets. This video teaches you how to build and read a confusion matrix, calculate precision and recall, and avoid the critical mistake of testing on training data—so you can actually know whether your model works.",
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
    "precision and recall",
    "accuracy",
    "class imbalance",
    "train-test split",
    "classification metrics",
    "false positives",
    "false negatives"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "The Model That Was Too Good: Understanding Data Leakage",
   "summary": "Learn why a machine learning model that performs perfectly on test data can still fail in the real world. This lesson covers the hidden pitfall of data leakage—when information sneaks into training that you wouldn't actually have at prediction time—and walks through practical techniques like feature scaling, proper encoding, and correct train-test splitting to avoid it.",
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
    "train-test split",
    "feature scaling",
    "categorical encoding",
    "data preprocessing",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "Building a Rent Prediction Model: The Complete Pipeline",
   "summary": "Watch all seven machine learning concepts work together in one complete end-to-end example: cleaning data, engineering features, training a model with gradient descent, and validating on a test set. You'll see exactly how to build a formula that predicts apartment rent from size, distance, age, and floor—and understand why each step matters and the common mistakes to avoid.",
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
    "gradient descent",
    "linear regression",
    "data preprocessing",
    "feature engineering",
    "train test split",
    "regularization",
    "loss function",
    "model training",
    "apartment rent prediction"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Fairly",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation provides a more reliable model evaluation. This video shows you how to split data into k folds, rotate which fold serves as the test set, and average the results to get a trustworthy performance estimate that fairly compares different models.",
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
    "data splitting",
    "machine learning",
    "model comparison",
    "data leakage",
    "preprocessing",
    "statistical validation"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: From Questions to Predictions",
   "summary": "Learn how decision trees predict outcomes by asking a series of yes-or-no questions, splitting data at each node to reduce variance and find patterns. You'll understand how trees pick their questions, why they work for both numbers and categories, and how to prevent them from memorizing data instead of learning real patterns.",
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
    "machine learning",
    "regression tree",
    "classification tree",
    "prediction",
    "overfitting",
    "variance",
    "impurity",
    "split nodes"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Bagging and Random Forests: Why Many Weak Models Beat One Strong Model",
   "summary": "Learn why training hundreds of simpler, wobblier decision trees and averaging them together produces more reliable predictions than relying on a single carefully-tuned tree. This video uses real apartment price data to show how bootstrap sampling and ensemble methods reduce variance, and introduces random forests as a way to make trees disagree even more for better predictions.",
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
    "ensemble methods",
    "decision trees",
    "variance reduction",
    "machine learning",
    "model averaging",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-11.mp4",
   "poster": "/media/learn/learning/learning-11.jpg",
   "captions": "/media/learn/learning/learning-11.vtt"
  },
  {
   "n": 12,
   "title": "Hyperparameters: Choosing Your Model's Settings",
   "summary": "Learn the critical difference between parameters (learned from data during training) and hyperparameters (settings you choose beforehand like learning rate and regularization strength). You'll discover how to use validation sets to pick the best hyperparameter values and avoid common mistakes like peeking at test data or searching grids inefficiently.",
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
    "machine learning",
    "model tuning",
    "validation set",
    "regularization",
    "grid search",
    "cross-validation",
    "overfitting",
    "underfitting",
    "learning rate"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Accuracy Lies: Precision, Recall, and Class Imbalance",
   "summary": "Learn why accuracy is a dangerous metric when your data is imbalanced and one class is rare. This video teaches you to use confusion matrices, precision, and recall instead, and shows you how to train models that actually catch the rare cases using resampling and class weights.",
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
    "class imbalance",
    "accuracy",
    "precision",
    "recall",
    "confusion matrix",
    "imbalanced data",
    "resampling",
    "class weights",
    "machine learning metrics",
    "decision threshold"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Introduction to Unsupervised Learning and K-Means Clustering",
   "summary": "Learn how to find hidden structure in data when there's no answer key to guide you. This video teaches unsupervised learning and k-means clustering, showing you how to group similar data points together, choose the right number of clusters, and avoid common pitfalls like unscaled features and outliers.",
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
    "clustering algorithms",
    "machine learning",
    "feature scaling",
    "elbow method",
    "inertia",
    "outliers",
    "centroids",
    "data grouping"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Principal Component Analysis: Simplifying High-Dimensional Data",
   "summary": "When your dataset has dozens of columns that are spread too thin and often repeat each other's information, Principal Component Analysis (PCA) can help. Learn how PCA finds the directions in your data that matter most, how it uses covariance matrices and eigenvectors under the hood, and which common mistakes to avoid—so you can reduce 47 noisy features down to just a few that capture what's actually important.",
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
    "dimensionality reduction",
    "principal component analysis",
    "covariance matrix",
    "eigenvectors",
    "feature engineering",
    "machine learning",
    "data preprocessing",
    "curse of dimensionality",
    "variance"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "Model Deployment: Calibration, Explanation, and Drift",
   "summary": "A trained machine learning model passes testing, but deployment introduces three new problems that testing alone won't catch: whether confidence scores are honest (calibration), whether decisions can be explained to people (explanation), and whether the world has changed since training (drift). Learn what each problem means, how to fix them, and the common mistakes teams make when shipping models to production.",
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
    "machine learning",
    "model deployment",
    "calibration",
    "interpretability",
    "data drift",
    "model monitoring",
    "SHAP",
    "temperature scaling",
    "production ML",
    "model governance"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks: From Logistic Regression to Stacked Layers",
   "summary": "Discover that neural networks aren't new—they're built from logistic regression, which is literally one neuron. Learn why stacking neurons without nonlinear activation functions collapses back into a single linear model, and why adding squashing (sigmoid) between layers lets networks separate patterns that straight lines cannot. You'll see the concrete mechanics with algebra, not just diagrams.",
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
    "nonlinearity",
    "sigmoid",
    "hidden layers",
    "overfitting",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "What Hidden Units Learn: Features and Activation Functions",
   "summary": "This video opens the black box of neural network hidden layers to reveal what hidden units actually learn: not individual input columns, but weighted combinations that represent directions in the input space. You'll learn how activation functions like ReLU enable networks to bend beyond linear regression, why ReLU trains faster than sigmoid, and the tradeoff between adding width (more units) and depth (more layers) to your network.",
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
    "hidden layers",
    "activation functions",
    "ReLU",
    "sigmoid",
    "feature learning",
    "gradient descent",
    "leaky ReLU",
    "network architecture",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: Computing Gradients Through Deep Networks",
   "summary": "Learn how to compute gradients for weights buried deep inside a neural network using the chain rule applied layer by layer. You'll work through a complete forward and backward pass by hand, seeing exactly how each weight's responsibility for the loss gets calculated and used to update it—then understand why long chains of multiplications can cause gradients to vanish or explode.",
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
    "chain rule",
    "gradient descent",
    "neural networks",
    "deep learning",
    "vanishing gradients",
    "ReLU",
    "forward pass",
    "backward pass",
    "derivatives"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Neural Networks: The Knobs Beyond the Math",
   "summary": "Gradient descent gives you the direction, but training a real network requires tuning nine critical decisions—from weight initialization to learning rate to batch size—that the math alone cannot tell you. This lesson walks through each knob you must turn correctly to avoid wasting weeks of compute, and teaches you to diagnose what went wrong by reading the loss curve. You'll learn the practical skills that separate understanding the update rule from actually getting a model to converge.",
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
    "training",
    "hyperparameters",
    "learning rate",
    "batch size",
    "weight initialization",
    "dropout",
    "loss curves",
    "overfitting",
    "gradient descent"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutional Neural Networks: From Pixels to Features",
   "summary": "Learn why fully connected layers fail on images and how convolutional kernels solve the problem through parameter sharing, locality, and translation invariance. This video builds from a concrete 3×3 edge detection example through the key concepts of stride, padding, and stacked convolutions that progressively learn edges, textures, and parts.",
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
    "convolution",
    "CNN",
    "image processing",
    "kernels",
    "edge detection",
    "parameter sharing",
    "deep learning",
    "neural networks",
    "computer vision"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Words Into Numbers",
   "summary": "Learn why integer codes and one-hot vectors fail to represent words, and discover how dense embeddings solve the problem by learning vectors from context. You'll understand why word meanings cluster in embedding space, why vector arithmetic sometimes works, and why a single vector per word still isn't enough—setting up the need for contextual embeddings.",
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
    "NLP",
    "categorical encoding",
    "one-hot encoding",
    "vector representations",
    "context prediction",
    "dimensionality reduction",
    "gradient descent",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "Building a Transformer from First Principles",
   "summary": "Learn what a transformer actually is by starting with a real problem: how to process sequences without losing information or sacrificing speed. This video walks you through attention mechanisms, multi-head attention, and how these pieces stack together to form the architecture behind large language models.",
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
    "query key value",
    "multi-head attention",
    "language model architecture",
    "neural networks",
    "machine learning",
    "sequence processing",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When to Use Deep Learning vs. Boosting on Tabular Data",
   "summary": "This video explains why deep learning isn't always the answer, even though it dominates headlines. You'll learn exactly when deep learning wins (images, audio, text with structure and massive datasets) and when gradient boosting is the better choice for tabular data like pricing predictions—plus a five-question checklist to guide your choice on any real project.",
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
    "tabular data",
    "model selection",
    "decision making",
    "machine learning strategy",
    "neural networks",
    "trees",
    "transfer learning",
    "computational costs"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series: Why Random Splits Fail and How to Fix Them",
   "summary": "Learn why random train-test splits and k-fold cross-validation leak future information when working with time-ordered data, and how this causes models to cheat through autocorrelation. You'll discover the fix: chronological splits and rolling-origin validation, plus the audit question to catch sneaky leaks from delayed labels and slow-to-arrive features.",
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
    "train-test split",
    "cross-validation",
    "data leakage",
    "rolling-origin validation",
    "autocorrelation",
    "temporal data",
    "chronological split",
    "model evaluation",
    "time-ordered data"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: Building Better Predictions with Persistence and Lag Features",
   "summary": "Learn why the simplest baseline—predicting next month equals this month—is brutally hard to beat, and how to build forecasting models that actually improve on it. This video teaches you to decompose time series into trend, seasonality, and remainder; use lag features to turn forecasting into ordinary regression; and honestly measure error across different forecast horizons using the right metrics.",
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
    "time series forecasting",
    "persistence baseline",
    "lag features",
    "trend seasonality",
    "RMSE MAE",
    "forecast horizon",
    "prediction intervals",
    "supervised learning",
    "regression",
    "forecasting metrics"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Good Models Make Bad Decisions",
   "summary": "Learn the critical difference between predictive questions (\"what will happen?\") and causal questions (\"what will happen if I do this?\")—a distinction that separates excellent models from wrong decisions. Using the doorman-and-rent example, discover how confounders hide in your data and why held-out accuracy alone cannot answer causal questions. Walk away understanding the fundamental discipline: how to identify which type of question you're solving before choosing your method.",
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
    "causality",
    "causal inference",
    "prediction vs causation",
    "confounders",
    "intervention",
    "counterfactual",
    "model evaluation",
    "decision-making",
    "observational data"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Randomised Experiments: From Correlation to Causation",
   "summary": "Learn how randomisation breaks the link between confounding variables and your outcome, letting you isolate a true causal effect. This lesson walks through a shuttle-stop experiment, explains why randomising the right unit matters, and shows three common mistakes that turn a clean experiment into a misleading one—peeking early, testing many variants, and group interference.",
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
    "randomisation",
    "causation vs correlation",
    "experimental design",
    "confounding variables",
    "statistical significance",
    "practical significance",
    "bias",
    "hypothesis testing"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Causal Inference: Did the Shuttle Really Change Rent?",
   "summary": "Learn how to answer causal questions when you can't run a randomized experiment. This video teaches three techniques—controlling, difference-in-differences, and matching—to isolate treatment effects in observational data, plus the critical pitfalls that can lead you astray.",
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
    "confounding",
    "observational data",
    "regression",
    "natural experiment",
    "difference-in-differences",
    "matching",
    "causation vs correlation"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Reinforcement Learning: From State Values to Q-Learning",
   "summary": "Learn how agents make sequential decisions where actions shape future data, using apartment rental pricing as a concrete example. This video teaches the core ideas of reinforcement learning: credit assignment, state values, discounting, and Q-learning, plus why simulators are essential for training on real-world problems without costly mistakes.",
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
    "sequential decision making",
    "credit assignment",
    "state value",
    "agent",
    "reward discounting",
    "simulation",
    "Markov decision process"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "The Exploration-Exploitation Tradeoff: From Bandits to UCB",
   "summary": "Learn how to make smart decisions when you have to choose between testing new options and sticking with what works, using a real-world apartment rental pricing problem. This video covers four strategies—always-exploit, epsilon-greedy, decaying epsilon, and UCB—and shows why uncertainty itself should guide how much you explore rather than arbitrary rules. You'll understand regret as the true measure of strategy success and how bandit algorithms differ from classical A/B testing.",
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
    "exploration-exploitation",
    "bandit algorithms",
    "UCB",
    "epsilon-greedy",
    "regret",
    "decision making",
    "A/B testing",
    "Thompson sampling",
    "confidence intervals",
    "uncertainty"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Questions, One Dataset: Choosing the Right ML Paradigm",
   "summary": "Learn which machine learning approach fits which type of question: supervised learning for predictions, unsupervised for structure discovery, causal inference for interventions, and reinforcement learning for repeated actions. After watching, you'll know how to identify what your question actually requires before writing any code, and avoid the common mistake of using the wrong paradigm for the problem you're trying to solve.",
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
    "decision guide",
    "regression vs clustering",
    "ML pipeline",
    "problem framing"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn how regularization fixes overfitting by penalizing large coefficients. This lesson builds ridge regression, lasso, and elastic net from scratch, explaining why lasso zeros out features while ridge shrinks them smoothly, and when to use elastic net for correlated features.",
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
    "coefficient shrinkage",
    "cross-validation",
    "feature selection",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: From Weak Stumps to Strong Predictions",
   "summary": "Learn how boosting trains a sequence of weak models, each one correcting the errors of the previous model—the opposite of bagging's independent crowd-voting approach. This video reveals why it's called gradient boosting, how it connects to gradient descent, and why this technique is essential for anyone working with tabular data.",
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
    "boosting",
    "gradient boosting",
    "machine learning",
    "decision trees",
    "weak learners",
    "gradient descent",
    "AdaBoost",
    "XGBoost",
    "overfitting",
    "tabular data"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Clustering Part 1: When K-Means Fails—Hierarchical and DBSCAN",
   "summary": "K-means clustering makes three hidden assumptions—round clusters, a predetermined cluster count, and forcing every point into a cluster—that fail on real data like geospatial rental prices. This lesson introduces hierarchical clustering and DBSCAN as alternatives, showing how each makes different tradeoffs and when to reach for the right tool instead of defaulting to k-means.",
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
    "dendrogram",
    "linkage",
    "unsupervised learning",
    "density-based clustering",
    "machine learning fundamentals"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Beyond PCA: t-SNE, UMAP, and Nonlinear Dimensionality Reduction",
   "summary": "Learn why PCA fails on curved data and when to use t-SNE or UMAP instead. This lesson shows how these nonlinear methods preserve neighborhood relationships rather than global structure, what perplexity does, and—critically—how to correctly interpret their visualizations without being misled by cluster sizes or distances.",
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
    "clustering",
    "neighborhood preservation",
    "data interpretation"
   ],
   "src": "/media/learn/learning/learning-36.mp4",
   "poster": "/media/learn/learning/learning-36.jpg",
   "captions": "/media/learn/learning/learning-36.vtt"
  }
 ];

export const COUNTING: Lesson[] = [
  {
   "n": 1,
   "title": "When to Multiply vs Add: The Fundamental Counting Rule",
   "summary": "Learn why counting codes and arrangements requires multiplication instead of addition by visualizing the problem as grids and trees. You'll discover the core principle behind the multiplication rule, understand when it applies (even with constraints), and learn when to add instead—giving you the power to solve any counting problem without memorizing rules.",
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
    "counting",
    "combinatorics",
    "multiplication rule",
    "permutations",
    "combinations",
    "discrete math",
    "problem solving",
    "mathematical reasoning"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the number of ways to arrange objects in a specific order using the multiplication principle. This video covers factorials, permutations when you're using only some of your items, and the critical difference between arrangements (where order matters) and combinations (where it doesn't). You'll be able to solve arrangement problems from simple cases like race podiums to more complex scenarios like password codes.",
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
    "factorials",
    "arranging objects",
    "ordering",
    "multiplication principle",
    "combinatorics",
    "counting problems",
    "order matters"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: The Committee Problem and n Choose k",
   "summary": "Learn why picking a committee is different from assigning ordered roles, and derive the combinations formula. After this video, you'll know when to use the multiplication rule versus n choose k, and how to calculate combinations for any situation where order doesn't matter.",
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
    "permutations vs combinations",
    "counting",
    "factorial",
    "committees",
    "combinatorics"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "Combinatorial Identities: Structure in Binomial Coefficients",
   "summary": "This video reveals the hidden structure within binomial coefficients and combination formulas, teaching you five essential identities: symmetry, Pascal's recurrence, the binomial theorem (as a counting principle), and the sum 2^n. You'll learn to see these identities as counting arguments rather than algebra tricks, and discover how they provide practical shortcuts for solving combinatorial problems without computing large factorials.",
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
    "combinations",
    "Pascal's triangle",
    "binomial theorem",
    "combinatorial identities",
    "counting arguments",
    "bijection",
    "hockey-stick identity",
    "C(n,k)",
    "mathematical proofs"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "Counting Problems: Four Types Based on Order and Repetition",
   "summary": "Learn how to sort any counting problem into one of four categories by asking two key questions: does order matter, and can items repeat? This video teaches you which counting method to use for each type—from passwords and podiums to committees and ice cream scoops—and shows why the same four items can produce wildly different answers depending on your setup.",
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
    "counting",
    "combinatorics",
    "permutations",
    "combinations",
    "multiplication principle",
    "order matters",
    "repetition allowed",
    "counting problems",
    "problem categorization",
    "math"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modelling Counting Problems: Breaking into Stages",
   "summary": "Learn how to translate word problems into clear sequences of decisions—the hard part of counting that comes before any formula. This video teaches you to identify stages, determine whether order matters, and figure out how many choices each stage actually has. You'll master the modelling skill that turns confusing stories into structured problems you can solve with the multiplication principle.",
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
    "counting",
    "multiplication principle",
    "combinations",
    "permutations",
    "problem modelling",
    "combinatorics",
    "stage-based counting",
    "order matters",
    "decision sequences"
   ],
   "src": "/media/learn/counting/counting-06.mp4",
   "poster": "/media/learn/counting/counting-06.jpg",
   "captions": "/media/learn/counting/counting-06.vtt"
  },
  {
   "n": 7,
   "title": "Combining Counting Tools: Multi-Step Problems",
   "summary": "Learn how to solve counting problems that require stacking multiple techniques together: choosing then arranging, using inclusion-exclusion with overlapping restrictions, and selecting exactly k items from categories. By working through the wrong attempt first on each problem, you'll see why your first instinct usually double-counts or misses cases, and how to fix it.",
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
    "committees",
    "arrangements",
    "restrictions",
    "combinatorics",
    "exam strategy",
    "multi-step problems"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Sample Spaces and Events: The Set Algebra Behind Probability",
   "summary": "Learn the foundational language of probability through set operations. Starting with a real-world sensor-testing scenario, this video teaches you what sample spaces and events are, how to combine them with union, intersection, and complement, and how to apply key algebraic laws—especially De Morgan's—to turn complex probability questions into precise mathematical expressions.",
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
    "sample space",
    "events",
    "set theory",
    "set operations",
    "union intersection complement",
    "De Morgan's laws",
    "algebra",
    "discrete mathematics",
    "how to learn probability"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability Axioms: Definition, Rules, and First Proofs",
   "summary": "Learn what probability actually is: a function from events to numbers that must obey three fundamental axioms. This video establishes the rigorous definition of probability (non-negativity, total probability equals one, and additivity for disjoint events), verifies these axioms for real models like equally likely outcomes and relative frequency, and proves the first theorem—that the empty set has probability zero—directly from first principles.",
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
    "sample space",
    "events",
    "disjoint events",
    "probability function",
    "mathematical proof",
    "axiom of additivity",
    "probability rules",
    "Kolmogorov"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "Probability Rules: Complements and Addition for Overlapping Events",
   "summary": "Learn how to derive key probability rules from first principles, including the complement rule, monotonicity, and the general addition rule for overlapping events. Master the inclusion-exclusion principle for two and three events, and discover how to transform \"at least one\" problems into simple one-minus-none calculations to avoid messy multi-term expressions.",
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
    "complement rule",
    "addition rule",
    "inclusion-exclusion",
    "overlapping events",
    "axioms of probability",
    "at least one",
    "venn diagrams",
    "counting principles",
    "probability formulas"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability: When Counting Equals Probability",
   "summary": "Learn when and how to compute probabilities by counting outcomes. This lesson shows the classical probability formula works only when all outcomes are equally likely, and teaches how to use combinatorics tools from counting to solve real probability problems—from committee selection to quality control inspections.",
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
    "equally likely outcomes",
    "counting",
    "combinations",
    "permutations",
    "sample space",
    "combinatorics"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Probability Limits and What Numbers Mean",
   "summary": "This video covers two critical ideas that most courses skip too fast: what happens to probability when events form infinite nested sequences, and what a probability number actually means in practice. You'll learn how continuity of probability works through nested sets, see it applied to real problems like repeated testing, and understand the two legitimate interpretations of probability—long-run frequency and degree of belief—so you can compute with confidence instead of just going through the motions.",
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
    "probability continuity",
    "nested sets",
    "limit of sequences",
    "axioms of probability",
    "frequentist probability",
    "subjective probability",
    "Bayesian updating",
    "probability interpretation",
    "diagnostic testing",
    "mathematical foundations"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proving Probability Results from the Axioms",
   "summary": "This lesson teaches the four fundamental moves for writing probability proofs from the axioms: disjoint decomposition, the complement trick, monotonicity, and De Morgan's laws. You'll learn how to structure a rigorous proof, apply these tools to prove key results like the three-event addition rule and Boole's inequality, and write exam answers that earn full marks by citing your tools and defining your events explicitly.",
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
    "proof techniques",
    "disjoint decomposition",
    "addition rule",
    "Boole's inequality",
    "monotonicity",
    "exam preparation",
    "set theory",
    "complement trick",
    "De Morgan's laws"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Restricting the Sample Space",
   "summary": "Learn what conditional probability is and why it matters: when you're told that an event B has occurred, how should you update your beliefs about another event A? This video builds the definition from first principles—restricting the sample space to just the outcomes where B happened—proves it satisfies all the axioms of probability, and works through a concrete example with sensors and diagnostic tests. You'll understand the core formula, see how to compute it, and learn the critical trap that leads into Bayes' theorem.",
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
    "probability theory",
    "sample space",
    "Bayes theorem",
    "axioms of probability",
    "worked example",
    "probability measures",
    "sensor test"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "The Multiplication Rule and Probability Trees",
   "summary": "Learn where the multiplication rule comes from and how to build probability trees to solve multi-stage problems. This video shows you why multiplying probabilities works when drawing without replacement, how to trace paths through a tree to find exact sequences of outcomes, and how to spot common mistakes like forgetting the pool shrinks or using unconditional probability when you need conditional.",
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
    "probability trees",
    "conditional probability",
    "chain rule",
    "without replacement",
    "independence",
    "sequential events"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "Law of Total Probability: Combining Conditional Probabilities",
   "summary": "Learn how to find the probability of an event when multiple non-overlapping paths lead to it. This video teaches the law of total probability—a method for partitioning the sample space and combining conditional probabilities—and shows how to apply it to real problems like finding defect rates across multiple suppliers. After watching, you'll be able to identify valid partitions, set up the formula correctly, and avoid common mistakes.",
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
    "conditional probability",
    "partition",
    "sample space",
    "weighted average",
    "probability axioms",
    "bayes theorem foundations",
    "counting outcomes"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Theorem: From Test Results to True Probabilities",
   "summary": "Learn how to flip conditional probabilities using Bayes' formula to answer the question that matters: if a test flagged something, what's the actual chance it's true? You'll discover why a 95%-accurate test can still give misleading results, and how to avoid the base rate fallacy that trips up most people when interpreting test results.",
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
    "Bayes theorem",
    "conditional probability",
    "base rate fallacy",
    "Bayesian inference",
    "test accuracy",
    "posterior probability",
    "likelihood",
    "prior probability",
    "statistical reasoning",
    "probability reversal"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Precise Definition and Why Intuition Fails",
   "summary": "Independence is not about whether two things feel related—it's a precise equation: P(A and B) = P(A) × P(B). Learn why events that are obviously connected can be independent by the numbers, why unrelated-sounding events can be dependent, and why \"disjoint\" is nearly the opposite of \"independent.\" You'll master the correct test for independence, see how it extends to three or more events, and understand how to use it to solve problems with repeated trials.",
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
    "disjoint events",
    "conditional probability",
    "mutual independence",
    "binomial",
    "coin flips",
    "sampling with replacement"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems: Picking the Right Tool in Conditional Probability",
   "summary": "This workshop presents six diverse conditional probability problems where you must identify and apply the correct tool—Bayes' theorem, total probability, independence testing, or tree diagrams—without being told which one to use. You'll learn to recognize when you're reversing a conditional, avoid common traps like mistaking a direct probability for Bayes, and understand why independence must be computed rather than assumed. After watching, you'll be able to approach unfamiliar probability problems like an exam, using only the fundamental tools from lessons fourteen through eighteen.",
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
    "tree diagrams",
    "problem-solving",
    "probability traps",
    "sensor defects",
    "real exam skills"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "Recognising Which Formula: A Decision Map for Counting and Probability",
   "summary": "Learn the decision map that tells you which formula to use when facing an unlabelled exam problem with no context clues. By asking just a few key questions—is it counting or probability, does order matter, is anything conditional—you'll instantly recognise whether you need permutations, combinations, conditional probability, Bayes' theorem, or simple multiplication. The video walks through five worked examples to show you how to name the tool before you touch any arithmetic.",
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
    "problem recognition",
    "counting",
    "probability",
    "permutations",
    "combinations",
    "conditional probability",
    "Bayes theorem",
    "exam strategy",
    "decision tree",
    "formula selection"
   ],
   "src": "/media/learn/counting/counting-20.mp4",
   "poster": "/media/learn/counting/counting-20.jpg",
   "captions": "/media/learn/counting/counting-20.vtt"
  }
 ];

export const PATTERNS: Lesson[] = [
  {
   "n": 1,
   "title": "What is a Data-Mining Pipeline? The Full Workflow Explained",
   "summary": "A data-mining pipeline is far more than just running an algorithm on data—it's everything from raw database rows to a human acting differently because of a number. This video walks the complete workflow (selection, preprocessing, modelling, interpretation) using a real campus bike-share dataset, showing you where the time actually goes and why the steps you skip cost you later.",
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
    "data mining",
    "pipeline",
    "data preprocessing",
    "modelling",
    "data selection",
    "interpretation",
    "bike-share",
    "machine learning workflow",
    "data cleaning",
    "data science"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Data Exploration: Examining and Understanding Your Raw Data",
   "summary": "Learn the essential techniques for inspecting and cleaning data before building any model: histograms to reveal distributions, summary statistics to capture center and spread, scatterplots and correlation to understand relationships between variables, and strategies for handling missing values, outliers, errors, and duplicates. By the end, you'll have a systematic habit for exploring any dataset and catching data quality issues that models would otherwise hide.",
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
    "data exploration",
    "data cleaning",
    "histogram",
    "mean median",
    "variance standard deviation",
    "correlation",
    "scatterplot",
    "outliers",
    "missing data",
    "data quality"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing and P-Values: The Logic Behind Statistical Significance",
   "summary": "Learn the reasoning behind hypothesis testing and p-values using a real-world example: did a new dock actually increase bike trips, or was the change just random noise? This video walks through the entire logic—from setting up a null hypothesis, calculating test statistics, interpreting sampling distributions, and understanding what p-values actually tell you. You'll also discover two critical traps: confusing statistical significance with practical importance, and accidentally rigging your results by testing multiple hypotheses.",
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
    "statistical significance",
    "test statistic",
    "sampling distribution",
    "statistics education",
    "data analysis"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: Estimating Uncertainty in Sample Means",
   "summary": "Learn how to quantify the uncertainty in a single number you report—like an average trip duration—and build confidence intervals that honestly capture how much that estimate would wiggle if you sampled again. This video teaches you the difference between standard deviation (spread of data) and standard error (spread of the estimate), why doubling your sample only shrinks error by a factor of √2, and what a 95% confidence interval actually promises: not that the true value is probably inside yours, but that your method works 95% of the time across repeated samples. You'll also see how to compare two groups visually with intervals and why reporting effect size matters just as much as statistical significance.",
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
    "sample mean",
    "uncertainty estimation",
    "statistical inference",
    "effect size",
    "hypothesis testing",
    "sampling distribution"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Claims Taken Apart: Before You Nod in the Meeting",
   "summary": "Learn the four questions to ask before believing any data claim: state the null hypothesis, identify confounds, check whether effect size matters, and verify you have the data. Walk through six real bike-sharing claims—some true, some phantom, some real but trivial—and see how most bad conclusions fall apart before you compute anything.",
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
    "confounding variables",
    "null hypothesis",
    "statistical claims",
    "data literacy",
    "effect size",
    "two-sample tests",
    "control groups",
    "common mistakes"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: How It Works and When to Use It",
   "summary": "Learn the k-nearest neighbours algorithm from first principles: find the k most similar past examples and take a vote to classify something new. This video walks through the math of distance, the tradeoff between memorizing and generalizing, why scaling your data matters, and when kNN is genuinely the right choice instead of a fancier method.",
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
    "scaling",
    "bias-variance tradeoff",
    "supervised learning",
    "lazy learning",
    "algorithm"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality in k-Nearest Neighbours",
   "summary": "Learn why adding more features to k-NN breaks the algorithm instead of improving it. This video explains the geometry behind the curse of dimensionality, the exponential data requirements of high-dimensional spaces, and three practical strategies—feature selection, feature engineering, and dimensionality reduction—to fix the problem.",
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
    "k-nearest neighbours",
    "curse of dimensionality",
    "feature selection",
    "feature engineering",
    "high-dimensional data",
    "distance metrics",
    "machine learning fundamentals",
    "indicator variables",
    "data density",
    "model diagnostics"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes Classification: Using Probability Instead of Distance",
   "summary": "Learn how Naive Bayes classifies data by estimating probabilities rather than measuring distance, using Bayes' rule to flip the conditional and the independence assumption to make calculation tractable. You'll work through the algorithm by hand, understand how Laplace smoothing and log-space arithmetic prevent common pitfalls, and see why this false assumption still produces correct classifications in practice.",
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
    "classification",
    "Bayes rule",
    "probability",
    "machine learning",
    "Laplace smoothing",
    "conditional probability",
    "feature independence",
    "log-space computation",
    "calibration"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning to Draw a Line",
   "summary": "Learn how the perceptron algorithm finds a straight boundary through data by starting with a guess and repeatedly correcting mistakes. This video teaches the core idea behind linear classification: a weighted sum feeds into a threshold, and wrong predictions drive the algorithm to update its weights and bias. You'll see exactly how the algorithm learns, what it's guaranteed to achieve, and where it fundamentally breaks down.",
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
    "linear classification",
    "machine learning",
    "supervised learning",
    "decision boundary",
    "weighted sum",
    "threshold",
    "convergence",
    "linearly separable",
    "learning algorithm"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: From Classification to Probability",
   "summary": "Learn why probabilities matter more than binary classifications, and how the sigmoid function transforms a linear model into calibrated predictions between 0 and 1. This video teaches you to build logistic regression models, interpret coefficients through odds multipliers, train with cross-entropy loss, and choose decision thresholds based on the cost of mistakes.",
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
    "classification",
    "odds and log-odds",
    "cross-entropy loss",
    "decision threshold",
    "machine learning",
    "gradient descent",
    "model coefficients"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: How to Pick the Best Question First",
   "summary": "Learn how decision trees make predictions by asking a sequence of yes-or-no questions, and discover the mathematical machinery behind choosing which question to ask at each node. This lesson teaches entropy, information gain, and Gini impurity—the metrics that let a tree automatically find the splits that best separate your data into pure groups.",
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
    "machine learning",
    "classification",
    "Gini impurity",
    "tree splitting",
    "binary questions",
    "thresholds",
    "bike trips"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Decision Tree Overfitting and Pruning",
   "summary": "Learn why decision trees memorize training data instead of learning real patterns, and how to stop them with pre-pruning and post-pruning techniques. You'll understand the classic underfitting-overfitting curve and be able to build trees that generalize well by reading validation error instead of training error.",
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
    "validation",
    "machine learning",
    "tree depth",
    "information gain",
    "generalization",
    "model selection",
    "bias-variance"
   ],
   "src": "/media/learn/patterns/patterns-12.mp4",
   "poster": "/media/learn/patterns/patterns-12.jpg",
   "captions": "/media/learn/patterns/patterns-12.vtt"
  },
  {
   "n": 13,
   "title": "Support Vector Machines: Margins, Slack, and the C Parameter",
   "summary": "Learn how support vector machines find the best separating line by maximizing the margin around it, and how the soft-margin variant tolerates violations in real-world data. You'll understand what support vectors actually are, why they matter, how the C parameter controls the trade-off between margin width and classification errors, and what common misconceptions to avoid.",
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
    "soft margin",
    "C parameter",
    "classification",
    "regularization"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Non-Linear Data in Support Vector Machines",
   "summary": "Learn how support vector machines handle data that cannot be separated by a straight line using kernel methods. This video explains how to implicitly work in higher-dimensional spaces by computing only dot products between data points, then explores polynomial and RBF kernels and how to choose between them based on your data.",
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
    "non-linear classification",
    "polynomial kernel",
    "RBF kernel",
    "feature engineering",
    "dot products",
    "hyperparameters",
    "overfitting",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "How to Choose a Classifier: Defending Your Model Choice",
   "summary": "Learn a systematic framework for selecting the right classifier for any real-world problem, moving beyond accuracy numbers to match a model's assumptions to your data's actual needs. Through five realistic bike-share case studies, you'll practice naming candidate models, understanding their core assumptions, and building a principled defense—to interviewers, reviewers, or yourself—for why you picked one classifier over another.",
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
    "machine learning",
    "classifier selection",
    "model choice",
    "logistic regression",
    "decision trees",
    "k-nearest neighbours",
    "naive bayes",
    "support vector machines",
    "model evaluation"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Trusting Your Model's Error",
   "summary": "Learn why a single train-test split can't be trusted and how k-fold cross-validation gives you a reliable estimate of model performance. You'll discover why averaging error across multiple data folds matters, when to throw away your cross-validation models, and the two critical mistakes that ruin the whole approach.",
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
    "train-test split",
    "model evaluation",
    "data splitting",
    "error estimation",
    "machine learning",
    "statistical testing"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Precision, Recall, and Thresholds: Beyond Accuracy",
   "summary": "Learn why accuracy is a useless metric when classes are imbalanced, and discover the four-cell confusion matrix that reveals what your model actually does. You'll master precision and recall, understand how to move the decision threshold to trade off false alarms against missed catches, and learn when to use F1, ROC curves, and precision-recall curves to pick the right threshold for the real-world costs of your mistakes.",
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
    "precision",
    "recall",
    "confusion matrix",
    "threshold tuning",
    "ROC curve",
    "F1 score",
    "imbalanced classification",
    "false positive",
    "false negative",
    "precision-recall curve"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: Data Leakage and Evaluation Traps",
   "summary": "Learn why a model reporting 99% accuracy can still be completely broken. This video reveals five different ways to accidentally lie to yourself with machine learning—through data leakage, improper splitting, wrong baselines, multiple hypothesis testing, and temporal violations—and teaches you a pre-flight checklist to catch these bugs before training.",
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
    "validation mistakes",
    "machine learning pitfalls",
    "class imbalance",
    "test-train split",
    "baseline comparison",
    "temporal data",
    "overfitting"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Algorithms on One Page: Cheat Sheet Review",
   "summary": "Learn how to compress six machine learning algorithms (kNN, naive Bayes, perceptron, logistic regression, decision trees, and SVM) into a single-page study guide. You'll see how to organize each method by eight key questions—assumptions, optimization, costs, hyperparameters, scaling, interpretability, calibration, and failure modes—plus the essential formulas and a decision flow chart to choose the right algorithm for any problem.",
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
    "machine learning",
    "algorithm comparison",
    "study guide",
    "cheat sheet",
    "kNN",
    "decision trees",
    "SVM",
    "logistic regression",
    "exam preparation",
    "feature scaling"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Strategy: Mastering Regression, Classification, and Clustering",
   "summary": "Learn the four core exam strategies for machine learning: identifying problem types by checking for labels, deriving key formulas like least squares from scratch, distinguishing bias and variance as causes rather than synonyms for overfitting, and avoiding common mistakes with units and assumptions. After watching, you'll be able to spot whether a problem is regression, classification, or clustering, reproduce critical derivations under exam pressure, and earn points by clearly labeling your work.",
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
    "regression",
    "classification",
    "clustering",
    "exam preparation",
    "least squares",
    "gradient descent",
    "bias-variance tradeoff",
    "derivation",
    "decision trees",
    "machine learning fundamentals"
   ],
   "src": "/media/learn/patterns/patterns-20.mp4",
   "poster": "/media/learn/patterns/patterns-20.jpg",
   "captions": "/media/learn/patterns/patterns-20.vtt"
  }
 ];

export const HOWITWORKS: Lesson[] = [
  {
   "n": 1,
   "title": "Why Educational Video Production Takes So Long—And How to Fix It",
   "summary": "This video examines why creating a single high-quality educational lesson traditionally requires a week of skilled labor, and why that approach fails at scale for a 500+ lesson curriculum. You'll learn the precise goal of automated lesson production—creating subject-matter-approved, broadcast-quality lessons for minimal cost and time—and discover why preventing undetected errors is the constraint that shapes the entire system.",
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
    "educational video production",
    "curriculum scaling",
    "teaching video creation",
    "quality control",
    "lesson automation",
    "instructional design",
    "production pipeline",
    "cost efficiency"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why Animation Can't Be Generated Directly: The Scene Contract",
   "summary": "Learn why letting language models write animation code directly fails—and how describing scenes against a fixed vocabulary (the scene/1 contract) makes mistakes detectable before rendering starts. You'll understand the architecture that lets validator code catch missing elements in milliseconds instead of letting broken videos slip through.",
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
    "animation generation",
    "language models",
    "code validation",
    "scene contract",
    "system design",
    "safety nets",
    "Manim",
    "architecture patterns",
    "error detection",
    "describe not program"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "The Nine Stops: How a Topic Becomes a Video",
   "summary": "This video maps the complete workflow that transforms a single topic into a finished teaching video, from initial brief through final publication. You'll learn the nine named stops in the process—brief, script, describe, gate, proof render, rubric, repair loop, final render, and review—and understand how each one feeds into the next, including where the system loops back to fix problems.",
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
    "workflow",
    "automation",
    "content creation",
    "rendering",
    "quality control",
    "instructional design",
    "process mapping",
    "system architecture"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "Validating Scene Specs: The Rules Before Rendering",
   "summary": "Learn how scene_spec.py validates the JSON blueprint of a scene before render.py ever draws a pixel. This video walks through four core validation rules—from requiring descriptive labels instead of bare numbers, to ensuring grids have numeric axes and figures don't weaken toward the end—plus the retry loop that gives specs up to five chances to pass, with a pragmatic exception for genuine judgment calls.",
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
    "JSON schema",
    "render pipeline",
    "scene construction",
    "diagram rules",
    "grid validation",
    "quality control",
    "code generation",
    "teaching video structure",
    "figure composition"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks Disagree With Artifacts",
   "summary": "Learn to recognize when automated checks fail silently by studying six real cases where pipeline checks reported problems that didn't exist, or missed problems entirely. You'll discover why the golden rule is: when a check and the actual artifact disagree, trust the artifact first—then verify the check.",
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
    "pipeline checks",
    "quality assurance",
    "system debugging",
    "silent failures",
    "artifact verification",
    "automated testing",
    "system design",
    "lessons learned",
    "production issues"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "The Five Pieces: Architecture of the Video Generation System",
   "summary": "Learn the five core components of the video generation system—the AI service, contract, renderer, datastore, and harness—and how they communicate to avoid bugs. This video shows you where each piece lives, what it owns, and the two architectural boundaries where new engineers most often stumble.",
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
    "architecture",
    "system design",
    "microservices",
    "AI service",
    "renderer",
    "contract",
    "DynamoDB",
    "S3",
    "job lifecycle",
    "debugging"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "From Architecture to AWS: Where Your Rendering Pipeline Actually Runs",
   "summary": "Learn the concrete AWS services that power a rendering pipeline: ECS Fargate for cost-efficient task execution, S3 for media storage, DynamoDB for job tracking, and CloudFront for delivery. Discover critical pitfalls like pinning by image tag instead of digest, account quota ceilings, narration caching strategies, and the authentication gap that lets users access media without logging in.",
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
    "ECS Fargate",
    "S3",
    "DynamoDB",
    "CloudFront",
    "rendering pipeline",
    "infrastructure",
    "deployment",
    "containers",
    "system design"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "Lesson Cost: The Three Pieces and the Real Lever",
   "summary": "Learn what actually drives the cost of an automated lesson—model API calls, speech synthesis by character, and Fargate rendering time—and why catching defects early in the pipeline saves far more money than cheaper models. You'll understand why the same lesson costs $2.39 one time and $7.22 another, and how to identify where cost control actually works.",
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
    "rendering",
    "Fargate",
    "cost control",
    "quality rubric",
    "proof pass",
    "pipeline optimization",
    "defect detection"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "Business Case: Why Automated Video Curriculum Matters",
   "summary": "Learn the real business case for automated lesson production: why small teams can now afford to build full curricula, what makes lessons cheaply remakeable when material changes, and how a single lesson can serve different audiences without duplication. Discover where the actual competitive advantage sits—not in the pipeline diagram, but in the accumulated rules built from real production failures.",
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
    "curriculum production",
    "automation",
    "video production pipeline",
    "cost analysis",
    "scalability",
    "competitive advantage",
    "lesson design",
    "quality control",
    "instructional strategy"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why They Failed and What We Learned",
   "summary": "This lesson walks through five plausible improvements to the animation pipeline that were tested and rejected—not on intuition, but on actual evidence. You'll learn why a cheaper animation model failed where a cheaper spec model succeeded, why full automation doesn't apply to publishing, and how text-similarity checks and hard length limits each missed the mark. After watching, you'll understand the core habit that killed all five: testing ideas against known-answer cases before implementation.",
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
    "pipeline",
    "rejected ideas",
    "testing",
    "animation code",
    "automation",
    "validation",
    "lessons learned",
    "evidence-based decisions",
    "known-answer testing",
    "design mistakes"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "Random Variables: Functions, Not Values",
   "summary": "This video clarifies what a random variable actually is: a function that maps outcomes to numbers, not a mysterious value waiting to be revealed. You'll learn the critical distinction between discrete and continuous random variables, how to read probability notation correctly, and why turning messy real-world outcomes into numbers unlocks the ability to compute averages, comparisons, and all downstream probability calculations.",
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
    "random variables",
    "discrete vs continuous",
    "probability functions",
    "outcomes",
    "notation",
    "probability theory",
    "sample space",
    "mapping outcomes to numbers"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF and CDF: Two Ways to Describe a Random Variable's Distribution",
   "summary": "Learn the two standard ways to represent any random variable's distribution: the probability mass function (PMF) and the cumulative distribution function (CDF). Discover why each answers different types of questions, how they relate to each other, and how to use them correctly to find exact probabilities, cumulative probabilities, and probabilities within ranges.",
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
    "random variables",
    "probability distributions",
    "discrete distributions",
    "probability",
    "statistics fundamentals"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expectation: The Balance Point of a Distribution",
   "summary": "Learn what expectation (E of X) really means and how to calculate it from a probability distribution. You'll see why it's the balance point of the bars, not the tallest bar or middle value, and master the practical properties like linearity and LOTUS that let you find expected values of transformed random variables.",
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
    "linearity of expectation",
    "LOTUS",
    "random variables",
    "balance point",
    "weighted average"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Spread",
   "summary": "Learn why two shifts with identical average ticket counts can feel completely different, and how variance measures that spread around the mean. You'll discover why squaring deviations works better than absolute values, compute variance using both the definition and a faster shortcut formula, and learn when to report variance versus standard deviation.",
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
    "mean absolute deviation",
    "probability distributions",
    "data variability",
    "statistical measures",
    "shortcut formula",
    "real-world applications"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Expectation and Variance: Exam Speed (6 Problem Types)",
   "summary": "Learn to solve expectation and variance problems quickly under exam pressure by working through six different problem shapes with a consistent method. You'll practice computing expectations from PMFs, applying linearity of expectation, reversing the variance formula, handling nonlinear functions, completing incomplete distributions, and spotting shifts—then checking your work against three common pitfalls.",
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
    "exam practice",
    "linearity of expectation",
    "random variables",
    "probability distributions",
    "computational formulas",
    "problem solving"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "Binomial Random Variables: Counting Successes Across Fixed Trials",
   "summary": "Learn how to model the number of successes when repeating the same trial a fixed number of times—like counting how many support tickets get resolved on first contact. You'll derive the binomial PMF from first principles (counting patterns times their probability), find the mean and variance using linearity of expectation, and master the three common calculations: exactly k successes, at least k, and at most k. After this lesson you'll be able to recognize when binomial applies and avoid the two most common mistakes.",
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
    "random variables",
    "probability mass function",
    "expectation",
    "variance",
    "independence",
    "counting",
    "success probability"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Modeling Events Over Time",
   "summary": "Learn how to model the count of random events arriving over time—like help desk tickets or customer arrivals—when you don't know the total number of possible events in advance. This video derives the Poisson distribution from first principles, shows you how to apply its single parameter (lambda, the average rate), and teaches you how to spot when it's actually the right tool for your data.",
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
    "probability distributions",
    "counting events",
    "rate modeling",
    "binomial to Poisson",
    "lambda parameter",
    "mean equals variance",
    "event timing",
    "independence assumption",
    "time windows"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric and Negative Binomial Distributions: Waiting for Success",
   "summary": "Learn how to model the number of trials needed until the first success (or r-th success) using the geometric and negative binomial distributions. You'll derive the geometric PMF, understand why the average wait is 1/p, discover the surprising memorylessness property, and learn how these distributions differ from binomial and Poisson by flipping the question from \"how many successes\" to \"how long until success.\"",
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
    "PMF derivation",
    "expected value",
    "independence",
    "probability distributions"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "Recognizing Binomial, Poisson, Geometric, and Negative Binomial Distributions",
   "summary": "Learn how to identify which distribution applies in a given scenario using just three questions: Is there a fixed number of trials, a time window, or are you waiting for something? Are the trials independent? Is the probability or rate constant? This lesson teaches recognition, not formulas, with twelve real-world scenarios to practice on.",
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
    "distribution recognition",
    "binomial distribution",
    "Poisson distribution",
    "geometric distribution",
    "negative binomial",
    "probability distributions",
    "statistics",
    "helpdesk scenarios",
    "exam preparation",
    "counting problems"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability Distributions and Probability Density Functions",
   "summary": "Learn why a single exact value in a continuous distribution has zero probability, and how probability density functions (PDFs) work differently from discrete probabilities. You'll master the relationship between PDFs and cumulative distribution functions (CDFs), and learn to calculate expectation and variance for continuous random variables using integration.",
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
    "cumulative distribution",
    "continuous random variables",
    "expectation",
    "variance",
    "integration",
    "probability theory"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Exponential Distribution: Waiting Times and the Poisson Connection",
   "summary": "Learn how to model the time you wait for the next random event using the exponential distribution, and discover its surprising connection to the Poisson process. You'll understand why waiting times have a distinctive decaying shape, why the mean equals the standard deviation, and the counterintuitive property of memorylessness that makes exponential waits different from everyday intuition.",
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
    "probability density",
    "memorylessness",
    "uniform distribution",
    "random arrivals",
    "standard deviation",
    "conditional probability"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Formula, and How to Use Tables",
   "summary": "Learn what makes the normal distribution so fundamental in statistics: its shape, the meaning of its two parameters (mu and sigma), and how standardization transforms any normal problem into a lookup table query. You'll work through forward problems (finding probabilities from values) and reverse problems (finding thresholds from probabilities), with practical checks to catch your own mistakes.",
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
    "z-scores",
    "probability tables",
    "mean and standard deviation",
    "Gaussian distribution",
    "statistical inference",
    "continuous distributions",
    "hypothesis testing"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit: Choose the Right Distribution Tool",
   "summary": "Learn a four-step routine to solve any probability problem: sketch the density first, set up the integral over the correct limits, compute it, then verify the answer against zero, one, and your picture. Work through six realistic problems involving exponential, normal, and discrete distributions, and discover why sketching before any algebra catches most mistakes.",
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
    "density function",
    "CDF",
    "probability integral",
    "exponential distribution",
    "normal distribution",
    "discrete vs continuous",
    "problem-solving routine",
    "sketch-first method"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions, Marginals, and Independence",
   "summary": "Learn how to work with two random variables at once using joint probability distributions. This video teaches you to extract marginal distributions, recognize independence, condition on one variable, and calculate expectations—with concrete examples using ticket counts from two technicians.",
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
    "marginal distribution",
    "independence",
    "random variables",
    "conditional probability",
    "joint PMF",
    "expectation",
    "probability",
    "two random variables"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Do Two Variables Move Together?",
   "summary": "Learn how to quantify whether two variables move together using covariance and its scaled version, correlation. You'll compute covariance from a joint probability table, discover why zero covariance doesn't guarantee independence, and understand the crucial limitations of correlation—it only detects linear relationships and never proves causation.",
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
    "linear association",
    "joint distribution",
    "independence",
    "standard deviation",
    "causation vs correlation",
    "probability"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Variance of Sums and Covariance: Why Adding Variances Isn't Always Valid",
   "summary": "Learn why expectation adds easily for any random variables, but variance only adds when covariance is zero—and how to spot the difference in real situations. This video shows why two people with the same average workload can have wildly different total variance depending on whether their busy periods overlap, and extends the reasoning to teams and distributions.",
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
    "independence",
    "sums of random variables",
    "Poisson distribution",
    "normal distribution",
    "variability",
    "probability"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Recognition: Choosing the Right Probability Distribution",
   "summary": "Learn to identify which probability distribution a problem is asking for, using a three-question decision flow: discrete or continuous, what output is needed, and whether you need joint distributions or just sum rules. Through 15 helpdesk scenarios, you'll practice spotting the shape of a question fast—the critical skill that trips people up on exams and the job.",
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
    "problem recognition",
    "decision framework",
    "random variables",
    "discrete vs continuous",
    "CDF and PMF"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Stabilize",
   "summary": "Discover why repeated measurements converge to their true average — and why the past never \"catches up\" in the future. You'll learn the mathematical mechanism behind the law of large numbers, see why variance shrinks as n grows, and understand how to spot the gambler's fallacy. Afterward, you'll be able to explain convergence properly and estimate how many samples you need before trusting an average.",
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
    "expected value",
    "convergence",
    "variance",
    "gambler's fallacy",
    "sample mean",
    "probability",
    "random variables",
    "statistics",
    "averaging"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "Why Normal Distributions Appear Everywhere: The Central Limit Theorem",
   "summary": "Learn why bell-curve distributions emerge so often in real data, even when individual measurements are skewed. This lesson explains the central limit theorem—how sums and averages of independent observations become approximately normal—and teaches you to use this to predict real outcomes, like whether a technician's shift will overrun.",
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
    "sums of random variables",
    "law of large numbers",
    "probability",
    "statistical inference",
    "independence",
    "finite variance",
    "standardization"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "One Page of Distributions: What to Know Cold for the Exam",
   "summary": "Learn which distributions, formulas, and checks belong on a single exam reference sheet—and how to use them to solve problems that don't tell you which tool to grab. This episode builds a complete table of six distributions with their real-world stories, covers six essential formulas with built-in sanity checks, and walks through five worked problems that show how to match the situation to the right method under pressure.",
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
    "exam preparation",
    "variance",
    "expectation",
    "problem-solving",
    "reference sheet"
   ],
   "src": "/media/learn/chance/chance-20.mp4",
   "poster": "/media/learn/chance/chance-20.jpg",
   "captions": "/media/learn/chance/chance-20.vtt"
  }
 ];

export const SHIFT: Lesson[] = [
  {
   "n": 1,
   "title": "The Structural Limits of Legacy Systems",
   "summary": "Learn why legacy systems can't perform certain tasks—not because they're poorly designed, but because they're bounded by requirements documents written years in advance. This video identifies three concrete examples of work systems structurally can't do: reading and interpreting human intent, recognizing patterns across separate events, and composing coherent narratives. You'll be able to distinguish between what your existing system genuinely can't do and whether addressing those gaps is worth the cost.",
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
    "requirements engineering",
    "business process",
    "automation boundaries",
    "system design",
    "human-computer work",
    "technical debt",
    "operational patterns",
    "business decisions"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts That Changed Software: From APIs to Foundation Models",
   "summary": "This video explains three fundamental shifts that foundation models brought to software design, using a dispatch system as a concrete example: plain-language instructions replaced fixed APIs, single models gained the ability to handle multiple jobs, and inference became fast and cheap enough to run live during transactions. You'll learn what foundation models actually are, why these shifts matter in practice, and—critically—what didn't change about their limitations and risks.",
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
    "software architecture",
    "APIs",
    "machine learning infrastructure",
    "dispatch systems",
    "large language models",
    "system design",
    "inference optimization",
    "model limitations",
    "practical AI"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "Why AI Features Fail (And How to Build Them Right)",
   "summary": "Most teams add AI features to their existing screens, where they quietly fail because they duplicate work that already worked fine. Learn the architectural difference between this common mistake and the alternative: putting the model where human messiness actually lives—reading exceptions, determining what they mean, and proposing actions while the old system becomes the hands that execute them.",
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
    "dispatch systems",
    "technical debt",
    "machine learning deployment",
    "business logic",
    "software design",
    "exception handling",
    "implementation patterns"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: How AI Changes Team Roles",
   "summary": "When you add machine learning to a feature, the day-to-day work changes for architects, product owners, scrum masters, testers, and developers—but in specific, different ways. Learn how each role adapts: where architects put fallbacks, why product owners write examples instead of specs, how testers watch scores instead of checking boxes, and what developers do differently when building around an unreliable component. Understand the three mistakes teams make with AI features and how to structure work that can be right eighty percent of the time.",
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
    "AI features",
    "testing",
    "fallback design",
    "logistics",
    "model evaluation",
    "development practices"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "The Real Speedup from AI Coding: Ranges, Not Numbers",
   "summary": "This video breaks down the honest answer to how much faster AI actually makes you at coding: some tasks get 2-5x faster, but others don't move at all, and the bottleneck just shifts. You'll learn which parts of the development cycle actually benefit from code-generation models—and why a 66% drop in writing time doesn't translate to a 66% faster project.",
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
    "bottlenecks",
    "realistic expectations",
    "software development",
    "model-assisted coding"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing and Planning ML Systems: Why Your Estimates Will Be Wrong",
   "summary": "Learn why traditional project staffing breaks down when building machine learning systems, and what roles you actually need to hire or reshape. This video teaches the honest planning rule that separates working demos from production-ready systems, and reveals why probabilistic systems require different maintenance budgets and organizational structures than deterministic software.",
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
    "machine learning",
    "project planning",
    "team structure",
    "estimation",
    "reliability",
    "software engineering",
    "ML operations",
    "logistics systems",
    "probabilistic systems",
    "technical leadership"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "Model Calls: Text In, Text Out—What's Really Happening",
   "summary": "Learn what actually happens when code calls a language model: a stateless request-response with text in and text out, priced per token, sometimes slow, sometimes wrong. This video teaches the five-component architecture (input, prompt, model, validate, fallback) and the critical mistakes teams make—like skipping validation, assuming consistent outputs, ignoring latency, and discovering fallback strategies in production.",
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
    "API calls",
    "system design",
    "validation",
    "software architecture",
    "LLM integration",
    "error handling",
    "production deployment",
    "developer practices",
    "model reliability"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What Actually Is an Agent? A Plain Definition",
   "summary": "Agents are the most overused term in AI—but they have a specific, testable definition. This lesson gives you one: a model in a loop with tools that sets its own path based on what it discovers, unlike a single model call. By the end you'll be able to recognize the difference and know when to build an agent versus a fixed pipeline, plus understand the real engineering risks and controls you need.",
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
    "agents",
    "AI definition",
    "model loops",
    "tools",
    "agentic AI",
    "LLM agents",
    "workflow design",
    "failure modes",
    "engineering controls",
    "when to use agents"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "The \"Glue Problem\": Why Model Frameworks Need a Common Protocol",
   "summary": "Learn why every new AI model framework or tool requires rewriting integration code, and how a common protocol (like MCP) lets systems describe themselves once in a standardized way that any client can understand. Discover what a CTO actually gains from this standard—and its critical limitation: standardized description doesn't mean the tool is safe to expose to a model.",
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
    "MCP",
    "model framework integration",
    "AI agents",
    "system integration",
    "protocol design",
    "CTO decision-making",
    "safety and exposure",
    "technical standards",
    "tool exposure",
    "framework-agnostic design"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "RAG vs GraphRAG: Grounding LLMs in Your Business Data",
   "summary": "Learn why foundation models alone can't answer questions about your business, and how two generations of retrieval systems—RAG and GraphRAG—solve the problem differently. You'll understand semantic search, knowledge graphs, and why GraphRAG handles complex multi-hop questions that simple document retrieval cannot, plus the real operational cost of maintaining accurate business models.",
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
    "LLM",
    "knowledge graph",
    "semantic search",
    "retrieval-augmented generation",
    "Neo4j",
    "vector search",
    "foundation models"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls: Guardrails, Routing, and Context Engineering",
   "summary": "Learn the three production controls that prevent bad outputs, control costs, and stop models from drowning in unnecessary information. This video teaches guardrails (input/output checks), routing (matching task difficulty to model cost), and context engineering (deciding what data the model sees), showing how each one works in a real dispatch system and what mistakes to avoid when implementing them.",
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
    "AI safety",
    "production systems",
    "guardrails",
    "model routing",
    "cost optimization",
    "context engineering",
    "LLM operations",
    "prompt engineering",
    "system design",
    "evaluation"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Splitting \"Prompt Engineering\" Apart",
   "summary": "Most teams use \"prompt engineering\" as a catch-all for everything they do with AI models, but it's actually four distinct disciplines: prompt engineering, context engineering, loop engineering, and harness engineering. Learn how to separate them, understand what each one does, and discover which one teams consistently underfund in production—leading to silent failures.",
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
    "AI production",
    "LLM systems",
    "model validation",
    "observability",
    "exception handling",
    "budget allocation"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Prompt, Context, Loop, and Harness Engineering: Four Different Jobs",
   "summary": "Learn the four distinct pieces of work that are often confused under a single name: prompt engineering (wording instructions), context engineering (choosing what the model sees), loop engineering (designing retry logic), and harness engineering (production oversight). Understand which one most teams neglect and why starting with the right priority—context and harness first, prompt last—prevents failures in production.",
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
    "LLM deployment",
    "AI systems",
    "production readiness",
    "dispatch systems",
    "model validation",
    "engineering priorities"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When Not to Use a Language Model",
   "summary": "Learn when to use classical machine learning instead of language models, and where each tool actually belongs in a production system. You'll recognize the three architectural patterns—structured data requiring regression or classification, unstructured language needing language models, and fine-tuning for format consistency—so you can avoid months of wasted work building the wrong solution.",
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
    "machine learning",
    "language models",
    "regression",
    "classification",
    "fine-tuning",
    "retrieval",
    "architecture",
    "practical AI",
    "when to use what",
    "structured data"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "AI Model Costs: Building a Cost Model from Tokens to Production",
   "summary": "Learn how to calculate the true cost of running AI models in production, breaking it down from tokens-in and tokens-out through multi-step agents, retries, evaluation, and human review. You'll discover the four levers that actually reduce costs and see how to instrument your system from day one to avoid the projects that fail after launch when the bill arrives.",
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
    "AI costs",
    "token pricing",
    "production systems",
    "cost optimization",
    "model evaluation",
    "cost metering",
    "agentic systems",
    "financial planning",
    "operations"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "Why AI Systems Don't Crash — They Just Fail Quietly",
   "summary": "Learn why deployed AI systems don't produce obvious errors—they produce confident wrong answers that go unnoticed while dashboards stay green. This video teaches you to recognize four failure modes (confident wrong answers, silent degradation, stalls, and compounding errors) and build systems that are attributable and replayable through proper logging and human-approval policies.",
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
    "AI failure modes",
    "silent errors",
    "system accountability",
    "AI logging",
    "responsible AI",
    "multi-step processes",
    "decision attribution",
    "AI deployment",
    "human oversight",
    "AI governance"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Migrating to AI: The Front-Door Pattern Without Rebuilding",
   "summary": "Learn how to deploy an AI model into an existing system without touching its code by placing the model in front of legacy systems and routing decisions through existing interfaces. This video teaches the safe, staged migration pattern: shadow mode evaluation, human-in-the-loop approval, and narrow autonomy—starting with high-tolerance, high-volume manual work rather than flashy high-stakes processes.",
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
    "shadow mode",
    "human-in-the-loop",
    "AI in operations",
    "logistics",
    "model evaluation",
    "risk mitigation",
    "system integration"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Actually Changes for You as a Developer",
   "summary": "Learn which of your existing engineering skills transfer to AI-integrated systems and which new capabilities you actually need to develop. This lesson cuts through the hype by identifying what stays the same (systems thinking, testing discipline, healthy skepticism) and what's genuinely new (thinking in distributions, owning evaluation sets, designing loops for quiet failures), plus what's not worth your time at all.",
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
    "AI systems design",
    "developer skills",
    "evaluation sets",
    "model reliability",
    "backend development",
    "systems thinking",
    "skill transfer",
    "AI integration",
    "cost optimization",
    "error handling"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Questions to Decide If Your Company Should Use AI",
   "summary": "Learn the six questions to honestly evaluate whether your company should adopt a probabilistic system, asked in the right order to reveal the real answer. This framework shows you how to assess the cost of unhandled work, accountability risks, data availability, running costs, team capability, and sponsor commitment—helping you determine when the answer is yes, no, or not yet.",
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
    "AI adoption",
    "decision framework",
    "business strategy",
    "cost analysis",
    "risk assessment",
    "data requirements",
    "probabilistic systems",
    "implementation",
    "machine learning ROI",
    "honest evaluation"
   ],
   "src": "/media/learn/shift/shift-19.mp4",
   "poster": "/media/learn/shift/shift-19.jpg",
   "captions": "/media/learn/shift/shift-19.vtt"
  }
 ];

export const MODELLING: Lesson[] = [
  {
   "n": 1,
   "title": "Graph Schema Design: Starting From Questions, Not Entities",
   "summary": "Learn why graph databases require a fundamentally different schema approach than relational databases, and the discipline for getting it right. By starting with actual questions your application needs to answer and building from traversals rather than entity lists, you'll design models that answer those questions in one or two hops instead of four, and understand when a node earns its place versus when a fact belongs on a relationship instead.",
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
    "graph database",
    "schema design",
    "Neo4j",
    "Cypher",
    "data modeling",
    "relational vs graph",
    "query optimization",
    "domain modeling",
    "traversal design"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels vs Properties in Neo4j",
   "summary": "Learn when labels are the right choice for your graph and when to use properties instead. This lesson covers three common mistakes—using labels for status, values, and tenant separation—and explains why each causes problems. You'll finish with a clear rule: labels answer \"what kind of thing is this,\" while everything else belongs in properties.",
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
    "labels",
    "properties",
    "graph modeling",
    "Cypher",
    "database design",
    "schema",
    "best practices",
    "data structure"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j",
   "summary": "Learn why every Neo4j relationship must have a direction and how to choose it based on real-world facts, not query patterns. Discover when to split relationships into multiple types versus keeping them as one type with properties, and how this choice affects query performance on dense nodes.",
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
    "granularity",
    "relationship types",
    "graph databases",
    "query performance",
    "Cypher"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reifying Relationships: When Facts Need Their Own Nodes",
   "summary": "Learn when a relationship between two things actually describes a third—and how to fix it by promoting that fact to its own node. This video teaches you to recognize three signals that demand reification: accumulating properties, the need to connect further, and repeated pairs. You'll understand why this pattern appears everywhere in graph design, and exactly when the extra query cost is worth paying.",
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
    "relationships",
    "reification",
    "join tables",
    "node design",
    "database patterns",
    "many-to-many",
    "schema design"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graphs: From Properties to Version Chains",
   "summary": "Learn three concrete ways to model change over time in graph databases, moving beyond simple property overwrites. You'll see how to choose between validity windows, version node chains, and time trees based on your actual query patterns, and discover the three critical rules that protect historical accuracy no matter which approach you pick.",
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
    "temporal data",
    "data modeling",
    "time series",
    "Neo4j",
    "relationships",
    "validity windows",
    "version control",
    "bitemporality",
    "query patterns"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Constraints: Making the Database Enforce Your Data Model",
   "summary": "Learn how to use constraints to prevent bad data from entering your Neo4j database and enforce the decisions you made about your data model. This lesson covers uniqueness constraints, node keys, existence constraints, and property type validation, plus the performance bonus of index creation that comes with them.",
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
    "constraints",
    "data validation",
    "uniqueness",
    "node key",
    "existence constraint",
    "property type",
    "Neo4j",
    "data integrity",
    "database design",
    "indexes"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 10,
   "title": "Migrating Properties to Nodes in a Live Graph",
   "summary": "Learn how to safely refactor a graph database when a property needs to become a node—the moment when your data model no longer fits the questions you're being asked. This lesson teaches the five-step method for adding, validating, and retiring schema changes without downtime or data loss, using batching and parallel reads to protect a live system handling millions of concurrent users.",
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
    "data modeling",
    "neo4j",
    "CALL IN TRANSACTIONS",
    "constraints",
    "refactoring",
    "live systems",
    "property to node",
    "database safety"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Neptune vs Neo4j: Migration Decision Framework",
   "summary": "This lesson walks through the real differences between AWS Neptune and Neo4j—not as a pitch to switch, but as a honest cost-benefit analysis using a 40-million-node production system. You'll learn what each database actually is, where Neptune's managed operations win, where Neo4j's tooling (Bloom, Browser, Graph Data Science) create pressure to migrate, and the five concrete questions that should drive a migration decision.",
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
    "graph databases",
    "database migration",
    "Cypher",
    "Gremlin",
    "managed services",
    "AWS",
    "cost analysis",
    "database architecture"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: Five Key Differences Between Neptune and Neo4j",
   "summary": "Both Neptune and Neo4j use property graphs, but critical differences in how they handle labels, IDs, properties, types, and edges cause real migration problems. This lesson walks through all five differences and shows you where your queries will break, including the single most common migration bug everyone hits. You'll leave with a mapping table you can use to guide your actual data migration.",
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
    "graph database migration",
    "property graphs",
    "database modeling",
    "Gremlin to Cypher",
    "data migration",
    "graph schema",
    "IDs and properties",
    "database differences"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Translating Gremlin Queries to Cypher: A Pattern-Driven Approach",
   "summary": "Learn how to rewrite Gremlin graph queries in Cypher by understanding the fundamental difference between imperative traversal and declarative pattern matching. This video maps each major Gremlin operation—from basic node lookups and filters to loops, grouping, and mutations—to its Cypher equivalent, including where the two languages diverge and where Cypher actually offers advantages. By the end, you'll be able to translate real Gremlin queries into idiomatic Cypher and avoid the common pitfall of writing Cypher like a step-by-step walk instead of letting the planner optimize your whole pattern at once.",
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
    "graph queries",
    "query translation",
    "Neo4j",
    "pattern matching",
    "traversal",
    "graph databases",
    "query optimization",
    "database migration"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating RDF to Neo4j: The SPARQL Guide",
   "summary": "Learn how to migrate your RDF data model to Neo4j by converting triples, predicates, and semantic patterns into properties, relationships, and nodes. This video covers the key rules for translating RDF constructs—including blank nodes, reification, named graphs, and class hierarchies—and shows you how SPARQL queries map directly to Cypher, plus the three critical mistakes that sink RDF migrations in production.",
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
    "RDF",
    "Neo4j",
    "migration",
    "SPARQL",
    "Cypher",
    "triples",
    "semantic web",
    "data modeling",
    "neosemantics",
    "graph databases"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large AWS Neptune Graphs Without Downtime",
   "summary": "Learn how to export massive graphs (40M+ nodes) from AWS Neptune without taking production offline. This video covers the two-export strategy: capturing a consistent snapshot while simultaneously recording all subsequent changes via Neptune Streams, then combines them into a complete, validated dataset for migration or backup.",
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
    "graph database",
    "data export",
    "database migration",
    "Neptune Streams",
    "cluster snapshot",
    "Gremlin",
    "CSV export"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Neptune to Neo4j: Why Loading Takes Days and How to Do It Right",
   "summary": "Loading forty million nodes and two hundred million relationships from Neptune into Neo4j can take three days instead of one hour—if you do it wrong. This lesson teaches the exact order and tools required: constraints first, nodes before relationships, neo4j-admin import for the bulk load, then LOAD CSV with proper batching, and finally count verification to catch silent failures that MERGE operations hide.",
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
    "Neptune migration",
    "Neo4j bulk import",
    "LOAD CSV",
    "neo4j-admin import",
    "database constraints",
    "batch loading",
    "relationship loading",
    "data migration",
    "graph database",
    "performance tuning"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Rewriting Your Graph Layer: Neptune Gremlin to Neo4j Cypher",
   "summary": "Migrating from Neptune's Gremlin to Neo4j requires rewriting your entire application layer—not just swapping query strings. Learn how to restructure drivers, sessions, transactions, result handling, and routing, then use an interface pattern with dual implementations and shared tests to migrate query-by-query without a flag-day cutover.",
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
    "Neptune",
    "graph migration",
    "Cypher",
    "database drivers",
    "transactions",
    "Java",
    "application architecture",
    "testing"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Migrating from Neptune to Neo4j: The Five-Phase Cutover Strategy",
   "summary": "Learn the safe, phased approach to migrating a production database from Neptune to Neo4j without risking data inconsistency or downtime. This lesson walks through five stages—shadow reads, dual writes, read migration by query class, role reversal, and decommission—and shows you how to measure progress and roll back safely at any point using feature flags.",
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
    "Neptune",
    "cutover strategy",
    "dual writes",
    "feature flags",
    "shadow reads",
    "production safety",
    "query migration",
    "database testing"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: Writing Clear, Correct Graph Queries",
   "summary": "Learn how to read and write Cypher patterns that let you express complex graph relationships without manual joins. This lesson covers pattern syntax, directionality, multiple patterns in a single query, and OPTIONAL MATCH—the feature that fixes the most common mistake SQL developers make when transitioning to Cypher.",
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
    "graph patterns",
    "query syntax",
    "relationship direction",
    "OPTIONAL MATCH",
    "MATCH clause",
    "graph databases",
    "query language",
    "database fundamentals"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths in Cypher: From Hops to Shortest Paths",
   "summary": "Learn how to traverse graphs with unknown distances using variable-length relationships in Cypher, including the asterisk notation and bound syntax. Discover how to name and inspect paths, understand the performance differences between finding any path versus shortest paths, and avoid common mistakes that cause expensive queries.",
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
    "Neo4j",
    "shortest path",
    "pattern matching",
    "query performance",
    "graph traversal",
    "relationships",
    "database optimization"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "Cypher Data Shaping: Lists, Maps, and Comprehensions",
   "summary": "Learn the non-graph parts of Cypher that shape query results for APIs and applications: lists, list and pattern comprehensions, UNWIND, and map projection. After this lesson you'll be able to filter and transform data in your queries, pass lists between your application and the database efficiently, and return properly structured objects instead of raw nodes.",
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
    "list comprehension",
    "pattern comprehension",
    "UNWIND",
    "map projection",
    "Neo4j",
    "data shaping",
    "query optimization",
    "parameters"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 8,
   "title": "Importing Data Into Neo4j: CSV to Graph",
   "summary": "Learn the complete process of building a graph from raw data files, starting with LOAD CSV and handling the quirks of string conversion, data types, and missing values. This lesson covers the practical patterns that prevent duplicate nodes, memory overload, and silent import failures—constraints first, one node type per pass, batching with transactions, and verification that your import produced exactly what you expected.",
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
    "LOAD CSV",
    "data import",
    "CSV",
    "constraints",
    "MERGE",
    "batching",
    "data loading",
    "graph databases",
    "transactions"
   ],
   "src": "/media/learn/cypher/cypher-08.mp4",
   "poster": "/media/learn/cypher/cypher-08.jpg",
   "captions": "/media/learn/cypher/cypher-08.vtt"
  },
  {
   "n": 9,
   "title": "Neo4j Query Performance: Indexes and PROFILE",
   "summary": "Learn why queries that work on small datasets become slow on real databases and how to fix them using indexes, constraints, and performance analysis. You'll master the fundamentals of query planning by reading PROFILE output to identify bottlenecks and discover which index types—range, composite, and text—work for different filtering scenarios.",
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
    "neo4j",
    "database indexes",
    "query performance",
    "PROFILE",
    "EXPLAIN",
    "optimization",
    "range index",
    "composite index",
    "text index",
    "database design"
   ],
   "src": "/media/learn/cypher/cypher-09.mp4",
   "poster": "/media/learn/cypher/cypher-09.jpg",
   "captions": "/media/learn/cypher/cypher-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Queries That Look Correct But Aren't",
   "summary": "Learn five common Cypher query mistakes that produce no errors but wrong results or severe performance problems—the kind that work in testing but fail at scale in production. You'll identify Cartesian products, unbounded traversals, incorrect counts, MERGE mismatches, and hidden planner changes, then apply PROFILE to catch them before they cost you a day.",
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
    "Cypher",
    "query mistakes",
    "performance",
    "debugging",
    "PROFILE",
    "MERGE",
    "graph patterns",
    "production errors"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];
