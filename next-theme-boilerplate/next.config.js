/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: '/next-boilerplate',
  basePath: '/next-boilerplate',
  publicRuntimeConfig: {
    basePath: "/next-boilerplate",
  },
  images: {
    loader: 'custom',
    loaderFile: './src/components/loader.js',
  },
};

module.exports = nextConfig;
