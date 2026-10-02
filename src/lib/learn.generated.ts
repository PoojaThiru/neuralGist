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
   "summary": "Learn why traditional software testing breaks down for language models, which can produce many valid outputs that differ from each other. This video walks through the core challenges: multiple acceptable answers, the difficulty of automatically judging meaning, non-deterministic behavior, and varying levels of wrongness including hallucination.",
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
    "software testing",
    "LLM evaluation",
    "hallucination",
    "non-deterministic",
    "quality assurance",
    "AI evaluation",
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
   "title": "Hidden Biases in Judge Models: Position, Length, and Self-Preference",
   "summary": "Judge models that pass calibration checks can still contain systematic biases that skew their verdicts in predictable ways. Learn to identify four critical biases—position bias, verbosity bias, self-preference bias, and flawed calibration practices—and understand why averaging overall accuracy masks these recurring errors. After watching, you'll know how to catch these biases in your judge and avoid common pitfalls when grading model outputs.",
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
    "position bias",
    "verbosity bias",
    "self-preference bias",
    "model calibration",
    "pairwise comparison",
    "systematic bias",
    "evaluation methodology"
   ],
   "src": "/media/learn/llm-eval/llm-eval-04.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-04.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-04.vtt"
  },
  {
   "n": 5,
   "title": "Metrics That Mean Something: Why BLEU, ROUGE, and Exact Match Fail",
   "summary": "Learn why standard evaluation metrics like BLEU, ROUGE, and exact match measure surface-level word overlap rather than actual correctness—and why that matters for language models and agents. This video walks through what these metrics were designed for, where they break down, and shows you three approaches that work better: semantic similarity, LLM-as-judge, and task-based evaluation.",
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
    "evaluation metrics",
    "BLEU",
    "ROUGE",
    "exact match",
    "LLM evaluation",
    "semantic similarity",
    "LLM-as-judge",
    "model assessment",
    "hallucination detection",
    "machine learning"
   ],
   "src": "/media/learn/llm-eval/llm-eval-05.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-05.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-05.vtt"
  },
  {
   "n": 6,
   "title": "Scoring RAG Systems: Two Scores, Not One",
   "summary": "Learn how to properly evaluate retrieval-augmented generation (RAG) systems by splitting them into two independent measurements. After watching, you'll be able to diagnose whether failures come from the retriever or generator, and understand which metrics matter for each component.",
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
    "LLM evaluation",
    "retriever scoring",
    "generator scoring",
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
   "title": "Building a Safety Net: Automated Model Evaluation in CI/CD",
   "summary": "Learn how to set up continuous evaluation for AI models by building a golden set of test examples, defining performance thresholds, and integrating them into your deployment pipeline. This video teaches the difference between one-time model studies and ongoing safety nets, and shows you how to catch breaking changes automatically before they reach users.",
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
    "performance metrics",
    "threshold testing",
    "automated testing",
    "safety nets",
    "quality assurance"
   ],
   "src": "/media/learn/llm-eval/llm-eval-07.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-07.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-07.vtt"
  },
  {
   "n": 8,
   "title": "Why a Passing Score Doesn't Guarantee Safety",
   "summary": "Learn why evaluation scores only measure performance on the questions you tested, not the unlimited space of questions you didn't. This video explains the critical distinction between evaluation and red-teaming, using a real case where a 94% scoring model failed against unexpected attacks, and outlines the three common mistakes teams make when relying on test scores alone.",
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
    "testing limitations",
    "AI security",
    "adversarial testing",
    "benchmark scores",
    "model reliability"
   ],
   "src": "/media/learn/llm-eval/llm-eval-08.mp4",
   "poster": "/media/learn/llm-eval/llm-eval-08.jpg",
   "captions": "/media/learn/llm-eval/llm-eval-08.vtt"
  }
 ];

export const SERVING: Lesson[] = [
  {
   "n": 1,
   "title": "Why Language Model Servers Are Different: Latency, Throughput, and Batching",
   "summary": "Learn why running a language model for hundreds of concurrent users is fundamentally different from a traditional web server. This video explains how autoregressive token generation, GPU batching, and key-value caches create a tradeoff between latency and throughput, and walks through the common mistakes that cause systems to fail under real-world load.",
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
    "inference",
    "GPU batching",
    "latency",
    "throughput",
    "key-value cache",
    "token generation",
    "system design",
    "scaling",
    "autoregressive"
   ],
   "src": "/media/learn/serving/serving-01.mp4",
   "poster": "/media/learn/serving/serving-01.jpg",
   "captions": "/media/learn/serving/serving-01.vtt"
  },
  {
   "n": 2,
   "title": "Continuous Batching: Making LLM Inference Faster",
   "summary": "Learn why static batching wastes GPU compute on language models by locking requests of different lengths together, and how continuous batching fixes this by reusing slots as requests finish. You'll understand the key difference between these two scheduling approaches and be able to explain why continuous batching is more efficient—and where its limits still apply.",
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
    "LLM inference",
    "batching",
    "continuous batching",
    "static batching",
    "GPU optimization",
    "model serving",
    "scheduling",
    "transformer efficiency",
    "token generation"
   ],
   "src": "/media/learn/serving/serving-02.mp4",
   "poster": "/media/learn/serving/serving-02.jpg",
   "captions": "/media/learn/serving/serving-02.vtt"
  },
  {
   "n": 3,
   "title": "Why GPUs Run Out of Memory: The KV Cache and Paging",
   "summary": "Learn why a single GPU serving multiple concurrent conversations runs out of memory so quickly, even when it shouldn't. This video explains the KV cache problem, how memory fragmentation wastes space, and how paging blocks—borrowed from operating systems—solve both fragmentation and enable memory sharing across requests with identical prompts.",
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
    "LLM inference",
    "serving models",
    "memory optimization",
    "block allocation",
    "attention cache"
   ],
   "src": "/media/learn/serving/serving-03.mp4",
   "poster": "/media/learn/serving/serving-03.jpg",
   "captions": "/media/learn/serving/serving-03.vtt"
  },
  {
   "n": 4,
   "title": "Making Models Smaller: Quantization, Distillation, and Pruning",
   "summary": "Learn three practical techniques for compressing machine learning models to use less memory and run faster: quantization (rounding numbers to fewer bits), distillation (training a small model to copy a large one), and pruning (removing parameters that barely matter). You'll understand when each technique works best and what mistakes to avoid when compressing models for real-world use.",
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
    "neural networks",
    "inference efficiency",
    "parameter reduction",
    "deep learning"
   ],
   "src": "/media/learn/serving/serving-04.mp4",
   "poster": "/media/learn/serving/serving-04.jpg",
   "captions": "/media/learn/serving/serving-04.vtt"
  },
  {
   "n": 5,
   "title": "Serving Thousands of Custom Models With One Shared Base",
   "summary": "Learn how companies serve hundreds of fine-tuned language model variants to customers without running hundreds of separate models. You'll understand the architecture of adapters, request routing, and memory management that makes personalized AI services economically feasible at scale.",
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
    "serving infrastructure",
    "model scaling",
    "fine-tuning",
    "GPU memory",
    "request routing",
    "cold starts"
   ],
   "src": "/media/learn/serving/serving-05.mp4",
   "poster": "/media/learn/serving/serving-05.jpg",
   "captions": "/media/learn/serving/serving-05.vtt"
  },
  {
   "n": 6,
   "title": "Speculative Decoding: How Models Guess Ahead",
   "summary": "Learn how speculative decoding speeds up language model inference by using a small, fast draft model to propose multiple tokens at once, which a larger model then verifies in a single pass. This technique keeps output quality exactly the same while often getting several tokens for the cost of one, and you'll understand both how it works and why teams commonly stumble when implementing it.",
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
    "model efficiency",
    "machine learning",
    "neural networks",
    "large language models",
    "LLM performance"
   ],
   "src": "/media/learn/serving/serving-06.mp4",
   "poster": "/media/learn/serving/serving-06.jpg",
   "captions": "/media/learn/serving/serving-06.vtt"
  },
  {
   "n": 7,
   "title": "Three Ways to Scale AI Models Across Multiple GPUs",
   "summary": "When one GPU isn't enough to handle requests or fit a large model, there are three distinct strategies: data parallelism (copies of the model), tensor parallelism (splitting calculations across GPUs), and pipeline parallelism (splitting the model into stages). Learn which approach solves which problem, why teams often combine all three, and the most common mistakes that make scaling slower instead of faster.",
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
    "distributed inference",
    "machine learning",
    "model deployment",
    "AI systems",
    "GPUs",
    "parallel computing"
   ],
   "src": "/media/learn/serving/serving-07.mp4",
   "poster": "/media/learn/serving/serving-07.jpg",
   "captions": "/media/learn/serving/serving-07.vtt"
  },
  {
   "n": 8,
   "title": "The Question Nobody Asks Before Launch: Operating LLMs in Production",
   "summary": "Once an LLM service goes live, the questions change from how it works to whether it's reliable, fast enough, and affordable. Learn what actually matters to monitor (tail latency and time-to-first-token, not averages), why autoscaling fails for model servers, what your dashboard should really show, what drives your costs, and the four failure modes that strike at 3 a.m.",
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
    "LLM operations",
    "production deployment",
    "latency monitoring",
    "autoscaling",
    "cost optimization",
    "p99 latency",
    "time-to-first-token",
    "request queue",
    "dashboard metrics",
    "infrastructure"
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
   "summary": "Learn the critical difference between a model that truly learns a pattern and one that simply memorizes noise in the data. Using apartment rental data as an example, this video shows you how fitting works, why overfitting happens, and how the train-test split catches models that fail on new data.",
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
    "train-test split",
    "model parameters",
    "generalization",
    "learning from data"
   ],
   "src": "/media/learn/learning/learning-01.mp4",
   "poster": "/media/learn/learning/learning-01.jpg",
   "captions": "/media/learn/learning/learning-01.vtt"
  },
  {
   "n": 2,
   "title": "What Does 'Best Fit' Mean? Linear Models & Sum of Squared Errors",
   "summary": "Learn how statisticians and data scientists define what makes a line the \"best\" fit through a scatter of data points. This video teaches you the concept of residuals, why we square them, and how the sum of squared errors (SSE) gives us a single number to minimize when finding the optimal linear model.",
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
    "SSE",
    "linear model",
    "least squares",
    "modeling",
    "statistics",
    "data analysis"
   ],
   "src": "/media/learn/learning/learning-02.mp4",
   "poster": "/media/learn/learning/learning-02.jpg",
   "captions": "/media/learn/learning/learning-02.vtt"
  },
  {
   "n": 3,
   "title": "How Machine Learning Models Learn: Loss Functions and Gradient Descent",
   "summary": "Learn the core mechanism that powers machine learning: how models guess, measure their mistakes, and adjust their internal numbers to get better. This video walks through loss functions, gradients, and gradient descent using a real apartment rental prediction example, and reveals where people commonly get stuck in practice.",
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
    "model training",
    "optimization",
    "learning rate",
    "parameters",
    "calculus",
    "supervised learning"
   ],
   "src": "/media/learn/learning/learning-03.mp4",
   "poster": "/media/learn/learning/learning-03.jpg",
   "captions": "/media/learn/learning/learning-03.vtt"
  },
  {
   "n": 4,
   "title": "Overfitting and Underfitting: The Bias-Variance Tradeoff",
   "summary": "Learn why a model with zero training error can fail on new data, and how to build models that actually generalize. This video teaches you to split data into training, validation, and test sets, recognize overfitting and underfitting, understand the bias-variance tradeoff, and use regularization to prevent models from chasing noise instead of real patterns.",
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
    "regularization",
    "model selection",
    "training vs test error",
    "machine learning",
    "generalization",
    "validation set",
    "model complexity"
   ],
   "src": "/media/learn/learning/learning-04.mp4",
   "poster": "/media/learn/learning/learning-04.jpg",
   "captions": "/media/learn/learning/learning-04.vtt"
  },
  {
   "n": 5,
   "title": "Logistic Regression: Predicting Categories Instead of Numbers",
   "summary": "Learn how to shift from predicting quantities to predicting categories—like whether an apartment will rent fast or not. This video introduces the sigmoid function and logistic regression, explaining why a straight line fails for classification and how to use a decision boundary and threshold to make yes-or-no predictions. You'll see concrete examples and common mistakes to avoid.",
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
    "threshold",
    "probability",
    "supervised learning",
    "predictive modeling"
   ],
   "src": "/media/learn/learning/learning-05.mp4",
   "poster": "/media/learn/learning/learning-05.jpg",
   "captions": "/media/learn/learning/learning-05.vtt"
  },
  {
   "n": 6,
   "title": "Why 92% Accuracy Can Be Useless: Confusion Matrices, Precision, and Recall",
   "summary": "Learn why accuracy alone is a misleading metric for evaluating machine learning models, especially with imbalanced datasets. This video teaches you to use confusion matrices, precision, and recall to catch when a model is secretly useless—and how to properly validate your model using train-test splits so it's not just memorizing answers.",
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
    "precision recall",
    "class imbalance",
    "accuracy metric",
    "train-test split",
    "model validation",
    "classification metrics"
   ],
   "src": "/media/learn/learning/learning-06.mp4",
   "poster": "/media/learn/learning/learning-06.jpg",
   "captions": "/media/learn/learning/learning-06.vtt"
  },
  {
   "n": 7,
   "title": "The Model That Was Too Good: Spotting Data Leakage",
   "summary": "Learn why a machine learning model that seems almost perfect on test data might actually fail in the real world. This video teaches you to spot and fix data leakage—when information sneaks into training that you wouldn't actually have at prediction time—along with essential techniques like feature scaling, handling categories, and dealing with missing values. You'll understand how to build models you can actually trust.",
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
    "model validation",
    "data preprocessing",
    "supervised learning",
    "prediction",
    "overfitting",
    "data science",
    "testing"
   ],
   "src": "/media/learn/learning/learning-07.mp4",
   "poster": "/media/learn/learning/learning-07.jpg",
   "captions": "/media/learn/learning/learning-07.vtt"
  },
  {
   "n": 8,
   "title": "The Complete ML Pipeline: Raw Data to Honest Predictions",
   "summary": "Watch all seven parts of machine learning come together as a complete working system: cleaning data, engineering features, building a model, training with gradient descent, and properly testing on held-out data. By the end, you'll understand the full pipeline from raw apartment listings to trustworthy rent predictions, and know the three critical mistakes that derail most attempts.",
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
    "test-train split",
    "feature engineering",
    "loss function"
   ],
   "src": "/media/learn/learning/learning-08.mp4",
   "poster": "/media/learn/learning/learning-08.jpg",
   "captions": "/media/learn/learning/learning-08.vtt"
  },
  {
   "n": 9,
   "title": "K-Fold Cross-Validation: Testing Models Fairly",
   "summary": "Learn why a single train-test split can give misleading model scores and how k-fold cross-validation provides a more reliable evaluation. This video teaches you to divide your data into k folds, rotate which fold serves as the test set, and average the results to get an honest assessment—plus how to avoid two critical mistakes like data leakage.",
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
    "machine learning",
    "model comparison",
    "overfitting",
    "validation",
    "preprocessing"
   ],
   "src": "/media/learn/learning/learning-09.mp4",
   "poster": "/media/learn/learning/learning-09.jpg",
   "captions": "/media/learn/learning/learning-09.vtt"
  },
  {
   "n": 10,
   "title": "Decision Trees: How to Predict with Yes-or-No Questions",
   "summary": "Learn how decision trees make predictions by asking a series of yes-or-no questions about your data, from the root node down to leaf nodes. This video explains how trees choose their splitting questions using variance and impurity, how they work for both numbers and categories, and why unchecked growth leads to overfitting. After watching, you'll understand the complete decision tree structure and how to prevent models from memorizing noise instead of learning real patterns.",
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
    "regression",
    "classification",
    "variance",
    "impurity",
    "overfitting",
    "machine learning",
    "splitting",
    "root node"
   ],
   "src": "/media/learn/learning/learning-10.mp4",
   "poster": "/media/learn/learning/learning-10.jpg",
   "captions": "/media/learn/learning/learning-10.vtt"
  },
  {
   "n": 11,
   "title": "Why Many Weak Models Beat One Strong Model: Bagging and Random Forests",
   "summary": "Learn why combining hundreds of simple, slightly different decision trees produces better predictions than one carefully optimized tree. This video teaches bagging (bootstrap aggregating) and random forests—techniques that exploit the wobble in high-variance models—and shows how averaging many mediocre guesses can outperform a single careful one, using real apartment price data as an example.",
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
    "predictive modeling",
    "bootstrap aggregating"
   ],
   "src": "/media/learn/learning/learning-11.mp4",
   "poster": "/media/learn/learning/learning-11.jpg",
   "captions": "/media/learn/learning/learning-11.vtt"
  },
  {
   "n": 12,
   "title": "Hyperparameters: Tuning the Knobs Before Training",
   "summary": "Learn the critical difference between parameters (learned during training) and hyperparameters (chosen beforehand), and why the settings you pick before training starts matter just as much as the learning process itself. You'll discover how to use validation sets and grid search to find optimal hyperparameter values like lambda and learning rate, and avoid common pitfalls that make your test results unreliable.",
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
    "lambda",
    "learning rate",
    "cross-validation",
    "model tuning",
    "overfitting",
    "underfitting"
   ],
   "src": "/media/learn/learning/learning-12.mp4",
   "poster": "/media/learn/learning/learning-12.jpg",
   "captions": "/media/learn/learning/learning-12.vtt"
  },
  {
   "n": 13,
   "title": "Imbalanced Classification: When 99% Accuracy Means Nothing",
   "summary": "Learn why accuracy is a misleading metric when predicting rare events, and how to properly evaluate models using confusion matrices, precision, and recall. This video teaches you to recognize the base rate trap, understand the precision-recall tradeoff, and fix imbalanced datasets through resampling and class weights.",
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
    "accuracy metric",
    "precision recall",
    "confusion matrix",
    "class imbalance",
    "base rate",
    "decision threshold",
    "oversampling",
    "class weights",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-13.mp4",
   "poster": "/media/learn/learning/learning-13.jpg",
   "captions": "/media/learn/learning/learning-13.vtt"
  },
  {
   "n": 14,
   "title": "Introduction to Unsupervised Learning and K-Means Clustering",
   "summary": "Learn how to find hidden structure in data when there's no answer key to guide you. This video introduces unsupervised learning and the k-means algorithm, showing how to group similar data points into clusters, handle the choice of cluster count, and avoid common pitfalls like unscaled features and outliers.",
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
    "feature scaling",
    "elbow method",
    "centroids",
    "data grouping",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-14.mp4",
   "poster": "/media/learn/learning/learning-14.jpg",
   "captions": "/media/learn/learning/learning-14.vtt"
  },
  {
   "n": 15,
   "title": "Dimensionality Reduction: PCA and Feature Selection",
   "summary": "Learn how to handle datasets with too many features using Principal Component Analysis (PCA). This video explains the curse of dimensionality, how to identify redundant columns, and walks through the math behind finding principal components—then shows the common mistakes that derail PCA in practice. After watching, you'll know how to reduce 47 noisy columns down to a small set of meaningful features.",
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
    "feature selection",
    "covariance matrix",
    "eigenvectors",
    "data preprocessing",
    "standardization",
    "curse of dimensionality"
   ],
   "src": "/media/learn/learning/learning-15.mp4",
   "poster": "/media/learn/learning/learning-15.jpg",
   "captions": "/media/learn/learning/learning-15.vtt"
  },
  {
   "n": 16,
   "title": "After Training: Calibration, Explanation, and Drift",
   "summary": "A good model in the lab isn't ready for the real world without three more things: ensuring confidence scores are honest (calibration), explaining specific predictions to users (explanation), and monitoring whether new data still matches what the model learned from (drift). This video shows why each matters and the common mistakes teams make with each one.",
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
    "model explanation",
    "SHAP",
    "data drift",
    "concept drift",
    "machine learning",
    "model monitoring",
    "temperature scaling",
    "production ML"
   ],
   "src": "/media/learn/learning/learning-16.mp4",
   "poster": "/media/learn/learning/learning-16.jpg",
   "captions": "/media/learn/learning/learning-16.vtt"
  },
  {
   "n": 17,
   "title": "Neural Networks: From Logistic Regression to Stacked Neurons",
   "summary": "Discover why neural networks are not entirely new—logistic regression is actually a single neuron. Learn what happens when you stack neurons, why linear layers collapse into one effective layer, and how a single nonlinearity between layers unlocks the power to separate data that straight lines cannot. By the end, you'll understand the algebra behind why this architecture works.",
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
    "hidden layers",
    "deep learning",
    "machine learning fundamentals",
    "neural network architecture"
   ],
   "src": "/media/learn/learning/learning-17.mp4",
   "poster": "/media/learn/learning/learning-17.jpg",
   "captions": "/media/learn/learning/learning-17.vtt"
  },
  {
   "n": 18,
   "title": "Inside the Hidden Layer: What Neural Networks Actually Learn",
   "summary": "This video opens the box on neural network hidden layers, explaining what hidden units actually compute and how activation functions make networks non-linear. You'll learn why ReLU outperforms sigmoid, how hidden units learn mixed feature directions rather than single concepts, and the tradeoffs between network width and depth.",
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
    "feature learning",
    "machine learning",
    "deep learning",
    "gradient descent",
    "backpropagation",
    "network architecture"
   ],
   "src": "/media/learn/learning/learning-18.mp4",
   "poster": "/media/learn/learning/learning-18.jpg",
   "captions": "/media/learn/learning/learning-18.vtt"
  },
  {
   "n": 19,
   "title": "Backpropagation: Computing Gradients Through Layers",
   "summary": "Learn how gradient descent updates weights buried deep inside neural networks by using the chain rule repeatedly—a process called backpropagation. Walk through a concrete example with a tiny two-layer network, computing both the forward pass and backward pass by hand to see exactly how the gradient flows from the loss back to each weight.",
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
    "training",
    "ReLU",
    "vanishing gradients",
    "exploding gradients"
   ],
   "src": "/media/learn/learning/learning-19.mp4",
   "poster": "/media/learn/learning/learning-19.jpg",
   "captions": "/media/learn/learning/learning-19.vtt"
  },
  {
   "n": 20,
   "title": "Training Neural Networks: The Hyperparameters That Matter",
   "summary": "Learn the practical knobs you actually need to turn to train a neural network successfully—weight initialization, learning rate, batch size, and regularization techniques. This lesson bridges the gap between understanding gradient descent mathematically and knowing how to run it in practice, covering the diagnostic skills to read a loss curve and fix what's breaking.",
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
    "training",
    "deep learning"
   ],
   "src": "/media/learn/learning/learning-20.mp4",
   "poster": "/media/learn/learning/learning-20.jpg",
   "captions": "/media/learn/learning/learning-20.vtt"
  },
  {
   "n": 21,
   "title": "Convolutional Neural Networks: From Fully Connected to Sliding Kernels",
   "summary": "Learn why convolutional layers replace fully connected layers when processing images, and how sliding a small kernel across pixels solves the parameter explosion problem. This video walks you through the concepts of parameter sharing, locality, and translation invariance with a concrete hand-worked example, then shows what stacked convolutions actually learn—from edges to textures to parts.",
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
    "edge detection",
    "parameter sharing",
    "image processing",
    "deep learning",
    "stride padding channels",
    "pooling",
    "neural network architecture"
   ],
   "src": "/media/learn/learning/learning-21.mp4",
   "poster": "/media/learn/learning/learning-21.jpg",
   "captions": "/media/learn/learning/learning-21.vtt"
  },
  {
   "n": 22,
   "title": "Word Embeddings: Turning Words into Numbers",
   "summary": "Learn why words need to be converted to numbers for machine learning models, and why simple approaches like integer codes or one-hot vectors fail. This video teaches you how embeddings—dense vectors learned from context—capture word relationships and meaning in a way that models can actually use.",
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
    "context prediction",
    "neural networks",
    "feature engineering"
   ],
   "src": "/media/learn/learning/learning-22.mp4",
   "poster": "/media/learn/learning/learning-22.jpg",
   "captions": "/media/learn/learning/learning-22.vtt"
  },
  {
   "n": 23,
   "title": "How Transformers Actually Work: From Attention to LLMs",
   "summary": "Learn what transformers are by solving the real problems they solve: how words in a sequence can see each other instantly instead of fading into memory, and how models can process everything in parallel. Walk through the core pieces—query, key, value, multi-head attention, feed-forward layers, and positional encoding—and understand how they stack together to build large language models.",
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
    "large language models",
    "neural networks",
    "query key value",
    "multi-head attention",
    "positional encoding",
    "deep learning",
    "LLM architecture",
    "gradient descent"
   ],
   "src": "/media/learn/learning/learning-23.mp4",
   "poster": "/media/learn/learning/learning-23.jpg",
   "captions": "/media/learn/learning/learning-23.vtt"
  },
  {
   "n": 24,
   "title": "When NOT to Use Deep Learning: The Right Tool for Tabular Data",
   "summary": "This video explains why deep learning isn't always the best choice, using the rent prediction dataset as a case study. You'll learn when deep learning actually wins (structured data like images and text), why gradient boosting usually beats it on tabular data, and how to make an informed choice between models by checking five key factors: data size, input type, compute cost, explainability needs, and availability of pretrained models.",
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
    "machine learning practical",
    "neural networks",
    "when to use",
    "decision guide",
    "explainability",
    "transfer learning"
   ],
   "src": "/media/learn/learning/learning-24.mp4",
   "poster": "/media/learn/learning/learning-24.jpg",
   "captions": "/media/learn/learning/learning-24.vtt"
  },
  {
   "n": 25,
   "title": "Time Series Cross-Validation: Avoiding Future Leakage",
   "summary": "Learn why shuffling time-ordered data for cross-validation breaks your model by leaking information from the future into training. This video teaches chronological splits and rolling-origin validation as the correct way to evaluate time series models, plus how to audit your data for hidden timing issues in features and labels.",
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
    "walk-forward validation",
    "autocorrelation",
    "chronological split",
    "train-test split",
    "machine learning evaluation",
    "model validation"
   ],
   "src": "/media/learn/learning/learning-25.mp4",
   "poster": "/media/learn/learning/learning-25.jpg",
   "captions": "/media/learn/learning/learning-25.vtt"
  },
  {
   "n": 26,
   "title": "Time Series Forecasting: From Persistence to Prediction Intervals",
   "summary": "Learn how to build reliable forecasts by starting with a simple baseline, decomposing data into trend and seasonality, and converting the problem into standard regression using lag features. You'll understand why prediction intervals beat single-number forecasts, how the forecast horizon changes difficulty, and what mistakes to avoid—so your model admits uncertainty rather than false precision.",
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
    "prediction intervals",
    "RMSE MAE",
    "forecast horizon",
    "data leakage",
    "regression",
    "forecasting mistakes"
   ],
   "src": "/media/learn/learning/learning-26.mp4",
   "poster": "/media/learn/learning/learning-26.jpg",
   "captions": "/media/learn/learning/learning-26.vtt"
  },
  {
   "n": 27,
   "title": "Prediction vs. Causation: Why Good Models Can Give Bad Advice",
   "summary": "Learn the critical difference between predictive questions (\"what will happen?\") and causal questions (\"what will happen if I do this?\"), using a doorman-and-rent example to show how a model can predict beautifully while being completely wrong as a basis for action. You'll understand confounders, counterfactuals, and the discipline needed to ask the right question before building any model.",
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
    "counterfactual",
    "causal inference",
    "model interpretation",
    "observational data",
    "intervention",
    "machine learning fundamentals"
   ],
   "src": "/media/learn/learning/learning-27.mp4",
   "poster": "/media/learn/learning/learning-27.jpg",
   "captions": "/media/learn/learning/learning-27.vtt"
  },
  {
   "n": 28,
   "title": "Randomized Experiments: From Correlation to Causation",
   "summary": "Learn how randomization lets you identify true causal effects instead of just correlations, using a university shuttle stop experiment as the running example. You'll understand why randomizing the right unit matters, how sample size affects confidence, and three common mistakes that break experiments—peeking at results, testing too many variants, and group interference. After this video, you'll be able to recognize whether an experiment is designed well and interpret its results correctly.",
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
    "causality",
    "randomized experiments",
    "experimental design",
    "statistical significance",
    "p-hacking",
    "confounding",
    "causal inference",
    "sample size",
    "control groups"
   ],
   "src": "/media/learn/learning/learning-28.mp4",
   "poster": "/media/learn/learning/learning-28.jpg",
   "captions": "/media/learn/learning/learning-28.vtt"
  },
  {
   "n": 29,
   "title": "Causation from Observational Data: Confounders, Diff-in-Diff, and Matching",
   "summary": "When you can't run a randomized experiment, how do you know if a treatment really caused an outcome? This video teaches three techniques—controlling for confounders, difference-in-differences, and matching—to estimate causal effects from real-world data. You'll learn when each method works, what can go wrong (especially controlling for the wrong variables), and how to make defensible causal claims.",
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
    "observational data",
    "difference-in-differences",
    "matching",
    "regression",
    "causal inference",
    "natural experiments",
    "mediators"
   ],
   "src": "/media/learn/learning/learning-29.mp4",
   "poster": "/media/learn/learning/learning-29.jpg",
   "captions": "/media/learn/learning/learning-29.vtt"
  },
  {
   "n": 30,
   "title": "Q-Learning and Reinforcement Learning Fundamentals",
   "summary": "This video introduces reinforcement learning, where an agent learns by taking actions and observing rewards rather than from a fixed dataset. You'll understand how credit assignment works (tracing consequences of past decisions), why Q-learning tracks state-action pairs instead of just states, and why simulators are essential for training agents without costly real-world mistakes.",
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
    "agent learning",
    "policy",
    "value function",
    "simulator",
    "decision making"
   ],
   "src": "/media/learn/learning/learning-30.mp4",
   "poster": "/media/learn/learning/learning-30.jpg",
   "captions": "/media/learn/learning/learning-30.vtt"
  },
  {
   "n": 31,
   "title": "Bandits and Exploration: When to Try Something New",
   "summary": "Learn how to balance exploiting what works with exploring unknown options—a problem that comes up whenever you have to decide what to try next based on your own data. This video teaches practical strategies like epsilon-greedy and UCB that let you find the best choice (like an apartment rental price) without wasting time on bad options or missing the real winners.",
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
    "bandits",
    "exploration-exploitation",
    "UCB",
    "epsilon-greedy",
    "regret",
    "thompson-sampling",
    "decision-making",
    "A/B testing",
    "optimization",
    "machine-learning"
   ],
   "src": "/media/learn/learning/learning-31.mp4",
   "poster": "/media/learn/learning/learning-31.jpg",
   "captions": "/media/learn/learning/learning-31.vtt"
  },
  {
   "n": 32,
   "title": "Four Questions, One Dataset: Choosing Your Paradigm",
   "summary": "Learn how to match your problem to the right machine learning paradigm before writing any code. This video teaches you to identify whether your question calls for supervised learning, unsupervised learning, causal inference, or reinforcement learning—and what each paradigm actually demands from your data and your approach.",
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
    "problem framing",
    "feature engineering",
    "model selection",
    "data requirements"
   ],
   "src": "/media/learn/learning/learning-32.mp4",
   "poster": "/media/learn/learning/learning-32.jpg",
   "captions": "/media/learn/learning/learning-32.vtt"
  },
  {
   "n": 33,
   "title": "Regularization: Ridge, Lasso, and Elastic Net",
   "summary": "Learn why models can use correlated features to fit noise, and how ridge and lasso regression fix this by penalizing large coefficients. By the end, you'll understand the geometric intuition behind each method and know when to use elastic net to handle redundant features.",
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
    "feature coefficients",
    "cross-validation",
    "machine learning"
   ],
   "src": "/media/learn/learning/learning-33.mp4",
   "poster": "/media/learn/learning/learning-33.jpg",
   "captions": "/media/learn/learning/learning-33.vtt"
  },
  {
   "n": 34,
   "title": "Gradient Boosting: How Boosting Fixes What Came Before",
   "summary": "Learn how gradient boosting trains a sequence of weak models to fix the errors of previous ones, building toward an accurate prediction step by step. This video explains why it's called \"gradient\" boosting, how it differs from bagging and AdaBoost, and what makes modern libraries like XGBoost and LightGBM so effective. You'll understand the core mechanism that makes boosting one of the most practical tools for tabular data in real jobs.",
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
    "XGBoost",
    "LightGBM",
    "machine learning",
    "weak learners",
    "residuals",
    "ensemble methods",
    "tabular data",
    "AdaBoost"
   ],
   "src": "/media/learn/learning/learning-34.mp4",
   "poster": "/media/learn/learning/learning-34.jpg",
   "captions": "/media/learn/learning/learning-34.vtt"
  },
  {
   "n": 35,
   "title": "Beyond K-Means: When Hierarchical and DBSCAN Clustering Matter",
   "summary": "K-means assumes round clusters and a predetermined count, which fails on real data like apartment listings along roads. This lesson covers hierarchical clustering and DBSCAN—two alternatives with different trade-offs—and how to choose the right tool by understanding each method's assumptions and limitations.",
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
    "machine learning",
    "data science",
    "unsupervised learning",
    "classification"
   ],
   "src": "/media/learn/learning/learning-35.mp4",
   "poster": "/media/learn/learning/learning-35.jpg",
   "captions": "/media/learn/learning/learning-35.vtt"
  },
  {
   "n": 36,
   "title": "Beyond PCA: t-SNE and UMAP for curved data",
   "summary": "Learn why PCA fails on curved data and when to use t-SNE or UMAP instead. This lesson teaches you how these neighbor-preserving methods work, what perplexity controls, and crucially—how to correctly interpret their results without falling into common traps like trusting cluster sizes or distances.",
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
    "clustering",
    "neighbor preservation",
    "nonlinear",
    "curved structure"
   ],
   "src": "/media/learn/learning/learning-36.mp4",
   "poster": "/media/learn/learning/learning-36.jpg",
   "captions": "/media/learn/learning/learning-36.vtt"
  }
 ];

