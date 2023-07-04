import Head from "next/head";
import "../styles/main.scss";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../static/images/favicon.ico"
        />
      </Head>
      <h1>hello</h1>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
