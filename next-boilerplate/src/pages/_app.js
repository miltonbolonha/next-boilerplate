import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

import Head from "next/head";
import "@fontsource/varela";
import "../styles/styles.scss";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "next-themes";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import Layout from "../components/Layout";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <ThemeProvider>
        <Head>
          <meta name='theme-color' content='#06092B' />
          <meta
            name='description'
            content='Um blog de um desenvolvedor FullStack (LINUX, PHP & NODEJS), fã de rock, política, gatos e inteligência artificial.'
          />
        </Head>
        <DefaultSeo {...SEO} />

        <div className={inter.className}>
          <Layout>
            <NextNProgress
              color='#F231A5'
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
