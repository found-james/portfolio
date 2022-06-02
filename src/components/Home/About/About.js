import styles from "./about.module.css"
import { Fragment } from "react"

function About() {
  return (
    <Fragment>
        <section className={ styles.partOne } >
          <article>
            <img src="https://i.imgur.com/nHpbxQO.png"/>
            <div>
              <h2> ABOUT </h2>
              <p>
                Lorem ipsum dolor sit amet. Quo accusantium ipsum aut neque voluptatum et enim dolores cum obcaecati voluptatem est consequatur quae ut vero galisum et rerum nobis? 33 exercitationem optio eos aliquid pariatur et eveniet expedita eum ullam beatae est dignissimos ipsum qui itaque odio. In commodi iusto eos dolorem dolores nam ducimus sunt eum necessitatibus corrupti. 
              </p>
            </div>
          </article>
      </section>
    </Fragment>
  )
}

export default About