import React, { ReactElement } from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <h1>hello 3</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
