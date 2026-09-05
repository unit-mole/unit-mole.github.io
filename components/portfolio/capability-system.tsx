"use client";

import { useState } from "react";
import { ArrowRight, Check, Database, Gauge, Layers3, LineChart, Network, PackageCheck, ScanSearch } from "lucide-react";
import { capabilityStages } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

const icons = [Database, ScanSearch, LineChart, Layers3, Gauge, PackageCheck, Network];

export function CapabilitySystem() {
  const [activeId, setActiveId] = useState(capabilityStages[0].id);
  const active = capabilityStages.find((stage) => stage.id === activeId) ?? capabilityStages[0];

  return (
    <section className="portfolio-section practice-section" id="practice" aria-labelledby="practice-title">
      <SectionHeading
        index="03"
        eyebrow="End-to-end AI workflow"
        title={<><span id="practice-title">From raw data</span><br />to a working AI system.</>}
        copy="This interactive section shows my full workflow in seven steps: find the evidence, verify it, analyze it, build and test the model, integrate the result, and support a real decision. Select a step to see the tools and proof behind it."
      />
      <div className="practice-shell">
        <div className="practice-rail" aria-label="Connected AI engineering workflow">
          {capabilityStages.map((stage, index) => {
            const Icon = icons[index];
            const selected = active.id === stage.id;
            return (
              <button key={stage.id} className={`practice-node${selected ? " is-active" : ""}`} type="button" onClick={() => setActiveId(stage.id)} aria-pressed={selected}>
                <span className="practice-node__index">{stage.index}</span>
                <Icon aria-hidden="true" size={18} />
                <strong>{stage.label}</strong>
                <small>{stage.question}</small>
                {index < capabilityStages.length - 1 && <ArrowRight className="practice-node__arrow" aria-hidden="true" size={15} />}
              </button>
            );
          })}
        </div>
        <article className="practice-detail" aria-live="polite">
          <div className="practice-detail__topline"><span>{active.index} / Selected layer</span><span>evidence → decision</span></div>
          <h3>{active.label}</h3>
          <p className="practice-detail__question">{active.question}</p>
          <p className="practice-detail__thesis">{active.thesis}</p>
          <div className="practice-detail__columns">
            <div><span className="micro-label">Methods & tools</span><div className="chip-list">{active.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
            <div><span className="micro-label">Evidence in practice</span><ul>{active.evidence.map((item) => <li key={item}><Check aria-hidden="true" size={14} />{item}</li>)}</ul></div>
          </div>
        </article>
      </div>
    </section>
  );
}
