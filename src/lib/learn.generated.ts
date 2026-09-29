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
   "summary": "Learn why language model testing breaks traditional software testing assumptions. This video explains four key differences: multiple acceptable outputs, the difficulty of automated evaluation, non-deterministic responses, and varying severity of errors.",
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
    "quality assurance",
    "hallucination",
    "non-deterministic",
    "automated testing",
    "machine learning",
    "AI"
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
   "title": "Systematic Bias in Judge Models: Position, Length, and Self-Preference",
   "summary": "Judge models can pass calibration checks overall but still make systematic errors in specific, predictable ways. This video teaches you to identify and test for four common biases: position bias (favoring whichever answer appears first), verbosity bias (rewarding longer answers), self-preference bias (rating its own outputs higher), and mistakes people make in practice when evaluating judge models. You'll learn how to detect these biases and understand why overall calibration can hide patterns of bias within individual comparisons.",
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
    "systematic bias",
    "position bias",
    "verbosity bias",
    "self-preference",
    "model evaluation",
    "calibration",
    "pairwise comparison",
    "LLM evaluation",
    "bias detection"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why Exact Match, BLEU, and ROUGE Fail",
   "summary": "Learn why standard metrics borrowed from translation and summarization—exact match, BLEU, and ROUGE—measure word overlap instead of actual correctness when applied to chat models and agents. This video shows what these metrics really measure, why they produce false negatives through paraphrasing, and which approaches (semantic similarity, LLM-as-judge, task-based checks) actually work to evaluate model output.",
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
    "exact match",
    "BLEU",
    "ROUGE",
    "LLM evaluation",
    "semantic similarity",
    "model assessment",
    "chat models",
    "machine translation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Scoring RAG Systems: Retriever and Generator Separately",
   "summary": "Learn how to diagnose failures in retrieval-augmented generation (RAG) systems by splitting your evaluation into two independent scores—one for the retriever and one for the language model generator. This video shows you why tracking a single end-to-end score hides critical problems and teaches you to measure retrieval recall and precision, generator faithfulness, and answer relevance separately so you know exactly which component to fix.",
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
    "RAG systems",
    "retrieval augmented generation",
    "evaluation metrics",
    "retriever scoring",
    "generator evaluation",
    "faithfulness",
    "recall at k",
    "precision at k",
    "LLM debugging",
    "machine learning"
   ],
   "src": "/media/learn/llm-eval/llm-eval-06.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-06.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-06.vtt"
  },
  {
   "n": 7,
   "title": "Build a Safety Net: Automated Evaluation in Your CI/CD Pipeline",
   "summary": "Learn how to move beyond one-time model evaluations to continuous, automated testing that catches regressions before they ship. This video teaches you to create a golden set of examples, define metrics and thresholds, and wire them into your CI/CD pipeline so your model is evaluated on every change.",
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
    "continuous testing",
    "metrics and thresholds",
    "ML monitoring",
    "regression testing",
    "automated evaluation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "What a Test Score Actually Tells You (And Doesn't)",
   "summary": "Learn why a high evaluation score on your test set doesn't guarantee a model is safe or will perform well on real-world inputs you didn't test. This video clarifies the critical difference between evaluation (testing fixed questions) and red-teaming (actively trying to break your system), and shows three common mistakes teams make when interpreting test results.",
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
    "model validation",
    "machine learning",
    "performance metrics",
    "adversarial testing",
    "model limitations",
    "data science"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Models Are Hard to Deploy at Scale",
   "summary": "Learn why serving language models to thousands of users is fundamentally different from running a normal web app. This video explains how token-by-token generation, GPU batching, and memory constraints create unavoidable tradeoffs between speed and efficiency that every AI system has to navigate.",
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
    "LLM deployment",
    "GPU batching",
    "latency throughput",
    "KV cache",
    "system design",
    "machine learning infrastructure",
    "AI scaling",
    "token generation"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: How to Run More Requests on the Same GPU",
   "summary": "Learn how continuous batching fixes the GPU memory waste problem of static batching by scheduling new requests to fill slots the moment previous ones finish. This video explains why naive request grouping fails, walks through a concrete example comparing the two approaches, and clarifies common misconceptions about batching limits and queuing.",
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
    "GPU scheduling",
    "LLM inference",
    "token generation",
    "batch processing",
    "GPU efficiency",
    "request scheduling",
    "iteration-level scheduling",
    "transformer inference"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache and Paging Solution",
   "summary": "Learn why a single GPU serving multiple concurrent requests fills up so quickly despite having plenty of total memory, and discover how the operating system trick of paging solves the problem. You'll understand how breaking the KV cache into fixed-size blocks and using a lookup table eliminates fragmentation, and how multiple requests can share blocks when they start with identical prompts.",
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
    "KV cache",
    "GPU memory",
    "LLM inference",
    "fragmentation",
    "paging",
    "memory management",
    "concurrent requests",
    "block allocation",
    "memory efficiency"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Three Ways to Shrink an LLM: Quantization, Distillation, Pruning",
   "summary": "Learn how to make large language models smaller and faster without losing their knowledge through quantization (rounding numbers), distillation (training a smaller student model), and pruning (removing unused parameters). After watching, you'll understand the tradeoffs of each technique and the common mistakes to avoid when compressing models for production use.",
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
    "LLM optimization",
    "machine learning",
    "inference",
    "neural networks",
    "model efficiency"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "How One Language Model Serves 500 Customers",
   "summary": "Learn the architecture behind serving thousands of customized language models without running a thousand full models. This video explains how companies use a single shared base model with lightweight adapters, cold starts, and intelligent routing to scale personalized AI at a fraction of the cost.",
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
    "serving",
    "inference",
    "routing",
    "GPU memory",
    "cold starts",
    "system design"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How Models Guess Ahead",
   "summary": "Learn how speculative decoding uses a small draft model to guess multiple tokens ahead, which a larger target model then verifies in a single pass—speeding up generation without sacrificing quality. You'll understand why this works, what mistakes teams make when implementing it, and how the big model remains the final arbiter of correctness.",
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
    "token generation",
    "inference optimization",
    "draft model",
    "target model",
    "model efficiency",
    "LLM performance",
    "token prediction"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Scale Models Across Multiple GPUs",
   "summary": "Learn why simply adding more GPUs requires fundamentally different engineering approaches, not just copies of the same setup. This video breaks down data parallelism, tensor parallelism, and pipeline parallelism—three distinct strategies for handling more requests and larger models—plus the real mistakes teams make when implementing them.",
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
    "distributed machine learning",
    "tensor parallelism",
    "pipeline parallelism",
    "data parallelism",
    "model scaling",
    "inference engineering",
    "neural networks",
    "deep learning infrastructure"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Deploying LLMs to Production: Promises, Metrics, and What Actually Breaks",
   "summary": "Once an LLM service goes live, the questions shift from architecture to operations: what speed can you actually promise, how do you know it's breaking before users complain, and what drives the real costs? Learn why you must track tail latency and time-to-first-token instead of averages, why autoscaling fails for model servers, what metrics belong on your production dashboard, and the four failure modes that emerge at 3 a.m.",
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
    "production operations",
    "latency metrics",
    "p99 tail latency",
    "time to first token",
    "autoscaling",
    "queue depth",
    "cost per inference",
    "monitoring dashboard",
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
   "title": "Fitting vs Memorizing: How Models Actually Learn",
   "summary": "Learn the critical difference between a model that genuinely learns patterns from data versus one that simply memorizes it. This video uses apartment rental data to explain fitting, overfitting, underfitting, and why splitting data into training and test sets is essential to building models that work on new, unseen examples.",
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
    "fitting",
    "training set",
    "test set",
    "model parameters",
    "generalization",
    "memorization",
    "pattern learning"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Even Mean? Linear Models & Sum of Squared Errors",
   "summary": "Learn what \"best fit\" actually means mathematically instead of just a vibe. This video explains linear models, residuals, and how squaring errors gives us a single number (sum of squared errors) to find the line that fits data best.",
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
    "prediction",
    "slope intercept"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Machine Learning Models Learn: Gradient Descent Explained",
   "summary": "Learn how machine learning models actually figure out their parameter values through a process of guessing, measuring error, and adjusting. This video walks you through loss functions, gradients, and gradient descent—the core algorithm that makes learning possible—using a simple rent prediction model as a concrete example.",
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
    "parameters",
    "learning rate",
    "calculus",
    "optimization",
    "neural networks"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting vs Underfitting: The Bias-Variance Tradeoff",
   "summary": "Learn why a model that fits training data perfectly can fail on new data, and how to catch overfitting before it happens. This video teaches you to split data into training, validation, and test sets, understand the bias-variance tradeoff, and use regularization to build models that actually generalize.",
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
    "machine learning",
    "model validation",
    "regularization",
    "training set",
    "test set",
    "generalization",
    "model selection"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "Classification with Logistic Regression: Predicting Categories Instead of Numbers",
   "summary": "Learn how to shift from predicting numerical values to predicting categories using logistic regression. This video explains why a straight line fails for probability predictions, introduces the sigmoid function to keep outputs between 0 and 1, and shows how to set decision boundaries to make yes-or-no predictions with real data.",
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
    "yes-no prediction",
    "threshold",
    "categorical prediction"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Precision, Recall, and the Confusion Matrix",
   "summary": "Learn why accuracy alone is a misleading metric for machine learning models, especially with imbalanced datasets. This video teaches you how to build and interpret a confusion matrix, calculate precision and recall, and avoid the critical mistake of testing on training data—so you can actually catch when a model is useless despite high accuracy scores.",
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
    "accuracy",
    "confusion matrix",
    "precision",
    "recall",
    "class imbalance",
    "model evaluation",
    "train-test split",
    "classification metrics",
    "overfitting"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "The Model That Was Too Good: Understanding Data Leakage",
   "summary": "Learn why a machine learning model that looks perfect on test data might completely fail in the real world. This video teaches you to recognize and fix data leakage—when information sneaks into training that you wouldn't actually have at prediction time—by correctly handling features, scaling, categories, missing values, and temporal ordering.",
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
    "machine learning",
    "feature engineering",
    "data preprocessing",
    "model validation",
    "scaling",
    "categorical encoding",
    "missing values",
    "data science",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "Linear Regression Pipeline: Building a Rent Prediction Model Start to Finish",
   "summary": "Watch all seven machine learning concepts work together in one complete example: cleaning data, engineering features, building a model, training it with gradient descent, and validating it properly on unseen data. By the end you'll understand the full pipeline for building a trustworthy predictive model and be able to apply it yourself.",
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
    "linear regression",
    "machine learning pipeline",
    "gradient descent",
    "feature engineering",
    "train-test split",
    "regularization",
    "loss function",
    "data cleaning",
    "model validation"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Reliably",
   "summary": "Learn why a single train-test split can be misleading and how k-fold cross-validation gives you a more honest estimate of model performance. You'll see how to rotate your data through multiple folds to fairly compare different models and avoid common pitfalls like data leakage.",
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
    "data leakage",
    "model comparison",
    "machine learning",
    "statistical testing"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: Predicting Rent with Yes-or-No Questions",
   "summary": "Learn how decision trees make predictions by asking a series of yes-or-no questions about data, using apartment rent as a concrete example. You'll understand how trees choose which questions to ask by measuring variance (for numerical predictions) or impurity (for categories), and why you need to stop them from growing too deep to avoid memorizing noise instead of learning real patterns.",
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
    "machine learning",
    "overfitting",
    "prediction",
    "splits",
    "leaf nodes"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Why Many Weak Models Beat One Perfect Tree: Bagging and Random Forests",
   "summary": "Learn why training hundreds of simple, slightly different decision trees and averaging their predictions often outperforms one carefully optimized tree. This video explains bootstrap sampling, bagging, and random forests using apartment price prediction, showing how variance—not bias—is the enemy and how ensemble methods harness disagreement to improve accuracy.",
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
    "decision trees",
    "bagging",
    "bootstrap sampling",
    "random forests",
    "ensemble methods",
    "variance reduction",
    "machine learning",
    "prediction"
   ],
   "src": "/media/learn/learning/learning-11.mp4",
   "poster": "/media/learn/learning/learning-11.jpg",
   "captions": "/media/learn/learning/learning-11.vtt"
  },
  {
   "n": 12,
   "title": "Hyperparameters: Tuning Knobs Before Training Starts",
   "summary": "Learn the critical difference between parameters (learned during training) and hyperparameters (set beforehand), and why choosing the right hyperparameter values matters for avoiding overfitting and underfitting. This video teaches you how to use validation sets and grid search to systematically find good hyperparameter choices, and shows you three common mistakes to avoid when tuning your models.",
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
    "grid search",
    "regularization",
    "overfitting",
    "underfitting",
    "cross-validation",
    "lambda"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Handling Imbalanced Data: Accuracy, Precision, and Recall",
   "summary": "Learn why accuracy alone is a trap when predicting rare events—like detecting one scam among ninety-nine normal listings. This video teaches you to use confusion matrices, precision, recall, and the precision-recall tradeoff to build models that actually catch what matters. You'll leave understanding how to resample data, apply class weights, set decision thresholds, and avoid the common mistakes that make imbalanced datasets deceptive.",
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
    "precision recall",
    "confusion matrix",
    "base rate",
    "class imbalance",
    "decision threshold",
    "oversampling",
    "class weights",
    "machine learning metrics",
    "false positives false negatives"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Unsupervised Learning & K-Means Clustering",
   "summary": "Learn what happens when you have data with no answer key—an introduction to unsupervised learning and the k-means clustering algorithm. You'll discover how to group similar data points together, choose the right number of clusters, avoid common pitfalls like unscaled features and outliers, and understand when clustering reveals actual structure versus overfitting.",
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
    "clustering",
    "k-means",
    "machine learning",
    "feature scaling",
    "elbow method",
    "data groups",
    "inertia",
    "centroids",
    "outliers"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Principal Component Analysis: Reducing High-Dimensional Data",
   "summary": "Learn how Principal Component Analysis (PCA) solves the problem of too many overlapping features in your dataset by finding new directions that capture the most important variance in your data. This video explains the curse of dimensionality, how correlated columns waste information, and the practical steps—including standardization and eigenvalue decomposition—to reduce 47 noisy columns down to the essential few that matter.",
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
    "Principal Component Analysis",
    "PCA",
    "dimensionality reduction",
    "covariance matrix",
    "eigenvectors",
    "feature engineering",
    "data preprocessing",
    "curse of dimensionality",
    "correlation",
    "variance"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "Model in Production: Calibration, Explanation, and Drift",
   "summary": "Learn what happens after you've built and tested a machine learning model—the three critical challenges that emerge when it goes live. You'll discover how to verify that your model's confidence scores are honest, explain individual predictions to stakeholders, and monitor whether your data has shifted over time.",
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
    "model calibration",
    "explainability",
    "data drift",
    "model deployment",
    "model monitoring",
    "confidence scores",
    "SHAP",
    "production ML"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks: From Logistic Regression to Stacked Neurons",
   "summary": "Learn how neural networks are built from the logistic regression you already know, and why stacking neurons only works with nonlinear activation functions between layers. See exactly why a flat stack of linear layers collapses to a single line, and how the sigmoid squashing function lets networks learn complex boundaries like separating regions on a 2D plane.",
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
    "neurons",
    "sigmoid",
    "hidden layers",
    "nonlinearity",
    "deep learning",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "What Hidden Units Actually Do: Activation Functions and Feature Learning",
   "summary": "This video opens the black box of neural networks to show what hidden units actually compute: weighted combinations of inputs that detect patterns and directions rather than individual features. You'll learn how activation functions like sigmoid and ReLU work, why ReLU trains faster, and how to interpret what a hidden unit has learned—plus why those learned features remain harder to explain than hand-built ones.",
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
    "deep learning",
    "gradient descent",
    "network architecture",
    "interpretability"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: Computing Gradients Through Deep Networks",
   "summary": "Learn how the chain rule enables gradient computation for weights buried deep in neural networks, using a concrete example with a tiny two-layer network. You'll walk through a complete forward and backward pass by hand, discovering why backpropagation is just an efficient way to apply the chain rule repeatedly—and why the same update rule from gradient descent still applies, unchanged.",
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
    "reverse mode differentiation",
    "weight updates",
    "computational graphs"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Networks: The Knobs and Curves That Matter",
   "summary": "This video teaches the practical hyperparameters and techniques needed to actually train a neural network—the knobs you have to turn correctly that don't come from the math of gradient descent. You'll learn how to initialize weights, set learning rate and batch size, read loss curves to diagnose problems, and use regularization techniques like dropout to prevent overfitting, so you can move from understanding the theory to getting models that actually work.",
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
    "dropout",
    "overfitting",
    "training",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutional Neural Networks: From Pixels to Features",
   "summary": "Learn why fully connected layers fail on images and how convolutional kernels solve the problem through parameter sharing, locality, and translation invariance. This video walks through the intuition behind convolutions by hand, then shows what each layer learns when you stack them—from edges to textures to parts.",
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
    "CNN",
    "image processing",
    "kernels",
    "feature learning",
    "parameter sharing",
    "edge detection",
    "deep learning fundamentals",
    "neural network architecture"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Words into Numbers",
   "summary": "Learn why simple approaches to converting words into numbers fail, and how to instead train dense vector embeddings that capture meaning through context. You'll understand how embeddings preserve relationships between words and why a single vector per word still has limitations.",
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
    "natural language processing",
    "word vectors",
    "one-hot encoding",
    "vector arithmetic",
    "neural networks",
    "context prediction",
    "dimensionality reduction"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "How Transformers Work: From the Fading Memory Problem to LLMs",
   "summary": "Learn how transformers solve the core problem of sequential processing: how models can remember earlier words and process in parallel. This video builds the transformer architecture piece by piece—attention mechanisms, multi-head attention, feed-forward layers, positional encoding—and shows how stacking these blocks creates a large language model trained to predict the next word.",
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
    "machine learning",
    "deep learning",
    "query key value",
    "multi-head attention",
    "architecture"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When to Use Deep Learning (And When Not To)",
   "summary": "This video explains why deep learning isn't the right choice for every machine learning problem, using a rental price prediction task as a concrete example. You'll learn exactly when deep learning wins—images, audio, text with structure to exploit and plenty of data—and why simpler methods like gradient boosting often perform better on tabular data with less data, less tuning, and readable explanations.",
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
    "transfer learning",
    "computational cost",
    "model interpretability",
    "when to use neural networks",
    "machine learning decision-making",
    "practical ML"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series Data: Why Random Splits Leak the Future",
   "summary": "Learn why k-fold cross-validation and random train-test splits fail for time-ordered data like time series, and how they accidentally let your model train on future data. You'll master chronological splits, rolling-origin validation, and the audit question that catches subtle data leakage in any prediction task.",
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
    "data leakage",
    "train-test split",
    "cross-validation",
    "rolling-origin validation",
    "autocorrelation",
    "trend and seasonality",
    "machine learning validation",
    "temporal data"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: From Persistence to Prediction Intervals",
   "summary": "Learn how to build honest, useful time series forecasts by starting with a persistence baseline and understanding trend, seasonality, and remainder components. You'll discover how to convert forecasting into standard regression using lag features, measure error properly, and recognize why no single-point prediction can capture the true uncertainty in any forecast.",
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
    "seasonality",
    "prediction intervals",
    "MAE RMSE",
    "forecast horizon",
    "trend decomposition",
    "supervised learning",
    "forecast evaluation"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Good Models Can Lead to Bad Decisions",
   "summary": "This video explains the critical difference between predictive questions (\"what will happen\") and causal questions (\"what will happen if I do this\")—and why a model can be excellent at prediction yet completely wrong for decision-making. You'll learn how confounders hide in data, why held-out accuracy doesn't guarantee actionable insights, and the fundamental discipline of asking the right question before building any model.",
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
    "causation vs correlation",
    "confounding variables",
    "causal inference",
    "predictive modeling",
    "counterfactuals",
    "decision-making",
    "statistical rigor",
    "doorman example",
    "model interpretation"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Randomised Experiments: From Correlation to Causation",
   "summary": "Learn how randomisation breaks the link between correlation and confounding, making it possible to measure true causal effects. This video walks through a real experiment—randomly assigning shuttle stops to university buildings—and shows you how to design one correctly, including common pitfalls like peeking early, testing many variants, and group interference. By the end, you'll understand why randomisation works, what sample size you need, and when you can and cannot use this approach.",
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
    "randomised experiments",
    "causality",
    "causal inference",
    "experimental design",
    "randomisation",
    "statistical significance",
    "confounding",
    "treatment effect",
    "control group",
    "research methodology"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Causal Inference: Testing if the Shuttle Route Really Changed Rent",
   "summary": "This video teaches how to distinguish correlation from causation when you can't run a randomized experiment—using real data about shuttle stops and apartment rents as an example. You'll learn three techniques for making causal claims from observational data: controlling for confounders, difference-in-differences, and matching. You'll also learn the critical trap: controlling for the wrong variable can make your analysis worse, not better.",
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
    "observational study",
    "difference-in-differences",
    "matching",
    "regression",
    "natural experiment",
    "causation",
    "correlation"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Reinforcement Learning: Q-Learning and Credit Assignment",
   "summary": "This video introduces reinforcement learning by following an agent that must set apartment rent prices based on market conditions, learning which decisions lead to reward. You'll discover why past decisions matter for future outcomes (credit assignment), how Q-learning values both states and actions, and why training on a simulator beats experimenting on real buildings. After watching, you'll understand how agents learn from their own choices rather than fixed datasets.",
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
    "agent",
    "reward",
    "policy",
    "state-action value",
    "simulator",
    "exploration"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "The Exploration-Exploitation Tradeoff: Bandits and UCB",
   "summary": "Learn how to make decisions with incomplete information by balancing exploration (trying new options) and exploitation (sticking with what works). This video walks through the apartment-listing problem, explaining why naive strategies fail and how methods like epsilon-greedy, decaying epsilon, and upper confidence bound (UCB) help you find the best option while minimizing regret.",
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
    "multi-armed bandit",
    "UCB",
    "epsilon-greedy",
    "decision-making",
    "regret",
    "Thompson sampling",
    "A/B testing",
    "uncertainty",
    "confidence intervals"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Questions, One Dataset: Choosing Your Machine Learning Paradigm",
   "summary": "Learn to identify which machine learning approach—supervised, unsupervised, causal inference, or reinforcement learning—matches your actual question before you write any code. This video teaches you to recognize what each paradigm requires and where people most commonly go wrong by applying the wrong tool to their problem.",
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
    "problem-solving",
    "model selection",
    "data science",
    "regression",
    "clustering"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn how ridge regression, lasso, and elastic net prevent overfitting by penalizing large coefficients. This video builds regularization from scratch, showing why lasso zeros out features while ridge shrinks them smoothly, and when to use elastic net for correlated features.",
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
    "machine learning",
    "feature selection",
    "model stability",
    "hyperparameter tuning"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: How Machines Learn by Fixing Mistakes",
   "summary": "Learn how gradient boosting trains a sequence of weak models to iteratively correct the errors of previous ones, starting from a real apartment rental example. This video fills a critical gap in machine learning education by explaining the core mechanism behind XGBoost and LightGBM—arguably the most useful technique for real-world tabular data work. You'll understand why it's called \"gradient\" boosting, how it differs from bagging and AdaBoost, and when overfitting becomes a problem.",
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
    "XGBoost",
    "LightGBM",
    "AdaBoost",
    "machine learning",
    "tabular data",
    "regression",
    "residuals"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Beyond K-means: Hierarchical Clustering and DBSCAN",
   "summary": "This video exposes the hidden assumptions in k-means clustering—round blobs, a pre-chosen number of clusters, and forced membership for every point—and shows when those assumptions break down. You'll learn hierarchical clustering (which lets you choose cluster count after seeing a dendrogram) and DBSCAN (which follows any shape and labels outliers as noise), then compare all three methods to choose the right tool for your data.",
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
    "density-based clustering",
    "machine learning",
    "unsupervised learning"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Curved Data: When PCA Fails and t-SNE/UMAP Succeed",
   "summary": "This lesson shows why PCA can't handle curved data structures and introduces t-SNE and UMAP as alternatives that preserve local neighborhoods instead. You'll learn how to choose the right dimensionality reduction tool for exploration versus interpretation, and crucially, what you can and cannot trust in the resulting visualizations.",
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
    "PCA",
    "t-SNE",
    "UMAP",
    "curved data",
    "visualization",
    "perplexity",
    "clustering",
    "data exploration"
   ],
   "src": "/media/learn/learning/learning-36.mp4",
   "poster": "/media/learn/learning/learning-36.jpg",
   "captions": "/media/learn/learning/learning-36.vtt"
  }
 ];

