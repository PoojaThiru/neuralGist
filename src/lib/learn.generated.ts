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
   "title": "Why Testing Language Models Is Fundamentally Different",
   "summary": "Learn why traditional software testing doesn't work for language models and what makes evaluating AI outputs so challenging. This video explains four core problems: multiple acceptable answers, the difficulty of automated evaluation, non-deterministic outputs, and the spectrum of wrongness including hallucinations.",
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
    "AI evaluation",
    "hallucination",
    "software testing",
    "non-deterministic",
    "prompt engineering",
    "quality assurance"
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
   "title": "The Hidden Biases in AI Judge Models",
   "summary": "Learn how AI judge models can pass calibration tests yet still fail in systematic, predictable ways. This video walks you through four major biases—position bias, verbosity bias, self-preference bias, and calibration mistakes—and shows you how to test for and avoid them in your own evaluation pipelines.",
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
    "AI evaluation",
    "judge models",
    "bias detection",
    "pairwise comparison",
    "model calibration",
    "LLM evaluation",
    "verbosity bias",
    "position bias",
    "self-preference bias",
    "testing methodology"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why BLEU, ROUGE, and Exact Match Fail",
   "summary": "Learn why standard metrics borrowed from translation and summarization research—exact match, BLEU, and ROUGE—measure surface-level wording similarity, not actual correctness, and why they produce misleading scores when models paraphrase. Discover what actually works instead: semantic similarity, LLM-as-judge, and task-based evaluation, plus the common mistakes teams make when evaluating model outputs.",
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
    "metrics",
    "BLEU",
    "ROUGE",
    "exact match",
    "semantic similarity",
    "LLM-as-judge",
    "model assessment",
    "hallucination detection",
    "AI quality evaluation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Debugging RAG: Separate Retriever and Generator Scoring",
   "summary": "Learn how to diagnose failures in RAG (retrieval augmented generation) systems by scoring the retriever and generator independently instead of tracking a single end-to-end score. You'll understand how to measure retriever performance with recall and precision at k, evaluate generator faithfulness against retrieved passages, and pinpoint exactly which component to fix when your system produces bad answers.",
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
    "debugging",
    "retriever scoring",
    "generator scoring",
    "recall at k",
    "precision at k",
    "faithfulness",
    "LLM systems"
   ],
   "src": "/media/learn/llm-eval/llm-eval-06.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-06.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-06.vtt"
  },
  {
   "n": 7,
   "title": "Safety Nets for AI Models: Continuous Evaluation in CI/CD",
   "summary": "Learn how to build a safety net—an automated evaluation system that protects your AI model from regression every time code changes. You'll discover how to create a golden set of test cases, define meaningful thresholds, integrate evaluation into your CI/CD pipeline, and avoid common pitfalls like stale data and gaming metrics. After watching, you'll be able to implement continuous model evaluation that catches problems before they reach customers.",
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
    "AI evaluation",
    "model testing",
    "CI/CD pipeline",
    "safety net",
    "golden set",
    "monitoring",
    "machine learning",
    "regression detection",
    "automated testing",
    "LLM evaluation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Evaluation vs. Red-Teaming: Why a Passing Score Isn't a Safety Guarantee",
   "summary": "Learn the critical difference between evaluation (testing a model on a fixed set of questions) and red-teaming (actively trying to break it with new attacks), and why a high test score tells you nothing about performance on questions you didn't ask. This lesson shows how even models scoring 94% can fail in production when teams skip red-teaming or treat evaluation scores as safety guarantees.",
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
    "model testing",
    "AI safety",
    "model validation",
    "test sets",
    "adversarial attacks",
    "machine learning",
    "model deployment",
    "security testing"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Model Servers Need Batching (The Sunday Night Problem)",
   "summary": "Learn why running a language model on a server is fundamentally different from running a normal web app, and how servers use batching, latency/throughput tradeoffs, and memory management to handle thousands of simultaneous requests. After watching, you'll understand the key-value cache, why GPU efficiency matters, and the hidden costs that make Sunday nights challenging for tutoring apps.",
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
    "inference optimization",
    "token generation",
    "machine learning systems",
    "server architecture",
    "autoregressive generation"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: Why LLMs Need Smart Scheduling",
   "summary": "Learn why naive static batching wastes GPU compute when processing multiple LLM requests of different lengths, and how continuous batching solves that by rescheduling slots at every token step. You'll understand the core scheduling problem in inference, see a concrete example of the efficiency gains, and learn what continuous batching can and can't do.",
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
    "LLM inference",
    "static batching",
    "GPU scheduling",
    "token generation",
    "batch processing",
    "machine learning systems",
    "compute efficiency"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache Problem and Paging Solution",
   "summary": "Learn why a single GPU serving many simultaneous LLM requests fills up so quickly, even though most requests use far fewer tokens than the maximum reserved. This video explains the KV cache memory fragmentation problem and shows how applying OS-style paging—dividing the cache into fixed-size blocks with a lookup table—solves both waste and fragmentation, plus enables memory sharing across requests with identical prompts.",
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
    "LLM inference",
    "memory fragmentation",
    "paging",
    "memory management",
    "token allocation",
    "block allocation",
    "memory optimization",
    "transformer efficiency"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Language Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "Learn three practical techniques for reducing a language model's size and speeding up its inference: quantization (rounding numbers to fewer bits), distillation (training a small model to copy a big one), and pruning (removing barely-used parameters). You'll understand the trade-offs of each approach and learn the critical mistake to avoid—always measure compression on your own real tasks, not just generic benchmarks.",
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
    "language models",
    "inference optimization",
    "machine learning",
    "model efficiency",
    "neural networks",
    "performance tuning"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "Serving Custom Models at Scale: Adapters and Routing",
   "summary": "Learn why companies can't run hundreds of separate language models and what they do instead: one shared base model plus tiny customer-specific adapters. You'll understand how adapters work, the role of cold starts, how routers direct requests to warm machines, and the three biggest mistakes people make when building these systems.",
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
    "fine-tuning",
    "scaling",
    "inference",
    "routing",
    "GPU memory",
    "system design",
    "machine learning operations",
    "cold starts"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How AI Models Guess Ahead",
   "summary": "Learn how speculative decoding speeds up language model inference by using a small draft model to guess multiple tokens ahead, which a larger model then validates in a single pass. You'll understand why this method doesn't compromise output quality, what mistakes teams make when implementing it, and how it delivers multiple tokens for nearly the cost of one.",
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
    "token generation",
    "draft models",
    "AI efficiency",
    "transformer inference",
    "model verification",
    "speed optimization",
    "large language models"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Scale AI Models Across Multiple GPUs",
   "summary": "Learn why \"just add more GPUs\" isn't simple, and discover the three fundamentally different parallelism strategies that power real AI systems: data parallelism for handling more requests, tensor parallelism for fitting massive models, and pipeline parallelism for splitting work across stages. After watching, you'll understand which approach solves which problem and why teams often combine all three.",
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
    "AI scaling",
    "machine learning infrastructure",
    "distributed computing",
    "model optimization",
    "deep learning systems"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Deploying LLMs: The Production Questions Nobody Asks",
   "summary": "Once an LLM is live, the engineering challenges shift from model architecture to real-world operations. This video teaches what actually matters in production: measuring the tail latency (p99) instead of averages, tracking time-to-first-token separately from total time, handling slow autoscaling of GPU servers, and understanding what actually drives costs and breaks at 3 AM.",
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
    "production engineering",
    "latency monitoring",
    "p99 latency",
    "time to first token",
    "autoscaling",
    "cost optimization",
    "debugging",
    "observability",
    "system design"
   ],
   "src": "/media/learn/serving/serving-08.mp4",
   "poster": "/media/learn/serving/serving-08.jpg",
   "captions": "/media/learn/serving/serving-08.vtt"
  }
 ];

