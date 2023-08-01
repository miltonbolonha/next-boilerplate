"use client";

export default function myImageLoader({ src }) {
  const loaderPrefix = process.env.LOADER_PREFIX || false;
  return `${loaderPrefix || ""}${src}`;
}
