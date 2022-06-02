import styles from "./info.module.css"
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
            <figure onClick={toProjects} >
              <img src="https://i.imgur.com/Z6Gw5iT.png"/>
              <h2>PROJECTS</h2>
              <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
              
            </figure>
            <figure onClick={toResume}>
              <img src="https://i.imgur.com/raXHn44.png" />
              <h2>RESUME</h2>
              <p>
              Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc
              </p>
              
            </figure>
            <figure>
              <img src="https://i.imgur.com/IpEjczr.png" />
              <h2>CONTACT</h2>
              <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laore
              </p>
            </figure>
          </article>
        </section>
    </Fragment>
  )
}

export default Info