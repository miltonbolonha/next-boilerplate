import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";

const Home = ({ posts }) => (
  <MainWrapperContainer>
    <Row opt={{ classes: "cta-infos", isBoxed: true, numColumns: 2 }}>
      <div className='hero-txt'>
        <h2>Cadernos de estudo</h2>
        <p>
          Crianças CTOs de todo o Brasil: Chegou a{" "}
          <strong>Bolonha Conversa</strong>
          ! <br />A mentoria de ensino inteligente e disponível
          <br />
          24 horas por dia, 7 dias da semana para te ajudar.
        </p>
        <Link href='/' className='cta-btn hero-btn'>
          Experimente Já!
        </Link>
        <Link href='/' className='secondary-btn'>
          Conheça a Bolonha Conversa
        </Link>
      </div>
      <div className='hero-img'>
        <Image
          src={"/brandimages/laptop-reading.png"}
          alt={"Maskot Reading"}
          placeholder={"NONE"}
          critical='true'
          className={""}
          width={300}
          height={300}
        />
      </div>
    </Row>
    <Row
      opt={{
        numColumns: 2,
        isBoxed: true,
        classes: "hero-txt contact-wrapper",
      }}
    >
      <Image
        src={"/brandimages/envelope-greeting.png"}
        alt={"Maskot Contact"}
        placeholder={"NONE"}
        critical='true'
        className={""}
        width={300}
        height={300}
      />
      <div id='contato' className='contact-info'>
        <h2>Contato</h2>
        <p>
          Fale com a gente por meio do e-mail:{" "}
          <strong>contato@bolonha.dev</strong>
        </p>
      </div>
    </Row>
    <div className='posts-major-spam'>
      <BlogList posts={posts} />
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
