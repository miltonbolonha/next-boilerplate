import React from "react";

const Layout = ({ children }) => {
  return (
    <section className='LayoutWrapper'>
      <main className='LayoutMain'>{children}</main>
    </section>
  );
};

export default Layout;
