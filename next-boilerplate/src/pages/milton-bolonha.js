import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import BadgesButtons from "../components/BadgesButtons";
import { Row } from "../components/InsertRow";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";
import HeadingBlock from "../components/HeadingBlock";

export default function MiltonBolonha() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const isGithubPages = process.env.IS_GITHUB_PAGE || false;
  const THEME_FOLDER = isGithubPages ? "/" + process.env.THEME_FOLDER : "";
  const opt = {
    bgImg: THEME_FOLDER + "/brandimages/gray-bg.jpg",
    darkBgImg: THEME_FOLDER + "/brandimages/dark-bg.png",
    hasHeader: true,
    hasMenu: true,
    pageQuestions: [],
    badgesWhats: false,
    badgesQuestion: false,
    isDarkLogo: false,
    flags: null, // remove
    urlLocale: "",
  };

  return (
    <>
      <div
        className={"main-wrapper blog-list"}
        style={
          opt.bgImg && theme === "light"
            ? {
                background: `url(${opt.bgImg}) no-repeat`,
              }
            : {
                background: `url(${opt.darkBgImg}) repeat`,
              }
        }
      >
        <div className='main-wrapper-inner'>
          {opt.hasHeader !== false ? (
            <HeaderContainer
              opt={{
                mainMenuStatus: MainMenuData.menu.status,
                logoSvg: "logotipoSvg",
                bgOne: "transparent",
                bgTwo: "transparent",
                classes: "header-block",
                flags: opt.flags,
                urlLocale: opt.urlLocale,
                hasMenu: opt.hasMenu,
                isDarkLogo: opt.isDarkLogo,
              }}
              mainMenu={MainMenuData.menu.items}
            />
          ) : null}

          <main className='main-container'>
            <HeadingBlock classes='m30auto' importance={10} width={400}>
              Milton Bolonha - Especialista em Tecnologia
            </HeadingBlock>
            <Row
              opt={{
                isBoxed: true,
                classes: "main-container-wrapper page-container",
              }}
              content={"content"}
            ></Row>
          </main>

          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
