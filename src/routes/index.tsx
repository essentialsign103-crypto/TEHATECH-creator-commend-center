import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Play,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  LayoutDashboard,
  Target,
  Layers3,
  Clapperboard,
  Workflow,
  FileText,
  Sparkles,
  Monitor,
  CalendarDays,
  ChartNoAxesCombined,
  ShieldCheck,
  Users,
  Mic,
  Lightbulb,
  Check,
  Clock3,
  Smartphone,
  Film,
  Search,
  ListTree,
  FlaskConical,
  Image,
  MessageCircle,
  TrendingUp,
  BookOpen,
  RotateCcw,
  Headphones,
  Youtube,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SectionHeading,
  Checklist,
  CopyButton,
  ProgressBar,
  Detail,
} from "@/components/creator-ui";
import {
  navigation,
  videos,
  workflow,
  scriptStages,
  aiPrompt,
  recordingChecklist,
  editingChecklist,
  commitmentChecklist,
  weeklyTasks,
  weeks,
  calculateProgress,
  calendarIds,
  type ProgressState,
} from "@/lib/creator-content";
import heroImage from "@/assets/creator-workspace.jpg";
import aiImage from "@/assets/ai-tools.jpg";
import digitalImage from "@/assets/digital-skills.jpg";
import creatorImage from "@/assets/creator-skills.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEHA TECH — Creator Command Center" },
      {
        name: "description",
        content:
          "Your complete Afaan Oromoo YouTube creator roadmap: plan, record, edit, publish, and build a trusted technology community.",
      },
      { property: "og:title", content: "TEHA TECH — Creator Command Center" },
      {
        property: "og:description",
        content:
          "A practical four-week technology creator roadmap, with video plans, production guides, and personal progress checklists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = {
  LayoutDashboard,
  Target,
  Layers3,
  Clapperboard,
  Workflow,
  FileText,
  Sparkles,
  Monitor,
  CalendarDays,
  ChartNoAxesCombined,
  ShieldCheck,
  Lightbulb,
  Search,
  ListTree,
  FlaskConical,
  Mic,
  Film,
  Image,
  MessageCircle,
  TrendingUp,
};
const pillarData = [
  {
    image: aiImage,
    icon: Sparkles,
    label: "YOUR STARTING FOCUS",
    title: "AI & useful digital tools",
    text: "Make modern AI understandable, useful, and responsible.",
    topics: [
      "AI basics & ChatGPT",
      "Productivity & practical solutions",
      "Responsible usage & verification",
    ],
    more: "Explain what AI can and cannot do. Demonstrate a useful result, check its accuracy, and discuss privacy and tool limitations. Favor everyday problems over hype.",
    tone: "blue",
  },
  {
    image: digitalImage,
    icon: Smartphone,
    label: "RELATED EXPLORATION",
    title: "Everyday digital skills",
    text: "Help people get more from the devices they already use.",
    topics: [
      "Smartphone settings & tutorials",
      "Computer basics, apps & websites",
      "Privacy, safety & problem-solving",
    ],
    more: "Cover mobile and computer basics with clear step-by-step demonstrations. Explain settings, useful applications, internet safety, and how to undo a change. Device interfaces may differ.",
    tone: "teal",
  },
  {
    image: creatorImage,
    icon: Film,
    label: "RELATED EXPLORATION",
    title: "Editing & creator skills",
    text: "Turn a simple recording into a clear, helpful lesson.",
    topics: [
      "Beginner editing & screen recording",
      "Voice-over, captions & subtitles",
      "Thumbnails & production tools",
    ],
    more: "Teach practical screen recording, personal voice-over, editing, captions, thumbnail creation, and content-production tools. Start with one simple edit, not a complex studio setup.",
    tone: "amber",
  },
];

