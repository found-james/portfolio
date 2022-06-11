import Default from "../../layout/Default/Default"
import Info from "../../components/Home/Info/Info"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Header from "../../components/Header/Header"
import { motion } from "framer-motion"
import { Fragment } from "react"
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <Fragment>
      <Default>
        <Info />
      </Default>
      {/* <Footer /> */}
    </Fragment>
  )
 }

export default Home