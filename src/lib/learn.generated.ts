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
   "title": "Why Testing Language Models Is Different From Testing Software",
   "summary": "Learn why traditional software testing strategies fail for language models, and understand the four core challenges: multiple acceptable outputs, the difficulty of automated evaluation, non-deterministic behavior, and varying degrees of wrongness. This video explains why binary pass/fail testing doesn't work and what teams need to think about instead.",
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
    "AI quality assurance",
    "hallucination",
    "non-deterministic systems",
    "automated testing",
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
   "title": "The Hidden Biases in Judge Models: Calibration Isn't Enough",
   "summary": "Learn the four systematic biases that cause judge models to make predictable mistakes even when they pass average calibration checks: position bias (favoring the first answer), verbosity bias (rewarding length over quality), self-preference bias (rating their own writing higher), and the pitfall of using the same model as both system and judge. You'll discover how to detect these biases and why checking calibration on average isn't enough to ensure consistent fairness.",
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
    "bias detection",
    "LLM evaluation",
    "pairwise comparison",
    "position bias",
    "verbosity bias",
    "self-preference bias",
    "model calibration",
    "evaluation methodology"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Beyond BLEU, ROUGE, and Exact Match",
   "summary": "Most teams use translation and summarization metrics like exact match, BLEU, and ROUGE to evaluate language models and agents—but these metrics measure word-level overlap with a reference, not actual correctness or meaning. Learn why these metrics fail for paraphrasing, what they're actually measuring, and three proven alternatives (semantic similarity, LLM-as-judge, and task-based evaluation) that work for modern chat models.",
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
    "model assessment",
    "benchmarking"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Diagnosing RAG Failures: Score the Retriever and Generator Separately",
   "summary": "Learn how to identify whether failures in a RAG (retrieval augmented generation) system come from the retriever or the generator by scoring each component independently. You'll discover why end-to-end scores hide problems and how to measure retriever performance with recall and precision, and generator performance with faithfulness and relevance.",
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
    "information retrieval",
    "language models",
    "recall",
    "precision",
    "faithfulness",
    "LLM evaluation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-06.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-06.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-06.vtt"
  },
  {
   "n": 7,
   "title": "Safety Nets for AI: Automated Evaluation in CI/CD Pipelines",
   "summary": "Learn how to move beyond one-time model evaluations to continuous, automated safety nets that catch regressions before they reach production. This video teaches you to build a golden set of test examples, define thresholds, and wire evaluation into your CI/CD pipeline so every code change is validated automatically—and how to avoid the three common failure modes that let problems slip through.",
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
    "golden set",
    "CI/CD pipeline",
    "safety nets",
    "automated testing",
    "machine learning",
    "metrics and thresholds",
    "continuous deployment",
    "regression detection",
    "LLM evaluation"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Why a Passing Score Isn't a Safety Guarantee",
   "summary": "Learn why model evaluation scores only measure performance on the specific questions you tested—not on attacks or scenarios you never anticipated. This video explains the critical difference between evaluation and red-teaming, shows why even high scores can mask serious vulnerabilities, and identifies the three most common mistakes teams make when assessing model safety.",
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
    "testing limitations",
    "model assessment",
    "adversarial testing",
    "machine learning validation",
    "security gaps"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Model Servers Are Nothing Like Normal Web Apps",
   "summary": "Learn why running a language model server is fundamentally different from serving a traditional web app, even when thousands of requests arrive at once. This video explains token-by-token generation, GPU batching, the latency-throughput tradeoff, and memory constraints from the key-value cache — the core challenges that make language model infrastructure complex.",
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
    "GPU inference",
    "batching",
    "throughput",
    "latency",
    "key-value cache",
    "token generation",
    "systems design",
    "LLM infrastructure",
    "web server"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: Why It's Better Than Static Batching",
   "summary": "Learn why naive static batching wastes GPU compute by forcing finished requests to wait, and how continuous batching schedules requests at the token level instead to fill idle slots instantly. You'll understand the key limits of continuous batching, see a worked example with five real requests, and be able to explain where people commonly misunderstand it.",
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
    "batch processing",
    "token generation",
    "request queueing",
    "compute efficiency",
    "machine learning",
    "inference optimization"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache and Paging Fix",
   "summary": "Learn why a single GPU can only serve a handful of requests despite having plenty of capacity, and how memory fragmentation from the KV cache causes the bottleneck. This video explains how applying the operating system paging technique to GPU memory—splitting the cache into fixed-size blocks and using a lookup table—solves fragmentation while enabling request batching, along with the common pitfalls to avoid.",
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
    "paging",
    "LLM serving",
    "token cache",
    "memory management",
    "batch serving",
    "block allocation"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "Learn three practical techniques for reducing model size and improving inference speed without sacrificing performance: quantization (rounding parameters to fewer bits), distillation (training a small model to imitate a large teacher model), and pruning (removing parameters that barely contribute to outputs). You'll also learn the critical mistakes engineers make when compressing models and why measuring on your own real tasks matters more than generic benchmarks.",
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
    "inference optimization",
    "LLM efficiency",
    "machine learning",
    "model size reduction",
    "parameter optimization",
    "neural networks"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "How Companies Run Custom Language Models for Hundreds of Customers",
   "summary": "Learn how companies serve hundreds of customers with personalized language models without running 500 separate copies. This video teaches the adapter pattern: one shared base model combined with tiny customer-specific add-ons, plus the routing system that keeps everything running efficiently.",
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
    "infrastructure",
    "fine-tuning",
    "GPU memory",
    "routers",
    "cold starts",
    "machine learning systems"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How AI Guesses Ahead to Speed Up Generation",
   "summary": "Learn how speculative decoding uses a small, fast draft model to guess multiple tokens ahead while a large, trusted model verifies them all at once—speeding up AI responses without sacrificing quality. You'll understand why this works, what can go wrong in practice, and how the output stays exactly as good as it would have been without the optimization.",
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
    "large language models",
    "token generation",
    "inference optimization",
    "draft model",
    "target model",
    "AI performance",
    "machine learning"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Use Multiple GPUs for Large Language Models",
   "summary": "When one GPU isn't enough for serving a large language model, there are actually three fundamentally different approaches to add more: data parallelism (copies of the model), tensor parallelism (splitting individual calculations), and pipeline parallelism (splitting the model into processing stages). Learn when to use each method and the common mistakes teams make when implementing them.",
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
    "large language models",
    "data parallelism",
    "tensor parallelism",
    "pipeline parallelism",
    "distributed computing",
    "model scaling",
    "inference optimization"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Running LLMs in Production: Monitoring and Cost",
   "summary": "Learn what actually matters when you deploy an LLM to real users—not average latency, but tail latency and time-to-first-token. This video teaches you how to set realistic performance promises, design dashboards that catch problems before they spiral, and understand the real drivers of your inference costs.",
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
    "production monitoring",
    "latency",
    "time-to-first-token",
    "autoscaling",
    "cost optimization",
    "queue depth",
    "p99 latency",
    "dashboard design",
    "inference"
   ],
   "src": "/media/learn/serving/serving-08.mp4",
   "poster": "/media/learn/serving/serving-08.jpg",
   "captions": "/media/learn/serving/serving-08.vtt"
  }
 ];

