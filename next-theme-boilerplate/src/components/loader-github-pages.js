"use client";

export default function myImageLoader({ src, width, height, quality }) {
  const objReturn = `${src}?w=${width}&h=${height}&q=${quality || 100}`;

  return "/next-boilerplate/" + objReturn;
}
