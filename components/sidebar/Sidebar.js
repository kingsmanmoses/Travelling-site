/* eslint-disable react/prop-types */
import React from "react"
import { FaTimes } from "react-icons/fa"
import { menuData } from "../../data/MenuData"
import { Button } from "../button/Button"
import { Link as LinkS } from "react-scroll"
import { Link } from "gatsby"
import "./side.css"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside
        onClick={toggle}
        className={isOpen ? "sidecont active" : "sidecont"}
      >
        <FaTimes className="times" onClick={toggle} />
        <div className="side-contmenu">
          <div className="sidemenu">
            {menuData.map((item, index) => (
              <LinkS
                onClick={toggle}
                activeClass="love"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="sidelink"
                to={item.link}
                key={index}
              >
                {item.title}
              </LinkS>
            ))}
          </div>
          <div className="navbtn2">
            <Link to="/trips" className="btn-link">
              <Button buttonStyle="btn--primary" buttonColor="primary">
                Book Flight
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
