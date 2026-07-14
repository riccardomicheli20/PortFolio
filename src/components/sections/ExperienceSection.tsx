import { ACCENT, Eyebrow, SectionShell } from "./ui";
import { TiltCard } from "./TiltCard";

const STACK = [
  "Spring Boot",
  "MySQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Docker",
  "Kubernetes",
  "Kafka",
  "Postman",
  "SoapUI",
  "Jira",
];

export function ExperienceSection() {
  return (
    <SectionShell id="esperienze">
      <Eyebrow>04 · Esperienze</Eyebrow>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Cosa ho <span style={{ color: ACCENT }}>già costruito</span>.
      </h2>

      <div className="mt-6 max-w-2xl sm:mt-8">
        <TiltCard title="Back-End Developer (Java)" tag="Spring Boot">
          <p>
            Sviluppo back-end su framework Spring Boot, con database MySQL,
            integrazione di interfacce HTML, CSS e Bootstrap,
            containerizzazione con Docker e Kubernetes, messaggistica con
            Kafka, testing e documentazione API con Postman e SoapUI,
            gestione del workflow con Jira.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {STACK.map((item) => (
              <span
                key={item}
                className="bg-white px-2.5 py-1 text-[11px] font-bold uppercase text-[#1c8b98]"
              >
                {item}
              </span>
            ))}
          </div>
        </TiltCard>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/50">
          Riccardo Micheli · Ladispoli, Italia
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="mailto:riccardomicheli20@gmail.com"
            className="text-white/80 transition-colors hover:text-white"
          >
            riccardomicheli20@gmail.com
          </a>
          <a
            href="tel:+393314685074"
            className="text-white/80 transition-colors hover:text-white"
          >
            (+39) 331 468 5074
          </a>
          <a
            href="https://www.linkedin.com/in/riccardo-micheli-ab731b382/"
            target="_blank"
            rel="noreferrer"
            className="link-glow"
            style={{ color: ACCENT }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
