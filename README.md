# Anmol Tripathi — AI/ML Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20portfolio-unit--mole.github.io-0f766e?logo=githubpages&logoColor=white)](https://unit-mole.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222222?logo=github)](https://unit-mole.github.io/)
[![Build and Deploy](https://github.com/unit-mole/unit-mole.github.io/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/unit-mole/unit-mole.github.io/actions/workflows/deploy-pages.yml)
[![Node](https://img.shields.io/badge/Node.js-22%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)

A portfolio website for **Anmol Tripathi**, an AI/ML engineer focused on taking data from reliable inputs to evaluated models and decision-ready systems. The site presents a curated, evidence-led view of agentic RAG, machine learning, deep learning, NLP, multimodal AI, data quality, and production-oriented engineering work.

**Live portfolio:** [unit-mole.github.io](https://unit-mole.github.io/)  
**GitHub profile:** [github.com/unit-mole](https://github.com/unit-mole)  
**Repository:** [unit-mole/unit-mole.github.io](https://github.com/unit-mole/unit-mole.github.io)

> This is a public professional portfolio. It contains only public project material and does not expose confidential employer data, systems, credentials, or internal decision logic.

---

## Portfolio Objective

The portfolio is designed to answer the questions a technical recruiter, hiring manager, or engineering collaborator should be able to answer quickly:

1. What kinds of AI/ML systems has Anmol built?
2. Which projects demonstrate agentic RAG and retrieval engineering depth?
3. What business need did each selected project address?
4. What architecture, tools, evaluation practices, and delivery choices were used?
5. Where can the implementation and live demonstration be reviewed?

The site leads with four agentic RAG systems, follows with four distinct non-RAG technical systems, and then provides an interactive catalog of the remaining public implementations without duplicating featured projects.

---

## Project Pattern

| Item | Implementation |
|---|---|
| Application | Public AI/ML engineering portfolio |
| Primary purpose | Present technical scope, system thinking, and verifiable project evidence |
| Featured focus | Agentic RAG, retrieval, applied ML, deep learning, NLP, multimodal AI |
| Project evidence | Architecture, business need, approach, skills, code, and live-system links |
| Repository | GitHub |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Front end | React 19 + TypeScript |
| Build system | Vite / Vinext |
| Styling | Tailwind CSS + component primitives |
| Quality gates | ESLint, production build, Node test suite |
| Default catalog view | Transformer & Multimodal AI |

---

## Featured Agentic RAG Systems

These four projects are presented as the portfolio’s lead systems because they demonstrate end-to-end retrieval architecture, evidence handling, agent/tool design, evaluation, and usable delivery surfaces.

| System | Business need | Engineering focus | Code | Live system |
|---|---|---|---|---|
| **ReliabilityOps** | Investigate industrial reliability signals and support evidence-grounded root-cause analysis. | Agentic RAG, evidence routing, structured investigation workflow, source-grounded responses. | [Repository](https://github.com/unit-mole/reliabilityops-agentic-rag) | [Open demo](https://huggingface.co/spaces/anmol-unitmole/reliabilityops-agentic-rag) |
| **RepoAtlas** | Help developers understand unfamiliar repositories and make safer, code-informed decisions. | Repository intelligence, agentic retrieval, architecture-aware context, code exploration. | [Repository](https://github.com/unit-mole/repoatlas-agentic-rag) | [Open demo](https://huggingface.co/spaces/anmol-unitmole/repoatlas-agentic-rag) |
| **FilingsGraph** | Support temporal financial due diligence across filings, structured facts, risks, and cited evidence. | Agentic RAG, hybrid retrieval, temporal graph reasoning, deterministic financial tools, claim-level verification. | [Repository](https://github.com/unit-mole/filingsgraph-agentic-rag) | [Open demo](https://huggingface.co/spaces/anmol-unitmole/filingsgraph-agentic-rag) |
| **AI Portfolio RAG Assistant** | Let visitors ask grounded questions about the portfolio and its underlying project evidence. | Retrieval-augmented portfolio assistant, source-aware answering, user-facing AI interaction. | [Repository](https://github.com/unit-mole/transformer-projects/tree/main/10-ai-portfolio-rag-assistant) | [Open demo](https://10-ai-portfolio-rag-assistant.vercel.app/#assistant) |

Each project card links directly to its architecture, implementation, relevant skills, business context, code repository, and live system where available.

---

## Selected Non-RAG Systems

The second featured area deliberately excludes RAG projects. It demonstrates complementary AI/ML system design across ranking, natural-language interfaces, reporting, and industrial reliability.

| System | Business need | Technical approach |
|---|---|---|
| **Cross-Encoder + Bi-Encoder Ranking** | Improve relevance ranking when efficient candidate retrieval alone is not sufficient. | Two-stage retrieval and reranking, representation learning, relevance evaluation. |
| **Schema-Aware Text-to-SQL** | Translate business questions into safer, schema-conscious data access. | Natural-language-to-SQL workflow, schema context, validation-oriented query generation. |
| **Data-to-Text Executive Reporting** | Turn analytical outputs into usable reporting for decision-makers. | Structured inputs, natural-language generation, clarity and reporting workflow design. |
| **Industrial Failure Detection** | Detect meaningful reliability patterns in industrial signals. | Data quality, predictive modelling, anomaly/failure-oriented analysis, evaluation. |

---

## Technical Coverage

The interactive **Breadth, organized as technical progression** section provides an architecture-led view of the remaining public work. It begins with **Transformer & Multimodal AI** by default and lets visitors explore the broader project collections.

| Collection | Areas represented |
|---|---|
| Applied Data Science & Machine Learning | Statistics, predictive modelling, validation, segmentation, forecasting |
| ANN Deep Learning | Neural-network fundamentals and model development |
| Simple RNN | Sequential modelling foundations |
| LSTM Systems | Long-context sequence learning |
| Bidirectional LSTM | Forward/backward contextual sequence modelling |
| CNN & Computer Vision | Visual representation learning and image-focused systems |
| Encoder–Decoder | Sequence-to-sequence architectures |
| Transformer & Multimodal AI | Attention-based models, language systems, multimodal workflows |
| Cricket Intelligence | Domain-focused analytics and decision-support work |

For every catalog project, the portfolio emphasizes the information that matters: business requirement, technical approach, architecture, skills, implementation link, and live demo when one is available.

---

## Site Experience

- Light, professional visual system with accessible contrast and responsive layouts.
- Prominent portrait and resume download for a complete professional profile.
- Clear separation between featured RAG work, selected technical systems, and the broader project catalog.
- Architecture, live-demo, and GitHub links attached to project information rather than hidden behind generic project lists.
- Career context across industry, research, education, awards, and technical progression.
- No confidential work content or private credentials in the public build.

---

## High-Level Architecture

```text
Public project evidence + professional profile
                 │
                 ▼
        Typed portfolio data layer
                 │
                 ▼
 React / TypeScript interactive experience
  ├─ Hero and professional positioning
  ├─ Agentic RAG showcase
  ├─ Selected non-RAG systems
  ├─ Interactive technical-progression catalog
  └─ Journey, education, resume, and contact links
                 │
                 ▼
 Vite static production build (dist/client)
                 │
                 ▼
 GitHub Actions quality gates + GitHub Pages
                 │
                 ▼
       https://unit-mole.github.io/
```

---

## Tools and Technologies

| Area | Technology |
|---|---|
| Language | TypeScript |
| UI | React 19 |
| Build / local development | Vite and Vinext |
| Styling | Tailwind CSS |
| UI primitives | Radix UI / shadcn-style components |
| Icons | Lucide |
| Testing | Node test runner |
| Linting | ESLint |
| Automation | GitHub Actions |
| Deployment | GitHub Pages |

---

## Repository Structure

```text
.
├── .github/workflows/        # GitHub Pages build and deployment workflow
├── public/                   # Portrait, resume, and other static assets
├── scripts/                  # Build and CI helper scripts
├── src/
│   ├── components/           # Reusable UI components
│   ├── data/                 # Portfolio content, project and profile data
│   ├── pages/                # Page-level views
│   └── styles/               # Global visual system
├── tests/                    # Automated checks
├── package.json              # Commands and dependencies
└── vite.config.*             # Static build configuration
```

---

## Run Locally

### Prerequisites

- Git
- Node.js **22.13 or later**
- npm

### Installation and development

```bash
git clone https://github.com/unit-mole/unit-mole.github.io.git
cd unit-mole.github.io
npm ci
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`. Open that address in a browser.

### Production build and verification

```bash
npm run lint
npm run build
npm run test
```

The static production output is generated in `dist/client`.

---

## Update Portfolio Content

Most public profile and project content is maintained in the typed data files under `src/data/`.

Typical updates include:

1. Add or revise a public project’s business need, approach, architecture, skills, code URL, and demo URL.
2. Update the featured RAG or selected-system collections without duplicating projects in the catalog.
3. Replace public assets in `public/` only when the related data reference is updated.
4. Run lint, build, and tests before committing.

Do not add confidential employer data, private documents, tokens, passwords, or API keys to this repository.

---

## Deployment to GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

On every push to `main`, the workflow:

1. Installs the locked dependencies with `npm ci`.
2. Runs ESLint.
3. Builds the static portfolio.
4. Runs the test suite.
5. Uploads `dist/client` and deploys it to GitHub Pages.

The deployed site is available at [https://unit-mole.github.io/](https://unit-mole.github.io/). Check the repository’s **Actions** tab if a deployment needs review.

---

## Responsible Portfolio Use

This website is intended for professional evaluation and collaboration. Project descriptions are concise engineering summaries; each linked repository remains the source of truth for project-specific datasets, evaluation results, limitations, requirements, and licensing.

---

## Contact

- Portfolio: [unit-mole.github.io](https://unit-mole.github.io/)
- GitHub: [@unit-mole](https://github.com/unit-mole)
- LinkedIn: [Anmol Tripathi](https://www.linkedin.com/in/anmol-tripathi-60311917a/)

