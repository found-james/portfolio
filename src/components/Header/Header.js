import styles from "./header.module.css"
import { Link } from "react-router-dom"
function Header() {
  return (
    <header className={styles.header}>
        <section>
            <h1>SUESCUN</h1>
        </section>
        <section>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
            </ul>
        </section>
    </header>
  )
}

export default Header