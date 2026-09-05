"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, GitBranch, Network, Play, Target, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCount, projectGroups, type LibraryProject, type ProjectGroup } from "@/src/data/projects";
import { SectionHeading } from "./section-heading";

const progression = [
  ["01", "Analytics", "Evidence & inference"],
  ["02", "Machine learning", "Prediction & validation"],
  ["03", "Deep learning", "Learned representations"],
  ["04", "Language & vision", "Sequence + multimodal systems"],
  ["05", "Applied AI", "Governed decision systems"],
] as const;

const focusRules: Array<[RegExp, string]> = [
  [/forecast|price prediction|consumption|traffic|weather|time-series/i, "Forecasting"],
  [/segmentation/i, "Segmentation"],
  [/retrieval|search|matching|ranking/i, "Retrieval"],
  [/generation|summarization|translation|caption|grammar|report/i, "Generation"],
  [/anomaly|failure|fraud/i, "Anomaly & risk"],
  [/clustering|RFM|PCA/i, "Representation & clustering"],
  [/optimization|pricing/i, "Optimization"],
  [/simulation|IPL|World Cup/i, "Simulation"],
  [/statistical|ANOVA|inference/i, "Statistical inference"],
  [/image|vision|object detection|digit/i, "Computer vision"],
  [/classification|detection|risk|spam|sentiment|churn|propensity/i, "Classification"],
];

function projectFocus(title: string, summary: string) {
  const signal = `${title} ${summary}`;
  return focusRules.find(([pattern]) => pattern.test(signal))?.[1] ?? "Applied modeling";
}

const narratives: Record<string, { businessNeed: string; approach: string; architecture: string[] }> = {
  Forecasting: {
    businessNeed: "Convert ordered historical signals into a defensible forward estimate for planning, monitoring, or resource decisions.",
    approach: "Create leakage-safe temporal features, compare sequence or statistical baselines, and evaluate on future-held-out periods.",
    architecture: ["Historical signals", "Time-aware split", "Sequence features", "Forecast model", "Backtest + decision view"],
  },
  Segmentation: {
    businessNeed: "Identify meaningful regions or customer groups at a finer level than a single overall label.",
    approach: "Prepare spatial or behavioral representations, learn segment boundaries, and evaluate stability or overlap with task-specific metrics.",
    architecture: ["Raw observations", "Representation", "Segment model", "Quality metrics", "Interpretable segments"],
  },
  Retrieval: {
    businessNeed: "Find the most relevant item quickly when exact wording, scale, or ranking quality makes simple search insufficient.",
    approach: "Build comparable representations, rank candidates, and validate the order with retrieval metrics and error inspection.",
    architecture: ["Query + corpus", "Representations", "Candidate scoring", "Ranked results", "Retrieval evaluation"],
  },
  Generation: {
    businessNeed: "Transform one information form into useful language or structured output while controlling unsupported content.",
    approach: "Prepare aligned inputs and targets, apply a sequence generation model, and evaluate output quality, constraints, and failure cases.",
    architecture: ["Source input", "Tokenization", "Generation model", "Output controls", "Evaluation + interface"],
  },
  "Anomaly & risk": {
    businessNeed: "Surface unusual, high-risk, or failure-like behavior early enough for focused review and intervention.",
    approach: "Create reliable features or sequence windows, compare risk models, tune thresholds, and evaluate minority-event behavior.",
    architecture: ["Events or signals", "Validated features", "Risk model", "Thresholding", "Alert + error review"],
  },
  "Representation & clustering": {
    businessNeed: "Reveal useful structure in high-dimensional or unlabeled data for targeting, explanation, or downstream analysis.",
    approach: "Engineer stable features, compare representation or clustering choices, and inspect separation, stability, and business meaning.",
    architecture: ["Raw attributes", "Feature scaling", "Representation", "Grouping", "Profile + validation"],
  },
  Optimization: {
    businessNeed: "Choose an action that balances predicted response with practical limits, cost, or business constraints.",
    approach: "Estimate the response surface, encode constraints, compare candidate actions, and expose the trade-off behind the recommendation.",
    architecture: ["Decision inputs", "Response model", "Constraints", "Optimization", "Recommended action"],
  },
  Simulation: {
    businessNeed: "Evaluate uncertain outcomes across many plausible scenarios instead of relying on one deterministic prediction.",
    approach: "Build point-in-time inputs, calibrate probabilities, simulate repeated outcomes, and summarize distributions and limitations.",
    architecture: ["Historical evidence", "Calibrated model", "Scenario engine", "Repeated simulation", "Outcome distribution"],
  },
  "Statistical inference": {
    businessNeed: "Separate meaningful effects from random variation so decisions are supported by transparent statistical evidence.",
    approach: "Validate assumptions, select the appropriate test, quantify uncertainty, and translate the result into a decision context.",
    architecture: ["Decision question", "Validated sample", "Statistical test", "Uncertainty", "Decision evidence"],
  },
  "Computer vision": {
    businessNeed: "Extract useful labels, locations, or visual patterns from images in a reproducible inference workflow.",
    approach: "Standardize image inputs, compare task-appropriate architectures, evaluate class or spatial performance, and package inference.",
    architecture: ["Image input", "Preprocessing", "Vision model", "Prediction", "Metrics + live inference"],
  },
  Classification: {
    businessNeed: "Assign consistent categories or risk levels so a downstream process can prioritize the right cases.",
    approach: "Create validated features, compare classifiers, address imbalance, and assess class-level errors—not accuracy alone.",
    architecture: ["Labeled records", "Features", "Classifier", "Probability + threshold", "Class-level evaluation"],
  },
  "Applied modeling": {
    businessNeed: "Turn a defined data problem into reproducible analytical evidence and a usable technical output.",
    approach: "Validate data, establish a baseline, implement the selected method, and evaluate results against the intended decision.",
    architecture: ["Business question", "Validated data", "Modeling pipeline", "Evaluation", "Decision-ready output"],
  },
};

