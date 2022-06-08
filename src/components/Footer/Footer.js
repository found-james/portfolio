import { Fragment } from "react"
import styles from "./footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <section>
          <i className="fa-brands fa-github fa-2x"></i>
          <i class="fa-brands fa-linkedin-in fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
        </section>
    </footer>
  )
}

export default Footer