export const COUNTING: Lesson[] = [
  {
   "n": 1,
   "title": "When to Multiply vs Add: The Fundamental Counting Principle",
   "summary": "Learn why we multiply option counts instead of adding them when building sequences like codes or line-ups, using grids and tree diagrams to visualize the underlying principle. Discover the key test that lets you multiply even when later stages depend on earlier choices, and when to add instead by identifying disjoint cases joined by \"or\".",
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
    "permutations",
    "combinations",
    "multiplication rule",
    "with replacement",
    "without replacement",
    "combinatorics",
    "discrete math"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the different ways to arrange objects in order using the multiplication principle. You'll discover when to use the permutation formula and, critically, when order doesn't matter so permutations don't apply—avoiding the most common mistake in counting problems.",
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
    "multiplication principle",
    "counting principle",
    "arranging objects",
    "combinations vs permutations",
    "order matters",
    "combinatorics"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: Counting Groups Where Order Doesn't Matter",
   "summary": "Learn why picking a committee is different from assigning ordered roles, and master the combinations formula (n choose k). You'll see how to recognize when order matters versus when it doesn't, and you'll be able to count unordered selections using factorials and division.",
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
    "permutations",
    "factorials",
    "unordered selection",
    "multiplication rule",
    "committees",
    "lottery"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "Combinatorial Identities: Structure Behind Binomial Coefficients",
   "summary": "Learn why binomial coefficients C(n,k) have hidden structure that reveals shortcuts and proofs without algebra. Through committee-selection examples, you'll discover five key identities—symmetry, Pascal's recurrence, the binomial theorem, and the hockey-stick identity—and see how understanding their combinatorial meaning makes computation easier and reveals deep mathematical connections.",
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
    "combinatorial proofs",
    "mathematical identities",
    "counting arguments",
    "bijection",
    "subset counting"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "The Four Types of Counting Problems",
   "summary": "Learn how to classify any counting problem using two simple questions: does order matter, and can items repeat? This video teaches the four fundamental patterns—from passwords to podiums to committees to ice cream—so you can identify which counting method to use before you multiply. After watching, you'll know why the same multiplication principle can give wildly different answers depending on the problem setup.",
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
    "order matters",
    "repetition",
    "multiplication principle",
    "problem solving",
    "mathematics"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modelling Counting Problems: Breaking Into Stages",
   "summary": "Learn how to translate word problems into structured counting problems by identifying stages and understanding when order matters. This video teaches the crucial modelling skills needed before applying the multiplication principle, including how to determine whether choices shrink across stages or remain constant. After watching, you'll be able to set up real counting problems correctly and avoid the common mistake of assuming choices always decrease.",
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
    "counting principle",
    "multiplication principle",
    "combinatorics",
    "modelling",
    "stages",
    "order matters",
    "permutations",
    "word problems",
    "problem setup"
   ],
   "src": "/media/learn/counting/counting-06.mp4",
   "poster": "/media/learn/counting/counting-06.jpg",
   "captions": "/media/learn/counting/counting-06.vtt"
  },
  {
   "n": 7,
   "title": "Combining Counting Tools: When One Technique Isn't Enough",
   "summary": "Learn how to solve counting problems that require stacking multiple techniques together—like choosing a committee then assigning roles, or using inclusion-exclusion with overlapping restrictions. This video walks through four essential problem types by first showing the wrong approach on purpose, so you'll recognize and avoid the mistakes that cost marks: treating unordered groups as ordered, guessing instead of counting, double-subtracting overlaps, and multiplying instead of choosing.",
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
    "counting problems",
    "combinations and permutations",
    "inclusion-exclusion",
    "combinatorics",
    "exam strategy",
    "common mistakes",
    "restrictions constraints",
    "problem-solving techniques"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Set Operations and Events in Probability",
   "summary": "Learn how to describe outcomes and events using the language of sets: sample spaces, unions, intersections, complements, and differences. Through a sensor-testing scenario, you'll master the key operations and algebraic laws (including De Morgan's laws) that form the foundation of probability, and you'll practice translating English descriptions into set notation.",
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
    "set operations",
    "union",
    "intersection",
    "complement",
    "De Morgan's laws",
    "sensor testing"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability Axioms: Defining the Function P",
   "summary": "Learn what probability actually is: a function that assigns numbers to events, governed by three foundational rules (non-negativity, total probability equals one, and additivity for disjoint events). You'll understand why these axioms matter, see them verified in real models like equally likely outcomes and relative frequency, and prove your first theorem using only the axioms themselves.",
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
    "probability axioms",
    "probability function",
    "non-negativity",
    "disjoint events",
    "additivity",
    "sample space",
    "Kolmogorov",
    "probability rules",
    "foundations of probability",
    "proof from axioms"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "Deriving Probability Rules: From Axioms to the Inclusion-Exclusion Principle",
   "summary": "This video builds essential probability tools directly from the axioms, deriving the complement rule, monotonicity, and the general addition rule for overlapping events. You'll learn why \"at least one\" problems transform into \"one minus none\"—a trick that converts messy multi-term calculations into a single subtraction, plus discover the inclusion-exclusion pattern for three or more events.",
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
    "probability theory",
    "axioms",
    "complement rule",
    "inclusion-exclusion principle",
    "at least one problems",
    "union of events",
    "venn diagrams",
    "monotonicity"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability: The Formula and When It Works",
   "summary": "Learn the classical probability formula—when outcomes are equally likely, probability equals the count of favorable outcomes divided by the total count. Discover why the formula fails without equal likelihood, and master the two-step counting approach by working through committee selection, quality inspection, and arrangement problems.",
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
    "combinatorics",
    "counting problems",
    "sample space",
    "events",
    "applied probability"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Probability Limits and Interpretations",
   "summary": "This video explores two foundational ideas in probability: how probabilities behave when events form nested chains that grow or shrink forever, and what a probability number actually means for a single object. You'll learn to apply continuity of probability rigorously, distinguish between frequentist and subjective interpretations of probability, and avoid common pitfalls in reasoning about probability limits and individual cases.",
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
    "probability",
    "continuity of probability",
    "nested sets",
    "frequentist interpretation",
    "subjective probability",
    "degree of belief",
    "limits",
    "probability axioms",
    "defect detection",
    "probability interpretation"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proving from Axioms: The Four Moves",
   "summary": "This lesson teaches the four fundamental moves for proving probability statements from axioms: disjoint decomposition, the complement trick, monotonicity, and De Morgan's laws. You'll see these techniques applied to prove key results like the addition rule for three events and Boole's inequality, and learn the five elements that earn full marks on exam proofs.",
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
    "complement trick",
    "monotonicity",
    "De Morgan's laws",
    "exam preparation",
    "mathematical proofs"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Restricting the Sample Space",
   "summary": "Learn what conditional probability is and how it works by restricting your sample space to only the outcomes you know have occurred. Through a concrete example with sensors and diagnostic tests, you'll discover why P(A given B) ≠ P(B given A) and verify that conditional probability satisfies all the probability axioms, so all your old rules still apply.",
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
    "axioms",
    "probability measure",
    "Bayes theorem",
    "equally likely outcomes",
    "complement rule",
    "sensors",
    "diagnostic test"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "The Multiplication Rule & Probability Trees",
   "summary": "Learn where the multiplication rule comes from and how to build probability trees to solve multi-stage problems. You'll see why multiplying probabilities along a path works, how to handle draws without replacement, and how probability trees reveal whether events depend on each other.",
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
    "without replacement",
    "chain rule",
    "dependent events",
    "independence",
    "sequential probability",
    "multi-stage problems",
    "probability paths"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "The Law of Total Probability: Partitions and Weighted Averages",
   "summary": "When multiple paths lead to an outcome, how do you find its total probability? This video teaches the law of total probability by building from the concept of partitions—disjoint events that cover the entire sample space. You'll learn to compute overall probabilities by taking a weighted average of conditional probabilities, with a worked example of defective sensors from multiple suppliers, plus a method to catch your own arithmetic mistakes.",
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
    "partitions",
    "sample space",
    "conditional probability",
    "weighted average",
    "probability axioms",
    "disjoint events",
    "probability rules"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Formula: Reversing Conditional Probability",
   "summary": "Learn how to flip a conditional probability using Bayes' formula to answer the question you actually care about. Discover why a 95%-accurate test can give you only a 28% confidence that a flagged sensor is defective, and how the rarity of the condition (base rate) creates this counterintuitive result. After this video, you'll be able to apply Bayes' formula to real scenarios and avoid the base rate fallacy.",
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
    "Bayesian reasoning",
    "false positives",
    "probability reversal",
    "evidence"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Equation, Not the Intuition",
   "summary": "Independence in probability is a precise numerical statement—P(A and B) = P(A) × P(B)—not a vague sense that two things are \"unrelated.\" You'll learn to distinguish independence from disjoint events, discover why physically connected events can still be independent, and understand why checking pairs isn't enough for three or more events. After this video, you can apply the multiplication rule confidently and avoid the most common probability misconceptions.",
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
    "multiplication rule",
    "binomial coefficient",
    "mutually independent",
    "pairwise independence",
    "repeated trials",
    "mathematical definition"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems: Applying Conditional Probability Tools",
   "summary": "This workshop presents six diverse probability problems that require you to identify and apply the right tool—Bayes' theorem, total probability, independence tests, or conditional probability—without being told which one to use. You'll learn to recognize Bayes traps, construct partitions, work with conditional probability trees, and avoid the three most costly mistakes. After watching, you'll be able to solve unfamiliar probability problems by selecting and correctly applying the right formula.",
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
    "problem solving",
    "probability tools",
    "sensor defects",
    "test results",
    "tree diagrams",
    "common mistakes"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "Recognising the Right Formula Under Exam Pressure",
   "summary": "This video teaches a decision map to identify which counting or probability formula applies to an unlabelled problem in under ten seconds — the real skill needed on an exam. You'll learn to ask two key questions (is it a count or probability? does order matter? is something conditional?) and work through five realistic problems with no labels to practice naming the right tool before computing anything. After watching, you'll be able to classify any counting or probability problem correctly before touching a formula, building the confidence and speed needed under pressure.",
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
    "counting",
    "probability",
    "permutations",
    "combinations",
    "Bayes theorem",
    "exam strategy",
    "conditional probability",
    "problem-solving",
    "formulas",
    "test preparation"
   ],
   "src": "/media/learn/counting/counting-20.mp4",
   "poster": "/media/learn/counting/counting-20.jpg",
   "captions": "/media/learn/counting/counting-20.vtt"
  }
 ];

