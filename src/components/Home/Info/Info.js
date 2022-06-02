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
                  {
                    <Fragment>
                    <img src={data.projects.img} />
                    <h2>{data.projects.title}</h2>
                    <p>{data.projects.description}</p>
                    </Fragment>
                  }
                </figure>
                <figure onClick={ toResume }>
                  {
                    <Fragment>
                    <img src={data.resume.img} />
                    <h2>{data.resume.title}</h2>
                    <p>{data.resume.description}</p>
                    </Fragment>
                  }
                </figure>
                <figure>
                  {
                    <Fragment>
                    <img src={data.contact.img} />
                    <h2>{data.contact.title}</h2>
                    <p>{data.contact.description}</p>
                    </Fragment>
                  }
                </figure>
          </article>
        </section>
    </Fragment>
  )
}

export default Info