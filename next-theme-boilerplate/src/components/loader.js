"use client";

export default function myImageLoader({ src, width, height, quality }) {
  const loaderPrefix = process.env.LOADER_PREFIX || false;
  return `${loaderPrefix || ""}${src}?w=${width}&h=${height}&q=${
    quality || 100
  }`;
}
