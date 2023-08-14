import React from "react";
import Row from "../containers/RowContainer";
import { timeToRead, slugPrefix } from "../lib/utils";
import SeoContainer from "../containers/SeoContainer";
import SinglePostBlock from "../components/SinglePostBlock";
import mainConfigs from "../configs/main-infos.json";
import MainWrapperContainer from "../containers/MainWrapperContainer";
const BlogPost = ({ post }) => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: post.slug,
        title: `${post.frontmatter.title} - ${mainConfigs.business.brandName}`,
        author: mainConfigs.website.author,
        siteUrl: mainConfigs.website.siteUrl,
        brandName: mainConfigs.business.brandName,
        brandEmail: mainConfigs.business.brandEmail,
        brandLogo: mainConfigs.business.brandLogo,
        brandPhone: mainConfigs.business.brandPhone,
        brandDescription: mainConfigs.business.brandDescription,
        brandCardImage: mainConfigs.business.brandCardImage,
        featuredImage: `${mainConfigs.website.siteUrl}${slugPrefix}/favicon-32x32.png`,
        dateCreated: "dateCreated",
        dateNow: "dateNow",
        articleBody: "articleBody",
        datePublished: "04/02/2022",
        i18n: "pt-BR",
        keywords: ["keywords"],
        questions: ["questions:answer"],
        topology: "pages",
        articleUrl: "https://miltonbolonha.com.br/contato",
        description: post.frontmatter.description,
        themeColor: mainConfigs.website.themeColor,
        fbAppID: null,
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <h2>Postagem sobre: {post.frontmatter.categories.join("; ")}.</h2>
    <div className='wrapper-box post'>
      <Row opt={{ isBoxed: true, classes: "post-container" }}>
        <SinglePostBlock
          highlightImage={post.frontmatter.image}
          authorImg={"imgHolder"}
          date={post.frontmatter.date}
          author={mainConfigs.business.brandName}
          html={post.content}
          title={post.frontmatter.title}
          categories={post.frontmatter.categories}
          timeToRead={timeToRead(post.content)}
          wordCount={10}
        />
      </Row>
    </div>
  </MainWrapperContainer>
);

export default BlogPost;