export const PATTERNS: Lesson[] = [
  {
   "n": 1,
   "title": "Data-Mining Pipelines: From Question to Decision",
   "summary": "Learn the complete structure of a data-mining pipeline—not just algorithms, but everything from asking the right question through selecting data, preprocessing messy rows, fitting models, and interpreting results into decisions. Using a real bike-share dataset, this video walks you through why most time goes into data selection and cleaning, why pipelines loop rather than end, and how a single question spawns the next one.",
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
    "data cleaning",
    "modelling",
    "selection",
    "data mining",
    "machine learning workflow",
    "data science",
    "bike-share dataset"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Exploratory Data Analysis: Inspecting Data Before Modeling",
   "summary": "Learn why and how to inspect your data thoroughly before building a machine learning model. This video covers histograms, summary statistics (mean, median, variance, standard deviation, quartiles), scatterplots and correlation, and how to handle missing values, outliers, errors, and duplicates using real bike-trip data.",
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
    "data inspection",
    "histogram",
    "mean median variance",
    "scatterplot correlation",
    "missing values",
    "outliers",
    "data cleaning",
    "standardization",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing and P-Values: From Questions to Statistical Evidence",
   "summary": "Learn the complete logic of hypothesis testing through a real-world question: did a new dock actually increase campus trips, or was the change just random noise? This video teaches you how to set up a null hypothesis, compute a test statistic, understand sampling distributions, and interpret p-values correctly—then walks you through a full worked example and common traps that mislead even experienced researchers.",
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
    "sampling distribution",
    "statistical significance",
    "data analysis",
    "causal inference",
    "multiple testing",
    "statistics"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: Building Honest Estimates from Sample Data",
   "summary": "Learn how to quantify the uncertainty in a single sample average and build a confidence interval that honestly describes where the true average likely falls. You'll discover why precision costs (quadratically), what \"95 percent\" actually promises, and how to compare two groups by eye using intervals instead of p-values alone—including why effect size matters just as much as statistical significance.",
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
    "sample size",
    "statistical uncertainty",
    "effect size",
    "normal distribution",
    "hypothesis testing",
    "statistical significance",
    "descriptive statistics",
    "data interpretation"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Claims Tested: How to Catch Bad Conclusions Before They Become Decisions",
   "summary": "Learn to interrogate confident claims before believing them by working through six real examples: checking nulls, spotting confounds, weighing practical significance, and verifying you have the data. After this video, you'll know four critical questions to ask about any statistical claim that will catch most bad conclusions before any computing happens.",
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
    "statistical significance",
    "practical significance",
    "null hypothesis",
    "data interpretation",
    "critical thinking",
    "bike-share data",
    "claims analysis",
    "statistical literacy"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: Classification by Voting",
   "summary": "Learn the k-nearest neighbours algorithm, where you classify unknown data by finding the k most similar past examples and taking a vote. Discover why scaling matters, how to choose k, and when kNN is genuinely useful instead of just a toy algorithm.",
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
    "bike-share data"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality: Why More Features Break k-Nearest Neighbors",
   "summary": "Learn why adding more features to k-nearest neighbors degrades performance rather than improving it. This video explains the geometry behind the curse of dimensionality—how high-dimensional space concentrates points near corners, making all distances roughly equal—and shows three practical solutions: feature selection, feature engineering, and dimensionality reduction.",
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
    "k-nearest neighbors",
    "feature selection",
    "feature engineering",
    "high-dimensional geometry",
    "machine learning pitfalls",
    "distance metrics",
    "data science",
    "model optimization"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes: classifying with probability instead of distance",
   "summary": "Learn how to use Bayes' rule and the naive independence assumption to build a probabilistic classifier that works when you have too many features for nearest-neighbours. You'll see how to handle the zero-probability trap with Laplace smoothing, why working in logs prevents computer underflow, and why this false assumption often picks the right class anyway.",
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
    "naive bayes",
    "bayes rule",
    "classification",
    "probability",
    "laplace smoothing",
    "conditional probability",
    "machine learning",
    "feature independence",
    "logarithms"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning a Line to Classify Data",
   "summary": "This video teaches how the perceptron algorithm learns to draw a straight boundary between two classes by repeatedly correcting mistakes. You'll watch it guess a line, compute predictions using a weighted sum and threshold, and update the weights whenever it's wrong—and you'll understand when this method guarantees success, when it fails to stop, and why the line it finds might not be the best one.",
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
    "learning algorithm",
    "weighted sum",
    "threshold",
    "convergence",
    "linear separability",
    "mistake-driven learning"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: From Prediction to Probability",
   "summary": "Learn how to transform a classification boundary into genuine probabilities using the sigmoid function and logistic regression. You'll discover why squared error fails for classification, how to interpret coefficients as odds multipliers, and how to choose a decision threshold that matches your real-world costs.",
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
    "cross-entropy loss",
    "odds ratios",
    "machine learning",
    "decision threshold",
    "binary classification"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: Splitting Nodes with Entropy and Information Gain",
   "summary": "Learn how decision trees make predictions by asking a sequence of yes-or-no questions about your data. This lesson teaches you how to measure node impurity using entropy and Gini impurity, and—most importantly—how to pick the best question to ask at each step by computing information gain. You'll understand how trees handle numeric features with thresholds and learn the common mistakes people make when building them.",
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
    "node splitting",
    "classification",
    "machine learning",
    "Gini impurity",
    "numeric thresholds",
    "bike trip prediction"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Decision Tree Pruning: Stopping Overfitting Before It Starts",
   "summary": "Learn why decision trees grown without limits memorize training data instead of learning real patterns, and how to fix it. This video teaches two practical approaches—pre-pruning to stop growth early and post-pruning to cut unnecessary branches using validation data—so you can build trees that actually generalize well to new data.",
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
    "validation set",
    "model complexity",
    "machine learning",
    "tree depth",
    "generalization"
   ],
   "src": "/media/learn/patterns/patterns-12.mp4",
   "poster": "/media/learn/patterns/patterns-12.jpg",
   "captions": "/media/learn/patterns/patterns-12.vtt"
  },
  {
   "n": 13,
   "title": "Support Vector Machines: Finding the Best Margin",
   "summary": "Learn why one decision boundary is better than another and how support vector machines find the widest possible margin between classes. You'll discover the core optimization problem behind SVMs, how slack variables handle messy real data, and the crucial role that the C parameter plays in controlling the trade-off between margin width and training violations.",
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
    "decision boundary",
    "slack variables",
    "optimization",
    "classification",
    "support vectors",
    "regularization parameter C",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Data That Can't Be Separated Linearly",
   "summary": "Learn how support vector machines handle data that no straight line can separate by using kernel functions to implicitly add curved decision boundaries. You'll understand why kernels only compute dot products between data points, how polynomial and RBF kernels work, and when to apply each one in practice.",
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
    "support vector machine",
    "kernel methods",
    "RBF kernel",
    "polynomial kernel",
    "feature transformation",
    "nonlinear classification",
    "overfitting",
    "hyperparameter tuning",
    "machine learning",
    "classification"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "Choosing a Classifier: When to Use Logistic Regression, Trees, SVM, Naive Bayes, and k-NN",
   "summary": "Learn how to defend your choice of classifier by matching its assumptions to your actual data—not by chasing accuracy scores. Through five real bike-share scenarios, you'll see when to reach for logistic regression, decision trees, k-nearest neighbours, naive Bayes, and kernel SVMs, and build a mental comparison table covering training cost, prediction cost, data appetite, interpretability, and failure modes.",
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
    "logistic regression",
    "decision trees",
    "k-nearest neighbours",
    "naive Bayes",
    "SVM kernels",
    "model assumptions",
    "interpretability",
    "overfitting",
    "algorithm comparison"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Beyond a Single Train-Test Split",
   "summary": "A single train-test split can give you misleading results just by chance—your test set might happen to be easy or hard. Learn how k-fold cross-validation fixes this by splitting your data into multiple folds, training and testing on each one, then averaging the results for a trustworthy performance estimate. You'll also discover why the cross-validation models themselves aren't your final model, and two critical mistakes to avoid.",
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
    "overfitting",
    "data splitting",
    "model validation"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Confusion Matrix, Precision, Recall, and ROC Curves",
   "summary": "When your data is imbalanced—one class is rare—accuracy becomes a useless metric that hides a broken model. Learn to build and read the confusion matrix, compute precision and recall, understand how threshold choice trades off false alarms against missed catches, and use ROC curves and precision-recall curves to evaluate classifiers fairly. You'll see why picking the threshold is ultimately a policy decision about what costs matter in the real world.",
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
    "confusion matrix",
    "precision",
    "recall",
    "F1 score",
    "ROC curve",
    "threshold",
    "imbalanced classification",
    "true positive",
    "false positive",
    "precision-recall curve"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: Data Leakage and Validation Mistakes",
   "summary": "Learn why perfect-looking model scores can hide serious problems: leakage, comparing to the wrong baseline, overfitting to validation sets, and ignoring time. You'll recognize five common mistakes that break models in completely different ways, and get a pre-flight checklist to catch them before training anything fancy.",
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
    "model validation",
    "machine learning mistakes",
    "train-test split",
    "class imbalance",
    "overfitting",
    "feature engineering",
    "model evaluation",
    "data science pitfalls",
    "bias in models"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "Six ML Algorithms on One Page: Study Guide Compression",
   "summary": "Learn how to compress six machine learning algorithms—k-nearest neighbours, naive Bayes, perceptron, logistic regression, decision trees, and SVM—into a single study sheet using eight key questions that apply to every method. After watching, you'll be able to quickly recall and compare algorithms using a standardized framework of assumptions, costs, hyperparameters, and failure modes, plus essential formulas and a decision flowchart for choosing the right method.",
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
    "kNN",
    "naive Bayes",
    "perceptron",
    "logistic regression",
    "decision trees",
    "SVM",
    "exam preparation"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Machine Learning Exam Prep: Derivations, Problem Types, and Scoring Strategies",
   "summary": "Learn the core exam strategy for machine learning: identify problem types (regression, classification, clustering), reproduce key derivations like least squares and gradient descent from scratch, and avoid common mistakes that cost points. You'll master the distinction between bias and variance as causes of overfitting, understand when to apply each technique, and practice executing formulas cleanly under time pressure.",
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
    "least squares derivation",
    "gradient descent",
    "regression classification clustering",
    "bias-variance tradeoff",
    "overfitting underfitting",
    "decision trees",
    "exam strategy"
   ],
   "src": "/media/learn/patterns/patterns-20.mp4",
   "poster": "/media/learn/patterns/patterns-20.jpg",
   "captions": "/media/learn/patterns/patterns-20.vtt"
  }
 ];

