// Burton D. Morgan Venture Concept Competition (38th, Purdue) — the three concepts entered 2026-09-27.
// The five prose fields are the competition's own questions, each capped at 50 words, as submitted.
// Videos are the two-host pitch films rendered from ~/memoir-pitch, self-hosted under /media/pitch/ with an
// unguessable suffix (the page is admin-only; the media path itself is not authenticated).
export const MEDIA_SUFFIX = '38adb71d';

export type Concept = {
	key: 'memoir' | 'vitalglance' | 'nightair';
	name: string;
	subtitle: string;
	oneLiner: string;
	video: string; // basename under /media/pitch
	minutes: string;
	answers: { label: string; text: string }[];
};

export const CONCEPTS: Concept[] = [
	{
		key: 'memoir',
		name: 'Memoir',
		subtitle: 'Organizational Déjà Vu',
		oneLiner: 'An experience graph so a company stops re-solving problems it has already solved.',
		video: 'memoir-pitch',
		minutes: '6:03',
		answers: [
			{
				label: 'Market Context',
				text: "Companies generate years of decisions, fixes, and lessons scattered across Slack, email, tickets, CRM, and documents. Enterprise AI search tools (Glean, Microsoft Copilot) retrieve documents, but don't capture what was tried, why, and whether it actually worked. When experienced employees leave, that knowledge leaves with them."
			},
			{
				label: 'Problem / Opportunity',
				text: "Organizations keep re-solving problems they've already solved. Support teams re-diagnose issues fixed years ago, \"resolved\" tickets quietly return, and failed approaches get retried because nobody remembers they failed. Every repeat costs hours, escalations, and customer trust, and the lesson is lost again."
			},
			{
				label: 'User / Customer',
				text: 'Users: frontline support and IT engineers troubleshooting recurring issues, especially new hires lacking tribal knowledge. Customers: VPs of Customer Support or IT Operations at mid-size B2B software companies (200–2,000 employees), who own resolution-time and escalation metrics. Later: HR, sales, operations, and manufacturing maintenance teams.'
			},
			{
				label: 'Impact / Value Proposition',
				text: 'Faster, first-time-right resolutions: engineers instantly see how similar past problems were handled, what failed, and what actually worked. Expected outcomes: lower resolution time, fewer repeat tickets and escalations, faster new-hire ramp-up, and knowledge that stays when people leave. Every solved problem makes the company permanently smarter.'
			},
			{
				label: 'Imagined Solution',
				text: 'Memoir connects to existing tools (ticketing, Slack, docs) and builds a permission-aware "experience graph": problem → reasoning → action → outcome. It proactively flags "we\'ve seen this before," tracks whether fixes held, and retires lessons when conditions change. Versions: support copilot, Slack bot, department dashboards, memory layer for AI agents.'
			}
		]
	},
	{
		key: 'vitalglance',
		name: 'VitalGlance',
		subtitle: 'Vital signs without touching anyone',
		oneLiner: 'A camera and thermal unit that watches waiting emergency patients for early deterioration.',
		video: 'vitalglance-pitch',
		minutes: '5:52',
		answers: [
			{
				label: 'Market Context',
				text: 'Vital signs are still measured with contact devices, by a nurse, at intervals. In emergency waiting rooms, patients can wait hours between checks. Camera-based vital-sign research has matured and phone apps exist, but few tools continuously watch the people most at risk of silent deterioration.'
			},
			{
				label: 'Problem / Opportunity',
				text: "Patients can deteriorate unnoticed between vital-sign checks. A rising heart rate or fever goes unseen until it becomes an emergency. Staff can't watch everyone continuously, and wiring every waiting patient to monitors is impractical. The earliest warning signs are visible, but nobody is measuring them."
			},
			{
				label: 'User / Customer',
				text: 'Users: triage nurses in emergency departments and urgent-care clinics who must prioritize many waiting patients. Beneficiaries: the patients themselves. Customers: emergency-department directors and nursing leadership, accountable for patient safety and wait-time outcomes. Later: senior-living facilities, home care, and disaster triage teams.'
			},
			{
				label: 'Impact / Value Proposition',
				text: 'Earlier warnings without touching anyone: the system flags a waiting patient whose heart rate, breathing, or temperature is trending the wrong way, so nurses re-triage the right person sooner. No wires, no extra staff, continuous coverage, shrinking hours-long blind spots to minutes.'
			},
			{
				label: 'Imagined Solution',
				text: 'A ceiling-mounted unit pairing a standard camera with a thermal sensor. Software averages skin-color changes across the face to estimate heart rate (remote photoplethysmography), tracks chest motion for breathing, and reads skin temperature, alerting nurses to worrying trends. Versions: waiting-room unit, bedside monitor, phone app, drone-mounted disaster triage.'
			}
		]
	},
	{
		key: 'nightair',
		name: 'NightAir',
		subtitle: 'Better air, better nights',
		oneLiner: 'A bedside sensor that ties bedroom air to your sleep data, then fixes the air automatically.',
		video: 'nightair-pitch',
		minutes: '6:00',
		answers: [
			{
				label: 'Market Context',
				text: "Home air-quality monitors (Airthings, Awair, Aranet) and sleep wearables (Oura, Apple Watch) are both popular, but they don't talk to each other. Monitors show numbers without meaning; wearables score sleep without knowing why. Standard carbon monoxide alarms stay silent at low, chronic levels by design."
			},
			{
				label: 'Problem / Opportunity',
				text: 'We spend a third of our lives in bedrooms, often with doors closed. Overnight, exhaled carbon dioxide builds up, and heating systems can leak carbon monoxide, both linked to poorer sleep, headaches, and grogginess. People wake up tired without knowing their bedroom air is the cause.'
			},
			{
				label: 'User / Customer',
				text: 'Users and customers: adults who already track their sleep with a wearable and still wake up tired: health-conscious professionals and people with asthma or allergies. Second market: families in homes with gas or oil heating, and landlords responsible for tenant safety. Later: senior living and hotels.'
			},
			{
				label: 'Impact / Value Proposition',
				text: 'Better sleep you can see: NightAir shows exactly how your bedroom air affects your sleep, for example, deeper sleep on nights carbon dioxide stays low, then fixes it automatically by running a fan, purifier, or ventilation. Plus early warning of low-level carbon monoxide ordinary alarms ignore.'
			},
			{
				label: 'Imagined Solution',
				text: 'A bedside sensor measuring carbon dioxide, carbon monoxide, particulates, temperature, and humidity, paired with an app that imports sleep data from wearables and finds each person\'s patterns. It controls smart fans, purifiers, and thermostats to keep air healthy. Versions: software-only for existing monitors, landlord dashboard, senior-living edition.'
			}
		]
	}
];

