import mainConfigs from "../configs/main-menu.json";

import HeaderContainer from "../containers/HeaderContainer";
import RowContainer from "../containers/RowContainer";

const MainWrapper = ({
  children,
  bgImg,
  darkBgImg,
  hasHeader,
  hasMenu,
  isDarkLogo,
  theme,
  rowWidth,
}) => (
  <>
    <div
      className={"main-wrapper"}
      style={{
        backgroundImage: `url(${theme !== "dark" ? bgImg : darkBgImg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "500px 500px",
      }}
    >
      <RowContainer
        opt={{
          classes: "main-wrapper-inner",
          isBoxed: true,
          bgColor: "#fff",
          rowWidth: rowWidth,
        }}
      >
        {hasHeader !== false ? (
          <HeaderContainer
            opt={{
              mainMenuStatus: mainConfigs.menu.status,
              logoSvg: "logotipoSvg",
              bgOne: "transparent",
              bgTwo: "transparent",
              classes: "header-block",
              hasMenu: hasMenu,
              isDarkLogo: isDarkLogo,
            }}
            mainMenu={mainConfigs.menu.items}
          />
        ) : null}

        <main className='main-container'>{children}</main>
      </RowContainer>
    </div>
  </>
);

export default MainWrapper;
