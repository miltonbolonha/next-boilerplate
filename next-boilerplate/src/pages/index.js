import React from "react";
import Image from "next/image";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
const Home = ({ posts }) => (
  <MainWrapperContainer rowWidth={960}>
    <h2>Início: Sumário</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Início: Sumário</h1>
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

      <div className='posts-major-spam'>
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
