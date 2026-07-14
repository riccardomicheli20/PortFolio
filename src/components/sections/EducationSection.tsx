import { ACCENT, Eyebrow, SectionShell } from "./ui";
import { TiltCard } from "./TiltCard";

export function EducationSection() {
  return (
    <SectionShell id="formazione">
      <Eyebrow>02 · Formazione</Eyebrow>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-5xl">
        Il mio <span style={{ color: ACCENT }}>percorso</span> formativo.
      </h2>

      <div className="mt-2 grid grid-cols-1 gap-2.5 sm:mt-3 sm:grid-cols-2 sm:gap-2.5">
        <TiltCard
          title="Academy Java Back-End"
          tag="ItConsulting"
          badgeTop="2025"
          badgeMain="240H"
        >
          <p>Percorso formativo intensivo · 240 ore</p>
        </TiltCard>

        <TiltCard
          title="Udemy - Java Programming Masterclass (Java 17)"
          tag="Udemy"
          badgeTop="2025"
          badgeMain="80H"
        >
          <p>Corso online (80+ ore)</p>
          <ul className="mt-1.5 space-y-0.5">
            <li>• Fondamenti di Java, OOP, Collections, Lambda, Stream API</li>
            <li>• Gestione eccezioni, file I/O</li>
            <li>• Applicazioni pratiche con esercizi e mini-progetti</li>
          </ul>
        </TiltCard>

        <TiltCard
          title="Diploma di Scuola Superiore"
          tag="ISIS Enrico Mattei"
          badgeTop="2020"
          badgeMain="'25"
        >
          <p>Liceo linguistico · Ladispoli, Italia</p>
        </TiltCard>

        <TiltCard
          title="Corso Spring Development e Architetture a Microservizi"
          tag="ProconsulGroup"
          badgeTop="2025"
          badgeMain="'26"
        >
          <p>Roma, Italia</p>
          <p className="mt-2 italic">
            Campo di studio: Sviluppo e analisi di software e applicazioni
          </p>
        </TiltCard>
      </div>
    </SectionShell>
  );
}
