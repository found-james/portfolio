import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
        <section>
            <h1>SUESCUN</h1>
        </section>
        <section>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
        </section>
    </header>
  )
}

export default Header