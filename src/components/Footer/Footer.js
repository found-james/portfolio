import styles from "./footer.module.css"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <header className={styles.footer}>
        <section>
            <h1>SUESCUN</h1>
        </section>
        <section>
            <ul>
                <Link className={styles.link} to="/"><li>Home</li></Link>
                <Link className={styles.link} to="/projects"><li>Projects</li></Link>
                <Link className={styles.link} to="/resume"><li>Resume</li></Link>
            </ul>
        </section>
    </header>
  )
}

export default Footer