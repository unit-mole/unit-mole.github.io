export const profile = {
  name: "Anmol Tripathi",
  shortName: "AT",
  headline:
    "Data Scientist & Machine Learning Engineer — Applied AI, NLP and decision systems",
  location: "Fort Collins, Colorado",
  email: "tripathianmol74@gmail.com",
  github: "https://github.com/unit-mole",
  linkedin: "https://www.linkedin.com/in/anmol-tripathi-60311917a/",
  huggingFace: "https://huggingface.co/anmol-unitmole",
  siteUrl: "https://anmol-ai-portfolio.antripat3.chatgpt.site",
  resume: "/resume/Anmol_Tripathi_Resume.pdf",
  portrait: "/images/anmol-tripathi.webp",
  portraitFallback: "/images/anmol-tripathi.jpg",
  summary:
    "I connect data quality, model design, evaluation, and application layers to turn complex signals into grounded answers, defensible predictions, and decision-ready intelligence.",
  stats: [
    { value: "74", label: "distinct public AI/ML implementations" },
    { value: "7+", label: "years across engineering & data" },
    { value: "12", label: "curated public repository collections" },
  ],
} as const;

export const withBasePath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
};
