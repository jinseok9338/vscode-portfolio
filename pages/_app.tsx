import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import React from "react";
import Terminal from "../components/Terminal";

function MyApp({ Component, pageProps }) {
  const clear = {
    exec: ({ structure, history, cwd }, args) => {
      return { structure, cwd, history: [] };
    },
  };

  const extensions = { clear };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")!
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Jinseok Seo | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Terminal />
    </Layout>
  );
}

export default MyApp;
