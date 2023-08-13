import React, { useState, useEffect } from "react";
import MainWrapper from "../components/MainWrapper";
import mainConfigs from "../configs/main-infos.json";
import { useTheme } from "next-themes";

const MainWrapperContainer = ({ children, rowWidth }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isGithubPages = process.env.IS_GITHUB_PAGE || false;
  const THEME_FOLDER = isGithubPages ? "/" + process.env.THEME_FOLDER : "";
  const opt = {
    ...mainConfigs,
    bgImg: THEME_FOLDER + "/brandimages/gray-bg.jpg",
    darkBgImg: THEME_FOLDER + "/brandimages/dark-bg.jpg",
  };

  // useEffect  only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <MainWrapper
      bgImg={opt.bgImg}
      darkBgImg={opt.darkBgImg}
      hasHeader={opt.pages.hasHeader}
      hasMenu={opt.pages.hasMenu}
      isDarkLogo={opt.globals.isDarkLogo}
      theme={theme}
      rowWidth={rowWidth}
      killSeo={true}
    >
      {children}
    </MainWrapper>
  );
};

export default MainWrapperContainer;
