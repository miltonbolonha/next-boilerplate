"use client";

export default function myImageLoader({ src, width, height, quality }) {
  console.log("GITHUB_PAGES");
  console.log(process.env.GITHUB_PAGES);
  console.log("NEXT_GITHUB_REPO");
  console.log(process.env.NEXT_GITHUB_REPO);
  const objReturn = `${src}?w=${width}&h=${height}&q=${quality || 100}`;
  const githubRepo = process.env.GITHUB_REPOSITORY || false;
  if (!githubRepo) {
    return objReturn;
  }

  return githubRepo + "/" + objReturn;
}
