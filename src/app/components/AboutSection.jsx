"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AccordionExpandIcon from "./Accordion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Remix.js</li>
        <li>Python</li>
        <li>Flask</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>{`Bachelor's degree (B.Tech)`}</li>
        <li>Jawaharlal Nehru Technological University, Hyderabad</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <AccordionExpandIcon />
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg flex">
            I am a full stack web developer with a passion for creating interactive and responsive web applications.
            I have experience working with JavaScript, Next.js, Remix.js, React.js, Redux, Node.js, Express.js,
            MongoDB, PostgreSQL, HTML, CSS, and Git. I am a quick learner and always looking to expand my
            knowledge and skill set. I am a team player and excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;