export const COUNTING: Lesson[] = [
  {
   "n": 1,
   "title": "Counting Sequences: Multiplication vs Addition",
   "summary": "Discover why multiplying is the right approach for counting codes, lineups, and other sequential choices—and when to add instead. Through rectangles and trees, you'll see the underlying structure that explains the fundamental counting principle and learn the key test for avoiding the most common mistake in combinatorics.",
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
    "counting principles",
    "multiplication principle",
    "combinatorics",
    "permutations",
    "with replacement",
    "without replacement",
    "badge codes",
    "sequential choices"
   ],
   "src": "/media/learn/counting/counting-01.mp4",
   "poster": "/media/learn/counting/counting-01.jpg",
   "captions": "/media/learn/counting/counting-01.vtt"
  },
  {
   "n": 2,
   "title": "Permutations: Arranging Things in Order",
   "summary": "Learn how to count the number of ways to arrange objects in a specific order using the multiplication principle. This video walks through permutation problems from simple scenarios like race podium finishes to more complex cases like arranging some items from a larger set, and shows you how to avoid the common mistake of using permutations when order doesn't actually matter.",
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
    "counting principle",
    "arrangements",
    "combinatorics",
    "multiplication principle",
    "order matters",
    "n factorial",
    "combinations vs permutations"
   ],
   "src": "/media/learn/counting/counting-02.mp4",
   "poster": "/media/learn/counting/counting-02.jpg",
   "captions": "/media/learn/counting/counting-02.vtt"
  },
  {
   "n": 3,
   "title": "Combinations: Picking Groups Where Order Doesn't Matter",
   "summary": "Learn why picking a committee is different from assigning ranked roles, and how to count groups where order doesn't matter using the combinations formula. You'll discover how to recognize when order matters versus when it doesn't, derive the formula for \"n choose k,\" and apply it to real problems like lotteries and selections.",
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
    "permutations",
    "counting",
    "n choose k",
    "factorial",
    "committee problem",
    "multiplication rule",
    "probability",
    "discrete math",
    "how to count"
   ],
   "src": "/media/learn/counting/counting-03.mp4",
   "poster": "/media/learn/counting/counting-03.jpg",
   "captions": "/media/learn/counting/counting-03.vtt"
  },
  {
   "n": 4,
   "title": "Binomial Coefficients: Structure and Identities",
   "summary": "Learn why binomial coefficients like C(n,k) matter beyond just plugging numbers into a formula. This video teaches five key identities—symmetry, Pascal's recurrence, the binomial theorem, the sum to 2^n, and the hockey-stick identity—through counting arguments and bijections, so you can use them as shortcuts to solve problems without tedious arithmetic.",
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
    "identities",
    "counting proofs",
    "bijection",
    "C(n,k)",
    "combinatorial logic"
   ],
   "src": "/media/learn/counting/counting-04.mp4",
   "poster": "/media/learn/counting/counting-04.jpg",
   "captions": "/media/learn/counting/counting-04.vtt"
  },
  {
   "n": 5,
   "title": "Four Types of Counting Problems: The Decision Tree",
   "summary": "Learn how to classify any counting problem into one of four distinct types by answering two key questions: does order matter, and can items repeat? This video teaches you which formula to apply for each type—from passwords with repetition allowed to committees where order doesn't matter—so you can stop guessing and solve counting problems correctly.",
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
    "counting problems",
    "permutations",
    "combinations",
    "multiplication principle",
    "order matters",
    "repetition allowed",
    "combinatorics",
    "problem-solving strategy"
   ],
   "src": "/media/learn/counting/counting-05.mp4",
   "poster": "/media/learn/counting/counting-05.jpg",
   "captions": "/media/learn/counting/counting-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Counting Problems: Breaking Stories Into Stages",
   "summary": "Learn how to translate word problems into structured counting problems by identifying stages and understanding when order matters. This video teaches the critical modeling step that comes before applying the multiplication principle, showing you how to correctly set up problems like seating arrangements and task assignments.",
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
    "problem modeling",
    "combinatorics",
    "stages",
    "order matters",
    "word problems",
    "setup",
    "repetition rules"
   ],
   "src": "/media/learn/counting/counting-06.mp4",
   "poster": "/media/learn/counting/counting-06.jpg",
   "captions": "/media/learn/counting/counting-06.vtt"
  },
  {
   "n": 7,
   "title": "Counting with Multiple Tools: Combinations, Permutations, and Restrictions",
   "summary": "Learn how to solve counting problems that require combining multiple techniques—like choosing a committee and then arranging roles, or subtracting restricted cases. This video teaches you to avoid the most common mistakes: treating unordered groups as ordered, guessing instead of counting bad cases, and double-subtracting overlapping restrictions.",
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
    "combinatorics",
    "counting problems",
    "combinations",
    "permutations",
    "inclusion-exclusion",
    "restrictions",
    "exam strategies",
    "problem-solving",
    "mathematics"
   ],
   "src": "/media/learn/counting/counting-07.mp4",
   "poster": "/media/learn/counting/counting-07.jpg",
   "captions": "/media/learn/counting/counting-07.vtt"
  },
  {
   "n": 8,
   "title": "Sample Spaces and Set Operations: The Foundation of Probability",
   "summary": "Learn how to describe all possible outcomes of a random experiment using sample spaces, and how to combine events using set operations like union, intersection, and complement. This lesson teaches you to translate real-world probability questions into precise mathematical language, using a robotics club's sensor testing as a concrete example throughout.",
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
    "probability",
    "set operations",
    "union intersection",
    "complement",
    "De Morgan's laws",
    "events",
    "set notation",
    "experiments",
    "outcomes"
   ],
   "src": "/media/learn/counting/counting-08.mp4",
   "poster": "/media/learn/counting/counting-08.jpg",
   "captions": "/media/learn/counting/counting-08.vtt"
  },
  {
   "n": 9,
   "title": "Probability Axioms: The Three Rules That Define P",
   "summary": "This video defines probability formally as a function that takes events as input and outputs numbers following three fundamental rules: non-negativity, total probability equals one, and additivity for disjoint events. You'll learn why these axioms matter, see them verified in real models like equally likely outcomes and relative frequency, and prove your first theorem (that P of the empty set is zero) directly from the axioms.",
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
    "probability theory",
    "sample space",
    "events",
    "Kolmogorov axioms",
    "disjoint events",
    "additivity",
    "probability function",
    "mathematical foundations"
   ],
   "src": "/media/learn/counting/counting-09.mp4",
   "poster": "/media/learn/counting/counting-09.jpg",
   "captions": "/media/learn/counting/counting-09.vtt"
  },
  {
   "n": 10,
   "title": "Probability Rules: Complements and the Addition Formula",
   "summary": "Learn how to derive key probability rules from first principles, including the complement rule, monotonicity, and the general addition formula for overlapping events. You'll see how to handle \"at least one\" problems efficiently by using the complement strategy, and master the inclusion-exclusion pattern that extends to three or more events.",
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
    "at least one",
    "axioms",
    "Venn diagrams",
    "defective sensors"
   ],
   "src": "/media/learn/counting/counting-10.mp4",
   "poster": "/media/learn/counting/counting-10.jpg",
   "captions": "/media/learn/counting/counting-10.vtt"
  },
  {
   "n": 11,
   "title": "Classical Probability: Counting to Find Probabilities",
   "summary": "Learn when and how to use the classical probability formula—dividing the size of an event by the size of the sample space. You'll see when this formula applies (outcomes must be equally likely), when it fails (like with biased tests), and how to use combinatorics tools from counting to solve real probability problems with committees, shipments, and arrangements.",
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
    "classical probability",
    "counting",
    "combinations",
    "equally likely outcomes",
    "sample space",
    "combinatorics",
    "worked examples"
   ],
   "src": "/media/learn/counting/counting-11.mp4",
   "poster": "/media/learn/counting/counting-11.jpg",
   "captions": "/media/learn/counting/counting-11.vtt"
  },
  {
   "n": 12,
   "title": "One Sensor, One Number: Probability's Limit and Meaning",
   "summary": "This video tackles two fundamental ideas that probability courses typically rush: what happens when events nest inside each other infinitely, and what a probability number actually means for a single case. You'll learn the continuity axiom—why the probability of a limit set equals the limit of probabilities—and explore two rigorous interpretations of probability: long-run frequency and degree of belief. After watching, you'll understand not just how to compute probabilities, but what they mean and why the axioms guarantee their behavior.",
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
    "continuity of probability",
    "nested sets",
    "limit of events",
    "frequentist probability",
    "subjective probability",
    "degree of belief",
    "probability interpretation",
    "measure theory",
    "probability foundations"
   ],
   "src": "/media/learn/counting/counting-12.mp4",
   "poster": "/media/learn/counting/counting-12.jpg",
   "captions": "/media/learn/counting/counting-12.vtt"
  },
  {
   "n": 13,
   "title": "Proving Probability Results: Four Essential Proof Techniques",
   "summary": "Learn the four core moves used in almost every probability proof: disjoint decomposition, the complement trick, monotonicity, and De Morgan's laws. This video teaches you not just the axioms but how to actually use them to prove results like the addition rule for three events and Boole's inequality—turning abstract knowledge into exam-ready proof-writing skills.",
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
    "probability proofs",
    "axioms",
    "disjoint decomposition",
    "addition rule",
    "Boole's inequality",
    "proof techniques",
    "monotonicity",
    "De Morgan's laws",
    "conditional probability",
    "exam preparation"
   ],
   "src": "/media/learn/counting/counting-13.mp4",
   "poster": "/media/learn/counting/counting-13.jpg",
   "captions": "/media/learn/counting/counting-13.vtt"
  },
  {
   "n": 14,
   "title": "Conditional Probability: Restricting the Sample Space",
   "summary": "Learn how to update your beliefs when you gain new information by understanding conditional probability as a restriction of the sample space. Using a concrete example of defective sensors and a diagnostic test, this video teaches you to compute P(A given B), verify that it satisfies the axioms of probability, and recognize the critical difference between P(A given B) and P(B given A).",
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
    "equally likely outcomes",
    "probability measure",
    "worked example"
   ],
   "src": "/media/learn/counting/counting-14.mp4",
   "poster": "/media/learn/counting/counting-14.jpg",
   "captions": "/media/learn/counting/counting-14.vtt"
  },
  {
   "n": 15,
   "title": "Probability Trees: The Multiplication Rule and Sequential Draws",
   "summary": "Learn why multiplying probabilities works for sequential events, and how to build probability trees to model drawing without replacement. You'll discover that the multiplication rule derives directly from conditional probability, see how to construct and read tree diagrams, and learn to spot common mistakes like forgetting that the pool shrinks or ignoring dependence between draws.",
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
    "probability trees",
    "multiplication rule",
    "conditional probability",
    "chain rule",
    "dependent events",
    "without replacement",
    "sequential draws",
    "probability diagrams"
   ],
   "src": "/media/learn/counting/counting-15.mp4",
   "poster": "/media/learn/counting/counting-15.jpg",
   "captions": "/media/learn/counting/counting-15.vtt"
  },
  {
   "n": 16,
   "title": "The Law of Total Probability",
   "summary": "This video teaches the law of total probability: how to find the probability of an event when multiple paths or conditions can lead to it. You'll learn how to partition the sample space, identify conditional probabilities within each partition, and combine them into a single overall probability using a weighted average. After watching, you'll be able to solve problems like finding the defect rate of a mixed sensor bin from multiple suppliers.",
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
    "probability theory",
    "weighted average",
    "axioms of probability",
    "applied probability"
   ],
   "src": "/media/learn/counting/counting-16.mp4",
   "poster": "/media/learn/counting/counting-16.jpg",
   "captions": "/media/learn/counting/counting-16.vtt"
  },
  {
   "n": 17,
   "title": "Bayes' Formula: Reversing Conditional Probability",
   "summary": "Learn how to flip conditional probabilities using Bayes' formula—from knowing how likely a test is to catch a defect, to knowing how likely a flagged item is actually defective. Discover why a 95% accurate test can still give you wrong answers, and how to update your beliefs as new evidence comes in.",
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
    "Bayes' theorem",
    "conditional probability",
    "base rate fallacy",
    "posterior probability",
    "likelihood",
    "prior probability",
    "statistical inference",
    "probability reversal",
    "evidence",
    "belief updating"
   ],
   "src": "/media/learn/counting/counting-17.mp4",
   "poster": "/media/learn/counting/counting-17.jpg",
   "captions": "/media/learn/counting/counting-17.vtt"
  },
  {
   "n": 18,
   "title": "Independence: The Precise Definition Beyond Intuition",
   "summary": "Independence is a precise mathematical statement—not a vague sense that two things are unrelated. This video teaches the formal definition: events A and B are independent if P(A and B) = P(A) × P(B), and shows why intuition fails us. You'll learn to distinguish independence from causality, disjoint events, and why checking pairs isn't enough for three or more events.",
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
    "product rule",
    "dependent events"
   ],
   "src": "/media/learn/counting/counting-18.mp4",
   "poster": "/media/learn/counting/counting-18.jpg",
   "captions": "/media/learn/counting/counting-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Problems: Applying Conditional Probability Tools",
   "summary": "This workshop presents six realistic problems using conditional probability, Bayes' theorem, total probability, and independence—without telling you which tool to use. You'll learn to identify when to apply each concept, recognize common traps like reversed conditionals and overlapping events, and solve problems under exam conditions. By the end, you'll master the skill of choosing the right tool and applying it in the correct direction.",
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
    "common mistakes",
    "exam preparation",
    "tree diagrams",
    "Monty Hall"
   ],
   "src": "/media/learn/counting/counting-19.mp4",
   "poster": "/media/learn/counting/counting-19.jpg",
   "captions": "/media/learn/counting/counting-19.vtt"
  },
  {
   "n": 20,
   "title": "Recognising Which Formula to Use: Counting vs Probability",
   "summary": "This lesson teaches you a decision tree to quickly identify which counting or probability technique applies to an unlabelled exam problem. You'll learn to ask the right diagnostic questions—first: is it a count or a probability?—then drill down to distinguish permutations, combinations, conditional probability, and Bayes' formula. By working through five realistic unlabelled problems and adopting four key habits, you'll build the recognition skill that matters more than memorising formulas.",
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
    "counting vs probability",
    "permutations",
    "combinations",
    "conditional probability",
    "Bayes theorem",
    "problem recognition",
    "exam strategy",
    "decision tree",
    "equally likely outcomes",
    "word problems"
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
   "summary": "Learn the complete structure of a real data-mining pipeline—not just running an algorithm, but everything from choosing which data to use, through cleaning and modeling, to turning predictions into actual decisions. Using a campus bike-share dataset, walk through selection, preprocessing, modeling, and interpretation as a loop that answers questions and spawns new ones.",
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
    "data cleaning",
    "modelling",
    "selection",
    "interpretation",
    "machine learning",
    "data science workflow",
    "bike-share"
   ],
   "src": "/media/learn/patterns/patterns-01.mp4",
   "poster": "/media/learn/patterns/patterns-01.jpg",
   "captions": "/media/learn/patterns/patterns-01.vtt"
  },
  {
   "n": 2,
   "title": "Exploratory Data Analysis: Understanding Your Data Before Modeling",
   "summary": "Learn the essential data exploration techniques that catch errors before they silently break your model—histograms, distributions, correlation, and how to handle missing values and outliers. By the end, you'll know how to systematically inspect every column of your data and understand how variables relate to each other, so you build models on truth rather than lies hiding in the numbers.",
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
    "EDA",
    "histograms",
    "correlation",
    "outliers",
    "missing values",
    "data cleaning",
    "distributions",
    "scatterplots",
    "data validation"
   ],
   "src": "/media/learn/patterns/patterns-02.mp4",
   "poster": "/media/learn/patterns/patterns-02.jpg",
   "captions": "/media/learn/patterns/patterns-02.vtt"
  },
  {
   "n": 3,
   "title": "Hypothesis Testing and P-Values: The Logic Explained",
   "summary": "Learn the foundational logic of hypothesis testing through a real example: did a new dock actually increase campus trips, or is the change just noise? You'll understand the null hypothesis, test statistics, sampling distributions, and p-values—and crucially, what p-values actually mean and what they don't. This video teaches you to avoid common statistical traps and to interpret evidence correctly.",
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
    "inference",
    "data analysis",
    "common misconceptions"
   ],
   "src": "/media/learn/patterns/patterns-03.mp4",
   "poster": "/media/learn/patterns/patterns-03.jpg",
   "captions": "/media/learn/patterns/patterns-03.vtt"
  },
  {
   "n": 4,
   "title": "Confidence Intervals: Building and Interpreting Honest Estimates",
   "summary": "When you report a single number like an average, how much would it change if you sampled again? This video teaches confidence intervals—what they really mean, how to build them, and why they matter more than p-values alone. You'll learn to quantify uncertainty, understand the true promise of \"95 percent,\" and recognize that statistical significance isn't the same as practical importance.",
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
    "statistical significance",
    "effect size",
    "hypothesis testing",
    "data uncertainty",
    "estimation"
   ],
   "src": "/media/learn/patterns/patterns-04.mp4",
   "poster": "/media/learn/patterns/patterns-04.jpg",
   "captions": "/media/learn/patterns/patterns-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Claims Torn Apart: Hypothesis Testing in Practice",
   "summary": "Watch six confident claims from a meeting get picked apart one by one—each revealing how confounds, outliers, raw counts, and missing data can wreck a conclusion before you even compute. You'll learn to ask four questions of any claim that will catch most bad conclusions before they harden into decisions.",
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
    "two-sample t-test",
    "statistical pitfalls",
    "data analysis",
    "null hypothesis",
    "bias detection",
    "practical statistics",
    "p-values",
    "critical thinking"
   ],
   "src": "/media/learn/patterns/patterns-05.mp4",
   "poster": "/media/learn/patterns/patterns-05.jpg",
   "captions": "/media/learn/patterns/patterns-05.vtt"
  },
  {
   "n": 6,
   "title": "k-Nearest Neighbours: Classifying with your k closest data points",
   "summary": "Learn the k-nearest neighbours algorithm through a bike-share classification problem: find the k most similar past trips, take a vote, and classify a new trip. Discover why scaling matters, how to choose k, and the tradeoffs between memorising noise and overly smoothing real patterns.",
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
    "bias-variance tradeoff",
    "feature scaling",
    "algorithm",
    "supervised learning",
    "lazy learning"
   ],
   "src": "/media/learn/patterns/patterns-06.mp4",
   "poster": "/media/learn/patterns/patterns-06.jpg",
   "captions": "/media/learn/patterns/patterns-06.vtt"
  },
  {
   "n": 7,
   "title": "The Curse of Dimensionality: Why More Features Break k-NN",
   "summary": "Learn why adding more features to k-nearest neighbours doesn't improve predictions—it actively breaks them. You'll understand the geometry behind why distance becomes meaningless in high dimensions, and discover three practical strategies (feature selection, feature engineering, and dimensionality reduction) to fix the problem.",
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
    "high-dimensional geometry",
    "machine learning",
    "feature engineering",
    "distance metrics",
    "model performance",
    "bike trip prediction"
   ],
   "src": "/media/learn/patterns/patterns-07.mp4",
   "poster": "/media/learn/patterns/patterns-07.jpg",
   "captions": "/media/learn/patterns/patterns-07.vtt"
  },
  {
   "n": 8,
   "title": "Naive Bayes Classification: From Bayes' Rule to Real Data",
   "summary": "Learn how to classify trips as member or casual using Bayes' rule and probability instead of distance-based methods. You'll discover why the \"naive\" independence assumption works in practice despite being false, and how to avoid common pitfalls like zero-probability traps, underflow, and miscalibration. By the end you'll understand the full pipeline: flipping conditionals with Bayes, smoothing counts, working in logs, and why the method picks the right class even when confidence scores are wrong.",
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
    "Naive Bayes",
    "Bayes' rule",
    "classification",
    "probability",
    "Laplace smoothing",
    "feature independence",
    "machine learning",
    "joint probability",
    "log probability",
    "confidence calibration"
   ],
   "src": "/media/learn/patterns/patterns-08.mp4",
   "poster": "/media/learn/patterns/patterns-08.jpg",
   "captions": "/media/learn/patterns/patterns-08.vtt"
  },
  {
   "n": 9,
   "title": "The Perceptron: Learning a Linear Boundary",
   "summary": "Learn how the perceptron algorithm draws a straight line to separate two classes of data by starting with a random guess and repeatedly correcting itself on mistakes. You'll see the mathematical foundations—weighted sums, thresholds, and update rules—and understand when this simple learning method works perfectly, when it fails, and when it finds a boundary that barely scrapes by instead of the safest one.",
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
    "machine learning",
    "linear classification",
    "supervised learning",
    "decision boundary",
    "neural networks",
    "algorithm",
    "separability",
    "convergence",
    "geometric intuition"
   ],
   "src": "/media/learn/patterns/patterns-09.mp4",
   "poster": "/media/learn/patterns/patterns-09.jpg",
   "captions": "/media/learn/patterns/patterns-09.vtt"
  },
  {
   "n": 10,
   "title": "Logistic Regression: From Classifications to Probabilities",
   "summary": "Learn how to move beyond binary yes/no classifications to predict genuine probabilities using logistic regression. This video teaches you how the sigmoid function squashes a linear model into probabilities, how to interpret coefficients as odds multipliers, why cross-entropy loss replaces squared error, and how to choose thresholds based on the real costs of different mistakes.",
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
    "odds ratio",
    "threshold selection",
    "machine learning",
    "binary classification",
    "model interpretation"
   ],
   "src": "/media/learn/patterns/patterns-10.mp4",
   "poster": "/media/learn/patterns/patterns-10.jpg",
   "captions": "/media/learn/patterns/patterns-10.vtt"
  },
  {
   "n": 11,
   "title": "Decision Trees: Building a Classifier with Questions and Information Gain",
   "summary": "Learn how decision trees make predictions by asking a sequence of yes-or-no questions instead of using weights and dot products. This video teaches you how to measure node \"messiness\" using entropy and Gini impurity, and how to pick the best question at each step by computing information gain—the reduction in uncertainty from asking that question. By the end, you'll understand how trees recursively split data to build a classifier, handle numeric features with thresholds, and avoid common pitfalls like overfitting and forgetting to weight branches.",
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
    "Gini impurity",
    "machine learning",
    "threshold splitting",
    "tree-based models",
    "feature selection",
    "bike trip prediction"
   ],
   "src": "/media/learn/patterns/patterns-11.mp4",
   "poster": "/media/learn/patterns/patterns-11.jpg",
   "captions": "/media/learn/patterns/patterns-11.vtt"
  },
  {
   "n": 12,
   "title": "Stopping Decision Trees from Overfitting: Pruning",
   "summary": "Learn why decision trees memorize training data when grown too deep, and how to stop them. This video teaches pre-pruning (stopping early with rules like max depth) and post-pruning (growing the full tree then cutting back with validation data), so you can build trees that generalize to new data and produce interpretable if-then rules.",
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
    "validation set",
    "pre-pruning",
    "post-pruning",
    "tree depth",
    "machine learning",
    "model selection",
    "generalization"
   ],
   "src": "/media/learn/patterns/patterns-12.mp4",
   "poster": "/media/learn/patterns/patterns-12.jpg",
   "captions": "/media/learn/patterns/patterns-12.vtt"
  },
  {
   "n": 13,
   "title": "Support Vector Machines: The Margin and the Role of C",
   "summary": "Learn how support vector machines find the best separating line by maximizing the margin between classes, and how the hyperparameter C controls the trade-off between a wide margin and tolerating misclassified points. You'll understand why only a few critical points—the support vectors—actually determine the boundary, and how to avoid common pitfalls when tuning C on real data.",
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
    "margin",
    "classification",
    "support vectors",
    "hyperparameter C",
    "optimization",
    "slack variables",
    "machine learning",
    "decision boundary"
   ],
   "src": "/media/learn/patterns/patterns-13.mp4",
   "poster": "/media/learn/patterns/patterns-13.jpg",
   "captions": "/media/learn/patterns/patterns-13.vtt"
  },
  {
   "n": 14,
   "title": "Kernel Methods: Separating Classes That Can't Be Separated Linearly",
   "summary": "Learn how support vector machines handle data that can't be split by a straight line using kernel functions. This video shows why adding transformed features helps create separable boundaries, then reveals the computational trick—kernels—that makes this practical without explicitly creating all those extra coordinates. You'll understand the polynomial and RBF kernels and when to actually use them.",
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
    "support vector machines",
    "kernel methods",
    "nonlinear classification",
    "polynomial kernel",
    "RBF kernel",
    "feature transformation",
    "machine learning",
    "overfitting",
    "hyperparameter tuning"
   ],
   "src": "/media/learn/patterns/patterns-14.mp4",
   "poster": "/media/learn/patterns/patterns-14.jpg",
   "captions": "/media/learn/patterns/patterns-14.vtt"
  },
  {
   "n": 15,
   "title": "How to Choose a Classifier: Defending Your Algorithm Choice",
   "summary": "Learn how to select the right classifier for a given problem by matching the model's assumptions to your data, rather than chasing accuracy scores. Through five real bike-share scenarios, you'll see how to name your candidates, evaluate their trade-offs in training cost, prediction speed, and interpretability, and defend your choice to an interviewer, reviewer, or yourself when things go wrong.",
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
    "machine learning",
    "model selection",
    "algorithm choice",
    "logistic regression",
    "decision trees",
    "k-nearest neighbours",
    "naive Bayes",
    "SVM",
    "interpretability"
   ],
   "src": "/media/learn/patterns/patterns-15.mp4",
   "poster": "/media/learn/patterns/patterns-15.jpg",
   "captions": "/media/learn/patterns/patterns-15.vtt"
  },
  {
   "n": 16,
   "title": "K-Fold Cross-Validation: Beyond the Single Test Split",
   "summary": "Learn why a single train-test split can give misleading results and how k-fold cross-validation provides a more trustworthy estimate of model performance. You'll discover how to divide data into folds, run multiple rounds of training and testing, average the results, and avoid common pitfalls like data leakage and peeking at test data.",
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
    "machine learning",
    "statistical validation",
    "overfitting",
    "performance estimation",
    "data leakage",
    "model selection"
   ],
   "src": "/media/learn/patterns/patterns-16.mp4",
   "poster": "/media/learn/patterns/patterns-16.jpg",
   "captions": "/media/learn/patterns/patterns-16.vtt"
  },
  {
   "n": 17,
   "title": "Accuracy Lies: Precision, Recall, and Choosing the Right Metric",
   "summary": "Learn why accuracy is a trap when predicting rare events, and discover the metrics that actually matter: precision, recall, F1, and ROC curves. You'll understand the confusion matrix, how to interpret the trade-offs between different error types, and how to set decision thresholds based on real-world costs rather than statistical scores.",
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
    "accuracy paradox",
    "precision",
    "recall",
    "confusion matrix",
    "F1 score",
    "ROC curve",
    "classification metrics",
    "imbalanced classes",
    "threshold selection",
    "machine learning evaluation"
   ],
   "src": "/media/learn/patterns/patterns-17.mp4",
   "poster": "/media/learn/patterns/patterns-17.jpg",
   "captions": "/media/learn/patterns/patterns-17.vtt"
  },
  {
   "n": 18,
   "title": "Five Suspiciously Good Models: How Perfect Scores Can Hide Broken Setups",
   "summary": "Learn five different ways to build a model that reports excellent metrics while being fundamentally broken—from data leakage to comparing against the wrong baseline. You'll come away with a pre-flight checklist to catch these bugs before training anything, so you can spot when a perfect score means your setup was wrong, not your math.",
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
    "overfitting",
    "class imbalance",
    "train-test split",
    "data science mistakes",
    "machine learning pitfalls",
    "evaluation metrics",
    "feature engineering",
    "temporal data"
   ],
   "src": "/media/learn/patterns/patterns-18.mp4",
   "poster": "/media/learn/patterns/patterns-18.jpg",
   "captions": "/media/learn/patterns/patterns-18.vtt"
  },
  {
   "n": 19,
   "title": "One Page: Quick Reference for Six Machine Learning Algorithms",
   "summary": "Learn to compress six fundamental machine learning algorithms (kNN, naive Bayes, perceptron, logistic regression, decision trees, and SVM) into a single study sheet that answers the same eight key questions for each method. After watching, you'll understand what to check about each algorithm's assumptions, computational costs, hyperparameters, and characteristic failures, plus be able to construct your own one-page reference guide with the essential formulas and a decision flowchart for choosing the right method.",
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
    "kNN",
    "naive Bayes",
    "perceptron",
    "logistic regression",
    "decision trees",
    "SVM",
    "study guide",
    "cheat sheet"
   ],
   "src": "/media/learn/patterns/patterns-19.mp4",
   "poster": "/media/learn/patterns/patterns-19.jpg",
   "captions": "/media/learn/patterns/patterns-19.vtt"
  },
  {
   "n": 20,
   "title": "Exam Strategy: Regression, Classification, Clustering & Derivations",
   "summary": "Learn the four-step exam strategy for machine learning problems: identify the problem type by checking for labels, reproduce key derivations (least squares, gradient descent) from scratch rather than memorizing formulas, distinguish bias and variance as causes of overfitting, and avoid common point-loss mistakes like forgetting units and mixing up training/test error. This video teaches you to execute the core concepts cleanly under exam conditions.",
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
    "regression",
    "classification",
    "clustering",
    "least squares",
    "gradient descent",
    "bias-variance tradeoff",
    "overfitting",
    "decision trees",
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
   "title": "Why Automated Lesson Production Can't Accept \"Plausible and Wrong\"",
   "summary": "This video explains why a traditional lesson—writing, storyboarding, animating, and recording—takes a week to produce, and why that doesn't scale for a 500+ lesson curriculum. You'll learn what the real goal is: subject-expert-approved lessons made for dollars, not days—and why every design decision in automated production must prevent polished-but-incorrect content from reaching students unwatched.",
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
    "automated animation",
    "educational content",
    "quality control",
    "scalability",
    "curriculum design",
    "subject matter expertise",
    "pipeline design",
    "video production",
    "educational technology"
   ],
   "src": "/media/learn/howitworks/howitworks-01.mp4",
   "poster": "/media/learn/howitworks/howitworks-01.jpg",
   "captions": "/media/learn/howitworks/howitworks-01.vtt"
  },
  {
   "n": 2,
   "title": "Why Animation Code Can't Be Generated Directly",
   "summary": "This video explains why asking a language model to write animation code directly doesn't work—even perfect code can produce wrong visuals if there's nothing to catch mistakes before rendering. You'll learn how to solve this by having the model describe scenes against a fixed vocabulary instead, using the scene/1 contract to validate descriptions before any frames are drawn.",
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
    "safety nets",
    "contracts",
    "scene description",
    "language models",
    "rendering pipeline"
   ],
   "src": "/media/learn/howitworks/howitworks-02.mp4",
   "poster": "/media/learn/howitworks/howitworks-02.jpg",
   "captions": "/media/learn/howitworks/howitworks-02.vtt"
  },
  {
   "n": 3,
   "title": "The Nine Stops: From Topic to Finished Video",
   "summary": "Learn the complete pipeline for turning a single topic into a finished teaching video, following a sentence through nine named stages and stops. After watching, you'll understand the full workflow from brief to publish, including what happens at each checkpoint and why the system loops through describe, render, and rubric until every scene passes quality standards.",
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
    "lesson pipeline",
    "scene rendering",
    "quality control",
    "content creation",
    "describe",
    "gate",
    "rubric"
   ],
   "src": "/media/learn/howitworks/howitworks-03.mp4",
   "poster": "/media/learn/howitworks/howitworks-03.jpg",
   "captions": "/media/learn/howitworks/howitworks-03.vtt"
  },
  {
   "n": 4,
   "title": "How scene_spec.py Validates Teaching Video Plans Before Drawing",
   "summary": "Before a single pixel is rendered, scene_spec.py validates the JSON specification that describes what a teaching scene will contain—checking the plan, not the picture. You'll learn the four rules that catch common problems: no bare numbers on diagram labels, don't end on your weakest figure, grids doing arithmetic need numeric axes, and captioned icons are summaries while uncaptioned ones are just collapse. You'll understand how specs get rewritten up to five times to fix violations, and when a debatable issue is allowed to pass anyway.",
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
    "scene_spec.py",
    "specification validation",
    "teaching video",
    "JSON",
    "quality control",
    "render pipeline",
    "diagram rules",
    "content validation"
   ],
   "src": "/media/learn/howitworks/howitworks-04.mp4",
   "poster": "/media/learn/howitworks/howitworks-04.jpg",
   "captions": "/media/learn/howitworks/howitworks-04.vtt"
  },
  {
   "n": 5,
   "title": "Six Lies: When Checks Disagree With Reality",
   "summary": "This video examines six real failures where automated checks reported problems that didn't actually exist in the artifacts themselves—from truncated transcripts to stale status fields to overzealous matching rules. You'll learn the critical habit: when a check and the real artifact disagree, the check is wrong until proven otherwise, so always open the actual file instead of trusting the dashboard.",
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
    "testing",
    "quality assurance",
    "debugging",
    "system failures",
    "automated checks",
    "validation",
    "verification",
    "code review",
    "pipeline",
    "artifact inspection"
   ],
   "src": "/media/learn/howitworks/howitworks-05.mp4",
   "poster": "/media/learn/howitworks/howitworks-05.jpg",
   "captions": "/media/learn/howitworks/howitworks-05.vtt"
  },
  {
   "n": 6,
   "title": "Five Pieces: The Architecture of the Teaching Video System",
   "summary": "This video maps out the five core pieces of the teaching video pipeline — the AI service, the contract, the renderer, the datastore, and the harness — and shows how they communicate without sharing memory. You'll learn why bugs almost always come down to two pieces disagreeing, and where new engineers typically trip up at architectural boundaries.",
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
    "AI service",
    "microservices",
    "renderer",
    "database",
    "DynamoDB",
    "S3",
    "contract",
    "boundaries"
   ],
   "src": "/media/learn/howitworks/howitworks-06.mp4",
   "poster": "/media/learn/howitworks/howitworks-06.jpg",
   "captions": "/media/learn/howitworks/howitworks-06.vtt"
  },
  {
   "n": 7,
   "title": "AWS Infrastructure: Where the Rendering Pipeline Actually Runs",
   "summary": "Learn which AWS services power the rendering pipeline and why each one was chosen: Fargate for bursty compute, S3 for files, DynamoDB for job tracking, and CloudFront for delivery. You'll understand the concrete account setup behind the architecture, including critical details like pinning container images by digest and the authentication gap that trips up engineers.",
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
    "container deployment",
    "infrastructure",
    "system design",
    "rendering pipeline",
    "cloud architecture"
   ],
   "src": "/media/learn/howitworks/howitworks-07.mp4",
   "poster": "/media/learn/howitworks/howitworks-07.jpg",
   "captions": "/media/learn/howitworks/howitworks-07.vtt"
  },
  {
   "n": 8,
   "title": "Breaking Down Lesson Cost: Where the Money Actually Goes",
   "summary": "Learn the three cost drivers behind lesson generation—model API calls, speech synthesis per character, and Fargate rendering time—and discover why catching defects early costs cents instead of dollars. This lesson reveals that the real cost lever isn't picking cheaper models across the pipeline, but rather using quality checks and proof renders to prevent expensive rework.",
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
    "cost analysis",
    "lesson pricing",
    "model API calls",
    "speech synthesis",
    "Fargate rendering",
    "quality rubrics",
    "defect detection",
    "video production economics",
    "infrastructure costs"
   ],
   "src": "/media/learn/howitworks/howitworks-08.mp4",
   "poster": "/media/learn/howitworks/howitworks-08.jpg",
   "captions": "/media/learn/howitworks/howitworks-08.vtt"
  },
  {
   "n": 9,
   "title": "Building a Business Case: Why Automated Video Curricula Matter",
   "summary": "Learn why companies choose automated video production beyond just cost savings. This video reveals three core capabilities—building affordable lesson libraries, remixing content when material changes, and customizing for different audiences—that make small teams competitive with major studios.",
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
    "production pipeline",
    "scalable content",
    "lesson authoring",
    "competitive advantage",
    "quality control",
    "content reuse",
    "educational technology"
   ],
   "src": "/media/learn/howitworks/howitworks-09.mp4",
   "poster": "/media/learn/howitworks/howitworks-09.jpg",
   "captions": "/media/learn/howitworks/howitworks-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Rejected Ideas: Why We Killed Them",
   "summary": "Learn why five optimization ideas for animation pipeline building were rejected, backed by actual measurement and real data rather than intuition. This lesson teaches the critical habit of testing plausible ideas against known-answer cases before implementing them, so you don't waste weeks rebuilding solutions your team already discarded.",
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
    "animation code generation",
    "rejected ideas",
    "data-driven decisions",
    "lesson publishing",
    "technical decision making",
    "measurement over intuition",
    "animation systems",
    "automation",
    "validation"
   ],
   "src": "/media/learn/howitworks/howitworks-10.mp4",
   "poster": "/media/learn/howitworks/howitworks-10.jpg",
   "captions": "/media/learn/howitworks/howitworks-10.vtt"
  }
 ];

