import Default from "../../layout/Default/Default"
import Info from "../../components/About/Info/Info"
import Footer from "../../components/Footer/Footer"
import { Fragment } from "react"

function About() {
  return (
    <Fragment>
    <Default>
      <Info />
    </Default>
    {/* <Footer /> */}
    </Fragment>
  )
}

export default About