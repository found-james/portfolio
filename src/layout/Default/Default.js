import { Fragment } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Default({ children }) {
  return (
    <Fragment>
    <Header />
        { children }
    <Footer />
    </Fragment>
  )
}

export default Default