export const CHANCE: Lesson[] = [
  {
   "n": 1,
   "title": "What is a Random Variable? Definition and Core Concepts",
   "summary": "Learn what a random variable actually is: a function that maps messy real-world outcomes to numbers, not a mysterious hidden value. This video clarifies the confusion between discrete and continuous random variables, explains the notation used in probability, and shows why turning outcomes into numbers is essential for computing meaningful statistics.",
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
    "functions",
    "probability foundations",
    "helpdesk example"
   ],
   "src": "/media/learn/chance/chance-01.mp4",
   "poster": "/media/learn/chance/chance-01.jpg",
   "captions": "/media/learn/chance/chance-01.vtt"
  },
  {
   "n": 2,
   "title": "PMF and CDF: Two Ways to Describe a Random Variable's Distribution",
   "summary": "Learn the two standard ways to write down a random variable's distribution: the probability mass function (PMF) and the cumulative distribution function (CDF). This video teaches you what each function represents, how they relate to each other, and which one to use when answering questions about exact values, ranges, and probabilities.",
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
    "random variables",
    "distributions",
    "discrete probability",
    "probability rules",
    "helpdesk example"
   ],
   "src": "/media/learn/chance/chance-02.mp4",
   "poster": "/media/learn/chance/chance-02.jpg",
   "captions": "/media/learn/chance/chance-02.vtt"
  },
  {
   "n": 3,
   "title": "Expectation: Meaning, Properties, and LOTUS",
   "summary": "Learn what expectation means beyond just \"the average\"—why it's the balance point of a probability distribution, not the tallest bar or the middle value. Master the key properties: linearity of expectation and LOTUS (the law of the unconscious statistician), so you can calculate expected values of functions of random variables and solve real problems like predicting total work minutes in a shift.",
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
    "balance point"
   ],
   "src": "/media/learn/chance/chance-03.mp4",
   "poster": "/media/learn/chance/chance-03.jpg",
   "captions": "/media/learn/chance/chance-03.vtt"
  },
  {
   "n": 4,
   "title": "Variance and Standard Deviation: Measuring Spread Around the Mean",
   "summary": "This video explains why the average alone doesn't tell the full story: two datasets with identical means can have wildly different distributions. You'll learn how variance measures spread by averaging squared deviations from the mean, why squaring works better than absolute value, and how to use the efficient shortcut formula. By the end, you'll know how to compute variance and standard deviation and report them correctly in real units.",
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
    "mean",
    "expected value",
    "probability distribution",
    "deviation",
    "statistics",
    "data analysis",
    "probability"
   ],
   "src": "/media/learn/chance/chance-04.mp4",
   "poster": "/media/learn/chance/chance-04.jpg",
   "captions": "/media/learn/chance/chance-04.vtt"
  },
  {
   "n": 5,
   "title": "Exam-Speed Expectation and Variance: Six Problems, One Method",
   "summary": "Learn to solve expectation and variance problems quickly and accurately under exam pressure—no new formulas, just six problems worked the way you'd write them on paper. You'll practice a consistent method for every problem: identify what's being asked, pick the right tool, compute it, and sanity-check your answer. By the end, you'll recognize the three most costly mistakes and how to avoid them.",
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
    "computational formulas",
    "linearity of expectation",
    "problem-solving",
    "helpdesk",
    "distributions"
   ],
   "src": "/media/learn/chance/chance-05.mp4",
   "poster": "/media/learn/chance/chance-05.jpg",
   "captions": "/media/learn/chance/chance-05.vtt"
  },
  {
   "n": 6,
   "title": "Binomial Random Variables: Counting Successes Across Independent Trials",
   "summary": "Learn how to find the probability distribution when counting successes in a fixed number of independent trials—like how many support tickets get resolved on first contact. You'll build the binomial formula from first principles by counting patterns and multiplying probabilities, then discover the clean formulas for the mean and variance, and master the three calculation types (exactly, at least, at most) that come up constantly in practice.",
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
    "random variables",
    "counting successes",
    "independence",
    "expectation",
    "variance",
    "PMF",
    "binomial coefficients",
    "complement rule"
   ],
   "src": "/media/learn/chance/chance-06.mp4",
   "poster": "/media/learn/chance/chance-06.jpg",
   "captions": "/media/learn/chance/chance-06.vtt"
  },
  {
   "n": 7,
   "title": "The Poisson Distribution: Counting Events Over Time",
   "summary": "Learn when and why to use the Poisson distribution for counting random events that arrive over time at a known average rate, rather than in fixed batches. This video derives the Poisson PMF from first principles, explains its key assumptions, and shows you how to avoid common mistakes like applying it when rates aren't constant or forgetting to rescale the rate parameter for your specific time window.",
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
    "counting processes",
    "probability mass function",
    "rate parameter lambda",
    "binomial approximation",
    "event arrivals",
    "constant rate assumption",
    "mean equals variance",
    "time windows",
    "probability"
   ],
   "src": "/media/learn/chance/chance-07.mp4",
   "poster": "/media/learn/chance/chance-07.jpg",
   "captions": "/media/learn/chance/chance-07.vtt"
  },
  {
   "n": 8,
   "title": "Geometric and Negative Binomial Distributions: Waiting for Success",
   "summary": "Learn how the geometric distribution flips the binomial question: instead of fixing the number of tries and counting successes, you fix the success and count how many tries until it happens. This video derives the geometric PMF, explains the critical property of memorylessness, explores the negative binomial for waiting until the r-th success, and shows how to avoid classic mistakes like the gambler's fallacy. By the end, you'll see how binomial, Poisson, and geometric distributions each answer different questions about the same real-world scenario.",
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
    "PMF",
    "memorylessness",
    "waiting time",
    "probability",
    "binomial comparison",
    "gambler's fallacy"
   ],
   "src": "/media/learn/chance/chance-08.mp4",
   "poster": "/media/learn/chance/chance-08.jpg",
   "captions": "/media/learn/chance/chance-08.vtt"
  },
  {
   "n": 9,
   "title": "Recognizing Binomial, Poisson, Geometric, and Negative Binomial Distributions",
   "summary": "Learn to identify which probability distribution fits a real-world scenario using three key questions: Is there a fixed number of trials, a time window, or are you waiting for something? Are the trials independent? Is the probability or arrival rate constant? Through twelve worked examples, you'll master the practical skill of naming distributions without memorizing formulas.",
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
    "probability recognition",
    "distribution identification",
    "independence",
    "constant probability",
    "helpdesk scenarios",
    "probability troubleshooting"
   ],
   "src": "/media/learn/chance/chance-09.mp4",
   "poster": "/media/learn/chance/chance-09.jpg",
   "captions": "/media/learn/chance/chance-09.vtt"
  },
  {
   "n": 10,
   "title": "Continuous Probability Distributions: Density Functions and CDFs",
   "summary": "This video introduces continuous probability distributions and explains why a single exact value has zero probability—not because it's impossible, but because probability is area, and a point has no width. You'll learn how probability density functions (PDFs) differ from the discrete PMFs, how they relate to cumulative distribution functions (CDFs) through integration and differentiation, and why the distinction between \"less than\" and \"less than or equal to\" no longer matters for continuous variables.",
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
    "random variables",
    "probability theory",
    "integration",
    "continuous distributions",
    "expectation"
   ],
   "src": "/media/learn/chance/chance-10.mp4",
   "poster": "/media/learn/chance/chance-10.jpg",
   "captions": "/media/learn/chance/chance-10.vtt"
  },
  {
   "n": 11,
   "title": "Waiting Times: From Poisson Counts to Exponential Distributions",
   "summary": "Learn how random arrival processes connect to waiting times, moving from the Poisson distribution (counting arrivals) to the exponential distribution (time between arrivals). You'll discover why exponential waiting times have equal mean and standard deviation, and explore the surprising memoryless property: past wait time doesn't affect your probability of the next arrival. See how these distributions model real helpdesk scenarios and where the model breaks down.",
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
    "waiting times",
    "memorylessness",
    "continuous distributions",
    "random variables",
    "arrival processes",
    "probability density"
   ],
   "src": "/media/learn/chance/chance-11.mp4",
   "poster": "/media/learn/chance/chance-11.jpg",
   "captions": "/media/learn/chance/chance-11.vtt"
  },
  {
   "n": 12,
   "title": "The Normal Distribution: Shape, Formula, and Standardization",
   "summary": "Learn the normal distribution—the bell curve that appears everywhere in statistics—and understand what its formula actually does. You'll master standardization (converting to z-scores), solve probability problems both forward and backward, and pick up the 68-95-99.7 rule as a quick sanity check for your answers.",
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
    "probability",
    "statistics",
    "standard deviation",
    "mean",
    "continuous distribution",
    "Gaussian"
   ],
   "src": "/media/learn/chance/chance-12.mp4",
   "poster": "/media/learn/chance/chance-12.jpg",
   "captions": "/media/learn/chance/chance-12.vtt"
  },
  {
   "n": 13,
   "title": "Six Problems, One Habit to Break: When to Use Density, CDF, and Distributions",
   "summary": "Learn a four-step routine—sketch, integrate, compute, check—that works for every probability problem mixing densities, CDFs, and distributions. By working through six realistic examples (finding constants, converting between density and CDF, computing probabilities, handling exponential and normal distributions, and spotting the discrete trap), you'll know exactly which tool to reach for on any exam question.",
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
    "normal distribution",
    "exponential distribution",
    "probability",
    "integration",
    "continuous vs discrete",
    "problem solving",
    "four-step method",
    "probability distributions"
   ],
   "src": "/media/learn/chance/chance-13.mp4",
   "poster": "/media/learn/chance/chance-13.jpg",
   "captions": "/media/learn/chance/chance-13.vtt"
  },
  {
   "n": 14,
   "title": "Joint Distributions: Two Random Variables on the Same Shift",
   "summary": "Learn how to work with two random variables simultaneously using joint probability distributions. You'll master reading joint PMF tables, computing marginals by summing rows and columns, understanding independence, conditioning, and calculating expectations of products — with a focus on when shortcuts work and when they fail.",
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
    "random variables",
    "probability",
    "expectation",
    "double integral"
   ],
   "src": "/media/learn/chance/chance-14.mp4",
   "poster": "/media/learn/chance/chance-14.jpg",
   "captions": "/media/learn/chance/chance-14.vtt"
  },
  {
   "n": 15,
   "title": "Covariance and Correlation: Measuring Linear Relationships",
   "summary": "Learn how to quantify whether two variables move together using covariance and correlation. You'll compute covariance directly from a probability table, discover the faster computational shortcut, and understand the critical distinction between zero covariance and independence. By the end, you'll know how correlation scales covariance into an interpretable number between -1 and +1, and recognize its key limitation: it only detects straight-line patterns, never causation.",
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
    "linear relationship",
    "association",
    "expected value",
    "independence",
    "standard deviation",
    "causation"
   ],
   "src": "/media/learn/chance/chance-15.mp4",
   "poster": "/media/learn/chance/chance-15.jpg",
   "captions": "/media/learn/chance/chance-15.vtt"
  },
  {
   "n": 16,
   "title": "Variance of a Sum: When Does Variance Add?",
   "summary": "Learn why expectation always adds for combined random variables, but variance only adds when variables are independent or have zero covariance. Through a helpdesk example with two technicians, discover how the covariance term reveals whether their busy periods cancel out or compound—creating the same average but vastly different risk.",
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
    "expectation",
    "covariance",
    "independence",
    "random variables",
    "sum of variables",
    "probability",
    "risk analysis",
    "Poisson distribution",
    "normal distribution"
   ],
   "src": "/media/learn/chance/chance-16.mp4",
   "poster": "/media/learn/chance/chance-16.jpg",
   "captions": "/media/learn/chance/chance-16.vtt"
  },
  {
   "n": 17,
   "title": "Probability Distribution Recognition: Spotting Which Tool to Use",
   "summary": "Learn to identify which probability distribution to apply to a real-world problem before solving it. Work through 15 helpdesk scenarios, answering three key questions: Is the quantity discrete or continuous? What output is needed (PMF, CDF, one number, or joint table)? And do you need a joint distribution or just a sum property? Master the recognition skill that separates quick problem-solvers from those who get stuck.",
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
    "normal",
    "problem recognition",
    "discrete vs continuous",
    "PMF",
    "CDF",
    "applied probability"
   ],
   "src": "/media/learn/chance/chance-17.mp4",
   "poster": "/media/learn/chance/chance-17.jpg",
   "captions": "/media/learn/chance/chance-17.vtt"
  },
  {
   "n": 18,
   "title": "The Law of Large Numbers: Why Averages Converge",
   "summary": "Learn why a running average converges to its true expectation as sample size grows—and why this has nothing to do with the past \"catching up\" to balance things out. This video explains the mechanism behind the law of large numbers using a helpdesk ticket example, reveals the gambler's fallacy, and shows you how to determine when you have enough data to trust an average.",
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
    "random variables",
    "variance",
    "sample mean",
    "gambler's fallacy",
    "convergence",
    "statistics",
    "expected value",
    "sampling"
   ],
   "src": "/media/learn/chance/chance-18.mp4",
   "poster": "/media/learn/chance/chance-18.jpg",
   "captions": "/media/learn/chance/chance-18.vtt"
  },
  {
   "n": 19,
   "title": "The Central Limit Theorem: Why Bell Curves Appear Everywhere",
   "summary": "Learn why sums and averages of independent measurements converge to normal distributions even when the individual measurements are skewed or non-normal. You'll see exactly how this happens visually, learn the precise mathematical conditions required, and practice standardizing sums to answer real probability questions about whether work will exceed time limits.",
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
    "probability",
    "sums of random variables",
    "statistical inference",
    "bell curve",
    "finite variance",
    "independence",
    "standardization",
    "approximation"
   ],
   "src": "/media/learn/chance/chance-19.mp4",
   "poster": "/media/learn/chance/chance-19.jpg",
   "captions": "/media/learn/chance/chance-19.vtt"
  },
  {
   "n": 20,
   "title": "One Page for the Exam: Distributions, Formulas, and When to Use Them",
   "summary": "This video shows you what actually needs to be on a single reference page before an exam: the six key distributions with their recognition stories, the six essential formulas, and a sixty-second checklist to identify which tool to use under pressure. You'll see how to apply this sheet to problems that don't explicitly name the distribution, and learn which common traps waste time—like deriving distributions when you only need a mean.",
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
    "variance",
    "expectation",
    "exam preparation",
    "statistics formulas",
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
   "title": "Legacy Systems: What They Can't Do (And Why It Matters)",
   "summary": "This video reveals the structural limitations of long-running legacy systems: they can only do what was imagined and documented years before. You'll learn why these systems fail at reading intent, spotting patterns across separate events, and composing coherent accounts—and get a framework for deciding whether those gaps are actually costing you something.",
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
    "business processes",
    "operational challenges",
    "automation",
    "human tasks",
    "system design",
    "dispatch operations"
   ],
   "src": "/media/learn/shift/shift-01.mp4",
   "poster": "/media/learn/shift/shift-01.jpg",
   "captions": "/media/learn/shift/shift-01.vtt"
  },
  {
   "n": 2,
   "title": "Three Shifts: How Foundation Models Changed Software Architecture",
   "summary": "Learn the three fundamental changes that foundation models brought to software systems: how plain-language instructions replaced fixed APIs, how a single model can handle tasks it was never trained for, and how models became fast and cheap enough to run inside live transactions instead of batch jobs. You'll understand what a foundation model actually is, what critical limitations remain, and why this represents a paradigm shift from specifying every case in advance to building systems that handle unforeseen scenarios.",
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
    "API design",
    "machine learning deployment",
    "language models",
    "system design",
    "dispatch systems",
    "practical AI",
    "software paradigm shift",
    "LLM integration"
   ],
   "src": "/media/learn/shift/shift-02.mp4",
   "poster": "/media/learn/shift/shift-02.jpg",
   "captions": "/media/learn/shift/shift-02.vtt"
  },
  {
   "n": 3,
   "title": "The Hidden Reason AI Features Fail (And What Works Instead)",
   "summary": "Learn why bolting AI onto existing screens leads to silent failure, even when the feature technically works. This video teaches the architectural difference between add-on AI that nobody uses and integrated AI that handles the actual broken parts of your process—using a real logistics company as an example.",
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
    "product architecture",
    "failed AI features",
    "software design",
    "dispatch systems",
    "AI integration",
    "exception handling",
    "process automation",
    "system design",
    "technical strategy"
   ],
   "src": "/media/learn/shift/shift-03.mp4",
   "poster": "/media/learn/shift/shift-03.jpg",
   "captions": "/media/learn/shift/shift-03.vtt"
  },
  {
   "n": 4,
   "title": "One Feature, Five Different Jobs: How AI Changes Team Roles",
   "summary": "When you add a machine learning model to a feature, the work changes fundamentally for architect, product owner, scrum master, tester, and developer—not just what they do, but how they think about their job. This video walks through a real logistics example (AI-suggested driver dispatch) to show the specific, concrete ways each role must adapt to designing around something that's never fully right and never fully wrong.",
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
    "team roles",
    "software architecture",
    "product management",
    "AI in production",
    "testing ML",
    "scrum",
    "feature development",
    "logistics",
    "fallback systems"
   ],
   "src": "/media/learn/shift/shift-04.mp4",
   "poster": "/media/learn/shift/shift-04.jpg",
   "captions": "/media/learn/shift/shift-04.vtt"
  },
  {
   "n": 5,
   "title": "The Question Nobody Answers Honestly: How Much Faster Is AI Really?",
   "summary": "This video cuts through hype to explain where AI-assisted coding actually saves time and where it doesn't. You'll learn why writing code gets 2–5x faster for well-specified tasks, but why that speed doesn't translate to proportionally faster projects—and why the senior team ends up reviewing more code than before.",
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
    "realistic expectations",
    "project timeline",
    "developer workflow",
    "engineering management",
    "technical truth"
   ],
   "src": "/media/learn/shift/shift-05.mp4",
   "poster": "/media/learn/shift/shift-05.jpg",
   "captions": "/media/learn/shift/shift-05.vtt"
  },
  {
   "n": 6,
   "title": "Staffing and Shipping AI Systems: Why Demos Are Deceptive",
   "summary": "Learn the three new organizational roles and estimation pattern that trips up every team building production AI systems—and why the fast demo is actually only ten percent of the real work. This video teaches you how to staff probabilistic systems correctly, plan realistic timelines, and budget for the constant drift that comes with models and providers that change under your feet.",
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
    "team staffing",
    "project estimation",
    "machine learning operations",
    "production reliability",
    "logistics automation",
    "evaluation sets",
    "technical planning",
    "software development"
   ],
   "src": "/media/learn/shift/shift-06.mp4",
   "poster": "/media/learn/shift/shift-06.jpg",
   "captions": "/media/learn/shift/shift-06.vtt"
  },
  {
   "n": 7,
   "title": "What Actually Happens When Code Calls a Model",
   "summary": "Learn what a model call actually is in production code: text in, text out, stateless, and sometimes unpredictable. This video breaks down the five core components (input, prompt, model, validate, fallback), explains why the same input can produce different outputs, and shows you how to design for failure before you ship rather than panic when things go wrong.",
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
    "machine learning",
    "production engineering",
    "model deployment",
    "API design",
    "software architecture",
    "LLM integration",
    "error handling",
    "validation",
    "latency",
    "fallback patterns"
   ],
   "src": "/media/learn/shift/shift-07.mp4",
   "poster": "/media/learn/shift/shift-07.jpg",
   "captions": "/media/learn/shift/shift-07.vtt"
  },
  {
   "n": 8,
   "title": "What an Agent Actually Is (and When to Build One)",
   "summary": "This video cuts through the hype with a plain, testable definition: an agent is a model in a loop with tools that sets a goal, calls functions, observes results, and decides what to do next—unlike a single model call that just answers once. You'll learn the real engineering realities of agents (they can loop forever, repeat themselves, or compound early errors), the four controls that keep them safe, and the practical rule for when to actually build one instead of a fixed pipeline.",
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
    "control limits",
    "engineering",
    "decision-making",
    "LLM",
    "pipeline design",
    "AI risks"
   ],
   "src": "/media/learn/shift/shift-08.mp4",
   "poster": "/media/learn/shift/shift-08.jpg",
   "captions": "/media/learn/shift/shift-08.vtt"
  },
  {
   "n": 9,
   "title": "The Glue Problem: Why Tool Integration is the Real AI Challenge",
   "summary": "Learn why connecting AI models to real business systems is harder than it sounds, and how a common protocol (MCP) solves the rewriting problem. You'll understand the difference between making tools describable and making them safe to expose, and how to make the right architectural decisions about which systems an AI should ever reach.",
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
    "integration architecture",
    "MCP protocol",
    "tool exposure",
    "framework independence",
    "system design",
    "API standards",
    "AI safety",
    "CTO decisions",
    "reusable architecture"
   ],
   "src": "/media/learn/shift/shift-09.mp4",
   "poster": "/media/learn/shift/shift-09.jpg",
   "captions": "/media/learn/shift/shift-09.vtt"
  },
  {
   "n": 10,
   "title": "RAG vs GraphRAG: Grounding AI with your company's data",
   "summary": "Learn why foundation models can't answer questions about your specific business without retrieval—and how semantic search and knowledge graphs work differently to fix it. This video walks you through RAG's strengths and limits, introduces GraphRAG as a second-generation approach, and explains why a single graph database beats maintaining two separate systems.",
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
    "knowledge graph",
    "semantic search",
    "vector embeddings",
    "retrieval-augmented generation",
    "Neo4j",
    "LLM grounding",
    "enterprise AI",
    "knowledge representation"
   ],
   "src": "/media/learn/shift/shift-10.mp4",
   "poster": "/media/learn/shift/shift-10.jpg",
   "captions": "/media/learn/shift/shift-10.vtt"
  },
  {
   "n": 11,
   "title": "Three Controls Beyond Evaluation: Guardrails, Routing, and Context",
   "summary": "Learn the three essential control systems that protect production AI applications beyond evaluation: guardrails that block bad inputs and outputs, routing that matches task difficulty to model cost, and context engineering that carefully controls what information the model receives. After watching, you'll understand how to prevent bad outputs from reaching customers, avoid overspending on cheap work, and design systems that actually survive real-world deployment.",
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
    "LLM operations",
    "production systems",
    "cost optimization",
    "evaluation",
    "model deployment",
    "system design"
   ],
   "src": "/media/learn/shift/shift-11.mp4",
   "poster": "/media/learn/shift/shift-11.jpg",
   "captions": "/media/learn/shift/shift-11.vtt"
  },
  {
   "n": 12,
   "title": "One Word, Four Jobs: Prompt, Context, Loop, and Harness Engineering",
   "summary": "Most teams conflate \"prompt engineering\" into one skill, but it's actually four distinct disciplines being confused under one name tag. This video splits apart prompt engineering, context engineering, loop engineering, and harness engineering by walking through a production exception pipeline, so you'll know which skill solves which problem—and why teams waste budget on the visible parts while skipping the invisible harness layer that actually keeps systems reliable in production.",
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
    "production reliability",
    "exception handling",
    "model deployment",
    "system design",
    "cost optimization"
   ],
   "src": "/media/learn/shift/shift-12.mp4",
   "poster": "/media/learn/shift/shift-12.jpg",
   "captions": "/media/learn/shift/shift-12.vtt"
  },
  {
   "n": 13,
   "title": "Four Types of AI Engineering Work (And Which One Matters in Production)",
   "summary": "Prompt engineering, context engineering, loop engineering, and harness engineering sound like the same job but they're four different pieces of work with different costs and priorities. Learn what each one actually does and why teams typically spend time on the wrong ones, then get the order right for production systems that won't silently fail.",
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
    "AI systems",
    "production deployment",
    "machine learning",
    "model optimization",
    "AI infrastructure"
   ],
   "src": "/media/learn/shift/shift-13.mp4",
   "poster": "/media/learn/shift/shift-13.jpg",
   "captions": "/media/learn/shift/shift-13.vtt"
  },
  {
   "n": 14,
   "title": "When NOT to Use a Language Model",
   "summary": "Learn when to use classical machine learning instead of a language model by matching the task to the right tool. This video teaches you to recognize three patterns: structured data with numeric or categorical outputs belong to regression and classification, messy unstructured language belongs to foundation models, and format consistency belongs to fine-tuning—avoiding costly mistakes like fine-tuning when you should use retrieval.",
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
    "when to use AI",
    "fine-tuning",
    "retrieval",
    "structured data",
    "cost optimization",
    "model selection"
   ],
   "src": "/media/learn/shift/shift-14.mp4",
   "poster": "/media/learn/shift/shift-14.jpg",
   "captions": "/media/learn/shift/shift-14.vtt"
  },
  {
   "n": 15,
   "title": "AI Model Cost Structure: From Tokens to Production Metrics",
   "summary": "Learn the actual cost drivers of AI models in production by breaking down expenses from tokens and steps to retries, evaluation, and human review. You'll understand why costs scale with transaction volume rather than seats, and identify the four concrete levers that bring those costs down—turning cost mystery into measurable optimization.",
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
    "production optimization",
    "cost analysis",
    "LLM economics",
    "system metrics",
    "operational efficiency",
    "cost reduction",
    "agent-based systems",
    "evaluation overhead"
   ],
   "src": "/media/learn/shift/shift-15.mp4",
   "poster": "/media/learn/shift/shift-15.jpg",
   "captions": "/media/learn/shift/shift-15.vtt"
  },
  {
   "n": 16,
   "title": "It Doesn't Fall Over: Failures in Live AI Systems",
   "summary": "This lesson explores what actually goes wrong when AI systems are deployed in production—not crashes, but confident wrong answers delivered silently while all systems show green. You'll learn the four main failure modes (confident errors, silent degradation, stalls, and compounding mistakes), how to log decisions for accountability and auditability, and how to design a three-tier policy that controls what your system can do alone, what requires human approval, and what it should never attempt.",
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
    "accountability",
    "logging",
    "system design",
    "error handling",
    "policy frameworks",
    "reliability",
    "operational safety"
   ],
   "src": "/media/learn/shift/shift-16.mp4",
   "poster": "/media/learn/shift/shift-16.jpg",
   "captions": "/media/learn/shift/shift-16.vtt"
  },
  {
   "n": 17,
   "title": "Migrating to AI Without Rebuilding Your System",
   "summary": "Learn how to deploy an AI model into a live business system without rewriting or replacing existing infrastructure. This video teaches the \"front-door pattern\"—placing the model ahead of your current system to read messy inputs and act through existing interfaces—and the staged rollout strategy (shadow mode, human-in-the-loop, narrow autonomy) that minimizes risk and builds evidence before full deployment.",
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
    "system migration",
    "legacy systems",
    "front-door pattern",
    "shadow mode",
    "human-in-the-loop",
    "logistics",
    "AI integration",
    "risk management",
    "model rollout"
   ],
   "src": "/media/learn/shift/shift-17.mp4",
   "poster": "/media/learn/shift/shift-17.jpg",
   "captions": "/media/learn/shift/shift-17.vtt"
  },
  {
   "n": 18,
   "title": "What Changes For You: Skills for Building with AI Components",
   "summary": "Learn which of your existing engineering skills transfer directly to building systems with AI components, and which new capabilities you actually need to develop. This lesson maps out what you must think differently about—distributions instead of cases, evaluation sets instead of unit tests, loops for quiet failures—and what you can safely ignore to focus on work that matters.",
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
    "evaluation",
    "system design",
    "skill transfer",
    "AI components",
    "testing",
    "model deployment",
    "engineering practices",
    "architecture"
   ],
   "src": "/media/learn/shift/shift-18.mp4",
   "poster": "/media/learn/shift/shift-18.jpg",
   "captions": "/media/learn/shift/shift-18.vtt"
  },
  {
   "n": 19,
   "title": "Six Questions to Decide If Your Company Should Deploy AI",
   "summary": "Learn the six critical questions you must ask—in order—before committing to a probabilistic system in your company. This framework helps you determine whether AI deployment makes financial and operational sense, or whether the honest answer is \"not yet.\" Watch this to stop building systems you don't actually need and make decisions that protect your budget through the long evaluation phase.",
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
    "AI deployment",
    "business decision framework",
    "cost analysis",
    "probabilistic systems",
    "risk assessment",
    "data readiness",
    "project sponsorship",
    "technology ROI",
    "accountability",
    "implementation strategy"
   ],
   "src": "/media/learn/shift/shift-19.mp4",
   "poster": "/media/learn/shift/shift-19.jpg",
   "captions": "/media/learn/shift/shift-19.vtt"
  }
 ];

