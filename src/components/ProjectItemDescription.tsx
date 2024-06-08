import React from "react";
import { useSelector } from "react-redux";
import github from "../assets/github.png";
import { Theme } from "../types/theme";

interface ProjectItemDescriptionProps {
  id: string;
}

const projectDesc = {
  FacilityBookingSystem: {
    title: "Facility Booking System",
    description: "A website to book facilities.",
    points: [
      "Built in an orchestrated, scalable microservices architecture",
      "Designed and implemented REST APIs and databases simple and complex microservices",
      "Has a RabbitMQ message broker to handle asynchronous communication between microservices",
    ],
    techStack: [
      "Flask",
      "Docker",
      "SpringBoot",
      "MySQL",
      "RabbitMQ",
      "NodeMailer",
    ],
    github: "https://github.com/aletheaaa/Facility-Booking-System",
  },
  NotesNow: {
    title: "NotesNow",
    description: "A marketplace for cheatsheets.",
    points: [
      "Built using the MERN stack",
      "Implemented REST APIs with JavaScript to handle user account and session logic, comments, and rating systems",
    ],
    techStack: ["ExpressJS", "NodeJS", "MongoDB", "ReactJS"],
    github: "https://github.com/dailysponge/HEAP2022-G2-BACKEND",
  },
  FreeFoodie: {
    title: "FreeFoodie",
    description:
      "A website that allows you to view recipies that can be specific to your fridge and to track your calorie intake.",
    points: [
      "Created a dynamic and responsive graph using D3.js to deliver user insights and analytics",
      "Utilised Firebase for user authentication and data storage",
    ],
    techStack: ["Vue.js", "D3.js", "Firebase", "Bootstrap"],
    github: "https://github.com/ZheTaoGuo/IS216Project",
  },
  goodBooks: {
    title: "goodBooks",
    description:
      "A website to keep track of the books you've read and reviewed.",
    points: [
      "Built using the Flask framework and Jinja templating engine",
      "Utilised SQLite for the database",
    ],
    techStack: ["Jinja", "SQLite", "Flask"],
    github: "https://github.com/aletheaaa/goodBooks",
  },
};

function ProjectItemDescription({ id }: ProjectItemDescriptionProps) {
  type ObjectKey = keyof typeof projectDesc;
  const idVar = id as ObjectKey;

  const theme = useSelector((state: Theme) => {
    return state.theme.theme;
  });

  return (
    <div
      className="col-7"
      style={{ paddingLeft: "20px", position: "relative" }}
      id="projectDesc"
    >
      <h2 style={{ fontWeight: "bold" }}>{projectDesc[idVar]["title"]}</h2>
      <p>{projectDesc[idVar]["description"]}</p>
      <ul>
        {projectDesc[idVar]["points"].map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <span
        style={{
          color: "white",
          position: "absolute",
          bottom: "150px",
        }}
      >
        {projectDesc[idVar]["techStack"].map((tech) => (
          <span
            style={{
              padding: "6px",
              backgroundColor: theme == "light" ? "lightgray" : "gray",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            {tech}{" "}
          </span>
        ))}
      </span>
      <a
        href={projectDesc[idVar]["github"]}
        style={{ position: "absolute", right: "100px", bottom: "50px" }}
        target="_blank"
      >
        <img src={github} width="35px" height="35px" />
      </a>
    </div>
  );
}

export default ProjectItemDescription;
