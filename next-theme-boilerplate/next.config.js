/** @type {import('next').NextConfig} */
const githubPages = process.env.GITHUB_PAGES || false;
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: githubPages ? "/next-boilerplate" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/components/loader.js",
  },
};

module.exports = nextConfig;