export const MODELLING: Lesson[] = [
  {
   "n": 1,
   "title": "Graph Schemas Start From Questions, Not Entities",
   "summary": "Learn why graph database design requires a different approach than relational schemas, and how to build a model by starting with the actual questions your product needs answered. You'll master a repeatable three-step discipline: write your question as a plain sentence, say the traversal in words, then decide which nouns become nodes—avoiding the common mistakes that turn graphs into relational schemas with circles.",
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
    "cypher",
    "neo4j",
    "data modeling",
    "relational vs graph",
    "query optimization",
    "database design patterns",
    "graph traversal",
    "application design"
   ],
   "src": "/media/learn/modelling/modelling-01.mp4",
   "poster": "/media/learn/modelling/modelling-01.jpg",
   "captions": "/media/learn/modelling/modelling-01.vtt"
  },
  {
   "n": 2,
   "title": "One Fact, Three Shapes: Modeling Data in Cypher",
   "summary": "Learn how to model a single fact in three fundamentally different ways in Cypher—as a property, as a relationship to a shared node, or as a node with its own structure. You'll discover the decision rules that determine which shape fits each piece of data, and why getting the shape right matters for query performance and graph design.",
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
    "graph database",
    "data modeling",
    "schema design",
    "Neo4j",
    "graph patterns",
    "properties vs nodes",
    "relationships",
    "query design"
   ],
   "src": "/media/learn/modelling/modelling-02.mp4",
   "poster": "/media/learn/modelling/modelling-02.jpg",
   "captions": "/media/learn/modelling/modelling-02.vtt"
  },
  {
   "n": 3,
   "title": "When to Use Labels in Cypher: The Right Way",
   "summary": "Learn what labels actually are in Neo4j, why they're indexed for fast queries, and most importantly—when NOT to use them. This lesson covers three common mistakes (status changes, value tagging, and tenant isolation) and shows you how to keep your schema clean by using properties instead.",
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
    "properties",
    "database schema",
    "graph modeling",
    "indexing",
    "query optimization",
    "best practices",
    "data modeling"
   ],
   "src": "/media/learn/modelling/modelling-03.mp4",
   "poster": "/media/learn/modelling/modelling-03.jpg",
   "captions": "/media/learn/modelling/modelling-03.vtt"
  },
  {
   "n": 4,
   "title": "Relationship Direction and Granularity in Neo4j",
   "summary": "Learn how to design relationship types in Neo4j by understanding why direction matters (it records what actually happened, not how you'll query it) and when to split relationships into multiple types versus storing them as properties. You'll be able to make schema decisions that keep query performance fast and your data model readable.",
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
    "relationship design",
    "schema modeling",
    "query performance",
    "Cypher",
    "graph patterns",
    "data granularity"
   ],
   "src": "/media/learn/modelling/modelling-04.mp4",
   "poster": "/media/learn/modelling/modelling-04.jpg",
   "captions": "/media/learn/modelling/modelling-04.vtt"
  },
  {
   "n": 5,
   "title": "Reified Relationships: When Facts Need Their Own Nodes",
   "summary": "Learn when a relationship between two nodes should actually become its own node, giving a fact an independent identity. This video teaches you to recognize three signals—accumulating properties, need for further connections, and repeated pairs—and shows you how to apply this pattern across a graph database, with real examples like applications, course offerings, and enrollments.",
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
    "relationships to nodes",
    "many-to-many",
    "graph patterns",
    "schema design",
    "relationship properties",
    "entity modeling",
    "database optimization"
   ],
   "src": "/media/learn/modelling/modelling-05.mp4",
   "poster": "/media/learn/modelling/modelling-05.jpg",
   "captions": "/media/learn/modelling/modelling-05.vtt"
  },
  {
   "n": 6,
   "title": "Modeling Time in Graph Databases: Three Patterns",
   "summary": "Learn how to preserve historical data in graph databases instead of overwriting facts. This video teaches three distinct patterns for modeling time—validity windows on relationships, version nodes with linked lists, and time trees—with real tradeoffs so you can pick the right one for your access patterns.",
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
    "relationships",
    "nodes",
    "historical data",
    "data design",
    "validity windows",
    "version nodes",
    "time trees"
   ],
   "src": "/media/learn/modelling/modelling-06.mp4",
   "poster": "/media/learn/modelling/modelling-06.jpg",
   "captions": "/media/learn/modelling/modelling-06.vtt"
  },
  {
   "n": 7,
   "title": "Database Constraints: Enforcing Schema in Neo4j",
   "summary": "Learn how to enforce your graph data model by adding constraints that prevent invalid data from entering the database. This lesson covers uniqueness, node keys, existence, and property type constraints—allowing you to ensure that your college, course, and application data stays consistent with your design decisions. You'll also discover that uniqueness constraints automatically create indexes for improved query performance.",
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
    "uniqueness",
    "node key",
    "data validation",
    "schema design",
    "database integrity",
    "graph database"
   ],
   "src": "/media/learn/modelling/modelling-07.mp4",
   "poster": "/media/learn/modelling/modelling-07.jpg",
   "captions": "/media/learn/modelling/modelling-07.vtt"
  },
  {
   "n": 8,
   "title": "Indexes: Not Performance, a Modelling Decision",
   "summary": "Learn when indexes are necessary in graph databases—not as a performance patch, but as a foundational modelling choice. This lesson covers range indexes for equality and comparison, composite indexes, text and full-text search, relationship indexes, and the hidden cost of unused indexes. You'll understand what questions need indexing by design and how to verify your index choices against actual query plans.",
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
    "graph database",
    "modelling",
    "query optimization",
    "range indexes",
    "composite indexes",
    "text search",
    "full-text search",
    "Neo4j",
    "database design"
   ],
   "src": "/media/learn/modelling/modelling-08.mp4",
   "poster": "/media/learn/modelling/modelling-08.jpg",
   "captions": "/media/learn/modelling/modelling-08.vtt"
  },
  {
   "n": 9,
   "title": "Embeddings in Neo4j: Finding Similar Meaning in Graphs",
   "summary": "Learn how embeddings work as vector properties in Neo4j to find similar meaning beyond direct relationships—when two nodes are conceptually alike but not connected by edges. You'll understand how to model embeddings correctly, choose between distance metrics like cosine and Euclidean, index vectors safely, and combine vector search with graph traversal to answer complex questions that neither tool can solve alone. After watching, you'll know how to implement embeddings in Neo4j, avoid common pitfalls like stale embeddings, and design your schema to handle multiple embedding models.",
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
    "vectors",
    "Neo4j",
    "similarity search",
    "cosine similarity",
    "graph database",
    "vector indexing",
    "semantic search",
    "text embeddings"
   ],
   "src": "/media/learn/modelling/modelling-09.mp4",
   "poster": "/media/learn/modelling/modelling-09.jpg",
   "captions": "/media/learn/modelling/modelling-09.vtt"
  },
  {
   "n": 10,
   "title": "Migrating Properties to Nodes: The Add-Batch-Verify Pattern",
   "summary": "Learn the safe, reversible process for transforming graph properties into nodes and relationships—without taking your database down. This lesson covers the five-step migration pattern (add, batch, verify, run parallel, remove) that scales to millions of rows and keeps your system live during the refactor.",
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
    "schema refactoring",
    "data migration",
    "Cypher",
    "properties to nodes",
    "database scaling",
    "batching transactions",
    "data integrity",
    "constraint design",
    "graph modeling patterns"
   ],
   "src": "/media/learn/modelling/modelling-10.mp4",
   "poster": "/media/learn/modelling/modelling-10.jpg",
   "captions": "/media/learn/modelling/modelling-10.vtt"
  }
 ];

