import React, { useCallback, useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import { useAnimation, motion } from "framer-motion";
import styled from "styled-components";
import ProjectItemDescription from "./ProjectItemDescription";
import { useSelector } from "react-redux";
import { Theme } from "../types/theme";
import useVisibility from "../hooks/useVisibility";

// animation for when the project section is in view
const ProjectVariant = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};
const ProjectTableVariant = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};
const ProjectItemVariant = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const underLineVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: "70%", opacity: 0 },
};

const ProjectListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  display: block;
`;

const ProjectListItemDate = styled.span`
  font-size: 17px;
  padding-left: 7px;
  color: lightslategrey;
`;

const Projects = () => {
  const HeaderControls = useAnimation();
  const ProjectTableControls = useAnimation();
  const underLineControls = useAnimation();

  const targetRef = useVisibility("PROJECTS");
  const HeaderRef = React.useRef<HTMLDivElement>(null);
  const HeaderIsInViewport = useIsInViewport(HeaderRef);
  useEffect(() => {
    if (!HeaderRef.current) return;
    if (HeaderIsInViewport) {
      HeaderControls.start("visible");
    } else {
      HeaderControls.start("hidden");
    }
  }, [HeaderIsInViewport, HeaderControls]);

  const ProjectTableRef = React.useRef<HTMLDivElement>(null);
  const ProjectTableIsInViewport = useIsInViewport(ProjectTableRef);
  useEffect(() => {
    if (!ProjectTableRef.current) return;
    if (ProjectTableIsInViewport) {
      ProjectTableControls.start("visible");
    } else {
      ProjectTableControls.start("hidden");
    }
  }, [ProjectTableIsInViewport, ProjectTableControls]);

  const underLineRef = React.useRef<HTMLDivElement>(null);
  const underLineIsInViewport = useIsInViewport(underLineRef);
  useEffect(() => {
    if (!underLineRef.current) return;
    if (underLineIsInViewport) {
      underLineControls.start("visible");
    } else {
      underLineControls.start("hidden");
    }
  }, [underLineIsInViewport, underLineControls]);

  const [ProjectItemSelected, setIsProjectItemSelected] = React.useState(
    "FacilityBookingSystem"
  );
  const [ProjectItemHovered, setIsProjectItemHovered] = React.useState(-1);

  const theme = useSelector((state: Theme) => {
    return state.theme.theme;
  });

  return (
    <div
      id="projects"
      style={{
        padding: "75px 10%",
        height: "100vh",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
      ref={targetRef}
    >
      <motion.h2
        variants={ProjectVariant}
        initial="hidden"
        animate={HeaderControls}
        ref={HeaderRef}
        style={{
          textAlign: "center",
          padding: "20px 0",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Projects I have done
      </motion.h2>
      <motion.div
        variants={underLineVariant}
        animate={underLineControls}
        ref={underLineRef}
        initial="hidden"
        style={{
          border: theme == "light" ? "1px black solid" : "1px white solid",
          width: "12%",
          margin: "auto",
          position: "relative",
          top: "-10px",
        }}
      ></motion.div>
      <motion.div
        style={{
          padding: "50px 150px",
          color: theme === "light" ? "black" : "white",
        }}
        ref={ProjectTableRef}
        variants={ProjectTableVariant}
        initial="hidden"
        animate={ProjectTableControls}
      >
        <div className="row">
          <motion.div
            className="col-5"
            id="projectsList"
            variants={{
              open: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.1,
                },
              },
              closed: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            animate={ProjectTableIsInViewport ? "open" : "closed"}
          >
            <motion.div variants={ProjectItemVariant}>
              <ProjectListItem
                className="chosen"
                id="FacilityBookingSystem"
                onMouseEnter={() => setIsProjectItemHovered(0)}
                onMouseLeave={() => setIsProjectItemHovered(-1)}
                onClick={() =>
                  setIsProjectItemSelected("FacilityBookingSystem")
                }
                style={{
                  backgroundColor:
                    theme == "light"
                      ? ProjectItemHovered === 0 ||
                        ProjectItemSelected === "FacilityBookingSystem"
                        ? "rgb(239, 239, 239)"
                        : "white"
                      : ProjectItemHovered === 0 ||
                        ProjectItemSelected === "FacilityBookingSystem"
                      ? "#262626"
                      : "black",
                  cursor: ProjectItemHovered === 0 ? "pointer" : "auto",
                  color: theme == "light" ? "black" : "white",
                }}
              >
                Facility Booking System <br />
                <ProjectListItemDate>2023</ProjectListItemDate>
              </ProjectListItem>
            </motion.div>

            <motion.div variants={ProjectItemVariant}>
              <ProjectListItem
                id="NotesNow"
                onMouseEnter={() => setIsProjectItemHovered(1)}
                onMouseLeave={() => setIsProjectItemHovered(-1)}
                onClick={() => setIsProjectItemSelected("NotesNow")}
                style={{
                  backgroundColor:
                    theme == "light"
                      ? ProjectItemHovered === 1 ||
                        ProjectItemSelected === "NotesNow"
                        ? "rgb(239, 239, 239)"
                        : "white"
                      : ProjectItemHovered === 1 ||
                        ProjectItemSelected === "NotesNow"
                      ? "#262626"
                      : "black",
                  cursor: ProjectItemHovered === 1 ? "pointer" : "auto",
                  color: theme == "light" ? "black" : "white",
                }}
              >
                NotesNow <br />
                <ProjectListItemDate>2022</ProjectListItemDate>
              </ProjectListItem>
            </motion.div>

            <motion.div variants={ProjectItemVariant}>
              <ProjectListItem
                id="FreeFoodie"
                onMouseEnter={() => setIsProjectItemHovered(2)}
                onMouseLeave={() => setIsProjectItemHovered(-1)}
                onClick={() => setIsProjectItemSelected("FreeFoodie")}
                style={{
                  backgroundColor:
                    theme == "light"
                      ? ProjectItemHovered === 2 ||
                        ProjectItemSelected === "FreeFoodie"
                        ? "rgb(239, 239, 239)"
                        : "white"
                      : ProjectItemHovered === 2 ||
                        ProjectItemSelected === "FreeFoodie"
                      ? "#262626"
                      : "black",
                  cursor: ProjectItemHovered === 2 ? "pointer" : "auto",
                  color: theme == "light" ? "black" : "white",
                }}
              >
                FreeFoodie <br />
                <ProjectListItemDate>2022</ProjectListItemDate>
              </ProjectListItem>
            </motion.div>

            <motion.div variants={ProjectItemVariant}>
              <ProjectListItem
                id="goodBooks"
                onMouseEnter={() => setIsProjectItemHovered(3)}
                onMouseLeave={() => setIsProjectItemHovered(-1)}
                onClick={() => setIsProjectItemSelected("goodBooks")}
                style={{
                  backgroundColor:
                    theme == "light"
                      ? ProjectItemHovered === 3 ||
                        ProjectItemSelected === "goodBooks"
                        ? "rgb(239, 239, 239)"
                        : "white"
                      : ProjectItemHovered === 3 ||
                        ProjectItemSelected === "goodBooks"
                      ? "#262626"
                      : "black",
                  cursor: ProjectItemHovered === 3 ? "pointer" : "auto",
                  color: theme == "light" ? "black" : "white",
                }}
              >
                goodBooks <br />
                <ProjectListItemDate>2022</ProjectListItemDate>
              </ProjectListItem>
            </motion.div>
          </motion.div>
          <ProjectItemDescription
            id={ProjectItemSelected}
          ></ProjectItemDescription>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
