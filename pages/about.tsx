import { useState } from "react";

const AboutPage = () => {
  const [korean, setKorean] = useState(false);
  return (
    <div
      style={{
        lineHeight: "300%",
      }}
    >
      <h1 id="hi-i-m-jinseok-seo">Hi, I&#39;m Jinseok Seo</h1>
      <p>A junior frontend developer from Korea</p>
      <h2 id="about-me">About Me</h2>
      <ul>
        <li>
          <p>
            {"🌱 I’m currently learning "}
            <a href="https://kubernetes.io/">
              <img
                src="https://img.shields.io/badge/-Kubernetes-005571?style=for-the-badge&amp;logo=Kubernetes&amp;logoColor=ffffff"
                alt="Kubernetes"
              />
            </a>
          </p>
        </li>
        <li>
          <p>
            {"📫 How to reach me "}
            <a href="mailto:jinseok9338@gmail.com">
              <img
                src="https://img.shields.io/badge/-gmail-c14438?style=for-the-badge&amp;logo=Gmail&amp;logoColor=ffffff"
                alt="Gmail Badge"
              />
            </a>{" "}
            <a href="https://twitter.com/jinseok9338">
              <img
                src="https://img.shields.io/badge/twitter-1DA1F2.svg?style=for-the-badge&amp;logo=twitter&amp;logoColor=ffffff"
                alt="Twitter"
              />
            </a>
          </p>
        </li>
      </ul>
      <h2 id="operating-system-tools">Operating System &amp; Tools</h2>
      <p>
        <a href="https://www.apple.com/macos/mojave/">
          <img
            src="https://img.shields.io/badge/macOS-Mojave-292e33?style=flat-square&amp;logo=apple&amp;logoColor=ffffff"
            alt="macOS"
          />
        </a>
        <a href="https://www.centos.org/">
          <img
            src="https://img.shields.io/badge/KaliOs-7.0-blue?style=flat-square&amp;logo=Linux&amp;logoColor=262577"
            alt="KaliOs"
          />
        </a>
      </p>
      <p>
        <a href="https://www.jetbrains.com/pycharm/">
          <img
            src="https://img.shields.io/badge/IDE-PyCharm-yellow?style=flat-square&amp;logo=JetBrains"
            alt="Pycharm"
          />
        </a>
        <a href="https://code.visualstudio.com/">
          <img
            src="https://img.shields.io/badge/IDE-VSCode-%23007ACC?style=flat-square&amp;logo=Visual-studio-code"
            alt="VS Code"
          />
        </a>
      </p>
      <h2 id="technology-stack">Technology Stack</h2>
      <p>
        <a href="https://www.python.org/">
          <img
            src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&amp;logo=python&amp;logoColor=ffffff"
            alt="Python"
          />
        </a>
        <a href="https://golang.org/">
          <img
            src="https://img.shields.io/badge/-Golang-00ADD8?style=flat-square&amp;logo=go&amp;logoColor=ffffff"
            alt="Golang"
          />
        </a>
        <a href="https://www.rust-lang.org/">
          <img
            src="https://img.shields.io/badge/-Rust-000000?style=flat-square&amp;logo=rust&amp;logoColor=ffffff"
            alt="Rust"
          />
        </a>
        <a href="https://www.javascript.com/">
          <img
            src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&amp;logo=javascript&amp;logoColor=000000&amp;labelColor=%23F7DF1C&amp;color=%23FFCE5A"
            alt="JavaScript"
          />
        </a>
      </p>
      <p>
        <a href="https://redis.io/">
          <img
            src="https://img.shields.io/badge/-Redis-DC382D?style=flat-square&amp;logo=Redis&amp;logoColor=ffffff"
            alt="Redis"
          />
        </a>
        <a href="https://www.mysql.com/">
          <img
            src="https://img.shields.io/badge/-PostGresSQL-4479A1?style=flat-square&amp;logo=PostgreSQL&amp;logoColor=ffffff"
            alt="PostGres"
          />
        </a>
        <a href="https://www.mongodb.com/">
          <img
            src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&amp;logo=MongoDB&amp;logoColor=ffffff"
            alt="MongoDB"
          />
        </a>
      </p>
      <p>
        <a href="https://git-scm.com/">
          <img
            src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&amp;logo=git&amp;logoColor=%23ffffff"
            alt="Git"
          />
        </a>
        <a href="https://www.docker.com/">
          <img
            src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&amp;logo=docker&amp;logoColor=ffffff"
            alt="Docker"
          />
        </a>
        <a href="https://kubernetes.io/">
          <img
            src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&amp;logo=Kubernetes&amp;logoColor=ffffff"
            alt="Kubernetes"
          />
        </a>
      </p>
      <p>
        <a href="https://git-scm.com/">
          <img
            src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&amp;logo=React&amp;logoColor=%23ffffff"
            alt="React"
          />
        </a>
        <a href="https://www.docker.com/">
          <img
            src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&amp;logo=Next.js&amp;logoColor=ffffff"
            alt="NextJs"
          />
        </a>
        <a href="https://kubernetes.io/">
          <img
            src="https://img.shields.io/badge/-Svelte-FF3E00?style=flat-square&amp;logo=Svelte&amp;logoColor=ffffff"
            alt="Svelte"
          />
        </a>
      </p>
      <h2 id="stats">Stats</h2>
      <p>
        <img
          src="https://github-readme-stats.vercel.app/api?username=jinseok9338&show_icons=true&theme=dracula"
          alt="jinseok9338"
        />
      </p>

      <p>
        <img
          src="http://img.shields.io/badge/Code%20Time-2%2C158%20hrs%2046%20mins-blue"
          alt="Code Time"
        />
      </p>
      <p>
        <img
          src="http://img.shields.io/badge/Profile%20Views-164-blue"
          alt="Profile Views"
        />
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