function projectNarrative(project: LibraryProject) {
  const focus = projectFocus(project.title, project.summary);
  return { focus, ...narratives[focus] };
}

function ArchitectureDialog({ project, narrative }: { project: LibraryProject; narrative: ReturnType<typeof projectNarrative> }) {
  return (
    <Dialog>
      <DialogTrigger asChild><button className="atlas-action atlas-action--architecture" type="button"><Network aria-hidden="true" size={15} /> Architecture</button></DialogTrigger>
      <DialogContent className="system-dialog">
        <DialogHeader>
          <p className="dialog-eyebrow">Project architecture / {narrative.focus}</p>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{narrative.approach}</DialogDescription>
        </DialogHeader>
        <div className="dialog-flow" aria-label={`${project.title} architecture`}>
          {narrative.architecture.map((step, index) => (
            <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < narrative.architecture.length - 1 && <ArrowRight aria-hidden="true" size={15} />}</div>
          ))}
        </div>
        <div className="dialog-evidence">
          <div><span>Business requirement</span><p>{narrative.businessNeed}</p></div>
          <div><span>Project scope</span><p>{project.summary}</p></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProjectAtlas({ group }: { group: ProjectGroup }) {
  const [selectedPath, setSelectedPath] = useState(group.projects[0]?.path ?? "");
  const project = group.projects.find((item) => item.path === selectedPath) ?? group.projects[0];
  if (!project) return null;

  const narrative = projectNarrative(project);
  const skills = [...new Set([narrative.focus, ...group.methods])].slice(0, 6);
  const repository = `${group.repository}/tree/main/${project.path}`;

  return (
    <div className="project-atlas">
      <aside className="project-atlas__index" aria-label={`${group.name} projects`}>
        <div className="project-atlas__index-label"><span>Project index</span><strong>{group.projects.length} unique systems</strong></div>
        <div className="project-atlas__index-list">
          {group.projects.map((item, index) => {
            const active = item.path === project.path;
            return (
              <button key={item.path} type="button" onClick={() => setSelectedPath(item.path)} className={active ? "is-active" : ""} aria-pressed={active}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{projectFocus(item.title, item.summary)}</small>
                <ArrowRight aria-hidden="true" size={14} />
              </button>
            );
          })}
        </div>
      </aside>

      <article className="project-atlas__detail" aria-live="polite">
        <header>
          <div><span className="micro-label">Selected project · {narrative.focus}</span><h4>{project.title}</h4></div>
          <span className="project-atlas__demo-status"><i aria-hidden="true" />{project.demo ? "Live demo available" : "Repository project"}</span>
        </header>

        <p className="project-atlas__summary">{project.summary}</p>

        <div className="project-atlas__brief">
          <div><Target aria-hidden="true" size={17} /><span>Business requirement</span><p>{narrative.businessNeed}</p></div>
          <div><Wrench aria-hidden="true" size={17} /><span>Engineering approach</span><p>{narrative.approach}</p></div>
        </div>

        <div className="project-atlas__architecture">
          <span>Architecture at a glance</span>
          <div>
            {narrative.architecture.map((step, index) => (
              <div key={step}><small>{String(index + 1).padStart(2, "0")}</small><strong>{step}</strong>{index < narrative.architecture.length - 1 && <ArrowRight aria-hidden="true" size={13} />}</div>
            ))}
          </div>
        </div>

        <div className="project-atlas__skills"><span>Skills used</span><div>{skills.map((skill) => <small key={skill}>{skill}</small>)}</div></div>

        <div className="project-atlas__actions">
          <ArchitectureDialog project={project} narrative={narrative} />
          {project.demo ? (
            <a className="atlas-action" href={project.demo} target="_blank" rel="noreferrer"><Play aria-hidden="true" size={14} /> Live demo <ArrowUpRight aria-hidden="true" size={12} /></a>
          ) : (
            <span className="atlas-action is-disabled" aria-disabled="true"><Play aria-hidden="true" size={14} /> No public demo</span>
          )}
          <a className="atlas-action" href={repository} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={14} /> GitHub <ArrowUpRight aria-hidden="true" size={12} /></a>
        </div>
      </article>
    </div>
  );
}

export function ProjectCatalog() {
  const defaultGroup = "Transformer & Multimodal AI";
  return (
    <section className="portfolio-section catalog-section" id="catalog" aria-labelledby="catalog-title">
      <SectionHeading
        index="06"
        eyebrow="Interactive engineering atlas"
        title={<><span id="catalog-title">Breadth, organized</span><br />as technical progression.</>}
        copy={`${projectCount} additional public implementations remain after removing every project already featured above. Select a collection, then choose a project to inspect its business need, approach, architecture, skills, live demo, and code.`}
      />
      <div className="catalog-progression" aria-label="Technical capability progression">
        {progression.map(([index, label, detail]) => <div key={label}><span>{index}</span><strong>{label}</strong><small>{detail}</small></div>)}
      </div>
      <Tabs defaultValue={defaultGroup} className="catalog-tabs">
        <TabsList variant="line" className="catalog-tab-list" aria-label="Project collections">
          {projectGroups.map((group) => <TabsTrigger value={group.name} key={group.name}>{group.name}<span>{String(group.projects.length).padStart(2, "0")}</span></TabsTrigger>)}
        </TabsList>
        {projectGroups.map((group) => (
          <TabsContent value={group.name} key={group.name} className="catalog-panel">
            <header className="catalog-panel__header">
              <div><span className="micro-label">Stage {group.stage} · {group.capability}</span><h3>{group.name}</h3><p>{group.description}</p><div className="catalog-panel__methods">{group.methods.map((method) => <span key={method}>{method}</span>)}</div></div>
              <a href={group.repository} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={16} /> Open collection <ArrowUpRight aria-hidden="true" size={13} /></a>
            </header>
            <ProjectAtlas group={group} />
          </TabsContent>
        ))}
      </Tabs>
      <div className="catalog-github-cta"><div><span>Complete public engineering record</span><strong>Explore repositories, evaluation evidence, deployment notes, and project history.</strong></div><a href="https://github.com/unit-mole?tab=repositories" target="_blank" rel="noreferrer">View all GitHub repositories <ArrowUpRight aria-hidden="true" size={15} /></a></div>
    </section>
  );
}
