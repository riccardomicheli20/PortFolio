import { Hero } from "./Hero";
import { ContentSections } from "./ContentSections";

const PANEL_COUNT = 4;

export function Site() {
  return (
    <div
      id="scroll-spacer"
      className="relative select-none bg-black lg:cursor-none"
      style={{ height: `${(PANEL_COUNT + 1) * 100}vh` }}
    >
      <Hero />
      <ContentSections />
    </div>
  );
}
