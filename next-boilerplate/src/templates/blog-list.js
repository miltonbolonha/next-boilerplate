import React, { useState } from "react";

import Post from "../components/Post";

const BlogList = ({ posts }) => {
  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  );

  const [count] = useState({
    prev: 0,
    next: 10,
  });
  const [current] = useState(sortedPosts.slice(count.prev, count.next));
  console.log("current");
  console.log(current);
  return (
    <>
      {current.map((post, i) => {
        const x = i + 1;
        console.log("hello");
        return (
          <Post
            key={x}
            slug={post.slug}
            title={post.frontmatter.title}
            timeToRead={post.timeToRead}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
          />
        );
      })}
    </>
  );
};

export default BlogList;
