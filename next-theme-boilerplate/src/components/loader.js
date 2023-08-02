"use client";

export default function myImageLoader({ src, width, height, quality }) {
  return `${src}?w=${width}&h=${height}&q=${quality || 100}`;
}
