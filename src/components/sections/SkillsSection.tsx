import { ACCENT, Eyebrow, SectionShell } from "./ui";
import { TiltCard } from "./TiltCard";
import { CertificationCard } from "./CertificationCard";

const FRAMEWORKS = [
  "Java SE",
  "Java EE",
  "Spring",
  "Spring Boot",
  "Bootstrap",
  "JavaScript",
  "HTML",
  "CSS",
  "Postman",
  "MySQL",
  "DockerHub",
  "Kubernetes",
  "Hibernate",
  "Kafka",
];

const LANGUAGES = [
  { name: "Italiano", level: "Madrelingua" },
  { name: "Inglese", level: "B2" },
  { name: "Spagnolo", level: "B1" },
  { name: "Francese", level: "B1" },
];

export function SkillsSection() {
  return (
    <SectionShell id="competenze">
      <Eyebrow>03 · Competenze</Eyebrow>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-5xl">
        Framework, linguaggi{" "}
        <span style={{ color: ACCENT }}>e lingue parlate</span>.
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-[1.4fr_1fr]">
        <TiltCard title="Framework e Linguaggi">
          <div className="mt-2 flex flex-wrap gap-2">
            {FRAMEWORKS.map((item) => (
              <span
                key={item}
                className="rounded-none bg-white px-3 py-1.5 text-xs font-bold uppercase text-[#1c8b98]"
              >
                {item}
              </span>
            ))}
          </div>
        </TiltCard>

        <TiltCard title="Lingue">
          <div className="mt-2 space-y-2">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between border-b border-white/30 pb-2 last:border-0 last:pb-0"
              >
                <span className="font-semibold text-white">{lang.name}</span>
                <span className="text-sm font-bold text-white/90">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </TiltCard>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-4">
        <CertificationCard />
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-white/50">
            Certificazioni
          </h3>
          <p className="mt-1.5 max-w-xs text-sm text-white/70">
            Claude Code in Action — Anthropic.
          </p>
          <p className="mt-1 text-xs text-white/40">
            Passa il mouse sulla card per i dettagli
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
