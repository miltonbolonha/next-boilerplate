import React from "react";
import MainWrapper from "../components/MainWrapper";
import mainConfigs from "../configs/main-infos.json";
const MainWrapperContainer = ({ children }) => {
  const { theme } = useTheme();
  const isGithubPages = process.env.IS_GITHUB_PAGE || false;
  const THEME_FOLDER = isGithubPages ? "/" + process.env.THEME_FOLDER : "";
  const opt = {
    ...mainConfigs,
    bgImg: THEME_FOLDER + "/brandimages/gray-bg.jpg",
    darkBgImg: THEME_FOLDER + "/brandimages/dark-bg.png",
  };
  return (
    <MainWrapper
      bgImg={opt.bgImg}
      darkBgImg={opt.darkBgImg}
      hasHeader={opt.index.hasHeader}
      hasMenu={opt.index.hasMenu}
      isDarkLogo={opt.globals.isDarkLogo}
      theme={theme}
    >
      {children}
    </MainWrapper>
  );
};

export default MainWrapperContainer;
