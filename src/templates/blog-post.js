import React, { useEffect } from "react";
import Prism from "prismjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { timeToRead } from "../lib/utils";
import SinglePostBlock from "../components/SinglePostBlock";
// import RecommendedPosts from "../components/RecommendedPosts";
// import Comments from "../components/Comments";
import HeaderContainer from "../containers/HeaderContainer";
import MainMenuData from "../configs/main-menu.json";

const BlogPost = ({ post }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  const opt = {
    bgImg: "/brandimages/gray-bg.jpg",
    darkBgImg: "/brandimages/dark-bg.png",
    hasHeader: true,
    hasMenu: true,
    pageQuestions: [],
    badgesWhats: false,
    badgesQuestion: false,
    isDarkLogo: false,
    flags: null, // remove
    urlLocale: "",
  };
  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Milton Bolonha`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://bolonha.vercel.app/${post.slug}`,
          title: `${post.frontmatter.title} - Milton Bolonha`,
          description: post.frontmatter.description,
          images: [
            {
              url: `some.png`,
              alt: `${post.frontmatter.title}`,
            },
          ],
        }}
      />
      {/* <header className="PostHeader">
        <Link href="/" className="ButtonBack" passHref>
          ← Voltar na listagem
        </Link>
        <p className="PostDate">
          {post.frontmatter.date} • {timeToRead(post.content)}
        </p>
        <h1 className="PostTitle">{post.frontmatter.title}</h1>
        <h2 className="PostDescription">{post.frontmatter.description}</h2>
      </header>
      <div className="MainContent">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div> */}
      {/* <RecommendedPosts next={post.nextPost} previous={post.prevPost} /> */}
      {/* <Comments title={post.frontmatter.title} /> */}

      <div
        className={"main-wrapper blog-list"}
        style={
          opt.bgImg && theme === "light"
            ? {
                background: `url(${opt.bgImg}) no-repeat`,
              }
            : {
                background: `url(${opt.darkBgImg}) repeat`,
              }
        }
      >
        <div className="main-wrapper-inner">
          {opt.hasHeader !== false ? (
            <HeaderContainer
              opt={{
                mainMenuStatus: MainMenuData.menu.status,
                logoSvg: "logotipoSvg",
                bgOne: "transparent",
                bgTwo: "transparent",
                classes: "header-block",
                flags: opt.flags,
                urlLocale: opt.urlLocale,
                hasMenu: opt.hasMenu,
                isDarkLogo: opt.isDarkLogo,
              }}
              mainMenu={MainMenuData.menu.items}
            />
          ) : null}

          <main className="main-container">
            {/* <HeadingBlock classes="m30auto" importance={10} width={400}>
              title
            </HeadingBlock> */}
            <SinglePostBlock
              highlightImage={"pageContext?.SEO.featuredImage"}
              authorImg={"imgHolder"}
              date={post.frontmatter.date}
              author={"pageContext.brandName"}
              html={post.content}
              title={post.frontmatter.title}
              categories={["pageContext.categories"]}
              timeToRead={timeToRead(post.content)}
              wordCount={10}
            />
          </main>

          {/* <BadgesButtons opt={opt} questions={opt.pageQuestions} /> */}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
