import { useEffect, useRef } from "react";

const clamp01 = (value) => (value < 0 ? 0 : value > 1 ? 1 : value);

/**
 * Drives a scroll-linked timeline: every `[data-timeline-row]` child gets a
 * `--row-p` progress (0 -> 1) as it crosses the viewport, and the spine fill
 * gets `--line-top`, `--line-h` and `--line-p`. Values are painted from CSS so
 * there is no per-row re-render.
 */
export default function useTimelineScroll() {
  const listRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const rows = list.querySelectorAll("[data-timeline-row]");
      if (rows.length === 0) return;

      const viewport = window.innerHeight;
      const listTop = list.getBoundingClientRect().top;
      const edge = viewport * 0.9;
      const focus = viewport * 0.5;

      rows.forEach((row) => {
        const { top } = row.getBoundingClientRect();
        row.style.setProperty("--row-p", clamp01((edge - top) / (edge - focus)).toFixed(4));
      });

      const first = rows[0].getBoundingClientRect();
      const last = rows[rows.length - 1].getBoundingClientRect();
      const firstCenter = first.top + first.height / 2;
      const lastCenter = last.top + last.height / 2;
      const span = lastCenter - edge;

      fill.style.setProperty("--line-top", `${(firstCenter - listTop).toFixed(2)}px`);
      fill.style.setProperty("--line-h", `${Math.max(lastCenter - firstCenter, 0).toFixed(2)}px`);
      fill.style.setProperty(
        "--line-p",
        (reduced || span <= 0 ? 1 : clamp01((edge - firstCenter) / span)).toFixed(4)
      );
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    paint();

    if (reduced) return undefined;

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(list);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  return { listRef, fillRef };
}
