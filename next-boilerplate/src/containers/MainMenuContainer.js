import React from "react";
import MainMenuList from "../components/MainMenuList";
import OverlayBlock from "../components/OverlayBlock";

const MainMenuContainer = ({
  isMobile,
  wrapperRef,
  mainMenuItems,
  refState,
  handleRefState,
}) => {
  const isVisibleClass = !refState ? "visible" : "not-visible";
  const navClasses = isMobile
    ? "main-nav menu-state-" + isVisibleClass
    : "main-nav main-header-" + isVisibleClass;
  const labelledby = isMobile ? "check-toggle-icon" : null;
  return (
    <>
      <div onClick={handleRefState}>
        <OverlayBlock hide={refState} />
      </div>
      <nav
        className={navClasses}
        ref={wrapperRef}
        id='site-navigation'
        itemScope='itemScope'
        itemType='https://schema.org/SiteNavigationElement'
      >
        <ul
          className='main-ul'
          id='mainmenu'
          role='menu'
          aria-labelledby={labelledby}
        >
          {mainMenuItems?.map((listMobile, indxMobile) => {
            const y = 1 + indxMobile;
            return (
              <MainMenuList list={listMobile} key={y} isMobile={isMobile} />
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default MainMenuContainer;
