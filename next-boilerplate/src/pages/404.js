import React from "react";
import Link from "next/link";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import Row from "../containers/RowContainer";
import Image from "next/image";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const NotFoundPage = () => (
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
    <h2>Erro: 404</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Não há nada por aqui!</h1>
          <h2>Desculpe o transtorno.</h2>
          <Link href='/' passHref className='hot-color-rounded-btn'>
            De volta ao blog!
          </Link>
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
            <strong>miltonbolonha@gmail.com</strong>
          </p>
        </div>
      </Row>
    </div>
  </MainWrapperContainer>
);

export default NotFoundPage;
