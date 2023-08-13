import React from "react";
import Link from "next/link";

const NotFoundPage = () => (
  <section>
    <h1>404</h1>
    <p>Ué? Cadê? Parece que não tem o que você procura.</p>
    <Link href='/' passHref>
      De volta ao blog!
    </Link>
  </section>
);

export default NotFoundPage;
