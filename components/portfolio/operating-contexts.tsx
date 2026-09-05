import { ArrowRight, BadgeCheck, BrainCircuit, Braces, CheckCircle2, Database, Layers3, LayoutDashboard, RefreshCw, ShieldCheck, Workflow } from "lucide-react";
import { operatingContexts } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

const architectureIcons = [Database, Braces, Layers3, BrainCircuit, BadgeCheck, LayoutDashboard, RefreshCw];

export function OperatingContexts() {
  return (
    <section className="portfolio-section contexts-section" id="contexts" aria-labelledby="contexts-title">
      <SectionHeading
        index="04"
        eyebrow="Applied in operating contexts"
        title={<><span id="contexts-title">Professional work</span><br />changes the constraint set.</>}
        copy="Industry and research systems must account for confidentiality, uneven error costs, reproducibility, and the people using the output."
      />
      <div className="context-stack">
        {operatingContexts.map((context, contextIndex) => (
          <article className="context-card" key={context.organization}>
            <header className="context-card__header">
              <div><span className="micro-label">Context {String(contextIndex + 1).padStart(2, "0")}</span><h3>{context.organization}</h3><p>{context.role} · {context.period}</p></div>
              <strong>{context.mission}</strong>
            </header>
            <div className="context-metrics" aria-label={`${context.organization} selected impact`}>
              {context.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
            <div className="context-architecture">
              <header className="context-architecture__header">
                <div><span className="micro-label">Public-safe system architecture</span><strong>How evidence moves into action</strong></div>
                <p>{context.relevance}</p>
              </header>
              <div className="context-workstreams">
                <header>
                  <div><Workflow aria-hidden="true" size={17} /><span>Representative system workstreams</span></div>
                  <p>Named at a public-safe level so the engineering logic is visible without exposing protected implementation details.</p>
                </header>
                <div className="context-workstream-list">
                  {context.workstreams.map((workstream, workstreamIndex) => (
                    <article className="context-workstream" key={workstream.name}>
                      <div className="context-workstream__identity">
                        <span>{String(workstreamIndex + 1).padStart(2, "0")} / {workstream.focus}</span>
                        <strong>{workstream.name}</strong>
                        <p>{workstream.purpose}</p>
                      </div>
                      <div className="context-workstream__flow" aria-label={`${workstream.name} system flow`}>
                        {workstream.flow.map((step, stepIndex) => (
                          <div key={step}>
                            <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                            <strong>{step}</strong>
                            {stepIndex < workstream.flow.length - 1 && <ArrowRight aria-hidden="true" size={13} />}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="context-system-map" aria-label={`${context.organization} system architecture`}>
                {context.architecture.map((stage, index) => {
                  const Icon = architectureIcons[index];
                  return (
                    <div className="context-system-node" key={stage.label}>
                      <div className="context-system-node__top"><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" size={16} /></div>
                      <strong>{stage.label}</strong>
                      <p>{stage.detail}</p>
                      {index < context.architecture.length - 1 && <ArrowRight className="context-system-node__arrow" aria-hidden="true" size={15} />}
                    </div>
                  );
                })}
              </div>
              <div className="context-guardrails">
                <div><span>Operating constraints</span><p>{context.challenge}</p></div>
                <div><span>Validation discipline</span><p>{context.validation}</p></div>
              </div>
            </div>
            <footer className="context-card__footer">
              <div className="chip-list">{context.methods.map((method) => <span key={method}>{method}</span>)}</div>
              <p><ShieldCheck aria-hidden="true" size={16} />{context.confidentiality}</p>
            </footer>
          </article>
        ))}
      </div>
      <div className="context-principle"><CheckCircle2 aria-hidden="true" size={20} /><p><strong>Public evidence, private boundaries.</strong> Professional credibility does not require exposing protected data or internal architecture.</p></div>
    </section>
  );
}
