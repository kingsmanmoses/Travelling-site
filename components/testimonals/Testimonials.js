/* eslint-disable react/no-unescaped-entities */
import React from "react"
import "./test.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["test1", "test2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div id="about" className="tstcont">
        <h2 className="topline">Testimonials</h2>
        <p className="desc">What People Have To Say About Us</p>
        <div className="tstwrap">
          <div className="colone">
            <div className="testimonial">
              <IoMdCheckmarkCircleOutline className="io" />
              <h3>Okoye Moses</h3>
              <p>
                {" "}
                "The greatest experience of a life time checked out there this
                site from a friend and turned out to be the best for planning
                vacations will always recommend them for your travel planning."{" "}
              </p>
            </div>
            <div className="testimonial">
              <FaRegLightbulb className="lb" />
              <h3>Kingsman Iceage</h3>
              <p>
                {" "}
                "Won't lie this is one of the best to plan any trip you wish to
                desire me and my family had one of the smoothest trip planned
                without any issues."{" "}
              </p>
            </div>
          </div>
          <div className="coltwo">
            {data.allFile.edges.map((image, key) => (
              <Img
                key={key}
                fluid={image.node.childImageSharp.fluid}
                className="images"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
