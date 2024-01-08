import React from "react";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";
const infos = {
  slug: mainConfigs?.pages?.index.slug,
  title: `${mainConfigs?.pages?.index.title} - ${mainConfigs?.business?.brandName}`,
  description: mainConfigs?.pages?.index.description,
  author: mainConfigs?.website?.author,
  siteUrl: mainConfigs?.website?.siteUrl,
  brandName: mainConfigs?.business?.brandName,
  brandEmail: mainConfigs?.business?.brandEmail,
  brandLogo: mainConfigs?.business?.brandLogo,
  brandPhone: mainConfigs?.business?.brandPhone,
  brandDescription: mainConfigs?.business?.brandDescription,
  brandCardImage: mainConfigs?.business?.brandCardImage,
  featuredImage: `${mainConfigs?.website?.siteUrl}${slugPrefix}/favicon-32x32.png`,
  datePublished: mainConfigs?.website?.datePublished,
  i18n: mainConfigs?.website?.i18n,
  keywords: mainConfigs?.website?.keywords,
  questions: mainConfigs?.website?.questions,
  topology: "pages",
  articleUrl: `${mainConfigs?.website?.siteUrl}/${mainConfigs?.pages?.index.slug}`,
  themeColor: "#d3d3d3",
  sameAs: mainConfigs?.business?.sameAs,
  twitter: mainConfigs?.business?.twitterCard,
}
const Home = ({ posts }) => (
  <MainWrapperContainer rowWidth={960} killSeo={false}
  data={infos}>
    <h2>Início: Sumário</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <ul>
            {mainConfigs?.website.keywords.map((k,c)=>{
              const x = c + 1; // lint hack, sorry
              return <li key={x}>{k}</li>
            })}
          </ul>
        </div>
      </Row>
    </div>
    <h2>Lista: {mainConfigs?.pages?.index.title}</h2>
    <div className='wrapper-box'>
      <div className='post'>
        <BlogList posts={posts} />
      </div>
    </div>
  </MainWrapperContainer>
);
export default Home;
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
