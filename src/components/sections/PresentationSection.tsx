import { ACCENT, Eyebrow, SectionShell, scrollToSection } from "./ui";
import { FancyButton } from "./FancyButton";

const STATS = [
  { value: "1+", label: "anno di esperienza" },
  { value: "4", label: "percorsi formativi" },
  { value: "14+", label: "tecnologie" },
  { value: "3", label: "lingue straniere" },
];

export function PresentationSection() {
  return (
    <SectionShell id="presentazione">
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-16">
        <div>
          <Eyebrow>01 · Presentazione</Eyebrow>
          <h1 className="text-[11vw] font-semibold leading-[1.03] tracking-tight text-white sm:text-4xl lg:text-7xl">
            Riccardo Micheli.
            <br />
            <span style={{ color: ACCENT }}>Java Back-End Developer.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-4 lg:text-lg">
            Sono un developer con un anno di esperienza nel settore, con una
            forte passione per la programmazione e la tecnologia. Il mio
            obiettivo è crescere professionalmente, approfondendo
            costantemente le mie conoscenze attraverso impegno, curiosità e
            dedizione.
          </p>

          <div className="mt-3 flex flex-wrap gap-2.5 sm:mt-4">
            <button
              type="button"
              onClick={() => scrollToSection(1)}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-6 sm:py-3"
              style={{ background: ACCENT }}
            >
              Scopri il percorso
            </button>
            <FancyButton
              href="mailto:riccardomicheli20@gmail.com"
              className="px-5 py-2.5 text-sm sm:px-6 sm:py-3"
            >
              Contattami
            </FancyButton>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-semibold sm:text-4xl"
                  style={{ color: ACCENT }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/60 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[220px] sm:max-w-none">
          <div
            className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl"
            style={{ background: `${ACCENT}22` }}
          />
          <img
            src="/images/riccardo-hero.png"
            alt="Riccardo Micheli"
            className="w-full rounded-[2rem] object-cover"
          />
        </div>
      </div>
    </SectionShell>
  );
}