export const NEPTUNE: Lesson[] = [
  {
   "n": 1,
   "title": "Migrating from Neptune to Neo4j: What Actually Changes",
   "summary": "Learn the real differences between AWS Neptune and Neo4j—not just marketing claims, but the actual infrastructure, language, tooling, and cost tradeoffs. This lesson walks through a 40-million-node real-world system to help you decide whether migration makes sense for your team.",
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
    "database migration",
    "Cypher",
    "Gremlin",
    "AWS",
    "cost analysis",
    "graph tooling",
    "database operations"
   ],
   "src": "/media/learn/neptune/neptune-01.mp4",
   "poster": "/media/learn/neptune/neptune-01.jpg",
   "captions": "/media/learn/neptune/neptune-01.vtt"
  },
  {
   "n": 2,
   "title": "Same Model, Different Shape: 5 Critical Differences Between Neptune and Neo4j",
   "summary": "Neptune and Neo4j both use property graphs, but their models differ in five specific places that break migrations in practice: labels, IDs, properties, types, and edges. This lesson walks through each difference, shows where the current workarounds in your Neptune graph become opportunities to reshape your data, and provides a mapping table to reference during migration.",
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
    "graph database",
    "Neptune",
    "Neo4j",
    "migration",
    "property graph",
    "data modeling",
    "Gremlin",
    "Cypher",
    "schema design",
    "database comparison"
   ],
   "src": "/media/learn/neptune/neptune-02.mp4",
   "poster": "/media/learn/neptune/neptune-02.jpg",
   "captions": "/media/learn/neptune/neptune-02.vtt"
  },
  {
   "n": 3,
   "title": "Translating Gremlin Queries to Cypher: A Scene-by-Scene Mapping",
   "summary": "Learn how to convert your Gremlin traversals into Cypher queries by understanding the fundamental differences between imperative and declarative graph query languages. This video walks through the mechanical translations (filters, directions, RETURN clauses), the surprising gaps (no GROUP BY), and the genuine wins (MERGE for upserts), so you can write idiomatic Cypher instead of mimicking Gremlin syntax.",
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
    "Neo4j",
    "graph databases",
    "query patterns",
    "MATCH RETURN",
    "database migration",
    "graph query languages",
    "traversal patterns"
   ],
   "src": "/media/learn/neptune/neptune-03.mp4",
   "poster": "/media/learn/neptune/neptune-03.jpg",
   "captions": "/media/learn/neptune/neptune-03.vtt"
  },
  {
   "n": 4,
   "title": "Migrating from RDF and SPARQL to Neo4j",
   "summary": "This video teaches how to convert RDF triple stores and SPARQL queries to Neo4j's property graph model. You'll learn the concrete rules for translating predicates into properties and relationships, how to handle blank nodes and reification, and the common pitfalls that cause migrations to fail in production.",
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
    "property graph",
    "triples",
    "data modeling",
    "neosemantics",
    "Cypher",
    "graph patterns"
   ],
   "src": "/media/learn/neptune/neptune-04.mp4",
   "poster": "/media/learn/neptune/neptune-04.jpg",
   "captions": "/media/learn/neptune/neptune-04.vtt"
  },
  {
   "n": 5,
   "title": "Exporting Large Neptune Graphs: Snapshots, Streams, and the Right Tool",
   "summary": "Learn how to safely export large production graph databases (40+ million nodes) without downtime by combining Neptune snapshots, streams, and the Export utility. This video walks through the complete workflow—why simple Gremlin traversals don't scale, how to set up the AWS Neptune Export tool against a restored snapshot instead of production, and what data loss traps to watch for when CSV files flatten multi-valued properties and meta-properties.",
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
    "Gremlin",
    "snapshots",
    "streams",
    "CSV",
    "data migration"
   ],
   "src": "/media/learn/neptune/neptune-05.mp4",
   "poster": "/media/learn/neptune/neptune-05.jpg",
   "captions": "/media/learn/neptune/neptune-05.vtt"
  },
  {
   "n": 6,
   "title": "Loading Neptune Data Into Neo4j: The Right Order",
   "summary": "Learn why migrating 40 million nodes from Neptune to Neo4j can take an hour or three days — and how to avoid the common mistakes that cause silent failures. This lesson teaches the exact sequence for constraints, indexes, and batch loads that keeps a large migration on track, plus the count-based verification step that proves everything landed correctly.",
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
    "Neptune",
    "Neo4j",
    "data migration",
    "bulk load",
    "constraints",
    "indexes",
    "LOAD CSV",
    "MERGE",
    "batch processing"
   ],
   "src": "/media/learn/neptune/neptune-06.mp4",
   "poster": "/media/learn/neptune/neptune-06.jpg",
   "captions": "/media/learn/neptune/neptune-06.vtt"
  },
  {
   "n": 7,
   "title": "Migrating from Gremlin to Cypher: Rewriting Your Application Layer",
   "summary": "Learn how to rewrite the application layer between your service and the database when migrating from Neptune/Gremlin to Neo4j/Cypher—a task that's typically underestimated by a factor of three. This video covers the critical differences: how drivers and sessions replace a single traversal source, how explicit transactions differ from implicit ones, how to handle result objects, routing reads to replicas, parameterizing queries safely, and how to run both engines simultaneously using an interface pattern backed by shared tests. After watching, you'll understand the full scope of what changes and how to migrate query by query without a flag day cutover.",
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
    "driver sessions",
    "transactions",
    "query parameterization",
    "testing",
    "graph database"
   ],
   "src": "/media/learn/neptune/neptune-07.mp4",
   "poster": "/media/learn/neptune/neptune-07.jpg",
   "captions": "/media/learn/neptune/neptune-07.vtt"
  },
  {
   "n": 8,
   "title": "Database Migration: The Five-Phase Cutover Plan",
   "summary": "Learn how to safely migrate from Neptune to Neo4j without downtime or data loss through a disciplined five-phase approach: shadow reads, dual writes, read migration by query class, reversing the shadow, and final decommission. After watching, you'll understand why flipping the switch all at once is dangerous, how to measure progress across each phase, and what mistakes teams make that cause them to skip critical steps.",
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
    "shadow reads",
    "feature flags",
    "data consistency",
    "zero-downtime migration",
    "query testing"
   ],
   "src": "/media/learn/neptune/neptune-08.mp4",
   "poster": "/media/learn/neptune/neptune-08.jpg",
   "captions": "/media/learn/neptune/neptune-08.vtt"
  }
 ];

export const CYPHER: Lesson[] = [
  {
   "n": 1,
   "title": "Cypher Patterns: From SQL Joins to Graph Queries",
   "summary": "Learn how Cypher patterns replace SQL joins by letting the shape of the query match the shape of the question you're asking. This lesson covers pattern syntax, relationship direction, optional matches, and the three most common mistakes that silently return wrong results instead of throwing errors.",
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
    "Neo4j",
    "Cypher",
    "graph patterns",
    "query syntax",
    "relationships",
    "MATCH",
    "OPTIONAL MATCH",
    "graph database",
    "query design",
    "common mistakes"
   ],
   "src": "/media/learn/cypher/cypher-01.mp4",
   "poster": "/media/learn/cypher/cypher-01.jpg",
   "captions": "/media/learn/cypher/cypher-01.vtt"
  },
  {
   "n": 2,
   "title": "WITH in Cypher: The Middle Checkpoint That Reshapes Rows",
   "summary": "Learn how the WITH clause works as a checkpoint in the middle of a Cypher query pipeline, letting you aggregate, filter, and rename rows before passing them downstream. Discover why WITH is a \"wall\" that blocks any variable you don't explicitly carry forward, and how to use it strategically to improve readability and performance by filtering early.",
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
    "query optimization",
    "variable scoping",
    "HAVING equivalent",
    "row filtering",
    "readable queries"
   ],
   "src": "/media/learn/cypher/cypher-02.mp4",
   "poster": "/media/learn/cypher/cypher-02.jpg",
   "captions": "/media/learn/cypher/cypher-02.vtt"
  },
  {
   "n": 3,
   "title": "Counting Things Properly: Aggregation Without GROUP BY in Cypher",
   "summary": "Learn how Cypher automatically groups data by treating every non-aggregated column in a RETURN statement as a grouping key—eliminating the need for explicit GROUP BY syntax. Discover common traps like accidentally grouping by an ID column, understand the differences between count(x), count(*), and count(DISTINCT x), and master aggregation functions like collect(), avg, min, max, and sum, including critical null-handling behavior in OPTIONAL MATCH scenarios.",
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
    "Neo4j",
    "null handling",
    "OPTIONAL MATCH",
    "SQL comparison"
   ],
   "src": "/media/learn/cypher/cypher-03.mp4",
   "poster": "/media/learn/cypher/cypher-03.jpg",
   "captions": "/media/learn/cypher/cypher-03.vtt"
  },
  {
   "n": 4,
   "title": "Variable-Length Paths in Cypher: Finding Connections Across Hops",
   "summary": "Learn how to use variable-length path patterns in Cypher to find connections across multiple hops in a graph, from specifying bounds with the asterisk notation to understanding how path length affects result size. You'll see how to name and inspect paths to extract the actual chain of nodes, explore the differences between variable-length matches and shortestPath, and discover the common performance pitfalls to avoid.",
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
    "pattern matching",
    "Neo4j",
    "shortest path",
    "graph traversal",
    "query optimization"
   ],
   "src": "/media/learn/cypher/cypher-04.mp4",
   "poster": "/media/learn/cypher/cypher-04.jpg",
   "captions": "/media/learn/cypher/cypher-04.vtt"
  },
  {
   "n": 5,
   "title": "Lists, Maps, and Data Shaping in Cypher",
   "summary": "Learn the non-graph parts of Cypher that shape query results into lists, maps, and objects for APIs and applications. You'll master list operations, comprehensions, UNWIND, and map projection—the techniques that turn raw graph queries into properly formatted output.",
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
    "maps",
    "comprehensions",
    "UNWIND",
    "data shaping",
    "query results",
    "Neo4j",
    "graph databases",
    "parameters"
   ],
   "src": "/media/learn/cypher/cypher-05.mp4",
   "poster": "/media/learn/cypher/cypher-05.jpg",
   "captions": "/media/learn/cypher/cypher-05.vtt"
  },
  {
   "n": 6,
   "title": "Cypher Subqueries: EXISTS, COUNT, and CALL",
   "summary": "Learn how to ask questions inside questions using Cypher subqueries—EXISTS for pattern checks, COUNT for filtered numbers, and CALL for per-row result sets. Instead of looping your application or writing complex WITH clauses, you'll write one efficient query that answers complex questions like \"top three professors per college\" in a single round trip.",
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
    "top-N queries",
    "graph databases"
   ],
   "src": "/media/learn/cypher/cypher-06.mp4",
   "poster": "/media/learn/cypher/cypher-06.jpg",
   "captions": "/media/learn/cypher/cypher-06.vtt"
  },
  {
   "n": 7,
   "title": "MERGE, SET, REMOVE: Safe Updates in Cypher",
   "summary": "Learn how to safely update graph data by understanding MERGE's precision, when to split operations with ON CREATE SET and ON MATCH SET, and how to handle relationships and properties correctly. You'll be able to write update queries that won't accidentally create duplicates and understand why constraints are essential for data safety.",
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
    "SET",
    "REMOVE",
    "Cypher",
    "Neo4j",
    "graph database",
    "constraints",
    "duplicate prevention",
    "data updates"
   ],
   "src": "/media/learn/cypher/cypher-07.mp4",
   "poster": "/media/learn/cypher/cypher-07.jpg",
   "captions": "/media/learn/cypher/cypher-07.vtt"
  },
  {
   "n": 8,
   "title": "Importing Data into Neo4j: From CSV to Graph",
   "summary": "Learn how to import data from CSV files into Neo4j using LOAD CSV, and the practical patterns that prevent common mistakes like duplicates and memory overflows. You'll understand why imports fail silently, how to structure imports for large datasets, and how to verify your data loaded correctly.",
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
    "LOAD CSV",
    "data import",
    "Neo4j",
    "CSV files",
    "MERGE",
    "constraints",
    "batch processing",
    "graph database",
    "data loading",
    "transactions"
   ],
   "src": "/media/learn/cypher/cypher-08.mp4",
   "poster": "/media/learn/cypher/cypher-08.jpg",
   "captions": "/media/learn/cypher/cypher-08.vtt"
  },
  {
   "n": 9,
   "title": "Neo4j Query Performance: Indexes and Execution Plans",
   "summary": "Learn why the same query runs fast on your laptop but slow on production databases, and how to fix it using indexes and execution plans. This video teaches you to read PROFILE output, understand range/composite/text indexes, and diagnose performance problems by finding where the database is doing wasteful work.",
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
    "indexes",
    "query performance",
    "PROFILE",
    "EXPLAIN",
    "execution plans",
    "database optimization",
    "composite indexes",
    "text indexes",
    "database tuning"
   ],
   "src": "/media/learn/cypher/cypher-09.mp4",
   "poster": "/media/learn/cypher/cypher-09.jpg",
   "captions": "/media/learn/cypher/cypher-09.vtt"
  },
  {
   "n": 10,
   "title": "Five Queries That Look Correct but Aren't",
   "summary": "Learn to spot five subtle Cypher mistakes that produce wrong answers or timeout without raising errors: Cartesian products from unconnected patterns, unbounded traversals across the graph, COUNT aggregations counting nulls, MERGE matching on relationships rather than identity, and performance shifts from new labels. You'll be able to diagnose these expensive mistakes by reading query plans and avoid shipping queries that work in testing but fail in production.",
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
    "MERGE",
    "COUNT",
    "traversal",
    "Cartesian product",
    "PROFILE",
    "graph database"
   ],
   "src": "/media/learn/cypher/cypher-10.mp4",
   "poster": "/media/learn/cypher/cypher-10.jpg",
   "captions": "/media/learn/cypher/cypher-10.vtt"
  }
 ];

