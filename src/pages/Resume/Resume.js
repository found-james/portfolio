import Default from "../../layout/Default/Default"
import Info from "../../components/Resume/Info/Info"
import { Fragment } from "react"

function Resume() {
  return (
    <Fragment>
      <main className="resumeMain">
        <Default>
          <Info />
        </Default>
      </main>
    </Fragment>
  )
}

export default Resume