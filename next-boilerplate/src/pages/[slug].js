import React from "react";
import BlogPost from "../templates/blog-post";
import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

const Post = (post) => {
  return <BlogPost post={post} />;
};

export default Post;

export const getStaticProps = async (context) => {
  if (!context) {
    throw new Error("Não tem !context!");
  }
  console.log(context);
  if (!context.params) {
    throw new Error("Não tem !context.params!");
  }
  console.log("teste 0");

  const slug = context.params.slug;
  if (!slug) {
    throw new Error("Não tem !slug!");
  }
  const post = getPostBySlug(slug);
  console.log("indo beemmmmmmmmmmmmmm 1");

  const content = post ? await markdownToHtml(post.content || "") : null;
  if (!content) {
    throw new Error("Não tem !content!");
  }
  // get prev/next posts
  console.log("indo beemmmmmmmmmmmmmm 3");

  const allPosts = getAllPosts();
  if (!allPosts) {
    throw new Error("Não tem !allPosts!");
  }
  console.log("teste 1");
  const currentPostIndex = allPosts.findIndex((p) => p?.slug === slug);
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
