import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jinseok Seo is an avid full stack web developer building websites and applications you'd love to use"
      />

      <meta property="og:title" content="Jinseok Seo's Portfolio" />
      <meta
        property="og:url"
        content="https://vscode-portfolio-six.vercel.app/github"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Jinseok Seo",
};
