import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const AboutPage = () => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.about.slug,
        title: `${mainConfigs.pages.about.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.about.description,
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
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.about.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <h2>Página: Milton Bolonha</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Milton Bolonha</h1>
          <h2>Especialista em Tecnologia e Marketing</h2>
          <p>Milton Bolonha desenvolve sites desde 1998.</p>
          <p>
            Como especialista faz a curadoria e implementação sustentável de
            códigos e de tecnologias.
          </p>
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
          <p>
            Atua como gerente de tecnologia com proeficiência no governo de
            dados
            <br />e a otimização do alcance publicitário.
          </p>
          <p>
            Direciona investimentos e toma decisões estratégicas em marketing,
            publicidade e branding,
            <br />
            que trarão resultados para a empresa em médio e longo prazo.
          </p>
        </div>
      </Row>
    </div>
  </MainWrapperContainer>
);

export default AboutPage;