export const LEARNING: Lesson[] = [
  {
   "n": 1,
   "title": "Fitting vs. Memorizing: How Models Actually Learn",
   "summary": "This video explains what it means for a machine learning model to \"learn\" from data using apartment rental prices as a concrete example. You'll understand the difference between fitting (finding a pattern that generalizes) and memorizing (overfitting to every data point), and learn why splitting data into training and test sets is essential for catching when a model fails to generalize.",
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
    "fitting",
    "overfitting",
    "generalization",
    "training vs test",
    "model learning",
    "parameters",
    "prediction",
    "data science",
    "underfitting"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Mean? Linear Models and Residuals Explained",
   "summary": "Learn how to define and measure what makes a statistical model's fit \"best.\" This video builds intuition for linear models by showing why we can't just eyeball a line, how residuals quantify prediction error, and why we square them to get sum of squared errors (SSE). By the end, you'll understand the mathematical meaning of 'best fit' and what we're actually trying to minimize.",
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
    "best fit",
    "residuals",
    "sum of squared errors",
    "SSE",
    "statistical modeling",
    "prediction error",
    "linear models",
    "least squares",
    "data science"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Models Learn: Gradient Descent and Loss Functions",
   "summary": "Learn how machine learning models actually find the right knob settings by guessing, measuring their mistakes, and repeatedly adjusting in the right direction. This video builds up the complete mechanism: defining a loss function to quantify error, using calculus gradients to find downhill, and then applying gradient descent—the core algorithm that powers model training. You'll understand the learning rate, why it matters, and the common mistakes that trip people up.",
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
    "gradient descent",
    "loss function",
    "machine learning",
    "model training",
    "learning rate",
    "calculus",
    "error",
    "optimization",
    "neural networks",
    "mean squared error"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting vs. Underfitting: The Bias-Variance Tradeoff",
   "summary": "Learn why a model that predicts perfectly on training data can completely fail on new data, and how to catch this trap before it happens. This video teaches you to split your data into training, validation, and test sets, recognize overfitting (too complex) versus underfitting (too simple), and use regularization to keep your model from memorizing noise instead of learning real patterns.",
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
    "generalization",
    "machine learning",
    "model complexity"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "Logistic Regression: Predicting Categories Instead of Numbers",
   "summary": "Learn how to shift from predicting quantities to predicting categories using logistic regression. You'll discover why a straight line fails for probability predictions, how the sigmoid function constrains outputs between 0 and 1, and how to set decision boundaries to classify new data into yes-or-no categories.",
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
    "supervised learning",
    "categorical prediction",
    "threshold",
    "binary classification"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Confusion Matrices, Precision, and Recall",
   "summary": "A 92% accurate model sounds great—until you realize it could just be guessing the most common answer. Learn how class imbalance hides lazy models, and discover the confusion matrix, precision, and recall—the metrics that actually tell you if your model works. You'll also learn why testing on the same data you trained on is a trap that inflates performance.",
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
    "accuracy",
    "confusion matrix",
    "precision",
    "recall",
    "class imbalance",
    "machine learning evaluation",
    "model validation",
    "train-test split",
    "false positives",
    "false negatives"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "Data Leakage: Why Perfect Test Scores Can Mean Your Model Is Broken",
   "summary": "Learn why a machine learning model that looks perfect on test data can still fail in the real world—and how information accidentally leaks into training. This video walks through concrete examples of leakage (like features only known after the fact, or averages computed before splitting the data) and teaches you how to prepare features correctly: scaling, encoding categories, handling missing values, and splitting your data at the right time.",
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
    "machine learning",
    "data leakage",
    "feature engineering",
    "train test split",
    "data preprocessing",
    "overfitting",
    "supervised learning",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "The Full Pipeline: Building a Rental Price Predictor Start to Finish",
   "summary": "Watch all seven machine learning steps work together as a complete system: cleaning data, splitting train/test sets, engineering features, building a model, defining loss, running gradient descent, and regularizing. You'll see the exact order these pieces must happen in and learn the three critical mistakes that derail most people along the way.",
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
    "regularization",
    "train test split",
    "feature engineering",
    "loss function",
    "pipeline",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Fairly",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation provides a more reliable estimate of model performance. You'll see how to split data into k folds, rotate which fold serves as the test set, and use the average error to fairly compare different models.",
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
    "model comparison",
    "overfitting",
    "data splitting",
    "statistical validation",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: Questions That Predict",
   "summary": "Learn how decision trees make predictions by asking a series of yes-or-no questions about your data, splitting and branching until reaching a final answer. This video walks you through how trees choose their questions by measuring variance or impurity, and why you need to stop them from overfitting by memorizing individual data points instead of learning real patterns.",
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
    "prediction",
    "machine learning",
    "regression trees",
    "classification trees",
    "overfitting",
    "variance",
    "impurity",
    "data splits"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Bagging and Random Forests: Why Many Weak Models Beat One Strong One",
   "summary": "Learn why combining many mediocre decision trees often outperforms a single carefully-tuned tree. This video explains bootstrap sampling, bagging, and random forests using apartment price prediction—showing how averaging predictions from wobbly models can reduce variance and improve reliability.",
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
    "random forests",
    "bootstrap sampling",
    "decision trees",
    "ensemble methods",
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
   "title": "Hyperparameters: Tuning the Settings Before Training",
   "summary": "Learn the critical difference between parameters (learned during training) and hyperparameters (chosen before training starts), and why tuning settings like learning rate and lambda matters for model performance. You'll discover how to use a validation set to find good hyperparameter values, including techniques like grid search and cross-validation, and how to avoid common mistakes that undermine your results.",
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
    "validation set",
    "grid search",
    "cross-validation",
    "regularization",
    "lambda",
    "learning rate",
    "model tuning",
    "overfitting"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Class Imbalance: Why Accuracy Lies & How to Fix It",
   "summary": "When you're trying to predict something rare (like fraud or scams), accuracy can be dangerously misleading—a model can get 99% accuracy by ignoring the rare class entirely. Learn how to use confusion matrices, precision, recall, and the precision-recall tradeoff to build models that actually catch what matters, and discover the resampling and weighting techniques that prevent your model from failing on imbalanced data.",
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
    "accuracy trap",
    "precision and recall",
    "confusion matrix",
    "imbalanced classification",
    "base rate",
    "resampling",
    "class weights",
    "fraud detection",
    "machine learning pitfalls"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Introduction to Unsupervised Learning and K-Means Clustering",
   "summary": "Learn unsupervised learning: finding patterns in data without an answer key. This video teaches k-means clustering, how to choose the number of clusters using the elbow method, and critical mistakes to avoid like forgetting to scale features or being misled by outliers.",
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
    "k-means",
    "clustering",
    "machine learning",
    "elbow method",
    "feature scaling",
    "data analysis",
    "pattern recognition",
    "centroids"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Principal Component Analysis: Simplifying High-Dimensional Data",
   "summary": "Learn how to handle datasets with too many columns by using Principal Component Analysis (PCA) to find the directions that capture the most important variation in your data. This video covers the curse of dimensionality, how to identify redundant features, the math behind eigenvectors and covariance matrices, and common mistakes like forgetting to standardize your columns. After watching, you'll know how to reduce 47 noisy columns down to a few meaningful principal components that preserve the information that actually matters.",
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
    "principal component analysis",
    "PCA",
    "dimensionality reduction",
    "eigenvectors",
    "covariance matrix",
    "feature selection",
    "data preprocessing",
    "standardization",
    "variance",
    "curse of dimensionality"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "Model Deployment: Calibration, Explanation, and Drift",
   "summary": "Learn what happens after a machine learning model passes testing—the three critical issues that emerge in production: whether confidence scores are honest (calibration), whether decisions can be explained to users (explanation), and whether the applicant pool has changed (drift). You'll see how to detect and fix each one, and understand why a well-tested model can still fail in the real world.",
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
    "explainability",
    "data drift",
    "model monitoring",
    "confidence scores",
    "SHAP",
    "temperature scaling",
    "production ML"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks Part 1: From Logistic Regression to Stacked Neurons",
   "summary": "Discover how neural networks are built from logistic regression—a model you've already learned. You'll see why stacking neurons without nonlinearity is mathematically useless, what one activation function adds to make stacking powerful, and trace through concrete examples with algebra to understand why deep networks work.",
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
    "deep learning fundamentals",
    "machine learning",
    "overfitting",
    "parameter count"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "What Hidden Units Actually Do: Activation Functions and Feature Learning",
   "summary": "Learn what happens inside a neural network's hidden layer and why activation functions like ReLU are essential for non-linear learning. By the end, you'll understand how each hidden unit learns to detect patterns as weighted combinations of inputs, and you'll be able to identify common pitfalls like dead units and the explainability tradeoff that comes with learned features.",
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
    "gradient descent",
    "feature learning",
    "deep learning",
    "network architecture"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: The Chain Rule Applied to Neural Networks",
   "summary": "Learn how neural networks update weights that are buried deep inside the network, not just at the output layer. This lesson shows exactly how the chain rule propagates gradients backward through each layer, using a concrete example with real numbers so you can trace every computation by hand. You'll understand why backprop works, what it actually computes, and what vanishing and exploding gradients are.",
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
    "ReLU activation",
    "vanishing gradients",
    "forward pass",
    "backward pass"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Neural Networks: Hyperparameters, Initialization, and Reading Loss Curves",
   "summary": "This video teaches the practical skills of training neural networks—the \"knobs\" that gradient descent alone doesn't specify. You'll learn how to initialize weights, set learning rate, choose batch size, detect overfitting, and read loss curves to diagnose what's actually breaking in your training, so you can train models that actually work instead of waiting a week for nothing.",
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
    "loss curves",
    "overfitting",
    "dropout",
    "training",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutional Layers: From Fully Connected to Kernels",
   "summary": "Learn why fully connected layers fail on images and how convolutional kernels solve the problem through parameter sharing, locality, and translation invariance. This video walks through the intuition behind convolutions—from why a small sliding kernel beats forty thousand weights to how stacking layers builds from edges to textures to object parts.",
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
    "kernels",
    "filters",
    "parameter sharing",
    "image processing",
    "stride",
    "padding",
    "pooling",
    "edge detection",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Text into Numbers",
   "summary": "Learn why words can't be coded as simple integers or one-hot vectors, and discover how embedding spaces solve this by learning dense vectors from context. You'll understand how to represent text as meaningful numbers that capture relationships between words, and see why a single vector per word still has limits.",
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
    "feature engineering",
    "categorical features",
    "one-hot encoding",
    "dense vectors",
    "word relationships"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "Transformers Explained: From Attention to Large Language Models",
   "summary": "Starting from the real problem of processing sequential information without fading memories or serial bottlenecks, this video builds up the transformer architecture piece by piece: attention mechanisms, query-key-value computation, multi-head attention, and the feed-forward layers that stack together into large language models. You'll understand what each component does, how they work together, and why transformer models can process text in parallel while capturing long-range dependencies.",
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
    "transformers",
    "attention mechanism",
    "neural networks",
    "NLP",
    "large language models",
    "query key value",
    "multi-head attention",
    "deep learning",
    "sequence modeling",
    "positional encoding"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When Deep Learning Wins (and When It Doesn't)",
   "summary": "Learn exactly when deep learning is the right tool and when simpler methods like gradient boosting outperform it. This video walks through the specific conditions—data size, input type, compute cost, interpretability needs, and transfer learning availability—that determine which model to use for any given problem.",
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
    "when to use",
    "model selection",
    "tabular data",
    "images",
    "transfer learning",
    "machine learning",
    "neural networks",
    "decision guide"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series Splits: Why Random Shuffling Leaks the Future",
   "summary": "When your data has a time order, randomly shuffling it for train-test splits allows your model to peek at future data, artificially inflating its performance. Learn why autocorrelation makes time-series data different, how to fix splits with chronological cuts and rolling-origin validation, and the audit question that catches subtle leakage in delayed labels and slow-to-arrive features.",
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
    "data leakage",
    "cross-validation",
    "rolling-origin validation",
    "autocorrelation",
    "chronological split",
    "walk-forward validation",
    "model validation"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: From Persistence Baselines to Prediction Intervals",
   "summary": "Learn how to build honest forecasting models by starting with embarrassingly simple baselines and understanding why they work. This video teaches you to decompose time series into trend, seasonality, and remainder; convert forecasting into a regression problem using lag features; choose appropriate error metrics; and communicate predictions as ranges rather than false precision.",
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
    "prediction intervals",
    "seasonality decomposition",
    "forecasting metrics",
    "MAE RMSE MAPE",
    "forecast horizon",
    "regression",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Good Models Can Be Wrong for Action",
   "summary": "Learn the critical difference between predictive questions (\"what will happen?\") and causal questions (\"what will happen if I do this?\"). You'll discover why a model can score perfectly on test data yet still be the wrong basis for decision-making, using the doorman-and-rent example to show how confounders hide true causal relationships. After watching, you'll know how to identify which type of question you're actually asking before building a model.",
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
    "prediction",
    "confounders",
    "counterfactual",
    "causal inference",
    "model interpretation",
    "observational vs interventional",
    "decision-making",
    "building quality",
    "actionable insights"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Randomized Experiments: Proving Causation, Not Just Correlation",
   "summary": "Learn how randomized experiments prove that a change actually causes an effect, rather than just correlating with it. This video walks through a shuttle-stop example, explains why randomization balances hidden variables across groups, and covers the key mistakes that break an experiment—peeking early, testing many variants, and group interference. Afterwards you'll understand when randomization works, how large a sample you need, and what to do when randomization isn't possible.",
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
    "causation",
    "randomized experiments",
    "experimental design",
    "statistical inference",
    "confounding variables",
    "sample size",
    "statistical significance",
    "practical significance",
    "multiple comparisons",
    "observational studies"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Correlation vs. Causation: Identifying Confounders in Real Data",
   "summary": "Learn how to distinguish between correlation and causation when randomized experiments aren't possible, using real-world data like shuttle route changes and rent. This video teaches three techniques—controlling, difference-in-differences, and matching—to estimate causal effects from observational data, plus the critical trap of controlling for the wrong variables.",
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
    "causation",
    "confounding",
    "regression",
    "difference-in-differences",
    "matching",
    "observational data",
    "causal inference",
    "econometrics",
    "natural experiments",
    "mediators"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Reinforcement Learning: Q-Learning and the Agent Decision Problem",
   "summary": "Learn how reinforcement learning differs from supervised learning by introducing agents that take actions and shape their own data, using apartment rental pricing as a concrete example. This video teaches Q-learning, credit assignment, value discounting, and why simulators are essential for training agents without costly real-world mistakes. You'll understand how agents learn optimal policies by estimating the value of state-action pairs rather than working with fixed datasets.",
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
    "agent",
    "credit assignment",
    "value function",
    "state-action pairs",
    "policy",
    "simulator",
    "Markov decision process",
    "reward"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "The Explore-Exploit Tradeoff: When to Try New Things",
   "summary": "Learn how to make smart decisions when you have to gather data through your own choices, not from a fixed dataset. This video teaches strategies like epsilon-greedy and upper confidence bound (UCB) for balancing exploration of uncertain options against exploitation of current winners, with a concrete example of pricing apartments. You'll understand why always picking the best option fails, how to adapt exploration over time, and how to measure success using regret.",
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
    "bandit algorithms",
    "UCB",
    "epsilon-greedy",
    "Thompson sampling",
    "decision-making under uncertainty",
    "A/B testing",
    "confidence intervals",
    "regret",
    "online learning"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Questions, One Dataset: Choosing Your ML Paradigm",
   "summary": "Learn to match machine learning questions to the right paradigm before you write any code. This video teaches supervised, unsupervised, causal inference, and reinforcement learning through a single apartment rental dataset, showing you which paradigm each type of question actually requires and what data you need to make it work.",
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
    "machine learning",
    "supervised learning",
    "unsupervised learning",
    "causal inference",
    "reinforcement learning",
    "regression",
    "clustering",
    "model selection",
    "data science workflow",
    "problem framing"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn how regularization prevents overfitting by penalizing large coefficients, and build intuition for three approaches: ridge regression (which shrinks all coefficients smoothly), lasso (which zeros out some coefficients entirely), and elastic net (which combines both). You'll see why lasso's penalty creates a diamond-shaped constraint region and understand the practical considerations for choosing lambda and standardizing features.",
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
    "coefficients",
    "cross-validation",
    "machine learning",
    "feature selection",
    "penalty"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: How Boosting Fixes What Bagging Doesn't",
   "summary": "Learn how gradient boosting differs fundamentally from bagging by training a sequence of weak models, each specifically designed to correct the errors of the previous one. This video walks through the mechanics with a concrete apartment rental example, explains why it's called \"gradient\" boosting, compares it to AdaBoost, and covers what libraries like XGBoost and LightGBM add on top of the core algorithm.",
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
    "machine learning",
    "ensemble methods",
    "XGBoost",
    "weak learners",
    "residuals",
    "tabular data",
    "AdaBoost",
    "overfitting"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Clustering: Beyond K-Means — Hierarchical and DBSCAN Methods",
   "summary": "K-means clustering assumes round clusters and requires you to guess the cluster count in advance—assumptions that break down on real data. Learn hierarchical clustering, which builds a tree of merges and lets you choose clusters by reading a dendrogram, and DBSCAN, which groups by density and can follow any shape, including identifying outliers as noise. After this video, you'll know which clustering method fits your data's actual structure.",
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
    "hierarchical clustering",
    "DBSCAN",
    "k-means limitations",
    "dendrogram",
    "linkage",
    "density-based clustering",
    "machine learning",
    "data science",
    "unsupervised learning"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Beyond PCA: t-SNE and UMAP for curved data",
   "summary": "PCA can only preserve variance along straight directions, so it flattens curved structure in data. Learn how t-SNE and UMAP preserve local neighborhood relationships instead, and understand what you can and cannot trust when reading their visualizations—including why cluster sizes and distances between clusters are often meaningless.",
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
    "PCA",
    "t-SNE",
    "UMAP",
    "dimensionality reduction",
    "nonlinear dimensionality reduction",
    "data visualization",
    "perplexity",
    "neighborhood preservation",
    "curved structure",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-36.mp4",
   "poster": "/media/learn/learning/learning-36.jpg",
   "captions": "/media/learn/learning/learning-36.vtt"
  }
 ];

export const COUNTING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Multiply vs Add: Counting Codes and Combinations",
   "summary": "This video builds intuition for the fundamental counting principle by visualizing choice sequences as rectangles and trees. You'll learn exactly when to multiply option counts versus when to add, and apply this to count badge codes, committees, and line-ups—with or without repetition allowed.",
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
    "counting principle",
    "combinations",
    "permutations",
    "multiplication rule",
    "tree diagrams",
    "counting problems",
    "discrete math",
    "conditional counting",
    "with replacement",
    "without replacement"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the number of ways to arrange objects in a specific order using the multiplication principle. This video teaches you when and how to use permutations, shows why swapping outcomes matters, and explains the formula n!/(n-r)! through concrete examples like race podiums and password codes.",
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
    "counting",
    "arrangements",
    "factorial",
    "multiplication principle",
    "order matters",
    "combinatorics",
    "mathematical reasoning"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: Choosing Groups Where Order Doesn't Matter",
   "summary": "Learn when to count combinations instead of ordered arrangements—and how to calculate them using the combinations formula. You'll discover why picking a committee of three people is different from assigning three ranked roles, and how to avoid the classic counting trap.",
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
    "probability",
    "discrete math",
    "committee problem",
    "selection"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "The Structure of Binomial Coefficients: Identities and Proofs",
   "summary": "Learn to see binomial coefficients C(n,k) not just as formulas but as objects with deep structure—symmetry, Pascal's recurrence, and the binomial theorem. You'll discover counting proofs that make these identities intuitive and gain practical shortcuts for computing them by hand.",
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
    "combinatorics",
    "Pascal's triangle",
    "binomial theorem",
    "counting proofs",
    "bijection",
    "combinatorial identities",
    "mathematics"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "Four Flavors of Counting Problems",
   "summary": "Learn the two key questions—does order matter, and can items repeat?—that sort any counting problem into one of four categories with different solution methods. After this video, you'll know how to recognize which category a problem belongs to and apply the right counting technique: multiplication, division for overcounting, or the specialized method for ordered choices with repetition allowed.",
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
    "combinatorics",
    "counting principle",
    "permutations",
    "combinations",
    "order matters",
    "repetition",
    "multiplication principle",
    "password problems",
    "podium problems",
    "committee selection"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modelling Counting Problems: From Word Problem to Stages",
   "summary": "Learn how to translate real-world counting problems into a sequence of clear decision stages before applying the multiplication principle. This video teaches you to identify what counts as a stage, whether order matters, and how many choices each stage actually has—including when earlier choices limit later ones.",
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
    "counting problems",
    "multiplication principle",
    "combinatorics",
    "problem modelling",
    "decision stages",
    "permutations",
    "word problems",
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
   "summary": "Learn how to solve counting problems that require stacking two or more techniques together—like choosing a group then arranging roles within it, or using inclusion-exclusion for overlapping restrictions. This video shows the wrong approach first for each problem type, then builds the correct method by identifying what was actually miscounted.",
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
    "combinatorics",
    "exam preparation",
    "problem-solving",
    "multi-step problems",
    "restrictions",
    "real-world applications"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Probability Foundations: Sample Spaces, Events, and Set Operations",
   "summary": "Learn how to model probability experiments using sample spaces and events, and master the set operations that form the language of probability—union, intersection, complement, and difference. Through a robotics sensor-testing scenario, you'll discover how to translate English descriptions into precise mathematical expressions, including the crucial De Morgan's laws that catch most students off guard.",
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
    "union intersection",
    "De Morgan's laws",
    "complement",
    "discrete mathematics"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability: The Three Axioms",
   "summary": "This video defines probability as a mathematical function that obeys three axioms: non-negativity, totality, and additivity for disjoint events. You'll learn what these rules mean, why they matter, and how to prove basic results directly from them—plus the most common mistake students make when applying them.",
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
    "Kolmogorov",
    "functions",
    "disjoint events",
    "additivity",
    "sample space",
    "events",
    "proofs",
    "foundations"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "Deriving Probability Rules: Complements and the Addition Principle",
   "summary": "Learn how to derive key probability rules from the axioms, including the complement rule, monotonicity, and the general addition rule for overlapping events. You'll discover why \"at least one\" problems convert elegantly to \"one minus none\"—turning a six-term nightmare into a single subtraction.",
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
    "inclusion-exclusion",
    "addition rule",
    "at least one",
    "axioms",
    "monotonicity",
    "overlapping events"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability Formula: Equally Likely Outcomes",
   "summary": "Learn how to apply the classical probability formula when outcomes are equally likely: divide the size of your event by the size of the sample space. You'll see when this formula works, when it fails, and how to use combinatorics tools from counting to solve real probability problems about committees, shipments, and arrangements.",
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
    "equally likely outcomes",
    "classical probability formula",
    "combinatorics",
    "counting",
    "sample space",
    "events",
    "combinations",
    "permutations",
    "worked examples"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Probability Limits and Interpretations",
   "summary": "Learn what happens when events form nested sequences that grow or shrink infinitely—and discover why a single probability number can mean two completely different things. This video teaches continuity of probability through disjoint rings and explores the frequentist and subjective interpretations that both obey the axioms. You'll leave able to apply these ideas rigorously and avoid the common pitfalls that trip up probability reasoning.",
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
    "continuity of probability",
    "nested sequences",
    "limit of probabilities",
    "frequentist interpretation",
    "subjective probability",
    "degree of belief",
    "probability axioms",
    "conditional probability",
    "sensor testing",
    "probability interpretation"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proof Techniques in Probability: The Four Essential Moves",
   "summary": "Learn the four core techniques—disjoint decomposition, the complement trick, monotonicity, and De Morgan's laws—that underpin nearly every probability proof. Through worked examples including monotonicity, the three-event addition rule, and Boole's inequality, this lesson bridges the gap between knowing probability axioms and being able to prove theorems from them on an exam.",
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
    "probability",
    "proof techniques",
    "axioms",
    "disjoint decomposition",
    "complement rule",
    "monotonicity",
    "addition rule",
    "Boole's inequality",
    "De Morgan's laws",
    "exam preparation"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Restricting the Sample Space",
   "summary": "Learn how to compute conditional probabilities by restricting your sample space to the events you know happened. This video covers the mathematical definition of P(A given B), proves it satisfies all the axioms of probability, and walks through a realistic sensor example with both tables and trees—then highlights the critical mistake of confusing P(A given B) with P(B given A).",
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
    "probability axioms",
    "Bayes theorem",
    "worked example",
    "sensor defect",
    "tree diagrams",
    "probability measures"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "The Multiplication Rule and Probability Trees",
   "summary": "Learn where the multiplication rule for probability comes from by rearranging the definition of conditional probability, and how to use probability trees to solve multi-stage problems. By the end, you'll understand how to trace paths through a tree to find probabilities, spot the difference between drawing with and without replacement, and avoid the common mistakes that trip people up.",
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
    "multi-stage probability"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "The Law of Total Probability",
   "summary": "Learn how to find the probability of an event when it can happen through multiple paths or causes. This video teaches the law of total probability—a technique for splitting the sample space into non-overlapping pieces, computing conditional probabilities within each piece, and combining them into a single answer. You'll see how to apply it to real problems like defective sensors from mixed suppliers, and how to avoid common mistakes.",
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
    "partitions",
    "sample space",
    "probability rules",
    "weighted average",
    "axioms of probability",
    "defect rates"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Theorem: Reversing Conditional Probability",
   "summary": "Learn Bayes' theorem and how to flip conditional probabilities—turning \"how likely is a positive test, given disease?\" into \"how likely is disease, given a positive test?\" This video teaches you to avoid the base rate fallacy and understand why a 95%-accurate test can still give surprising results when the condition being tested for is rare. You'll see how to update beliefs with new evidence, and how yesterday's conclusion becomes today's starting point.",
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
    "likelihood",
    "posterior",
    "prior",
    "test accuracy",
    "probability update",
    "Bayesian reasoning",
    "evidence"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Precise Definition Beyond Intuition",
   "summary": "Learn what independence actually means in probability—a precise mathematical equation, not a vibe about the world. You'll discover why physically connected events can be independent, why unrelated-feeling events can be dependent, and why disjoint events are the opposite of independent. By the end, you'll know how to test independence rigorously and apply it to repeated trials and binomial probabilities.",
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
    "pairwise independence",
    "mutual independence",
    "binomial coefficient",
    "repeated trials",
    "statistics fundamentals"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems Under Exam Pressure: Conditional Probability in Practice",
   "summary": "This workshop presents six realistic problems requiring you to identify and apply the right conditional probability tool without being told which one to use. You'll practice Bayes' theorem, total probability, independence testing, tree diagrams, and the classic three-box problem while learning the three most common mistakes that cost the most marks.",
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
    "exam preparation",
    "probability trees",
    "Monty Hall",
    "applying probability"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "The Recognition Map: Identifying Which Counting or Probability Tool to Use",
   "summary": "This video teaches the decision-making process for recognizing which formula to apply when you encounter an unlabelled counting or probability problem under exam pressure. You'll learn a two-level decision map: first, distinguish between counting problems (whole number answers) and probability problems (answers between 0 and 1), then use follow-up questions about order, repetition, and conditional direction to identify whether you need permutations, combinations, Bayes' theorem, or another tool. By the end, you'll be able to name the correct tool out loud before touching any formula, using four habits—writing out the sample space, stating what you're counting in plain sentences, and performing sanity checks—to avoid errors under time pressure.",
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
    "counting problems",
    "probability",
    "permutations",
    "combinations",
    "Bayes' theorem",
    "conditional probability",
    "problem recognition",
    "exam strategy",
    "decision tree",
    "applied formulas"
   ],
   "src": "/media/learn/counting/counting-20.mp4",
   "poster": "/media/learn/counting/counting-20.jpg",
   "captions": "/media/learn/counting/counting-20.vtt"
  }
 ];

