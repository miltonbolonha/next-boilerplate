/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: '/next-boilerplate',
  /*
  assetPrefix: '/next-boilerplate',*/
  serverRuntimeConfig: {
    basePath: "/next-boilerplate",
  },
  images: {
    loader: 'custom',
    loaderFile: './src/components/loader.js',
  },
};

module.exports = nextConfig;
