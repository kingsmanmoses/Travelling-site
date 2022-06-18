import React from "react"
import { Link } from "gatsby"
import "./foot.css"
import { animateScroll as scroll } from "react-scroll"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <footer>
        <div className="fowrap">
          <div className="fodesc">
            <h1 onClick={toggleHome}> KLUXURY</h1>
            <p>We Try Our Best To Give The Best Experience To Our Customers.</p>
          </div>
          <div className="foitems">
            <h2>Contact Us</h2>
            <Link className="folink" to="/about">
              Contact
            </Link>
            <Link className="folink" to="/about">
              Support
            </Link>
            <Link className="folink" to="/about">
              Destinations
            </Link>
            <Link className="folink" to="/about">
              Sponsorships
            </Link>
          </div>
        </div>
        <div className="fowrap">
          <div className="foitems">
            <h2>Videos</h2>
            <Link className="folink" to="/about">
              Youtube
            </Link>
            <Link className="folink" to="/about">
              Life Videos
            </Link>
            <Link className="folink" to="/about">
              Epic
            </Link>
            <Link className="folink" to="/about">
              Accommodations
            </Link>
          </div>
          <div className="foitems">
            <h2>Social Media</h2>
            <Link className="folink" to="/about">
              Instagram
            </Link>
            <Link className="folink" to="/about">
              Facebook
            </Link>
            <Link className="folink" to="/about">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
