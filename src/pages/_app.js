import React, { useEffect } from "react";

import Head from "next/head";
import "../styles/main.scss";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "next-themes";
import * as gtag from "../lib/gtag";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  const router = useRouter();
  console.log("Component");
  console.log(Component);
  console.log("pageProps");
  console.log(pageProps);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <Head>
        {/* <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../static/images/favicon.ico"
        /> */}
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Um blog de um desenvolvedor Front End, fã de SVG, Javascript, React e novas tecnologias. Nômade Digital, instrutor na Udemy e viajando o mundo."
        />
      </Head>
      <DefaultSeo {...SEO} />

      <h1>hello</h1>
      <Layout>
        <NextNProgress
          color="#F231A5"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showSpinner={false}
        />
        <Component {...pageProps} />
      </Layout>
      <h1>bye</h1>
    </ThemeProvider>
  );
}

export default App;
