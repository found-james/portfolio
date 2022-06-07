import Default from "../../layout/Default/Default"
import Info from "../../components/Home/Info/Info"

import { Fragment } from "react"

function Home() {
  return (
    <Fragment>
      <main className="homeMain">
        <Default>
          <Info />
        </Default>
      </main>
    </Fragment>
  )
}

export default Home