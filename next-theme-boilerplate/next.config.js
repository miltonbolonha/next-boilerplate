/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? "/next-boilerplate" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/components/loader.js",
  },
};

module.exports = nextConfig;
