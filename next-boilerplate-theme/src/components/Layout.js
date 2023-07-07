import React, { useState } from "react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="LayoutWrapper">
      <main className="LayoutMain">{children}</main>
    </section>
  );
};

export default Layout;
