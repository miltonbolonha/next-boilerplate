import React, { useCallback, useState, useEffect } from "react";
import { ReCaptcha, useReCaptcha } from "next-recaptcha-v3";

import Cookies from "universal-cookie";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import BadgesButtons from "../components/BadgesButtons";
import { Row } from "../components/InsertRow";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";
import HeadingBlock from "../components/HeadingBlock";

export default function Contato() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [token, setToken] = useState(null);
  const [honey, setHoney] = useState("");
  const [success, setSuccess] = useState(null);
  const { executeRecaptcha } = useReCaptcha();
  const { theme, setTheme } = useTheme();

  const cookies = new Cookies();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setChating(true);

      // Generate ReCaptcha token
      const token = await executeRecaptcha("form_submit");
      console.log(token);
      submitEnquiryForm(e);
      return setChating(false);
    },
    [executeRecaptcha, name, message, email, subject]
  );

  const submitEnquiryForm = async (event) => {
    console.log("foiiii");

    const myForm = event.target;
    const formData = new FormData(myForm);
    let landingUrl = myForm["landingUrl"].value;
    const botFieldPrevent = myForm["searchUrl"].value !== "" || false;
    const landingSlashCheck = landingUrl.slice(-1) === "/" || false;

    if (!formData) {
      return console.log({
        message: "No body was sent. Try a POST request or query",
      });
    }
    if (myForm["botField"].value !== "") {
      console.log("bot field detectado");
      return console.log(myForm["botField"].value);
    }
    if (botFieldPrevent) {
      return console.log({ message: "Você não deveria estar aqui!" });
    }

    if (landingSlashCheck) {
      landingUrl = landingUrl.slice(0, -1);
    }

    const fullUrl = encodeURI(
      `${
        siteUrlf + landingUrl
      }?success=1&name=${name}&email=${email}&message=${message}&subject=${subject}&date=${new Date()}`
    );

    const payload = {
      from: brandPromoEmail,
      to: email,
      subject: `${peopleA}, confirme o seu e-mail - Bolonha Conversa`,
      parameters: {
        PROSPECT_NAME: peopleA,
        LANDING_URL: fullUrl,
      },
      body: {
        name: "Nomezim",
        email: "emailizm",
        message: "messagzim",
      },
    };
    cookies.remove("submitedValues");
    cookies.remove("successValue");

    cookies.set("submitedValues", fullUrl, {
      path: "/",
    });
    cookies.set("successValue", false, {
      path: "/",
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        setLoadingForm(true);
        cookies.set("successValue", true, {
          path: "/",
        });

        return navigate(`?success=0&email=${email}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        className={"main-wrapper one-column"}
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
              Contato
            </HeadingBlock>
            <Row
              opt={{
                isBoxed: true,
                classes: "main-container-wrapper page-container",
              }}
            >
              <div className="section row pb-0">
                <div className="col-12 md:col-6 lg:col-7">
                  <form
                    className="contact-form"
                    method="POST"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <input
                      name="landingUrl"
                      defaultValue={location?.pathname}
                    />
                    <input name="searchUrl" defaultValue={location?.search} />
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you’re human:{" "}
                        <input
                          name="botField"
                          onChange={(e) => setHoney(e.target.value)}
                          value={honey}
                        />
                        <input
                          type="hidden"
                          name="form-name"
                          value="ac-subscribe-contact"
                        />
                        <input
                          name="landingUrl"
                          defaultValue={location?.pathname}
                        />
                        <input
                          name="searchUrl"
                          defaultValue={location?.search}
                        />
                        <input
                          name="siteUrl"
                          defaultValue={"https://bolonha.vercel.app"}
                        />
                        <input name="nowDate" defaultValue={new Date()} />
                      </label>
                    </p>

                    <div className="mb-3">
                      <input
                        className="form-input w-full rounded"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e?.target?.value)}
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-input w-full rounded"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-input w-full rounded"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e?.target?.value)}
                        type="text"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-textarea w-full rounded-md"
                        rows={12}
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e?.target?.value)}
                        placeholder="Your message"
                      />
                    </div>

                    <ReCaptcha onValidate={setToken} action="page_view" />

                    <button type="submit" className="btn btn-primary">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>

              {/*               
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                neque doloribus quod sequi veritatis, fugit temporibus cum
                aperiam assumenda at perspiciatis quaerat dolore totam beatae in
                autem iste. Rerum, itaque!
              </p>
              <form action="">
                <label htmlFor="name">
                  Nome Completo:
                  <input type="text" name="name" value="" />
                </label>
                <label htmlFor="name">
                  Assunto:
                  <input type="text" name="name" value="" />
                </label>
                <label htmlFor="name">
                  Fala:
                  <textarea
                    id="content"
                    name="content"
                    rows="5"
                    cols="33"
                  ></textarea>
                  <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_RECAPTCH_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      >
     
      </GoogleReCaptchaProvider>
                  <button>Submit</button>
                </label>
              </form> */}
            </Row>
          </main>

          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
