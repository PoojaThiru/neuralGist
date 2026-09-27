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
   "title": "Testing Language Models: Why It's Different From Software Testing",
   "summary": "Learn why testing language models requires a completely different approach than traditional software testing. This video explains four core challenges: multiple acceptable outputs, the difficulty of automatically judging meaning, non-deterministic behavior, and varying degrees of wrongness including hallucination. You'll understand how to avoid common testing mistakes and recognize what makes LLM evaluation fundamentally different.",
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
    "evaluation",
    "LLM",
    "software testing",
    "hallucination",
    "non-deterministic",
    "quality assurance",
    "AI testing",
    "oracle problem"
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
   "title": "Judge Bias: Why Your Scoring Model May Be Systematically Wrong",
   "summary": "Learn four systematic biases that cause judge models to consistently score outputs incorrectly, even when they appear well-calibrated overall: position bias (favoring first answers), verbosity bias (rewarding length), self-preference bias (rating their own outputs higher), and practical mistakes teams make in evaluation. After watching, you'll be able to identify these hidden biases in your own judge model and design tests to catch them.",
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
    "judge bias",
    "model evaluation",
    "position bias",
    "verbosity bias",
    "self-preference bias",
    "LLM calibration",
    "pairwise comparison",
    "bias testing",
    "evaluation methodology",
    "model grading"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why BLEU, ROUGE, and Exact Match Fail",
   "summary": "Most teams evaluate LLMs and agents using metrics borrowed from translation and summarization research—exact match, BLEU, and ROUGE—but these measure word overlap, not correctness or meaning. This video explains why these metrics fail for chat models, what they actually measure, and which approaches—semantic similarity, LLM-as-judge, and task-based evaluation—work better in practice.",
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
    "model evaluation",
    "hallucination",
    "embedding similarity",
    "LLM-as-judge"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Scoring RAG Systems: Two Scores, Not One",
   "summary": "Learn how to diagnose failures in retrieval-augmented generation (RAG) systems by splitting evaluation into two independent measurements: retriever performance and generator performance. You'll discover why tracking a single end-to-end score masks problems and how to measure recall, precision, faithfulness, and answer relevance separately so you know exactly which component to fix.",
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
    "retriever",
    "generator",
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
   "title": "Safety Nets for Model Evaluation: Automated Testing in CI/CD",
   "summary": "Learn the difference between one-time model evaluation and continuous safety nets that catch regressions automatically. This video teaches you how to build a golden set of test examples, define metrics and thresholds, and integrate evaluation into your CI/CD pipeline so that changes get blocked before they ship if they fail your standards.",
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
    "safety nets",
    "CI/CD pipeline",
    "golden set",
    "automated testing",
    "metrics and thresholds",
    "regression detection",
    "quality assurance",
    "LLM testing",
    "continuous deployment"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Trust Your Score—But Only for What You Actually Tested",
   "summary": "A high evaluation score tells you how your model performed on the specific test cases you ran, but nothing about how it will handle questions you never thought to ask. This video distinguishes evaluation from red-teaming, shows why a passing score cannot guarantee safety, and explains three common mistakes teams make when they forget this crucial difference.",
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
    "testing methodology",
    "AI safety",
    "model performance",
    "test sets",
    "security attacks",
    "adversarial testing",
    "model validation",
    "machine learning"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Models Are Hard to Deploy: Latency, Throughput, and GPU Memory",
   "summary": "Learn why serving a language model to hundreds of simultaneous users is fundamentally different from running a normal web app. This video explains how models generate text one token at a time, why batching requests together improves throughput at the cost of latency, and how the key-value cache limits how many users you can serve simultaneously.",
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
    "deployment",
    "GPU",
    "batching",
    "latency",
    "throughput",
    "KV cache",
    "autoregressive generation",
    "systems design",
    "machine learning infrastructure"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: Why It Saves GPU Time",
   "summary": "Learn why static batching wastes GPU compute by locking requests together until the slowest one finishes, and how continuous batching solves this by reusing request slots after each token step. You'll see a concrete example of how continuous batching handles multiple requests of different lengths, and understand the real limits—batch size and memory—that still apply.",
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
    "inference optimization",
    "GPU utilization"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache Problem and Paging Solution",
   "summary": "Learn why a single GPU serving multiple concurrent requests fills up so quickly, even though most requests use only a fraction of reserved memory. This video explains how the KV cache causes memory fragmentation, and shows how applying operating system paging techniques—breaking the cache into fixed-size blocks and using a lookup table—solves both the fragmentation and waste problems, plus enables efficient cache sharing across requests with identical prompts.",
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
    "large language models",
    "token generation",
    "memory optimization",
    "block allocation",
    "inference serving"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "Learn three practical techniques for reducing a model's size and runtime: quantization (rounding numbers to fewer bits), distillation (training a small model to copy a large one), and pruning (removing barely-used parameters). You'll understand how each method trades off precision against speed and storage, and learn the key mistake to avoid: always measure performance on your own real tasks before and after compression.",
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
    "neural networks",
    "machine learning optimization",
    "inference speed",
    "parameter reduction",
    "model efficiency",
    "large language models"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "Serving Custom Language Models at Scale: Adapters and Routing",
   "summary": "Learn how companies serve hundreds of custom language models without running hundreds of full models. This video explains the practical architecture: one shared base model, tiny per-customer adapters, cold start trade-offs, and smart routing that keeps requests on warm machines. You'll understand why this approach isn't just cheaper—it's the only way to fit.",
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
    "distributed systems",
    "machine learning infrastructure",
    "cold starts",
    "scaling"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How AI Models Guess Ahead to Speed Up Inference",
   "summary": "Learn how speculative decoding allows language models to generate multiple tokens in parallel instead of one at a time, using a small fast model to propose guesses that a large model verifies in a single pass. You'll understand why this technique doesn't lower output quality, what mistakes teams make when implementing it, and how the math ensures the final answer is identical to what the big model would have produced anyway.",
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
    "draft model",
    "token generation",
    "machine learning",
    "model inference",
    "computational efficiency"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Scale AI Models Across Multiple GPUs",
   "summary": "When one GPU isn't enough to run an AI model, you have three different strategies to add more hardware—and they solve three completely different problems. Learn data parallelism for handling more requests simultaneously, tensor parallelism for splitting massive calculations, and pipeline parallelism for splitting models into processing stages, plus the common mistakes teams make when combining them.",
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
    "AI model scaling",
    "machine learning infrastructure",
    "distributed computing",
    "model deployment"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "Running LLMs in Production: Metrics and Operations",
   "summary": "Learn what actually matters when you launch an LLM in production: stop measuring averages and watch the tail latency instead, track time-to-first-token separately, understand why autoscaling doesn't work for model servers, and monitor the right dashboard metrics. After this video, you'll know what promises to make to users, how to catch failures before they cascade, and how to optimize the cost per answer.",
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
    "latency monitoring",
    "p99",
    "time-to-first-token",
    "autoscaling",
    "dashboard metrics",
    "cost optimization",
    "operational reliability",
    "queue depth",
    "model serving"
   ],
   "src": "/media/learn/serving/serving-08.mp4",
   "poster": "/media/learn/serving/serving-08.jpg",
   "captions": "/media/learn/serving/serving-08.vtt"
  }
 ];

