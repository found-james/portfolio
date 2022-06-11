import styles from "./info.module.css"
import data from "./data"
import { useNavigate } from "react-router-dom"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import { motion } from "framer-motion"
import { Fragment } from "react"

function Info() {
  let navigate = useNavigate();
  const toProjects = () => navigate("/projects")
  const toAbout = () => navigate("/about")
  
  return (
      <motion.section className={styles.home} initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      transition={{duration: 3 }}
      exit={{ opacity: 0 }}>
  
        <article>
          <figure>
            <img src={data.about.img}/>
            <div>
              <h2>{data.about.title}</h2>
              <p>{data.about.description}</p>
            </div>
          </figure>
        </article>
        <article>
          <figure onClick={ toProjects }>
          
          <motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-solid fa-list-check fa-10x"></motion.i>
            <h2>{data.projects.title}</h2>
            <p>{data.projects.description}</p>
          </figure>
          <figure onClick={ toAbout }>
            <motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fa-solid fa-file fa-10x"></motion.i>
            <h2>{data.resume.title}</h2>
            <p>{data.resume.description}</p>
          </figure>
          <figure>
            <motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}className="fa-solid fa-address-book fa-10x"></motion.i>
            <h2>{data.contact.title}</h2>
            <p>{data.contact.description}</p>
          </figure>
          </article>
          <Footer />
      </motion.section>
    
  

  )
}

export default Info