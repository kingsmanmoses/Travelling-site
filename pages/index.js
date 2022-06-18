import * as React from "react"
import Email from "../components/email/Email"
import Hero from "../components/herosect/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats/Stats"
import Testimonials from "../components/testimonals/Testimonials"
import Trips from "../components/trips/Trips"

if (typeof window !== "undefined") {
  console.log("You are on the browser")
  // ✅ Can use window here
} else {
  console.log("You are on the server")
  // ⛔️ Don't use window here
}
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="The World Beyond Imagination" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
