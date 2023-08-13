import React from "react";
import Link from "next/link";

const Post = ({ slug, date, timeToRead, title, description, main_class }) => {
  return (
    <Link href={slug} passHref>
      <div className='PostLink'>
        <section className='PostWrapper'>
          {/* {main_class && (
            <div className={`is-${main_class} PostTag`}>{main_class}</div>
          )} */}
          {/* <time className='PostInfo'>
            <div className='PostDate'>
              {date} {timeToRead && ` • ${timeToRead} min de leitura`}
            </div> 
            <h2 className='PostDescription'>{description}</h2>
          </time> */}
          <h1 className='PostTitle'>{title}</h1>
        </section>
      </div>
    </Link>
  );
};

export default Post;
