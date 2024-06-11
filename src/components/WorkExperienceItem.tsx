import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import github from "../assets/github.png";
import { Theme } from "../types/theme";
import { FiArrowUpRight } from "react-icons/fi";

interface WorkExperienceItemProps {
  id: string;
}

const workExperienceDesc = {
  jpMorgan: {
    name: "JPMorgan Chase & Co.",
    date: "2024",
    role: "Summer Analyst",
    points: [
      "Developed a tool utilizing LLM and LangChain to analyze documents and identify discrepancies both within individual documents and across multiple documents",
    ],
    techStack: ["LLM", "LangChain"],
    link: "https://www.jpmorganchase.com/",
  },
  zenera: {
    name: "Zenera",
    date: "2023",
    role: "Software Engineer Intern",
    points: [
      "Built the frontend of a web app using ReactJS and the frontend of a mobile app using React Native",
      "Designed and implemented REST APIs for the web and mobile applications using ExpressJS and MongoDB",
      "Developed card payment integration for website using Stripe",
    ],
    techStack: ["ReactJS", "React Native", "ExpressJS", "NodeJS", "MongoDB"],
    link: "https://www.zenera.sg/",
  },
  smuCT: {
    name: "Singapore Management University",
    date: "2022",
    role: "Teaching Assistant - Computational Thinking",
    points: ["Addressed student queries in a clear and concise manner"],
    techStack: ["Data Structures and Algorithms"],
    link: "https://www.smu.edu.sg/",
  },
  smuAF: {
    name: "Singapore Management University",
    date: "2023",
    role: "Teaching Assistant - Analytics Foundation",
    points: ["Answered student questions and provided guidance on assignments"],
    techStack: ["Tableau", "Data Analysis using Python"],
    link: "https://www.smu.edu.sg/",
  },
};

function WorkExperienceItem({ id }: WorkExperienceItemProps) {
  type ObjectKey = keyof typeof workExperienceDesc;
  const idVar = id as ObjectKey;
  const divRef = useRef<HTMLDivElement>(null);

  const theme = useSelector((state: Theme) => {
    return state.theme.theme;
  });

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.cursor = "pointer";
      divRef.current.onmouseover = () => {
        if (divRef.current)
          divRef.current.style.backgroundColor =
            theme === "light" ? "whitesmoke" : "#262626";
      };
      divRef.current.onmouseleave = () => {
        if (divRef.current) divRef.current.style.backgroundColor = ""; // Reset to original color
      };
    }
  }, [theme]);

  const handleClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="mx-auto col-6 my-3 workExperienceItem p-3 rounded"
      style={{
        color: theme === "light" ? "black" : "white",
      }}
      key={idVar}
      ref={divRef}
      onClick={() => handleClick(workExperienceDesc[idVar]["link"])}
    >
      <div className="row">
        <h4 className="col-11">{workExperienceDesc[idVar]["role"]}</h4>
        <div className="col-1 ">
          <FiArrowUpRight size="25px" />
        </div>
      </div>
      <div className="row">
        <span className="col" style={{ position: "relative", top: "-5px" }}>
          {workExperienceDesc[idVar]["name"]}
        </span>
        <span className="col d-flex justify-content-end px-5">
          {workExperienceDesc[idVar]["date"]}
        </span>
      </div>
      <ul>
        {workExperienceDesc[idVar]["points"].map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <span
        style={{
          color: "white",
        }}
      >
        {workExperienceDesc[idVar]["techStack"].map((tech) => (
          <span
            style={{
              padding: "6px",
              backgroundColor: theme == "light" ? "lightgray" : "gray",
              borderRadius: "10px",
              marginRight: "10px",
            }}
            id={tech}
          >
            {tech}{" "}
          </span>
        ))}
      </span>
    </div>
  );
}

export default WorkExperienceItem;
