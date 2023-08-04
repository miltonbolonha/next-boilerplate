import React, { useCallback, useState, useEffect } from "react";
import { ReCaptcha, useReCaptcha } from "next-recaptcha-v3";
import Cookies from "universal-cookie";

import { useTheme } from "next-themes";
import BadgesButtons from "../components/BadgesButtons";
import Row from "../containers/RowContainer";
import MainMenuData from "../configs/main-menu.json";
import HeaderContainer from "../containers/HeaderContainer";
// import HeadingContainer from "../containers/HeadingContainer";

export default function Contato() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [token, setToken] = useState(null);
  const [honey, setHoney] = useState("");

  const [chating, setChating] = useState(false);
  const { executeRecaptcha } = useReCaptcha();
  const { theme, setTheme } = useTheme();

  const siteUrlf = "https://bolonha.vercel.app";

  const cookies = new Cookies();

  const handleSubmit = useCallback(
    async e => {
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

  const submitEnquiryForm = async event => {
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
      from: email,
      to: "miltonbolonha@gmail.com",
      cc: email,
      subject: `${subject}, confirme o seu e-mail - Bolonha Conversa`,
      parameters: {
        PROSPECT_NAME: name,
        LANDING_URL: fullUrl,
      },
      name: name,
      email: email,
      message: message,
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
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        setChating(true);
        cookies.set("successValue", true, {
          path: "/",
        });
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
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
            {/* <HeadingContainer classes='m30auto' importance={10} width={400}>
              Contato
            </HeadingContainer> */}
            <Row
              opt={{
                isBoxed: true,
                classes: "main-container-wrapper page-container",
              }}
            >
              <div className='section row pb-0'>
                <div className='col-12 md:col-6 lg:col-7'>
                  <form
                    className='contact-form'
                    method='POST'
                    onSubmit={e => handleSubmit(e)}
                  >
                    <p className='hidden'>
                      <input
                        name='landingUrl'
                        defaultValue={location?.pathname}
                      />
                      <input name='searchUrl' defaultValue={location?.search} />
                      <label>
                        Don’t fill this out if you’re human:{" "}
                        <input
                          name='botField'
                          onChange={e => setHoney(e.target.value)}
                          value={honey}
                        />
                        <input
                          type='hidden'
                          name='form-name'
                          value='ac-subscribe-contact'
                        />
                        <input
                          name='landingUrl'
                          defaultValue={location?.pathname}
                        />
                        <input
                          name='searchUrl'
                          defaultValue={location?.search}
                        />
                        <input
                          name='siteUrl'
                          defaultValue={"https://bolonha.vercel.app"}
                        />
                        <input name='nowDate' defaultValue={new Date()} />
                      </label>
                    </p>

                    <div className='mb-3'>
                      <input
                        className='form-input w-full rounded'
                        name='name'
                        value={name}
                        onChange={e => setName(e?.target?.value)}
                        type='text'
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        className='form-input w-full rounded'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e?.target?.value)}
                        type='email'
                        placeholder='Your email'
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        className='form-input w-full rounded'
                        name='subject'
                        value={subject}
                        onChange={e => setSubject(e?.target?.value)}
                        type='text'
                        placeholder='Subject'
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <textarea
                        className='form-textarea w-full rounded-md'
                        rows={12}
                        name='message'
                        value={message}
                        onChange={e => setMessage(e?.target?.value)}
                        placeholder='Your message'
                      />
                    </div>

                    <ReCaptcha onValidate={setToken} action='page_view' />

                    <button type='submit' className='btn btn-primary'>
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </Row>
          </main>

          <BadgesButtons opt={opt} questions={opt.pageQuestions} />
        </div>
      </div>
    </>
  );
}
