"use client";

export default function myImageLoader({ src }) {
  const githubRepo = process.env.GITHUB_REPOSITORY || false;
  const loaderPrefix = githubRepo ? githubRepo.split("/")[1] : false;
  return `${loaderPrefix || ""}${src}`;
}
