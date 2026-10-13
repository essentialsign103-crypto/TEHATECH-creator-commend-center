export const navigation = [
  { id: "overview", label: "Overview", icon: "LayoutDashboard" },
  { id: "positioning", label: "Channel positioning", icon: "Target" },
  { id: "pillars", label: "Content pillars", icon: "Layers3" },
  { id: "videos", label: "First four videos", icon: "Clapperboard" },
  { id: "workflow", label: "Creation workflow", icon: "Workflow" },
  { id: "script", label: "Script framework", icon: "FileText" },
  { id: "prompt", label: "AI script prompt", icon: "Sparkles" },
  { id: "setup", label: "Recording & editing", icon: "Monitor" },
  { id: "calendar", label: "Content calendar", icon: "CalendarDays" },
  { id: "analytics", label: "Growth & analytics", icon: "ChartNoAxesCombined" },
  { id: "commitment", label: "Creator commitment", icon: "ShieldCheck" },
] as const;

export const videos = [
  {
    title: "AI Maali? Akkamitti Hojjeta?",
    category: "AI & DIGITAL TOOLS",
    length: "6–8 min",
    purpose: "Introduce AI through a relatable problem and a real demonstration.",
    problem: "AI feels complicated, unfamiliar, or too good to be true.",
    outcome: "Understand what AI does, try a simple prompt, and know why results need checking.",
    thumbnail: "A clear AI interface beside “AI MAALI?” with one recognizable task.",
    demo: "Turn a short, fictional task list into a daily plan. Compare the output with the original constraints and correct one mistake.",
    outline: [
      "Open with an everyday time-consuming task.",
      "Explain AI as a system that finds patterns, not a person that knows everything.",
      "Enter a specific prompt and show the result live.",
      "Verify the response and explain privacy and factual limitations.",
      "Ask viewers which everyday task they would like to simplify.",
    ],
  },
  {
    title: "ChatGPT Qofa Mitii! AI Tools 3 Hojii Kee Salphisan",
    category: "AI & DIGITAL TOOLS",
    length: "6–8 min",
    purpose: "Demonstrate three useful tools that solve three distinct problems.",
    problem: "Viewers know one AI tool but do not know which tools fit different tasks.",
    outcome:
      "Choose a suitable tool for outlining, design, or transcription without assuming all tools do everything.",
    thumbnail: "Three tool icons, one clear before-and-after task, and “AI TOOLS 3”.",
    demo: "Compare ChatGPT for an outline, Canva AI features for a visual draft, and an available transcription tool for a short recording. Verify current access, terms, and features before recording.",
    outline: [
      "Introduce three specific viewer problems.",
      "Show each tool solving one reproducible task.",
      "Explain input, output, and the checks each result needs.",
      "Compare limitations, privacy considerations, and current access requirements.",
      "Ask which tool viewers want a complete tutorial on.",
    ],
  },
  {
    title: "Bilbila Kee Keessatti Setting Faayidaa Qaban 5",
    category: "DIGITAL SKILLS",
    length: "6–8 min",
    purpose: "Demonstrate five useful smartphone settings and their benefits.",
    problem: "Useful settings are hidden and unfamiliar; changing them can feel risky.",
    outcome: "Find and safely adjust useful settings, with a way to undo each change.",
    thumbnail: "A readable phone settings screen, five highlighted toggles, and “SETTINGS 5”.",
    demo: "On your own device, demonstrate notification controls, display readability, app permissions, battery settings, and backup settings. Note that names and availability differ by device.",
    outline: [
      "Start with a familiar phone frustration.",
      "Show the path to each setting, one at a time.",
      "Explain its benefit and trade-off before changing it.",
      "Show how to undo changes and protect personal information.",
      "Ask viewers for their phone model and next tutorial request.",
    ],
  },
  {
    title: "Video Editing Jalqabuuf Maal Barbaachisa?",
    category: "CREATOR SKILLS",
    length: "6–8 min",
    purpose: "Introduce a beginner-friendly editing setup and demonstrate one simple edit.",
    problem: "Beginners feel they need expensive equipment or complex software to start.",
    outcome: "Import a recording, trim a pause, add a readable caption, and review an export.",
    thumbnail: "A simple before-and-after timeline with “EDITING JALQABI”.",
    demo: "Use CapCut or another editor that works on your device. Import a sample clip, trim a pause, synchronize narration, add a caption, and export using appropriate settings.",
    outline: [
      "Show the finished simple edit first.",
      "Explain the minimum recording and editing setup.",
      "Demonstrate import, trim, narration, and captions.",
      "Review playback, readability, synchronization, and export quality.",
      "Invite viewers to share their first editing challenge.",
    ],
  },
];

