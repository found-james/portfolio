import Default from "../../layout/Default/Default"
import ProjectList from "../../components/Projects/ProjectList"
import { Fragment } from "react"

function Projects() {
  return (
    <Fragment>
        <Default>
          <ProjectList />
        </Default>
    </Fragment>
  )
}

export default Projects