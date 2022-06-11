import styles from "./info.module.css"

import { motion } from "framer-motion"

function Info() {
  return (
      <motion.section className={styles.partThree} initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      transition={{duration: 3 }}
      exit={{ opacity: 0 }}>
          <article>
            <figure>
            <a href="https://github.com/found-james" target="_blank"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-brands fa-github fa-10x"></motion.i></a>
            <div>
              <h2>{"CHECKOUT"}</h2>
              <p>{"other projects on Github"}</p>
            </div>
            </figure>
            <figure>
            <a href="https://www.linkedin.com/in/find-james" target="_blank"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fa-brands fa-linkedin-in fa-10x"></motion.i></a>
            <div>
              <h2>{"CONNECT"}</h2>
              <p>{"with me on Linkedin"}</p>
            </div>
            </figure>
            <figure>
            <a href="https://twitter.com/findjamesbro" target="_blank"><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-brands fa-twitter fa-10x"></motion.i></a>
            <div>
              <h2>{"FOLLOW"}</h2>
              <p>{"me on twitter"}</p>
            </div>
            </figure>
          </article>
          

          
        </motion.section>
  )
}

export default Info