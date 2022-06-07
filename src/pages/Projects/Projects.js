import Default from "../../layout/Default/Default"
import ProjectList from "../../components/Projects/ProjectList"
import { Fragment } from "react"

function Projects() {
  return (
    <Fragment>
      <main className="projectsMain">
        <Default>
          <ProjectList />
        </Default>
      </main>
    </Fragment>
  )
}

export default Projects