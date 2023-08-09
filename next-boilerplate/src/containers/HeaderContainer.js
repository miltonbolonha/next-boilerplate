import React, { useState, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";

const HeaderContainer = ({ mainMenu, opt }) => {
  const [refState, setRefState] = useState(true);
  const wrapperRef = useRef(null);
  const { theme, setTheme } = useTheme();

  function handleRefState() {
    setRefState(!refState);
  }

  const logoHeader = opt ? opt.logoHeader : null;

  const menuActive = refState ? "visible" : "not-visible";

  const logoLightImage = "/brandimages/logo.png";
  const logoImage = "/brandimages/logo.png";
  const logotype = opt.logoUrl ? (
    <a href={opt.logoUrl} className='logo-link'>
      {opt.logoSvg}
    </a>
  ) : (
    <Link href={"/"} className='logo-link'>
      <Image
        src={opt.isDarkLogo ? logoImage : logoLightImage}
        alt={"Bolonha Conversas"}
        placeholder={"NONE"}
        critical='true'
        className={"main-logo"}
        width={120}
        height={43}
      />
    </Link>
  );
  return (
    <Header
      logoSvg={opt.logoSvg}
      hasMenu={opt.hasMenu}
      refState={refState}
      handleRefState={handleRefState}
      logoComponent={logoHeader}
      mainMenu={mainMenu}
      logoUrl={opt.logoUrl}
      menuActive={menuActive}
      logo={logotype}
      logotype={logotype}
      logoImage={logoImage}
      wrapperRef={wrapperRef}
      bgOne={opt.bgOne || "#e9e9ed"}
      bgTwo={opt.bgTwo || "#f6f7fa"}
      mainMenuStatus={opt.mainMenuStatus}
      theme={theme}
      setTheme={setTheme}
    />
  );
};
export default HeaderContainer;
