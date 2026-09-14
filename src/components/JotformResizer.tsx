"use client";
import { useEffect } from "react";

const HEIGHT_BUFFER = 24;

export default function JotformResizer() {
  useEffect(() => {
    const heights = new Map<string, number>();
    const apply = () => {
      for (const [id, height] of heights) {
        const frame = document.getElementById(`JotFormIFrame-${id}`);
        if (frame instanceof HTMLIFrameElement) frame.style.height = `${height}px`;
      }
    };
    const onMessage = (event: MessageEvent) => {
      if (document.querySelector('script[src*="for-form-embed-handler"]')) return;
      if (typeof event.data !== "string") return;
      let host = "";
      try {
        host = new URL(event.origin).hostname;
      } catch {
        return;
      }
      if (host !== "jotform.com" && !host.endsWith(".jotform.com")) return;
      const match = event.data.match(/^setHeight:(\d+(?:\.\d+)?):(\d+)$/);
      if (!match) return;
      heights.set(match[2], Math.ceil(Number(match[1])) + HEIGHT_BUFFER);
      apply();
    };
    window.addEventListener("message", onMessage);
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("resize", apply);
    };
  }, []);
  return null;
}
