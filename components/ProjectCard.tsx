import Image from "next/image";
import React from "react";
import styles from "../styles/ProjectCard.module.css";

interface iProjectsCardProps {
  isUserKorean: boolean;
  project: {
    id: number;
    name: string;
    image: string;
    description: string;
    tags: string[];
    source_code: string;
    demo: string;
    korean: string;
  };
}

const ProjectCard = ({ project, isUserKorean }: iProjectsCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={600} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{isUserKorean ? project.korean : project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
