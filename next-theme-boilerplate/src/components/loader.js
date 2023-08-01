"use client";

export default function myImageLoader({ src, width, height, quality }) {
  const objReturn = `${src}?w=${width}&h=${height}&q=${quality || 100}`;
  const githubRepo = process.env.GITHUB_REPO || false;
  if (!githubRepo) {
    return objReturn;
  }

  return githubRepo + "/" + objReturn;
}