export const PATTERNS: Lesson[] = [
  {
   "n": 1,
   "title": "Data Mining Pipelines: From Raw Data to Human Action",
   "summary": "Learn what actually happens between raw data and a decision made by a human being—it's far more than just \"running an algorithm.\" This video walks you through the complete pipeline (selection, preprocessing, modelling, and interpretation) using a real bike-share dataset, and shows you why selection and preprocessing consume most of the time and effort, not the algorithm itself.",
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
    "modelling",
    "bike-share",
    "data mining",
    "machine learning workflow",
    "data cleaning",
    "interpretation",
    "selection",
    "feature engineering"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Exploratory Data Analysis: Look Before You Leap",
   "summary": "Learn the essential data cleaning and exploration techniques that catch errors before they break your model. This video teaches you to visualize distributions with histograms, understand how columns relate using scatterplots and correlation, identify outliers versus errors, handle missing values, and standardize your data—turning raw numbers into something you can actually trust.",
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
    "data cleaning",
    "histogram",
    "distribution",
    "outliers",
    "missing values",
    "correlation",
    "scatterplot",
    "standardization",
    "variance"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing: From the Null to the P-Value",
   "summary": "Learn the logic behind hypothesis testing by working through a real question: did a new dock actually increase bike trips? This video builds the core concepts step-by-step—null and alternative hypotheses, test statistics, sampling distributions, and p-values—and shows you how to run the calculations and interpret what the results actually mean.",
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
    "null hypothesis",
    "p-value",
    "test statistic",
    "sampling distribution",
    "statistical significance",
    "t-test",
    "data analysis",
    "statistics fundamentals",
    "causal inference"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: From Estimates to Honest Uncertainty",
   "summary": "When you report a single number like an average, how much would it change if you sampled again? This lesson teaches you to build confidence intervals that honestly capture that wiggle. You'll learn why standard error shrinks with the square root of sample size (not the size itself), what \"95 percent\" actually promises, and how to compare two groups while avoiding the trap of mistaking statistical significance for practical importance.",
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
    "statistical significance",
    "effect size",
    "hypothesis testing",
    "sample mean",
    "precision",
    "uncertainty quantification"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Claims Broken Down: Testing Before You Nod",
   "summary": "Learn how to interrogate confident claims in meetings before accepting them as true. This video teaches you to identify confounds, check for hidden trends, spot when raw counts mislead, and recognize when you lack the data to test something at all—using six real bike-share claims as examples.",
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
    "statistical pitfalls",
    "claim analysis",
    "two-sample tests",
    "data quality",
    "inference",
    "bike-share data",
    "decision-making",
    "common mistakes"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: Classifying new data by voting with similar past examples",
   "summary": "Learn how k-nearest neighbours (kNN) classifies new data points by finding the k most similar past examples and taking a vote. This video covers the core algorithm, how to measure distance between points, the crucial need to standardise your data columns, how to choose k and balance the bias-variance tradeoff, and when kNN is the right tool versus fancier methods.",
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
    "distance metric",
    "Euclidean distance",
    "machine learning",
    "bias-variance tradeoff",
    "feature scaling",
    "weighted voting"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality: Why More Features Break k-Nearest Neighbours",
   "summary": "Learn why adding more features to k-nearest neighbours makes distance measurements meaningless instead of improving predictions. This video explains the geometry behind the curse of dimensionality, shows why you need exponentially more data in higher dimensions, and teaches three practical solutions: feature selection, feature engineering, and dimensionality reduction.",
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
    "feature selection",
    "feature engineering",
    "high-dimensional geometry",
    "machine learning fundamentals",
    "distance metrics",
    "data density",
    "indicator variables",
    "rescaling features"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes: Classifying with Probability Instead of Distance",
   "summary": "Learn how to classify data using Bayes' rule and probability instead of geometric distance measures. This video walks through the naive Bayes classifier—from flipping conditional probabilities with Bayes' rule, to handling the curse of dimensionality with independence assumptions, to practical fixes like Laplace smoothing and log-space computation. You'll understand why this false assumption still picks the right class most of the time, and where practitioners commonly go wrong with confidence calibration and feature correlation.",
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
    "Bayes rule",
    "classification",
    "probability",
    "conditional probability",
    "Laplace smoothing",
    "feature independence",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning a Decision Boundary",
   "summary": "Learn how the perceptron algorithm draws a straight line to classify data by iteratively correcting its mistakes. You'll see the math behind the weighted sum and threshold, trace through hand calculations, and understand both when the perceptron succeeds (linearly separable data) and when it fails (inseparable data or finding an unsafe boundary).",
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
    "decision boundary",
    "supervised learning",
    "weighted sum",
    "bias",
    "convergence",
    "separability",
    "neural networks"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: Turning Predictions into Probabilities",
   "summary": "Learn how to convert classification predictions into meaningful probabilities between 0 and 1 using logistic regression. This video shows you how to squash a linear model through the sigmoid function, interpret coefficients as odds multipliers, train with cross-entropy loss instead of squared error, and choose decision thresholds based on real-world costs.",
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
    "probability",
    "classification",
    "odds",
    "cross-entropy loss",
    "machine learning",
    "threshold selection",
    "coefficients interpretation"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: Entropy and Information Gain",
   "summary": "Learn how decision trees make predictions by asking a sequence of yes-or-no questions instead of using weights and dot products. You'll master entropy and information gain—the key metrics for choosing which question to ask first at each node—and understand why Gini impurity offers a simpler alternative. By the end, you'll know how to evaluate numeric thresholds and avoid the common pitfalls that trip people up.",
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
    "classification",
    "machine learning",
    "tree splitting",
    "numeric thresholds",
    "node purity",
    "overfitting"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Decision Tree Pruning: Stopping Overfitting Before It Starts",
   "summary": "Learn why deep decision trees memorize training data instead of learning real patterns, and how to fix it using pre-pruning and post-pruning techniques. You'll understand the classic U-shaped validation curve that reveals the sweet spot for tree size, and come away able to build simpler, more trustworthy trees you can read as plain English rules.",
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
    "information gain",
    "tree depth",
    "model selection",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-12.mp4",
   "poster": "/media/learn/patterns/patterns-12.jpg",
   "captions": "/media/learn/patterns/patterns-12.vtt"
  },
  {
   "n": 13,
   "title": "Support Vector Machines: The Widest Street and Soft Margins",
   "summary": "This video explains how support vector machines find the best decision boundary by maximizing the margin—the gap between classes—rather than just drawing any separating line. You'll learn why only a few key points (support vectors) matter, how to handle messy real-world data that doesn't separate cleanly, and how the parameter C controls the trade-off between a wide margin and tolerating violations.",
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
    "margin maximization",
    "support vectors",
    "classification",
    "slack variables",
    "soft margin",
    "machine learning",
    "decision boundary",
    "hyperparameter tuning"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Inseparable Data",
   "summary": "When no straight line can separate your classes, kernel functions compute transformed feature spaces without ever building them explicitly. Learn how the polynomial and RBF kernels let support vector machines find curved boundaries, and when to actually use them instead of defaulting to the fancier option.",
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
    "polynomial kernel",
    "RBF kernel",
    "feature transformation",
    "kernel trick",
    "non-linear classification",
    "hyperparameter tuning",
    "overfitting",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "How to Choose a Classifier: Matching Algorithms to Real Problems",
   "summary": "Learn how to defend your choice of classifier by matching algorithm assumptions to the actual constraints of your problem—not by chasing accuracy scores. Through five real bike-share scenarios, you'll see how to evaluate candidates on interpretability, training cost, data requirements, and more, then articulate exactly why one model fits better than others.",
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
    "classification",
    "model selection",
    "logistic regression",
    "decision trees",
    "k-nearest neighbors",
    "SVM",
    "naive Bayes",
    "algorithm choice",
    "interpretability",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Why One Train-Test Split Isn't Enough",
   "summary": "A single train-test split can give you a misleading estimate of model performance due to random variation in which data lands in your test set. This video teaches k-fold cross-validation: how to split your data into multiple folds, train and test on each combination, and average the results for a trustworthy performance estimate. You'll learn the method, why it matters, common pitfalls to avoid, and the crucial distinction between using cross-validation to evaluate a method versus training your final model.",
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
    "machine learning",
    "data validation",
    "test error",
    "overfitting",
    "station data",
    "time series"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Classification Metrics Beyond Accuracy: Precision, Recall, and ROC Curves",
   "summary": "Accuracy can lie when predicting rare events—a model that predicts \"no fault\" for every bike scores 97% on a dataset where 3% of bikes are faulty. Learn why precision and recall matter, how they trade off as you adjust the decision threshold, and why the choice of threshold is ultimately a question about real-world costs, not statistics alone. You'll walk through the confusion matrix, F1 scores, and ROC curves, and understand which metrics protect mechanics' time versus riders' safety.",
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
    "classification metrics",
    "precision and recall",
    "confusion matrix",
    "ROC curve",
    "F1 score",
    "imbalanced classes",
    "logistic regression",
    "threshold selection",
    "model evaluation"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: Data Leakage and Evaluation Traps",
   "summary": "Learn why perfect accuracy and great test scores can be meaningless by examining five broken models—each with a different hidden flaw. You'll discover how leakage from future information, pre-split standardization, class imbalance, overfitting on validation sets, and ignoring time order can all hide inside seemingly correct calculations and a simple pre-flight checklist to catch them before you train anything.",
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
    "overfitting",
    "validation mistakes",
    "class imbalance",
    "temporal data",
    "feature engineering",
    "machine learning traps",
    "model validation",
    "predictive modeling"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "The One-Page Cheat Sheet for Six Machine Learning Algorithms",
   "summary": "This video compresses eighteen lessons on machine learning into a single reference page that fits in your hand. You'll learn how to compare six algorithms—k-nearest neighbors, naive Bayes, perceptron, logistic regression, decision trees, and SVM—by asking the same eight questions of each: assumptions, optimization, cost, hyperparameters, scaling requirements, interpretability, calibration, and failure modes. By the end you'll have a study guide and decision flowchart you can write out and memorize in minutes.",
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
    "classification algorithms",
    "study guide",
    "kNN",
    "naive Bayes",
    "perceptron",
    "logistic regression",
    "decision trees",
    "SVM",
    "reference sheet"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Prep: Deriving ML Models, Not Just Memorizing Them",
   "summary": "Learn the four core strategies for mastering a machine learning exam: identifying problem types (regression, classification, clustering), deriving key formulas like least squares from first principles, understanding bias-variance as causes rather than synonyms for overfitting, and avoiding common mistakes like missing units and confusing training versus test error. You'll practice reconstructing derivations by hand and executing algorithms cleanly under time pressure, using real bike-trip and station examples throughout.",
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
    "machine learning exam",
    "least squares",
    "gradient descent",
    "bias-variance tradeoff",
    "classification regression clustering",
    "derivation",
    "overfitting",
    "exam strategy",
    "model evaluation",
    "information gain"
   ],
   "src": "/media/learn/patterns/patterns-20.mp4",
   "poster": "/media/learn/patterns/patterns-20.jpg",
   "captions": "/media/learn/patterns/patterns-20.vtt"
  }
 ];

