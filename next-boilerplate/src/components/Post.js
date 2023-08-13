import React from "react";
import Link from "next/link";

const Post = ({ slug, date, timeToRead, title, description }) => {
  return (
    <Link href={slug} passHref className='post-link'>
      <h1 className=''>{title}</h1>
    </Link>
  );
};

export default Post;
