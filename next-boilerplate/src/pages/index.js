import React from "react";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Home = ({ posts }) => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.index.slug,
        title: `${mainConfigs.pages.index.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.index.description,
        author: mainConfigs.website.author,
        siteUrl: mainConfigs.website.siteUrl,
        brandName: mainConfigs.business.brandName,
        brandEmail: mainConfigs.business.brandEmail,
        brandLogo: mainConfigs.business.brandLogo,
        brandPhone: mainConfigs.business.brandPhone,
        brandDescription: mainConfigs.business.brandDescription,
        brandCardImage: mainConfigs.business.brandCardImage,
        featuredImage: `${mainConfigs.website.siteUrl}${slugPrefix}/favicon-32x32.png`,
        datePublished: mainConfigs.website.datePublished,
        i18n: mainConfigs.website.i18n,
        keywords: mainConfigs.website.keywords,
        questions: mainConfigs.website.questions,
        topology: "pages",
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.index.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <h2>Início: Sumário</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <ul>
            <li>Ação de Posicionamento de Marketing </li>
            <li>Organização de Dados Estruturados</li>
            <li>Gerenciamento de Comunidades</li>
            <li>Aquisição de Tecnologia de Ponta</li>
            <li>Modelagem de Inteligência Artificial</li>
            <li>Obtenção de Resultados</li>
          </ul>
        </div>
      </Row>
    </div>
    <h2>Lista: DEVaneios</h2>
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
