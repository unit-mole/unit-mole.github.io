"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleDot } from "lucide-react";
import { systemLifecycle } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function SystemLifecycle() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = systemLifecycle[activeIndex];

  return (
    <section className="portfolio-section lifecycle-section" id="systems" aria-labelledby="systems-title">
      <SectionHeading
        index="05"
        eyebrow="Reliability checklist"
        title={<><span id="systems-title">What makes an ML solution</span><br />reliable in practice.</>}
        copy="Training a model is only step three. This interactive checklist shows the data, evaluation, integration, and user-facing gates required before a model can be trusted in a real workflow."
      />
      <div className="lifecycle-visual">
        <div className="lifecycle-track" aria-label="Machine learning system lifecycle">
          {systemLifecycle.map((stage, index) => (
            <button className={`lifecycle-node${activeIndex === index ? " is-active" : ""}`} key={stage.label} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage.label}</strong>
              <small><Check aria-hidden="true" size={12} />{stage.gate}</small>
              {index < systemLifecycle.length - 1 && <ArrowRight aria-hidden="true" size={14} />}
            </button>
          ))}
        </div>
        <article className="lifecycle-detail" aria-live="polite">
          <div><CircleDot aria-hidden="true" size={17} /><span>Active layer · {String(activeIndex + 1).padStart(2, "0")}</span></div>
          <h3>{active.label}</h3>
          <p>{active.detail}</p>
          <strong>Gate: {active.gate}</strong>
        </article>
      </div>
      <div className="proof-standard">
        {[
          ["Leakage", "Can the split reproduce the real decision boundary?"],
          ["Imbalance", "Which classes or cases absorb the errors?"],
          ["Confidence", "When should the system abstain or route to review?"],
          ["Reproducibility", "Can the same artifact produce the measured behavior?"],
          ["Consumption", "Does the output expose evidence and limitations?"],
        ].map(([label, copy]) => <div key={label}><span>{label}</span><p>{copy}</p></div>)}
      </div>
    </section>
  );
}
