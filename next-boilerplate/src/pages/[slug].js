import React from "react";
import BlogPost from "../templates/blog-post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

const Post = mdFile => {
  return <BlogPost post={mdFile} />;
};

export default Post;

export const getStaticProps = async context => {
  if (!context) {
    throw new Error("Não tem !context!");
  }
  if (!context.params) {
    throw new Error("Não tem !context.params!");
  }

  const slug = context.params.slug;
  if (!slug) {
    throw new Error("Não tem !slug!");
  }
  const post = getPostBySlug(slug);

  const content = post ? await markdownToHtml(post.content || "") : null;
  if (!content) {
    throw new Error("Não tem !content!");
  }
  // get prev/next posts
  const allPosts = getAllPosts();
  if (!allPosts) {
    throw new Error("Não tem !allPosts!");
  }
  const currentAllPostIndex = allPosts.filter(
    p => p?.frontmatter.layout === "post"
  );
  const currentPostIndex = currentAllPostIndex.findIndex(p => p?.slug === slug);
  const nextPost = allPosts[currentPostIndex - 1] ?? null;
  const prevPost = allPosts[currentPostIndex + 1] ?? null;

  return {
    props: {
      ...post,
      content,
      nextPost,
      prevPost,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