/** Side-by-side comparison. Values are in CONCEPTS order: Memoir, VitalGlance, NightAir. */
export const COMPARISON: { label: string; values: [string, string, string] }[] = [
	{ label: 'One-line idea', values: ['Stop re-solving solved problems', 'Spot deterioration in the waiting room', 'Bedroom air that improves your sleep'] },
	{ label: 'Beachhead', values: ['Support and IT teams at mid-size B2B software companies', 'Emergency-department waiting rooms', 'Sleep-wearable owners who still wake up tired'] },
	{ label: 'Customer', values: ['VP of Support or IT Operations', 'ED directors and nursing leadership', 'Consumers, then landlords and senior living'] },
	{ label: 'Strongest asset', values: ['Clearest business case and best fit with our skills', 'Most dramatic pitch and a live demo', 'Cheapest and fastest to validate with real data'] },
	{ label: 'Hardest objection', values: ['Why not Glean or Copilot', 'FDA clearance, skin tone accuracy, camera privacy', 'Crowded market and weak defensibility'] },
	{ label: 'Regulatory load', values: ['Low: permissions and data governance', 'High: medical-device path plus biometric privacy', 'Medium: wellness claims, alarm certification for CO'] },
	{ label: 'Cost to prove', values: ['Low: public duplicate-issue datasets', 'Low to medium: public rPPG datasets, webcam versus pulse oximeter', 'Low: a  sensor and four weeks of your own nights'] },
	{ label: 'Hardware needed', values: ['None', 'Camera plus thermal sensor, or software on existing cameras', 'Sensor, or software-only on monitors people own'] },
	{ label: 'First validation step', values: ['20–30 interviews with support and IT leads', '15–20 interviews with ER nurses and triage leads', 'Log your own bedroom, then 15–20 volunteers'] },
	{ label: 'Verdict', values: ['The pick: team fit, defensible IP, clearest path to revenue', 'Best story, slowest and most regulated path', 'Easiest proof, thinnest moat'] }
];
