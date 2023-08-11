import React, { useState } from "react";

import Post from "../components/Post";
// import { NextSeo } from "next-seo";

const BlogList = ({ posts }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  );

  const [count] = useState({
    prev: 0,
    next: 10,
  });
  const [current] = useState(sortedPosts.slice(count.prev, count.next));

  return (
    <>
      {/* <NextSeo
        title='Home | Milton Bolonha'
        description='Um blog de um desenvolvedor FullStack (LINUX, PHP & NODEJS), fã de rock, política, gatos e inteligência artificial.'
        openGraph={{
          images: [
            {
              url: "https://bolonha.vercel.app/assets/img/blog-cover.png",
              width: 1200,
              height: 630,
              alt: "Milton Bolonha Blog",
            },
          ],
        }}
      /> */}

      {current.map((post, i) => {
        const x = i + 1;
        return (
          <Post
            key={x}
            slug={post.slug}
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            main_class={post.frontmatter["main-class"]}
          />
        );
      })}
    </>
  );
};

export default BlogList;
