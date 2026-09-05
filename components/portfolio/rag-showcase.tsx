"use client";

import { ArrowRight, ArrowUpRight, GitBranch, Network, Play, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ragProjects, type RagProject } from "@/src/data/projects";
import { SectionHeading } from "./section-heading";

function RagArchitectureDialog({ project }: { project: RagProject }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rag-action rag-action--architecture" type="button">
          <Network aria-hidden="true" size={15} /> Architecture
        </button>
      </DialogTrigger>
      <DialogContent className="system-dialog rag-dialog">
        <DialogHeader>
          <p className="dialog-eyebrow">Agentic RAG architecture / {project.domain}</p>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.objective}</DialogDescription>
        </DialogHeader>
        <div className="dialog-flow rag-dialog__flow" aria-label={`${project.title} architecture`}>
          {project.architecture.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < project.architecture.length - 1 && <ArrowRight aria-hidden="true" size={15} />}
            </div>
          ))}
        </div>
        <div className="dialog-evidence">
          <div><span>Business need</span><p>{project.businessNeed}</p></div>
          <div><span>Safety boundary</span><p>{project.guardrail}</p></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function RagShowcase() {
  return (
    <section className="portfolio-section rag-showcase" id="rag-systems" aria-labelledby="rag-systems-title">
      <SectionHeading
        index="01"
        eyebrow="Flagship agentic RAG"
        title={<><span id="rag-systems-title">Four systems.</span><br />Four consequential questions.</>}
        copy="A dedicated portfolio of retrieval, tools, graphs, verification, and human control—built for industrial reliability, software engineering, financial research, and portfolio intelligence."
      />

      <div className="rag-principles" aria-label="Shared RAG engineering principles">
        <div><span>01</span><strong>Retrieve</strong><small>Hybrid evidence, not prompt-only answers</small></div>
        <div><span>02</span><strong>Reason</strong><small>Bounded tools and domain-specific routes</small></div>
        <div><span>03</span><strong>Verify</strong><small>Citations, numbers, tests, and provenance</small></div>
        <div><span>04</span><strong>Decide</strong><small>Explicit limits and human review</small></div>
      </div>

      <div className="rag-project-grid">
        {ragProjects.map((project, index) => (
          <article className={`rag-project-card rag-project-card--${index + 1}`} key={project.slug}>
            <header className="rag-project-card__header">
              <div><span>{String(index + 1).padStart(2, "0")}</span><p>{project.domain}</p></div>
              <span className="rag-status"><i aria-hidden="true" />Deployed</span>
            </header>

            <div className="rag-project-card__title">
              <p>{project.shortName}</p>
              <h3>{project.title}</h3>
            </div>

            <div className="rag-project-card__brief">
              <div><span>Business need</span><p>{project.businessNeed}</p></div>
              <div><span>System objective</span><p>{project.objective}</p></div>
            </div>

            <div className="rag-project-card__metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
              ))}
            </div>

            <div className="rag-project-card__architecture">
              <div className="rag-project-card__architecture-label"><Network aria-hidden="true" size={15} /><span>System architecture</span></div>
              <div className="rag-flow">
                {project.architecture.map((step, stepIndex) => (
                  <div key={step}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                    {stepIndex < project.architecture.length - 1 && <ArrowRight aria-hidden="true" size={13} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="rag-project-card__skills">
              <span>Key skills</span>
              <div>{project.technologies.map((skill) => <small key={skill}>{skill}</small>)}</div>
            </div>

            <div className="rag-project-card__actions">
              <RagArchitectureDialog project={project} />
              <a className="rag-action" href={project.demo} target="_blank" rel="noreferrer"><Play aria-hidden="true" size={14} /> Live system <ArrowUpRight aria-hidden="true" size={12} /></a>
              <a className="rag-action" href={project.repository} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={14} /> GitHub <ArrowUpRight aria-hidden="true" size={12} /></a>
            </div>

            <p className="rag-project-card__guardrail"><ShieldCheck aria-hidden="true" size={14} />{project.guardrail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