export const LEARNING: Lesson[] = [
  {
   "n": 1,
   "title": "What Does It Mean for a Model to Learn?",
   "summary": "Learn what \"fitting\" actually means when we train a machine learning model on data, and why memorizing every example is different from learning a true pattern. This video explains the critical distinction between training and test sets, and why checking your model on unseen data is the only way to know if it truly learned or just memorized noise.",
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
    "training set",
    "test set",
    "model learning",
    "generalization",
    "memorization",
    "regression",
    "model evaluation"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Even Mean? The Math Behind Linear Models",
   "summary": "Learn what \"best fit\" actually means when fitting a line to data—it's not a vibe, it's something you can measure. This video builds from the linear model equation through residuals and the sum of squared errors, so you understand exactly what we're optimizing when we search for the line that best predicts your data.",
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
    "least squares",
    "sum of squared errors",
    "linear model",
    "machine learning fundamentals",
    "prediction error",
    "model fitting"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Models Learn: Loss Functions and Gradient Descent",
   "summary": "This video explains the core mechanism of how machine learning models actually learn. You'll see how models measure their errors using a loss function, use calculus to find the downhill direction of improvement, and apply gradient descent to automatically adjust all the knobs (parameters) in the right way. By the end, you'll understand the complete loop: guess, measure wrongness, and nudge toward better predictions.",
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
    "neural networks",
    "optimization",
    "calculus",
    "learning rate",
    "parameters",
    "model training",
    "error measurement"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting vs Underfitting: Finding the Right Model Complexity",
   "summary": "Learn why a model that perfectly matches your training data can fail catastrophically on new data, and how to navigate the bias-variance tradeoff. You'll discover the practical techniques for catching overfitting before deployment: train/validation/test splits, regularization, and choosing the right model complexity.",
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
    "model validation",
    "bias-variance tradeoff",
    "regularization",
    "test set",
    "machine learning",
    "model complexity",
    "generalization",
    "training data"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "Logistic Regression: Predicting Categories Instead of Numbers",
   "summary": "Learn how to shift from predicting quantities to predicting categories using logistic regression. This video explains why a straight line fails for classification problems, introduces the sigmoid function to keep predictions between 0 and 1, and shows how to set decision boundaries to make yes-or-no predictions based on probabilities.",
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
    "machine learning",
    "decision boundary",
    "probability",
    "categorical prediction",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Confusion Matrices and Better Metrics",
   "summary": "A high accuracy score can hide serious problems when your data is imbalanced—learn why a model that's always wrong can still seem 92% correct. This video teaches you to use confusion matrices, precision, and recall to catch misleading models, and shows why testing on fresh data is essential.",
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
    "machine learning metrics",
    "model evaluation",
    "training vs testing",
    "false positives",
    "false negatives"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "The Model That Was Too Good: Spotting Data Leakage",
   "summary": "Learn why a perfect-looking model on test data can fail silently in the real world, through the lens of building an apartment rent predictor. This video teaches you to recognize data leakage—when information sneaks into training that wouldn't exist at prediction time—and master the practical foundations of clean feature engineering: scaling, encoding categories, handling missing values, and avoiding the subtle ways test data can contaminate your results.",
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
    "test train split",
    "model validation",
    "one-hot encoding",
    "feature scaling"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "Machine Learning Pipeline End-to-End: Clean, Train, Test",
   "summary": "Watch all seven steps of a complete machine learning pipeline work together in one go—from cleaning raw apartment rental data through building features, training a model with gradient descent, and validating it honestly on unseen test data. You'll see exactly how data scientists go from messy raw numbers to a formula that predicts rent based on size, distance, age, and floor, along with three critical mistakes to avoid.",
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
    "data cleaning",
    "train-test split",
    "regularization",
    "overfitting",
    "feature engineering",
    "loss function",
    "pipeline",
    "linear regression"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Fairly",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation provides a more reliable estimate of model performance. This video shows you how to split data into k folds, rotate test sets across multiple rounds, and use the averaged error to fairly compare different models.",
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
    "data science",
    "machine learning",
    "model comparison",
    "test set",
    "data leakage",
    "preprocessing"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: Predicting Rent with Yes-or-No Questions",
   "summary": "Learn how decision trees make predictions by asking a series of yes-or-no questions about data, starting from a root node and branching down to leaf nodes that provide answers. You'll understand how trees choose which questions to ask by measuring variance or impurity, and discover the critical danger of overfitting when trees grow too deep and memorize individual data points instead of learning real patterns.",
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
    "prediction",
    "variance",
    "impurity",
    "overfitting",
    "machine learning",
    "data splitting",
    "tree growth control"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Bagging and Random Forests: Combining Weak Models",
   "summary": "Learn why training many imperfect models and averaging their predictions often beats building one carefully optimized model. This video walks through bootstrap sampling, bagging, and random forests using real apartment pricing data, showing how to reduce prediction wobble through ensemble methods that exploit the randomness in your training data.",
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
    "ensemble methods",
    "decision trees",
    "variance reduction",
    "machine learning",
    "prediction averaging",
    "bootstrap aggregating"
   ],
   "src": "/media/learn/learning/learning-11.mp4",
   "poster": "/media/learn/learning/learning-11.jpg",
   "captions": "/media/learn/learning/learning-11.vtt"
  },
  {
   "n": 12,
   "title": "Hyperparameters: Choosing Settings Before Training Starts",
   "summary": "Learn the difference between parameters (values the model learns) and hyperparameters (settings you choose before training), and why it matters that the wrong hyperparameter setting can cause either overfitting or underfitting. This video teaches you how to use validation sets and grid search to systematically find good hyperparameter values, and warns against common mistakes like peeking at your test set during tuning.",
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
    "lambda",
    "grid search",
    "cross-validation",
    "overfitting",
    "test set"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Imbalanced Classification: Accuracy Lies and How to Catch Scams",
   "summary": "Learn why accuracy can be a meaningless metric when predicting rare events, like fraud detection, and discover how a model can appear correct 99% of the time while catching zero scams. You'll master the confusion matrix, precision, recall, and the threshold tradeoff, then apply resampling and class weights to train models that actually work on imbalanced data.",
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
    "imbalanced classification",
    "accuracy trap",
    "confusion matrix",
    "precision recall",
    "class imbalance",
    "resampling",
    "class weights",
    "threshold",
    "fraud detection",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Unsupervised Learning and K-Means Clustering",
   "summary": "Learn unsupervised learning: how to find hidden structure and groups in data that has no answer key. This video teaches k-means clustering, the most common method for splitting data into groups, and covers practical issues like choosing the right number of clusters and scaling features correctly.",
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
    "data groups",
    "centroids",
    "elbow method",
    "feature scaling",
    "inertia"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Dimensionality Reduction with Principal Component Analysis",
   "summary": "Learn how to handle datasets with too many features by understanding the curse of dimensionality and using Principal Component Analysis (PCA) to find the most important directions in your data. This video teaches you how PCA identifies and ranks new features that capture the key variance in your dataset, while avoiding common mistakes like forgetting to standardize your columns.",
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
    "feature selection",
    "covariance matrix",
    "eigenvectors",
    "data preprocessing",
    "variance",
    "correlation",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "Deploying ML Models: Calibration, Explanation, and Drift",
   "summary": "A trained model with good test accuracy isn't ready to deploy—you need to ensure its confidence scores are honest, explain individual decisions to stakeholders, and monitor for drift as real-world data changes over time. This video teaches the three critical checks that separate lab success from production reliability, using a loan approval model as a running example.",
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
    "machine learning deployment",
    "model calibration",
    "feature explanation",
    "data drift",
    "SHAP",
    "temperature scaling",
    "model monitoring",
    "confidence confidence",
    "production ML",
    "interpretability"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks: From Logistic Regression to Stacked Neurons",
   "summary": "Discover why neural networks aren't actually new—logistic regression is just one neuron. Learn what happens when you stack neurons together and why adding a nonlinearity between layers is the crucial ingredient that makes a neural network powerful enough to solve problems a single line cannot. By the end, you'll understand exactly why with algebra, not just diagrams.",
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
    "neurons",
    "activation functions",
    "nonlinearity",
    "hidden layers",
    "deep learning",
    "overfitting",
    "parameters"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "What Hidden Units Actually Compute in Neural Networks",
   "summary": "Learn what happens inside a neural network's hidden layer and how activation functions like ReLU allow networks to learn non-linear patterns. By the end, you'll understand that hidden units detect weighted combinations of inputs (not individual features), why ReLU outperforms sigmoid, and how to choose between adding more units or more layers when designing networks.",
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
    "deep learning",
    "feature learning",
    "network architecture",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: Computing Gradients Through Deep Networks",
   "summary": "Learn how to compute gradients for weights buried deep in a neural network using the chain rule applied repeatedly. After working through a concrete example with real numbers, you'll understand backpropagation as an efficient method for calculating derivatives layer by layer, and see why it's essential for training deep networks while avoiding vanishing and exploding gradients.",
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
    "derivatives",
    "forward pass",
    "backward pass",
    "ReLU",
    "vanishing gradients"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Neural Networks: The Knobs Between Math and Practice",
   "summary": "Gradient descent tells you the direction to step, but not where to start, how far to step, or when to stop—those are hyperparameters that can make or break training. This video teaches the practical knobs that govern model training: weight initialization, learning rate, batch size, epochs, and regularization techniques like dropout. Learn to read loss curves and diagnose training failures so you can actually convert mathematical understanding into working models.",
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
    "hyperparameter tuning",
    "learning rate",
    "batch size",
    "weight initialization",
    "gradient descent",
    "regularization",
    "dropout",
    "loss curves",
    "model training"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutions: Why pixel grids need a different architecture",
   "summary": "Learn why fully connected layers fail on images and how convolutional kernels solve the problem. This video teaches parameter sharing, locality, and translation invariance—the three core ideas that make convolutions efficient for images—and shows how stacking convolution layers builds up from edges to textures to parts.",
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
    "convolution",
    "convolutional neural networks",
    "CNN",
    "image processing",
    "kernels",
    "filters",
    "parameter sharing",
    "deep learning",
    "neural networks"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Words Into Numbers",
   "summary": "Learn why you can't feed raw words into machine learning models and how dense vectors trained from context solve the problem. This video shows why naive approaches like numbering words or one-hot encoding fail, then builds up to embeddings—the standard way to represent words as meaningful numbers that capture relationships and proximity in trained vector space.",
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
    "neural networks",
    "context",
    "vector spaces"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "How Transformers Work: Attention, Query, Key, Value",
   "summary": "This video builds transformers from first principles by solving the problem of fading memory in sequential processing: how to let a neural network look at all words in a sentence at once, weighted by relevance, instead of processing left-to-right. You'll learn how query, key, and value vectors work like a database lookup, how to compute attention scores by hand, and how to assemble these pieces—multi-head attention, feed-forward layers, positional encoding, and residuals—into a complete large language model architecture.",
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
    "query key value",
    "large language models",
    "neural networks",
    "sequence processing",
    "multi-head attention",
    "positional encoding",
    "deep learning",
    "gradient descent"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When to Use Deep Learning vs. Gradient Boosting on Tabular Data",
   "summary": "This video explains why deep learning isn't the universal solution—and when gradient boosting actually wins on tabular data like rent prediction. You'll learn the five key questions to ask before choosing a model: data size, input type, compute costs, explainability needs, and whether a pretrained model exists.",
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
    "machine learning",
    "neural networks",
    "decision trees",
    "transfer learning",
    "model evaluation",
    "feature engineering"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series Data & Chronological Splits: Why Random Splits Fail",
   "summary": "Learn why standard random train-test splits leak the future into the past when working with time-ordered data, and how it causes models to cheat. You'll discover chronological splits and rolling-origin validation—the proper way to evaluate time series models—plus how to audit any split for hidden leakage from delayed labels and slow-arriving features.",
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
    "chronological split",
    "rolling-origin validation",
    "data leakage",
    "autocorrelation",
    "walk-forward validation",
    "model evaluation",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: From Persistence to Prediction Intervals",
   "summary": "Learn how to build effective time series forecasts by starting with a simple persistence baseline, decomposing data into trend and seasonality, and converting forecasting into a supervised regression problem with lag features. You'll understand key metrics, the horizon problem, common pitfalls, and why honest prediction intervals beat false precision.",
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
    "seasonal decomposition",
    "prediction intervals",
    "forecasting metrics",
    "MAE RMSE",
    "horizon problem",
    "regression"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Your Model Can't Answer Action Questions",
   "summary": "Learn the critical difference between predictive questions (\"what will happen\") and causal questions (\"what will happen if I do this\")—and why a model with perfect test-set accuracy can still be the wrong basis for action. You'll see how confounders hide in plain sight and discover the discipline needed before building anything: knowing which kind of question you're actually trying to answer.",
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
    "causal inference",
    "confounders",
    "counterfactuals",
    "observational data",
    "model interpretation",
    "decision-making"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Randomized Experiments: From Correlation to Causation",
   "summary": "Learn how randomization lets you isolate true causal effects by ensuring treatment and control groups are balanced on all traits—measured and unmeasured. This lesson walks through a university shuttle-stop experiment, showing you how to design experiments correctly, interpret their results, and avoid three common pitfalls: peeking at results early, testing multiple variants and cherry-picking, and interference between groups.",
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
    "randomized experiments",
    "causal inference",
    "treatment and control",
    "statistical significance",
    "experimental design",
    "confounding",
    "p-hacking",
    "multiple testing",
    "causation vs correlation"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Causation vs. Correlation: Testing the Shuttle's Effect on Rent",
   "summary": "When you can't run a randomized experiment, how do you know if a treatment actually caused an outcome? This video teaches three techniques for causal inference—controlling for confounders, difference-in-differences, and matching—and the critical trap to avoid: controlling for the wrong variables. You'll learn how to design a causal analysis and report its conclusions carefully.",
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
    "causal inference",
    "confounding variables",
    "difference in differences",
    "matching",
    "regression",
    "confounder",
    "natural experiment",
    "observational data",
    "causal diagrams"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Reinforcement Learning: Q-Learning and the Rent-Setting Agent",
   "summary": "This video introduces reinforcement learning through a practical example: an agent that must set apartment rent each month and learn from the market's response. You'll learn how agents navigate the credit assignment problem—figuring out which past decisions caused which outcomes—and how Q-learning uses state-action pairs and discount factors to train effective policies with simulators instead of costly real-world experimentation.",
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
    "state-action pairs",
    "discount factor",
    "policy learning",
    "simulator training",
    "Markov decision process",
    "exploration exploitation"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "Exploration vs. Exploitation: The Multi-Armed Bandit Problem",
   "summary": "Learn how to make smart decisions when you don't know all the answers yet. This video teaches the tension between exploiting what looks good now and exploring to find what's actually best, using the apartment-pricing problem as a guide through strategies like epsilon-greedy, UCB, and Thompson sampling.",
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
    "multi-armed bandit",
    "exploration exploitation",
    "UCB algorithm",
    "epsilon-greedy",
    "Thompson sampling",
    "regret",
    "decision making",
    "A/B testing",
    "online learning",
    "statistical inference"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Paradigms: Choosing the Right ML Tool for Your Question",
   "summary": "Learn to match your data question to the right machine learning paradigm before you write any code. This video teaches supervised learning (prediction with labels), unsupervised learning (finding structure), causal inference (testing interventions), and reinforcement learning (repeated action and observation)—and shows you how to recognize which one your question actually needs.",
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
    "data analysis decision-making",
    "apartment rental prediction",
    "algorithm choice"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn how regularization fixes overfitting by penalizing large coefficients. This video builds ridge regression, lasso, and elastic net from scratch, showing how each penalty works geometrically and how to choose the penalty strength with cross-validation.",
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
    "coefficients",
    "feature selection"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: Sequential Corrections Beat the Crowd",
   "summary": "Learn how gradient boosting trains a sequence of weak models to fix the errors of the previous ones, turning residuals into correction steps that iteratively improve predictions. See the step-by-step mechanics with a real apartment pricing example, understand why it's called \"gradient\" boosting, and find out how modern libraries like XGBoost build on this core idea. This video fills a critical gap in the series and covers one of the most practical techniques for tabular data in real jobs.",
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
    "stumps",
    "ensemble methods",
    "XGBoost",
    "AdaBoost",
    "tabular data",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Clustering's Fine Print: K-Means, Hierarchical, and DBSCAN",
   "summary": "K-means assumes round clusters and a fixed number chosen in advance—assumptions that fail on real data like apartment rentals along multiple roads. This lesson covers three clustering methods with different tradeoffs: hierarchical clustering lets you choose the number of clusters by reading a dendrogram, and DBSCAN groups by density to handle any shape including thin bands and outliers. By the end, you'll know which algorithm fits your data's actual structure.",
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
    "unsupervised learning",
    "algorithm comparison"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Dimensionality Reduction Beyond PCA: t-SNE and UMAP",
   "summary": "Learn why PCA fails on curved data structures and when to use t-SNE or UMAP instead. This lesson teaches you how each method works, what perplexity controls, and crucially, how to correctly interpret the resulting visualizations without falling into common pitfalls.",
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
    "data visualization",
    "perplexity",
    "neighbours",
    "curved structure",
    "cluster analysis",
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
   "title": "Counting with Multiplication vs. Addition: When and Why",
   "summary": "Learn why we multiply to count arrangements and codes instead of adding—and discover the fundamental principle behind the multiplication rule. Using rectangles and trees, you'll visualize independent stages of choice and discover when to multiply versus when to add for separate cases.",
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
    "multiplication principle",
    "combinatorics",
    "permutations",
    "with replacement",
    "without replacement",
    "independent choices",
    "disjoint cases",
    "visual learning",
    "problem-solving"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the number of ways to arrange objects in a specific order using the multiplication principle. You'll master permutations—from arranging all items to selecting and arranging only some—and discover the key difference between permutations and combinations: whether order matters.",
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
    "arrangements",
    "multiplication principle",
    "counting",
    "factorial",
    "combinatorics",
    "order matters",
    "arrangements and selections",
    "permutation formula"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: Counting Groups When Order Doesn't Matter",
   "summary": "Learn how to count groups of items when the order doesn't matter — like picking a committee versus assigning ranked roles. This video builds from the multiplication rule to derive the combinations formula (n choose k), and shows how to recognize when to use it by asking whether swapping two items creates a different situation.",
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
    "multiplication rule",
    "binomial coefficient",
    "committees",
    "lottery",
    "order doesn't matter"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "Combinatorial Identities: Structure and Shortcuts",
   "summary": "Learn why binomial coefficients C(n,k) have deep structure beyond just being formulas to compute. This video proves four essential identities—symmetry, Pascal's recurrence, the binomial theorem, and the sum 2^n—by using counting arguments and bijections rather than algebra, revealing practical shortcuts for calculation and real understanding of why these identities are true.",
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
    "counting proofs",
    "bijection",
    "hockey stick identity",
    "combinatorics"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "The Four Flavors of Counting Problems",
   "summary": "Learn how to solve any counting problem by asking just two questions: does order matter, and can items repeat? This video reveals why the same four items can give wildly different answers depending on the setup, and teaches you which counting method applies to each of four distinct problem types—from passwords to committees to podiums.",
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
    "counting problems",
    "permutations",
    "combinations",
    "order matters",
    "repetition",
    "multiplication principle",
    "discrete math"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Counting Problems: Breaking Into Stages",
   "summary": "Learn how to translate real-world counting problems into sequences of clear stages, which is the hard part that comes before using the multiplication principle. You'll discover when order matters in your outcomes, how to correctly count choices at each stage, and how repeats work differently across problems like padlocks versus task assignments. After watching, you'll be able to set up and model counting problems correctly instead of jumping straight to multiplication.",
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
    "problem modeling",
    "stages",
    "order matters",
    "combinations",
    "word problems",
    "mathematical reasoning",
    "decision sequences"
   ],
   "src": "/media/learn/counting/counting-06.mp4",
   "poster": "/media/learn/counting/counting-06.jpg",
   "captions": "/media/learn/counting/counting-06.vtt"
  },
  {
   "n": 7,
   "title": "Stacking Counting Tools: Combinations, Permutations, and Restrictions",
   "summary": "Learn how to combine multiple counting techniques—like choosing then arranging, or subtracting bad cases—to solve harder combinatorics problems. This video walks through the most common mistakes on exams (double-counting, guessing instead of calculating, incorrect subtraction) and shows how to avoid them by working through multi-step problems that require stacking lessons together.",
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
    "combinations",
    "permutations",
    "counting problems",
    "inclusion-exclusion",
    "combinatorics",
    "problem-solving",
    "exam preparation",
    "multi-step techniques",
    "restrictions",
    "arrangements"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Sample Spaces and Events: The Language of Probability",
   "summary": "Learn how to describe what could happen in any probability experiment using sample spaces and events. This video teaches you the set operations—union, intersection, complement, and difference—that form the foundation of probability, then shows you how to translate English descriptions into precise mathematical notation using a sensor-testing scenario.",
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
    "sample space",
    "events",
    "probability",
    "set operations",
    "union",
    "intersection",
    "complement",
    "De Morgan's laws",
    "outcomes",
    "set notation"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability Axioms: The Definition of a Function",
   "summary": "This video defines probability formally as a function from events to numbers, introducing the three axioms that any probability function must satisfy: non-negativity, total probability equals one, and additivity for disjoint events. You'll learn why these rules matter, how to check them against familiar models like equally likely outcomes and relative frequency, and how to prove results like P(∅) = 0 directly from the axioms.",
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
    "disjoint events",
    "additivity",
    "sample space",
    "probability definition",
    "Kolmogorov axioms",
    "probability theory"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "The Addition Rule for Probability: Deriving the \"At Least One\" Trick",
   "summary": "Learn how to derive the complement rule, monotonicity, and the general addition rule directly from probability axioms—then use these tools to transform \"at least one\" problems from nightmarish multi-term expansions into simple one-step calculations. This video shows you why inclusion-exclusion works for overlapping events and teaches you the alternating pattern that extends from two events to three or more.",
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
    "addition rule",
    "complement rule",
    "inclusion-exclusion",
    "at least one",
    "axioms",
    "venn diagram",
    "disjoint events",
    "overlapping events",
    "monotonicity"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability: The Formula and Common Mistakes",
   "summary": "Learn when and how to apply the classical probability formula—dividing the count of favorable outcomes by the total count of possible outcomes. This lesson shows you why the formula only works when outcomes are equally likely, walks through worked examples including committees and sensor shipments, and highlights two critical mistakes to avoid when combining counting and probability.",
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
    "counting",
    "combinations",
    "equally likely outcomes",
    "worked examples",
    "common mistakes",
    "sample space",
    "events"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Continuity and Interpretations of Probability",
   "summary": "Learn what happens to probability when events form an infinite nested sequence, and what a probability number actually means for a single case. This video explores the continuity axiom and its proof through disjoint rings, then clarifies two rigorous interpretations: long-run frequency and degree of belief, showing why the axioms alone cannot tell you which is intended.",
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
    "nested sets",
    "limit of probabilities",
    "frequentist interpretation",
    "subjective probability",
    "degree of belief",
    "probability axioms",
    "defect detection",
    "probability meaning"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proving Theorems from Probability Axioms",
   "summary": "This lesson teaches the four core techniques for constructing rigorous proofs in probability: disjoint decomposition, the complement trick, monotonicity, and De Morgan's laws. You'll see these moves applied to prove key results like the addition rule for three events, Boole's inequality, and properties of zero-probability events, and learn what full-marks proof writing looks like on an exam.",
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
    "complement",
    "De Morgan's laws",
    "exam preparation"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Definition and the Axioms",
   "summary": "Learn what conditional probability is and why it's genuinely a probability measure. This video shows how conditioning restricts the sample space, derives the formula P(A given B) = P(A and B) / P(B), and demonstrates the critical mistake of confusing P(A given B) with P(B given A)—the foundation for Bayes' theorem.",
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
    "counting outcomes",
    "sensor defects",
    "probability measure",
    "complement rule"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "The Multiplication Rule and Probability Trees",
   "summary": "Learn why the multiplication rule (P(A and B) = P(B) × P(A|B)) is true and how probability trees visualize multi-stage random processes. You'll master drawing and reading trees for sampling with and without replacement, spot common mistakes, and calculate exact probabilities for sequences of dependent events.",
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
    "sampling without replacement",
    "dependent events",
    "independence",
    "sequential probability",
    "branching diagrams",
    "multi-stage experiments"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "The Law of Total Probability: Partitioning Sample Spaces",
   "summary": "Learn how to find the probability of an event when there are multiple disjoint paths or causes leading to it. You'll discover what makes a valid partition of a sample space, see why the law of total probability works from first principles, and practice applying it to real problems like finding defect rates across multiple suppliers.",
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
    "sample space partition",
    "probability theory",
    "weighted average",
    "robotics",
    "sensor defects",
    "axioms of probability"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Theorem: Reversing Conditional Probability",
   "summary": "Learn how to flip conditional probabilities backwards using Bayes' theorem, and discover why a 95% accurate test can still give misleading results. Through concrete examples like defective sensors and rare disease testing, you'll understand the base rate fallacy and how to update beliefs correctly when new evidence arrives.",
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
    "posterior probability",
    "likelihood",
    "prior probability",
    "statistical reasoning",
    "diagnostic testing",
    "probability reversal"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Precise Mathematical Definition",
   "summary": "Independence isn't about intuition or whether events \"feel\" connected—it's a precise equation that checks whether P(A and B) = P(A) × P(B). You'll learn why events can be physically connected yet mathematically independent, why disjoint events are actually dependent, and how to verify independence for three or more events using the complete multiplication rule.",
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
    "mutual independence",
    "binomial",
    "repeated trials",
    "product rule"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems: Conditional Probability, Bayes, and Total Probability",
   "summary": "Work through six realistic problems using conditional probability, Bayes' theorem, total probability, and independence—without being told which tool to use. Learn to identify when to apply each formula, avoid common reversal and overlap errors, and develop the core skill of selecting the right method under pressure.",
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
    "probability problems",
    "test preparation",
    "problem solving",
    "exam skills",
    "partition",
    "without replacement"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Strategy: Recognizing Counting and Probability Problems Under Pressure",
   "summary": "Learn the decision map that separates counting problems from probability problems, and identifies which specific tool (permutations, combinations, Bayes, conditional probability, inclusion-exclusion) each unlabelled exam question requires. Work through five real problems without advance labels, then master the four habits—write the sample space, name the tool aloud, sanity-check your answer—that let you recognize the right formula in under ten seconds when pressure hits.",
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
    "conditional probability",
    "exam strategy",
    "problem recognition",
    "decision tree",
    "unlabelled problems"
   ],
   "src": "/media/learn/counting/counting-20.mp4",
   "poster": "/media/learn/counting/counting-20.jpg",
   "captions": "/media/learn/counting/counting-20.vtt"
  }
 ];

