
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
          <a href={data.projectOne.anchor} target="_blank">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={data.projectOne.img} />
          </a>
          <h2>{data.projectOne.title}</h2>
          <p>{data.projectOne.description}</p> 
        </figure>
        <figure>
          <a href={data.projectTwo.anchor} target="_blank">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={data.projectTwo.img} />
          </a>
          <h2>{data.projectTwo.title}</h2>
          <p>{data.projectTwo.description}</p>
        </figure>
        <figure>
          <a href={data.projectThree.anchor} target="_blank">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={data.projectThree.img} />
          </a>
          <h2>{data.projectThree.title}</h2>
          <p>{data.projectThree.description}</p>
        </figure>
      </article>
      <article>
        <figure>
          <a href={data.contactKeeper.anchor} target="_blank">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={data.contactKeeper.img} />
          </a>
          <div>
            <h2>{data.contactKeeper.title}</h2>
            <p>{data.contactKeeper.description}</p>
          </div>
        </figure>
      </article>
      <div className={styles.bottomOfPage}>
        <div>
          
        </div>
      <Footer />
      </div>
      </motion.section>
  )
}

export default ProjectList