export const RELALG: Lesson[] = [
  {
   "n": 1,
   "title": "Why Relational Algebra Isn't Just SQL",
   "summary": "Learn why relational algebra matters beyond being a path to SQL: it's a different way of describing queries where every step is explicit and ordered. This video introduces the core concept that relational algebra is an algebra just like arithmetic—relations go in, relations come out—and covers the six fundamental operators you'll need, using a games database as your working example.",
   "runs": "8:59",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why isn't this just SQL?"
    },
    {
     "at": "1:00",
     "title": "The catalogue we'll use for sixteen lessons"
    },
    {
     "at": "2:12",
     "title": "Why it's called an algebra"
    },
    {
     "at": "3:08",
     "title": "One expression, built inside out"
    },
    {
     "at": "4:50",
     "title": "Same question, why not just say it in SQL"
    },
    {
     "at": "5:47",
     "title": "Six operators, the whole map"
    },
    {
     "at": "6:46",
     "title": "Where people trip up early"
    },
    {
     "at": "7:33",
     "title": "What an answer actually looks like"
    },
    {
     "at": "8:08",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "SQL",
    "database queries",
    "selection",
    "projection",
    "query optimization",
    "formal notation",
    "operators",
    "filtering rows",
    "choosing columns"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-01.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-01.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-01.vtt"
  },
  {
   "n": 2,
   "title": "Selection in Relational Algebra: Filtering Rows",
   "summary": "Learn the selection operator (σ), the simplest tool in relational algebra for filtering rows from a table based on conditions. This video teaches you how to write selection expressions with comparisons, combine conditions using and/or/not, avoid common mistakes, and understand why the rules matter before you ever write SQL.",
   "runs": "6:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:36",
     "title": "The one rule: rows in, same columns out"
    },
    {
     "at": "1:35",
     "title": "One comparison at a time"
    },
    {
     "at": "2:48",
     "title": "And, or, not — and why the parentheses matter"
    },
    {
     "at": "4:18",
     "title": "The trap: a column that doesn't exist"
    },
    {
     "at": "5:04",
     "title": "Two selections in a row, or one with 'and'"
    },
    {
     "at": "5:57",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "selection operator",
    "sigma",
    "filtering rows",
    "query conditions",
    "relational database",
    "SQL foundations",
    "comparison operators",
    "boolean logic"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-02.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-02.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-02.vtt"
  },
  {
   "n": 3,
   "title": "Projection: Keeping and Discarding Columns",
   "summary": "Learn the projection operator (π), which keeps specified columns and discards the rest—a key relational algebra move that differs from SQL SELECT because it automatically removes duplicate rows. Discover why order matters: why you must filter before projecting to avoid errors, and how single-column projection answers \"which ones\" questions.",
   "runs": "7:11",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Column Problem"
    },
    {
     "at": "0:46",
     "title": "Projection, Defined"
    },
    {
     "at": "1:44",
     "title": "Eleven Rows In, Four Rows Out"
    },
    {
     "at": "3:12",
     "title": "Selection Then Projection, Or the Other Way Around"
    },
    {
     "at": "4:17",
     "title": "The Column You Already Threw Away"
    },
    {
     "at": "5:04",
     "title": "Filter First, Project Last"
    },
    {
     "at": "5:48",
     "title": "Projection Answers 'Which Ones'"
    },
    {
     "at": "6:27",
     "title": "Recap"
    }
   ],
   "tags": [
    "projection",
    "relational algebra",
    "pi operator",
    "columns",
    "SQL",
    "selection",
    "filtering",
    "duplicates",
    "query order",
    "database"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-03.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-03.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-03.vtt"
  },
  {
   "n": 4,
   "title": "Breaking Down Complex Relational Algebra with Assignment",
   "summary": "Learn how to replace intimidating nested relational algebra expressions with clear, named steps using assignment. After this lesson, you'll be able to break complex queries into readable intermediate relations, debug them piece by piece, and verify each step independently.",
   "runs": "6:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Line Nobody Can Read"
    },
    {
     "at": "0:44",
     "title": "Read The Nested Line Aloud"
    },
    {
     "at": "1:53",
     "title": "Assignment, Defined"
    },
    {
     "at": "2:41",
     "title": "The Same Query, Four Lines"
    },
    {
     "at": "4:11",
     "title": "The Debugging Walk"
    },
    {
     "at": "5:22",
     "title": "Name It Like You'll Read It Again"
    },
    {
     "at": "5:56",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "assignment",
    "debugging",
    "SQL",
    "database queries",
    "nested expressions",
    "intermediate relations",
    "query optimization",
    "step-by-step",
    "query verification"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-04.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-04.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-04.vtt"
  },
  {
   "n": 5,
   "title": "The Rename Operator (ρ): Handling Ambiguous Columns in Queries",
   "summary": "Learn when and how to use the rename operator (ρ) to resolve column name conflicts in SQL queries. This video teaches two essential uses: renaming copies when joining a table to itself, and renaming attributes before unions and joins to prevent ambiguity errors. After watching, you'll be able to diagnose \"ambiguous column reference\" errors and fix them with strategic renaming.",
   "runs": "8:37",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Same Table, Twice"
    },
    {
     "at": "1:09",
     "title": "Why You Need Two Copies"
    },
    {
     "at": "2:15",
     "title": "Renaming a Whole Relation"
    },
    {
     "at": "3:53",
     "title": "Say It Back"
    },
    {
     "at": "4:37",
     "title": "Renaming Before Union"
    },
    {
     "at": "5:50",
     "title": "Renaming Before a Join"
    },
    {
     "at": "6:37",
     "title": "The Ambiguous Attribute Error"
    },
    {
     "at": "7:36",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "rename operator",
    "self-join",
    "ambiguous columns",
    "SQL queries",
    "union-compatible",
    "natural join",
    "schema design",
    "query debugging"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-05.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-05.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-05.vtt"
  },
  {
   "n": 6,
   "title": "Joining Tables: Cross Product and Theta Join",
   "summary": "Learn how to combine two or more tables using cross product and theta join operators in relational algebra. This lesson covers why cross product alone produces unwanted results, how selection fixes it, and how to chain multiple joins together—plus how to spot mistakes when your row count grows too large.",
   "runs": "8:24",
   "chapters": [
    {
     "at": "0:00",
     "title": "How do you even put two tables together?"
    },
    {
     "at": "0:56",
     "title": "Cross product: every row with every row"
    },
    {
     "at": "2:18",
     "title": "Filtering the mess: cross product plus selection"
    },
    {
     "at": "3:50",
     "title": "The theta join: the same move, one symbol"
    },
    {
     "at": "5:21",
     "title": "Joining three relations"
    },
    {
     "at": "6:19",
     "title": "The sanity check: row count going UP"
    },
    {
     "at": "7:29",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "join",
    "cross product",
    "theta join",
    "selection",
    "combining tables",
    "database",
    "foreign key",
    "multiple tables"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-06.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-06.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-06.vtt"
  },
  {
   "n": 7,
   "title": "Natural Join: When the Shortcut Works and When It Doesn't",
   "summary": "Learn how natural join automatically joins two relations on all columns they share in common, eliminating repetitive typing. Discover the two critical traps—accidental name matches and missing shared names—and the simple habit that keeps you safe: always verify which columns are actually shared before writing the join.",
   "runs": "6:30",
   "chapters": [
    {
     "at": "0:00",
     "title": "The shortcut everyone reaches for"
    },
    {
     "at": "0:44",
     "title": "What natural join actually does"
    },
    {
     "at": "1:43",
     "title": "Same rows, less typing"
    },
    {
     "at": "2:27",
     "title": "Case one: a name shared by accident"
    },
    {
     "at": "3:40",
     "title": "Case two: no shared name at all"
    },
    {
     "at": "4:41",
     "title": "The habit that prevents both traps"
    },
    {
     "at": "5:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "natural join",
    "SQL joins",
    "theta join",
    "database relations",
    "join conditions",
    "schema matching",
    "cross product",
    "database design pitfalls"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-07.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-07.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-07.vtt"
  },
  {
   "n": 8,
   "title": "Outer Joins: Left, Right, and Full in SQL",
   "summary": "Learn when a natural join silently drops unmatched rows and how to keep them instead with left, right, and full outer joins. This video teaches the three types of outer joins, their theta variants with custom conditions, and the critical trap that nulls can undo your outer join in unexpected ways during filtering.",
   "runs": "6:08",
   "chapters": [
    {
     "at": "0:00",
     "title": "The console that sold nothing disappears"
    },
    {
     "at": "0:57",
     "title": "Left outer join: keep everything from the left"
    },
    {
     "at": "2:07",
     "title": "Right outer join: keep everything from the right"
    },
    {
     "at": "2:56",
     "title": "Full outer join: keep both, no matter what"
    },
    {
     "at": "3:39",
     "title": "Theta variants: outer join on your own condition"
    },
    {
     "at": "4:14",
     "title": "The trap: a null quietly undoes your outer join"
    },
    {
     "at": "5:17",
     "title": "When to reach for which one"
    }
   ],
   "tags": [
    "SQL",
    "outer join",
    "left join",
    "right join",
    "full join",
    "null values",
    "join conditions",
    "database queries",
    "relational algebra",
    "data matching"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-08.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-08.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-08.vtt"
  },
  {
   "n": 9,
   "title": "Set Operations in Relational Algebra: Union, Difference, Intersection",
   "summary": "Learn the three fundamental set operations in relational algebra: union for combining result sets, difference for negation and exclusion, and intersection for finding common rows. This video teaches you the single rule (union compatibility) that governs all three operators and shows you how to use them to answer practical database questions, including how to phrase \"never\" and \"not\" conditions without explicit negative operators.",
   "runs": "9:03",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:54",
     "title": "The one rule: union compatibility"
    },
    {
     "at": "2:45",
     "title": "Union: answering an 'or' question"
    },
    {
     "at": "3:57",
     "title": "Difference: how you say 'not'"
    },
    {
     "at": "4:39",
     "title": "Working difference all the way through"
    },
    {
     "at": "6:05",
     "title": "Intersection: a convenience"
    },
    {
     "at": "7:10",
     "title": "Mistakes: duplicates and the count you were relying on"
    },
    {
     "at": "8:05",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "set operations",
    "union",
    "difference",
    "intersection",
    "SQL queries",
    "database",
    "union compatibility",
    "query logic"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-09.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-09.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-09.vtt"
  },
  {
   "n": 10,
   "title": "The Last Mile: Converting English Questions into Relational Algebra",
   "summary": "Learn the systematic four-move method for translating English sentences into relational algebra expressions: identify relations from nouns, distinguish between selection and join conditions, determine the final projection, and build from the inside out. Then master debugging techniques to catch common mistakes like missing join conditions, incorrect row counts, and duplicate issues when your expression runs but produces the wrong answer.",
   "runs": "11:24",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Last Mile"
    },
    {
     "at": "0:48",
     "title": "The Four Moves"
    },
    {
     "at": "1:43",
     "title": "Sentence One — a plain join"
    },
    {
     "at": "3:04",
     "title": "Sentence Two — the word 'every', and a difference"
    },
    {
     "at": "4:53",
     "title": "Sentence Three — a self-join"
    },
    {
     "at": "6:37",
     "title": "Phrasebook: Words That Point At Operators"
    },
    {
     "at": "7:22",
     "title": "Debugging, Step One — Count The Rows"
    },
    {
     "at": "8:17",
     "title": "Debugging, Step Two — Columns, Duplicates, The Final Line"
    },
    {
     "at": "9:09",
     "title": "The Tool As A Microscope"
    },
    {
     "at": "9:54",
     "title": "The Habit That Makes The Next One Faster"
    },
    {
     "at": "10:19",
     "title": "Recap"
    }
   ],
   "tags": [
    "relational algebra",
    "database queries",
    "SQL",
    "query translation",
    "debugging queries",
    "joins",
    "selection",
    "projection",
    "natural language to algebra",
    "database design"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-10.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-10.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-10.vtt"
  },
  {
   "n": 11,
   "title": "Six Relational Algebra Practice Problems: Selection and Projection",
   "summary": "Work through six realistic problems using only selection (sigma) and projection (pi) operators on a game catalogue database. After each problem is posed, you'll pause to try it yourself before seeing the worked solution, covering essential patterns like multiple conditions with AND, OR with parentheses, NOT, and duplicate removal.",
   "runs": "8:33",
   "chapters": [
    {
     "at": "0:00",
     "title": "Time to actually do it"
    },
    {
     "at": "0:37",
     "title": "Problem one — titles after a given year"
    },
    {
     "at": "1:38",
     "title": "Problem two — one genre, one console, an and"
    },
    {
     "at": "2:49",
     "title": "Problem three — either genre, and the parentheses trap"
    },
    {
     "at": "4:48",
     "title": "Problem four — the distinct genres"
    },
    {
     "at": "5:43",
     "title": "Problem five — not a genre"
    },
    {
     "at": "6:40",
     "title": "Problem six — when selection and projection aren't enough"
    },
    {
     "at": "7:41",
     "title": "What the six problems showed"
    }
   ],
   "tags": [
    "relational algebra",
    "selection",
    "projection",
    "sigma",
    "pi",
    "practice problems",
    "database queries",
    "AND OR NOT",
    "duplicate elimination",
    "query writing"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-11.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-11.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-11.vtt"
  },
  {
   "n": 12,
   "title": "Five Joins, No Shortcuts: Building SQL Joins from First Principles",
   "summary": "Learn to build SQL joins confidently by starting with cross products and selections before taking shortcuts. This video walks through five real problems—from simple equality joins to edge cases like accidental shared column names and non-equality conditions—showing you how to debug joins by watching row counts as your guide.",
   "runs": "10:36",
   "chapters": [
    {
     "at": "0:00",
     "title": "Five Joins, No Shortcuts"
    },
    {
     "at": "1:00",
     "title": "Problem One — Title With Console Name"
    },
    {
     "at": "3:17",
     "title": "Problem Two — Title With Studio City"
    },
    {
     "at": "4:29",
     "title": "Problem Three — Title Through to Region Sales"
    },
    {
     "at": "6:00",
     "title": "Problem Four — The Accidental Shared Column"
    },
    {
     "at": "7:28",
     "title": "Problem Five — A Join That Isn't Equality"
    },
    {
     "at": "8:57",
     "title": "The Two-Line Rule"
    },
    {
     "at": "9:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "SQL joins",
    "cross product",
    "theta join",
    "natural join",
    "relational algebra",
    "database queries",
    "join conditions",
    "debugging SQL",
    "selection operator",
    "row count verification"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-12.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-12.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-12.vtt"
  },
  {
   "n": 13,
   "title": "Set Difference: Answering 'None' and 'Every' Questions in SQL",
   "summary": "Learn how to write relational algebra queries that answer \"none\" and \"every\" questions using set difference—queries that can't be solved with a simple WHERE clause. This lesson teaches the skeleton pattern for both types: one difference operator for \"none\" questions, and two nested differences with a cross product for \"every\" questions.",
   "runs": "8:43",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody can just 'select' their way to"
    },
    {
     "at": "0:48",
     "title": "The shape before the examples"
    },
    {
     "at": "1:26",
     "title": "Problem one: consoles that never sold in a region"
    },
    {
     "at": "2:34",
     "title": "Problem two: studios with no title in a genre"
    },
    {
     "at": "3:33",
     "title": "Problem three: comparing two regions directly"
    },
    {
     "at": "4:24",
     "title": "The one everyone dreads: 'every'"
    },
    {
     "at": "5:01",
     "title": "Building 'every' in five steps"
    },
    {
     "at": "6:32",
     "title": "Saying it back"
    },
    {
     "at": "7:05",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:59",
     "title": "Recap"
    }
   ],
   "tags": [
    "SQL",
    "relational algebra",
    "set difference",
    "NOT logic",
    "cross product",
    "query writing",
    "none and every",
    "database joins",
    "assignment help",
    "exam prep"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-13.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-13.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-13.vtt"
  },
  {
   "n": 14,
   "title": "Self-Joins: Comparing a Table to Itself",
   "summary": "Learn how to join a table to a renamed copy of itself to compare rows side by side. This video teaches the self-join pattern used to find pairs of items matching on certain criteria—like games released the same year on the same console, or consoles from the same maker at different prices. You'll see how renaming, theta joins, and ordering conditions work together to eliminate duplicate and self-paired results.",
   "runs": "9:47",
   "chapters": [
    {
     "at": "0:00",
     "title": "Comparing a Table to Itself"
    },
    {
     "at": "0:51",
     "title": "Why You Need Two Copies"
    },
    {
     "at": "2:03",
     "title": "Attempt One: The Ambiguous Query"
    },
    {
     "at": "3:19",
     "title": "Fixing It With Rename"
    },
    {
     "at": "4:40",
     "title": "One Condition, Two Problems Solved"
    },
    {
     "at": "5:49",
     "title": "A Console Cheaper Than Another, Same Maker"
    },
    {
     "at": "7:08",
     "title": "Scaling Up: Three Copies"
    },
    {
     "at": "8:05",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "8:59",
     "title": "Recap"
    }
   ],
   "tags": [
    "self-join",
    "rename",
    "theta join",
    "relational algebra",
    "SQL",
    "comparing rows",
    "duplicate elimination",
    "database queries"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-14.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-14.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-14.vtt"
  },
  {
   "n": 15,
   "title": "Reading the Question: Signal Words for Database Operators",
   "summary": "Learn how to translate English phrases in assignment questions into the correct relational algebra operators. This lesson teaches you to recognize signal words like \"also,\" \"never,\" \"including those with none,\" and \"every\" so you can identify whether a question needs intersection, difference, outer join, projection, union, or join before you write a single line of code.",
   "runs": "7:20",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question before the expression"
    },
    {
     "at": "0:45",
     "title": "\"That also\" — join or intersection"
    },
    {
     "at": "1:28",
     "title": "\"But not\" and \"never\" — difference"
    },
    {
     "at": "1:58",
     "title": "\"Including those with none\" — outer join"
    },
    {
     "at": "2:35",
     "title": "\"How many distinct\" — projection's duplicate removal"
    },
    {
     "at": "3:07",
     "title": "\"Every\" and \"all\" — the double-difference pattern"
    },
    {
     "at": "3:41",
     "title": "\"Either\" — union and the compatibility rule"
    },
    {
     "at": "4:15",
     "title": "Trap one — \"and\" that secretly wants a join"
    },
    {
     "at": "4:56",
     "title": "Trap two — \"or\" across two relations wants union"
    },
    {
     "at": "5:38",
     "title": "The signal list"
    },
    {
     "at": "6:22",
     "title": "The four-step method, as a screenshot card"
    }
   ],
   "tags": [
    "relational algebra",
    "database queries",
    "signal words",
    "query translation",
    "intersection",
    "difference",
    "join",
    "outer join",
    "union",
    "projection",
    "SQL concepts"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-15.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-15.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-15.vtt"
  },
  {
   "n": 16,
   "title": "Relational Algebra: Exam Prep—One Page, Six Mistakes, Three Questions",
   "summary": "This video condenses all operators of relational algebra onto one reference page, then walks through the six most common mistakes that lose marks on exams, and finishes with three complete questions solved at real exam speed. You'll learn to spot and avoid the traps—projection removing duplicates, outer joins undone by filters, union-incompatible relations—and develop two habits that catch errors before they compound.",
   "runs": "7:55",
   "chapters": [
    {
     "at": "0:00",
     "title": "The last ten minutes before the exam"
    },
    {
     "at": "0:40",
     "title": "The one page, part one: selection and projection"
    },
    {
     "at": "1:24",
     "title": "The one page, part two: rename, cross product, theta join, natural join"
    },
    {
     "at": "2:20",
     "title": "The one page, part three: outer joins and set operations"
    },
    {
     "at": "3:06",
     "title": "Mistake one: projecting away the column you still need"
    },
    {
     "at": "3:44",
     "title": "Mistakes two and three: forgotten duplicates, accidental natural join"
    },
    {
     "at": "4:34",
     "title": "Mistake four: a selection that undoes the outer join"
    },
    {
     "at": "5:05",
     "title": "Mistakes five and six: mismatched union, missing final answer"
    },
    {
     "at": "5:50",
     "title": "The timed run: three questions, no pausing"
    },
    {
     "at": "7:01",
     "title": "Two habits worth keeping"
    }
   ],
   "tags": [
    "relational algebra",
    "selection",
    "projection",
    "join",
    "outer join",
    "set operations",
    "exam preparation",
    "query mistakes",
    "union compatibility",
    "duplicate rows"
   ],
   "src": "/media/learn/relational-algebra/relational-algebra-16.mp4",
   "poster": "/media/learn/relational-algebra/relational-algebra-16.jpg",
   "captions": "/media/learn/relational-algebra/relational-algebra-16.vtt"
  }
 ];

export const LANGCHAIN: Lesson[] = [
  {
   "n": 1,
   "title": "What LangChain Actually Does: The ChatModel Interface",
   "summary": "Learn what LangChain is really for: providing a consistent interface across different AI model providers. This video clarifies common misconceptions (like thinking LangChain builds agents), shows you the ChatModel interface that lets you swap OpenAI for Anthropic without rewriting code, and demonstrates how you get invoke, stream, and batch methods automatically—all through concrete examples with Northstar Cycles, a bicycle repair shop assistant you'll build throughout this course.",
   "runs": "6:20",
   "chapters": [
    {
     "at": "0:00",
     "title": "Is LangChain the agent framework?"
    },
    {
     "at": "0:54",
     "title": "The saving-weeks part"
    },
    {
     "at": "1:38",
     "title": "The bicycle shop assistant"
    },
    {
     "at": "2:35",
     "title": "The interface, in real code"
    },
    {
     "at": "3:23",
     "title": "Streaming and batching for free"
    },
    {
     "at": "4:03",
     "title": "What it costs you"
    },
    {
     "at": "4:46",
     "title": "The mistake people make"
    },
    {
     "at": "5:20",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "ChatModel interface",
    "AI agents",
    "LLM framework",
    "model abstraction",
    "streaming",
    "batching",
    "LangGraph",
    "OpenAI",
    "Anthropic"
   ],
   "src": "/media/learn/langchain/langchain-01.mp4",
   "poster": "/media/learn/langchain/langchain-01.jpg",
   "captions": "/media/learn/langchain/langchain-01.vtt"
  },
  {
   "n": 2,
   "title": "Chat Models: Messages, Methods, and Parameters",
   "summary": "Learn why LangChain chat models work with message lists instead of plain strings, and how the four message types—system, human, AI, and tool—keep conversation roles separate. Discover the three ways to run a model (invoke, batch, and stream), master the key parameters that affect cost and behavior, and see how to include images alongside text in a single message.",
   "runs": "9:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why a list, not a string?"
    },
    {
     "at": "0:52",
     "title": "System, human, ai, tool"
    },
    {
     "at": "2:11",
     "title": "invoke — one call, one answer"
    },
    {
     "at": "3:19",
     "title": "batch — many calls, handled for you"
    },
    {
     "at": "4:02",
     "title": "stream — tokens as they arrive"
    },
    {
     "at": "4:50",
     "title": "The parameters that cost you something"
    },
    {
     "at": "5:53",
     "title": "A photo of a worn cassette"
    },
    {
     "at": "7:10",
     "title": "The trap: batch is not a loop"
    },
    {
     "at": "8:04",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "chat models",
    "messages",
    "invoke",
    "batch",
    "stream",
    "temperature",
    "ChatOpenAI",
    "multimodal"
   ],
   "src": "/media/learn/langchain/langchain-02.mp4",
   "poster": "/media/learn/langchain/langchain-02.jpg",
   "captions": "/media/learn/langchain/langchain-02.vtt"
  },
  {
   "n": 3,
   "title": "Beyond F-Strings: Prompt Templates in LangChain",
   "summary": "Learn why hardcoded f-strings break down for complex AI prompts and how LangChain's template system solves it. You'll master PromptTemplate, ChatPromptTemplate with conversation history, partials for fixed values, and semantic similarity-based example selection to build maintainable, robust prompts that catch errors before they reach your users.",
   "runs": "9:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why not just an f-string?"
    },
    {
     "at": "0:58",
     "title": "PromptTemplate and the missing variable"
    },
    {
     "at": "2:00",
     "title": "ChatPromptTemplate: roles and history"
    },
    {
     "at": "3:19",
     "title": "Partials: baking in the fixed values"
    },
    {
     "at": "4:17",
     "title": "Few-shot with a fixed list — and its ceiling"
    },
    {
     "at": "5:29",
     "title": "Example selectors: pick by similarity"
    },
    {
     "at": "7:00",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:47",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "prompt templates",
    "PromptTemplate",
    "ChatPromptTemplate",
    "few-shot prompting",
    "example selectors",
    "semantic similarity",
    "prompt engineering"
   ],
   "src": "/media/learn/langchain/langchain-03.mp4",
   "poster": "/media/learn/langchain/langchain-03.jpg",
   "captions": "/media/learn/langchain/langchain-03.vtt"
  },
  {
   "n": 4,
   "title": "Structured Output: Getting Objects, Not Sentences, From LLMs",
   "summary": "Learn how to use LangChain's with_structured_output to get back actual Python objects from language models instead of strings you have to parse. You'll define Pydantic schemas, understand the two mechanisms underneath (tool calling and JSON mode), and handle validation errors gracefully in production.",
   "runs": "8:44",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Problem With a Good Sentence"
    },
    {
     "at": "0:58",
     "title": "Defining the Shape: a Pydantic Model"
    },
    {
     "at": "2:11",
     "title": "with_structured_output: the Call"
    },
    {
     "at": "3:18",
     "title": "Pydantic Versus a Plain Dict Schema"
    },
    {
     "at": "4:13",
     "title": "How It Actually Works Underneath"
    },
    {
     "at": "5:32",
     "title": "When It Doesn't Validate"
    },
    {
     "at": "6:56",
     "title": "Mistakes People Actually Make"
    },
    {
     "at": "7:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "structured output",
    "Pydantic",
    "LLM",
    "with_structured_output",
    "validation",
    "tool calling",
    "JSON mode",
    "API integration",
    "production patterns"
   ],
   "src": "/media/learn/langchain/langchain-04.mp4",
   "poster": "/media/learn/langchain/langchain-04.jpg",
   "captions": "/media/learn/langchain/langchain-04.vtt"
  },
  {
   "n": 5,
   "title": "LCEL: Composing LangChain Pieces into One System",
   "summary": "Learn how to connect separate LangChain components—prompts, models, and parsers—into a single unified system using the Runnable interface and the pipe operator. You'll master LCEL (LangChain Expression Language) patterns including pipes, parallel execution, passthrough, and lambda functions to build efficient, composable chains.",
   "runs": "7:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: how do pieces become one system"
    },
    {
     "at": "0:45",
     "title": "The Runnable contract"
    },
    {
     "at": "1:47",
     "title": "The pipe: prompt into model into parser"
    },
    {
     "at": "2:59",
     "title": "RunnableParallel: two lookups at once"
    },
    {
     "at": "4:08",
     "title": "RunnablePassthrough: carrying the original input along"
    },
    {
     "at": "5:10",
     "title": "RunnableLambda: a plain function in the middle"
    },
    {
     "at": "5:54",
     "title": "Where people trip up"
    },
    {
     "at": "6:47",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "LCEL",
    "Runnable",
    "pipe operator",
    "composition",
    "chain building",
    "parallel execution",
    "LLM",
    "prompt engineering",
    "output parsing"
   ],
   "src": "/media/learn/langchain/langchain-05.mp4",
   "poster": "/media/learn/langchain/langchain-05.jpg",
   "captions": "/media/learn/langchain/langchain-05.vtt"
  },
  {
   "n": 6,
   "title": "Resilience in LangChain: Fallbacks, Retries, Caching, and Rate Limits",
   "summary": "Learn how to build reliable LLM chains that handle real-world failures—rate limits, outages, and temporary errors. This video teaches fallbacks (switching to a backup model), retries with exponential backoff, caching identical requests, rate limiting to avoid throttling, and configurable fields to swap models between environments. You'll understand when to use each technique and how wrapping order affects behavior.",
   "runs": "12:01",
   "chapters": [
    {
     "at": "0:00",
     "title": "When the model provider has a bad afternoon"
    },
    {
     "at": "1:02",
     "title": "with_fallbacks — a second model waiting in the wings"
    },
    {
     "at": "2:41",
     "title": "with_retry — why backoff belongs in the library, not your loop"
    },
    {
     "at": "4:14",
     "title": "ConfigurableField — one chain, two environments"
    },
    {
     "at": "5:38",
     "title": "A cache, and the honest arithmetic of repeated questions"
    },
    {
     "at": "7:06",
     "title": "A rate limiter, and what a batch does without one"
    },
    {
     "at": "8:32",
     "title": "The order matters — fallbacks around retries versus retries around fallbacks"
    },
    {
     "at": "10:04",
     "title": "Where this goes wrong"
    },
    {
     "at": "11:09",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "fallbacks",
    "retry",
    "caching",
    "rate limiting",
    "error handling",
    "LLM chains",
    "resilience",
    "configurable fields",
    "backoff"
   ],
   "src": "/media/learn/langchain/langchain-06.mp4",
   "poster": "/media/learn/langchain/langchain-06.jpg",
   "captions": "/media/learn/langchain/langchain-06.vtt"
  },
  {
   "n": 8,
   "title": "Embedding repair manuals: loaders, splitting, and vector search",
   "summary": "Learn how to make unstructured text like PDFs searchable by meaning rather than keywords. This video walks through the complete pipeline: loading documents, splitting them wisely (fixed-size vs. recursive vs. structure-aware), converting text to embeddings, and storing vectors for retrieval—so an AI assistant can find and answer specific questions from a two-hundred-page manual by returning just the relevant line.",
   "runs": "13:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "The manual is huge, the answer is one line"
    },
    {
     "at": "1:00",
     "title": "Loaders: getting text out, and what falls on the floor"
    },
    {
     "at": "2:34",
     "title": "Splitting, attempt one: fixed size, and where it fails"
    },
    {
     "at": "4:07",
     "title": "Recursive character splitting: cut at the nearest natural seam"
    },
    {
     "at": "5:38",
     "title": "Embeddings: turning a chunk into a vector you can compare"
    },
    {
     "at": "7:03",
     "title": "Vector store: add, search, and score"
    },
    {
     "at": "8:39",
     "title": "The three ways this quietly breaks"
    },
    {
     "at": "9:57",
     "title": "Recap: four steps, one honest look at the output"
    }
   ],
   "tags": [
    "embeddings",
    "vector search",
    "text splitting",
    "RAG",
    "document loaders",
    "vector store",
    "semantic search",
    "PDF processing",
    "LLM",
    "Chroma"
   ],
   "src": "/media/learn/langchain/langchain-08.mp4",
   "poster": "/media/learn/langchain/langchain-08.jpg",
   "captions": "/media/learn/langchain/langchain-08.vtt"
  },
  {
   "n": 10,
   "title": "Keeping Vector Stores Fresh: Managing Document Updates with RecordManager",
   "summary": "Learn how to efficiently handle manual and document updates in your vector store without creating duplicate chunks. This video teaches you how SQLRecordManager tracks source identity and content changes, and shows you when and how to use cleanup modes (none, incremental, full) to keep your retrieval system accurate as documents evolve.",
   "runs": "8:44",
   "chapters": [
    {
     "at": "0:00",
     "title": "The manual that got edited"
    },
    {
     "at": "1:11",
     "title": "The RecordManager: a memory of what was written"
    },
    {
     "at": "2:10",
     "title": "The first load: everything is new"
    },
    {
     "at": "3:19",
     "title": "Three cleanup modes, three different deletions"
    },
    {
     "at": "4:44",
     "title": "Editing one page, re-running incremental"
    },
    {
     "at": "5:36",
     "title": "Three ways this quietly breaks"
    },
    {
     "at": "7:03",
     "title": "Scheduling it, and the cost of not"
    },
    {
     "at": "7:54",
     "title": "Recap"
    }
   ],
   "tags": [
    "vector store",
    "document indexing",
    "RecordManager",
    "incremental updates",
    "LangChain",
    "content deduplication",
    "data synchronization",
    "retrieval augmented generation",
    "document management",
    "RAG"
   ],
   "src": "/media/learn/langchain/langchain-10.mp4",
   "poster": "/media/learn/langchain/langchain-10.jpg",
   "captions": "/media/learn/langchain/langchain-10.vtt"
  },
  {
   "n": 11,
   "title": "Conversation Memory: Trimming, Summarizing, and Retrieving History",
   "summary": "Learn three production-ready strategies for managing conversation history in stateless language model chains: trimming to a token budget while protecting critical messages, summarizing old turns into concise paragraphs, and retrieving semantically relevant past turns instead of just recent ones. You'll discover how to wire history into chains using RunnableWithMessageHistory, avoid common mistakes that break real applications, and understand when these techniques reach their limits with branching logic.",
   "runs": "10:25",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Customer Who Comes Back"
    },
    {
     "at": "0:51",
     "title": "The Naive Version: Append Everything"
    },
    {
     "at": "2:13",
     "title": "Strategy One: Trimming"
    },
    {
     "at": "3:48",
     "title": "Strategy Two: Summarising Older Turns"
    },
    {
     "at": "4:57",
     "title": "Strategy Three: Retrieving Relevant Turns"
    },
    {
     "at": "6:06",
     "title": "Wiring History Into a Chain"
    },
    {
     "at": "7:48",
     "title": "The Mistakes People Make"
    },
    {
     "at": "8:42",
     "title": "Recap"
    },
    {
     "at": "9:31",
     "title": "Where This Runs Out"
    }
   ],
   "tags": [
    "conversation memory",
    "message history",
    "LangChain",
    "context window",
    "trimming",
    "summarization",
    "vector retrieval",
    "RunnableWithMessageHistory",
    "stateless chains",
    "session management"
   ],
   "src": "/media/learn/langchain/langchain-11.mp4",
   "poster": "/media/learn/langchain/langchain-11.jpg",
   "captions": "/media/learn/langchain/langchain-11.vtt"
  },
  {
   "n": 12,
   "title": "Observing chains: streaming, events, callbacks, and logs",
   "summary": "Learn how to show your work while an AI chain thinks, rather than leaving the user staring at a spinner. You'll use streaming for token-by-token output, astream_events to display each step as it happens, callbacks to log metrics like cost and timing, and tags/metadata to find specific runs later—without changing the chain itself.",
   "runs": "9:42",
   "chapters": [
    {
     "at": "0:00",
     "title": "The spinner problem"
    },
    {
     "at": "1:05",
     "title": "Streaming tokens with .stream"
    },
    {
     "at": "2:21",
     "title": "astream_events — seeing the steps"
    },
    {
     "at": "4:12",
     "title": "Callbacks — logging, timing, cost"
    },
    {
     "at": "5:36",
     "title": "Tags and metadata — finding a run later"
    },
    {
     "at": "6:42",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:42",
     "title": "Where a chain stops being enough"
    },
    {
     "at": "8:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangChain",
    "streaming",
    "astream_events",
    "callbacks",
    "time-to-first-token",
    "observability",
    "logging",
    "tags",
    "metadata",
    "chain execution"
   ],
   "src": "/media/learn/langchain/langchain-12.mp4",
   "poster": "/media/learn/langchain/langchain-12.jpg",
   "captions": "/media/learn/langchain/langchain-12.vtt"
  }
 ];