export const workflow = [
  [
    "Choose one viewer problem",
    "Lightbulb",
    "Pick a specific everyday difficulty your audience recognizes. Avoid packing several lessons into one video.",
    "One viewer problem and one clear promise.",
  ],
  [
    "Research and verify",
    "Search",
    "Check reliable sources and current tool documentation. Try every feature yourself; record uncertainty honestly.",
    "Verified notes and source references.",
  ],
  [
    "Create a focused outline",
    "ListTree",
    "Arrange the problem, explanation, demonstration, limitations, and next step in a logical order.",
    "A short story-driven outline.",
  ],
  [
    "Write a natural Afaan Oromoo script",
    "FileText",
    "Write the way you speak. Keep familiar English technology terms and explain unfamiliar ones simply.",
    "A conversational voice-over draft.",
  ],
  [
    "Test the demonstration",
    "FlaskConical",
    "Run the exact steps with safe sample data. Check that the result is reproducible and the screen is readable.",
    "A reliable demonstration and backup plan.",
  ],
  [
    "Record the voice-over",
    "Mic",
    "Find a quiet space, test the microphone, and record in manageable sections with clear pacing.",
    "Clean narration clips.",
  ],
  [
    "Record the screen",
    "Monitor",
    "Hide personal information and notifications. Capture deliberate actions with enough time for viewers to follow.",
    "Readable screen recordings.",
  ],
  [
    "Edit the video",
    "Film",
    "Remove dead time, synchronize narration and actions, add captions, and emphasize small controls.",
    "A reviewed educational video export.",
  ],
  [
    "Create thumbnail and metadata",
    "Image",
    "Make an accurate thumbnail, specific title, useful description, source links, and a pinned question.",
    "A complete publishing package.",
  ],
  [
    "Publish and respond",
    "MessageCircle",
    "Publish the lesson, ask a meaningful question, and respond helpfully to recurring viewer concerns.",
    "A published lesson and community notes.",
  ],
  [
    "Review analytics",
    "ChartNoAxesCombined",
    "Look at clicks, watch time, retention, and questions together. Avoid judging the channel from one video.",
    "A short evidence-based review.",
  ],
  [
    "Improve the next video",
    "TrendingUp",
    "Choose one change based on your review: a clearer hook, a better demonstration, or a more useful topic.",
    "One specific improvement for the next lesson.",
  ],
] as const;

export const scriptStages = [
  [
    "Hook",
    "0:00–0:20",
    "Start with a familiar problem or question. Make the viewer feel understood without promising a miracle.",
  ],
  [
    "Promise",
    "0:20–0:50",
    "Say exactly what the viewer will learn and what they will be able to do by the end.",
  ],
  [
    "Simple explanation",
    "0:50–2:00",
    "Use a real-life comparison. Explain essential terms in natural Afaan Oromoo and leave out unnecessary jargon.",
  ],
  [
    "Screen demonstration",
    "2:00–5:30",
    "Show the real steps at a readable pace. Narrate what you click, why you do it, and how to check the result.",
  ],
  [
    "Insight & limitations",
    "5:30–6:45",
    "Explain common mistakes, privacy risks, and tool limitations. Separate tested results from assumptions.",
  ],
  [
    "Community & next step",
    "6:45–7:15",
    "Ask one useful audience question and suggest a practical next action or a related lesson.",
  ],
] as const;