export const HOWITWORKS: Lesson[] = [
  {
   "n": 1,
   "title": "Why Educational Video Production Needs Automation",
   "summary": "Learn why traditional video-based lessons take a week to produce and why that cost structure breaks at scale for full curricula. This video establishes the real constraint driving automated lesson production: preventing polished but incorrect content from reaching students without human review of every single piece.",
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
    "educational video",
    "curriculum production",
    "automation",
    "scalability",
    "lesson design",
    "quality assurance",
    "content creation",
    "video pipeline",
    "efficiency",
    "teaching systems"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why Animation Code Can't Be Generated Directly",
   "summary": "This lesson explains why letting an AI model write animation code directly creates undetectable errors that slip into finished videos. You'll learn how a fixed vocabulary and validator—the scene/1 contract—catch mistakes before rendering, and why description-based specifications are safer than code generation.",
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
    "system design",
    "validation",
    "Manim",
    "architecture",
    "error detection",
    "contracts",
    "safety"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "The Nine Stops: From Topic to Finished Video",
   "summary": "Learn the complete workflow for transforming a single sentence into a finished teaching video, with all nine named stages and checkpoints explained. This video maps out the entire process—from writing the brief through final human approval—so you understand where each part of the system fits and why each stage exists.",
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
    "video production workflow",
    "automated rendering",
    "lesson pipeline",
    "scene specification",
    "quality control",
    "proof rendering",
    "describe and validate",
    "repair loop",
    "final render"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "Scene Spec Validation: Four Rules for Teaching Video Quality",
   "summary": "Learn how scene_spec.py validates the JSON blueprint of a teaching video before any rendering happens, catching quality issues early. This video covers four concrete rules that prevent common mistakes—bare numbers in labels, weak ending figures, empty grids, and collapsed vs. summary icons—plus the retry loop that improves specs incrementally.",
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
    "scene specification",
    "JSON structure",
    "teaching video quality",
    "diagram rules",
    "figure validation",
    "rendering pipeline",
    "content planning"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks Disagree with Reality",
   "summary": "This video explores six real cases where automated checks and status systems gave false signals about lesson quality, each stemming from a single pattern: trusting the check instead of the actual artifact. You'll learn to recognize when dashboards and status fields mislead you, and develop the habit of verifying the real file, transcript, or specification instead of accepting what the system reports.",
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
    "quality assurance",
    "debugging",
    "system checks",
    "automation failures",
    "verification",
    "artifact inspection",
    "production issues",
    "lesson quality",
    "pipeline monitoring",
    "troubleshooting"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "Five Pieces: The System Architecture of a Video Generation Pipeline",
   "summary": "Learn the five core components of a video generation system—the AI service, contract, renderer, datastore, and harness—and how they communicate without directly talking to each other. Discover the two most common architectural mistakes that engineers make and why understanding these boundaries prevents silent failures like an entire lesson narrated in one voice.",
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
    "pipeline design",
    "AI service",
    "contract patterns",
    "renderer",
    "DynamoDB",
    "S3",
    "software design"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "AWS Deployment: Where the Rendering Pipeline Actually Runs",
   "summary": "Learn the concrete AWS services that run a rendering pipeline—ECS Fargate for tasks, S3 for storage, DynamoDB for job tracking, and CloudFront for delivery. You'll understand why each piece was chosen, critical gotchas like pinning container images by digest and the unauthenticated media gap, and the actual account limits that constrain the system.",
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
    "deployment",
    "infrastructure",
    "rendering",
    "container image digest",
    "cost optimization"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "Understanding Lesson Cost: Three Pieces and the Real Lever",
   "summary": "Learn why the same lesson can cost $2.39 one day and $7.22 the next. This video breaks down the three components of lesson cost—model calls, speech synthesis, and Fargate rendering time—and shows why catching defects early through the quality rubric and proof pass is far cheaper than fixing them during final render. You'll understand where cost actually comes from and which optimization attempts actually work.",
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
    "cost model",
    "pricing",
    "model calls",
    "speech synthesis",
    "Fargate",
    "rendering",
    "quality rubric",
    "proof pass",
    "cost optimization",
    "contract-driven safety"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "Business Case for Automated Lesson Production",
   "summary": "This video explains the business justification for automated video lesson production beyond just cost savings. You'll learn the three core capabilities that justify building this system: making curriculum libraries affordable for small teams, enabling cheap lesson revisions when material changes, and serving different audiences from a single brief without duplicating work.",
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
    "automated production",
    "curriculum",
    "lesson production",
    "pipeline architecture",
    "production economics",
    "scalability",
    "educational technology",
    "automation moat",
    "quality control"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why They Failed and What the Failures Teach",
   "summary": "This lesson walks through five ideas the team tested and abandoned while building the animation pipeline—from cheaper animation models to automatic publishing to layout bans—and shows the actual evidence that rejected each one. You'll learn why each idea failed not through intuition but through measurement, and more importantly, you'll see the common pattern: testing plausible ideas against known-answer test cases instead of trusting guesses. After watching, you'll understand how to avoid reinventing these same wheels yourself by checking your own ideas against real data before committing to them.",
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
    "measurement",
    "testing",
    "validation",
    "animation",
    "lesson design",
    "data-driven decisions",
    "known-answer tests",
    "optimization"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "Random Variables: Functions, Not Numbers",
   "summary": "Learn what a random variable actually is—a function that turns messy real-world outcomes into numbers you can compute with. This video clears up the biggest misconception in probability: that X is a hidden value waiting to be revealed. By the end, you'll understand why random variables are the foundation for everything that follows in probability and statistics.",
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
    "probability",
    "discrete random variables",
    "continuous random variables",
    "functions",
    "sample space",
    "probability notation",
    "foundations of statistics"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF vs CDF: Two Ways to Describe a Distribution",
   "summary": "Learn the two standard ways to write down a probability distribution: the probability mass function (PMF) for exact probabilities, and the cumulative distribution function (CDF) for cumulative probabilities. You'll see why each one matters, how to move between them, and which one to reach for depending on your question.",
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
    "probability questions",
    "statistics fundamentals",
    "data literacy"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expectation: Finding the Single Number That Summarizes a Distribution",
   "summary": "Learn what expectation (E of X) truly means and how to calculate it as a weighted sum of outcomes and probabilities. This video shows the intuition behind expectation as a balance point, derives key properties like linearity, and teaches LOTUS—how to correctly find the expectation of functions of random variables. You'll master the common pitfalls and see why expectation is far more powerful than just picking the most likely value.",
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
    "probability",
    "PMF",
    "linearity",
    "LOTUS",
    "distribution",
    "random variables"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Spread",
   "summary": "Learn why two datasets with identical means can tell completely different stories, and how variance quantifies that spread. This lesson covers the definition of variance, the practical shortcut formula, the standard deviation, and two key scaling properties that make variance the mathematically convenient tool for describing real-world variability.",
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
    "deviation from mean",
    "expected value",
    "probability",
    "data variability",
    "statistical measures"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Exam-Speed Practice: Six Expectation and Variance Problems",
   "summary": "Master the practical skills needed to solve expectation and variance problems quickly under exam pressure. Work through six problems with different structures—from PMF tables to reversed formulas to function traps—using a consistent method: identify what's asked, pick the right tool, compute, and sanity-check your answer. No new theory required, just speed and the habit of catching your own mistakes.",
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
    "probability mass function",
    "exam practice",
    "random variables",
    "helpdesk problems",
    "computational methods",
    "problem-solving strategy",
    "probability calculations",
    "exam preparation"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "Binomial Distribution: Counting Successes Over Multiple Trials",
   "summary": "This video builds a complete understanding of the binomial distribution from first principles, using a real helpdesk scenario where tickets either resolve on first contact or escalate. You'll learn the PMF formula, where it comes from (counting patterns × probability), how to find the mean and variance, and critically—when the binomial model actually applies and when it breaks down. By the end, you'll be able to calculate exact probabilities, \"at least\" and \"at most\" questions, and avoid the two most common mistakes people make with this formula.",
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
    "probability mass function",
    "PMF",
    "mean and variance",
    "independence",
    "counting principles",
    "success probability",
    "fixed trials",
    "complement rule",
    "real-world applications"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Counting Events in Time",
   "summary": "Learn the Poisson distribution—the right tool for counting random events arriving over a continuous time window when there's no fixed sample size. You'll understand where the Poisson comes from (as a limit of binomials), what assumptions it requires, and how to apply it to real problems like ticket arrivals, complete with how to spot when it's actually working.",
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
    "probability",
    "counting events",
    "rate parameter",
    "binomial limit",
    "mean equals variance",
    "time windows",
    "event arrivals",
    "statistics",
    "probability distributions"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric & Negative Binomial Distributions: Waiting for Success",
   "summary": "Learn how to model the waiting time until a specific event occurs, like counting tickets until one needs escalation. This video derives the geometric probability mass function, explains why past failures don't affect future outcomes (memorylessness), and shows how the negative binomial extends this to waiting for multiple successes. You'll understand when to use these distributions and avoid common pitfalls like the gambler's fallacy.",
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
    "negative binomial distribution",
    "waiting time",
    "memorylessness",
    "probability",
    "PMF",
    "gambler's fallacy",
    "independence",
    "success probability",
    "distributions"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "Recognizing Binomial, Poisson, Geometric, and Negative Binomial Distributions",
   "summary": "Learn to identify which discrete probability distribution applies to a real-world scenario by asking three key questions: Is there a fixed number of trials, a time window, or are we waiting for something? Are the events independent? Is the probability or rate constant? Work through twelve scenarios to master distribution recognition without learning new formulas.",
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
    "negative binomial distribution",
    "distribution recognition",
    "probability",
    "discrete distributions",
    "independence assumption",
    "constant probability",
    "exam preparation"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability: From Density to Distribution",
   "summary": "Learn why an exact outcome in a continuous distribution has zero probability, and how probability density functions (PDFs) work differently from discrete probabilities. You'll master the relationship between PDFs and cumulative distribution functions (CDFs), calculate expectations and variances for continuous variables, and understand why endpoint distinctions that matter in discrete cases become irrelevant here.",
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
    "cumulative distribution",
    "CDF",
    "expectation",
    "variance",
    "continuous distribution",
    "probability theory"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Exponential Distributions: From Poisson Arrivals to Waiting Times",
   "summary": "Learn how the Poisson process directly generates the exponential distribution, the model for waiting times until the next random event. This video teaches you the key properties—including the surprising result that mean equals standard deviation—and reveals why exponential waiting times are \"memoryless,\" along with the common misconceptions to avoid and real-world contexts where this model applies.",
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
    "conditional probability",
    "random events"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Standardization, and Tables",
   "summary": "Learn what makes the normal distribution the most important shape in statistics—its formula, how its two parameters work, and why we can't integrate it directly. You'll master standardization (converting to z-scores), using tables to find probabilities, solving the reverse problem to find cut-offs, and using the 68-95-99.7 rule as a sanity check on your answers.",
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
    "z-scores",
    "standardization",
    "probability tables",
    "mean and standard deviation",
    "68-95-99.7 rule",
    "statistics",
    "probability",
    "Gaussian distribution"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit to Break: Which Tool to Use",
   "summary": "When you see a probability problem, how do you know whether to use density, CDF, uniform, exponential, or normal? This video walks through six worked problems—all using the same four-step routine: sketch the density, set up the integral, compute it, check the answer. You'll learn to spot mistakes in the picture before writing a single integral sign, and recognize when a problem is discrete (PMF) instead of continuous (density).",
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
    "probability",
    "exponential",
    "normal distribution",
    "discrete vs continuous",
    "integral",
    "problem-solving",
    "PMF",
    "threshold"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions: Two Random Variables",
   "summary": "Learn how to work with two random variables at the same time using joint probability distributions. This video covers joint PMFs and densities, marginal distributions, independence of random variables, conditioning, and expected values of products—with a focus on when shortcuts work and when they don't.",
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
    "random variables",
    "marginal distribution",
    "independence",
    "conditional probability",
    "joint PMF",
    "joint density",
    "expected value",
    "probability"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Measuring How Two Variables Move Together",
   "summary": "Learn how to quantify the relationship between two variables using covariance and correlation. You'll compute these measures from a joint probability table, discover the computational shortcut, and understand the critical difference between zero covariance and independence. After this video, you'll be able to calculate both covariance and correlation, recognize that correlation only captures linear patterns, and avoid the trap of confusing correlation with causation.",
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
    "joint probability",
    "expected value",
    "linear relationship",
    "independence",
    "causation",
    "standard deviation",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Variance and Covariance: Why Variances Don't Always Add",
   "summary": "Learn why expectation adds cleanly for sums of random variables, but variance only adds when covariance is zero. Using a helpdesk scheduling example, discover how independent technicians keep workload steady while correlated schedules create chaos—and why this distinction matters for everything from sampling to risk assessment.",
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
    "risk analysis",
    "sampling",
    "Poisson distribution",
    "normal distribution"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Recognition: Which probability tool fits the problem?",
   "summary": "Learn to identify which probability distribution or technique each problem is asking for before solving it. Using a three-question decision flow (discrete vs. continuous, what output is needed, whether you need joint distributions), you'll work through fifteen helpdesk problems that reveal common traps—like when \"how many minutes until\" is actually exponential, not Poisson. This is the practical skill that separates fast problem-solving from getting stuck.",
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
    "recognition",
    "problem-solving strategy",
    "discrete vs continuous",
    "probability tools",
    "decision flow"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Settle, Not Balance",
   "summary": "Learn why long-run averages settle toward their theoretical value—and why it has nothing to do with the past \"catching up\" to balance out. Through a helpdesk ticketing example, you'll see the actual mechanism: the variance of the average shrinks like σ²/n, squeezing the running average tighter around the true expectation. Understand both versions of the law, expose the gambler's fallacy, and learn how much data you actually need before you can trust an average.",
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
    "gambler's fallacy",
    "running average",
    "expectation",
    "statistical mechanics",
    "random variables",
    "sample mean"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "The Central Limit Theorem: Why Sums of Skewed Data Look Normal",
   "summary": "This lesson answers why the normal distribution appears everywhere in statistics, even when individual measurements are heavily skewed. You'll learn the central limit theorem—that sums of many independent measurements become approximately normal regardless of their original shape—and how to apply it to real problems like predicting whether a technician's shift will overrun.",
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
    "approximation",
    "finite variance",
    "independence",
    "statistical inference",
    "law of large numbers",
    "probability"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "The One-Page Cheat Sheet: Probability Distributions for Exams",
   "summary": "Learn what actually matters for a probability exam: six distributions, six formulas, and a sixty-second checklist before solving any problem. You'll build a reference sheet organized by story—not formula—then practice using it on problems that don't tell you which tool to grab, the part that matters most.",
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
    "exam prep",
    "binomial",
    "Poisson",
    "exponential",
    "normal distribution",
    "variance",
    "expectation",
    "problem-solving strategy",
    "statistics cheat sheet"
   ],
   "src": "/media/learn/chance/chance-20.mp4",
   "poster": "/media/learn/chance/chance-20.jpg",
   "captions": "/media/learn/chance/chance-20.vtt"
  }
 ];

