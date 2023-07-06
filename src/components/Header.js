import React from "react";
import { Row } from "../components/InsertRow";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  ClerkProvider,
  SignedIn,
  useClerk,
  UserButton,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

// import { ClerkProvider } from "@clerk/clerk-react";
// import { ptBR } from "@clerk/localizations";
// import {
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
//   useClerk,
// } from "@clerk/nextjs";
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
  flags,
}) => {
  // const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // console.log(isSignedIn);
  function getFlag(i18n) {
    switch (i18n) {
      case "pt-BR":
        return "BR";
      case "en-US":
        return "US";
      case "de-DE":
        return "DE";
      case "jp-JP":
        return "JP";
      case "ru-RU":
        return "RU";
      case "fr-FR":
        return "FR";
      case "nl-NL":
        return "NL";
      case "es-ES":
        return "ES";
      default:
        return "BR";
    }
  }

  const SignInButton = () => {
    const { openSignIn } = useClerk();
    const appearance = {
      variables: {
        colorPrimary: "#ff5626",
      },
    };

    return (
      <button
        className="cta-btn ml-10"
        onClick={() =>
          openSignIn({
            appearance,
          })
        }
      >
        Restrito
      </button>
    );
  };

  // if (isSignedIn) {
  //   return router.push(`/chat-one-column/`);
  // }
  const clerk_pub_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <header>
      <Row
        opt={{
          isBoxed: false,
          bgColor: bgOne,
          classes: "main-header",
          numColumns: 3,
        }}
      >
        <Row opt={{ isBoxed: false, classes: "header-logo" }}>{logotype}</Row>
        {/* mobile menu */}
        <div className="toggle-dark-mode">
          <button
            onClick={() => setTheme("light")}
            className={theme === "light" ? "active" : ""}
          >
            <Image
              src={"/brandimages/light-mode.svg"}
              alt={"Light Mode"}
              placeholder={"NONE"}
              critical="true"
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
              critical="true"
              width={30}
              height={30}
            />
          </button>
        </div>
        {hasMenu && mainMenuStatus === true ? (
          <>
            <div className="desktop-only">
              <MainMenuContainer
                wrapperRef={wrapperRef}
                refState={refState}
                mainMenuStatus={mainMenuStatus}
                isMobile={false}
                mainMenuItems={mainMenu}
              />
            </div>

            <div
              className={` mobile-only main-header-${
                !refState ? "visible" : "not-visible"
              }`}
            >
              <div className="header-columns toggle-menu">
                <button
                  type="button"
                  id="check-toggle-icon"
                  onClick={handleRefState}
                  aria-haspopup="true"
                  aria-controls="mainmenu"
                  aria-expanded={refState}
                  aria-label="Alternar visibilidade do menu"
                  className={`menu-wrapper menu-bar-icon  ${
                    !refState ? "active opened" : "not-active"
                  }`}
                >
                  ...
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
              />
            </div>
            {/* <ClerkProvider
              localization={localization}
              publishableKey={clerk_pub_key}
              navigate={(to) => navigate(to)}
              appearance={{
                variables: {
                  colorPrimary: "#ff5626",
                },
                layout: {
                  showOptionalFields: true,
                },
              }}
            > */}
            {/* <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut> */}
            {/* </ClerkProvider> */}
          </>
        ) : null}
        {/* desktop menu */}
      </Row>
      <div className="profile-wrapper">
        <ClerkProvider
          localization={ptBR}
          publishableKey={clerk_pub_key}
          navigate={(to) => navigate(to)}
          appearance={{
            variables: {
              colorPrimary: "#ff5626",
            },
            layout: {
              showOptionalFields: true,
            },
          }}
        >
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </ClerkProvider>
      </div>
    </header>
  );
};

export default Header;
