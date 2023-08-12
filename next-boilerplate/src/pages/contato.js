import React from "react";

import Row from "../containers/RowContainer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Contato = () => {
  console.log("slugPrefix");
  console.log(slugPrefix);
  console.log("mainConfigs.business.sameAs");
  console.log(mainConfigs.business.sameAs);
  return (
    <MainWrapperContainer rowWidth={960}>
      <SeoContainer
        killSeo={true}
        data={{
          slug: "/contato",
          title: "Contato - Bolonha Conversas",
          author: "Milton Bolonha",
          siteUrl: "https://miltonbolonha.com.br",
          brandName: mainConfigs.business.brandName,
          brandEmail: mainConfigs.business.brandEmail,
          brandLogo: mainConfigs.business.brandLogo,
          brandPhone: mainConfigs.business.brandPhone,
          brandDescription: mainConfigs.business.brandDescription,
          brandCardImage: mainConfigs.business.brandCardImage,
          featuredImage: `https://miltonbolonha.com.br${slugPrefix}/favicon-32x32.png`,
          dateCreated: "dateCreated",
          dateNow: "dateNow",
          articleBody: "articleBody",
          datePublished: "04/02/2022",
          i18n: "pt-BR",
          keywords: ["keywords"],
          questions: ["questions:answer"],
          topology: "pages",
          articleUrl: "https://miltonbolonha.com.br/contato",
          description:
            "Nessa página. Aqui nóis também conversa e nóis é Bolonha.",
          themeColor: "#d3d3d3",
          fbAppID: null,
          sameAs: mainConfigs.business.sameAs,
          twitter: mainConfigs.business.twitterCard,
        }}
      />

      <h2>Início: Contato</h2>
      <div className='wrapper-box'>
        <Row opt={{ isBoxed: true }}>
          <div className='hero-txt'>
            <h1>Fale direto com o Milton</h1>
            <h2>(12) 98106-2959</h2>
          </div>
          <ul className='contact-link-tree-wrapper'>
            {Object.entries(mainConfigs.business.sameAs).map((e, i) =>
              // prettier-ignore
              <li key={i}><a href={e[1]}>{e[0]}</a></li> // NOSONAR
            )}
          </ul>
        </Row>
      </div>
    </MainWrapperContainer>
  );
};
export default Contato;