export const aiPrompt = `Act as an educational video-development partner for TEHA TECH, an Afaan Oromoo technology channel.

AUDIENCE: Afaan Oromoo-speaking beginners and intermediate learners. Use clear everyday examples, not complicated technical explanations.
FORMAT: Screen recording with my personal voice-over. Target length: 6–8 minutes.
TOPIC: [Insert topic]
VIEWER PROBLEM: [Insert one specific problem]
VIDEO PROMISE: [Insert the concrete viewer outcome]

Develop the following:
1. Three accurate, engaging title options in Afaan Oromoo.
2. A research and verification checklist with reliable source suggestions. Flag claims, tool access, prices, and features that need checking; do not fabricate facts or sources.
3. A story-driven outline: hook, promise, simple explanation, screen demonstration, insights and limitations, community question and next step. Timing is flexible.
4. A natural, conversational Afaan Oromoo voice-over draft. Keep appropriate English technology terms and explain unfamiliar terms simply.
5. Separate voice-over narration from on-screen instructions. Describe exact steps, safe sample inputs, expected outputs, and how I should verify them.
6. A reproducible demonstration that I must test before recording, with a backup approach if a tool or feature is unavailable.
7. Common mistakes, privacy concerns, responsible AI guidance, and honest limitations. Results depend on the task; do not invent features, performance, or guaranteed outcomes.
8. An accurate thumbnail concept, useful video description with source placeholders, and a pinned comment with one meaningful audience question.
9. A final recording and publishing checklist.

Never claim this video is already published. Mark uncertainty clearly and ask for missing information rather than inventing it.`;

export const recordingChecklist = [
  "Close private tabs and notifications",
  "Hide personal information",
  "Increase screen readability",
  "Test the microphone",
  "Rehearse the demonstration",
  "Record voice-over in manageable sections",
  "Check audio and screen synchronization",
];
export const editingChecklist = [
  "Remove unnecessary pauses",
  "Synchronize narration and screen actions",
  "Zoom in on small controls",
  "Add readable captions",
  "Keep music below the narration",
  "Review the complete export",
  "Check audio, video, and playback",
];
export const commitmentChecklist = [
  "Publish one useful long-form video each week",
  "Focus each video on one viewer problem",
  "Test every demonstration",
  "Use natural Afaan Oromoo",
  "Prioritize clear voice-over and readable screens",
  "Create accurate thumbnails",
  "Ask one meaningful audience question",
  "Review results before choosing the next topic",
];
export const weeklyTasks = [
  "Research",
  "Script writing",
  "Recording",
  "Editing",
  "Thumbnail creation",
  "Publishing",
  "Community engagement",
  "Weekly review",
];
export const weeks = [
  { dates: "October 12–18, 2026", short: "OCT 12–18", title: "Introduce AI", video: 0 },
  { dates: "October 19–25, 2026", short: "OCT 19–25", title: "Explore useful AI tools", video: 1 },
  {
    dates: "October 26–November 1, 2026",
    short: "OCT 26 – NOV 1",
    title: "Make smartphones simpler",
    video: 2,
  },
  { dates: "November 2–8, 2026", short: "NOV 2–8", title: "Start editing & review", video: 3 },
];
export type ProgressState = Record<string, boolean>;
export function calculateProgress(ids: string[], state: ProgressState) {
  const completed = ids.filter((id) => state[id] === true).length;
  return {
    completed,
    total: ids.length,
    percent: ids.length ? Math.round((completed / ids.length) * 100) : 0,
  };
}
export const calendarIds = weeks.flatMap((_, week) =>
  weeklyTasks.map((_, task) => `week-${week}-${task}`),
);
