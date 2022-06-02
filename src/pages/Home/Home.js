import About from "../../components/Home/About/About"
import Info from "../../components/Home/Info/Info"
import styles from "./home.module.css"

import { Fragment } from "react"

function Home() {
  return (
    <Fragment>
      <main className={ styles.homeMain }>
        <About />
        <Info />
      </main>
    </Fragment>
  )
}

export default Home