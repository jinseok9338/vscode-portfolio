import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import React from "react";

interface iProjectPageProps {
  title: string;
  isUserKorean: boolean;
  projects: {
    id: number;
    name: string;
    image: string;
    description: string;
    tags: string[];
    source_code: string;
    demo: string;
    korean: string;
  }[];
}

const ProjectsPage = ({ projects, isUserKorean }: iProjectPageProps) => {
  return (
    <>
      <h3>PortFolio</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isUserKorean={isUserKorean}
          />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const projects = getProjects();
  const userlanguages =
    typeof navigator === "undefined"
      ? req?.headers["accept-language"]?.split(",")
      : ["en"];

  const isUserKorean = userlanguages?.includes("ko-KR") ? true : false;
  return {
    props: { title: "Projects", isUserKorean, projects },
  };
}

export default ProjectsPage;
