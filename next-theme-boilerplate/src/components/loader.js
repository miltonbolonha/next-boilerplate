"use client";

export default function myImageLoader({ src }) {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  let repo = "";
  if (isGithubActions) {
    // trim off `<owner>/`
    repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  }

  const loaderPrefix = repo || false;
  return `${loaderPrefix || ""}${src}`;
}
