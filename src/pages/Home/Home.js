import About from "../../components/Home/About/About"
import Info from "../../components/Home/Info/Info"

import { Fragment } from "react"

function Home() {
  return (
    <Fragment>
      <main className="homeMain">
        <About />
        <Info />
      </main>
    </Fragment>
  )
}

export default Home