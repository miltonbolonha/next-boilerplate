import React from "react";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";

import { Row } from "./InsertRow";

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
  // console.log("highlightImage");
  // console.log(highlightImage);
  // const imageQuery = getImage(authorImg.childrenImageSharp[0]);
  // const imageHighlightQuery = getImage(highlightImage.childrenImageSharp[0]);
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
          <div className="header-post">
            <Row opt={{ isBoxed: true, classes: "post", alignTo: "center" }}>
              <h1>{title}</h1>
            </Row>
          </div>
        </Row>
        <Row opt={{ isBoxed: true, classes: "main-post" }}>
          <div className="close-btn-single-post">
            <Link href="/">X</Link>
            <span>Fechar</span>
          </div>
          <div className="container">
            <div className="post-author">
              <Row opt={{ numColumns: 2, classes: "post-author-infos" }}>
                <div className="inner-post-author-infos">
                  {/* <Image
                    src={imageQuery}
                    alt={"Imagem do Perfil do Autor"}
                    placeholder={"NONE"}
                    critical='true'
                    className={"author-img"}
                    width={74}
                    height={74}
                  /> */}
                  imagem de author
                  <div className="innerauthor-infos">
                    <p className="post-author-name" rel="author">
                      {author}
                    </p>
                    <time className="post-author-date" dateTime={date}>
                      {date}
                    </time>
                  </div>
                </div>
                <Row opt={{ classes: "editorial-infos", numColumns: 2 }}>
                  <p className="timeToread">{timeToRead} min. (leitura)</p>
                  <p className="wordCount">{wordCount.paragraphs} parágrafos</p>
                  <p className="wordCount">{wordCount.sentences} sentenças</p>
                  <p className="wordCount">{wordCount.words} palavras</p>
                </Row>
              </Row>
            </div>
            {/* <div className='post-categories-wrapper'>
              <p>Trends</p>
              {categories.map((e, i) => {
                return (
                  <Link
                    to={`/trends/${_.kebabCase(e)}/`}
                    className='post-categories'
                    key={i}
                  >
                    #{e}
                  </Link>
                );
              })}
            </div> */}
            <div>
              {/* <GatsbyImage
                image={imageHighlightQuery}
                alt={`Imagem em destaque da postagem: ${title}`}
                placeholder={"NONE"}
                critical="true"
                className={"highlight-img"}
                widht={925}
                height={483}
              /> */}
              imageHighlightQuery
            </div>
            <div
              className="post-article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Row>
      </section>
    </article>
  );
};

export default SinglePostBlock;
