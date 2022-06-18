import React from "react"
import "./trip.css"
import { ImLocation } from "react-icons/im"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../button/Button"

// eslint-disable-next-line react/prop-types
function Trips({ heading }) {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            title
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <div className="trcard" key={index}>
          <Img
            className="trimg"
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <div className="trinfo">
            <div className="txwrap">
              <ImLocation />
              <h1 className="trtitle">{item.node.title}</h1>
            </div>
            <Link to="/trips" className="trbtn">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                {item.node.button}
              </Button>
            </Link>
          </div>
        </div>
      )
    })
    return tripsArray
  }
  return (
    <>
      <div id="trips" className="trcont">
        <h1 className="trhead">{heading}</h1>
        <div className="trwrap">{getTrips(data)}</div>
      </div>
    </>
  )
}

export default Trips
