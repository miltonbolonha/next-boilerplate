/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES || false;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/next-boilerplate" : undefined,
  images: {
    loader: "custom",
    loaderFile: isGithubPages
      ? "./src/components/loader-github-pages.js"
      : "./src/components/loader.js",
  },
};

module.exports = nextConfig;
