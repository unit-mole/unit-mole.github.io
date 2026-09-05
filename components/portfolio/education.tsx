import { ArrowRight, Award, Check, GraduationCap, MapPin } from "lucide-react";
import { educationJourney } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function EducationFoundation() {
  const progression = [
    ["01", "Engineering systems", "Signals, networks, quantitative reasoning"],
    ["02", "Applied analytics", "Modeling tied to business decisions"],
    ["03", "Graduate data science", "ML, data systems, deep learning, retrieval"],
    ["04", "Professional intelligence", "Validated systems operating in context"],
  ] as const;

  return (
    <section className="portfolio-section education-foundation" id="education" aria-labelledby="education-title">
      <SectionHeading
        index="08"
        eyebrow="Education and foundation"
        title={<><span id="education-title">Quantitative foundation.</span><br />Expanded through systems.</>}
        copy="The progression is more useful than a transcript: quantitative reasoning, data systems, machine learning, language, and retrieval."
      />
      <div className="education-progression" aria-label="Education to professional systems progression">
        {progression.map(([index, label, copy], itemIndex) => <div key={label}><span>{index}</span><strong>{label}</strong><small>{copy}</small>{itemIndex < progression.length - 1 && <ArrowRight aria-hidden="true" size={15} />}</div>)}
      </div>
      <div className="education-grid">
        {educationJourney.map((education, index) => (
          <article className={`education-card${index === 0 ? " education-card--primary" : ""}`} key={education.school}>
            <header className="education-card__header">
              <div className="education-card__identity"><span className="education-monogram">{education.monogram}</span><div><span>{education.period}</span><strong>{education.grade}</strong></div></div>
              <span>{education.context}</span>
            </header>
            <h3>{education.school}</h3>
            <p className="education-card__degree"><GraduationCap aria-hidden="true" size={16} />{education.degree}</p>
            {education.location && <p className="education-card__location"><MapPin aria-hidden="true" size={14} />{education.location}</p>}
            <div className="education-path">
              {education.stages.map((stage, stageIndex) => (
                <div key={stage.label}><span>{String(stageIndex + 1).padStart(2, "0")}</span><strong>{stage.label}</strong><p>{stage.description}</p><div>{stage.methods.map((method) => <small key={method}>{method}</small>)}</div>{stageIndex < education.stages.length - 1 && <ArrowRight aria-hidden="true" size={14} />}</div>
              ))}
            </div>
            {education.bridge && <div className="education-bridge"><span>{education.bridge.label}</span><strong>{education.bridge.title}</strong><p>{education.bridge.detail}</p></div>}
            {education.recognition && (
              <div className="education-recognition">
                <div><Award aria-hidden="true" size={18} /><span>Evidence & recognition</span></div>
                <ul>{education.recognition.map((item) => <li key={item.title}><Check aria-hidden="true" size={13} /><div><strong>{item.title}</strong><span>{item.detail}</span></div></li>)}</ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
