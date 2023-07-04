import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

import { format } from "date-fns";
import { pt } from "date-fns/locale";

const postsDirectory = join(process.cwd(), "content/posts");
const pagesDirectory = join(process.cwd(), "content/pages");

export function getPostBySlug(slug) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content,
  };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );

  return posts;
}

export function getPageBySlug(slug) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content,
  };
}

export function getAllPages() {
  const slugs = fs.readdirSync(pagesDirectory);
  const pages = slugs
    .map(slug => getPageBySlug(slug))
    .sort((page1, page2) =>
      new Date(page1.date) > new Date(page2.date) ? -1 : 1
    );

  return pages;
}
