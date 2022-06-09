import styles from "./info.module.css"
import data from "./data"
import { useNavigate } from "react-router-dom"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

function Info() {
  let navigate = useNavigate();
  const toProjects = () => navigate("/projects")
  const toResume = () => navigate("/resume")
  
  return (
      <section className={styles.home} >
        <Header />
        <div>
          
        </div>
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
            <img src={data.projects.img} />
            <h2>{data.projects.title}</h2>
            <p>{data.projects.description}</p>
          </figure>
          <figure onClick={ toResume }>
            <img src={data.resume.img} />
            <h2>{data.resume.title}</h2>
            <p>{data.resume.description}</p>
          </figure>
          <figure>
            <img src={data.contact.img} />
            <h2>{data.contact.title}</h2>
            <p>{data.contact.description}</p>
          </figure>
          </article>
          <div></div>
          <Footer />
      </section>
  )
}

export default Info