function Index() {
  const [state, setState] = useState<ProgressState>({});
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("overview");
  const [resetOpen, setResetOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const progress = calculateProgress(calendarIds, state);
  const commitment = calculateProgress(
    commitmentChecklist.map((_, i) => `commitment-${i}`),
    state,
  );
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("teha-progress") || "{}");
      if (saved && typeof saved === "object" && !Array.isArray(saved))
        setState(
          Object.fromEntries(
            Object.entries(saved).filter(([, value]) => typeof value === "boolean"),
          ) as ProgressState,
        );
      setDark(localStorage.getItem("teha-theme") === "dark");
    } catch {
      setStorageError(true);
    }
    setReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem("teha-progress", JSON.stringify(state));
      } catch {
        setStorageError(true);
      }
    }
  }, [state, ready]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (ready) {
      try {
        localStorage.setItem("teha-theme", dark ? "dark" : "light");
      } catch {
        setStorageError(true);
      }
    }
  }, [dark, ready]);
  function toggle(id: string) {
    setState((previous) => ({ ...previous, [id]: !previous[id] }));
  }
  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    setActive(id);
    setMenu(false);
  }
  return (
    <div className={`creator-app ${collapsed ? "sidebar-collapsed" : ""}`} id="top">
      <header className="topbar">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Monitor size={21} />
          </span>
          <span>
            TEHA<span className="text-primary">TECH</span>
            <small>CREATOR COMMAND CENTER</small>
          </span>
        </a>
        <div className="header-center">
          <span className="tiny-dot" /> Your ideas. Your voice. Your impact.
        </div>
        <div className="header-actions">
          <span className="language-label">
            Afaan Oromoo <span>/ EN</span>
          </span>
          <span className="header-divider" />
          <Button
            variant="ghost"
            size="icon"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Light theme" : "Dark theme"}
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button className="header-start" onClick={() => jump("videos")}>
            Start creating <ArrowUpRight />
          </Button>
          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {menu && <div className="menu-backdrop" onClick={() => setMenu(false)} />}
      <aside
        className={`sidebar ${menu ? "mobile-open" : ""}`}
        aria-label="Creator roadmap navigation"
      >
        <div className="sidebar-title">
          <span>YOUR WORKSPACE</span>
          <Button
            variant="ghost"
            size="icon"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </Button>
        </div>
        <nav>
          {navigation.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Button
                key={item.id}
                variant="ghost"
                title={item.label}
                className={`nav-item ${active === item.id ? "active" : ""}`}
                onClick={() => jump(item.id)}
              >
                <Icon />
                <span>{item.label}</span>
                {i === 0 && <span className="nav-current" />}
              </Button>
            );
          })}
        </nav>
        <div className="sidebar-launch">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <strong>Your 4-week launch</strong>
          </div>
          <p>A little progress, every day.</p>
          <div className="flex items-center justify-between text-xs mb-2">
            <span>
              {progress.completed} of {progress.total} tasks
            </span>
            <strong>{progress.percent}%</strong>
          </div>
          <ProgressBar percent={progress.percent} />
          <Button variant="link" onClick={() => jump("calendar")}>
            View content calendar <ArrowRight />
          </Button>
        </div>
        <div className="sidebar-footer">
          <span className="brand-mini">T</span>
          <div>
            <strong>Built for your next chapter.</strong>
            <span>Teach. Create. Keep going.</span>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <div className="page-intro">
          <div className="breadcrumb">
            <span>Workspace</span>
            <ChevronRight size={14} />
            <strong>Overview</strong>
          </div>
          <span className="roadmap-label">
            <BookOpen size={14} /> YOUR PERSONAL CREATOR ROADMAP
          </span>
        </div>
        <section id="overview" className="overview-section">
          <div className="hero">
            <img
              src={heroImage}
              width={1536}
              height={768}
              alt="Technology creator workspace with a microphone and video editing monitor"
              fetchPriority="high"
            />
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span /> SMALL BEGINNINGS. MEANINGFUL IMPACT.
              </span>
              <h1>
                Build TEHA TECH.
                <br />
                Teach technology.
                <br />
                <span>Grow a trusted community.</span>
              </h1>
              <p>
                Turn your ideas into useful Afaan Oromoo videos.
                <br className="desktop-break" /> Your complete system for planning, creating,
                <br className="desktop-break" /> and getting better—one lesson at a time.
              </p>
              <div className="hero-buttons">
                <Button size="lg" onClick={() => jump("positioning")}>
                  Explore the roadmap <ArrowRight />
                </Button>
                <Button
                  className="hero-secondary"
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    jump("videos");
                    document.getElementById("video-plan-0")?.setAttribute("open", "");
                  }}
                >
                  <Play size={15} /> Your first video
                </Button>
              </div>
              <div className="hero-note">
                <Check size={14} /> A practical 4-week launch plan <span>·</span> Made for your
                voice
              </div>
            </div>
          </div>
          <div className="overview-stats">
            {[
              {
                icon: Target,
                label: "THE MISSION",
                title: "Technology, made clear",
                sub: "Useful skills. Real-life examples.",
                tone: "blue",
              },
              {
                icon: Users,
                label: "YOUR AUDIENCE",
                title: "Afaan Oromoo learners",
                sub: "Beginners & curious minds.",
                tone: "teal",
              },
              {
                icon: Mic,
                label: "YOUR FORMAT",
                title: "Screen + your voice",
                sub: "Show the steps. Explain naturally.",
                tone: "amber",
              },
              {
                icon: CalendarDays,
                label: "YOUR LAUNCH",
                title: "4 weeks. 4 useful videos.",
                sub: "A system, not a race.",
                tone: "blue",
              },
            ].map((item) => (
              <div className="overview-stat" key={item.label}>
                <span className={`icon-box ${item.tone}`}>
                  <item.icon size={19} />
                </span>
                <div>
                  <span className="stat-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="next-action">
            <span className="icon-box teal">
              <Lightbulb size={20} />
            </span>
            <div>
              <strong>You don’t need more ideas. You need a repeatable system.</strong>
              <p>Start with one viewer problem. Make one helpful video. Learn, then repeat.</p>
            </div>
            <Button variant="ghost" onClick={() => jump("workflow")}>
              See the workflow <ArrowRight />
            </Button>
          </div>
        </section>
        <section id="positioning" className="content-section">
          <SectionHeading
            number="01"
            title="A clear purpose. A stronger channel."
            description="Know who you’re helping—and what they can count on you for."
          />
          <div className="positioning-grid">
            <div>
              <h3>Technology that speaks your language.</h3>
              <p>
                TEHA TECH helps Afaan Oromoo speakers understand modern technology, develop
                practical digital skills, use AI responsibly, and discover useful digital
                opportunities.
              </p>
              <p>
                For beginners and intermediate learners, the promise is simple: clear
                demonstrations, natural explanations, and skills they can use in real life.
              </p>
              <div className="principles">
                <span>
                  <Check /> Clarity
                </span>
                <span>
                  <ShieldCheck /> Trust
                </span>
                <span>
                  <CalendarDays /> Consistency
                </span>
              </div>
            </div>
            <div className="positioning-note">
              <span className="section-eyebrow">YOUR CREATOR COMPASS</span>
              <h3>Many ideas. One meaningful next step.</h3>
              <p>
                Your challenge is turning ideas into excellent videos—not finding more topics.
                Screen recordings with your personal voice-over keep the process realistic and the
                teaching personal.
              </p>
              <strong>The long-term goal</strong>
              <p>
                A trusted Afaan Oromoo technology community, built through helpful lessons and
                honest conversations.
              </p>
            </div>
          </div>
        </section>
        <section id="pillars" className="content-section">
          <SectionHeading
            number="02"
            title="Three pillars. One clear direction."
            description="Start with AI and useful technology. Explore the rest as your audience grows."
          >
            <span className="section-badge">FOCUS → EXPERIMENT → LEARN</span>
          </SectionHeading>
          <div className="pillar-grid">
            {pillarData.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <div className="pillar-image">
                  <img
                    src={pillar.image}
                    loading="lazy"
                    width={1024}
                    height={768}
                    alt={
                      pillar.title === "Everyday digital skills"
                        ? "Smartphone displaying settings beside a laptop"
                        : pillar.title === "Editing & creator skills"
                          ? "Video editing timeline on a monitor with headphones"
                          : "Laptop displaying an AI conversation interface"
                    }
                  />
                  <span className={`pillar-tag ${pillar.tone}`}>
                    <pillar.icon size={13} />
                    {pillar.label}
                  </span>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <ul>
                    {pillar.topics.map((topic) => (
                      <li key={topic}>
                        <Check size={13} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Detail title="Explore this pillar">
                    <p>{pillar.more}</p>
                  </Detail>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="videos" className="content-section">
          <SectionHeading
            number="03"
            title="Your first four videos, planned."
            description="A focused starting lineup. Every video solves one real viewer problem."
          >
            <span className="section-badge">
              <Clapperboard size={14} /> THE FIRST MONTH
            </span>
          </SectionHeading>
          <div className="video-grid">
            {videos.map((video, i) => (
              <article className="video-card" key={video.title}>
                <div className="video-meta">
                  <span className="video-number">0{i + 1}</span>
                  <span>{video.category}</span>
                  <span className="video-length">
                    <Clock3 size={13} />
                    {video.length}
                  </span>
                </div>
                <h3>{video.title}</h3>
                <p>{video.purpose}</p>
                <details id={`video-plan-${i}`} className="video-details">
                  <summary>
                    Explore video plan <ArrowUpRight size={16} />
                  </summary>
                  <div className="video-detail-body">
                    {[
                      ["Viewer problem", video.problem],
                      ["Viewer outcome", video.outcome],
                      ["Thumbnail concept", video.thumbnail],
                      ["Screen demonstration", video.demo],
                    ].map(([label, content]) => (
                      <div key={label}>
                        <h4>{label}</h4>
                        <p>{content}</p>
                      </div>
                    ))}
                    <h4>Suggested outline</h4>
                    <ol>
                      {video.outline.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                    <span className="plan-note">
                      Suggested plan—not a finished script or a published video.
                    </span>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
        <section id="workflow" className="content-section">
          <SectionHeading
            number="04"
            title="From an idea to a useful lesson."
            description="A repeatable production system. Follow the steps, not the pressure."
          />
          <div className="workflow-list">
            {workflow.map(([title, icon, explanation, output], i) => {
              const Icon = icons[icon];
              return (
                <div
                  className={`workflow-step ${state[`workflow-${i}`] ? "is-complete" : ""}`}
                  key={title}
                >
                  <div className="step-marker">
                    {state[`workflow-${i}`] ? <Check size={18} /> : String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="step-content">
                    <div className="flex gap-2 items-center">
                      <Icon size={18} />
                      <h3>{title}</h3>
                    </div>
                    <p>{explanation}</p>
                    <span className="step-output">
                      <ArrowRight size={13} />
                      {output}
                    </span>
                  </div>
                  <Checkbox
                    aria-label={`Complete: ${title}`}
                    checked={state[`workflow-${i}`] === true}
                    onCheckedChange={() => toggle(`workflow-${i}`)}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section id="script" className="content-section">
          <SectionHeading
            number="05"
            title="A story your viewers can follow."
            description="Six building blocks for a clear, conversational educational video."
          />
          <div className="script-layout">
            <div>
              {scriptStages.map(([title, time, content], i) => (
                <Detail
                  title={`${String(i + 1).padStart(2, "0")}  ${title}  ·  ${time}`}
                  key={title}
                >
                  <p>{content}</p>
                </Detail>
              ))}
              <p className="small-note">
                Flexible timing examples for a typical short educational video—not rigid
                requirements.
              </p>
            </div>
            <div className="hook-example">
              <Mic size={23} />
              <span className="section-eyebrow">AN OPENING IN YOUR VOICE</span>
              <blockquote>
                “Hojii sa’aatii shan si fudhatu tokko AI sirrii ta’e fayyadamuun salphisuu ni
                dandeessaa? Har’a fakkeenya salphaa waliin ilaalla.”
              </blockquote>
              <p>
                Could the right AI tool help simplify a task that takes five hours? Let’s explore a
                simple example.
              </p>
              <div className="hook-caveat">
                <ShieldCheck size={16} />
                <span>
                  Time saved depends on the task, tool, and how you use it. Always check the result.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="prompt" className="content-section">
          <SectionHeading
            number="06"
            title="A better brief. A better first draft."
            description="Give AI the context it needs—then bring your own judgment and voice."
          />
          <div className="prompt-block">
            <div className="prompt-header">
              <div className="flex gap-3 items-center">
                <Sparkles size={20} />
                <div>
                  <h3>The TEHA TECH video-development prompt</h3>
                  <span>Reusable · 6–8 minute tutorials · Afaan Oromoo</span>
                </div>
              </div>
              <CopyButton text={aiPrompt} />
            </div>
            <pre>{aiPrompt}</pre>
            <div className="prompt-footer">
              <ShieldCheck size={16} /> AI is your drafting partner, not your source of truth.
              Verify before recording.
            </div>
          </div>
        </section>
        <section id="setup" className="content-section">
          <SectionHeading
            number="07"
            title="Keep your setup simple."
            description="Clear audio and readable screens matter more than complicated equipment."
          />
          <div className="tools-grid">
            {[
              {
                icon: Monitor,
                title: "OBS Studio",
                role: "Computer screen recording",
                text: "Capture tutorials and test your recording settings.",
              },
              {
                icon: Smartphone,
                title: "Phone screen recorder",
                role: "Mobile tutorials",
                text: "Use a built-in recorder when available on your device.",
              },
              {
                icon: Film,
                title: "CapCut or another editor",
                role: "Editing & captions",
                text: "Trim, synchronize, and add readable captions.",
              },
              {
                icon: Palette,
                title: "Canva or an image editor",
                role: "Thumbnail design",
                text: "Create one clear, accurate visual promise.",
              },
              {
                icon: Sparkles,
                title: "ChatGPT",
                role: "Outlines & script development",
                text: "Develop ideas; check and personalize the draft.",
              },
              {
                icon: Youtube,
                title: "YouTube Studio",
                role: "Publishing & analytics",
                text: "Manage uploads and review audience feedback.",
              },
            ].map((tool) => (
              <div className="tool-item" key={tool.title}>
                <tool.icon size={21} />
                <div>
                  <span>{tool.role}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="small-note">
            Starting options, not mandatory purchases. Check current pricing, availability, device
            compatibility, and features before choosing a tool.
          </p>
          <div className="setup-checklists">
            <Checklist
              title="Before you press record"
              group="recording"
              items={recordingChecklist}
              state={state}
              onToggle={toggle}
            />
            <Checklist
              title="Before you export"
              group="editing"
              items={editingChecklist}
              state={state}
              onToggle={toggle}
            />
          </div>
        </section>
        <section id="calendar" className="content-section">
          <SectionHeading
            number="08"
            title="Your first month, one week at a time."
            description="A realistic launch rhythm: research, create, publish, and learn."
          >
            <Button variant="ghost" size="sm" onClick={() => setResetOpen(true)}>
              <RotateCcw /> Reset progress
            </Button>
          </SectionHeading>
          <div className="calendar-progress">
            <div>
              <strong>{progress.percent}% of your launch plan</strong>
              <span>
                {progress.completed} of {progress.total} tasks complete
              </span>
            </div>
            <ProgressBar percent={progress.percent} />
          </div>
          <div className="calendar-grid">
            {weeks.map((week, i) => (
              <article className="week-card" key={week.dates}>
                <div className="week-top">
                  <span>WEEK 0{i + 1}</span>
                  <span>{week.short}</span>
                </div>
                <h3>{week.title}</h3>
                <p>{videos[week.video]?.title}</p>
                <Checklist
                  group={`week-${i}`}
                  items={weeklyTasks}
                  state={state}
                  onToggle={toggle}
                />
                <div className="week-bottom">{week.dates}</div>
              </article>
            ))}
          </div>
          {storageError && (
            <p role="status" className="small-note">
              Your browser cannot save progress right now. Checklists still work, but selections may
              not survive a refresh.
            </p>
          )}
          <p className="small-note">
            Progress is saved in this browser. Week 1: finalize, record, edit, and publish. Week 4:
            publish the editing tutorial and review the month.
          </p>
        </section>
        <section id="analytics" className="content-section">
          <SectionHeading
            number="09"
            title="Learn from the people watching."
            description="Use evidence to make the next lesson better—not to chase a perfect number."
          />
          <div className="analytics-grid">
            {[
              [
                "Impressions & click-through rate",
                "How often thumbnails are shown, and how often an impression turns into a view.",
                "Limited impressions? Examine topic demand and distribution. Seen but not clicked? Reassess the title and thumbnail.",
              ],
              [
                "Average view duration",
                "The average time viewers spend watching a video.",
                "Look for opportunities to reduce unnecessary pauses and deliver useful value sooner. Compare similar-length videos.",
              ],
              [
                "Audience retention",
                "Where viewers stay, skip, or leave during a lesson.",
                "Early exits? Improve the hook and deliver the promised value sooner. Rewatch confusing demonstrations.",
              ],
              [
                "Comments & recurring questions",
                "Qualitative feedback about what viewers need or find unclear.",
                "Repeated questions are useful follow-up topics. Clarify confusing steps and respond with care.",
              ],
              [
                "Returning viewers",
                "People who come back to watch more of your content.",
                "Look for themes and teaching formats that build trust. Develop useful related lessons consistently.",
              ],
              [
                "Topic performance over time",
                "How different subjects perform across a series of videos.",
                "Compare topics over time, not from one upload. Balance viewer interest with genuine learning value.",
              ],
            ].map(([title, meaning, guidance], i) => (
              <div className="analytics-item" key={title}>
                <span className="analytics-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{meaning}</p>
                <div>
                  <TrendingUp size={15} />
                  <span>{guidance}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="analytics-note">
            <ShieldCheck size={18} />
            <p>
              No single metric guarantees success. Results depend on context, audience, topic, and
              timing. These are learning guides—not channel performance data.
            </p>
          </div>
        </section>
        <section id="commitment" className="content-section">
          <SectionHeading
            number="10"
            title="A commitment to keep showing up."
            description="For the next thirty days, choose helpful over perfect."
          >
            <CopyButton
              text={commitmentChecklist.map((item) => `☐ ${item}`).join("\n")}
              label="Copy checklist"
            />
          </SectionHeading>
          <div className="commitment-layout">
            <Checklist
              group="commitment"
              items={commitmentChecklist}
              state={state}
              onToggle={toggle}
            />
            <div className="commitment-summary">
              <Headphones size={28} />
              <h3>Your voice makes the difference.</h3>
              <p>
                One problem. One clear demonstration. One honest conversation with your audience.
              </p>
              <div className="flex justify-between text-sm mb-3">
                <span>Your commitment</span>
                <strong>
                  {commitment.completed} / {commitment.total}
                </strong>
              </div>
              <ProgressBar percent={commitment.percent} />
              <span className="small-note">Built one action at a time.</span>
            </div>
          </div>
        </section>
        <section className="final-action">
          <span className="section-eyebrow">THE NEXT CHAPTER STARTS WITH ONE VIDEO</span>
          <h2>
            Don’t wait for perfect.
            <br />
            Make something helpful.
          </h2>
          <p>
            Build your system, publish your first lesson, learn from your audience, and make the
            next video better.
          </p>
          <div>
            <Button
              onClick={() => {
                jump("videos");
                document.getElementById("video-plan-0")?.setAttribute("open", "");
              }}
            >
              Open your first-video plan <ArrowRight />
            </Button>
            <Button variant="outline" onClick={() => jump("workflow")}>
              Review workflow
            </Button>
            <Button variant="ghost" onClick={() => jump("calendar")}>
              Open calendar <CalendarDays />
            </Button>
          </div>
        </section>
        <footer className="page-footer">
          <div>
            <strong>TEHA TECH</strong>
            <span>Technology in your language. Possibility in your hands.</span>
          </div>
          <Button variant="ghost" onClick={() => jump("top")}>
            Back to top <ArrowUp size={15} />
          </Button>
        </footer>
      </main>
      <AlertDialog.Root open={resetOpen} onOpenChange={setResetOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="reset-backdrop" />
          <AlertDialog.Content className="reset-dialog fixed left-1/2 top-1/2 z-[101] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2">
            <RotateCcw size={24} />
            <AlertDialog.Title asChild>
              <h2>Start fresh?</h2>
            </AlertDialog.Title>
            <AlertDialog.Description asChild>
              <p>
                This clears all calendar, workflow, recording, editing, and commitment checkboxes in
                this browser. Your plans stay unchanged.
              </p>
            </AlertDialog.Description>
            <div className="flex justify-end gap-2">
              <AlertDialog.Cancel asChild>
                <Button variant="outline">Keep progress</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button variant="destructive" onClick={() => setState({})}>
                  Reset all progress
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}
