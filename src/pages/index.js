import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import BadgesButtons from "../components/BadgesButtons";
import { Row } from "../components/InsertRow";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";

export default function Home() {
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

          <main className="main-container" id="site-content">
            <Row opt={{ classes: "cta-infos", isBoxed: true, numColumns: 2 }}>
              <div className="hero-txt">
                <h2>Cadernos de estudo</h2>
                <p>
                  Crianças CTOs de todo o Brasil: Chegou a{" "}
                  <strong>Bolonha Conversa</strong>
                  ! <br />A mentoria de ensino inteligente e disponível
                  <br />
                  24 horas por dia, 7 dias da semana para te ajudar.
                </p>
                <Link href="/" className="cta-btn hero-btn">
                  Experimente Já!
                </Link>
                <Link href="/" className="secondary-btn">
                  Conheça a Bolonha Conversa
                </Link>
              </div>
              <div className="hero-img">
                <Image
                  src={"/brandimages/laptop-reading.png"}
                  alt={"Maskot Reading"}
                  placeholder={"NONE"}
                  critical="true"
                  className={""}
                  width={300}
                  height={300}
                />
              </div>
            </Row>
            <Row
              opt={{
                numColumns: 2,
                isBoxed: true,
                classes: "hero-txt contact-wrapper",
              }}
            >
              <Image
                src={"/brandimages/envelope-greeting.png"}
                alt={"Maskot Contact"}
                placeholder={"NONE"}
                critical="true"
                className={""}
                width={300}
                height={300}
              />
              <div id="contato" className="contact-info">
                <h2>Contato</h2>
                <p>
                  Fale com a gente por meio do e-mail:{" "}
                  <strong>contato@bolonha.dev</strong>
                </p>
              </div>
            </Row>
          </main>

          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
