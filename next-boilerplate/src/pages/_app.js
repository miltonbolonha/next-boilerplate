import React from "react";

import "@fontsource/varela";
import "@fontsource-variable/dosis";
import "@fontsource-variable/josefin-sans";
import "../styles/styles.scss";

import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <NextNProgress
          color='#F231A5'
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showSpinner={false}
        />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
