# Anmol Tripathi — Engineering Portfolio

A production-ready portfolio for Anmol Tripathi, a Data Scientist and Machine Learning Engineer working across applied AI, NLP, deep learning, predictive modeling, evaluation, analytics, and decision systems.

The site is structured for three audiences:

1. recruiters can understand positioning and current scope in under 30 seconds;
2. hiring managers can inspect selected systems, professional contexts, and engineering decisions;
3. technical reviewers can open architecture flows, evaluation evidence, live demos, and source repositories.

## Experience included

- a portrait-led first viewport with a deliberately separated Data → Models → Systems → Decisions positioning unit;
- a dedicated four-project Agentic RAG showcase covering ReliabilityOps, RepoAtlas, FilingsGraph, and the AI Portfolio RAG Assistant, with business need, objective, measured evidence, architecture, skills, code, and live-system access;
- four distinct non-RAG flagship case studies with problem, engineering decision, evidence, stack, architecture, repository, and demo access;
- an interactive seven-stage workflow explaining how raw data becomes a working AI system;
- public-safe operating-context stories, named professional workstreams, selected impact metrics, and seven-stage system architecture maps for Hach Company, the University of Arizona College of Nursing, and Orange Business Services;
- visible Hach system flows for GCS classification, FailureMode-dependent downstream modeling, recurring operational analytics, and grounded knowledge support without exposing protected implementation details;
- an interactive reliability checklist covering the data, evaluation, integration, and user-facing gates around a model;
- an interactive category-first project atlas covering 66 additional non-repeating implementations, with a selectable project index, business requirement, engineering approach, architecture, skills, live-demo status, and direct GitHub access;
- a professional trajectory spanning network operations, retail analytics and leadership, research ML, and industry AI;
- a unified education system showing intellectual progression, applied research, technical foundations, grades, scholarships, and verified recognition across all three institutions;
- professional SEO, Open Graph metadata, accessibility, reduced-motion support, and responsive layouts;
- static GitHub Pages deployment plus compatibility with Vercel and a future custom domain.

The four featured RAG systems and four selected non-RAG systems are removed from the lower project atlas, so the same project is never presented twice. The University of Arizona BookStores role is included because it adds verified business analytics, inventory planning, promotion, and team-leadership evidence.

## Technology

- Next.js 16 and React 19
- TypeScript
- Vinext and Vite static export
- Tailwind CSS 4 plus a custom responsive visual system
- Shadcn/Radix dialogs and tabs
- Lucide icons
- GitHub Actions

No database, backend, API key, or authentication is required.

## Install and run locally

Install [Node.js 22 LTS or newer](https://nodejs.org/) and Git. In PowerShell:

```powershell
git clone https://github.com/unit-mole/unit-mole.github.io.git
cd unit-mole.github.io
npm install
npm run dev
```

If you downloaded the ZIP:

```powershell
cd "C:\Path\To\Anmol-Tripathi-Portfolio"
npm install
npm run dev
```

Open the local address displayed in PowerShell. Stop the server with `Ctrl+C`.

## Build and verify

```powershell
npm run lint
npm run build
npm run test
```

The fully static production site is written to `dist/client`.

## Content organization

| File | Purpose |
| --- | --- |
| `src/data/profile.ts` | identity, contact links, résumé, portrait, site URL, positioning, and headline evidence |
| `src/data/portfolio.ts` | capability system, professional contexts, lifecycle, experience, and education |
| `src/data/projects.ts` | four RAG systems, flagship case studies, live-demo links, and the 66-project non-repeating engineering atlas |
| `components/portfolio/` | final page sections and interactions |
| `app/globals.css` | color system, typography, layout, responsive behavior, and interaction states |

### Add or update a selected project

Edit `flagshipProjects` in `src/data/projects.ts`. A project supports:

```ts
{
  slug,
  title,
  category,
  status,
  problem,
  matters,
  solution,
  technologies,
  techniques,
  outcome,
  architecture,
  repository,
  demo
}
```

The selected-work component currently chooses four non-RAG slugs in `components/portfolio/selected-work.tsx`. Add a verified slug there only when the project deserves a full case study, then remove that project from the lower atlas to prevent repetition.

### Add a project to the catalog

Add its title, summary, repository path, and optional live-demo URL to the correct entry in `projectGroups` inside `src/data/projects.ts`. The category tab, count, interactive project index, links, and architecture narrative update automatically.

### Update experience or education

Edit `technicalExperience`, `operatingContexts`, or `educationJourney` in `src/data/portfolio.ts`. Keep Hach content at a public, non-confidential level.

### Update portrait, résumé, and links

- Portrait: replace both `public/images/anmol-tripathi.webp` and `public/images/anmol-tripathi.jpg`.
- Résumé: replace `public/resume/Anmol_Tripathi_Resume.pdf`.
- GitHub, LinkedIn, Hugging Face, email, or location: update `src/data/profile.ts`.
- Final custom domain: update `profile.siteUrl` and rebuild.

## Deploy with GitHub Pages

The deployment workflow is `.github/workflows/deploy-pages.yml`.

### Recommended user-site repository

Create a public repository named:

```text
unit-mole.github.io
```

Then, from the extracted project folder:

```powershell
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/unit-mole/unit-mole.github.io.git
git push -u origin main
```

On GitHub:

1. open **Settings → Pages**;
2. set **Build and deployment** to **GitHub Actions**;
3. open the **Actions** tab and confirm the deployment succeeds;
4. visit `https://unit-mole.github.io`.

The build also supports project-page repositories. It derives the correct base path from GitHub's `GITHUB_REPOSITORY` environment variable.

## Deploy with Vercel

1. Import the same GitHub repository into Vercel.
2. Use `npm run build` as the build command.
3. Use `dist/client` as the output directory if Vercel does not detect it.
4. Add the custom domain in Vercel.
5. Update `profile.siteUrl` and rebuild so canonical and social metadata use the final domain.

## Optional analytics

The portfolio runs without analytics. To enable Google Analytics, copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_GA_ID`, and rebuild. Do not commit `.env.local`.

## Content and confidentiality

The project avoids invented credentials, unsupported metrics, arbitrary skill scores, placeholder links, and generic claims. Professional work is described without internal datasets, private infrastructure, customer information, proprietary code, or confidential workflows; role metrics are limited to those already stated on the supplied professional profile.

## Troubleshooting

### Assets are missing on GitHub Pages

Confirm GitHub Pages is using the included GitHub Actions workflow. The project automatically configures the repository base path during that build.

### Portrait does not load

Confirm both files exist with the exact casing:

```text
public/images/anmol-tripathi.webp
public/images/anmol-tripathi.jpg
```

The browser receives WebP first and the JPEG as a direct static fallback.

### Résumé does not download

Confirm this exact file exists:

```text
public/resume/Anmol_Tripathi_Resume.pdf
```

## License

Portfolio source may be adapted for Anmol Tripathi's personal use. Third-party libraries, models, datasets, and linked repositories retain their respective licenses and terms.
