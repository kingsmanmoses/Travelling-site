import React from "react"
import "./stats.css"
import { StatsData } from "../../data/StatsData"

const Stats = () => {
  return (
    <>
      <div id="service" className="stacont">
        <h1 className="head">Why Choose Us?</h1>
        <div className="stwrap">
          {StatsData.map((item, index) => {
            return (
              <div key={index} className="stbox">
                <div className="icon">{item.icon}</div>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Stats