export const LEARNING: Lesson[] = [
  {
   "n": 1,
   "title": "Fitting vs. Memorizing: What Machine Learning Models Actually Learn",
   "summary": "Learn what it means for a machine learning model to \"learn\" from data by exploring the critical difference between fitting a good predictive rule and simply memorizing patterns. This video explains how overfitting and underfitting happen, why splitting data into training and test sets matters, and how to catch when a model has learned noise instead of true patterns.",
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
    "memorizing",
    "overfitting",
    "underfitting",
    "training data",
    "test data",
    "model evaluation",
    "parameters",
    "prediction error"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Even Mean? Understanding Linear Regression",
   "summary": "Learn what \"best fit\" actually means in linear regression and how to measure it. This video shows you how to build a simple linear model (rent-hat = w × size + b), calculate residuals to see how wrong your predictions are, and use the sum of squared errors (SSE) as a single number that tells you whether a line is actually a good fit. By the end, you'll understand the complete goal of linear regression and why we square residuals instead of just adding them up.",
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
    "linear model",
    "prediction error",
    "machine learning fundamentals",
    "data modeling",
    "slope and intercept"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Models Learn: Loss Functions and Gradient Descent",
   "summary": "This video explains the core mechanism of how machine learning models actually learn: by measuring error with a loss function and using calculus to nudge parameters downhill. You'll see why simply guessing and checking works, what loss functions measure, how gradients point toward improvement, and the complete gradient descent algorithm with real examples using a rent prediction model.",
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
    "learning rate",
    "calculus",
    "optimization",
    "neural networks",
    "model training",
    "mean squared error",
    "parameters"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting, Underfitting, and the Bias-Variance Tradeoff",
   "summary": "Learn why a model that predicts perfectly on training data might fail on new data, and how to catch the trap. This video teaches you the difference between overfitting and underfitting, introduces the bias-variance tradeoff, and shows you practical techniques like train-test-validation splits and regularization to build models that actually generalize.",
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
   "summary": "Learn how to predict categories (like \"yes\" or \"no\") instead of continuous numbers using logistic regression. You'll discover why a straight line fails for classification, how the sigmoid function squashes predictions into probabilities between 0 and 1, and how to use a decision boundary and threshold to make actual yes-or-no predictions from your model.",
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
    "probability",
    "threshold",
    "categorical prediction",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Precision, Recall, and Class Imbalance",
   "summary": "Learn why a model's accuracy score can be dangerously misleading, especially with imbalanced datasets. This video teaches you to use confusion matrices, precision, and recall to evaluate models properly, and shows you how to avoid the critical mistake of testing on training data.",
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
    "train-test split",
    "model validation",
    "false positives",
    "false negatives"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "Data Leakage: Why Your Model Seems Too Good to Be True",
   "summary": "Learn to spot and fix data leakage — the hidden information that makes models look perfect in testing but fail in the real world. This video walks through concrete examples like features recorded too late, averages computed before splitting, and improper encoding, then shows you how to scale features, encode categories correctly, handle missing values, and split your data properly to build models you can actually trust.",
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
    "model validation",
    "scaling",
    "one-hot encoding",
    "target encoding",
    "missing values",
    "train-test split",
    "data preprocessing"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "The Complete ML Pipeline: From Raw Data to Honest Predictions",
   "summary": "Watch all seven steps of machine learning work together as a single integrated system: data cleaning, feature engineering, model design, loss functions, gradient descent training, train/test splitting, and regularization. You'll see the correct order and dependencies, and learn how to avoid three critical mistakes that derail most practitioners.",
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
    "regularization",
    "train test split",
    "feature engineering",
    "model training",
    "mean squared error",
    "overfitting",
    "pipeline",
    "data preprocessing"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Reliably",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation provides a more trustworthy model evaluation. You'll discover how to fairly compare different models by rotating which data you test on, and avoid common pitfalls like data leakage during preprocessing.",
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
    "data science",
    "model comparison",
    "data leakage",
    "preprocessing"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: Building a Question-Asking Prediction Model",
   "summary": "Learn how decision trees make predictions by asking a series of yes-or-no questions about data, starting from a root node and following branches until reaching a leaf that gives the answer. This video explains how trees choose which questions to ask first by measuring variance (for numbers) or impurity (for categories), and how to prevent overfitting by controlling tree depth to avoid memorizing individual data points instead of learning real patterns.",
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
    "regression trees",
    "classification trees",
    "overfitting",
    "variance",
    "impurity",
    "prediction models",
    "feature selection"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Why Many Weak Models Beat One Strong Model: Bagging and Random Forests",
   "summary": "Learn why training hundreds of simple, slightly different decision trees and averaging their predictions often outperforms one carefully tuned tree. This video explains bootstrap sampling, bagging, and random forests using real apartment price data—and shows how variance (not smarter trees) is what makes the difference.",
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
    "ensemble learning",
    "bagging",
    "random forests",
    "bootstrap sampling",
    "decision trees",
    "variance",
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
   "title": "Hyperparameters: Choosing Settings Before Training",
   "summary": "Learn the critical difference between parameters (values the model learns during training) and hyperparameters (settings you choose beforehand), and discover why these choices matter enormously for model performance. You'll master the practical workflow of using validation sets and grid search to find optimal hyperparameter values, and learn the three most common mistakes that undermine this process.",
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
    "regularization",
    "learning rate",
    "lambda",
    "validation set",
    "grid search",
    "cross-validation",
    "overfitting",
    "underfitting",
    "model tuning"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Imbalanced Classification: Why Accuracy Fails on Rare Events",
   "summary": "Learn why predicting a rare event (like detecting apartment scams that occur 1% of the time) can't be solved with accuracy alone—a model can be 99% accurate while catching zero scams. This video teaches you how to use confusion matrices, precision, recall, and the precision-recall tradeoff to build models that actually detect rare events, and covers practical techniques like oversampling and class weights to train better models on imbalanced data.",
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
    "precision recall",
    "confusion matrix",
    "class imbalance",
    "rare events",
    "machine learning",
    "base rate",
    "oversampling",
    "model evaluation"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 16,
   "title": "After Training: Calibration, Explanation, and Drift",
   "summary": "Passing your test set isn't the end—it's the beginning. Learn the three critical gaps between lab performance and real-world reliability: calibration (does confidence mean what it claims?), explanation (why did the model decide this?), and drift (do next year's applicants still match your training data?). You'll understand how to keep a deployed model trustworthy and actionable.",
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
    "model deployment",
    "calibration",
    "confidence",
    "explainability",
    "data drift",
    "machine learning",
    "model monitoring",
    "SHAP",
    "model validation"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  }
 ];
