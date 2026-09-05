import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("static build contains the recruiter-facing portfolio", async () => {
  const html = await read("dist/client/index.html");
  assert.match(html, /Anmol Tripathi/);
  assert.match(html, /Data to models/);
  assert.match(html, /From raw data/);
  assert.match(html, /74/);
  assert.match(html, /distinct public AI\/ML implementations/);
  assert.match(html, /12/);
  assert.match(html, /curated public repository collections/);
  assert.match(html, /Four systems/);
  assert.match(html, /ReliabilityOps/);
  assert.match(html, /RepoAtlas/);
  assert.match(html, /FilingsGraph/);
  assert.match(html, /Source-Cited AI Portfolio Assistant/);
  assert.match(html, /Selected engineering work/);
  assert.match(html, /What makes an ML solution/);
  assert.match(html, /Data.*models.*systems.*decisions/i);
  assert.match(html, /Public-safe system architecture/);
  assert.match(html, /Business requirement/);
  assert.match(html, /Engineering approach/);
  assert.match(html, /Architecture at a glance/);
  assert.doesNotMatch(html, /Progression value/);
  assert.match(html, /Evidence &amp; recognition/);
  assert.doesNotMatch(html, /Starter Project/);
  assert.doesNotMatch(html, /YOUR_EMAIL_HERE/);
  assert.match(html, /Student Assistant Manager/);
  assert.doesNotMatch(html, /Beyond .chat with a PDF./);
  assert.doesNotMatch(html, /Ten projects/);
});

test("selected work and category-first library remain data-driven", async () => {
  const source = await read("src/data/projects.ts");
  assert.equal((source.match(/slug: "/g) ?? []).length, 14);
  assert.match(source, /export const ragProjects/);
  assert.match(source, /reliabilityops-agentic-rag/);
  assert.match(source, /repoatlas-agentic-rag/);
  assert.match(source, /filingsgraph-agentic-rag/);
  assert.match(source, /export const projectGroups/);
  assert.match(source, /Transformers → RAG & multimodal AI/);
  assert.doesNotMatch(source, /export const ragRoadmap/);

  const catalog = await read("components/portfolio/project-catalog.tsx");
  assert.match(catalog, /66 additional public implementations|projectCount/);
  assert.match(catalog, /Live demo/);
  assert.match(catalog, /No public demo/);
  assert.match(catalog, /Architecture/);
  assert.match(catalog, /GitHub/);

  const portfolio = await read("src/data/portfolio.ts");
  assert.match(portfolio, /Machine Learning Research Assistant/);
  assert.match(portfolio, /GPA 3\.889 \/ 4\.000/);
  assert.match(portfolio, /10,000\+/);
  assert.match(portfolio, /Student Assistant Manager/);
  assert.match(portfolio, /50% merit-based tuition scholarship/);
  assert.match(portfolio, /40% merit-based tuition scholarship/);
  assert.match(portfolio, /≈33% merit-based tuition scholarship/);
  assert.match(portfolio, /Public-safe system architecture|architecture:/);
  assert.match(portfolio, /GCS predictive classification/);
  assert.match(portfolio, /FailureMode/);
  assert.match(portfolio, /DefectSymptom \/ RootCauseFunction/);
  assert.match(portfolio, /Recurring operational analytics/);
});

test("responsive and accessibility safeguards remain in the final design", async () => {
  const css = await read("app/globals.css");
  assert.match(css, /@media \(max-width: 1120px\)/);
  assert.match(css, /@media \(max-width: 820px\)/);
  assert.match(css, /@media \(max-width: 560px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /:focus-visible/);

  const page = await read("app/page.tsx");
  assert.match(page, /Skip to content/);
  assert.match(page, /PortfolioHero/);
  assert.match(page, /RagShowcase/);
  assert.match(page, /ProjectCatalog/);
});

test("resume, portrait, social card, and Pages workflow are present", async () => {
  const files = [
    "public/resume/Anmol_Tripathi_Resume.pdf",
    "public/images/anmol-tripathi.webp",
    "public/images/anmol-tripathi.jpg",
    "public/og.png",
    ".github/workflows/deploy-pages.yml",
  ];
  for (const file of files) await access(new URL(`../${file}`, import.meta.url));
  assert.ok((await stat(new URL("../public/resume/Anmol_Tripathi_Resume.pdf", import.meta.url))).size > 10_000);
  assert.ok((await stat(new URL("../public/images/anmol-tripathi.webp", import.meta.url))).size > 100_000);
  assert.ok((await stat(new URL("../public/images/anmol-tripathi.jpg", import.meta.url))).size > 100_000);

  const html = await read("dist/client/index.html");
  assert.match(html, /images\/anmol-tripathi\.webp/);
  assert.match(html, /images\/anmol-tripathi\.jpg/);
});
