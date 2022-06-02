import styles from "./home.module.css"
import { Fragment } from "react"

function Home() {
  return (
    <Fragment>
      <main className={ styles.homeMain }>
      <section className={ styles.partOne } >
        <article style={{border: "1px solid gray"}}>
          <img src="https://i.imgur.com/nHpbxQO.png"/>
          <div>
            <h2> ABOUT </h2>
            <p>
              Lorem ipsum dolor sit amet. Quo accusantium ipsum aut neque voluptatum et enim dolores cum obcaecati voluptatem est consequatur quae ut vero galisum et rerum nobis? 33 exercitationem optio eos aliquid pariatur et eveniet expedita eum ullam beatae est dignissimos ipsum qui itaque odio. In commodi iusto eos dolorem dolores nam ducimus sunt eum necessitatibus corrupti. 
            </p>
          </div>
        </article>
        
        
      </section>
      <section className={styles.partTwo}>
        
      </section>
      </main>
    </Fragment>
  )
}

export default Home