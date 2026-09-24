import { useEffect, useRef } from "react";

const DIRECTION_CLASS = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
  fade: "reveal-fade",
};

export default function Reveal({
  as: Tag = "div",
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  triggerOnce = true,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const a11yOff = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (a11yOff) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (triggerOnce) observer.unobserve(el);
          } else if (!triggerOnce) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnce]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${DIRECTION_CLASS[direction] || "reveal-up"} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}