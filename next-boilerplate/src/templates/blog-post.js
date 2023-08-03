import React, { useEffect } from "react";
import Prism from "prismjs";
import { useTheme } from "next-themes";
import { NextSeo } from "next-seo";
import { timeToRead } from "../lib/utils";
import SinglePostBlock from "../components/SinglePostBlock";
import HeaderContainer from "../containers/HeaderContainer";
import MainMenuData from "../configs/main-menu.json";

const BlogPost = ({ post }) => {
  const { theme } = useTheme();

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);
  const isGithubPages = process.env.IS_GITHUB_PAGE || false;
  const THEME_FOLDER = isGithubPages ? "/" + process.env.THEME_FOLDER : "";

  const opt = {
    bgImg: THEME_FOLDER + "/brandimages/gray-bg.jpg",
    darkBgImg: THEME_FOLDER + "/brandimages/dark-bg.png",
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
        <div className='main-wrapper-inner'>
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

          <main className='main-container'>
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
        </div>
      </div>
    </>
  );
};

export default BlogPost;
