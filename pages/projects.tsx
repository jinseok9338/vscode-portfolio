import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import React from "react";

interface iProjectPageProps {
  title: string;
  projects: {
    id: number;
    name: string;
    image: string;
    description: string;
    tags: string[];
    source_code: string;
    demo: string;
  }[];
}

const ProjectsPage = ({ projects }: iProjectPageProps) => {
  return (
    <>
      <h3>PortFolio</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
