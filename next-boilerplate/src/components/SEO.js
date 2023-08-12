import React from "react";
import Head from "next/head";
const Seo = ({ children, data = null }) => {
  if (!data) {
    return (
      <Head>
        <title>NO SEO DATA - Bolonha Conversas</title>
      </Head>
    );
  }
  return (
    <Head>
      <html lang={data.i18n} />
      <title>{data.title}</title>
      <meta name='robots' content={"index, follow"} />
      <meta name='description' content={data.description} />
      {data.brandCardImage || data.featuredImage ? (
        <meta
          name='image'
          content={data.brandCardImage || data.featuredImage}
        />
      ) : (
        ""
      )}
      <meta name='keywords' content={data.keywords.map(e => e)} />

      <meta property='article:author' content={data.siteUrl + "/biografia/"} />
      <meta name='author' content={data.author} />
      <meta property='article:author' content={data.siteUrl} />
      <meta property='article:publisher' content={data.siteUrl} />

      {/* OpenGraph tags */}
      {data.topology === "post" ? (
        <meta property='og:type' content='article' />
      ) : (
        <meta property='og:type' content='website' />
      )}
      <meta property='og:url' content={data.articleUrl} />
      <meta property='og:site_name' content={data.title} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.description} />
      <meta
        property='og:image'
        content={data.brandCardImage || data.featuredImage}
      />
      <meta name='theme-color' content={data.themeColor || "#FF0081"} />
      <link rel='canonical' href={data.siteUrl + "/" + data.slug} />
      {data.fbAppID ? (
        <meta property='fb:app_id' content={data.social.fbAppID} />
      ) : null}
      {data.twitter ? (
        <meta name='twitter:card' content='summary_large_image' />
      ) : (
        ""
      )}
      {data.twitter ? (
        <meta name='twitter:creator' content={data.twitter} />
      ) : null}
      {data.twitter ? <meta name='twitter:title' content={data.title} /> : ""}
      {data.twitter ? (
        <meta name='twitter:description' content={data.description} />
      ) : (
        ""
      )}
      {data.twitter ? (
        <meta
          name='twitter:image:src'
          content={data.brandCardImage || data.featuredImage}
        />
      ) : (
        ""
      )}
      {data.twitter ? (
        <meta name='twitter:site' content={`@` + data.twitter} />
      ) : (
        ""
      )}
      {data.datePublished ? (
        <meta name='article:published_time' content={data.datePublished} />
      ) : (
        ""
      )}
      {/* Schema.org tags */}
      {data.topology === "pages" ? (
        <script type='application/ld+json' data-schema='Article'>
          {JSON.stringify(data.articleSchema)}
        </script>
      ) : null}
      <script type='application/ld+json' data-schema='WebSite'>
        {JSON.stringify(data.webSiteSchema)}
      </script>
      <script type='application/ld+json' data-schema='Organization'>
        {JSON.stringify(data.orgSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(data.questionSchema)}
      </script>
      {children}
    </Head>
  );
};
export default Seo;
