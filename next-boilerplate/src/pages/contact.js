import React from "react";

import Row from "../containers/RowContainer";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Contato = () => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
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
      }}
    />
    <h2>Página: Contato</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Fale direto com o Milton</h1>
          <h2>(12) 98106-2959</h2>
        </div>
        <ul className='contact-link-tree-wrapper'>
          {Object.entries(mainConfigs.business.sameAs).map(
            (e, i) =>
              // prettier-ignore
              <li key={i}><a href={e[1]} target="_blank" rel="nofollow">{e[0]}</a></li> // NOSONAR
          )}
        </ul>
      </Row>
    </div>
  </MainWrapperContainer>
);
export default Contato;
