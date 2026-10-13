import { useState, type ReactNode } from "react";
import { Check, Copy, ChevronDown, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { calculateProgress, type ProgressState } from "@/lib/creator-content";

export function SectionHeading({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="min-w-0">
        <div className="section-eyebrow">{number} / YOUR CREATOR ROADMAP</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-fill" data-progress={percent}>
        <svg width="100%" height="6" preserveAspectRatio="none">
          <rect width={`${percent}%`} height="6" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
export function Checklist({
  group,
  items,
  state,
  onToggle,
  title,
}: {
  group: string;
  items: readonly string[];
  state: ProgressState;
  onToggle: (id: string) => void;
  title?: string;
}) {
  const progress = calculateProgress(
    items.map((_, i) => `${group}-${i}`),
    state,
  );
  return (
    <div className="checklist">
      {title && (
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3>{title}</h3>
          <span className="text-xs text-muted-foreground shrink-0">
            {progress.completed}/{progress.total}
          </span>
        </div>
      )}
      {items.map((item, i) => (
        <label
          key={item}
          className={`checklist-row ${state[`${group}-${i}`] ? "is-complete" : ""}`}
        >
          <Checkbox
            checked={state[`${group}-${i}`] === true}
            onCheckedChange={() => onToggle(`${group}-${i}`)}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}
export function CopyButton({ text, label = "Copy prompt" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(false);
  async function copy() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setFallback(true);
    }
  }
  return (
    <>
      <Button variant="outline" onClick={copy}>
        {copied ? <Check /> : <Copy />}
        {copied ? "Copied!" : label}
      </Button>
      <span className="sr-only" role="status">
        {copied ? "Copied to clipboard" : ""}
      </span>
      {fallback && (
        <div className="copy-fallback">
          <p>Select and copy the text below.</p>
          <textarea
            aria-label="Text to copy"
            value={text}
            readOnly
            onFocus={(event) => event.target.select()}
          />
          <Button variant="ghost" onClick={() => setFallback(false)}>
            Close
          </Button>
        </div>
      )}
    </>
  );
}
export function Detail({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <details className="detail">
      <summary>
        {Icon && <Icon size={18} />}
        <span>{title}</span>
        <ChevronDown size={17} className="detail-chevron" />
      </summary>
      <div className="detail-content">{children}</div>
    </details>
  );
}
