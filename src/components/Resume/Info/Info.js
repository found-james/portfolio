import data from "./data"
import styles from "./info.module.css"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import { motion } from "framer-motion"
import { Fragment } from "react"

function Info() {
  return (
      <motion.section className={styles.partThree} initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      transition={{duration: 3 }}
      exit={{ opacity: 0 }}>
        <div></div>
          <article>
            <figure>
            <img src={data.historyOne.img}/>
            <div>
              <h2>{data.historyOne.title}</h2>
              <p>{data.historyOne.description}</p>
            </div>
            </figure>
          </article>
          <article>
            <figure>
            <img src={data.historyOne.img}/>
            <div>
              <h2>{data.historyOne.title}</h2>
              <p>{data.historyOne.description}</p>
            </div>
            </figure>
          </article>
          <article>
            <figure>
            <img src={data.historyOne.img}/>
            <div>
              <h2>{data.historyOne.title}</h2>
              <p>{data.historyOne.description}</p>
            </div>
            </figure>
          </article>
          <article>
            <figure>
            <img src={data.historyOne.img}/>
            <div>
              <h2>{data.historyOne.title}</h2>
              <p>{data.historyOne.description}</p>
            </div>
            </figure>
          </article>
        </motion.section>
  )
}

export default Info