import { describe, expect, it } from "vitest";
import { calculateProgress, calendarIds, weeks } from "@/lib/creator-content";
describe("Creator roadmap rules", () => {
  it("starts with no completed tasks", () => {
    expect(calculateProgress(calendarIds, {})).toEqual({ completed: 0, total: 32, percent: 0 });
  });
  it("calculates progress only from actual selected tasks", () => {
    expect(
      calculateProgress(calendarIds, {
        "week-0-0": true,
        "week-0-1": true,
        unknown: true,
        "week-0-2": false,
      }),
    ).toEqual({ completed: 2, total: 32, percent: 6 });
  });
  it("preserves the four exact launch date ranges", () => {
    expect(weeks.map((w) => w.dates)).toEqual([
      "October 12–18, 2026",
      "October 19–25, 2026",
      "October 26–November 1, 2026",
      "November 2–8, 2026",
    ]);
  });
  it("reset progress is zero even after a completed calendar", () => {
    const state = Object.fromEntries(calendarIds.map((id) => [id, true]));
    expect(calculateProgress(calendarIds, state).percent).toBe(100);
    Object.keys(state).forEach((id) => delete state[id]);
    expect(calculateProgress(calendarIds, state).percent).toBe(0);
  });
});
