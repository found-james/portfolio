import styles from "./info.module.css"
import data from "./data"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

function Info() {
  let navigate = useNavigate();
  const toProjects = () => navigate("/projects")
  const toResume = () => navigate("/resume")
  
  return (
    <Fragment>
        <section className={styles.partTwo}>
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
        </section>
    </Fragment>
  )
}

export default Info