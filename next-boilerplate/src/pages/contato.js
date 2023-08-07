import React from "react";

import BadgesButtons from "../components/BadgesButtons";
import Row from "../containers/RowContainer";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";
import HeadingContainer from "../containers/HeadingContainer";
import { useTheme } from "next-themes";

export default function Contato() {
  const { theme } = useTheme();

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
        className={"main-wrapper"}
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
            <HeadingContainer classes='m30auto' importance={10} width={400}>
              Contato
            </HeadingContainer>
            <Row
              opt={{
                isBoxed: true,
                classes: "main-container-wrapper page-container",
              }}
            >
              <div className='section row pb-0'>
                <div className='col-12 md:col-6 lg:col-7'>LinkTree</div>
              </div>
            </Row>
          </main>

          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
