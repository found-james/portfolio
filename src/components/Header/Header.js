import styles from "./header.module.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className={styles.header}>
        <section>
          <div>
            <h1>SUESCUN</h1>
            <h1>SUESCUN</h1>
            </div>
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

export default Header