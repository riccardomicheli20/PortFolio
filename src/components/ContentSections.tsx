import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PresentationSection } from "./sections/PresentationSection";
import { EducationSection } from "./sections/EducationSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ExperienceSection } from "./sections/ExperienceSection";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { Component: PresentationSection, z: 10 },
  { Component: EducationSection, z: 20 },
  { Component: SkillsSection, z: 30 },
  { Component: ExperienceSection, z: 40 },
];

export function ContentSections() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const triggers = panelRefs.current.map((panel, i) => {
      if (!panel) return null;
      gsap.set(panel, { yPercent: 100 });
      return gsap.to(panel, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll-spacer",
          start: () => `${i * window.innerHeight}px top`,
          end: () => `${(i + 1) * window.innerHeight}px top`,
          scrub: true,
        },
      }).scrollTrigger;
    });

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, []);

  return (
    <>
      {PANELS.map(({ Component, z }, i) => (
        <div
          key={i}
          ref={(el) => {
            panelRefs.current[i] = el;
          }}
          className="fixed inset-0 will-change-transform"
          style={{ zIndex: z }}
        >
          <Component />
        </div>
      ))}
    </>
  );
}
