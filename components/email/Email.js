import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button } from "../button/Button"
import "./email.css"

const Email = () => {
  const [button, setButton] = useState(true)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  window.addEventListener("resize", showButton)
  useEffect(() => {
    showButton()
  }, [])
  return (
    <>
      <div id="contact" className="emcont">
        <div className="emcontent">
          <h1>Get Access Exclusive Offers</h1>
          <p>Sign Up To Our Newsletter To Be Get The Latest On Us</p>
          <form action="#">
            <div className="formwrap">
              <label htmlFor="email">
                <input type="email" placeholder="Enter Your Email" id="email" />
              </label>
              {button ? (
                <Link to="/trips">
                  <Button
                    buttonStyle="btn--primary"
                    buttonSize="btn--medium"
                    buttonColor="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Link>
              ) : (
                <Link to="/trips">
                  <Button
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    buttonColor="primary"
                  >
                    Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Email
