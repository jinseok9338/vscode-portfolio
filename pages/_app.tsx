import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import React from "react";
import Terminal from "../components/Terminal";
import { NextPageContext } from "next";

function MyApp({ Component, pageProps }) {
  const [openTerminal, setOpenTerminal] = useState(false);
  const OpenTerminal = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key == "j") {
      setOpenTerminal((prev) => !prev);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")!
      );
    }
  }, []);

  useEffect(() => {
    addEventListener("keydown", OpenTerminal);
    return removeEventListener("keyup", OpenTerminal);
  }, []);

  return (
    <Layout openTerminal={setOpenTerminal}>
      <Head title={`Jinseok Seo | ${pageProps.title}`} />
      <Component {...pageProps} />
      {openTerminal && <Terminal onClose={setOpenTerminal} />}
    </Layout>
  );
}

export default MyApp;
