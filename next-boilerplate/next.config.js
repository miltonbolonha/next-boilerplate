/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/next-boilerplate" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/containers/imgLoaderContainer.js",
  },
  env: {
    IS_GITHUB_PAGE: isGithubPages,
    THEME_FOLDER: "next-boilerplate",
  },
};

module.exports = nextConfig;