export const PATTERNS: Lesson[] = [
  {
   "n": 1,
   "title": "Data-Mining Pipelines: From Questions to Decisions",
   "summary": "Learn the complete workflow of a real data-mining pipeline, from asking the right question through selection, preprocessing, modeling, and interpretation—using an actual bike-share dataset as a running example. Discover why most of the work happens before you touch any algorithm, and how to structure your approach so a number actually becomes a decision someone acts on.",
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
    "preprocessing",
    "data selection",
    "modeling",
    "interpretation",
    "bike-share",
    "workflow",
    "data cleaning",
    "decision-making"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Exploratory Data Analysis: Inspecting Your Data Before Building Models",
   "summary": "Learn the essential first step of any data science project: exploring your raw data to catch errors and understand its structure before you build a model. This lesson covers histograms, summary statistics, scatterplots, and how to identify missing values, outliers, and data errors using a bike-share dataset as a concrete example.",
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
    "histograms",
    "correlation",
    "outliers",
    "missing values",
    "data preprocessing",
    "statistics",
    "data cleaning",
    "mean vs median"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing and P-Values: The Logic Behind Statistical Significance",
   "summary": "Learn the core logic of hypothesis testing through a real example: did a new dock really increase trips, or was the change just random noise? This video walks you through formulating a null hypothesis, calculating a test statistic, understanding sampling distributions, and correctly interpreting p-values—including the most common misunderstandings. You'll also discover two critical traps: confusing statistical significance with practical importance, and the danger of testing multiple hypotheses until one looks significant.",
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
    "statistical significance",
    "sampling distribution",
    "inferential statistics",
    "multiple testing",
    "effect size",
    "data analysis"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: Building and Interpreting Honest Estimates",
   "summary": "Learn how to attach honest uncertainty to a single reported number—like an average trip duration—using confidence intervals. You'll discover why standard error (not standard deviation) matters for estimates, how sample size affects precision, and what \"95 percent confident\" actually means. By the end, you'll be able to build intervals, compare two groups visually, and distinguish between detecting a real difference and detecting one that actually matters.",
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
    "statistical estimation",
    "hypothesis testing",
    "effect size",
    "normal distribution",
    "statistical significance"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Claims Dissected: Before You Test, Ask These Four Questions",
   "summary": "Learn to catch flawed conclusions before they become decisions by applying four critical questions to any statistical claim. This video walks through six real-world claims from a meeting—on dock usage, rider types, weather effects, and more—showing which ones hide confounds, outliers, or data gaps. After watching, you'll know how to spot whether a claim is even testable before you run a single test.",
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
    "statistical claims",
    "data analysis",
    "null hypothesis",
    "outliers",
    "practical statistics",
    "critical thinking"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: Finding Patterns by Voting",
   "summary": "Learn the k-nearest neighbours algorithm by classifying a mystery bike trip using only past data and votes from similar trips. This video covers how distance works, why scaling matters, how to choose k, and when kNN is actually the right tool to use rather than fitting a formula.",
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
    "distance metric",
    "Euclidean distance",
    "bias-variance tradeoff",
    "feature scaling",
    "supervised learning"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality in k-Nearest Neighbors",
   "summary": "Learn why adding more features to k-nearest neighbors breaks the algorithm's core assumption that some points are genuinely closer than others. This video explains the geometric reason (most volume in high-dimensional space sits near the corners) and the data requirement (exponential growth), then shows three practical ways out: feature selection, feature engineering, and dimensionality reduction.",
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
    "k-nearest neighbors",
    "curse of dimensionality",
    "feature selection",
    "high-dimensional geometry",
    "machine learning",
    "distance metrics",
    "feature engineering",
    "data density",
    "indicator variables",
    "model validation"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes: Classification with Probability, Not Geometry",
   "summary": "Learn how to classify data using Bayes' rule and probability instead of distance-based methods. This video teaches the naive Bayes algorithm from first principles—how to flip conditional probabilities, handle the curse of high dimensions with independence assumptions, avoid the zero-probability trap with Laplace smoothing, and work in log space to prevent numerical underflow. You'll understand why this approach works despite its false assumptions, and how to avoid the four common pitfalls that trip up practitioners.",
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
    "machine learning",
    "feature independence",
    "log probabilities",
    "calibration"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning a Line from Mistakes",
   "summary": "Learn how the perceptron algorithm draws a decision boundary by computing a weighted sum of features and updating whenever it makes a wrong prediction. You'll see exactly how the algorithm learns from errors, understand the math behind the weight updates, and discover when this simple approach works and when it fails.",
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
    "weight updates",
    "linear separability",
    "bias term"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: Turning Predictions into Probabilities",
   "summary": "Learn how to move beyond binary classification to get probability scores that you can actually use for decision-making. This video shows you how the sigmoid function squashes a linear score into a probability between 0 and 1, how to interpret coefficients through odds ratios, and how to choose a threshold based on the cost of different mistakes.",
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
    "odds ratios",
    "cross-entropy loss",
    "machine learning",
    "threshold",
    "coefficients"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: Entropy, Information Gain, and How to Pick the Best Question",
   "summary": "Learn how decision trees make predictions by asking yes-or-no questions in sequence, and discover the math that picks which question to ask first. This lesson covers entropy and information gain—the core metrics used to build optimal trees—and shows you how to handle both categorical and numeric features without overfitting.",
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
    "classification",
    "machine learning",
    "tree split",
    "Gini impurity",
    "feature selection",
    "threshold selection",
    "tree building"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Stopping Decision Trees from Memorizing: Pruning and Regularization",
   "summary": "Learn why decision trees grown to full depth memorize training data instead of learning true patterns, and master two strategies to fix it: pre-pruning (stopping early with rules like depth caps and minimum leaf sizes) and post-pruning (growing then trimming with a validation set). By the end, you'll know how to read a properly constrained tree as plain if-then rules you can trust on new data.",
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
    "regularization",
    "validation set",
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
   "title": "Support Vector Machines: The Margin, Slack, and Hyperparameter C",
   "summary": "Learn how support vector machines find the best separating line by maximizing the margin between classes, not just any line that separates the data. Discover what support vectors are, how the soft margin handles messy real-world data with slack variables, and how the hyperparameter C controls the trade-off between margin width and tolerance for misclassification.",
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
    "margin maximization",
    "support vectors",
    "soft margin",
    "slack variables",
    "hyperparameter C",
    "classification",
    "optimization",
    "machine learning fundamentals",
    "SVM theory"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Data That Looks Inseparable",
   "summary": "Learn how to handle classification problems where no straight line can separate your classes. This lesson shows how kernel functions let support vector machines find curved boundaries by computing dot products in transformed feature spaces—without ever explicitly building those transformed features. You'll understand why polynomial and RBF kernels work, how gamma controls overfitting in RBF kernels, and when to actually use kernels versus sticking with linear classifiers.",
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
    "nonlinear classification",
    "feature transformation",
    "overfitting",
    "gamma parameter",
    "dot products",
    "machine learning"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "How to Choose a Classifier: Five Real Cases",
   "summary": "Learn to defend your choice of classifier—logistic regression, decision trees, k-nearest neighbours, naive Bayes, or kernel SVMs—by matching the model's assumptions to your actual data. Through five real bike-share scenarios, you'll see exactly when each algorithm fits best, how to compare them on training cost, prediction speed, data requirements, and interpretability, and why picking by leaderboard accuracy alone is a trap.",
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
    "support vector machines",
    "model assumptions",
    "interpretability",
    "algorithmic trade-offs"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Why One Test Split Isn't Enough",
   "summary": "Learn why a single train-test split can give you misleading results, and how k-fold cross-validation solves this problem by testing your model multiple ways. You'll see the step-by-step process of splitting data into folds, training and evaluating across all combinations, and averaging the results to get a trustworthy error estimate. The video also explains two critical mistakes to avoid and clarifies that cross-validation estimates how good your method is—not the final model you actually deploy.",
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
    "overfitting",
    "data validation",
    "predictive modeling"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Accuracy Isn't Enough: Precision, Recall, and Choosing the Right Metric",
   "summary": "Learn why accuracy can be dangerously misleading when predicting rare events, and discover the four confusion matrix outcomes that tell the real story. This video teaches you precision, recall, F1, ROC curves, and—most importantly—how to choose a decision threshold based on the actual costs of different kinds of mistakes.",
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
    "precision and recall",
    "F1 score",
    "ROC curve",
    "classification metrics",
    "threshold selection",
    "imbalanced data",
    "cost-based decisions",
    "machine learning evaluation",
    "logistic regression"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: Data Leakage & Validation Traps",
   "summary": "A model with a 99% accuracy score can still be completely useless if the setup is wrong. This video reveals five different ways a seemingly perfect model can fail—leaking information from the future, contaminating the test set, comparing against the wrong baseline, getting lucky on validation data, and ignoring time. You'll learn a five-question pre-flight checklist to catch these bugs before investing in model training.",
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
    "train-test split",
    "data science mistakes",
    "feature engineering",
    "evaluation metrics",
    "machine learning pitfalls",
    "class imbalance",
    "temporal data"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "One-Page Cheat Sheet: Six ML Algorithms Compared",
   "summary": "Learn how to compress six machine learning algorithms (kNN, naive Bayes, perceptron, logistic regression, decision trees, and SVM) into one reference page that fits in your hand. You'll build a systematic comparison table answering eight key questions about each method, learn the essential formulas with extreme-case checks, and use a four-question flowchart to choose the right algorithm for any classification problem.",
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
    "algorithms",
    "cheat sheet",
    "kNN",
    "naive Bayes",
    "decision trees",
    "logistic regression",
    "perceptron",
    "SVM",
    "classification"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Prep: From Derivations to Problem Spotting",
   "summary": "Learn the four core strategies that examiners test repeatedly: spotting whether a problem is regression, classification, or clustering; deriving key formulas like least squares and gradient descent from first principles; understanding bias and variance as causes rather than synonyms for overfitting; and avoiding common errors like missing units and confusing training versus test error. After watching, you'll be able to reproduce derivations with pen and paper, identify problem types instantly, and structure your exam answers to capture partial credit.",
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
    "exam preparation",
    "machine learning",
    "regression",
    "classification",
    "clustering",
    "least squares",
    "gradient descent",
    "bias variance",
    "derivation",
    "decision trees"
   ],
   "src": "/media/learn/patterns/patterns-20.mp4",
   "poster": "/media/learn/patterns/patterns-20.jpg",
   "captions": "/media/learn/patterns/patterns-20.vtt"
  }
 ];

