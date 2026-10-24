"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { StarField } from "@/components/star-field";

const INTRO_KEY = "wiznyu-intro-seen";
const INTRO_HOLD_MS = 1900;
const INTRO_EXIT_MS = 420;

type IntroState = "off" | "on" | "leaving";

export function ArchiveIntro() {
  const [state, setState] = useState<IntroState>("off");
  const autoTimer = useRef<number | null>(null);
  const skipRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    if (autoTimer.current) {
      window.clearTimeout(autoTimer.current);
      autoTimer.current = null;
    }
    try {
      window.sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Storage can be unavailable in private contexts; the intro still closes.
    }
    setState((current) => (current === "on" ? "leaving" : current));
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let seen = false;
    try {
      seen = window.sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      seen = false;
    }

    const force = new URLSearchParams(window.location.search).get("intro") === "1";
    if (seen && !force) return;

    setState("on");
    if (force) {
      const url = new URL(window.location.href);
      url.searchParams.delete("intro");
      window.history.replaceState(
        {},
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
    }

    autoTimer.current = window.setTimeout(close, INTRO_HOLD_MS);

    return () => {
      if (autoTimer.current) window.clearTimeout(autoTimer.current);
    };
  }, [close]);

  useEffect(() => {
    if (state !== "leaving") return;
    const timer = window.setTimeout(() => {
      setState("off");
      const title = document.getElementById("archive-title");
      if (title) title.focus({ preventScroll: true });
    }, INTRO_EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (state !== "on") return;
    skipRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus();
        return;
      }
      if (
        event.key === "Escape" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, state]);

  if (state === "off") return null;

  return (
    <div
      aria-label="WIZNYU archive intro"
      aria-modal="true"
      className={`fixed inset-0 z-[70] overflow-y-auto bg-void ${
        state === "leaving" ? "intro-leaving" : "intro-overlay"
      }`}
      role="dialog"
    >
      <StarField className="intro-stars" opacity="opacity-30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-void/15 via-void/45 to-void"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 py-5 sm:px-8 lg:px-12">
        <div className="intro-meta flex items-center justify-between gap-4 border-b border-line pb-4">
          <span className="label label-bone">WIZNYU / ARCHIVE 001</span>
          <span className="label">SIGNAL ACQUIRED</span>
        </div>

        <div className="py-14 md:py-20">
          <p className="label intro-meta">PERSONAL ARCHIVE / THRESHOLD</p>
          <p className="intro-mark display mt-5 text-[clamp(4.25rem,15vw,15rem)] font-medium leading-[0.78] tracking-[-0.055em] text-bone">
            WIZNYU
          </p>
          <div className="intro-line mt-8 h-px w-full bg-line" />
          <div className="intro-meta mt-4 flex items-center justify-between gap-4">
            <span className="label">CREATIVE TECHNOLOGIST</span>
            <span className="label">ARCHIVE / 001</span>
          </div>
        </div>

        <div className="intro-meta flex flex-wrap items-end justify-between gap-5 border-t border-line pt-4">
          <p className="max-w-xs text-sm leading-relaxed text-ash">
            Arsip personal. Tanpa audio. Tanpa pelacak.
          </p>
          <button
            className="btn"
            onClick={close}
            ref={skipRef}
            type="button"
          >
            SKIP INTRO <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
