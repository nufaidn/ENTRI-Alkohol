import { useEffect } from "react";

export default function useRipple() {
  useEffect(() => {
    const onPointerDown = (e) => {
      const host = e.currentTarget;
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ink = document.createElement("span");
      ink.className = "ripple-ink";
      ink.style.width = ink.style.height = `${size}px`;
      ink.style.left = `${x}px`;
      ink.style.top = `${y}px`;
      host.appendChild(ink);
      ink.addEventListener("animationend", () => ink.remove(), { once: true });
    };

    const hosts = document.querySelectorAll(".ripple-host");
    hosts.forEach((host) => host.addEventListener("pointerdown", onPointerDown));

    return () => {
      hosts.forEach((host) => host.removeEventListener("pointerdown", onPointerDown));
    };
  }, []);
}