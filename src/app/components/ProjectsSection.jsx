"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "Mern stack",
    image: "/images/projects/emg.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Manivardhan12356/jwt-fullstack-project-mern.git",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Music App",
    description: "React.js",
    image: "/images/projects/music.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Manivardhan12356/music-app-frontend.git",
    previewUrl: "https://harmonious-duckanoo-80ca20.netlify.app",
  },
  {
    id: 3,
    title: "Responsive UI with slider card",
    description: "HTML, CSS ,React ,js ,Swiper JS",
    image: "/images/projects/togglehead.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Manivardhan12356/togglehead-in",
    previewUrl: "https://sage-profiterole-29bd87.netlify.app",
  },
  {
    id: 4,
    title: "Flight Ticket UI",
    description: "HTML , CSS",
    image: "/images/projects/provad_Task.png",
    tag: ["All", "Web"],
    previewUrl: "https://monumental-choux-84e15d.netlify.app",
  },
  {
    id: 5,
    title: "E-commercer UI",
    description: "HTML, CSS ,JS",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    previewUrl: "https://nimble-alfajores-d4914d.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
