/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;
const repoName = "next-boilerplate";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
  },
  env: {
    IS_GITHUB_PAGE: isGithubPages,
    THEME_FOLDER: repoName,
  },
};

module.exports = nextConfig;
