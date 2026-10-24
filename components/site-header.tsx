"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CloseMark, MenuMark } from "@/components/icons";
import { site } from "@/lib/site";

const mobileIndex = [
  { id: "cover", label: "Cover", number: "00" },
  { id: "statement", label: "Statement", number: "01" },
  { id: "works", label: "Works", number: "02" },
  { id: "artifacts", label: "Artifacts", number: "02B" },
  { id: "manifest", label: "Manifest", number: "03" },
  { id: "about", label: "About", number: "04" },
  { id: "personal", label: "Personal", number: "04B" },
  { id: "signal", label: "Signal", number: "05" },
  { id: "colophon", label: "Colophon", number: "06" },
] as const;

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]"),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        const chapter = visible[0]?.target.getAttribute("data-chapter");
        if (chapter) setActive(chapter);
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/90 backdrop-blur-md">
      <div className="site-shell flex h-16 items-center justify-between gap-4">
        <a
          aria-label="WIZNYU — kembali ke cover"
          className="group flex items-baseline gap-2"
          href="#cover"
        >
          <span className="display text-xl font-medium tracking-[-0.04em] text-bone">
            WIZNYU
          </span>
          <span className="label hidden sm:inline">/ 001</span>
        </a>

        <p className="label hidden 2xl:block">
          PERSONAL ARCHIVE / CREATIVE TECHNOLOGIST
        </p>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {site.chapters.map((chapter) => {
              const isActive = active === chapter.id;
              return (
                <li key={chapter.id}>
                  <a
                    aria-current={isActive ? "location" : undefined}
                    className={`group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "text-bone"
                        : "text-ash hover:text-bone"
                    }`}
                    href={`#${chapter.id}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1 w-1 ${
                        isActive ? "bg-oxide-bright" : "bg-transparent"
                      }`}
                    />
                    <span className="opacity-50">{chapter.number}</span>
                    <span>{chapter.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          aria-controls="mobile-index"
          aria-expanded={open}
          className="btn px-3 py-2 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          ref={buttonRef}
          type="button"
        >
          {open ? "CLOSE" : "INDEX"}
          {open ? (
            <CloseMark className="h-3 w-3" />
          ) : (
            <MenuMark className="h-3 w-3" />
          )}
        </button>
      </div>

      {open ? (
        <div
          className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-line bg-void lg:hidden"
          id="mobile-index"
          ref={panelRef}
        >
          <nav aria-label="Archive index" className="site-shell py-5">
            <div className="grid grid-cols-2 gap-x-6">
              {mobileIndex.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-baseline justify-between gap-3 border-b border-line py-3 font-mono text-[10px] uppercase tracking-[0.14em] ${
                      isActive ? "text-bone" : "text-ash"
                    }`}
                    href={`#${item.id}`}
                    key={item.id}
                    onClick={() => setOpen(false)}
                  >
                    <span>
                      <span className="mr-3 text-[8px] opacity-50">
                        {item.number}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-3 w-3 shrink-0 opacity-50" />
                  </a>
                );
              })}
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="label">WIZNYU / PERSONAL ARCHIVE 001</p>
              <p className="label">STATUS / ONLINE</p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
