import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <>
      <style>
        {`
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }
        `}
      </style>
      <Navbar
        ref={navbarMenuRef}
        className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
        expand="lg"
      >
        <Navbar.Brand
          className="navbar-brand"
          href={process.env.PUBLIC_URL + "/#home"}
        >
          {`<${mainBody.firstName} />`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mr-auto">
            {repos.show && (
              <NavLink
                className="nav-item lead navbar-link"
                href={process.env.PUBLIC_URL + "/#projects"}
              >
                Projects
              </NavLink>
            )}
            <NavLink
              className="nav-item lead navbar-link"
              href={about.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </NavLink>
            {about.show && (
              <NavLink
                className="nav-item lead navbar-link"
                href={process.env.PUBLIC_URL + "/#aboutme"}
              >
                About
              </NavLink>
            )}
            {skills.show && (
              <NavLink
                className="nav-item lead navbar-link"
                href={process.env.PUBLIC_URL + "/#skills"}
              >
                Skills
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
});

export default Navigation;
