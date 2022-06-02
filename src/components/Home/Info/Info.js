import styles from "./info.module.css"
import { Fragment } from "react"

function Info() {
  return (
    <Fragment>
        <section className={styles.partTwo}>
          <article>
            <figure>
              <h2>PROJECTS</h2>
              <img src="https://i.imgur.com/Z6Gw5iT.png"/>
            </figure>
            <figure>
              <h2>RESUME</h2>
              <img src="https://i.imgur.com/raXHn44.png" />
            </figure>
            <figure>
              <h2>CONTACT</h2>
              <img src="https://i.imgur.com/IpEjczr.png" />
            </figure>
          </article>
        </section>
    </Fragment>
  )
}

export default Info