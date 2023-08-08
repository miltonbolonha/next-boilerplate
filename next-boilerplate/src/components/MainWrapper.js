import MainMenuData from "../configs/main-menu.json";

import HeaderContainer from "../containers/HeaderContainer";

const MainWrapper = ({
  children,
  bgImg,
  darkBgImg,
  hasHeader,
  hasMenu,
  isDarkLogo,
  theme,
}) => (
  <div
    className={"main-wrapper"}
    style={
      bgImg && theme === "light"
        ? {
            background: `url(${bgImg}) no-repeat`,
          }
        : {
            background: `url(${darkBgImg}) repeat`,
          }
    }
  >
    <div className='main-wrapper-inner'>
      {hasHeader !== false ? (
        <HeaderContainer
          opt={{
            mainMenuStatus: MainMenuData.menu.status,
            logoSvg: "logotipoSvg",
            bgOne: "transparent",
            bgTwo: "transparent",
            classes: "header-block",
            hasMenu: hasMenu,
            isDarkLogo: isDarkLogo,
          }}
          mainMenu={MainMenuData.menu.items}
        />
      ) : null}

      <main className='main-container'>{children}</main>
    </div>
  </div>
);

export default MainWrapper;
