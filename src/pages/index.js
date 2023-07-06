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
            {/* <Row
            opt={{
              classes: "second-row",
              isBoxed: false,
              bgImg: "alternativePattern",
            }}
          >
            <Row
              opt={{
                classes: "inner-second-row",
                isBoxed: true,
                widthColumns: "0.6fr 0.38fr",
              }}
            >
              <div id="prix">
                <Row
                  opt={{
                    isBoxed: false,
                    numColumns: 1,
                    widthColumns: "0.5fr 1fr",
                    classes: "flower-div",
                  }}
                >
                  <div>
                    <h1>notebook flower</h1>
                  </div>
                  <div>
                    <h2 className="mt50">Fale com a Prix</h2>
                    <p>
                      Somos a primeira Mentoria de Ensino de tecnologia servindo
                      aos nossos amados alunos a experiência de organizar seu
                      ensino com um sistema pedagógico moderno e 04{" "}
                      <strong>Inteligências Artificiais</strong>.
                    </p>
                    <Link href="/" className="secondary-btn light">
                      Experimente Já!
                    </Link>
                  </div>
                </Row>
                <div className="absolute">
                  <h1>notebook plugins</h1>
                </div>
              </div>
              <div>
                <h1>cellphone plugins</h1>
              </div>
            </Row>
          </Row> */}
            {/* <Row opt={{ isBoxed: true }}></Row>
          <div id="preco" className="price-row hero-txt">
            <h2>Preço</h2>
            <div className="price-txt">
              <p>
                No passado aprender programação era um sonho e na prática nem
                sempre a expectativa era empolgante.
              </p>
              <p>
                A <strong>Bolonha Conversa</strong> democratizou o ensino de
                programação <br />
                com a melhor <strong>Inteligência Pedagógica</strong> e{" "}
                <strong>Preços</strong> do mercado.
              </p>
            </div>
            <div className="toggle-price">
              <p className="active">Começe</p>
              <p>Grátis</p>
            </div>
            <Row
              opt={{
                numColumns: 3,
                isBoxed: true,
                classes: "price-box-wrapper",
              }}
            >
              <Link href="/" className="light price-box">
                <h3>Grátis</h3>
                <p>
                  R$<span>00,00</span>
                </p>
                <p>Rota Free</p>
                <strong>Experimente Grátis</strong>
              </Link>
              <Link href="/" className="price-box">
                <h3>Mensal</h3>
                <p>
                  R$<span>45,90</span>
                </p>
                <p>Rota Classic</p>
                <strong>Comece Já</strong>
                <p>
                  <small>*No débito automático</small>
                </p>
              </Link>
              <Link href="/" className="price-box">
                <h3>Mensal</h3>
                <p>
                  R$<span>59,90</span>
                </p>
                <p>Rota VIP</p>
                <strong>Comece Já</strong>
              </Link>
              <Link href="/" className="price-box">
                <h3>Semestral</h3>
                <p>
                  R$<span>249,90</span>
                </p>
                <p>Rota Premium</p>
                <strong>Comece Já</strong>
              </Link>
              <Link href="/" className="price-box">
                <h3>Anual</h3>
                <p>
                  R$<span>449,90</span>
                </p>
                <p>Rota Diamante</p>
                <strong>Comece Já</strong>
              </Link>
              <Link href="/" className="light price-box">
                <h3>Sob consulta</h3>
                <p>Rota Celeste</p>
                <strong>Fale com uma mentorx</strong>
                <p>
                  <small>*Mentoria empresarial.</small>
                </p>
              </Link>
            </Row>
          </div> */}
          </main>
          {/*     
    <main className={styles.main}>
      
      
    </main> */}
          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
