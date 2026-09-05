import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isProjectPage = Boolean(repositoryName && !repositoryName.endsWith(".github.io"));
const basePath = isProjectPage ? `/${repositoryName}` : "";
const githubPagesUrl = repositoryName
  ? isProjectPage
    ? `https://${repositoryOwner}.github.io/${repositoryName}`
    : `https://${repositoryName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl,
  },
};

export default nextConfig;