export const HOWITWORKS: Lesson[] = [
  {
   "n": 1,
   "title": "Why Automated Lesson Production Requires Quality Constraints",
   "summary": "This video explains the problem that drives automated lesson production: traditional video lessons take a week each to make, which doesn't scale to hundreds of courses. You'll learn why the real challenge isn't just speed and cost, but building a system that automatically catches errors—because polished-looking wrong information is far more dangerous than obvious failures.",
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
    "automation",
    "quality control",
    "educational video",
    "scaling",
    "pipeline design",
    "error detection",
    "curriculum development"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why We Don't Let Models Write Animation Code",
   "summary": "Learn why direct code generation for animations fails in practice and how the scene/1 contract solves the problem through validation before rendering. You'll understand the architectural shift from \"model programs\" to \"model describes, code validates\"—and why that gap between output and checking matters.",
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
    "architecture",
    "Manim",
    "system design",
    "safety",
    "contracts",
    "rendering",
    "AI mistakes"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "The Nine Stops: From Brief to Publish",
   "summary": "Learn the complete workflow for turning a single sentence into a finished teaching video. This video maps out all nine named stops in the process—from the initial brief through the final human-approved publish step—showing you exactly where each artifact is created and checked.",
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
    "workflow",
    "video production",
    "automation",
    "rendering",
    "validation",
    "lesson structure",
    "process mapping",
    "quality control",
    "brief to publish",
    "scene description"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "How scene_spec.py Validates Teaching Visuals Before Rendering",
   "summary": "Learn how teaching videos are quality-checked before a single pixel is rendered by validating the JSON spec—the plan for a scene—instead of the final image itself. This video covers the four core rules that scene_spec.py enforces: no bare numbers on diagram labels, never ending on your weakest figure, grids doing arithmetic must have numeric axes, and icon summaries require captions to distinguish them from collapsing content. You'll understand the retry loop that rewrites failing specs up to five times and why some borderline judgement calls are kept anyway.",
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
    "video production",
    "scene specification",
    "JSON validation",
    "teaching visuals",
    "diagram rules",
    "quality control",
    "rendering pipeline",
    "content validation"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks Report Defects That Don't Exist",
   "summary": "Learn why automated checks often blame the artifact for the check's own failures—a pattern that hides real problems. Through six concrete cases from a production pipeline, discover why a successful-looking status is more dangerous than a crash, and master the one rule that matters: always verify the actual artifact yourself.",
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
    "pipeline",
    "testing",
    "automation",
    "quality assurance",
    "debugging",
    "systems thinking",
    "checks and guards",
    "status fields",
    "production bugs",
    "verification"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "Five Pieces: The Architecture of a Video Generation Pipeline",
   "summary": "This video breaks down the five core components of a video generation system—the AI service, contract, renderer, datastore, and harness—and explains how they communicate and where most bugs originate. You'll learn the architectural boundaries that separate concerns, why certain pieces can only see limited data, and where new engineers typically make mistakes when extending the system.",
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
    "contracts",
    "renderer",
    "DynamoDB",
    "S3",
    "named fields",
    "pure functions"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "AWS Deployment: Where the Pipeline Actually Runs",
   "summary": "Learn the concrete AWS services that power a video rendering pipeline: why renders launch on ECS Fargate instead of persistent servers, how to pin container images by digest to avoid silent failures, and where S3, DynamoDB, and CloudFront fit into the system. You'll understand the account quotas, caching strategies, and security gaps that cause real pain when missed.",
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
    "container deployment",
    "S3",
    "DynamoDB",
    "CloudFront",
    "infrastructure",
    "DevOps",
    "production systems",
    "cost optimization"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "The Cost Model: Where Your Lesson Dollars Go",
   "summary": "Learn the three cost drivers behind lesson generation—model calls, speech synthesis, and Fargate rendering time—and why the real cost lever is catching defects early, not picking cheaper models. You'll see a real example where two identical lessons cost $2.39 and $7.22, and understand exactly why.",
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
    "lesson economics",
    "model calls",
    "speech synthesis",
    "rendering",
    "Fargate",
    "quality rubric",
    "caching",
    "pipeline costs",
    "defect detection"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "The Business Case: Why Automated Video Production Matters",
   "summary": "Learn the three core capabilities that make automated lesson production valuable to organizations: building affordable curricula at scale, remixing lessons cheaply when material changes, and serving different audiences from a single brief. Discover where the actual competitive advantage sits—not in the pipeline diagram itself, but in the accumulated contract rules and failure catalogue that come from lessons shipped.",
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
    "automated video production",
    "curriculum design",
    "scalability",
    "automation",
    "quality gates",
    "human review",
    "lesson production",
    "competitive advantage",
    "technical contracts"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why These Optimizations Didn't Work",
   "summary": "This lesson walks through five optimization ideas that were tested and rejected during pipeline development, showing the actual evidence that killed each one. You'll learn why cheaper animation code generation failed, why automatic publishing stays manual, why text similarity checks don't catch repeats, why hard length limits backfire, and why banning full-frame layouts would have been a mistake. The core lesson: always test ideas against real known-answer cases instead of relying on intuition.",
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
    "animation code generation",
    "lesson validation",
    "known-answer testing",
    "decision-making",
    "data-driven decisions"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "Random Variables: Function, Not Value",
   "summary": "This video reveals what random variables actually are: functions that map sample space outcomes to numbers, not mysterious values waiting to be revealed. You'll learn the critical distinction between discrete and continuous random variables, understand what notation like P(X=3) really means, and see why this foundation is essential for computing probabilities and statistics downstream.",
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
    "discrete vs continuous",
    "sample space",
    "probability notation",
    "functions",
    "helpdesk example",
    "foundations"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF and CDF: Two Ways to Describe a Distribution",
   "summary": "Learn the two standard ways to write down a probability distribution: the Probability Mass Function (PMF), which gives the exact probability of each value, and the Cumulative Distribution Function (CDF), which gives the probability of being at or below a value. You'll see how these two descriptions relate to each other and which one to use for different types of questions about discrete random variables.",
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
    "probability distribution",
    "random variable",
    "discrete distribution",
    "probability tables",
    "statistics fundamentals"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expectation: Definition, Properties, and LOTUS",
   "summary": "Learn how expectation summarizes a probability distribution as a single number — not by finding the tallest bar, but by balancing the distribution like a seesaw. This video teaches you the formal definition, key properties like linearity, and the law of the unconscious statistician (LOTUS) for handling functions of random variables.",
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
    "balance point",
    "discrete distributions"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Spread",
   "summary": "Two datasets can have identical averages but wildly different patterns—this video teaches variance and standard deviation, the tools that measure spread around the mean. You'll learn why squaring deviations works better than absolute value, the practical shortcut formula for computing variance, and how to report results in real units using standard deviation.",
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
    "probability",
    "expected value",
    "mean absolute deviation",
    "deviation",
    "distribution",
    "statistics",
    "data analysis"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Expectation and Variance: Six Exam-Speed Problems",
   "summary": "Learn to solve expectation and variance problems quickly and accurately under exam conditions. This workshop covers six different problem types—from basic PMF calculations to function transforms—using a consistent method: identify what's asked, pick the right tool, compute, and sanity-check your answer.",
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
    "probability",
    "exam practice",
    "linearity of expectation",
    "random variables",
    "computational methods",
    "problem-solving",
    "helpdesk problems"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "Binomial Distribution: Counting Successes Across Fixed Trials",
   "summary": "Learn how to find the probability distribution for the number of successes across a fixed number of independent trials—like how many support tickets get resolved on first contact. You'll derive the binomial PMF from first principles, calculate means and variances, and discover the four essential conditions that must hold before applying this model.",
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
    "counting problems",
    "binomial coefficients",
    "expected value",
    "variance",
    "independence",
    "success probability"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Counting Events Across Time",
   "summary": "Learn how to model rare events arriving over time—like support tickets or customer calls—when you don't know a fixed upper limit. This video derives the Poisson distribution from first principles and teaches you when to apply it, what assumptions it requires, and how to catch it when those assumptions break down.",
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
    "event counting",
    "rates",
    "random events",
    "stochastic processes",
    "binomial approximation",
    "mean equals variance",
    "statistical assumptions"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric and Negative Binomial Distributions: Waiting for Success",
   "summary": "This video flips the probability question: instead of fixing the number of tries and counting successes, we fix what counts as success and ask how many tries until it happens. You'll learn the geometric and negative binomial PMFs, understand why long streaks don't make success more likely (memorylessness), and see how these distributions answer a fundamentally different question than binomial or Poisson.",
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
    "memorylessness",
    "waiting time",
    "probability mass function",
    "escalation",
    "gambler's fallacy",
    "independence",
    "success probability"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "How to Recognize Binomial, Poisson, Geometric, and Negative Binomial Distributions",
   "summary": "Learn a three-question checklist to identify which distribution applies to any scenario: Is it a fixed number of trials, a count in a time window, or a wait for success? Are the events independent and constant? Work through twelve realistic helpdesk scenarios to practice recognizing binomial, Poisson, geometric, and negative binomial distributions without memorizing new formulas.",
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
    "binomial",
    "Poisson",
    "geometric distribution",
    "negative binomial",
    "probability",
    "random variables",
    "statistical modeling",
    "discrete distributions",
    "exam preparation"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability Distributions: From Density to CDF",
   "summary": "Learn why exact outcomes have zero probability in continuous distributions and how probability density functions (PDFs) work differently from discrete probabilities. This video teaches you to interpret probability as area under a curve, relate PDFs to cumulative distribution functions through integration and differentiation, and calculate expectations and variances for continuous random variables.",
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
    "integration",
    "expectation",
    "variance"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Exponential Distribution: Waiting Times and Memorylessness",
   "summary": "Learn how waiting times for random arrivals follow the exponential distribution, derived directly from the Poisson process. You'll discover why the mean and standard deviation are always equal, and explore the counterintuitive memorylessness property—the key insight that past waiting time tells you nothing about your remaining wait.",
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
    "waiting time",
    "Poisson process",
    "memorylessness",
    "continuous probability",
    "density functions",
    "random arrivals",
    "conditional probability"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Formula, and How to Use It",
   "summary": "Learn why the normal distribution is everywhere in statistics and master how to use it. This video teaches you what the formula means, how the two parameters mu and sigma control the shape, how to standardize any normal problem into the standard normal, and how to solve both forward problems (finding probabilities) and reverse problems (finding cutoffs). You'll also learn the 68-95-99.7 rule as a sanity check on your work.",
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
    "probability",
    "standard normal",
    "standardization",
    "z-scores",
    "mean and standard deviation",
    "probability tables",
    "68-95-99.7 rule",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit: The Four-Step Density Routine",
   "summary": "Learn the universal four-step method for solving any density problem: sketch first, set up the integral, compute, then verify against zero and one. You'll work through six realistic problems covering constant-finding, CDFs, interval probabilities, exponential and normal distributions, and the critical trap of mistaking a discrete variable for a continuous one.",
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
    "density functions",
    "probability",
    "CDF",
    "normal distribution",
    "exponential distribution",
    "integration",
    "problem-solving",
    "continuous vs discrete",
    "statistics"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions and Dependence Between Two Random Variables",
   "summary": "Learn how to work with two random variables happening simultaneously using joint probability distributions. This video covers joint PMFs and densities, marginal distributions obtained by summing or integrating, independence (when the joint factors as a product of marginals), and conditional distributions. By the end you'll understand why independence is a strict condition, what mistakes to avoid when checking it, and how to compute expectations like E(XY).",
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
    "joint PMF",
    "joint density",
    "two random variables",
    "covariance"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Measuring How Two Variables Move Together",
   "summary": "Learn to quantify whether two variables move together using covariance and its scaled version, correlation. You'll compute both from a probability table, discover the key trap that catches most students (zero covariance doesn't prove independence), and understand why correlation only detects straight-line relationships and never proves causation.",
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
    "linear relationship",
    "expected value",
    "standard deviation",
    "causation",
    "independence"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Expectation and Variance of Sums: When Does Variance Add?",
   "summary": "Learn why expectation always adds for sums of random variables, but variance only adds when covariance is zero. This video shows how to correctly compute the variance of a sum, why independence matters, and why larger teams produce steadier outcomes—using a helpdesk scheduling example to make the mathematics concrete.",
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
    "expectation",
    "variance",
    "covariance",
    "sums of random variables",
    "independence",
    "Poisson",
    "normal distribution",
    "probability theory",
    "risk analysis"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Recognition: Choosing the Right Distribution Tool",
   "summary": "Learn to identify which probability distribution to use for any helpdesk problem by asking three key questions in order: is it discrete or continuous, what output is needed, and are multiple variables involved. Work through 15 realistic problems where you name the tool before solving, building the recognition skill that separates fast problem-solving from getting stuck.",
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
    "discrete vs continuous",
    "PMF vs CDF",
    "applied probability",
    "decision framework"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Settle",
   "summary": "Learn why running averages converge to the true expectation—not because the past \"catches up,\" but because variance shrinks mathematically. You'll understand the mechanism behind the law of large numbers and see why the gambler's fallacy is wrong: past quiet hours don't make busy hours more likely.",
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
    "averages",
    "variance",
    "gambler's fallacy",
    "expectation",
    "statistics",
    "running average",
    "convergence",
    "random variables"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "The Central Limit Theorem: Why the Bell Curve Appears Everywhere",
   "summary": "This lesson explains why normal distributions appear so frequently in real data, even when individual measurements are skewed. You'll learn the central limit theorem — that sums of many independent measurements become approximately normal — and how to use it to solve practical problems like predicting whether a shift's workload will exceed available time.",
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
    "bell curve",
    "sum of independent variables",
    "probability",
    "law of large numbers",
    "standardization",
    "finite variance",
    "statistical inference",
    "approximation"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "One Page for the Exam: Distributions and Formulas Under Pressure",
   "summary": "If you could only bring one page into an exam on probability distributions, what actually goes on it? This video builds a single reference sheet with the six key distributions (binomial, Poisson, geometric, uniform, exponential, normal), six essential formulas, and a sixty-second checklist to identify which tool to use when a problem doesn't tell you. You'll learn how to recognize distributions by their story, not their formula, and practice on five realistic problems where you have to name the tool yourself before solving.",
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
    "exam preparation",
    "binomial",
    "Poisson",
    "normal distribution",
    "variance and expectation",
    "reference sheet",
    "problem-solving strategy"
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
   "summary": "This video identifies the fundamental structural limitation of legacy systems: they can only do what was explicitly imagined and documented before they were built. You'll see concrete examples of tasks that require reading customer intent, spotting patterns across separate events, or writing coherent narratives—work that systems simply cannot perform. After watching, you'll know whether the specific work your legacy system hands to people could now be done differently, and how to evaluate the real cost-benefit question.",
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
    "business process automation",
    "when to modernize",
    "human judgment vs systems",
    "workflow analysis",
    "delivery logistics"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts: How Foundation Models Changed Software Architecture",
   "summary": "This video explains the three key shifts that made large language models practical for real business software: they accept plain language instructions instead of fixed APIs, they handle multiple jobs without being specifically trained for each one, and they're now fast and cheap enough to run during live transactions instead of overnight batch jobs. You'll learn what a foundation model actually is, what critical limitations still exist, and how this fundamentally changes how modern software gets built.",
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
    "software architecture",
    "API design",
    "business applications",
    "machine learning",
    "dispatch systems",
    "system design",
    "LLM limitations",
    "real-world deployment"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "Why AI Features Fail: The Architecture That Actually Works",
   "summary": "Learn why adding AI features to existing screens fails silently, and discover the architectural pattern that actually solves real problems. By the end, you'll know exactly where a model belongs in your system and how to avoid the expensive mistake almost everyone makes.",
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
    "logistics automation",
    "AI integration",
    "process automation",
    "dispatch systems",
    "avoiding failure patterns"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: How AI Changes Team Roles",
   "summary": "When you add a machine learning model to a feature, the work fundamentally changes for architects, product owners, scrum masters, testers, and developers—each in specific, practical ways. This video walks through a real logistics example, showing how each role adapts to designing around unreliable components, writing examples instead of specs, accepting non-binary completion, and building robust fallbacks. You'll learn what questions each role needs to ask and three critical mistakes teams make when they don't adjust their process.",
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
    "agile",
    "testing",
    "AI",
    "team roles",
    "ML systems",
    "development process",
    "requirements"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "AI and Code: The Honest Speed Numbers",
   "summary": "This video cuts through the hype about AI-assisted coding by examining where it actually saves time and where it doesn't. You'll learn which tasks genuinely speed up (and by how much), why project timelines rarely shrink as much as coding speed improvements suggest, and why review becomes the real bottleneck—complete with a real-world dispatch rewrite case study.",
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
    "software development",
    "bottlenecks",
    "code review",
    "realistic metrics",
    "well-specified work",
    "project management"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing Probabilistic Systems: Why Your Estimates Will Be Wrong",
   "summary": "This video reveals why machine learning and probabilistic systems staffing and scheduling fail in predictable ways—factors of 2-3x off, not just minor overruns. You'll learn the three roles that must be reshaped (goal specifier, evaluation set owner, reliability owner), why demos create a dangerous illusion of progress, and why these systems never truly finish once deployed.",
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
    "project management",
    "team staffing",
    "estimation",
    "probabilistic systems",
    "AI reliability",
    "software maintenance",
    "team structure",
    "delivery planning",
    "risk management"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "The Smallest Honest Unit: What a Model Call Actually Is",
   "summary": "Learn what happens when code actually calls a model: plain text goes in, text comes out, with no memory between calls and no guaranteed consistency. This video covers the five-part component structure (input, prompt, model, validate, fallback), latency constraints that determine where you can use models, and the engineering discipline of deciding your fallback plan before shipping.",
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
    "API design",
    "machine learning engineering",
    "system design",
    "error handling",
    "validation",
    "latency",
    "software architecture",
    "production systems",
    "fallback strategies"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What Is an Agent? A Plain Definition",
   "summary": "This video gives a concrete, testable definition of an AI agent: a model in a loop with tools that works toward a goal, decides what to do next based on results, and repeats until finished. You'll learn how agents differ from single model calls, why they're risky, and what engineering controls (step limits, cost ceilings, safe tools, human approval) are essential to keep them from running away—plus when to actually use one instead of a fixed pipeline.",
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
    "AI agents",
    "agent architecture",
    "autonomous systems",
    "LLM loops",
    "agentic AI",
    "tool use",
    "prompt engineering",
    "ML engineering",
    "risk management",
    "decision-making loops"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "The Glue Problem: Why AI Needs a Standard Way to Talk to Systems",
   "summary": "Learn why every AI framework rewriting integration code is wasteful, and how a common protocol lets any model work with the same tools without custom rewiring. You'll understand the real cost-benefit trade-off: standardizing how systems describe themselves solves reusability, but it creates a new problem teams must solve—deciding what a model should actually be allowed to call.",
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
    "model integration",
    "MCP protocol",
    "tool calling",
    "system architecture",
    "framework agnostic",
    "safety boundaries",
    "technical leadership"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "From RAG to GraphRAG: Grounding LLMs in Your Business",
   "summary": "Learn why foundation models hallucinate about your specific business data and how two generations of retrieval systems solve this problem differently. This video explains semantic search and knowledge graphs, then shows why GraphRAG's unified approach of walking entity relationships—rather than searching disconnected document chunks—answers multi-hop business questions accurately.",
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
    "vector database",
    "business intelligence",
    "LLM grounding"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls: Guardrails, Routing, and Context Engineering",
   "summary": "Learn the three production controls that prevent bad output from reaching customers and keep AI costs under control: guardrails that block unsafe input and output, routing that matches request difficulty to model cost, and context engineering that gives models only the information they need. After watching, you'll understand how mature companies build safety and cost discipline into AI systems using practical, incident-driven rules rather than attempting to predict every failure in advance.",
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
    "LLM evaluation",
    "production systems",
    "cost control",
    "prompt engineering",
    "model selection"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Splitting \"Prompt Engineering\" Apart",
   "summary": "Learn why \"prompt engineering\" is actually four separate disciplines—prompt, context, loop, and harness engineering—each solving different problems in production AI systems. By the end you'll know where teams actually waste budget, why the smallest job gets the most attention, and which part of the pipeline silently degrades in production when neglected.",
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
    "AI system design",
    "validation and retries",
    "observability",
    "exception handling",
    "AI workflow"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Four Types of Engineering: Prompt, Context, Loop, Harness",
   "summary": "Learn the four distinct engineering disciplines that get confused in job postings: prompt engineering (wording instructions), context engineering (choosing what data the model sees), loop engineering (handling retries), and harness engineering (production safety systems). After watching, you'll understand which piece your team is probably underinvesting in and the correct order to build them.",
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
    "LLM systems",
    "AI in production",
    "dispatch systems",
    "engineering priorities"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When Not to Use a Language Model: The One Lesson That Saves a Year",
   "summary": "This video teaches you when to use classical machine learning instead of language models—a decision that can save months of wasted work. You'll learn to match the right tool to your problem: regression and classification for structured data, language models for messy unstructured input, and fine-tuning only for format consistency, not for storing facts (use retrieval instead).",
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
    "when not to use AI",
    "structured data",
    "fine-tuning",
    "retrieval",
    "practical AI",
    "model selection"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "The Real Cost of AI in Production: Building Your Cost Model",
   "summary": "Learn how to calculate and control the true cost of running AI models in production by breaking it into measurable pieces: tokens, steps, retries, evaluation, and human review. You'll discover the four levers that actually reduce costs and how to instrument your system from day one so you can forecast expenses and optimize where it matters, turning cost overruns from \"what happened\" into \"what we controlled.\"",
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
    "production optimization",
    "token accounting",
    "cost per transaction",
    "model evaluation",
    "engineering economics",
    "system instrumentation",
    "cost forecasting",
    "agent pipelines",
    "failure detection"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "It Doesn't Fall Over: Failures in Live AI Systems",
   "summary": "Learn why live AI systems don't crash—they produce plausible, confident wrong answers that slip silently past all monitoring. This video teaches the four failure modes (confident wrong answers, silent degradation, stalls, and compounding errors) and how to build attribution and replay-ability into every consequential decision through proper logging and policy design.",
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
    "failure modes",
    "production AI",
    "logging",
    "accountability",
    "silent failures",
    "monitoring",
    "decision logging",
    "AI safety",
    "system design"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Deploying AI Without Rewriting Legacy Systems",
   "summary": "Learn how to integrate AI models into existing business-critical systems without rebuilding them. This video teaches the \"in-front\" architecture pattern: placing your model before the legacy system to handle messy input and act through existing interfaces, then rolling out capability gradually through shadow mode and human-in-the-loop stages. You'll understand why starting with high-volume, forgiving processes like exception triage beats flashy high-risk ones, and how to prove value safely before expanding autonomy.",
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
    "system architecture",
    "shadow mode",
    "human-in-the-loop",
    "logistics",
    "AI migration",
    "system integration",
    "risk management",
    "process automation"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Actually Changes for Backend Developers Using AI Models",
   "summary": "Learn what skills transfer from traditional backend development to AI-augmented systems and what genuinely new capabilities you need to build. This lesson separates the timeless engineering principles that still matter from the specific new competencies like thinking in distributions, owning evaluation sets, and designing loops for quiet failures.",
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
    "AI systems",
    "backend development",
    "evaluation sets",
    "model reliability",
    "system design",
    "testing distributions",
    "engineering skills",
    "AI guardrails",
    "cost management",
    "model deployment"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "The Six Questions Before You Build a Probabilistic System",
   "summary": "Learn the six ordered questions that determine whether your company should actually build a machine learning system—and why the answer is often \"not yet.\" This framework teaches you to evaluate the real cost of the work that software can't currently handle, the risk of mistakes reaching customers, and the operational requirements for success.",
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
    "machine learning",
    "decision framework",
    "business strategy",
    "probabilistic systems",
    "AI implementation",
    "cost analysis",
    "data requirements",
    "risk management",
    "operational planning",
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
   "title": "Graph Schema Design: Build From Questions, Not Entities",
   "summary": "Learn the foundational discipline for designing graph schemas that actually perform. This video teaches you to start with the questions your application needs answered, write them as plain sentences, describe the traversals in words, and only then decide which nouns become nodes—avoiding the relational habit of modeling every entity as a separate node and minimizing hop counts across your queries.",
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
    "graph schema design",
    "cypher",
    "neo4j",
    "data modeling",
    "query optimization",
    "graph traversal",
    "database design",
    "node relationships",
    "hop count",
    "relational to graph"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 2,
   "title": "One Fact, Three Shapes: Modelling Facts in Graph Databases",
   "summary": "Learn how to model a single fact in three fundamentally different ways within a graph database: as a property, as a relationship to a shared node, or as a node with its own relationships. This video teaches you the decision rules for choosing the right shape based on the questions you'll ask, so you can avoid building either a graph of worthless trivia or a document store pretending to be a graph.",
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
    "data modelling",
    "schema design",
    "properties",
    "relationships",
    "nodes",
    "query optimization",
    "database patterns"
   ],
   "src": "/media/learn/modelling/modelling-02.mp4",
   "poster": "/media/learn/modelling/modelling-02.jpg",
   "captions": "/media/learn/modelling/modelling-02.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels in Neo4j: The Right Kind of Thing",
   "summary": "Learn when labels are the right choice in Neo4j and when they cause problems. This lesson covers the core rule—a label answers \"what kind of thing is this\"—and walks through three common misuses: status, values, and tenant isolation. You'll see why each pattern breaks and what to use instead, plus how to handle label hierarchies.",
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
    "data modeling",
    "Cypher",
    "best practices",
    "schema design",
    "graph database",
    "properties vs labels"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j",
   "summary": "Learn why every Neo4j relationship must have a direction—and why that direction matters for accuracy, not just query convenience. This video teaches you how to choose between storing a single relationship type with properties versus splitting into multiple types, and when each approach makes your queries efficient and your schema readable.",
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
    "graph database",
    "Cypher",
    "properties",
    "query performance"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reified Relationships: When to Promote a Relationship to a Node",
   "summary": "Learn when a relationship between two nodes needs to become its own node—the key pattern is when a fact involves multiple properties, needs to connect to other things, or when the same pair has multiple instances. This video teaches the three signals that indicate when to reify a relationship and shows how this pattern appears throughout real-world data models like course enrollments and job applications.",
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
    "graph database",
    "data modeling",
    "relationships",
    "reification",
    "graph patterns",
    "database design",
    "entities",
    "properties",
    "many-to-many",
    "join tables"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graph Databases: Three Patterns",
   "summary": "Learn why overwriting historical data breaks your ability to answer \"how did this change over time\" questions, and explore three concrete patterns for storing temporal facts in graphs: validity windows on relationships, version nodes chained together, and building a time tree from calendar nodes. By the end, you'll know which pattern fits your query patterns and the three rules that keep your temporal model honest.",
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
    "time",
    "versioning",
    "historical data",
    "property graphs",
    "data modeling",
    "bitemporality",
    "graph patterns",
    "Neo4j"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Database Constraints: Enforcing Data Integrity in Neo4j",
   "summary": "Learn how to prevent bad data from entering your Neo4j database by creating constraints that enforce your data model decisions. This lesson covers uniqueness constraints, node keys, existence constraints, and property type constraints—each designed to catch different kinds of data errors before they silently corrupt your graph. After watching, you'll know what kinds of constraints to use when, what they cannot enforce, and the critical insight that uniqueness constraints also create performance-boosting indexes.",
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
    "uniqueness",
    "node key",
    "existence constraint",
    "property type",
    "database design",
    "validation",
    "indexes"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 8,
   "title": "Indexes: When and What Kind to Build",
   "summary": "Learn why indexes are a modeling decision made on day one, not a performance fix added later. This lesson covers range indexes for equality and comparison, composite indexes for multi-property lookups, text indexes for partial string matching, full-text indexes for ranked search, and relationship indexes—then shows how to measure whether each index actually serves a real question from your domain.",
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
    "database design",
    "neo4j",
    "range index",
    "composite index",
    "text index",
    "full-text index",
    "query optimization",
    "database modeling",
    "property lookup"
   ],
   "src": "/media/learn/modelling/modelling-08.mp4",
   "poster": "/media/learn/modelling/modelling-08.jpg",
   "captions": "/media/learn/modelling/modelling-08.vtt"
  },
  {
   "n": 9,
   "title": "Embeddings in Neo4j: Vector Search on the Graph",
   "summary": "Learn how embeddings work in Neo4j to find meaning-based similarity rather than just following relationships. You'll understand how to structure embedding data as node properties, choose between similarity metrics, declare vector indexes, and combine vector search results with graph traversal to answer complex questions that neither vectors nor graphs alone can solve.",
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
    "cosine similarity",
    "Euclidean distance",
    "semantic search",
    "vector indexes",
    "graph databases",
    "similarity matching",
    "node properties"
   ],
   "src": "/media/learn/modelling/modelling-09.mp4",
   "poster": "/media/learn/modelling/modelling-09.jpg",
   "captions": "/media/learn/modelling/modelling-09.vtt"
  },
  {
   "n": 10,
   "title": "Refactoring a Graph at Scale: From Properties to Nodes",
   "summary": "Learn the five-step method for safely refactoring a live graph database when a property needs to become a node—adding, migrating, and verifying data without downtime or data loss. You'll understand why each step matters, how to batch changes across millions of rows, and how to apply this same pattern to three other common refactors.",
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
    "data refactoring",
    "constraints",
    "batch processing",
    "database design",
    "live migration",
    "data integrity"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Neptune vs Neo4j: When to Migrate Your Graph Database",
   "summary": "Learn the real differences between Neptune and Neo4j—from query language to operations to cost—using a real 40-million-node college-search graph as the example. This video walks through what each system actually is, where each wins, and gives you a five-question checklist to decide whether migration is worth it for your team. By the end you'll know what changes, what it costs, and what you keep and lose.",
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
    "migration",
    "database comparison",
    "query language",
    "Aura",
    "AWS"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: Neptune vs Neo4j Property Graphs",
   "summary": "Neptune and Neo4j both use the property graph model, but differ in five critical ways: labels, IDs, properties, types, and edges. This lesson walks through each difference, highlights the common migration bugs, and shows how to use these differences as an opportunity to improve your graph's design. After watching, you'll understand exactly where migrations break and have a mapping table for converting between the two systems.",
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
    "property graph",
    "graph database migration",
    "labels",
    "IDs",
    "properties",
    "schema mapping",
    "Gremlin",
    "Cypher"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Rewriting Gremlin Queries as Cypher: A Complete Translation Guide",
   "summary": "Learn how to translate Gremlin graph queries into Cypher by understanding the fundamental differences between imperative and declarative query languages. This scene-by-scene breakdown covers lookups, filters, directions, aggregations, mutations, and common mistakes—so you can write idiomatic Cypher instead of Gremlin-in-syntax.",
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
    "Cypher",
    "Gremlin",
    "graph queries",
    "query translation",
    "Neo4j",
    "graph databases",
    "traversals",
    "pattern matching",
    "aggregation",
    "query optimization"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating RDF to Neo4j: From SPARQL to Cypher",
   "summary": "Learn how to convert RDF data models to property graphs by applying decision rules for predicates, blank nodes, reification, and named graphs. This video covers the technical patterns for translating SPARQL queries to Cypher and identifies three critical failure points where RDF migrations go wrong in practice.",
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
    "Cypher",
    "graph migration",
    "data modeling",
    "triples",
    "property graphs",
    "neosemantics",
    "graph databases"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large Neptune Graphs: Snapshots, Streams, and CSV",
   "summary": "Learn the correct way to export a large graph database (40+ million nodes) without disrupting production services. This video walks through AWS Neptune's export workflow: enabling streams before snapshots, restoring to temporary instances, and validating the resulting CSV files for common data loss patterns like flattened multi-valued properties and dropped meta-properties.",
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
    "Gremlin",
    "CSV",
    "streaming",
    "large-scale databases",
    "data migration"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Loading a Neptune Graph into Neo4j: The Right Order Matters",
   "summary": "Learn why loading a 40-million-node graph in the wrong order takes three days instead of one hour, and how to avoid the silent failures that abandon migrations halfway through. This lesson covers constraint creation, node-before-relationship loading, the neo4j-admin import tool, batch sizing with CALL IN TRANSACTIONS, field mapping, and count reconciliation to verify the load succeeded.",
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
    "graph migration",
    "Neptune",
    "bulk load",
    "data import",
    "constraints",
    "LOAD CSV",
    "neo4j-admin",
    "batch processing",
    "reconciliation"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Migrating from Gremlin to Cypher: Rewriting the Application Layer",
   "summary": "Learn what actually changes when you swap from Neptune's Gremlin to Neo4j's Cypher—spoiler: it's far more than just the query strings. This video covers the application layer differences: driver and session management, explicit transactions with retries, result shaping, parameterized queries, and how to run both engines in parallel during migration using an interface pattern and unified test suite.",
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
    "graph database",
    "transaction handling",
    "application architecture",
    "testing",
    "query parameterization"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Database Migration Without Downtime: The Five-Phase Cutover Plan",
   "summary": "This lesson explains how to safely migrate from one graph database to another in production without downtime or data loss. You'll learn a five-phase approach—shadow reads, dual writes, staged read migration, role reversal, and decommissioning—that detects bugs early and lets you roll back instantly at any point. After watching, you'll understand how to measure success across all phases and why rushing any stage causes the real problems.",
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
    "zero-downtime cutover",
    "dual writes",
    "shadow reads",
    "feature flags",
    "rollback strategy",
    "database verification",
    "production safety",
    "query migration"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: From Joins to OPTIONAL MATCH",
   "summary": "Learn how to read and write Cypher query patterns as single-line replacements for complex SQL join chains. This lesson covers pattern syntax, node/relationship naming, direction, comma-separated patterns, and the crucial OPTIONAL MATCH—the fix for the single most common surprise SQL users hit when writing real Cypher queries.",
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
    "query patterns",
    "MATCH",
    "OPTIONAL MATCH",
    "graph queries",
    "relationship direction",
    "SQL to Cypher",
    "graph databases",
    "query syntax"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 2,
   "title": "WITH: The Middle Checkpoint in Cypher Queries",
   "summary": "Learn how the WITH clause acts as a checkpoint in the middle of your Cypher query pipeline, letting you reshape, aggregate, and filter rows before passing them downstream. You'll discover why WITH is essential for comparing aggregates, understand the \"wall\" rule that blocks variables you don't explicitly carry through, and see how to use it for readability and performance—renaming with AS and limiting row counts early to avoid expensive operations.",
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
    "HAVING equivalent",
    "query optimization",
    "variable scope",
    "readability"
   ],
   "src": "/media/learn/cypher/cypher-02.mp4",
   "poster": "/media/learn/cypher/cypher-02.jpg",
   "captions": "/media/learn/cypher/cypher-02.vtt"
  },
  {
   "n": 3,
   "title": "Cypher Aggregation Without GROUP BY: Counting, Collecting, and Pitfalls",
   "summary": "Learn how Cypher automatically infers grouping keys from non-aggregated columns in RETURN statements—a design that's convenient until you accidentally add a column and break your counts. This lesson covers the three flavors of count, the collect() aggregate, and the dangerous OPTIONAL MATCH phantom-zero trap that catches experienced SQL developers.",
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
    "NULL handling",
    "OPTIONAL MATCH",
    "Neo4j",
    "SQL migration"
   ],
   "src": "/media/learn/cypher/cypher-03.mp4",
   "poster": "/media/learn/cypher/cypher-03.jpg",
   "captions": "/media/learn/cypher/cypher-03.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths and Shortest Path Queries in Cypher",
   "summary": "Learn how to find connections across multiple hops in graph databases using Cypher's variable-length path syntax and specialized path functions. You'll understand how to use the asterisk notation to specify hop ranges, name and inspect paths to see the actual chain of relationships, and use shortestPath and allShortestPaths to find minimal connections efficiently.",
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
    "Neo4j",
    "relationship traversal",
    "path queries",
    "database performance",
    "graph traversal"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "The Part of Cypher That Isn't About the Graph",
   "summary": "Learn the data-shaping side of Cypher: lists, maps, and comprehensions that let you format query results for APIs and web pages. You'll master list and pattern comprehensions, UNWIND, map projection, and the parameter habits that keep your queries safe and efficient.",
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
    "graph database",
    "Neo4j",
    "query optimization",
    "data shaping"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 6,
   "title": "Cypher Subqueries: EXISTS, COUNT, and CALL",
   "summary": "Learn how to use Cypher subqueries to ask questions inside questions — eliminating the need for loops and expensive DISTINCT operations. This video teaches EXISTS for yes-or-no checks, COUNT for inline numbers, and CALL for per-row result computation, with a focus on solving real problems like finding the top N results per group in a single query.",
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
    "Neo4j",
    "subqueries",
    "EXISTS",
    "COUNT",
    "CALL",
    "query optimization",
    "graph databases"
   ],
   "src": "/media/learn/cypher/cypher-06.mp4",
   "poster": "/media/learn/cypher/cypher-06.jpg",
   "captions": "/media/learn/cypher/cypher-06.vtt"
  },
  {
   "n": 7,
   "title": "MERGE Patterns, ON CREATE SET, and Safe Updates in Cypher",
   "summary": "Learn how MERGE actually works in Cypher—it matches the entire pattern or creates a duplicate, so you must merge on identifying properties alone and use ON CREATE SET and ON MATCH SET to control what gets created versus updated. You'll understand why merging relationships requires merging nodes first then the edge separately, and how constraints enforce the guarantees that make your data safe.",
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
    "ON CREATE SET",
    "ON MATCH SET",
    "database constraints",
    "graph database",
    "data integrity",
    "property graph",
    "relationships",
    "Cypher updates"
   ],
   "src": "/media/learn/cypher/cypher-07.mp4",
   "poster": "/media/learn/cypher/cypher-07.jpg",
   "captions": "/media/learn/cypher/cypher-07.vtt"
  },
  {
   "n": 8,
   "title": "Importing Data Into Neo4j: CSV to Graph",
   "summary": "Learn the essentials of importing CSV files into Neo4j and building graph databases from scratch. This lesson covers constraints, batching strategies, type conversion, data validation, and the correct order for importing nodes and relationships to avoid duplicates and performance issues.",
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
   "title": "Why Queries Get Slow: Indexes and Query Plans in Neo4j",
   "summary": "Learn why the same query that runs fast on your laptop bogs down on production databases, and how indexes fix the problem. You'll understand what range indexes, composite indexes, text indexes, and constraints actually do, then master EXPLAIN and PROFILE to diagnose slowness by reading query plans and finding where the database wastes time.",
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
    "indexes",
    "query performance",
    "database optimization",
    "PROFILE",
    "EXPLAIN",
    "query plans",
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
   "title": "Five Queries That Look Right But Run Wrong",
   "summary": "Learn to identify five common Cypher query mistakes that compile and run without errors but produce wrong results or terrible performance. This lesson teaches you to recognize Cartesian products, unbounded traversals, incorrect counts, MERGE misuse, and label-based performance drops—the expensive bugs that ship to production. You'll learn to use PROFILE to catch these issues before they cost you a day.",
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
    "MERGE",
    "PROFILE",
    "graph patterns",
    "common errors"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];
