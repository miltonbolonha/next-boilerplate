import React, { useEffect } from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

import Head from "next/head";
import "../styles/styles.scss";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "next-themes";
import * as gtag from "../lib/gtag";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import Layout from "../components/Layout";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  const router = useRouter();
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
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
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

        <div className={inter.className}>
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
        </div>
      </ThemeProvider>
    </ReCaptchaProvider>
  );
}

export default App;