export const HOWITWORKS: Lesson[] = [
  {
   "n": 1,
   "title": "Why Automated Lesson Production Requires a Different Pipeline",
   "summary": "Learn why traditional lesson production—taking a week per video—cannot scale to hundreds of courses, and discover the single constraint that shapes every decision in an automated teaching pipeline. You'll understand the precise goal (quality-approved lessons in under an hour for minimal cost) and why the hardest problem isn't speed—it's preventing polished but incorrect content from reaching students.",
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
    "lesson production",
    "automated teaching",
    "curriculum design",
    "pipeline architecture",
    "quality assurance",
    "educational technology",
    "scaling challenges",
    "content verification",
    "instructional design"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why Animation Code Can't Be Generated Directly",
   "summary": "This video explains why letting an AI model write animation code directly leads to invisible failures—mistakes that don't get caught until the finished video is rendered. Learn how the scene/1 contract and a fixed vocabulary solve this by having the model describe scenes instead of programming them, enabling validation before any frame is drawn.",
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
    "animation pipeline",
    "code generation",
    "validation",
    "scene description",
    "Manim",
    "architecture",
    "safety net",
    "contract-based design",
    "generated code",
    "system design"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "The Nine Stops: From Brief to Published Video",
   "summary": "Learn the complete pipeline that transforms a single sentence topic into a finished teaching video, through nine named stages from brief to publish. This video maps the exact workflow—script writing, scene specification, proof rendering, rubric scoring, and repair loops—that ensures every lesson is validated, checked, and refined before a human makes the final decision to go live.",
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
    "video production pipeline",
    "automated rendering",
    "scene specification",
    "quality gates",
    "lesson workflow",
    "content automation",
    "validation process",
    "proof render",
    "rubric scoring",
    "publishing process"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "Scene Specs: Four Rules That Keep Pictures From Breaking",
   "summary": "Learn how scene_spec.py validates the JSON plan for each visual before render.py ever draws a pixel. This video teaches four rules that catch common mistakes—bare numbers in labels, weak final figures, empty grids, and collapsed icons without captions—and how the retry loop gives specs up to five chances to correct themselves.",
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
    "scene specification",
    "JSON validation",
    "quality control",
    "rendering pipeline",
    "diagram rules",
    "grid validation",
    "figure composition",
    "teaching video structure"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks Fail Silently",
   "summary": "Learn why systems can fail without crashing by exploring six real cases where automated checks reported problems that didn't exist, or missed problems entirely. After watching, you'll know how to recognize when a check is wrong—and understand the critical habit of verifying the actual artifact instead of trusting the dashboard.",
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
    "system failures",
    "automated checks",
    "silent failures",
    "debugging",
    "quality assurance",
    "false positives",
    "production bugs",
    "verification",
    "system design",
    "error detection"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "Five Pieces: The Architecture of the Video Generation Pipeline",
   "summary": "Learn how the video generation system is built from five core pieces—the AI service, contract, renderer, datastore, and harness—and how they communicate to transform scenes into finished videos. This video reveals the architectural boundaries where bugs typically hide and shows you the exact file locations and responsibilities of each component, so you'll know where to look when something goes wrong.",
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
    "pipeline",
    "AI service",
    "renderer",
    "database",
    "DynamoDB",
    "S3",
    "software engineering",
    "debugging"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "AWS Infrastructure: Where the Pipeline Actually Runs",
   "summary": "Learn the concrete AWS services that power a lesson rendering pipeline: why Fargate handles compute, how S3 and DynamoDB split storage responsibilities, and why pinning container digests and caching narration audio matter in production. After watching, you'll understand the deployment architecture, the hard resource limits that exist, and the real mistakes that stop pipelines—like assuming a gated page means the video files are protected.",
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
    "ECS",
    "S3",
    "DynamoDB",
    "CloudFront",
    "infrastructure",
    "deployment",
    "container-images",
    "pipeline"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "The Real Cost Drivers: Why Two Identical Lessons Cost $2.39 and $7.22",
   "summary": "Learn what actually drives lesson production costs by breaking cost into its three pieces: model calls, speech synthesis, and rendering time. This video explains why cheaper models rarely help, why catching defects early saves dollars instead of cents, and how the same lesson can cost wildly different amounts depending on how many times it fails quality checks.",
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
    "cost modeling",
    "production economics",
    "quality control",
    "model calls",
    "speech synthesis",
    "Fargate rendering",
    "cost optimization",
    "defect detection",
    "pipeline efficiency",
    "engineering economics"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "Building the Business Case: Why Automated Video Production Matters",
   "summary": "Learn why automated video production isn't just about cutting costs—it's about three core capabilities that change what's economically possible. This video walks through how small teams can build entire curricula, why lessons can be remade cheaply when material changes, and how one brief can serve multiple audiences, then reveals where the real defensibility actually comes from: not the pipeline itself, but the accumulated rules and failure catalogue that guide it.",
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
    "curriculum development",
    "cost analysis",
    "pipeline architecture",
    "production workflow",
    "quality assurance",
    "scalability",
    "competitive advantage"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why They Failed and What It Teaches",
   "summary": "This lesson walks through five pipeline optimizations that were tested and rejected, each killed by actual evidence rather than guesswork. You'll learn why a cheaper model works for specs but fails at code generation, why publishing can't be fully automated, why text-similarity checks missed duplicates, and why hard limits and blanket rules backfire on good lessons. The real takeaway: how to test ideas against known-answer cases before shipping them.",
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
    "testing methodology",
    "rejected ideas",
    "data-driven decisions",
    "animation code",
    "lesson design",
    "misconceptions",
    "known-answer testing",
    "validation",
    "automation tradeoffs"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "Random Variables: Function, Not Mystery",
   "summary": "Despite its name, a random variable isn't a variable or random—it's a function that maps outcomes to numbers. Learn how to read probability notation correctly, understand the difference between discrete and continuous random variables, and discover why this framework makes computation possible.",
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
    "discrete random variable",
    "continuous random variable",
    "probability notation",
    "sample space",
    "outcomes",
    "functions",
    "probability basics"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF and CDF: Two Ways to Describe a Distribution",
   "summary": "Learn the two standard ways to write down a probability distribution: the probability mass function (PMF) and the cumulative distribution function (CDF). This video shows you how each function answers different questions about discrete outcomes, how they relate to each other, and how to use them correctly to calculate exact probabilities, at-most probabilities, and ranges.",
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
    "PMF",
    "cumulative distribution function",
    "CDF",
    "discrete distribution",
    "probability",
    "random variable",
    "staircase function",
    "probability questions"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expectation: Summarizing a Probability Distribution",
   "summary": "Learn what expectation (E of X) means and how to calculate it as the weighted average of all possible values. You'll understand expectation as the balance point of a probability distribution, master the linearity property that lets you simplify calculations, and learn LOTUS to correctly handle functions of random variables.",
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
    "weighted average",
    "balance point",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Spread",
   "summary": "Learn why the average alone doesn't tell the full story—two datasets can have identical means but wildly different spreads. This video teaches you variance (the expected squared deviation from the mean) and standard deviation (its square root in real units), including why squaring matters, the computational shortcut formula, and how these measures scale when you add constants or multiply values.",
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
    "probability distributions",
    "mean absolute deviation",
    "squaring deviations",
    "statistical measures",
    "data variability",
    "helpdesk tickets"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Expectation and Variance: Six Exam-Speed Problems",
   "summary": "Learn to solve expectation and variance problems fast, the way you'd work them under exam pressure. Six different problem shapes—from PMFs and linearity to the function trap and missing probabilities—all worked through with a method: identify what's asked, pick the tool, compute, and sanity-check your answer.",
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
    "PMF",
    "exam problems",
    "probability",
    "linearity of expectation",
    "computational formula",
    "random variables",
    "problem-solving"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "Binomial Distribution: Counting Fixed Tickets",
   "summary": "Learn the binomial distribution by working through a real helpdesk scenario: if twelve tickets each have probability p of being resolved on first contact, what's the probability that exactly k of them get fixed? You'll discover why you need to multiply a probability pattern by a count, derive the binomial PMF, and find the mean and variance using indicator variables. By the end, you'll know when and how to apply binomial probability, plus the four conditions that must hold for the formula to work.",
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
    "expectation",
    "variance",
    "independence",
    "binomial coefficient",
    "indicator variables",
    "counting"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Counting Events Over Time",
   "summary": "Learn how to model the count of events arriving at a constant rate over a fixed time window when you don't have a fixed number of trials. This video derives the Poisson distribution from the binomial by considering a time interval as countless tiny slivers, and shows you how to apply it to real-world scenarios like helpdesk tickets, verify its assumptions, and avoid common mistakes.",
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
    "rate parameter lambda",
    "event counting",
    "probability mass function",
    "binomial approximation",
    "mean equals variance",
    "independence assumption",
    "time windows",
    "constant rate"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric and Negative Binomial Distributions: Waiting for Success",
   "summary": "Learn the geometric and negative binomial distributions by flipping the usual question: instead of counting successes in a fixed number of tries, count how many tries until a fixed number of successes occurs. You'll derive the geometric PMF, understand why past failures don't affect future chances (memorylessness), and see how these distributions fit alongside binomial and Poisson in modeling real-world scenarios like helpdesk ticket escalations.",
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
    "memorylessness property",
    "probability distributions",
    "PMF derivation",
    "waiting time",
    "discrete probability",
    "expectation",
    "gambler's fallacy"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "Recognizing Distributions: Binomial, Poisson, Geometric, and Negative Binomial",
   "summary": "Learn the three-question checklist to identify whether a real-world scenario follows a binomial, Poisson, geometric, or negative binomial distribution—no new formulas needed, just pattern recognition. Watch 12 worked scenarios progressing from straightforward to tricky, then discover the three most common mix-ups and how to avoid them.",
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
    "probability scenarios",
    "helpdesk examples",
    "independence assumption",
    "constant probability"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability: From Density to Integrals",
   "summary": "Learn why the probability of any exact value in a continuous distribution is zero, and how probability density functions work differently from discrete probabilities. You'll discover how to use CDFs, work with continuous densities, and compute expectations and variances using integrals instead of sums.",
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
    "CDF",
    "integrals",
    "expectation",
    "variance",
    "continuous distributions",
    "probability theory"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Exponential Distributions: Waiting Times and the Poisson Connection",
   "summary": "Learn how to model the waiting time until the next random event using the exponential distribution, and discover its direct relationship to the Poisson process. This video teaches you the key properties of exponential distributions—including why the mean and standard deviation are always equal, and the surprising \"memorylessness\" property that distinguishes it from other continuous distributions.",
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
    "continuous probability",
    "waiting times",
    "Poisson process",
    "memorylessness",
    "probability density",
    "mean and variance",
    "random events",
    "conditional probability",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Formula, and How to Use Tables",
   "summary": "Learn what the normal distribution is, why it matters, and how to work with it using the standardization formula and probability tables. You'll see how the two parameters (mean and standard deviation) shape the bell curve, master forward problems (finding probabilities) and reverse problems (finding cutoff values), and discover how symmetry and the 68-95-99.7 rule let you sanity-check your answers.",
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
    "probability tables",
    "mean and standard deviation",
    "probability calculations",
    "statistics fundamentals",
    "68-95-99.7 rule",
    "continuous distributions"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit: Picking the Right Tool",
   "summary": "Learn to recognize which probability tool to reach for by working through six realistic helpdesk problems that mix together density, CDF, exponential, normal, and discrete distributions. Each problem uses the same four-step routine: sketch the density first, set up the integral, compute it, then verify your answer against zero and one. You'll see how most mistakes are visible in the picture before you write a single integral sign.",
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
    "exponential distribution",
    "normal distribution",
    "discrete vs continuous",
    "problem-solving",
    "integration",
    "probability verification",
    "helpdesk modeling"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions: Two Random Variables on One Clock",
   "summary": "Learn how to work with two random variables that happen simultaneously, from joint probability tables to continuous densities. You'll master joint and marginal distributions, test for independence using the fundamental factorization rule, and understand when E(XY) equals E(X)·E(Y)—plus the two major pitfalls that trap most learners.",
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
    "joint distributions",
    "marginal distributions",
    "independence",
    "conditional probability",
    "random variables",
    "joint PMF",
    "joint density",
    "double integrals",
    "correlation"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Measuring How Variables Move Together",
   "summary": "Learn how to quantify the relationship between two variables using covariance and correlation. You'll compute covariance directly from a probability table, discover the computational shortcut, and understand why zero covariance doesn't guarantee independence. By the end, you'll know how correlation scales covariance into a standardized measure between -1 and 1, and why it only captures linear relationships.",
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
    "expected value",
    "linear association",
    "probability",
    "statistics",
    "variables",
    "standard deviation"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Variance of a Sum: Why Covariance Matters",
   "summary": "Learn why expectation adds easily but variance doesn't—and when it does. This video shows that variance of a sum depends on covariance, reveals the common mistake people make, and explains why bigger samples give steadier results. You'll see concrete examples with a helpdesk team and discover which distributions stay in their family when added together.",
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
    "sum of variables",
    "independence",
    "Poisson distribution",
    "normal distribution",
    "random variables",
    "probability"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Recognizing Probability Distributions: Selecting the Right Tool",
   "summary": "Learn how to quickly identify which probability distribution to use by asking three key questions: Is the quantity discrete or continuous? What does the problem ask for (PMF, CDF, one number)? Do you need a joint distribution or just a sum rule? Solve 15 realistic helpdesk problems by naming the correct tool before calculating, building the recognition skill that saves time on exams and the job.",
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
    "problem-solving",
    "discrete vs continuous",
    "CDF",
    "PMF"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Stabilize",
   "summary": "Learn why running averages converge to their true expectation—not because the past is owed correction, but because variance shrinks mathematically as you collect more data. You'll understand the mechanics behind this fundamental law, recognize the gambler's fallacy, and know how much data you actually need to trust an average.",
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
    "variance of the mean",
    "running average",
    "convergence",
    "expectation",
    "gambler's fallacy",
    "sample mean",
    "probability",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "Why Normal Distributions Are Everywhere: The Central Limit Theorem",
   "summary": "This lesson explains why bell curves appear constantly across different domains, even when individual measurements are skewed. You'll see how adding up many independent observations—no matter their original shape—produces a normal distribution, and learn to apply this to solve real problems like predicting whether a technician's shift will overrun.",
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
    "probability",
    "statistics",
    "distribution shapes",
    "finite variance",
    "independence",
    "standardization"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "What Actually Goes on the One-Page Cheat Sheet: Probability Distributions for Problem-Solving",
   "summary": "If you could bring only one page into an exam, what essential probability material belongs on it? This video builds a complete reference sheet with all six key distributions, their stories, and the formulas that matter most—then shows how to use it on problems that don't tell you which tool to grab. You'll learn to identify which distribution fits a scenario in seconds and solve problems under pressure without wasting time on unnecessary detail.",
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
    "problem-solving strategies",
    "variance and expectation",
    "reference sheet",
    "distributions cheat sheet"
   ],
   "src": "/media/learn/chance/chance-20.mp4",
   "poster": "/media/learn/chance/chance-20.jpg",
   "captions": "/media/learn/chance/chance-20.vtt"
  }
 ];

