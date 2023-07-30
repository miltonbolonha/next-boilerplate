/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: '/website',
  basePath: '/website',
  publicRuntimeConfig: {
    basePath: "/website",
  },
  images: {
    loader: 'custom',
    loaderFile: './src/components/loader.js',
  },
};

module.exports = nextConfig;
