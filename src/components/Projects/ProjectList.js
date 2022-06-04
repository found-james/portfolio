
import styles from "./projectList.module.css"
import data from "./data"
import { Fragment } from "react"

function ProjectList() {
  return (
    <Fragment>
        <section className={styles.partTwo}>
         <div></div>
          <article>
            <figure>
              <img src={data.spaceBattle.img} />
              <h2>{data.spaceBattle.title}</h2>
              <p>{data.spaceBattle.description}</p> 
            </figure>
            <figure>
              <img src={data.githubFinder.img} />
              <h2>{data.githubFinder.title}</h2>
              <p>{data.githubFinder.description}</p>
            </figure>
            <figure>
              <img src={data.contactKeeper.img} />
              <h2>{data.contactKeeper.title}</h2>
              <p>{data.contactKeeper.description}</p>
            </figure>
          </article>
          <article>
            <figure>
              <img src={data.collab.img} />
              <div>
              <h2>{data.collab.title}</h2>
              <p>{data.collab.description}</p>
              </div>
            </figure>
          </article>
        </section>
    </Fragment>
  )
}

export default ProjectList