export const SHIFT: Lesson[] = [
  {
   "n": 1,
   "title": "Why Legacy Systems Hit a Wall: The Structural Limits",
   "summary": "This video explains why legacy systems that work well for years suddenly can't handle new situations—they're limited to what was written in their original requirements. You'll learn to identify three specific types of work that systems structurally can't do: reading and understanding intent from natural language, spotting patterns across separate events, and writing coherent summaries. By the end, you'll know the right question to ask when deciding whether to replace or augment an old system.",
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
    "system architecture",
    "requirements documentation",
    "business process automation",
    "when to modernize",
    "system limitations",
    "technical debt",
    "business operations",
    "human-computer work division",
    "decision making"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts That Changed Software: From APIs to Foundation Models",
   "summary": "This video explains the three fundamental changes that made large language models useful for real business problems: they understand plain-language instructions instead of requiring fixed APIs, they can do many jobs nobody specifically trained them for, and they're now fast and cheap enough to work inside live transactions. You'll learn what a foundation model actually is, what critically *didn't* change about them, and why this fundamentally shifted how software gets built.",
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
    "APIs",
    "language models",
    "software architecture",
    "dispatch systems",
    "instructions vs APIs",
    "machine learning operations",
    "business applications",
    "software engineering",
    "technical infrastructure"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "Why AI Features Fail (And Where They Actually Work)",
   "summary": "Learn why adding AI to existing systems quietly fails, even when it works technically—and discover the architectural difference that makes it land. Through a logistics dispatch example, you'll see the critical mistake teams make and how to position AI where the actual work breaks down.",
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
    "product design",
    "AI integration",
    "dispatch systems",
    "exception handling",
    "software design",
    "process automation",
    "AI strategy"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: How AI Changes Your Team's Daily Work",
   "summary": "When you add a machine learning model to a feature, the daily work changes for almost every role on your team—not just developers. This video walks through exactly how the architect, product owner, scrum master, tester, and developer each need to think and work differently, using a real logistics dispatch example to make each change concrete and specific.",
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
    "testing",
    "team roles",
    "AI integration",
    "logistics",
    "scrum",
    "software development",
    "fallback design"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "The Question Nobody Answers Honestly: How Much Faster Is AI Really?",
   "summary": "This video breaks down where AI actually accelerates software development and where it doesn't—revealing that while code writing gets 2-5x faster, the business decisions, requirement clarification, and code review that surround it remain unchanged. You'll learn why projects don't finish proportionally faster despite individual tasks being quicker, and how to avoid the mistake of assuming speed gains in writing translate to company-wide delivery improvements.",
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
    "AI development speed",
    "software delivery",
    "code generation",
    "project bottlenecks",
    "well-specified work",
    "development cycle",
    "realistic productivity gains",
    "team workflows"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing and Estimating AI Projects: Why the Demo Isn't Done",
   "summary": "This video explains why AI projects fail to staff and estimate like traditional software projects, breaking down the three new roles that emerge (goal specifier, evaluation owner, reliability owner) and why the polished demo is actually just the beginning. You'll learn the honest planning framework for AI work: treat the demo as day one of the real project, budget for the hard 90%, and plan for ongoing maintenance as models and external providers drift.",
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
    "AI project management",
    "team structure",
    "estimation",
    "ML systems",
    "logistics",
    "product strategy",
    "software staffing",
    "evaluation and testing",
    "reliability",
    "shipping timelines"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "Model Calls: What Actually Happens in the Code",
   "summary": "Learn what a model call truly is when software runs it: text in, text out, stateless, and sometimes wrong. This video covers the five-part component structure (input, prompt, model, validate, fallback), why temperature breaks normal debugging habits, and the critical latency decisions that determine where you can safely use a model in your application.",
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
    "LLM architecture",
    "software engineering",
    "API design",
    "validation",
    "fallback patterns",
    "latency",
    "temperature",
    "structured output",
    "production deployments"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What Actually Is an Agent? A Plain Definition",
   "summary": "This video gives a specific, testable definition of \"agent\" that cuts through the hype: a model in a loop with tools that sets a goal, calls external functions, observes results, and decides what to do next. You'll learn how agents differ from single model calls, when to actually use one instead of a fixed pipeline, and the real engineering constraints you need—step limits, cost caps, safe-by-design tools, and human approval gates—to keep them from looping endlessly or confidently building wrong conclusions on bad early data.",
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
    "AI systems",
    "model loops",
    "tool use",
    "agentic workflows",
    "LLM engineering",
    "system design",
    "control mechanisms",
    "unbounded processes",
    "practical AI"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "Model Context Protocol: The Glue Problem and When to Expose Tools",
   "summary": "Learn why connecting AI models to real systems is harder than it seems, and how a common standard solves the integration problem—without solving safety. You'll understand what MCP actually does, why cheap tool descriptions tempt dangerous exposure decisions, and what a CTO actually needs to decide when building AI agents.",
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
    "model context protocol",
    "AI agents",
    "tool integration",
    "system design",
    "glue code",
    "API standards",
    "AI safety",
    "framework agnostic",
    "CTO decisions"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "From RAG to GraphRAG: Grounding AI in Your Business Data",
   "summary": "Learn why foundation models need your company's actual data to answer real questions, and how retrieval-augmented generation evolved to handle it. This video contrasts RAG's document-based approach with GraphRAG's graph-based reasoning, and shows why modern graph databases that store vectors can answer complex multi-hop questions foundation models alone cannot.",
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
    "semantic search",
    "knowledge graphs",
    "vector embeddings",
    "Neo4j",
    "foundation models",
    "graph databases",
    "LLM grounding"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls: Guardrails, Routing, and Context Engineering",
   "summary": "Learn the three production controls that protect LLM systems from bad outputs, runaway costs, and wasted computation. After watching, you'll understand how guardrails catch dangerous answers, how routing directs requests to the right model by difficulty, and why carefully engineered context prevents both errors and waste.",
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
    "LLM safety",
    "guardrails",
    "routing",
    "context engineering",
    "evaluation",
    "production systems",
    "cost control",
    "AI reliability",
    "model selection",
    "prompt engineering"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Splitting Prompt Engineering Into Four Disciplines",
   "summary": "Learn why \"prompt engineering\" is actually four separate disciplines—prompt, context, loop, and harness engineering—each addressing different parts of an AI system in production. After this video, you'll know which of the four disciplines is worth budgeting for, why teams waste money on the wrong one, and how all four work together on a single exception pipeline.",
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
    "LLM production",
    "AI systems",
    "software validation",
    "exception handling",
    "observability",
    "cost optimization"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Prompt, Context, Loop, and Harness Engineering",
   "summary": "Learn the four distinct pieces of work that often get called by the same name: prompt engineering (wording instructions), context engineering (choosing what the model sees), loop engineering (handling retries), and harness engineering (production safeguards). After this video, you'll understand what each one does, why they have different costs, and—if you're building an AI system from scratch—which one your team should actually prioritize first.",
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
    "LLM production",
    "AI systems",
    "dispatch systems",
    "model observability",
    "cost metering",
    "system design"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When Not to Use a Language Model",
   "summary": "Learn when to reach for classical machine learning instead of a language model: use regression or classification for structured data with numerical or categorical outputs, reserve language models for unstructured text inputs or tasks requiring general knowledge, and understand where fine-tuning and retrieval actually belong in the pipeline. This lesson prevents months of wasted work by matching the tool to the problem shape.",
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
    "when not to use",
    "structured data",
    "LLM pitfalls",
    "AI architecture"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "The Hidden Cost Model: How AI Projects Go Over Budget After Launch",
   "summary": "Learn how to break down and forecast the true cost of running AI agents in production, where expenses grow with transaction volume instead of staying flat like traditional software licenses. This video walks you through the actual cost drivers—tokens, steps, retries, evaluation, and human review—and shows you the four levers that can cut costs from $7 per transaction down to $2.50, using real production numbers.",
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
    "production expenses",
    "token pricing",
    "agent optimization",
    "cost forecasting",
    "evaluation metrics",
    "retries",
    "context trimming",
    "model selection",
    "instrumentation"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "How AI Systems Fail Silently: The Four Failure Modes",
   "summary": "This video explores how deployed AI systems fail not through crashes but through confident wrong answers delivered silently to users. You'll learn the four failure patterns—confident wrong answers, silent degradation, stalled steps, and compounding errors—and how to build systems that remain attributable and replayable so every decision can be audited and responsibility assigned.",
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
    "AI failures",
    "silent degradation",
    "confident wrong answer",
    "system reliability",
    "accountability",
    "logging",
    "production AI",
    "error detection",
    "AI policy",
    "agent systems"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Migrating Legacy Systems: The Front-Door Pattern for AI",
   "summary": "Learn how to add AI capability to a running system without rewriting it—by placing the model in front of the existing infrastructure rather than inside it. This video teaches the pragmatic strategy for rolling out an AI agent alongside legacy systems: starting with high-volume, tolerant, manual processes, proving it in shadow mode first, and leaving everything else alone.",
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
    "AI migration",
    "legacy systems",
    "front-door pattern",
    "system integration",
    "shadow mode",
    "dispatch systems",
    "AI deployment strategy",
    "system architecture",
    "human-in-the-loop",
    "gradual rollout"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Actually Changes for Backend Developers Using AI Models",
   "summary": "Learn which of your existing skills transfer directly to building systems with AI models and which are genuinely new. This lesson shows you what to focus on learning first, what not to waste time on, and how your role shifts depending on your current specialty—without assuming you need to understand model internals.",
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
    "model reliability",
    "system design",
    "cost per transaction",
    "quiet failures",
    "learning path"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Questions to Decide if Your Company Should Use AI",
   "summary": "Learn the six questions you must answer—in order—to decide whether AI is actually worth implementing in your organization. This framework helps you cut through the hype, identify whether the technology solves a real problem, and recognize when the honest answer is \"not yet\" rather than forcing a solution that doesn't fit.",
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
    "business strategy",
    "cost analysis",
    "when to implement AI",
    "probabilistic systems",
    "responsible AI",
    "framework",
    "accountability",
    "data requirements",
    "technology adoption"
   ],
   "src": "/media/learn/shift/shift-19.mp4",
   "poster": "/media/learn/shift/shift-19.jpg",
   "captions": "/media/learn/shift/shift-19.vtt"
  }
 ];

