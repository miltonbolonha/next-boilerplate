import React, { useState } from "react";

// import {
//   BLOG_AUTHOR,
//   BLOG_AUTHOR_DESCRIPTION,
//   BLOG_AUTHOR_POSITION
// } from 'lib/constants'

// import Profile from 'components/Profile'
// import Sidebar from 'components/Sidebar'
// import MenuBar from 'components/MenuBar'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="LayoutWrapper">
      {/* <Profile
        title={BLOG_AUTHOR}
        position={BLOG_AUTHOR_POSITION}
        authorDescription={BLOG_AUTHOR_DESCRIPTION}
        isMobileHeader={true}
      /> */}
      {/* <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} /> */}
      <main className="LayoutMain">{children}</main>
      {/* <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} /> */}
    </section>
  );
};

export default Layout;
