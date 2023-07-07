import React, { useState, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";

const HeaderContainer = ({ mainMenu, opt }) => {
  const [refState, setRefState] = useState(true);
  const wrapperRef = useRef(null);

  function handleRefState() {
    setRefState(!refState);
  }

  const logoHeader = opt ? opt.logoHeader : null;

  const menuActive = refState ? "visible" : "not-visible";

  const logoLightImage = "/brandimages/logo.png";
  const logoImage = "/brandimages/logo.png";
  const logotype = opt.logoUrl ? (
    <a href={opt.logoUrl} className="logo-link">
      {opt.logoSvg}
    </a>
  ) : (
    <Link
      href={
        opt.urlLocale === undefined || !opt.urlLocale || opt.urlLocale === ""
          ? "/"
          : "/" + opt.urlLocale + "/"
      }
      className="logo-link"
    >
      <Image
        src={opt.isDarkLogo ? logoImage : logoLightImage}
        alt={"Edu4Dev - E"}
        placeholder={"NONE"}
        critical="true"
        className={"main-logo"}
        width={222}
        height={120}
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
      flags={opt.flags}
    />
  );
};
export default HeaderContainer;
