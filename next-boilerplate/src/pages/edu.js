import React from "react";

import Row from "../containers/RowContainer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";
const infos = {
  slug: mainConfigs.pages.contact.slug,
  title: `${mainConfigs.pages.contact.title} - ${mainConfigs.business.brandName}`,
  description: mainConfigs.pages.contact.description,
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
  articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.contact.slug}`,
  themeColor: "#d3d3d3",
  sameAs: mainConfigs.business.sameAs,
  twitter: mainConfigs.business.twitterCard,
};

const Edu = () => (
  <MainWrapperContainer rowWidth={960} killSEO={false} data={infos}>
    <h2>Página: Edu</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Matrial Didático</h1>
          <h2>Página em Construção, entre em contato direto com o autor: 12 98106-2959</h2>
        </div>
        <ul className='contact-link-tree-wrapper'>
          <li>Carta de boas-vindas</li>
          <li>
            Imagens para perfil, cover, stories, papel de parede para desktop e
            mobile;
          </li>
          <li>02 videoaulas;</li>
          <li>04 e-books;</li>
          <li>01 hacker-book</li>
          <li>01 livro oficial do curso (pdf);</li>
          <li>01 Modelo GitHub de website em Next.js;</li>
          <li>01 livro da aventura: Eugenia 3.0: As Crianças CTO’s (pdf);</li>
          <li>
            01 álbum de músicas instrumentais para estudo: As Crianças CTO’s
            (disponível nas plataformas de streaming);
          </li>
          <li>WhatsApp Stickers.</li>
        </ul>
      </Row>
    </div>
  </MainWrapperContainer>
);
export default Edu;
