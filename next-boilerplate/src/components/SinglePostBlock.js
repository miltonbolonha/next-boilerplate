import React from "react";
import Link from "next/link";
import Image from "next/image";

import Row from "../containers/RowContainer";

const SinglePostBlock = ({
  highlightImage,
  authorImg,
  date,
  author,
  html,
  categories,
  title,
  timeToRead,
  wordCount,
}) => {
  return (
    <article>
      <section>
        <Row
          opt={{
            isBoxed: false,
            classes: "post-header",
            bgColor: "#111e24",
          }}
        >
          <div className='header-post'>
            <Row opt={{ isBoxed: true, classes: "post", alignTo: "center" }}>
              <h1>{title}</h1>
            </Row>
          </div>
        </Row>
        <Row opt={{ isBoxed: true, classes: "main-post" }}>
          <div className='close-btn-single-post'>
            <Link href='/'>X</Link>
            <span>Fechar</span>
          </div>
          <div className='container'>
            <div className='post-author'>
              <Row opt={{ numColumns: 2, classes: "post-author-infos" }}>
                <div className='inner-post-author-infos'>
                  <Image
                    src={"/brandimages/profile-image.png"}
                    alt={"Profile Image"}
                    placeholder={"NONE"}
                    critical='true'
                    width={50}
                    height={50}
                    className='profile-image'
                  />
                  <div className='innerauthor-infos'>
                    <p className='post-author-name' rel='author'>
                      {author}
                    </p>
                    <time className='post-author-date' dateTime={date}>
                      {date}
                    </time>
                  </div>
                </div>
                <Row opt={{ classes: "editorial-infos", numColumns: 2 }}>
                  <p className='timeToread'>{timeToRead} min. (leitura)</p>
                  <p className='wordCount'>{wordCount.paragraphs} parágrafos</p>
                  <p className='wordCount'>{wordCount.sentences} sentenças</p>
                  <p className='wordCount'>{wordCount.words} palavras</p>
                </Row>
              </Row>
            </div>
            <Image
              src={`/postsimages/${highlightImage}`}
              alt={"Maskot Reading"}
              placeholder={"NONE"}
              critical='true'
              className={""}
              width={824}
              height={450}
            />
            <div
              className='post-article-content'
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Row>
      </section>
    </article>
  );
};

export default SinglePostBlock;
