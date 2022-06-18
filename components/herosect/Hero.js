/* eslint-disable semi */
import React from "react"
import { Button } from "../button/Button"
import { Link } from "gatsby"
import "./hero.css"
import myvideo from "../../vid/vid2.mp4"

const Hero = () => {
  return (
    <>
      <div className="herocont">
        <div className="herobg">
          <video
            src={myvideo}
            autoPlay
            loop
            muted
            type="video/mp4"
            playsInline
          />
        </div>
        <div className="herocontent">
          <div className="heroitems">
            <h1>Choose Your Beautiful Destination</h1>
            <p>Get To Explore The World In Another Way.</p>
            <Link to="/trips">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Pick A Place
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
