import Default from "../../layout/Default/Default"
import ProjectList from "../../components/Projects/ProjectList"
import Footer from "../../components/Footer/Footer"
import { Fragment } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { motion } from "framer-motion"

function Projects() {
  return (
    <Default>
      <ProjectList />
      {/* <Footer /> */}
    </Default>
  )
}

export default Projects