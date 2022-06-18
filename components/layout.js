/* eslint-disable semi */
import * as React from "react"
import { useState } from "react"
import Footer from "./footer/Footer"
import Header from "./header"
import "./layout.css"
import Sidebar from "./sidebar/Sidebar"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
