import Default from "../../layout/Default/Default"
import Info from "../../components/Resume/Info/Info"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { motion } from "framer-motion"

function Resume() {
  return (
    <Default>
      <Info />
    </Default>
  )
}

export default Resume