export const LANGGRAPH: Lesson[] = [
  {
   "n": 1,
   "title": "Why LangGraph: When Chains Break",
   "summary": "Learn why LangChain chains alone fall short and when you need LangGraph instead. This video walks through four critical limitations of chains—looping, branching, pausing for humans, and surviving restarts—then introduces the graph model of nodes and shared state that solves them. You'll see when to reach for a graph (and when chains are still the right choice).",
   "runs": "8:31",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "1:06",
     "title": "Need one: loop until it's good enough"
    },
    {
     "at": "1:55",
     "title": "Need two: branch on what it found"
    },
    {
     "at": "2:49",
     "title": "Need three: pause for a human"
    },
    {
     "at": "3:46",
     "title": "Need four: survive a restart"
    },
    {
     "at": "4:40",
     "title": "The model: nodes, shared state, edges"
    },
    {
     "at": "5:58",
     "title": "Drawing the shop assistant before code"
    },
    {
     "at": "6:54",
     "title": "Mistakes people make"
    },
    {
     "at": "7:44",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangGraph",
    "LangChain",
    "chains vs graphs",
    "multi-step workflows",
    "conditional logic",
    "agent design",
    "state management",
    "when to use graphs",
    "system design"
   ],
   "src": "/media/learn/langgraph/langgraph-01.mp4",
   "poster": "/media/learn/langgraph/langgraph-01.jpg",
   "captions": "/media/learn/langgraph/langgraph-01.vtt"
  },
  {
   "n": 2,
   "title": "Designing State in LangGraph: Schema, Reducers, and Data Flow",
   "summary": "Learn how LangGraph's state schema is the foundation of reliable agent design—not a vague memory blob but a typed contract that governs how all nodes communicate. Discover how partial updates, reducers, and the MessagesState base class prevent data loss and keep your agent's information flow clean and predictable.",
   "runs": "8:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: what does the graph actually remember?"
    },
    {
     "at": "0:45",
     "title": "A typed schema, not a grab bag"
    },
    {
     "at": "1:31",
     "title": "Partial updates: return only what changed"
    },
    {
     "at": "2:27",
     "title": "The mistake: two nodes, one key, the second silently wins"
    },
    {
     "at": "3:32",
     "title": "Reducers: how an update combines, not replaces"
    },
    {
     "at": "4:51",
     "title": "MessagesState: the prebuilt shape for the common case"
    },
    {
     "at": "5:30",
     "title": "Designing the shop's state, honestly"
    },
    {
     "at": "6:52",
     "title": "Keep state small — it's all written, read, and checkpointed"
    },
    {
     "at": "7:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangGraph",
    "state management",
    "TypedDict",
    "reducers",
    "MessagesState",
    "agent design",
    "data flow",
    "schema design",
    "typed contracts",
    "partial updates"
   ],
   "src": "/media/learn/langgraph/langgraph-02.mp4",
   "poster": "/media/learn/langgraph/langgraph-02.jpg",
   "captions": "/media/learn/langgraph/langgraph-02.vtt"
  },
  {
   "n": 3,
   "title": "Building Your First LangGraph: Nodes, Edges, and State",
   "summary": "Learn how to build and run your first graph in LangGraph by wiring nodes together with edges. You'll write functions that transform state into partial updates, use invoke to get final results, and stream to watch each node finish in real time.",
   "runs": "8:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: what actually runs?"
    },
    {
     "at": "0:52",
     "title": "One node, wired start to end"
    },
    {
     "at": "1:51",
     "title": "Compile, then invoke"
    },
    {
     "at": "2:40",
     "title": "Adding a second node, watch the merge"
    },
    {
     "at": "3:50",
     "title": "Streaming: watch each node as it finishes"
    },
    {
     "at": "4:41",
     "title": "The shop's real pair: understand, then look up"
    },
    {
     "at": "6:00",
     "title": "The mistakes that bite"
    },
    {
     "at": "6:43",
     "title": "The habit that pays for itself"
    },
    {
     "at": "7:21",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangGraph",
    "nodes",
    "edges",
    "state management",
    "invoke",
    "stream",
    "graph execution",
    "Python functions",
    "workflow",
    "partial updates"
   ],
   "src": "/media/learn/langgraph/langgraph-03.mp4",
   "poster": "/media/learn/langgraph/langgraph-03.jpg",
   "captions": "/media/learn/langgraph/langgraph-03.vtt"
  },
  {
   "n": 4,
   "title": "Conditional Edges: Routing Decisions in LangGraph",
   "summary": "Learn how to make graphs that branch based on state, using conditional edges and routing functions to send requests down different paths. You'll see how to return single or multiple destinations, use the Command object to let nodes decide their own next step, and avoid common pitfalls like unmapped strings and reducer bugs that silently lose data.",
   "runs": "8:51",
   "chapters": [
    {
     "at": "0:00",
     "title": "The fork in the road"
    },
    {
     "at": "0:50",
     "title": "A function that names the next node"
    },
    {
     "at": "2:24",
     "title": "Running it both ways"
    },
    {
     "at": "3:08",
     "title": "Returning a list: fan-out"
    },
    {
     "at": "4:14",
     "title": "Command: update state and route in one move"
    },
    {
     "at": "5:56",
     "title": "Worked example: the escalation path"
    },
    {
     "at": "6:48",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:55",
     "title": "Recap: the readability rule"
    }
   ],
   "tags": [
    "LangGraph",
    "conditional edges",
    "routing functions",
    "fan-out",
    "Command",
    "state management",
    "decision trees",
    "graph workflows"
   ],
   "src": "/media/learn/langgraph/langgraph-04.mp4",
   "poster": "/media/learn/langgraph/langgraph-04.jpg",
   "captions": "/media/learn/langgraph/langgraph-04.vtt"
  },
  {
   "n": 5,
   "title": "Building Agent Loops: From Sketch to Code to One-Liner",
   "summary": "Learn what actually makes an agent an agent: a loop where a model decides when to call tools, tools run, results return to the model, and the cycle repeats until the model stops. You'll sketch the agent loop by hand, write the model and tool nodes, set up the conditional edge that drives the cycle, watch it work on a real two-step question, then see how LangGraph's create_react_agent does it all in one line.",
   "runs": "8:37",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question: what actually makes it an agent?"
    },
    {
     "at": "0:55",
     "title": "Drawing the cycle first"
    },
    {
     "at": "1:44",
     "title": "Writing the model node"
    },
    {
     "at": "2:40",
     "title": "Writing the tool node"
    },
    {
     "at": "3:27",
     "title": "The edge that decides: loop or stop"
    },
    {
     "at": "4:20",
     "title": "Running it: a question that needs two lookups"
    },
    {
     "at": "5:32",
     "title": "The recursion limit — and skipping it"
    },
    {
     "at": "6:20",
     "title": "The one-line version: create_react_agent"
    },
    {
     "at": "7:09",
     "title": "What you'd change first"
    },
    {
     "at": "7:59",
     "title": "Recap"
    }
   ],
   "tags": [
    "agent loop",
    "LangGraph",
    "model node",
    "tool node",
    "conditional edges",
    "ToolNode",
    "create_react_agent",
    "recursion limit",
    "ReAct agents",
    "agentic AI"
   ],
   "src": "/media/learn/langgraph/langgraph-05.mp4",
   "poster": "/media/learn/langgraph/langgraph-05.jpg",
   "captions": "/media/learn/langgraph/langgraph-05.vtt"
  },
  {
   "n": 6,
   "title": "Tool Execution and Error Handling in LangGraph Agents",
   "summary": "Learn how ToolNode and tools_condition work together to execute tool calls in LangGraph agents, and discover the critical difference between handling read and write operations when tools fail. You'll understand why letting errors propagate crashes the graph, how handle_tool_errors allows the model to recover, and when validation matters more than retries.",
   "runs": "8:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "What happens after the model decides to call a tool?"
    },
    {
     "at": "0:46",
     "title": "ToolNode: one class, runs every call, returns one message each"
    },
    {
     "at": "2:15",
     "title": "tools_condition: the standard edge"
    },
    {
     "at": "3:01",
     "title": "The default: a tool that raises kills the graph"
    },
    {
     "at": "4:00",
     "title": "The choice: return the error as a tool message"
    },
    {
     "at": "5:19",
     "title": "But not every tool should get an automatic retry"
    },
    {
     "at": "6:33",
     "title": "The boundary: read freely, write with a guard"
    },
    {
     "at": "7:13",
     "title": "Recap"
    }
   ],
   "tags": [
    "langgraph",
    "agents",
    "tool execution",
    "error handling",
    "ToolNode",
    "tools_condition",
    "tool_calls",
    "read vs write",
    "validation"
   ],
   "src": "/media/learn/langgraph/langgraph-06.mp4",
   "poster": "/media/learn/langgraph/langgraph-06.jpg",
   "captions": "/media/learn/langgraph/langgraph-06.vtt"
  },
  {
   "n": 7,
   "title": "Persistence & Recovery: Making State Survive with Checkpointers",
   "summary": "Learn how to use LangGraph's checkpointer to save conversation state after every step, so that your agent can recover from crashes and handle multi-turn conversations without manually managing history. You'll see how to compile a graph with different checkpointers (MemorySaver for testing, PostgresSaver or SqliteSaver for production), use thread IDs to keep customer conversations separate, and manage checkpoint retention policies.",
   "runs": "9:09",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: What Happens When It Crashes?"
    },
    {
     "at": "0:55",
     "title": "The Checkpointer: State Saved After Every Step"
    },
    {
     "at": "2:05",
     "title": "Threads: One Customer, One Conversation"
    },
    {
     "at": "3:17",
     "title": "Kill It and Resume — Watch This"
    },
    {
     "at": "4:35",
     "title": "In-Memory Versus Durable: What's In the Table"
    },
    {
     "at": "6:03",
     "title": "The Real Payoff: No More History Juggling"
    },
    {
     "at": "7:15",
     "title": "The Mistake: Checkpoints Pile Up Forever"
    },
    {
     "at": "8:10",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangGraph",
    "checkpointer",
    "state persistence",
    "crash recovery",
    "thread_id",
    "multi-turn conversation",
    "PostgreSQL",
    "conversation history",
    "agent resilience"
   ],
   "src": "/media/learn/langgraph/langgraph-07.mp4",
   "poster": "/media/learn/langgraph/langgraph-07.jpg",
   "captions": "/media/learn/langgraph/langgraph-07.vtt"
  },
  {
   "n": 8,
   "title": "Memory Across Conversations: Building Persistent Customer Profiles",
   "summary": "This video shows how to build agent memory that survives across separate conversations with the same customer. You'll learn the difference between checkpointers (which remember a single conversation) and the Store (which persists data across threads using namespaced keys), and how to write meaningful data to the Store either explicitly during conversation flow or through background summarization. The video covers semantic search over stored memories and the judgment calls required to avoid common mistakes like storing too much noise or namespacing incorrectly.",
   "runs": "7:55",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Customer Who Comes Back"
    },
    {
     "at": "0:56",
     "title": "Quick Boundary: What the Checkpointer Already Does"
    },
    {
     "at": "1:37",
     "title": "The Store: Namespaced, Shared, Persistent"
    },
    {
     "at": "2:46",
     "title": "Using It Inside the Graph"
    },
    {
     "at": "3:43",
     "title": "Who Writes the Memory — Explicit Node vs Background Step"
    },
    {
     "at": "4:47",
     "title": "Making 'What Do We Know About This Customer' a Query"
    },
    {
     "at": "5:48",
     "title": "Where This Goes Wrong"
    },
    {
     "at": "7:00",
     "title": "Recap"
    }
   ],
   "tags": [
    "langgraph",
    "agent memory",
    "persistent storage",
    "customer profiles",
    "store",
    "namespacing",
    "semantic search",
    "embeddings",
    "state management",
    "multi-turn conversations"
   ],
   "src": "/media/learn/langgraph/langgraph-08.mp4",
   "poster": "/media/learn/langgraph/langgraph-08.jpg",
   "captions": "/media/learn/langgraph/langgraph-08.vtt"
  },
  {
   "n": 10,
   "title": "State History & Checkpoints: Debugging & Forking Conversations",
   "summary": "Learn how to use state history checkpoints to rewind conversations, replay them from any point, and fork alternate timelines by editing state. You'll be able to reproduce customer complaints exactly, test fixes against real failures, and let humans correct individual steps without losing your conversation history.",
   "runs": "8:18",
   "chapters": [
    {
     "at": "0:00",
     "title": "What if you could rewind the conversation?"
    },
    {
     "at": "1:06",
     "title": "Part one: get_state_history"
    },
    {
     "at": "2:30",
     "title": "Part two: replaying from a checkpoint"
    },
    {
     "at": "3:31",
     "title": "Part three: editing state and forking"
    },
    {
     "at": "5:08",
     "title": "Part four: what this is actually for"
    },
    {
     "at": "6:32",
     "title": "Mistakes people make"
    },
    {
     "at": "7:17",
     "title": "Recap"
    }
   ],
   "tags": [
    "state history",
    "checkpoints",
    "conversation debugging",
    "replay",
    "fork",
    "agentic workflows",
    "version control",
    "thread state"
   ],
   "src": "/media/learn/langgraph/langgraph-10.mp4",
   "poster": "/media/learn/langgraph/langgraph-10.jpg",
   "captions": "/media/learn/langgraph/langgraph-10.vtt"
  },
  {
   "n": 11,
   "title": "Concurrent Nodes in LangGraph: Static and Dynamic Fan-Out",
   "summary": "Learn how to run independent node checks in parallel using LangGraph instead of sequentially. This lesson covers static fan-out with fixed edges, dynamic fan-out using the Send API for variable workloads, and when to actually apply these patterns for real performance gains.",
   "runs": "9:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why is everything happening one after another?"
    },
    {
     "at": "1:02",
     "title": "Static fan-out: one node, three edges out"
    },
    {
     "at": "2:53",
     "title": "Running it and reading the timing"
    },
    {
     "at": "3:36",
     "title": "The case static fan-out can't handle"
    },
    {
     "at": "4:20",
     "title": "The Send API: dynamic fan-out"
    },
    {
     "at": "5:52",
     "title": "Running the five-part request"
    },
    {
     "at": "6:33",
     "title": "When one branch fails"
    },
    {
     "at": "7:50",
     "title": "Is it actually worth it? Measure, don't assume"
    },
    {
     "at": "8:41",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangGraph",
    "concurrency",
    "fan-out",
    "parallelism",
    "Send API",
    "graph design",
    "performance optimization",
    "state management",
    "routing"
   ],
   "src": "/media/learn/langgraph/langgraph-11.mp4",
   "poster": "/media/learn/langgraph/langgraph-11.jpg",
   "captions": "/media/learn/langgraph/langgraph-11.vtt"
  },
  {
   "n": 13,
   "title": "LangGraph in Production: Streaming, Retries, Caching, and Recursion Limits",
   "summary": "Learn five essential production patterns for running LangGraph applications at scale: streaming modes (values, updates, messages, custom) to control what watchers see; retry policies for flaky but safe operations; caching to avoid recomputing unchanged answers; recursion limits to prevent runaway loops; and config patterns to isolate per-run settings. After this video, you'll be able to configure your graph to survive real traffic, streaming the right information to the right places without colliding requests or climbing bills.",
   "runs": "12:33",
   "chapters": [
    {
     "at": "0:00",
     "title": "The graph works. Now what?"
    },
    {
     "at": "0:54",
     "title": "Four ways to watch the same run"
    },
    {
     "at": "2:05",
     "title": "Updates and messages"
    },
    {
     "at": "3:08",
     "title": "Custom: your own progress events"
    },
    {
     "at": "4:13",
     "title": "Retries: the stock API flakes, the model doesn't need to"
    },
    {
     "at": "5:48",
     "title": "Caching: stop paying twice for the same compatibility check"
    },
    {
     "at": "7:26",
     "title": "Recursion limits: what a runaway loop costs before it stops"
    },
    {
     "at": "8:53",
     "title": "Config, not globals"
    },
    {
     "at": "10:07",
     "title": "Where this goes wrong"
    },
    {
     "at": "11:05",
     "title": "Five knobs, one graph"
    }
   ],
   "tags": [
    "LangGraph",
    "production",
    "streaming",
    "retry policy",
    "caching",
    "recursion limits",
    "config",
    "agent deployment",
    "error handling"
   ],
   "src": "/media/learn/langgraph/langgraph-13.mp4",
   "poster": "/media/learn/langgraph/langgraph-13.jpg",
   "captions": "/media/learn/langgraph/langgraph-13.vtt"
  },
  {
   "n": 14,
   "title": "Deploying LangGraph: From Notebook to Production",
   "summary": "Learn what changes when a LangGraph agent moves from development to production: switching checkpointers from SQLite to Postgres, implementing authentication and streaming through your own API, and understanding the role of managed platforms. This lesson covers the Functional API as an alternative to StateGraph, common deployment mistakes, and when a graph is actually worth the complexity.",
   "runs": "8:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Last Mile"
    },
    {
     "at": "0:57",
     "title": "The Functional API: entrypoint and task"
    },
    {
     "at": "2:27",
     "title": "Where checkpoints actually live"
    },
    {
     "at": "3:28",
     "title": "Authentication and streaming through your own API"
    },
    {
     "at": "4:22",
     "title": "What a managed platform adds"
    },
    {
     "at": "5:56",
     "title": "Where teams get this wrong"
    },
    {
     "at": "6:49",
     "title": "Recap: what deploying actually means"
    },
    {
     "at": "7:28",
     "title": "Closing the course"
    }
   ],
   "tags": [
    "LangGraph",
    "production deployment",
    "Functional API",
    "checkpointing",
    "streaming",
    "authentication",
    "managed platforms",
    "agent architecture",
    "thread IDs",
    "persistence"
   ],
   "src": "/media/learn/langgraph/langgraph-14.mp4",
   "poster": "/media/learn/langgraph/langgraph-14.jpg",
   "captions": "/media/learn/langgraph/langgraph-14.vtt"
  }
 ];

export const LANGSMITH: Lesson[] = [
  {
   "n": 1,
   "title": "LangSmith Tracing: Debug Wrong Answers in LLM Agents",
   "summary": "Learn how LangSmith's trace trees reveal which nested step in your LLM agent went wrong, using a real example where a shop's assistant gave a customer the wrong part number without any logged error. Set up production-ready tracing in three environment variables with zero code changes to your LangChain or LangGraph application.",
   "runs": "9:25",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Wrong Brake Pad"
    },
    {
     "at": "1:01",
     "title": "Why a Flat Log Can't Explain This"
    },
    {
     "at": "2:14",
     "title": "The Trace: A Tree of Runs"
    },
    {
     "at": "3:37",
     "title": "Wiring It Up: Zero Code Changes"
    },
    {
     "at": "5:08",
     "title": "Finding It in Under a Minute"
    },
    {
     "at": "6:31",
     "title": "Where People Go Wrong"
    },
    {
     "at": "7:33",
     "title": "Projects: Keeping Dev Traffic Separate"
    },
    {
     "at": "8:17",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangSmith",
    "LLM debugging",
    "tracing",
    "LangChain",
    "LangGraph",
    "agents",
    "observability",
    "monitoring",
    "error detection",
    "API logging"
   ],
   "src": "/media/learn/langsmith/langsmith-01.mp4",
   "poster": "/media/learn/langsmith/langsmith-01.jpg",
   "captions": "/media/learn/langsmith/langsmith-01.vtt"
  },
  {
   "n": 2,
   "title": "Reading LangSmith Traces: The Tree Structure and What to Look For",
   "summary": "Learn how to navigate a LangSmith trace by understanding its tree structure: root runs, node runs, and child runs at different levels. You'll discover what information to extract at each level (inputs, outputs, latency, tokens, cost), how to spot bottlenecks and errors, and how to filter and tag runs for future debugging.",
   "runs": "7:46",
   "chapters": [
    {
     "at": "0:00",
     "title": "The trace is open. Now what?"
    },
    {
     "at": "0:38",
     "title": "Runs and spans: the tree"
    },
    {
     "at": "1:45",
     "title": "Every level has an input and an output"
    },
    {
     "at": "3:04",
     "title": "Latency, tokens, cost"
    },
    {
     "at": "4:14",
     "title": "When a run fails"
    },
    {
     "at": "5:06",
     "title": "Finding the run again: filter and tag"
    },
    {
     "at": "6:02",
     "title": "Where people go wrong reading traces"
    },
    {
     "at": "6:50",
     "title": "Recap"
    }
   ],
   "tags": [
    "LangSmith",
    "traces",
    "debugging",
    "LangGraph",
    "observability",
    "latency",
    "model runs",
    "error handling",
    "filtering",
    "performance"
   ],
   "src": "/media/learn/langsmith/langsmith-02.mp4",
   "poster": "/media/learn/langsmith/langsmith-02.jpg",
   "captions": "/media/learn/langsmith/langsmith-02.vtt"
  },
  {
   "n": 3,
   "title": "Building a Real-World Test Dataset for LLM Applications",
   "summary": "Learn how to build an effective test dataset for evaluating LLM applications by collecting real traces instead of inventing examples at your desk. This video teaches you how to select good, bad, and awkward runs, create examples with inputs and reference outputs, split your dataset for development vs. evaluation, and version your changes so historical scores remain meaningful. You'll also discover how to grow your dataset over time by turning customer complaints into test coverage.",
   "runs": "8:23",
   "chapters": [
    {
     "at": "0:00",
     "title": "The desk-invented test set"
    },
    {
     "at": "1:11",
     "title": "Selecting runs: good, bad, and awkward"
    },
    {
     "at": "2:34",
     "title": "Adding an example: inputs and reference outputs"
    },
    {
     "at": "4:05",
     "title": "Splits: what you tune on vs what you judge on"
    },
    {
     "at": "5:13",
     "title": "Versioning: so a change doesn't silently break yesterday's numbers"
    },
    {
     "at": "6:10",
     "title": "Growing the dataset: complaints become coverage"
    },
    {
     "at": "6:52",
     "title": "Common mistakes"
    },
    {
     "at": "7:32",
     "title": "Recap"
    }
   ],
   "tags": [
    "LLM testing",
    "test dataset",
    "LangSmith",
    "AI evaluation",
    "dataset versioning",
    "examples",
    "reference outputs",
    "regression testing",
    "prompt optimization"
   ],
   "src": "/media/learn/langsmith/langsmith-03.mp4",
   "poster": "/media/learn/langsmith/langsmith-03.jpg",
   "captions": "/media/learn/langsmith/langsmith-03.vtt"
  },
  {
   "n": 4,
   "title": "Building Evaluators: How to Grade LLM Outputs",
   "summary": "Learn to build and deploy evaluators that grade your AI agent's outputs—from simple heuristic rules for exact matches to model-as-judge systems for open-ended text. You'll discover the four predictable biases judges introduce, how to calibrate them against human labels, and why pairwise comparisons outperform single scores.",
   "runs": "10:31",
   "chapters": [
    {
     "at": "0:00",
     "title": "The number you can't trust yet"
    },
    {
     "at": "0:51",
     "title": "Heuristic evaluators: cheap and deterministic"
    },
    {
     "at": "2:14",
     "title": "Wiring it into an experiment"
    },
    {
     "at": "3:03",
     "title": "When there's no rule: model-as-judge"
    },
    {
     "at": "4:22",
     "title": "Writing the judge"
    },
    {
     "at": "5:08",
     "title": "The judge's biases, stated plainly"
    },
    {
     "at": "6:30",
     "title": "Calibrating the judge against humans"
    },
    {
     "at": "7:21",
     "title": "Pairwise beats scoring"
    },
    {
     "at": "8:09",
     "title": "Score retrieval and the answer separately"
    },
    {
     "at": "9:03",
     "title": "Where people get this wrong"
    },
    {
     "at": "9:29",
     "title": "Recap"
    }
   ],
   "tags": [
    "LLM evaluation",
    "evaluators",
    "heuristic scoring",
    "model-as-judge",
    "bias in evaluation",
    "LangSmith",
    "retrieval grading",
    "prompt testing",
    "AI quality assurance",
    "pairwise comparison"
   ],
   "src": "/media/learn/langsmith/langsmith-04.mp4",
   "poster": "/media/learn/langsmith/langsmith-04.jpg",
   "captions": "/media/learn/langsmith/langsmith-04.vtt"
  },
  {
   "n": 5,
   "title": "Reading Evaluation Results Without Fooling Yourself",
   "summary": "Learn how to run a real evaluation on an LLM assistant using LangSmith's evaluate() function and—more importantly—how to read the results honestly. You'll discover why a single aggregate score hides failures, how to spot problems by slicing results by category, and how to trace individual failures back to root causes in your system's logic.",
   "runs": "10:04",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: Does It Actually Work?"
    },
    {
     "at": "0:51",
     "title": "The Thing Under Test Is Just a Function"
    },
    {
     "at": "1:57",
     "title": "Calling evaluate()"
    },
    {
     "at": "3:11",
     "title": "The Aggregate Tells You Little"
    },
    {
     "at": "4:06",
     "title": "The Distribution Tells You More"
    },
    {
     "at": "4:56",
     "title": "The Individual Failures Tell You What To Fix"
    },
    {
     "at": "5:53",
     "title": "Comparing Two Prompts"
    },
    {
     "at": "6:47",
     "title": "How Many Examples Before It Means Anything"
    },
    {
     "at": "7:57",
     "title": "Evaluating the Graph, Not Just the Answer"
    },
    {
     "at": "9:05",
     "title": "Closing the Loop"
    }
   ],
   "tags": [
    "evaluation",
    "LangSmith",
    "LLM testing",
    "metrics",
    "debugging",
    "prompt engineering",
    "results analysis",
    "intermediate state",
    "experimental comparison"
   ],
   "src": "/media/learn/langsmith/langsmith-05.mp4",
   "poster": "/media/learn/langsmith/langsmith-05.jpg",
   "captions": "/media/learn/langsmith/langsmith-05.vtt"
  },
  {
   "n": 6,
   "title": "Automated evaluation gates: catching prompt regressions in CI",
   "summary": "Learn how to automatically catch when prompt or tool changes break your application by running evaluations in CI/CD pipelines. This video covers three approaches to setting quality thresholds—absolute numbers, relative comparisons to the last good version, and per-category floors—and shows how to balance thoroughness with speed using hot and nightly test sets.",
   "runs": "8:35",
   "chapters": [
    {
     "at": "0:00",
     "title": "The fortnight nobody noticed"
    },
    {
     "at": "0:51",
     "title": "What triggers a run"
    },
    {
     "at": "1:50",
     "title": "The gate, attempt one: an absolute number"
    },
    {
     "at": "2:37",
     "title": "The gate, attempt two: compare to the last good run"
    },
    {
     "at": "3:33",
     "title": "The gate, attempt three: a floor per category"
    },
    {
     "at": "4:36",
     "title": "Keeping it fast: hot set now, full set tonight"
    },
    {
     "at": "5:36",
     "title": "The part teams skip: who looks, and what they do"
    },
    {
     "at": "6:40",
     "title": "Where this goes wrong"
    },
    {
     "at": "7:35",
     "title": "Recap"
    }
   ],
   "tags": [
    "evaluation",
    "CI/CD",
    "quality gates",
    "regression testing",
    "LLM testing",
    "prompt engineering",
    "automated testing",
    "LangSmith",
    "thresholds"
   ],
   "src": "/media/learn/langsmith/langsmith-06.mp4",
   "poster": "/media/learn/langsmith/langsmith-06.jpg",
   "captions": "/media/learn/langsmith/langsmith-06.vtt"
  },
  {
   "n": 7,
   "title": "Closing the loop: human feedback and evaluator calibration",
   "summary": "Learn how to attach human feedback to LLM runs, route uncertain cases to reviewers through annotation queues, and turn human labels into dataset examples. You'll also see how to calibrate your automated judge against human opinions to catch when it starts drifting off track.",
   "runs": "7:36",
   "chapters": [
    {
     "at": "0:00",
     "title": "The problem with scores nobody checked"
    },
    {
     "at": "0:56",
     "title": "Attaching a human score to a run"
    },
    {
     "at": "2:23",
     "title": "Annotation queues: routing runs to a person"
    },
    {
     "at": "3:44",
     "title": "Turning a human label into a dataset example"
    },
    {
     "at": "4:43",
     "title": "Calibrating the judge against human labels"
    },
    {
     "at": "5:39",
     "title": "Small and regular beats heroic and rare"
    },
    {
     "at": "6:29",
     "title": "Recap: the loop closes"
    }
   ],
   "tags": [
    "LangSmith",
    "human feedback",
    "annotation queues",
    "evaluator calibration",
    "dataset creation",
    "LLM evaluation",
    "quality assurance",
    "feedback loops"
   ],
   "src": "/media/learn/langsmith/langsmith-07.mp4",
   "poster": "/media/learn/langsmith/langsmith-07.jpg",
   "captions": "/media/learn/langsmith/langsmith-07.vtt"
  }
 ];

