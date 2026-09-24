"use client";
import { useEffect } from "react";

// Jotform forms post their content height to the embedding page as
// "setHeight:<px>:<formId>" from *.jotform.com. Size each form to it so the iframe
// never scrolls: the height goes on the iframe's parent (with the iframe filling it),
// or on the iframe itself when the parent also holds other visible content.

const SET_HEIGHT = /^setHeight:(\d+(?:\.\d+)?):(\d+)$/;
const NON_VISUAL = new Set(["SCRIPT", "NOSCRIPT", "STYLE", "LINK", "TEMPLATE"]);

const isJotformOrigin = (origin: string) => {
  try {
    const host = new URL(origin).hostname;
    return host === "jotform.com" || host.endsWith(".jotform.com");
  } catch {
    return false;
  }
};

// Embeds identify the form in different ways: id="<formId>", id="<formId>_<n>",
// id="JotFormIFrame-<formId>", name="<formId>", or only in the src.
const matchesForm = (frame: HTMLIFrameElement, formId: string) =>
  frame.name === formId ||
  frame.id === formId ||
  frame.id === `JotFormIFrame-${formId}` ||
  frame.id.startsWith(`${formId}_`) ||
  frame.src.includes(`/${formId}`);

// The iframe that sent the message; if it cannot be pinned down (e.g. the message
// came from a nested frame), every iframe of that form on the page.
function framesFor(event: MessageEvent, formId: string): HTMLIFrameElement[] {
  const frames = Array.from(document.querySelectorAll("iframe"));
  const sender = frames.find((f) => f.contentWindow === event.source);
  return sender ? [sender] : frames.filter((f) => matchesForm(f, formId));
}

function applyHeight(frame: HTMLIFrameElement, height: number) {
  const parent = frame.parentElement;
  frame.setAttribute("scrolling", "no");
  const hasOtherContent =
    !parent ||
    Array.from(parent.children).some(
      (el) => el !== frame && !NON_VISUAL.has(el.tagName) && (el as HTMLElement).offsetHeight > 0
    );
  if (hasOtherContent) {
    frame.style.height = `${height}px`;
    return;
  }
  parent.style.height = `${height}px`;
  frame.style.height = "100%";
}

export default function JotformResizer() {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string" || !isJotformOrigin(event.origin)) return;
      const match = event.data.match(SET_HEIGHT);
      if (!match) return;
      const height = Math.ceil(Number(match[1]));
      if (!height) return;
      for (const frame of framesFor(event, match[2])) applyHeight(frame, height);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  return null;
}
