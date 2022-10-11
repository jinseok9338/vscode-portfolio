import ThemeInfo from "../components/ThemeInfo";
import styles from "../styles/SettingsPage.module.css";

const SettingsPage = ({ isUserKorean }) => {
  return (
    <>
      <h2>{`${isUserKorean ? "테마 바꾸기" : "Manage Themes"}`}</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          description="Official Dracula Theme. A dark theme for many editors, shells, and more."
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          description="A simple theme with bright colors."
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
        <ThemeInfo
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
          description="A VS Code theme for the night owls out there."
        />
      </div>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const userlanguages =
    typeof navigator === "undefined"
      ? req?.headers["accept-language"]?.split(",")
      : ["en"];

  const isUserKorean = userlanguages?.includes("ko-KR") ? true : false;
  return {
    props: { title: "Setting", isUserKorean },
  };
}

export default SettingsPage;
