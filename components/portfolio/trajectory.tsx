import { ArrowRight, Check } from "lucide-react";
import { technicalExperience } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ProfessionalTrajectory() {
  return (
    <section className="portfolio-section trajectory-section" id="trajectory" aria-labelledby="trajectory-title">
      <SectionHeading
        index="07"
        eyebrow="Professional trajectory"
        title={<><span id="trajectory-title">Career progression:</span><br />operations to applied AI.</>}
        copy="The path is deliberate: network operations built systems discipline, business analytics added decision context, research deepened model rigor, and industry work brought those layers together."
      />
      <div className="trajectory-list">
        {technicalExperience.map((experience, index) => (
          <article key={experience.organization} className="trajectory-item">
            <div className="trajectory-item__index"><span>{String(index + 1).padStart(2, "0")}</span>{index < technicalExperience.length - 1 && <ArrowRight aria-hidden="true" size={15} />}</div>
            <div className="trajectory-item__identity"><p>{experience.period}</p><h3>{experience.role}</h3><strong>{experience.organization}</strong><span>{experience.location}</span></div>
            <div className="trajectory-item__body"><p>{experience.mission}</p><ul>{experience.contributions.map((contribution) => <li key={contribution}><Check aria-hidden="true" size={14} />{contribution}</li>)}</ul><div className="chip-list">{experience.methods.map((method) => <span key={method}>{method}</span>)}</div></div>
          </article>
        ))}
      </div>
    </section>
  );
}
