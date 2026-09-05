"use client";

import { ArrowRight, ArrowUpRight, GitBranch, Network } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { flagshipProjects, type FlagshipProject } from "@/src/data/projects";
import { SectionHeading } from "./section-heading";

const selectedSlugs = [
  "retrieval-reranking",
  "text-to-sql",
  "data-to-text",
  "industrial-failure",
];

const selectedProjects = selectedSlugs.map((slug) => flagshipProjects.find((project) => project.slug === slug)).filter(Boolean) as FlagshipProject[];

function ArchitectureDialog({ project }: { project: FlagshipProject }) {
  return (
    <Dialog>
      <DialogTrigger asChild><button className="project-link project-link--architecture" type="button"><Network aria-hidden="true" size={15} /> Architecture</button></DialogTrigger>
      <DialogContent className="system-dialog">
        <DialogHeader>
          <p className="dialog-eyebrow">Architecture / {project.category}</p>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.solution}</DialogDescription>
        </DialogHeader>
        <div className="dialog-flow" aria-label={`${project.title} architecture`}>
          {project.architecture.map((step, index) => (
            <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < project.architecture.length - 1 && <ArrowRight aria-hidden="true" size={15} />}</div>
          ))}
        </div>
        <div className="dialog-evidence">
          <div><span>Constraint</span><p>{project.matters}</p></div>
          <div><span>Evaluation / outcome</span><p>{project.outcome}</p></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SelectedWork() {
  return (
    <section className="portfolio-section selected-work" id="selected-work" aria-labelledby="selected-work-title">
      <SectionHeading
        index="02"
        eyebrow="Selected engineering work"
        title={<><span id="selected-work-title">Systems built around</span><br />real technical decisions.</>}
        copy="Four distinct non-RAG systems selected for recruiter value: retrieval quality, safe language generation, evidence-backed reporting, and time-series anomaly detection."
      />
      <div className="case-grid">
        {selectedProjects.map((project, index) => (
          <article className={`case-card case-card--${(index % 3) + 1}`} key={project.slug}>
            <div className="case-card__topline"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span className={`status status--${project.status.toLowerCase()}`}>{project.status}</span></div>
            <h3>{project.title}</h3>
            <div className="case-card__story">
              <div><span>Problem</span><p>{project.problem}</p></div>
              <div><span>Engineering decision</span><p>{project.solution}</p></div>
              <div className="case-card__evidence"><span>Evidence</span><p>{project.outcome}</p></div>
            </div>
            <div className="chip-list case-card__stack">{project.technologies.slice(0, 5).map((tool) => <span key={tool}>{tool}</span>)}</div>
            <div className="case-card__actions">
              <ArchitectureDialog project={project} />
              <a className="project-link" href={project.repository} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={15} /> Code <ArrowUpRight aria-hidden="true" size={12} /></a>
              {project.demo && <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">Live system <ArrowUpRight aria-hidden="true" size={12} /></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
