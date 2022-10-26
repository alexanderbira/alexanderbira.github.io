import React from "react";
import projectStyles from "./Projects.module.css";
import projectsList from "./projects.json";
import Card from "./Card";
import line from "./line.svg";

export default function Projects() {
  return (
    <div className={projectStyles.projects}>
      <h1 className={projectStyles.title}><span className={projectStyles.titleText} style={{backgroundImage: `url(${line})`}}>Projects</span></h1>
      <p className={projectStyles.info}>
        Here are some of the projects I've worked on.<br/><span className={projectStyles.help}>(Click on a project's title to open it)</span>
      </p>
      <div className={projectStyles.cards}>
        {projectsList.map((project, i) => (
          <Card
            name={project.name}
            date={project.date}
            description={project.description}
            url={project.url}
            image={project.image}
            tags={project.tags}
            index={projectsList.length-i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}