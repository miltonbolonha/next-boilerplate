import React from "react";
import Link from "next/link";

const RecommendedPosts = ({ next, previous }) => (
  <div className="RecommendedWrapper">
    {previous && (
      <Link href={previous.slug} passHref>
        <div className="RecommendedLink previous">
          {previous.frontmatter.title}
        </div>
      </Link>
    )}
    {next && (
      <Link href={next.slug} passHref>
        <div className="RecommendedLink next">{next.frontmatter.title}</div>
      </Link>
    )}
  </div>
);

export default RecommendedPosts;
