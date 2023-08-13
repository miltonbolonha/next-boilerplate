import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";
import Link from "next/link";

import MainMenuContainer from "../containers/MainMenuContainer";

const Header = ({
  refState,
  menuActive,
  wrapperRef,
  bgOne,
  bgTwo,
  mainMenuStatus,
  hasMenu,
  mainMenuItems,
  mainMenu,
  logo,
  logotype,
  logoImage,
  handleRefState,
  setTheme,
  theme,
}) => {
  return (
    <header>
      <div className='toggle-dark-mode'>
        <button
          onClick={() => setTheme("light")}
          className={theme === "light" ? "active" : ""}
        >
          <Image
            src={"/brandimages/light-mode.svg"}
            alt={"Light Mode"}
            placeholder={"NONE"}
            critical='true'
            className={""}
            width={30}
            height={30}
          />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "active" : ""}
        >
          {" "}
          <Image
            src={"/brandimages/dark-mode.svg"}
            alt={"Dark Mode"}
            placeholder={"NONE"}
            critical='true'
            width={30}
            height={30}
          />
        </button>
      </div>
      <Row
        opt={{
          isBoxed: false,
          bgColor: bgOne,
          classes: "main-header",
          numColumns: 3,
        }}
      >
        {" "}
        <Link href='/' passHref>
          <span className='left-gray-circle' />{" "}
        </Link>
        <Row opt={{ isBoxed: false, classes: "header-logo" }}>{logotype}</Row>
        {hasMenu && mainMenuStatus === true ? (
          <>
            {/* <div className='desktop-only'>
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                mainMenuStatus={mainMenuStatus}
                isMobile={false}
                mainMenuItems={mainMenu}
              />
            </div> */}

            <div
              className={`main-header-${!refState ? "visible" : "not-visible"}`}
            >
              <div className='header-columns toggle-menu'>
                <button
                  type='button'
                  id='check-toggle-icon'
                  onClick={handleRefState}
                  aria-haspopup='true'
                  aria-controls='mainmenu'
                  aria-expanded={refState}
                  aria-label='Alternar visibilidade do menu'
                  className={`door resetButton  ${
                    !refState ? "active opened" : "not-active"
                  }`}
                >
                  <Image
                    src={"/brandimages/door.png"}
                    alt={"Open Menu"}
                    placeholder={"NONE"}
                    critical='true'
                    width={15}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div
              className={`main-menu main-menu-${
                !refState ? "visible" : "not-visible"
              }`}
            >
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                mainMenuStatus={mainMenuStatus}
                isMobile={false}
                mainMenuItems={mainMenu}
                handleRefState={handleRefState}
              />
            </div>
          </>
        ) : null}
      </Row>
    </header>
  );
};

export default Header;
