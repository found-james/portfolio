
import styles from "./projectList.module.css"
import data from "./data"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { motion } from "framer-motion"

function ProjectList() {
  return (
    <motion.section className={styles.projectList} initial={{ opacity: 0 }}
    animate={{ opacity: 5 }}
    transition={{duration: 3}}
    exit={{ opacity: 0 }}>
      <article>
        <figure>
          <a href={data.spaceBattle.anchor} target="_blank">
            <img src={data.spaceBattle.img} />
          </a>
          <h2>{data.spaceBattle.title}</h2>
          <p>{data.spaceBattle.description}</p> 
        </figure>
        <figure>
          <a href={data.githubFinder.anchor} target="_blank">
            <img src={data.githubFinder.img} />
          </a>
          <h2>{data.githubFinder.title}</h2>
          <p>{data.githubFinder.description}</p>
        </figure>
        <figure>
          <a href={data.contactKeeper.anchor} target="_blank">
            <img src={data.contactKeeper.img} />
          </a>
          <h2>{data.contactKeeper.title}</h2>
          <p>{data.contactKeeper.description}</p>
        </figure>
      </article>
      <article>
        <figure>
          <a href={data.collab.anchor} target="_blank">
            <img src={data.collab.img} />
          </a>
          <div>
            <h2>{data.collab.title}</h2>
            <p>{data.collab.description}</p>
          </div>
        </figure>
      </article>
      <div></div>
      <Footer />
      </motion.section>
  )
}

export default ProjectList