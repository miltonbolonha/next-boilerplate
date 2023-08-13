import React from "react";
import SEO from "../components/SEO";

const SeoContainer = ({ data, killSeo = true }) => {
  const isBrowser = () => typeof window !== "undefined";
  if (!isBrowser) {
    return null;
  }
  if (killSeo) {
    return (
      <SEO>
        <title>NO SEO</title>
        <meta name='robots' content={"noindex, nofollow"} />
      </SEO>
    );
  }
  const authorType = data.author === data.brandName ? "Organization" : "Person";
  let socialValues = [];
  for (const key in data.sameAs) {
    if (Object.hasOwn(data.sameAs, key)) {
      socialValues.push(data.sameAs[key]);
    }
  }
  const orgSchema = [
    {
      "@type": ["Organization"],
      "@context": "https://schema.org",
      name: data.brandName,
      url: data.siteUrl,
      email: data.brandEmail,
      description: data.brandDescription,
      sameAs: socialValues,
      logo: data.brandLogo,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: data.brandPhone,
          contactType: "Serviço Ao Cliente",
        },
      ],
    },
  ];

  const webSiteSchema = [
    {
      "@type": "WebSite",
      "@context": "https://schema.org",
      name: data.title,
      description: data.brandDescription,
      url: data.siteUrl,
      keywords: [data.keywords.map(e => e)],
      inLanguage: data.i18n,
      copyrightYear: new Date().getFullYear(),
      datePublished: data.dateCreated,
      dateModified: data.dateNow,
      image: data.brandCardImage || data.featuredImage,
      sameAs: socialValues,
    },
  ];

  const articleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      name: data.title,
      headline: data.description,
      description: data.description,
      author: {
        "@type": authorType,
        name: data.author,
        url: data.siteUrl,
      },
      image: {
        "@type": "ImageObject",
        url: data.brandCardImage || data.featuredImage,
        height: 156,
        width: 60,
      },
      articleBody: data.articleBody,
      publisher: {
        "@type": "Organization",
        name: data.brandName,
        url: data.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: data.brandLogo,
          width: 156,
          height: 60,
        },
      },
      datePublished: data.datePublished,
    },
  ];
  let arrayQuestions = [];
  data?.questions?.forEach(question => {
    return arrayQuestions.push({
      "@type": "Question",
      name: question[0],
      acceptedAnswer: {
        "@type": "Answer",
        text: `<p>${question[1]}</p>`,
      },
    });
  });

  const questionSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [arrayQuestions],
    },
  ];
  return (
    <SEO
      data={{
        author: data.author,
        siteUrl: data.siteUrl,
        brandName: data.brandName,
        brandEmail: data.brandEmail,
        brandLogo: data.brandLogo,
        brandPhone: data.brandPhone,
        title: data.title,
        brandDescription: data.brandDescription,
        dateCreated: data.dateCreated,
        dateNow: data.dateNow,
        articleBody: data.articleBody,
        datePublished: data.datePublished,
        album: data.album,
        track: data.track,
        i18n: data.i18n,
        keywords: data.keywords,
        topology: data.topology,
        articleUrl: data.articleUrl,
        description: data.description,
        brandCardImage: data.brandCardImage,
        featuredImage: data.featuredImage,
        themeColor: data.themeColor,
        slug: data.slug,
        fbAppID: data.fbAppID,
        twitter: data.twitter,
        articleSchema: articleSchema,
        webSiteSchema: webSiteSchema,
        orgSchema: orgSchema,
        questionSchema: questionSchema,
      }}
    />
  );
};

export default SeoContainer;
