import { Fragment } from "react"
import styles from "./footer.module.css"
import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className={styles.footer}>
        <section>
          <a href="https://github.com/found-james" target="_blank"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-brands fa-github fa-2x"></motion.i></a>
          <a href="https://www.linkedin.com/in/find-james" target="_blank"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fa-brands fa-linkedin-in fa-2x"></motion.i></a>
          <a href="https://twitter.com/findjamesbro"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-brands fa-twitter fa-2x"></motion.i></a>
        </section>
    </footer>
  )
}

export default Footer