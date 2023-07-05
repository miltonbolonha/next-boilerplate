import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const NotFoundPage = () => (
  <section>
    <NextSeo title="404: Not found | Willian Justen" />
    <h1>404</h1>
    <p>Ué? Cadê? Parece que não tem o que você procura.</p>
    <Link href="/" passHref>
      De volta ao blog!
    </Link>
  </section>
);

export default NotFoundPage;
