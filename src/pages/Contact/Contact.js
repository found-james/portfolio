import Default from "../../layout/Default/Default"
import Info from "../../components/Contact/Info/Info"
import { Fragment } from "react"
import Footer from "../../components/Footer/Footer"

function Contact() {
  return (
    <Fragment>
      <Default>
        <Info />
      </Default>
      <Footer />
    </Fragment>
  )
 }

export default Contact