export const MCP: Lesson[] = [
  {
   "n": 1,
   "title": "Nine Integrations and Counting: Why MCP",
   "summary": "Learn why the Model Context Protocol solves the exponential integration problem: when multiple applications need to talk to the same backend systems, custom wrapper code for each pair explodes from N×M integrations to just N+M. You'll understand what MCP is, what it isn't, and when the overhead of running it actually pays off.",
   "runs": "10:10",
   "chapters": [
    {
     "at": "0:00",
     "title": "Nine Integrations and Counting"
    },
    {
     "at": "0:55",
     "title": "Drawing the Grid: N Times M"
    },
    {
     "at": "2:30",
     "title": "What Twelve Integrations Actually Cost"
    },
    {
     "at": "3:41",
     "title": "The Protocol's Proposition: N Plus M"
    },
    {
     "at": "5:27",
     "title": "What MCP Is Not"
    },
    {
     "at": "6:59",
     "title": "The Honest Cost"
    },
    {
     "at": "8:22",
     "title": "The Moment It's Worth It"
    },
    {
     "at": "9:12",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP",
    "Model Context Protocol",
    "system integration",
    "protocol design",
    "backend architecture",
    "tool calling",
    "agent frameworks",
    "API design",
    "software scaling"
   ],
   "src": "/media/learn/mcp/mcp-01.mp4",
   "poster": "/media/learn/mcp/mcp-01.jpg",
   "captions": "/media/learn/mcp/mcp-01.vtt"
  },
  {
   "n": 2,
   "title": "MCP Fundamentals: Host, Client, and Server Explained",
   "summary": "Learn the three core roles in the Model Context Protocol: the host (your application), clients (one per server), and servers (data/system exposers). This video untangles the often-confused terminology and shows how they communicate via JSON-RPC 2.0, including the bidirectional requests, responses, and notifications that make MCP work without custom glue code.",
   "runs": "12:06",
   "chapters": [
    {
     "at": "0:00",
     "title": "The word 'server' is doing too much work"
    },
    {
     "at": "0:48",
     "title": "The host: the app the user actually touches"
    },
    {
     "at": "2:00",
     "title": "Two servers for the shop, drawn"
    },
    {
     "at": "3:16",
     "title": "JSON-RPC 2.0: the actual wire format"
    },
    {
     "at": "4:22",
     "title": "A real request, on the wire"
    },
    {
     "at": "5:27",
     "title": "The response comes back with the same id"
    },
    {
     "at": "6:08",
     "title": "Notifications: no id, no answer expected"
    },
    {
     "at": "7:14",
     "title": "The direction everyone misses: servers can ask the client"
    },
    {
     "at": "8:40",
     "title": "Three things servers offer, three things clients offer"
    },
    {
     "at": "9:46",
     "title": "Common mix-ups"
    },
    {
     "at": "10:39",
     "title": "Recap: say it back"
    }
   ],
   "tags": [
    "MCP",
    "Model Context Protocol",
    "host client server",
    "JSON-RPC",
    "tool integration",
    "LangChain",
    "architecture",
    "API design",
    "protocol basics",
    "bidirectional communication"
   ],
   "src": "/media/learn/mcp/mcp-02.mp4",
   "poster": "/media/learn/mcp/mcp-02.jpg",
   "captions": "/media/learn/mcp/mcp-02.vtt"
  },
  {
   "n": 3,
   "title": "How MCP Messages Travel: Stdio vs Streamable HTTP",
   "summary": "Learn how the Model Context Protocol actually transports messages between hosts and servers using two real-world transports: stdio (operating system pipes for local tools) and streamable HTTP (for remote servers). You'll understand when to use each one, see working examples of both, and learn why stdio is often the right default choice despite HTTP feeling more \"production.\"",
   "runs": "10:43",
   "chapters": [
    {
     "at": "0:00",
     "title": "How do the words actually get there?"
    },
    {
     "at": "1:11",
     "title": "The manuals server, over stdio"
    },
    {
     "at": "2:41",
     "title": "Running it and watching the bytes"
    },
    {
     "at": "3:45",
     "title": "Same server, remote: streamable HTTP"
    },
    {
     "at": "5:26",
     "title": "Calling the remote manuals server"
    },
    {
     "at": "6:14",
     "title": "Choosing, and the default people get wrong"
    },
    {
     "at": "7:15",
     "title": "Lifetime, concurrency, and dropped connections"
    },
    {
     "at": "8:43",
     "title": "Testing a server before any agent touches it"
    },
    {
     "at": "9:34",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP",
    "Model Context Protocol",
    "stdio",
    "HTTP",
    "messaging",
    "transport",
    "client-server",
    "JSON-RPC",
    "subprocess",
    "architecture"
   ],
   "src": "/media/learn/mcp/mcp-03.mp4",
   "poster": "/media/learn/mcp/mcp-03.jpg",
   "captions": "/media/learn/mcp/mcp-03.vtt"
  },
  {
   "n": 4,
   "title": "MCP Handshake: Protocol Negotiation and Initialization",
   "summary": "Learn the three-message handshake that starts every MCP connection: how clients and servers exchange protocol versions and capabilities before any real work begins. You'll understand why capabilities matter more than version numbers, how to handle version mismatches, and why proper shutdown is essential for subprocess-based servers.",
   "runs": "8:31",
   "chapters": [
    {
     "at": "0:00",
     "title": "Why the first two messages matter"
    },
    {
     "at": "0:52",
     "title": "Message one: the initialize request"
    },
    {
     "at": "1:46",
     "title": "Message two: the server answers"
    },
    {
     "at": "2:34",
     "title": "Message three: initialized, and why it's a notification"
    },
    {
     "at": "3:21",
     "title": "Capability negotiation as the heart of it"
    },
    {
     "at": "4:45",
     "title": "When the version doesn't match"
    },
    {
     "at": "5:41",
     "title": "Lifecycle beyond start-up: shutdown"
    },
    {
     "at": "6:38",
     "title": "When a host says 'this server has no tools'"
    },
    {
     "at": "7:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP",
    "protocol handshake",
    "initialization",
    "capabilities negotiation",
    "protocol version",
    "client-server communication",
    "JSON-RPC",
    "connection lifecycle",
    "subprocess management"
   ],
   "src": "/media/learn/mcp/mcp-04.mp4",
   "poster": "/media/learn/mcp/mcp-04.jpg",
   "captions": "/media/learn/mcp/mcp-04.vtt"
  },
  {
   "n": 5,
   "title": "Tools in the Model Context Protocol: Structure and Usage",
   "summary": "Learn how MCP tools work—from the tool list the client receives after a handshake, through calling tools with arguments and interpreting their responses, to handling errors and managing tool availability at runtime. This video teaches the core building block of MCP: how tools are defined with names, descriptions, and JSON schemas, how they return content blocks and structured data, and how annotations guide whether they're safe to call automatically.",
   "runs": "11:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: What Does a Tool Actually Look Like?"
    },
    {
     "at": "0:58",
     "title": "tools/list: What the Model Actually Sees"
    },
    {
     "at": "2:19",
     "title": "Descriptions Are Prompt Engineering Wearing a Type Signature"
    },
    {
     "at": "3:59",
     "title": "Calling a Tool: Arguments In, Content Blocks Out"
    },
    {
     "at": "5:05",
     "title": "Structured Content Alongside the Text"
    },
    {
     "at": "6:01",
     "title": "Protocol Errors vs. a Tool That Ran and Failed"
    },
    {
     "at": "7:38",
     "title": "Annotations: Does This Tool Read or Write?"
    },
    {
     "at": "8:32",
     "title": "Tools That Appear at Run Time"
    },
    {
     "at": "9:18",
     "title": "Few Well-Named Tools Beat Many Overlapping Ones"
    },
    {
     "at": "10:22",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP",
    "model context protocol",
    "tools",
    "function calling",
    "schema",
    "content blocks",
    "tool annotations",
    "client-server",
    "LLM integration"
   ],
   "src": "/media/learn/mcp/mcp-05.mp4",
   "poster": "/media/learn/mcp/mcp-05.jpg",
   "captions": "/media/learn/mcp/mcp-05.vtt"
  },
  {
   "n": 6,
   "title": "Resources vs Tools: When to Hand Data to Your Model",
   "summary": "Learn the critical difference between tools (verbs the model decides to call) and resources (nouns your application reads and provides). This video teaches when to use resources instead of wrapping everything as tools, how to identify resources with URIs and templates, and why this distinction matters for building efficient AI assistants that fetch documents without wasting decision-making steps.",
   "runs": "10:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "1:10",
     "title": "Why Bother — the Manual Problem"
    },
    {
     "at": "2:21",
     "title": "URIs — Naming a Resource"
    },
    {
     "at": "3:35",
     "title": "Resource Templates — One Page Per Bike Year"
    },
    {
     "at": "4:57",
     "title": "Who Decides — Application, Not Model"
    },
    {
     "at": "6:29",
     "title": "Subscriptions — When a Manual Changes"
    },
    {
     "at": "7:46",
     "title": "Mistakes People Make"
    },
    {
     "at": "9:02",
     "title": "Recap"
    }
   ],
   "tags": [
    "resources",
    "tools",
    "API design",
    "LLM applications",
    "URIs",
    "resource templates",
    "AI assistants",
    "tool calling",
    "context management",
    "system design"
   ],
   "src": "/media/learn/mcp/mcp-06.mp4",
   "poster": "/media/learn/mcp/mcp-06.jpg",
   "captions": "/media/learn/mcp/mcp-06.vtt"
  },
  {
   "n": 7,
   "title": "Prompts: The Third MCP Primitive",
   "summary": "Learn what prompts are—reusable, parameterized message templates that servers provide to shape conversations—and how they differ from tools and resources. Discover how to list prompts, retrieve them with arguments, use completions for autocomplete suggestions, and surface them as slash commands in your application.",
   "runs": "8:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "The interview nobody wrote down"
    },
    {
     "at": "1:04",
     "title": "What a prompt actually is"
    },
    {
     "at": "2:30",
     "title": "Listing prompts and their arguments"
    },
    {
     "at": "3:37",
     "title": "Getting a prompt filled in"
    },
    {
     "at": "4:35",
     "title": "Completions: autocomplete for arguments"
    },
    {
     "at": "5:34",
     "title": "Where prompts show up: slash commands"
    },
    {
     "at": "6:39",
     "title": "Where people get this wrong"
    },
    {
     "at": "7:43",
     "title": "Recap: the full picture"
    }
   ],
   "tags": [
    "MCP",
    "prompts",
    "model context protocol",
    "slash commands",
    "completions",
    "server primitives",
    "conversational templates",
    "arguments"
   ],
   "src": "/media/learn/mcp/mcp-07.mp4",
   "poster": "/media/learn/mcp/mcp-07.jpg",
   "captions": "/media/learn/mcp/mcp-07.vtt"
  },
  {
   "n": 8,
   "title": "Building an MCP Server from Scratch: The Bike Shop Stock System",
   "summary": "Learn how to build a complete MCP server in a single file using FastMCP, combining tools, resources, and prompts to create a working bike shop stock system. You'll write input validation, define structured error returns, test with the MCP Inspector before connecting to a real host, and understand how configuration and logging work in production. After this video, you'll be able to scaffold, test, and deploy a fully functional MCP server end to end.",
   "runs": "9:19",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:46",
     "title": "Scaffolding With an SDK"
    },
    {
     "at": "1:41",
     "title": "The Availability Tool"
    },
    {
     "at": "3:01",
     "title": "Errors the Model Can Act On"
    },
    {
     "at": "3:46",
     "title": "The Price List Resource"
    },
    {
     "at": "4:37",
     "title": "The Compatibility Interview Prompt"
    },
    {
     "at": "5:18",
     "title": "Testing Without a Host"
    },
    {
     "at": "6:10",
     "title": "Packaging, Config, and the Logging Bug"
    },
    {
     "at": "7:28",
     "title": "Connecting a Real Host"
    },
    {
     "at": "8:27",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP server",
    "FastMCP",
    "Python",
    "tools",
    "resources",
    "prompts",
    "validation",
    "MCP Inspector",
    "configuration",
    "stdio transport"
   ],
   "src": "/media/learn/mcp/mcp-08.mp4",
   "poster": "/media/learn/mcp/mcp-08.jpg",
   "captions": "/media/learn/mcp/mcp-08.vtt"
  },
  {
   "n": 9,
   "title": "Building an MCP Client: Connecting Agents to Servers",
   "summary": "Learn how to build the client side of an MCP connection—the code that discovers tools from servers and wires them into a LangGraph agent. You'll understand the difference between the client (which handles protocol and discovery) and the host (which makes judgment calls about which tools to call and when), and see how a tiny shim function translates between MCP and LangGraph.",
   "runs": "9:21",
   "chapters": [
    {
     "at": "0:00",
     "title": "Who's driving the car?"
    },
    {
     "at": "1:05",
     "title": "The client: connect, handshake, discover"
    },
    {
     "at": "2:44",
     "title": "Turning discovered tools into LangGraph tools"
    },
    {
     "at": "4:11",
     "title": "The host: the part that decides"
    },
    {
     "at": "5:41",
     "title": "Roots: telling a server where it's allowed to work"
    },
    {
     "at": "6:33",
     "title": "The mistakes people make"
    },
    {
     "at": "7:35",
     "title": "One host, many servers, one name collision"
    },
    {
     "at": "8:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "MCP",
    "LangGraph",
    "agent",
    "client-server",
    "protocol",
    "tool discovery",
    "tool calling",
    "host decisions",
    "tool integration"
   ],
   "src": "/media/learn/mcp/mcp-09.mp4",
   "poster": "/media/learn/mcp/mcp-09.jpg",
   "captions": "/media/learn/mcp/mcp-09.vtt"
  },
  {
   "n": 10,
   "title": "Sampling & Elicitation: When the Server Needs Help",
   "summary": "Learn how MCP servers can request model calls and user input through the client instead of handling them directly. Understand the sampling and elicitation patterns, why clients should show approval prompts, and how to build fallbacks when capabilities aren't available.",
   "runs": "9:39",
   "chapters": [
    {
     "at": "0:00",
     "title": "Who's Actually Running the Model?"
    },
    {
     "at": "1:07",
     "title": "Sampling: The Server Has No Model"
    },
    {
     "at": "2:26",
     "title": "The createMessage Request, On Screen"
    },
    {
     "at": "3:43",
     "title": "The Client Should Show You First"
    },
    {
     "at": "4:34",
     "title": "Elicitation: The Server Asks the User"
    },
    {
     "at": "5:37",
     "title": "The Schema, On Screen"
    },
    {
     "at": "6:40",
     "title": "Both Are Optional — What Then?"
    },
    {
     "at": "7:39",
     "title": "Where People Get This Wrong"
    },
    {
     "at": "8:38",
     "title": "Recap: Two Servers, Two Requests"
    }
   ],
   "tags": [
    "MCP",
    "sampling",
    "elicitation",
    "client-server",
    "model preferences",
    "user permissions",
    "protocol design"
   ],
   "src": "/media/learn/mcp/mcp-10.mp4",
   "poster": "/media/learn/mcp/mcp-10.jpg",
   "captions": "/media/learn/mcp/mcp-10.vtt"
  },
  {
   "n": 11,
   "title": "Production-Ready Servers: Moving Beyond the Demo",
   "summary": "Learn the six critical practices that transform a working prototype into a server that can handle real-world demands: progress notifications, cancellation handling, pagination, ping heartbeats, protocol logging, and timeouts. This video walks through each requirement using a practical bike shop scenario, showing you the silent failures that only appear once you leave your own machine.",
   "runs": "9:12",
   "chapters": [
    {
     "at": "0:00",
     "title": "The demo that dies in production"
    },
    {
     "at": "0:43",
     "title": "Progress notifications"
    },
    {
     "at": "2:05",
     "title": "Cancellation"
    },
    {
     "at": "3:14",
     "title": "Pagination with cursors"
    },
    {
     "at": "4:21",
     "title": "Ping and dead peers"
    },
    {
     "at": "5:13",
     "title": "Protocol logging, not print"
    },
    {
     "at": "6:14",
     "title": "Timeouts on both sides"
    },
    {
     "at": "7:31",
     "title": "Where this goes wrong"
    },
    {
     "at": "8:14",
     "title": "The pre-launch checklist"
    }
   ],
   "tags": [
    "MCP",
    "production",
    "server design",
    "progress notifications",
    "cancellation",
    "pagination",
    "ping",
    "protocol logging",
    "timeouts",
    "best practices"
   ],
   "src": "/media/learn/mcp/mcp-11.mp4",
   "poster": "/media/learn/mcp/mcp-11.jpg",
   "captions": "/media/learn/mcp/mcp-11.vtt"
  },
  {
   "n": 12,
   "title": "Prompt Injection Through Tool Results: Detection and Defense",
   "summary": "This lesson explains how untrusted data from external tools—like supplier product descriptions—can be weaponized to inject malicious instructions into an AI model's context window. You'll learn three practical defenses: tagging untrusted supplier text as data only, requiring human confirmation before writes execute, and applying OAuth scoping and least privilege to isolate server permissions.",
   "runs": "10:44",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question Nobody Asks Until It's Too Late"
    },
    {
     "at": "0:59",
     "title": "Drawing the Line: Who Do You Trust?"
    },
    {
     "at": "2:02",
     "title": "The Attack: Injection Through a Tool Result"
    },
    {
     "at": "3:32",
     "title": "Defence One: Results Are Data, Not Instruction"
    },
    {
     "at": "4:37",
     "title": "Defence Two: No Read Silently Triggers a Write"
    },
    {
     "at": "5:37",
     "title": "Defence Three: Human Approval On Anything That Changes the World"
    },
    {
     "at": "6:30",
     "title": "Authorization for HTTP Servers: OAuth 2.1 and Scoped Tokens"
    },
    {
     "at": "7:33",
     "title": "Confused Deputy: When Several Servers Get Involved"
    },
    {
     "at": "8:31",
     "title": "Closing Hygiene: Least Privilege, Audit Logs, Pinning"
    },
    {
     "at": "9:38",
     "title": "Recap: The Rule to Remember"
    }
   ],
   "tags": [
    "prompt injection",
    "tool results",
    "security",
    "untrusted data",
    "authorization",
    "OAuth 2.1",
    "least privilege",
    "audit logging",
    "LLM safety",
    "agent security"
   ],
   "src": "/media/learn/mcp/mcp-12.mp4",
   "poster": "/media/learn/mcp/mcp-12.jpg",
   "captions": "/media/learn/mcp/mcp-12.vtt"
  }
 ];

export const SYSTEMONE: Lesson[] = [
  {
   "n": 1,
   "title": "Fast Decisions Without Chat: System One Models in Your Agent",
   "summary": "Learn why chat models are the wrong tool for the small, structured decisions your system makes constantly—like classifying customer messages or checking compatibility—and how System One models like Jev return typed decisions with calibrated confidence instead of prose. You'll understand the cost and latency problems chat models create at scale, and how to integrate a fast decision layer into your LangGraph agent without replacing it.",
   "runs": "7:13",
   "chapters": [
    {
     "at": "0:00",
     "title": "Forty decisions an hour"
    },
    {
     "at": "1:07",
     "title": "None of these want prose"
    },
    {
     "at": "1:52",
     "title": "What happens when you use a chat model anyway"
    },
    {
     "at": "2:39",
     "title": "Seconds and cents, forty times an hour"
    },
    {
     "at": "3:29",
     "title": "The confidence problem"
    },
    {
     "at": "4:16",
     "title": "A model built to decide, not to talk"
    },
    {
     "at": "5:50",
     "title": "Where people get this wrong"
    },
    {
     "at": "6:30",
     "title": "Recap"
    }
   ],
   "tags": [
    "system one models",
    "decision classification",
    "chat vs specialized models",
    "calibrated confidence",
    "LangGraph agents",
    "API latency",
    "structured decisions",
    "TypeSafe AI",
    "prompt engineering",
    "model selection"
   ],
   "src": "/media/learn/system-one/system-one-01.mp4",
   "poster": "/media/learn/system-one/system-one-01.jpg",
   "captions": "/media/learn/system-one/system-one-01.vtt"
  },
  {
   "n": 2,
   "title": "System One and Two as Architecture: Fast Decisions vs. Slow Agents",
   "summary": "Learn how to implement the psychology of fast and slow thinking as actual software layers: System One as quick typed calls with confidence scores, and System Two as full LangGraph agents. You'll see concrete code examples, the three primitives for building reliable fast decisions, and how to safely route ambiguous cases to human review or deeper analysis.",
   "runs": "8:22",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:48",
     "title": "Fast and Slow, in One Honest Paragraph"
    },
    {
     "at": "1:49",
     "title": "The Architecture: Who Handles What"
    },
    {
     "at": "3:19",
     "title": "Seeing It in Code"
    },
    {
     "at": "4:31",
     "title": "Why Not Just Use a Chat Model?"
    },
    {
     "at": "5:42",
     "title": "Three Primitives, Mixed Freely"
    },
    {
     "at": "6:28",
     "title": "Where People Get This Wrong"
    },
    {
     "at": "7:24",
     "title": "Recap and the Test"
    }
   ],
   "tags": [
    "system one system two",
    "software architecture",
    "LangGraph",
    "agent design",
    "confidence scoring",
    "decision routing",
    "fast inference",
    "Jev Choice primitive",
    "RLHF limitations",
    "triage pattern"
   ],
   "src": "/media/learn/system-one/system-one-02.mp4",
   "poster": "/media/learn/system-one/system-one-02.jpg",
   "captions": "/media/learn/system-one/system-one-02.vtt"
  },
  {
   "n": 3,
   "title": "Decomposing Complex LLM Judgments into Atomic Questions",
   "summary": "Learn why asking an LLM one complex question produces unreliable confidence scores, and how to break it into smaller atomic questions instead. You'll discover how to recombine those answers in plain code, making your business logic testable, diagnosable, and readable.",
   "runs": "7:26",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody can act on"
    },
    {
     "at": "0:56",
     "title": "The one-shot version, on screen"
    },
    {
     "at": "1:50",
     "title": "What decomposition actually means"
    },
    {
     "at": "2:50",
     "title": "The five atomic calls"
    },
    {
     "at": "4:01",
     "title": "Where the business rule actually lives"
    },
    {
     "at": "4:56",
     "title": "Side by side"
    },
    {
     "at": "5:34",
     "title": "Where people get this wrong"
    },
    {
     "at": "6:33",
     "title": "Recap"
    }
   ],
   "tags": [
    "decomposition",
    "LLM",
    "confidence scores",
    "atomic questions",
    "prompt engineering",
    "business logic",
    "judgment calls",
    "reliability"
   ],
   "src": "/media/learn/system-one/system-one-03.mp4",
   "poster": "/media/learn/system-one/system-one-03.jpg",
   "captions": "/media/learn/system-one/system-one-03.vtt"
  },
  {
   "n": 4,
   "title": "Choice: Routing Messages to the Right Handler",
   "summary": "Learn how to build a Choice primitive that routes incoming messages to the correct handler by selecting from a fixed list of options. You'll discover how to design mutually exclusive, collectively exhaustive categories that cover all cases—including when nothing fits—and how to use confidence scores to detect when your categories need redesign.",
   "runs": "9:07",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Routing Problem"
    },
    {
     "at": "1:02",
     "title": "A First Pass at Choice"
    },
    {
     "at": "2:19",
     "title": "Mutually Exclusive, Collectively Exhaustive"
    },
    {
     "at": "3:50",
     "title": "Naming So Meaning Is Obvious"
    },
    {
     "at": "4:42",
     "title": "The Value of 'None of These'"
    },
    {
     "at": "5:57",
     "title": "When a List Gets Too Long"
    },
    {
     "at": "7:12",
     "title": "Where Choice Shows Up"
    },
    {
     "at": "8:12",
     "title": "Recap"
    }
   ],
   "tags": [
    "Choice",
    "routing",
    "message classification",
    "LangGraph",
    "mutually exclusive",
    "collectively exhaustive",
    "confidence scores",
    "workflow branching",
    "categorization",
    "LLM primitives"
   ],
   "src": "/media/learn/system-one/system-one-04.mp4",
   "poster": "/media/learn/system-one/system-one-04.jpg",
   "captions": "/media/learn/system-one/system-one-04.vtt"
  },
  {
   "n": 5,
   "title": "Score: Rating Things Against Criteria",
   "summary": "Learn how to use Score to rate individual items against your own criteria, not just pick between options. This video teaches you how to write criteria that actually produce consistent results, avoid common mistakes like averaging unlike scores, and use Score's real strength: reliably ordering items against each other rather than obtaining absolute truth values.",
   "runs": "7:21",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question"
    },
    {
     "at": "0:57",
     "title": "Three ratings the shop needs"
    },
    {
     "at": "1:44",
     "title": "The criterion that produces noise"
    },
    {
     "at": "2:42",
     "title": "The criterion that names the ends"
    },
    {
     "at": "3:44",
     "title": "Fewer points, more agreement"
    },
    {
     "at": "4:33",
     "title": "Where score is strongest: ordering, not truth"
    },
    {
     "at": "5:29",
     "title": "The mistake: averaging unlike scores"
    },
    {
     "at": "6:28",
     "title": "Recap"
    }
   ],
   "tags": [
    "Score",
    "rating criteria",
    "LLM prompting",
    "confidence scores",
    "ranking",
    "decision-making",
    "prompt design",
    "AI evaluation"
   ],
   "src": "/media/learn/system-one/system-one-05.mp4",
   "poster": "/media/learn/system-one/system-one-05.jpg",
   "captions": "/media/learn/system-one/system-one-05.vtt"
  },
  {
   "n": 6,
   "title": "Noul: Verify Claims Against Context",
   "summary": "Learn Noul, the third primitive function that checks whether a specific claim is supported by provided context. This lesson covers how to write falsifiable claims, common mistakes in using Noul, and how to use it as a guardrail before your agent's answer reaches users—verifying risky facts against the exact passages they came from.",
   "runs": "7:48",
   "chapters": [
    {
     "at": "0:00",
     "title": "The question nobody asks until it's too late"
    },
    {
     "at": "0:59",
     "title": "A claim, some context, a verdict"
    },
    {
     "at": "2:05",
     "title": "Not a fact oracle, not a search engine"
    },
    {
     "at": "3:14",
     "title": "Writing a claim that can actually be checked"
    },
    {
     "at": "4:30",
     "title": "The highest-value use: grounding the answer before it goes out"
    },
    {
     "at": "6:07",
     "title": "Where people get this wrong"
    },
    {
     "at": "7:00",
     "title": "Recap"
    }
   ],
   "tags": [
    "Noul",
    "claim verification",
    "context checking",
    "LangGraph agents",
    "guardrail",
    "fact-checking",
    "retrieval-augmented generation",
    "falsifiable claims",
    "agent design"
   ],
   "src": "/media/learn/system-one/system-one-06.mp4",
   "poster": "/media/learn/system-one/system-one-06.jpg",
   "captions": "/media/learn/system-one/system-one-06.vtt"
  },
  {
   "n": 8,
   "title": "Calibration: Making Confidence Numbers Mean Something",
   "summary": "Learn what calibration actually means for AI model confidence scores and why a 92% confidence claim is meaningless without it. You'll see how to check whether your model's reported confidence matches reality, using simple data logging and plotting, so you can trust thresholds like \"auto-approve if 90% confident.\"",
   "runs": "9:00",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question"
    },
    {
     "at": "0:54",
     "title": "The Precise, Unglamorous Definition"
    },
    {
     "at": "1:56",
     "title": "Why Chat Confidence Usually Isn't"
    },
    {
     "at": "3:11",
     "title": "How You Check Calibration Yourself"
    },
    {
     "at": "4:33",
     "title": "The Plot for the Shop"
    },
    {
     "at": "5:24",
     "title": "What Miscalibration Actually Costs"
    },
    {
     "at": "6:43",
     "title": "The Mistakes People Make"
    },
    {
     "at": "7:52",
     "title": "Recap"
    }
   ],
   "tags": [
    "calibration",
    "confidence scores",
    "AI reliability",
    "model evaluation",
    "decision logging",
    "thresholds",
    "bias in AI",
    "decision quality"
   ],
   "src": "/media/learn/system-one/system-one-08.mp4",
   "poster": "/media/learn/system-one/system-one-08.jpg",
   "captions": "/media/learn/system-one/system-one-08.vtt"
  },
  {
   "n": 9,
   "title": "Using Confidence Scores: Setting Thresholds That Actually Work",
   "summary": "Learn how to turn a calibrated confidence score into real decision-making logic by splitting predictions into three bands: act automatically, take a safer middle path, or escalate to a human. You'll discover how to set thresholds based on the actual costs of errors versus human review, why one global threshold fails, and how to monitor whether your system is behaving correctly in production.",
   "runs": "10:08",
   "chapters": [
    {
     "at": "0:00",
     "title": "The Question: What Do You Do With a Number?"
    },
    {
     "at": "0:55",
     "title": "Why Two Bands Isn't Enough"
    },
    {
     "at": "2:15",
     "title": "Three Bands in Code"
    },
    {
     "at": "3:28",
     "title": "The Arithmetic Behind the Line"
    },
    {
     "at": "4:52",
     "title": "One Number Doesn't Fit Every Decision"
    },
    {
     "at": "5:57",
     "title": "Watching the Escalation Rate"
    },
    {
     "at": "7:12",
     "title": "The Path You Never Test — And Must"
    },
    {
     "at": "8:15",
     "title": "Thresholds Aren't Set Once"
    },
    {
     "at": "9:10",
     "title": "Recap: The Boundary in One Breath"
    }
   ],
   "tags": [
    "confidence scores",
    "thresholds",
    "decision boundaries",
    "model deployment",
    "escalation logic",
    "cost analysis",
    "production monitoring",
    "machine learning systems",
    "automated decision-making"
   ],
   "src": "/media/learn/system-one/system-one-09.mp4",
   "poster": "/media/learn/system-one/system-one-09.jpg",
   "captions": "/media/learn/system-one/system-one-09.vtt"
  },
  {
   "n": 10,
   "title": "Measuring System One: Latency, Cost, and Accuracy in Real Decisions",
   "summary": "Learn how to measure whether a typed System One approach actually outperforms an agent in real-world conditions—not vendor claims. You'll build the same decision two ways and measure latency, cost per thousand decisions, and accuracy against your own labelled set, including the impact of escalation thresholds.",
   "runs": "8:25",
   "chapters": [
    {
     "at": "0:00",
     "title": "Does This Actually Pay"
    },
    {
     "at": "0:52",
     "title": "The Same Decision, Two Ways"
    },
    {
     "at": "1:48",
     "title": "Measuring Latency"
    },
    {
     "at": "2:43",
     "title": "Cost Per Thousand Decisions"
    },
    {
     "at": "3:39",
     "title": "Accuracy Against the Labelled Set"
    },
    {
     "at": "4:31",
     "title": "The Effects That Usually Dominate"
    },
    {
     "at": "5:31",
     "title": "When This Is The Wrong Tool"
    },
    {
     "at": "6:40",
     "title": "The Final Architecture"
    },
    {
     "at": "7:27",
     "title": "Recap"
    }
   ],
   "tags": [
    "system one",
    "measurement",
    "latency",
    "cost analysis",
    "accuracy",
    "labelled set",
    "escalation",
    "agent comparison",
    "typed decisions",
    "LangSmith"
   ],
   "src": "/media/learn/system-one/system-one-10.mp4",
   "poster": "/media/learn/system-one/system-one-10.jpg",
   "captions": "/media/learn/system-one/system-one-10.vtt"
  }
 ];