export const SHIFT: Lesson[] = [
  {
   "n": 1,
   "title": "Why Legacy Systems Can't Do Everything: The Structural Limits",
   "summary": "This video explains the fundamental reason legacy systems fail on certain tasks: they can only do what was imagined and documented before they were built. You'll learn to identify three specific types of work—reading customer intent, spotting patterns across events, and writing coherent summaries—that systems structurally cannot perform, and how to evaluate whether these gaps are actually costing you money.",
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
    "business requirements",
    "automation",
    "human work",
    "structural constraints",
    "system design",
    "process improvement",
    "operational efficiency",
    "digital transformation"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts: How Foundation Models Changed Software Architecture",
   "summary": "This video explains what actually changed when foundation models entered production software systems—not the hype, but the three practical shifts that matter: plain-language instructions replacing fixed APIs, single models handling multiple jobs, and speed/cost enabling real-time use instead of batch processing. You'll learn what a foundation model actually is, what critical limitations remain, and why these changes fundamentally altered how software gets built.",
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
    "large language models",
    "dispatch systems",
    "system design",
    "software engineering",
    "machine learning operations",
    "business logic",
    "technical shifts"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "Why AI Features Fail (And How to Build Them Right)",
   "summary": "Most AI implementations fail quietly because they're bolted onto screens that already work, adding a second way to do something that wasn't broken. Learn the architectural difference between a tool that gets abandoned and one that actually solves the real problem—where humans are manually gluing steps together—using a real logistics company example.",
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
    "AI implementation",
    "system architecture",
    "product strategy",
    "AI adoption",
    "workflow optimization",
    "exception handling",
    "dispatch systems",
    "technical leadership"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: How AI Changes Team Roles",
   "summary": "When you add an AI model to a feature, the work doesn't stay the same — it changes for architect, product owner, scrum master, tester, and developer in specific, real ways. This video walks through each role's new questions and tasks using a concrete logistics example, then shows three common mistakes teams make when shipping features with AI.",
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
    "AI in software development",
    "team roles",
    "machine learning in production",
    "product architecture",
    "testing ML models",
    "software engineering",
    "feature development",
    "fallbacks and reliability",
    "evaluation sets",
    "scrum"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "The Real Speed of AI: Where It Actually Works (and Where It Doesn't)",
   "summary": "This video cuts through the hype around AI coding speed by revealing the honest numbers: some tasks get 2–5x faster, but most project timelines don't actually shrink. You'll learn exactly which kinds of work benefit most (well-specified code, documentation, migrations), which kinds don't (design decisions, requirements negotiations), and the critical mistake teams make when calculating real delivery gains.",
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
    "productivity",
    "realistic speed gains",
    "software development",
    "code generation",
    "project management",
    "bottlenecks",
    "engineering economics",
    "developer tools"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing and Planning Probabilistic Systems: The Real Work Beyond the Demo",
   "summary": "This video reveals why probabilistic ML systems (like routing and dispatch) require different team structures and estimation approaches than traditional software projects. You'll learn the three critical roles that must exist on any ML team, why demos are deceptively misleading as ship-date indicators, and why maintaining these systems is fundamentally different from traditional maintenance — so you can avoid the specific, predictable estimation failures that plague CTOs in week two.",
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
    "team structure",
    "project estimation",
    "probabilistic systems",
    "ML operations",
    "software engineering",
    "AI deployment",
    "dispatch systems",
    "project planning",
    "technical leadership"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "Model Calls: What Actually Happens in the Code",
   "summary": "Learn what a model call actually is when code runs it: text in, text out, stateless, sometimes slow, sometimes wrong. This video teaches you how to structure model calls properly (input, prompt, model, validate, fallback), why you must decide the fallback before shipping, and the practical mistakes teams make when treating models like ordinary functions.",
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
    "model calls",
    "LLM integration",
    "prompt engineering",
    "validation",
    "fallback handling",
    "software engineering",
    "API design",
    "latency",
    "temperature",
    "production deployment"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What Is an Agent? (The Actual Definition)",
   "summary": "Learn the precise, testable definition of an agent in AI: a model in a loop with tools that sets a goal, calls functions, observes results, and decides what to do next. You'll learn how agents differ from single model calls, when to use them versus fixed pipelines, and the engineering controls required to keep them safe—step limits, cost caps, irreversible-damage prevention, and human approval gates.",
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
    "AI systems",
    "model loops",
    "tools",
    "prompt engineering",
    "LLM",
    "unbounded steps",
    "engineering controls",
    "logistics",
    "decision-making"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "The Glue Problem: Why Models Need a Common Way to Talk to Tools",
   "summary": "Every time a company adds a new AI model or framework, they have to rewrite all the integration code that connects it to their existing systems—a costly cycle that repeats with each new tool. This video explains the core problem, how a common protocol solves the reusability question, and why standardizing tool descriptions is not the same as making those tools safe to call. You'll learn what decisions a CTO actually needs to make when exposing business systems to AI agents.",
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
    "system integration",
    "MCP protocol",
    "tool exposure",
    "framework interoperability",
    "CTO decisions",
    "safety boundaries",
    "reusable APIs"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "GraphRAG: Moving Beyond RAG for Real-World Data",
   "summary": "This video explains why foundation models alone can't answer questions about your specific business, and traces the evolution from RAG (retrieval-augmented generation) to GraphRAG. You'll learn how knowledge graphs structure company data as entities and relationships, how GraphRAG finds answers by semantic search followed by graph traversal, and why unifying vectors and graphs in a single database matters operationally.",
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
    "GraphRAG",
    "RAG",
    "knowledge graphs",
    "semantic search",
    "vector embeddings",
    "retrieval-augmented generation",
    "enterprise AI",
    "Neo4j",
    "knowledge representation"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls Beyond Evaluation: Guardrails, Routing, Context",
   "summary": "Evaluation tells you how well a system is performing, but it doesn't prevent bad outputs or control costs. This video covers the three essential controls that work together: guardrails that block dangerous input and output, routing that sends simple requests to cheaper models, and context engineering that gives models only the information they actually need. After watching, you'll understand how production AI systems prevent failures and manage budgets in ways prototypes never address.",
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
    "guardrails",
    "routing",
    "context engineering",
    "cost control",
    "evaluation",
    "production systems",
    "LLM operations",
    "deployment",
    "system design"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Splitting \"Prompt Engineering\" Apart",
   "summary": "Most teams use \"prompt engineering\" as a catch-all term for everything they do with LLMs, but it's actually four distinct disciplines: prompt engineering (wording), context engineering (choosing what data goes in), loop engineering (handling retries), and harness engineering (production safety). This video breaks down all four using a real exception-handling pipeline, then shows you which one teams consistently skip—and why that mistake causes silent failures in production.",
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
    "LLM systems",
    "production deployment",
    "AI pipeline",
    "system design",
    "validation",
    "observability"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Four Types of AI Engineering: Prompt, Context, Loop, and Harness",
   "summary": "Learn the four distinct engineering disciplines used in AI systems—prompt, context, loop, and harness engineering—that are often confused but have very different scopes and costs. After this video, you'll understand what each one does, why teams get the order wrong, and why harness engineering is critical in production even though it gets almost no attention.",
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
    "AI engineering",
    "production systems",
    "LLM engineering",
    "engineering priorities",
    "dispatch system",
    "AI implementation"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When NOT to Use a Language Model",
   "summary": "Learn the critical decision framework for choosing between classical machine learning and language models based on your input and output shape. This video teaches you to avoid costly mistakes—like using an LLM for structured prediction or fine-tuning when you need retrieval—and shows you when foundation models actually earn their place in your system.",
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
    "when to use LLMs",
    "practical AI decisions",
    "cost efficiency",
    "structured data"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "Cost modeling for AI in production: tokens, steps, and what actually moves the needle",
   "summary": "Learn how to build a per-transaction cost model for AI systems in production, breaking down the real expenses from tokens and multi-step agents through retries, evaluation, and human review. You'll see exactly where costs come from and which levers—context trimming, model selection, caching, and early failure detection—actually bring them down, using real examples that show how the same system can cost $2.50 or $7 per transaction depending on how failures are caught.",
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
    "AI cost modeling",
    "production AI systems",
    "token economics",
    "LLM pricing",
    "cost optimization",
    "agent systems",
    "evaluation pipelines",
    "cost metering",
    "per-transaction pricing",
    "AI infrastructure"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "It Doesn't Fall Over: Failure Modes in Live AI Systems",
   "summary": "When AI systems go wrong in production, they don't crash—they quietly produce plausible but incorrect answers while dashboards show green. This video teaches the four failure modes that actually happen (confident wrong answers, silent degradation, stalls, and compounding errors), how to log decisions so they're attributable and replayable, and how to write policies that specify what a system can do alone, what it must propose for human approval, and what it should never do.",
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
    "logging and accountability",
    "error modes",
    "human approval",
    "system design",
    "confidence without correctness",
    "silent degradation",
    "decision replay"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Migrating to AI Without Rebuilding the System",
   "summary": "Learn how to add AI capabilities to a production system without a costly rebuild or downtime. This video teaches the front-door pattern—placing an AI model outside the existing system to read inputs and act through familiar interfaces—and shows you how to pilot it safely using shadow mode and human-in-the-loop approval before any autonomous action.",
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
    "AI integration",
    "legacy systems",
    "machine learning deployment",
    "shadow mode",
    "human-in-the-loop",
    "system migration",
    "exception handling",
    "operational risk",
    "AI governance",
    "dispatch systems"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Changes for You: Skills That Transfer and Skills That Don't",
   "summary": "This lesson clarifies what actually changes in your day-to-day work as a backend developer building AI-integrated systems, and what doesn't. You'll learn which engineering instincts transfer directly (systems thinking, testing, API design) and which new skills you genuinely need (thinking in distributions, building evaluation sets, designing loops for quiet failures). By the end, you'll understand where to focus your learning time and how your existing role transforms in this new kind of system.",
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
    "evaluation sets",
    "model reliability",
    "systems design",
    "skill transfer",
    "loop design",
    "AI integration",
    "cost optimization",
    "learning path"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "When to Actually Build a Probabilistic System: Six Questions in Order",
   "summary": "Most companies ask whether they should adopt probabilistic systems starting from the wrong place. This video teaches the six honest questions you need to answer—in order—to make a real decision: what work can't software do, where do mistakes land, do you have the data, can you afford the running cost, who owns the model, and will your sponsor stay committed. You'll learn how to identify which answers mean yes, not yet, or no.",
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
    "probabilistic systems",
    "decision framework",
    "AI implementation",
    "cost analysis",
    "machine learning adoption",
    "data requirements",
    "accountability",
    "business strategy",
    "exception handling",
    "technical debt"
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
   "summary": "Learn how to design graph schemas by starting with the actual questions your product needs to answer, rather than modeling entities like you would in a relational database. This video teaches you a discipline: write your question as a sentence, speak the traversal out loud, and only then decide what becomes a node—so you can avoid the Application Node problem and build models that are fast and genuinely graph-like instead of just circles-and-rows versions of relational schemas.",
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
    "graph modeling",
    "cypher",
    "schema design",
    "graph database",
    "relational vs graph",
    "query optimization",
    "knowledge graphs",
    "neo4j"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 2,
   "title": "One Fact, Three Shapes: Modeling Data in Cypher",
   "summary": "Learn the three ways to model any single fact in a graph database—as a property, a relationship, or a node—and understand which choice makes different queries possible. This video teaches you to let your questions drive your schema design, not the data itself.",
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
    "graph database",
    "Cypher",
    "data modeling",
    "schema design",
    "properties",
    "relationships",
    "nodes",
    "database design"
   ],
   "src": "/media/learn/modelling/modelling-02.mp4",
   "poster": "/media/learn/modelling/modelling-02.jpg",
   "captions": "/media/learn/modelling/modelling-02.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels in Cypher: The Right Kind of Thing",
   "summary": "Learn when labels belong in your graph and when they don't—labels answer \"what kind of thing is this,\" but people often misuse them for status, values, or tenant isolation instead. After this lesson, you'll know exactly when a label earns its place, when to use properties instead, and how label inheritance works (or doesn't) in Neo4j.",
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
    "Cypher",
    "labels",
    "graph modeling",
    "Neo4j",
    "database design",
    "schema",
    "properties",
    "node categorization"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j Graph Design",
   "summary": "Learn how to design relationships in Neo4j by choosing direction based on what actually happened in your domain, not on query patterns—and how to decide when to split a single relationship type into multiple types for better database performance. This video covers the critical distinctions between storing direction for semantic meaning, avoiding the duplicate-edge trap that doubles your counts, and finding the balance point where splitting relationship types into categories like APPLIED_EARLY and APPLIED_REGULAR becomes worth the schema complexity.",
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
    "graph database",
    "relationships",
    "direction",
    "schema design",
    "relationship types",
    "granularity",
    "Cypher",
    "performance",
    "data modeling"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reified Relationships: When to Promote a Relationship to a Node",
   "summary": "Learn when a relationship in your graph model needs to become a node of its own. This video teaches you to recognize three signals—accumulating properties, connections to other things, and repeated pairs—and shows how reifying relationships solves real query problems without promoting prematurely.",
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
    "relationships as nodes",
    "database design",
    "graph theory",
    "many-to-many relationships",
    "schema design",
    "application modeling"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graphs: Three Honest Approaches",
   "summary": "Learn three distinct patterns for storing historical data in graph databases instead of overwriting facts: validity windows on relationships, version nodes chained together, and time trees built as calendar structures. You'll understand when to use each approach and master the rules that apply across all three—never overwrite queryable facts, store events not aggregates, and keep time consistent within each data type.",
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
    "time modeling",
    "data history",
    "validity windows",
    "version nodes",
    "time trees",
    "bitemporality",
    "data modeling",
    "Neo4j"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Constraints: Making the Database Enforce Your Data Model",
   "summary": "Learn to close the gap between your planned data model and what's actually in the database by using constraints to enforce rules. This lesson covers uniqueness, node key, existence, and property type constraints—and explains what they cannot do—so your database refuses invalid data rather than letting it slip through.",
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
    "uniqueness",
    "node key",
    "existence constraint",
    "property type",
    "data validation",
    "Neo4j",
    "database design",
    "data integrity",
    "constraint enforcement"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 8,
   "title": "Indexes: A Modeling Decision, Not a Performance Patch",
   "summary": "Learn which questions from your domain actually need indexes—and which don't—by understanding what indexes do: they find the starting node fast, without scanning everything. After this lesson, you'll know when to use range, composite, text, full-text, and relationship indexes, and you'll recognize that every index you create slows down writes and uses space, so you only build the ones your actual questions need.",
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
    "indexes",
    "neo4j",
    "database design",
    "range index",
    "composite index",
    "text index",
    "full-text search",
    "query optimization",
    "modeling",
    "database tuning"
   ],
   "src": "/media/learn/modelling/modelling-08.mp4",
   "poster": "/media/learn/modelling/modelling-08.jpg",
   "captions": "/media/learn/modelling/modelling-08.vtt"
  },
  {
   "n": 9,
   "title": "Vector Embeddings in Neo4j: Finding Similar Meaning",
   "summary": "Learn how to store and search vector embeddings in Neo4j to find semantically similar data without explicit relationships. This video covers embedding models, vector indexing, similarity metrics like cosine distance, and the critical difference between vector search alone and combining it with graph traversal to answer complex, multi-constraint queries.",
   "runs": "8:28",
   "chapters": [
    {
     "at": "0:00",
     "title": "What Is Like This"
    },
    {
     "at": "0:46",
     "title": "The Embedding as a Property"
    },
    {
     "at": "1:34",
     "title": "One Model, One Node — Until It Isn't"
    },
    {
     "at": "2:50",
     "title": "Dimensions Are Fixed by the Model"
    },
    {
     "at": "3:34",
     "title": "Cosine or Euclidean"
    },
    {
     "at": "4:24",
     "title": "Declaring the Index"
    },
    {
     "at": "5:24",
     "title": "Vector Search Proposes, the Graph Disposes"
    },
    {
     "at": "6:29",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "7:23",
     "title": "Recap"
    }
   ],
   "tags": [
    "embeddings",
    "vector search",
    "similarity",
    "cosine distance",
    "Neo4j",
    "vector indexing",
    "semantic search",
    "graph database",
    "machine learning"
   ],
   "src": "/media/learn/modelling/modelling-09.mp4",
   "poster": "/media/learn/modelling/modelling-09.jpg",
   "captions": "/media/learn/modelling/modelling-09.vtt"
  },
  {
   "n": 10,
   "title": "Migrating Properties to Nodes: The Live Refactor Pattern",
   "summary": "Learn the safe, reversible method for reshaping a live graph database when a property must become a node—the scenario that emerges at scale when you need relationships between data. This lesson walks through a five-step pattern: add constraints, create nodes from distinct values, attach relationships in batches, verify counts match the old shape, and only then migrate readers and drop the old property.",
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
    "data migration",
    "schema refactoring",
    "live refactor",
    "Cypher",
    "constraints",
    "batching",
    "CALL IN TRANSACTIONS",
    "verification",
    "reversible changes"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Neptune vs Neo4j: The Real Migration Questions",
   "summary": "Learn what actually matters when deciding whether to migrate from AWS Neptune to Neo4j—not hype, but honest tradeoffs around operations, cost, tooling, and query language. You'll walk through a real 40-million-node graph and see what changes, what it costs, and what you keep.",
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
    "migration",
    "database architecture",
    "Cypher",
    "Gremlin",
    "AWS",
    "database cost",
    "operational overhead"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: Five Critical Differences Between Neptune and Neo4j",
   "summary": "Neptune and Neo4j both use property graphs, but five small differences in how they handle labels, IDs, properties, types, and edges are exactly where migrations break in practice. This lesson walks through each difference with concrete examples—why Neptune's single-label-per-vertex approach differs from Neo4j's multi-label nodes, why Neptune's string IDs are not the same as Neo4j's internal IDs, and how to handle properties, types, and edges correctly. You'll learn the specific mapping rules for each difference and the opportunity to reshape your graph for cleaner modeling in Neo4j.",
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
    "property graphs",
    "graph migration",
    "schema mapping",
    "graph databases",
    "data modeling",
    "Gremlin",
    "Cypher",
    "labels"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Rewriting Gremlin Queries in Cypher",
   "summary": "Learn how to translate Gremlin graph traversal queries into Cypher by understanding the fundamental differences between imperative and declarative query languages. This video walks through concrete mappings for lookups, directions, filters, aggregations, and mutations, while highlighting where the languages diverge and how to avoid the common pitfall of writing Cypher like Gremlin. By the end, you'll understand which Gremlin patterns have clean Cypher equivalents and which require genuine rewrites.",
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
    "query translation",
    "graph databases",
    "Neo4j",
    "query rewrite",
    "imperative vs declarative",
    "graph traversal"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating RDF Data to Neo4j: The SPARQL to Property Graph Guide",
   "summary": "Learn how to convert RDF triples into Neo4j's property graph model by applying two core rules: literal objects become properties, and resource objects become relationships. This video covers the complete migration strategy including handling blank nodes, reification, named graphs, and the critical pitfalls that catch real teams in production.",
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
    "SPARQL",
    "Neo4j",
    "property graphs",
    "data migration",
    "triples",
    "blank nodes",
    "reification",
    "neosemantics",
    "Cypher"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large Neptune Graphs: Architecture and Pitfalls",
   "summary": "Learn how to export a massive graph database (40 million nodes, 200 million edges) without downtime by using snapshots, Neptune Streams, and the Neptune Export utility. This video walks through the right sequence of steps, why naive approaches fail at scale, and the subtle data loss issues you must check for manually before importing into your new system.",
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
    "Neptune",
    "graph database",
    "data export",
    "AWS",
    "ETL",
    "database migration",
    "streams",
    "snapshot",
    "CSV",
    "data integrity"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Loading Graph Data Into Neo4j: The Right Order",
   "summary": "Learn why loading Neptune data into Neo4j in the wrong order can take three days instead of one hour, and the exact sequence that prevents it. This lesson teaches you how to use neo4j-admin import for initial bulk loads, add constraints before relationships, load nodes by label before edges, and verify your migration succeeded with reconciliation counts.",
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
    "data migration",
    "Neptune",
    "graph database",
    "LOAD CSV",
    "bulk import",
    "database constraints",
    "data loading",
    "Cypher"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Migrating from Gremlin to Cypher: The Application Layer",
   "summary": "This video breaks down the hidden complexity of migrating from Neptune's Gremlin to Neo4j's Cypher—the application layer changes that take three times longer than swapping query strings. You'll learn how drivers and sessions replace traversal sources, how to handle explicit transactions and result mapping, and how to run both engines side-by-side with a single test suite before cutting over query by query.",
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
    "application architecture",
    "transactions",
    "driver sessions",
    "graph database",
    "testing strategy",
    "refactoring"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Graph Database Migration: Five-Phase Cutover Strategy",
   "summary": "Learn why you can't simply flip a switch to migrate from one graph database to another, and how to safely move production traffic through five phases: shadow reads, dual writes, read migration by query class, reversed shadowing, and decommission. This lesson teaches the measurement strategy and rollback discipline that keeps your data consistent and your system safe throughout a months-long cutover.",
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
    "graph databases",
    "database migration",
    "Neo4j",
    "feature flags",
    "dual writes",
    "shadow reads",
    "production deployment",
    "data consistency",
    "risk mitigation",
    "cutover strategy"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: From Syntax to Language",
   "summary": "This lesson teaches you to write Cypher queries that match the actual shape of your graph, replacing entire SQL join plans with single readable patterns. You'll learn how to use direction, anonymous nodes, multiple patterns, and OPTIONAL MATCH to ask the right questions without fighting the syntax.",
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
    "MATCH",
    "OPTIONAL MATCH",
    "graph databases",
    "query syntax",
    "relationships",
    "node labels",
    "graph query language"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 2,
   "title": "WITH: The Reshaping Checkpoint in Cypher Queries",
   "summary": "Learn how the WITH clause works as a checkpoint in the middle of a Cypher query pipeline, allowing you to aggregate, filter, and reshape rows before passing them downstream. You'll understand why WITH acts as a \"wall\" that blocks undefined variables, and discover two practical reasons to use it beyond aggregation: renaming with AS for readability and cutting row counts early with LIMIT. After this video, you'll write multi-step queries that read like clear paragraphs instead of dense one-liners.",
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
    "WITH clause",
    "Neo4j",
    "query pipeline",
    "aggregation",
    "HAVING equivalent",
    "query optimization",
    "variable scope",
    "readability",
    "database queries"
   ],
   "src": "/media/learn/cypher/cypher-02.mp4",
   "poster": "/media/learn/cypher/cypher-02.jpg",
   "captions": "/media/learn/cypher/cypher-02.vtt"
  },
  {
   "n": 3,
   "title": "Counting Properly in Cypher: Aggregation Without GROUP BY",
   "summary": "Learn how Cypher automatically determines grouping keys from non-aggregated columns in RETURN statements, eliminating the need for GROUP BY. Discover the critical differences between count(*), count(x), and count(DISTINCT x), and master aggregation functions like collect(), avg, min, max, and sum—plus the subtle trap of OPTIONAL MATCH with null values that can produce phantom zeros.",
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
    "aggregation",
    "counting",
    "GROUP BY",
    "collect()",
    "null handling",
    "Neo4j",
    "query optimization",
    "database design"
   ],
   "src": "/media/learn/cypher/cypher-03.mp4",
   "poster": "/media/learn/cypher/cypher-03.jpg",
   "captions": "/media/learn/cypher/cypher-03.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths in Cypher: When You Don't Know How Many Hops",
   "summary": "Learn how to match paths of uncertain length in Cypher using the asterisk notation, from finding all connections within a hop range to efficiently locating the shortest path between nodes. You'll understand why unbounded searches fail, how to inspect paths as values, and the critical difference between shortestPath and variable-length matches with LIMIT.",
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
    "Neo4j",
    "graph databases",
    "variable-length paths",
    "pattern matching",
    "shortestPath",
    "graph traversal",
    "database optimization"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "Cypher: Lists, Maps, and Data Shaping",
   "summary": "Learn the non-graph parts of Cypher that let you shape query results for APIs and web pages. You'll master lists, list and pattern comprehensions, the UNWIND operation, map projection, and how to use parameters safely—turning raw graph data into the exact format your application needs.",
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
    "lists",
    "map projection",
    "comprehensions",
    "UNWIND",
    "data shaping",
    "parameters",
    "query optimization",
    "Neo4j",
    "graph databases"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 6,
   "title": "Cypher Subqueries: EXISTS, COUNT, and CALL",
   "summary": "Learn how to ask questions inside questions using Cypher subqueries—EXISTS for yes/no checks, COUNT for inline numbers, and CALL for row-by-row results. Eliminate the need for application loops and expensive DISTINCT operations, and solve complex queries like \"top three professors per college\" in a single round trip to the database.",
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
    "database design"
   ],
   "src": "/media/learn/cypher/cypher-06.mp4",
   "poster": "/media/learn/cypher/cypher-06.jpg",
   "captions": "/media/learn/cypher/cypher-06.vtt"
  },
  {
   "n": 7,
   "title": "MERGE, SET, REMOVE: Safe Updates in Cypher",
   "summary": "Learn how to safely update your graph database without creating duplicates. This lesson covers MERGE (matching on identifying properties only), SET variants (single properties, map updates, and replacements), REMOVE, and the constraints that make everything reliable.",
   "runs": "8:40",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Import That Ran Twice"
    },
    {
     "at": "0:44",
     "title": "MERGE Matches the Whole Pattern, or None of It"
    },
    {
     "at": "1:48",
     "title": "Merge on Identity, Then ON CREATE SET and ON MATCH SET"
    },
    {
     "at": "3:01",
     "title": "MERGE Nodes First, Relationship Second"
    },
    {
     "at": "4:24",
     "title": "SET: One Property, a Map, and the Plus-Equals"
    },
    {
     "at": "5:38",
     "title": "REMOVE, and Why Plain DELETE Refuses"
    },
    {
     "at": "6:54",
     "title": "The Constraint Is the Real Guarantee"
    },
    {
     "at": "7:50",
     "title": "Recap"
    }
   ],
   "tags": [
    "Cypher",
    "MERGE",
    "SET",
    "REMOVE",
    "graph database",
    "database constraints",
    "duplicate prevention",
    "Neo4j",
    "data integrity",
    "updating nodes"
   ],
   "src": "/media/learn/cypher/cypher-07.mp4",
   "poster": "/media/learn/cypher/cypher-07.jpg",
   "captions": "/media/learn/cypher/cypher-07.vtt"
  },
  {
   "n": 8,
   "title": "Importing CSV Data Into Neo4j: Avoiding Common Pitfalls",
   "summary": "Learn how to load CSV data into Neo4j safely and efficiently, moving from raw admissions data to a queryable graph. This lesson covers constraints, string-to-type conversion, multi-pass imports, transaction batching, and data verification—the techniques that prevent slow imports and silent duplicates that plagued your first attempts at building a graph database.",
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
    "CSV import",
    "LOAD CSV",
    "Neo4j",
    "data loading",
    "constraints",
    "MERGE",
    "transactions",
    "type conversion",
    "graph database",
    "data import best practices"
   ],
   "src": "/media/learn/cypher/cypher-08.mp4",
   "poster": "/media/learn/cypher/cypher-08.jpg",
   "captions": "/media/learn/cypher/cypher-08.vtt"
  },
  {
   "n": 9,
   "title": "Neo4j Query Performance: Indexes and Reading Execution Plans",
   "summary": "Learn why queries that work fine on small datasets can slow down dramatically on large databases, and how to diagnose and fix performance problems using indexes and execution plans. This video teaches you to read PROFILE output, understand the different index types (range, composite, and text), and recognize the operators and patterns that signal performance issues.",
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
    "execution plans",
    "PROFILE",
    "EXPLAIN",
    "database optimization",
    "range index",
    "composite index",
    "text index"
   ],
   "src": "/media/learn/cypher/cypher-09.mp4",
   "poster": "/media/learn/cypher/cypher-09.jpg",
   "captions": "/media/learn/cypher/cypher-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Queries That Look Fine But Aren't",
   "summary": "Learn to spot five subtle but expensive mistakes in Cypher queries that produce no errors but wrong results or timeouts. You'll recognize Cartesian products, unbounded traversals, incorrect counts, MERGE misuse, and unexpected planner behavior—and how to fix each one using PROFILE.",
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
    "graph databases",
    "Cartesian product",
    "unbounded paths",
    "MERGE",
    "PROFILE",
    "optimization",
    "common errors"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];