export const MODELLING: Lesson[] = [
  {
   "n": 1,
   "title": "Graph Schema Design: Starting With Questions, Not Entities",
   "summary": "Learn how to design graph database schemas by starting with the questions your application needs to answer, rather than mapping relational entities into nodes. You'll understand why hop count matters, how to identify which nouns become nodes versus relationship properties, and how to avoid the relational modeling habits that create slow, painful queries.",
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
    "graph vs relational",
    "query optimization",
    "hop count",
    "relationship properties",
    "database architecture"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 2,
   "title": "One Fact, Three Shapes: Modeling Data in Graph Databases",
   "summary": "Learn how to model a single fact three different ways in Neo4j—as a property, as a relationship to a shared node, or as a node with its own relationships. This video teaches you the decision rules for choosing the right shape based on the questions you'll actually ask, and shows you how the same fact can graduate from one shape to another as your requirements change.",
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
    "Neo4j",
    "Cypher",
    "data modeling",
    "schema design",
    "properties",
    "relationships",
    "nodes",
    "database design",
    "machine learning"
   ],
   "src": "/media/learn/modelling/modelling-02.mp4",
   "poster": "/media/learn/modelling/modelling-02.jpg",
   "captions": "/media/learn/modelling/modelling-02.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels in Cypher: The Right Way",
   "summary": "Learn when labels actually belong in your graph model and when they're a common mistake. This lesson covers the three ways people misuse labels—as status, as values, and as tenant markers—and shows why stable kinds like :College and :PublicInstitution are the right use case, while everything else belongs in properties.",
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
    "schema design",
    "properties",
    "best practices",
    "database indexing",
    "query optimization"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j",
   "summary": "Learn why every Neo4j relationship must have a direction and how to choose it based on real-world facts, not query patterns. Discover when to split relationship types into separate categories versus storing properties, and how this choice affects query performance on dense nodes. Master the naming conventions that keep your schema understandable and your queries efficient.",
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
    "graph databases",
    "relationship design",
    "schema modeling",
    "query performance",
    "Cypher",
    "graph data structure",
    "relationship types"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reified Relationships: When to Promote a Relationship to a Node",
   "summary": "Learn why some facts in your graph need their own identity as nodes rather than living as properties on relationships. This video teaches you to recognize three signals—accumulating properties, the need for further connections, and repeated pairs—that tell you when to reify a relationship, and shows the real cost of doing so.",
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
    "reified relationships",
    "graph databases",
    "data modeling",
    "relationship design",
    "many-to-many",
    "node properties",
    "database schema",
    "application entity",
    "join tables"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graphs: Three Patterns and When to Use Them",
   "summary": "Learn three proven patterns for storing historical data in graph databases: validity windows on relationships, version nodes chained together, and time trees built from calendar nodes. You'll understand when to use each pattern, why overwriting facts is dangerous, and how to distinguish between when something changed and when you learned about it.",
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
    "Neo4j",
    "time series",
    "validity windows",
    "version nodes",
    "time trees",
    "bitemporality",
    "historical queries"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Constraints: Enforcing Your Data Shape in Neo4j",
   "summary": "Learn how to prevent your database model from drifting away from your schema by implementing uniqueness, node key, existence, and property type constraints in Neo4j. After watching, you'll be able to write constraints that enforce identity rules, required properties, and data types before loading data, and you'll understand both what constraints can and cannot do—like preventing foreign key violations or cascading deletes.",
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
    "data validation",
    "existence constraint",
    "property type",
    "Neo4j schema",
    "database integrity",
    "data modeling",
    "indexes"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 8,
   "title": "Indexes in Neo4j: A Modeling Decision, Not a Performance Patch",
   "summary": "Learn why indexes are a day-one modeling choice answering specific questions from your domain, not an after-the-fact tuning trick. Discover five index types—range, composite, text, full-text, and relationship—and when each one actually helps, plus the hidden cost every index carries that makes unused ones worse than useless.",
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
    "Neo4j",
    "indexes",
    "database modeling",
    "query optimization",
    "range indexes",
    "composite indexes",
    "text indexes",
    "full-text search",
    "database performance"
   ],
   "src": "/media/learn/modelling/modelling-08.mp4",
   "poster": "/media/learn/modelling/modelling-08.jpg",
   "captions": "/media/learn/modelling/modelling-08.vtt"
  },
  {
   "n": 9,
   "title": "Embeddings in Neo4j: Finding Similar Meaning in Graphs",
   "summary": "Learn how to use embeddings—fixed-length numeric lists generated by machine learning models—to find similar meaning rather than just graph connections. This video covers where embeddings live in the graph, how to choose similarity metrics (cosine vs. Euclidean), how to declare vector indexes, and most importantly, how to combine vector search results with graph traversal to answer real-world questions that neither approach alone can solve.",
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
    "Neo4j",
    "similarity matching",
    "machine learning",
    "cosine similarity",
    "vector indexes",
    "graph databases",
    "semantic search",
    "text embeddings"
   ],
   "src": "/media/learn/modelling/modelling-09.mp4",
   "poster": "/media/learn/modelling/modelling-09.jpg",
   "captions": "/media/learn/modelling/modelling-09.vtt"
  },
  {
   "n": 10,
   "title": "Live Refactoring: Migrating a Property to a Node in Production",
   "summary": "When your graph grows from thousands to millions of nodes, properties that were right then can become the wrong shape now. Learn the five-step method to safely refactor a property into a node while the database is live and people are actively using it: add the new shape, constrain early, migrate in batches, verify by counting, then gradually phase out the old shape.",
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
    "cypher",
    "neo4j",
    "constraints",
    "batching",
    "refactoring",
    "production systems",
    "data modeling",
    "properties to relationships"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Neptune vs Neo4j: The Real Migration Decision",
   "summary": "Learn what actually changes when moving from AWS Neptune to Neo4j—not as a pitch to switch, but as a clear breakdown of costs, capabilities, and tradeoffs. This lesson walks through a real 40-million-node college-search graph to show you what Neptune does well, what Neo4j's tooling and Cypher language enable, and the five questions you need to answer before deciding to migrate.",
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
    "Cypher",
    "Gremlin",
    "AWS",
    "tooling",
    "cost analysis",
    "database comparison"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: Neptune vs. Neo4j Property Graphs",
   "summary": "Both Neptune and Neo4j use property graphs, but critical differences in how they handle labels, IDs, properties, types, and edges cause most migration bugs. This lesson walks through five specific implementation gaps where your data model will need to change, with a reference table for each migration decision. Afterward, you'll know exactly where to expect problems and how to reshape your graph for Neo4j.",
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
    "data modeling",
    "Gremlin",
    "Cypher",
    "graph database",
    "schema mapping",
    "database comparison"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Translating Gremlin Queries to Cypher: A Scene-by-Scene Guide",
   "summary": "Learn how to convert Gremlin graph queries to Cypher by understanding their fundamental differences: Gremlin is imperative (a traversal path), while Cypher is declarative (a pattern you describe). This video maps each Gremlin step—from basic node lookups and filters to complex operations like grouping and upserts—to its Cypher equivalent, and reveals where the two languages diverge and where Cypher actually offers genuine advantages.",
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
    "graph databases",
    "query patterns",
    "traversal",
    "database migration"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating RDF to Neo4j: SPARQL Users' Conversion Guide",
   "summary": "Learn how to migrate an RDF triple store to Neo4j by converting SPARQL predicates into properties and relationships. This video covers the core decision rule—literal objects become properties, resource objects become relationships—plus handling of blank nodes, reification, named graphs, and the ontology gap, concluding with common pitfalls that derail migrations in production.",
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
    "graph database migration",
    "triples",
    "properties",
    "relationships",
    "blank nodes",
    "reification",
    "neosemantics"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large Neptune Graph Databases to CSV",
   "summary": "Learn the production-safe strategy for exporting massive graph databases (40+ million nodes) without downtime. This video covers the two-export approach using Neptune Streams and the Neptune Export utility, plus the critical validation checks that prevent data loss in the handoff.",
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
    "CSV",
    "Gremlin",
    "database migration",
    "data validation",
    "Neptune Streams",
    "distributed systems"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Loading Neptune Data into Neo4j: The Right Order Matters",
   "summary": "Learn why a Neptune-to-Neo4j data migration can take three days instead of one hour—and how to fix it. This video teaches the exact sequence for bulk-loading nodes and relationships: constraints first, then nodes by label, then relationships, using the right tools at each stage. You'll understand the math behind the three-day problem and the count-checking method that proves your load succeeded.",
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
    "Neptune migration",
    "data loading",
    "bulk import",
    "Cypher",
    "database performance",
    "neo4j-admin",
    "LOAD CSV",
    "graph databases"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Migrating from Gremlin to Cypher: Rewriting the Application Layer",
   "summary": "When migrating a graph application from Neptune's Gremlin to Neo4j's Cypher, the work is far more than just swapping query strings—the entire application layer between your service and the graph changes. This video teaches how to refactor drivers, sessions, transactions, result handling, and routing, then run both engines simultaneously during migration using an interface pattern with dual implementations validated by a single test suite.",
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
    "migration",
    "application architecture",
    "transactions",
    "driver sessions",
    "parameterized queries",
    "testing",
    "graph databases"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Database Migration Without Downtime: The Five-Phase Cutover Strategy",
   "summary": "Learn the only safe way to switch from one database to another in production: a five-phase plan that uses shadow reads, dual writes, and gradual query migration to catch bugs before they reach users. This lesson teaches you how to measure success at each phase, when to flip the switch, and how to build a rollback path that actually works—so you never get stuck serving data you can't trust.",
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
    "shadow reads",
    "dual writes",
    "feature flags",
    "production cutover",
    "query migration",
    "rollback strategy",
    "zero downtime",
    "database reliability"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: MATCH, Direction, and OPTIONAL MATCH",
   "summary": "Learn to read and write Cypher graph patterns fluently by understanding how arrows represent relationships, how to join multiple patterns with shared variables, and when to use OPTIONAL MATCH to preserve rows with missing data. After this lesson you'll recognize common mistakes like reversed arrows and unanchored patterns, and know why direction and variable naming matter for getting correct results.",
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
    "relationship direction",
    "pattern syntax",
    "query writing",
    "graph databases",
    "SQL to Cypher"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 2,
   "title": "Cypher WITH: Reshaping Rows in the Middle of Your Query",
   "summary": "Learn how the WITH clause works as a checkpoint in your Cypher query pipeline, letting you aggregate, filter, and reshape rows before passing them downstream. Understand why WITH acts as a wall that blocks any variables you don't explicitly carry through, and discover two practical reasons to use it even when you're not aggregating: renaming with AS for readability and using LIMIT mid-query to avoid expensive operations on unnecessary rows.",
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
    "query clauses",
    "aggregation",
    "Neo4j",
    "SQL patterns",
    "HAVING clause",
    "query optimization",
    "row filtering"
   ],
   "src": "/media/learn/cypher/cypher-02.mp4",
   "poster": "/media/learn/cypher/cypher-02.jpg",
   "captions": "/media/learn/cypher/cypher-02.vtt"
  },
  {
   "n": 3,
   "title": "Aggregation in Cypher: Grouping Without GROUP BY",
   "summary": "Learn how Cypher automatically determines grouping keys from non-aggregated columns in RETURN clauses, eliminating the need for GROUP BY. Discover the subtle pitfalls of adding columns to aggregation queries and master the differences between count(*), count(x), and count(DISTINCT x), plus how to use collect() and navigate the OPTIONAL MATCH phantom zero trap.",
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
    "GROUP BY",
    "count",
    "collect",
    "database",
    "Neo4j",
    "SQL",
    "OPTIONAL MATCH",
    "Nulls"
   ],
   "src": "/media/learn/cypher/cypher-03.mp4",
   "poster": "/media/learn/cypher/cypher-03.jpg",
   "captions": "/media/learn/cypher/cypher-03.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths in Cypher: From Hops to shortestPath",
   "summary": "Learn how to match paths of unknown length in Cypher using the asterisk notation with bounds, allowing you to find connections multiple hops away through a graph. Discover how to name and inspect paths to see the actual chain of relationships, and when to use shortestPath and allShortestPaths for efficient searches. Master the pitfalls—unbounded searches, over-filtering after matching—to write queries that actually perform.",
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
    "variable-length paths",
    "graph queries",
    "shortestPath",
    "graph databases",
    "Neo4j",
    "pattern matching",
    "graph algorithms",
    "query optimization",
    "relationship traversal"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "The Part of Cypher That Isn't About the Graph",
   "summary": "Learn the non-graph parts of Cypher that shape query results for real-world use—lists, maps, and parameters. You'll master list and pattern comprehensions, UNWIND operations, and map projection to build cleaner, safer queries that handle data transformation inside the database instead of in your application code.",
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
    "query parameters",
    "data shaping",
    "Neo4j"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 6,
   "title": "Cypher Subqueries: EXISTS, COUNT, and CALL",
   "summary": "Learn how to nest questions inside questions with Cypher subqueries—EXISTS for yes-or-no checks, COUNT for filtered numbers, and CALL for real result rows. You'll move from application loops and painful workarounds to writing single, efficient queries that answer complex requests like \"top three professors per college\" in one round trip to the database.",
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
    "Neo4j",
    "Cypher",
    "subqueries",
    "EXISTS",
    "COUNT",
    "CALL",
    "query optimization",
    "database performance",
    "top-N queries",
    "graph databases"
   ],
   "src": "/media/learn/cypher/cypher-06.mp4",
   "poster": "/media/learn/cypher/cypher-06.jpg",
   "captions": "/media/learn/cypher/cypher-06.vtt"
  },
  {
   "n": 7,
   "title": "MERGE, SET, and REMOVE: Creating and Updating Safely in Cypher",
   "summary": "Learn why MERGE matches entire patterns—not just checking existence—and how to use ON CREATE SET and ON MATCH SET to prevent duplicates. This lesson covers the precise techniques for merging nodes and relationships, updating properties with SET, removing data safely, and enforcing uniqueness with constraints so your graph stays clean.",
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
    "MERGE",
    "Cypher",
    "Neo4j",
    "SET",
    "REMOVE",
    "constraints",
    "duplicates",
    "data integrity"
   ],
   "src": "/media/learn/cypher/cypher-07.mp4",
   "poster": "/media/learn/cypher/cypher-07.jpg",
   "captions": "/media/learn/cypher/cypher-07.vtt"
  },
  {
   "n": 8,
   "title": "Importing Data Into Neo4j: CSV to Graph",
   "summary": "Learn how to load CSV files into Neo4j and build a working graph from raw data. This lesson covers the complete import process: setting up constraints, handling string conversions, importing nodes before relationships, batching large files, cleaning missing data, and verifying your results to catch silent failures.",
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
    "graph database",
    "constraints",
    "MERGE",
    "batching",
    "data validation"
   ],
   "src": "/media/learn/cypher/cypher-08.mp4",
   "poster": "/media/learn/cypher/cypher-08.jpg",
   "captions": "/media/learn/cypher/cypher-08.vtt"
  },
  {
   "n": 9,
   "title": "Query Performance in Neo4j: Indexes and Reading Plans",
   "summary": "Learn why queries that work on small datasets become slow on large ones, and how to fix them. This video teaches range indexes, composite indexes, text indexes, and constraints, then shows you how to read EXPLAIN and PROFILE output to diagnose and solve performance problems at their source—almost always the first step of finding nodes.",
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
    "database performance",
    "indexes",
    "query optimization",
    "PROFILE",
    "EXPLAIN",
    "database design"
   ],
   "src": "/media/learn/cypher/cypher-09.mp4",
   "poster": "/media/learn/cypher/cypher-09.jpg",
   "captions": "/media/learn/cypher/cypher-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Queries That Look Correct But Aren't",
   "summary": "Learn to identify five dangerous Cypher query mistakes that run without errors but produce wrong answers or timeouts in production. You'll recognize each mistake from its symptoms and understand why PROFILE is essential for debugging queries that appear to work correctly.",
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
    "query optimization",
    "debugging",
    "common mistakes",
    "graph patterns",
    "performance",
    "MERGE",
    "OPTIONAL MATCH",
    "unbounded paths",
    "Cartesian products"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];
