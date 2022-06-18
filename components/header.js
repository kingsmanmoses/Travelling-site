/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { Link as LinkS } from "react-scroll"
import { animateScroll as scroll } from "react-scroll"
import "./head.css"
import { menuData } from "../data/MenuData"
import { Button } from "./button/Button"

const Header = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  // For the nav change
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <Link className="navlink" to="/" onClick={toggleHome}>
          {" "}
          KLUXURY
        </Link>
        <FaBars className="bars" onClick={toggle} />
        <div className="navmenu">
          {menuData.map((item, index) => (
            <LinkS
              activeClass="love"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="navlink"
              to={item.link}
              key={index}
            >
              {item.title}
            </LinkS>
          ))}
        </div>
        <div className="navbtn">
          <Link to="/trips" className="btn-link">
            <Button buttonStyle="btn--primary" buttonColor="primary">
              Book Flight
            </Button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
