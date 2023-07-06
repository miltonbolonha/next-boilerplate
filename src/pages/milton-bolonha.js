import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import BadgesButtons from "../components/BadgesButtons";
import { Row } from "../components/InsertRow";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";
// import { ClerkProvider } from "@clerk/nextjs";
import HeadingBlock from "../components/HeadingBlock";

export default function MiltonBolonha() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const opt = {
    bgImg: "/brandimages/gray-bg.jpg",
    darkBgImg: "/brandimages/dark-bg.png",
    hasHeader: true,
    hasMenu: true,
    pageQuestions: [],
    badgesWhats: false,
    badgesQuestion: false,
    isDarkLogo: false,
    flags: null, // remove
    urlLocale: "",
  };
  const localization = {
    locale: "pt-BR",
    socialButtonsBlockButton: "Logar com {{provider|titleize}}",
    signUp: {
      start: {
        title: "Crie sua conta",
        subtitle: "continuar para {{applicationName}}",
        actionText: "Tem conta?",
        actionLink: "Logar",
      },
    },
  };
  const clerk_pub_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <>
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
      ></ClerkProvider> */}

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
        <div className="main-wrapper-inner">
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

          <main className="main-container">
            <HeadingBlock classes="m30auto" importance={10} width={400}>
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
