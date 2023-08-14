import React from "react";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";

const Home = ({ posts }) => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: "/home",
        author: "Milton Bolonha",
        siteUrl: "https://miltonbolonha.com.br",
        brandName: "Bolonha Conversas",
        brandEmail: "miltonbolonha@gmail.com",
        brandLogo: `https://miltonbolonha.com.br${slugPrefix}/favicon-32x32.png`,
        brandPhone: "+5512981062959",
        title: "Home - Bolonha Conversas",
        brandDescription: "Aqui nóis conversa e nóis é Bolonha.",
        dateCreated: "dateCreated",
        dateNow: "dateNow",
        articleBody: "articleBody",
        datePublished: "04/02/2022",
        i18n: "pt-BR",
        keywords: ["keywords"],
        questions: ["questions:answer"],
        topology: "pages",
        articleUrl: "https://miltonbolonha.com.br",
        description:
          "Nessa página. Aqui nóis também conversa e nóis é Bolonha.",
        brandCardImage: `https://miltonbolonha.com.br${slugPrefix}/favicon-32x32.png`,
        featuredImage: `https://miltonbolonha.com.br${slugPrefix}/favicon-32x32.png`,
        themeColor: "#d3d3d3",
        fbAppID: null,
        sameAs: [
          "https://twitter.com/miltonbolonha",
          "https://facebook.com/miltonbolonhaoficial",
          "https://instagram.com/miltonbolonha_",
        ],
        social: {
          twitter: {
            card: "card",
            creator: "creator",
            title: "title",
            description: "description",
            image: "image",
            site: "site",
          },
        },
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

  // if (process.env.NODE_ENV !== 'development') {
  //   await generateSitemap(posts)

  //   const rss = await generateRss(posts)
  //   fs.writeFileSync('./public/feed.xml', rss)

  // }

  return {
    props: {
      posts,
    },
  };
}
