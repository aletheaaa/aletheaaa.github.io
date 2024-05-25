import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import styled from "styled-components";
import "../jquery-extensions.js";
import { useEffect, useRef, useState } from "react";
import DisplayModeToggle from "./DisplayModeToggle";

const Li = styled.li`
  margin-left: 20px;
  list-style-type: none;
  display: inline-block;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const NavBarEle = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 15px;
  margin-top: 15px;
  margin-right: 30px;
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHamburger, setIsHamburger] = useState(true);

  const expandedNavBar = (
    <NavBarEle
      id="navbar"
      style={{
        opacity: !isExpanded ? "0" : "1",
        transition: "all .2s",
        visibility: !isExpanded ? "hidden" : "visible",
      }}
    >
      <div className="row m-0">
        <div className="col-8">
          <ul>
            <Li>
              <Link href="#top">About Me</Link>
            </Li>
            <Li>
              <Link href="#2">Project</Link>
            </Li>
          </ul>
        </div>
        <div className="col-4 d-flex flex-row-reverse">
          <ul>
            <Li>
              <DisplayModeToggle />
            </Li>
            <Li>
              <Link
                href="https://www.linkedin.com/in/aletheatoh/"
                target="_blank"
              >
                <img src={linkedin} width="35px" height="35px" />
              </Link>
            </Li>
            <Li>
              <Link href="https://github.com/aletheaaa" target="_blank">
                <img src={github} width="35px" height="35px" />
              </Link>
            </Li>
          </ul>
        </div>
      </div>
    </NavBarEle>
  );

  const collapsedNavBar = (
    <div
      id="navbar"
      style={{
        opacity: isExpanded ? "0" : "1",
        transition: "all .3s",
        visibility: isExpanded ? "hidden" : "visible",
        marginLeft: "20px",
        position: "fixed",
        marginTop: "15px",
        zIndex: 1,
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          onClick={() => setIsHamburger(!isHamburger)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          {isHamburger ? (
            <>
              <Bar />
              <Bar />
              <Bar />
            </>
          ) : (
            <>
              <Bar style={{ transform: "translate(0, 11px) rotate(-45deg)" }} />
              <Bar style={{ opacity: 0 }} />
              <Bar style={{ transform: "translate(0, -11px) rotate(45deg)" }} />
            </>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="#top">About Me</Link>
            </li>
            <li className="nav-item">
              <Link href="#2">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    // calling on the extension function
    ($("#navbar") as any).onPositionChanged({
      trigger: function (inOriginalPosition: Boolean) {
        if (!inOriginalPosition) {
          setIsExpanded(false);
        } else {
          setIsExpanded(true);
        }
      },
      interval: 100,
      referencePosition: $("#navbar").position(),
    });
  }, []);

  return (
    <>
      {expandedNavBar}
      {collapsedNavBar}
    </>
    // isExpanded ? expandedNavBar : collapsedNavBar
  );
};

export default NavBar;
