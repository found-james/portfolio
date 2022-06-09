import Default from "../../layout/Default/Default"
import Info from "../../components/Home/Info/Info"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Header from "../../components/Header/Header"
import { motion } from "framer-motion"

function Home() {
  return (
      <Default>
        <Info />
      </Default>
  )
 }

export default Home