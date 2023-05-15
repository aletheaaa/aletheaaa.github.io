import React from 'react'
import github from "../assets/github.png";

interface ProjectItemDescriptionProps {
    id: string;
}

const projectDesc = {
    "FacilityBookingSystem": {
        "title": "Facility Booking System",
        "description": "A website to book facilities.",
        "techStack": ["Flask", "Docker", "SpringBoot", "MySQL"],
        "github": "https://github.com/aletheaaa/Facility-Booking-System"
    },
    "NotesNow": {
        "title": "NotesNow",
        "description": "A marketplace for cheatsheets.",
        "techStack": ["ExpressJS", "NodeJS", "MongoDB"],
        "github": "https://github.com/dailysponge/HEAP2022-G2-BACKEND",
    },
    "FreeFoodie": {
        "title": "FreeFoodie",
        "description": "A website that allows you to view recipies that can be specific to your fridge and to track your calorie intake.",
        "techStack": ["Vue.js", "D3.js", "Firebase"],
        "github": "https://github.com/ZheTaoGuo/IS216Project",
    },
    "goodBooks": {
        "title": "goodBooks",
        "description": "A website to keep track of the books you\'ve read.",
        "techStack": ["Jinja", "SQLite", "Flask"],
        "github": "https://github.com/aletheaaa/goodBooks",
    }
}

function ProjectItemDescription({ id } : ProjectItemDescriptionProps) {
  type ObjectKey = keyof typeof projectDesc;  
  const idVar = id as ObjectKey;

  return (
    <div
        className="col-7"
        style={{ paddingLeft: "20px", position: "relative" }}
        id="projectDesc"
    >
        <h2 style={{ fontWeight: "bold" }}>{projectDesc[idVar]["title"]}</h2>
        <p>
            {projectDesc[idVar]["description"]}
        </p>
        <ul>
            {projectDesc[idVar]["techStack"].map((tech) => (
                <li>{tech}</li>))}
        </ul>
        <a
        href={projectDesc[idVar]["github"]}
        style={{ position: "absolute", right: "100px", bottom: "50px" }}
        target="_blank"
        >
        <img src={github} width="35px" height="35px" />
        </a>
    </div>
  )
}

export default ProjectItemDescription