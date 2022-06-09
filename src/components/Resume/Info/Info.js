import data from "./data"
import styles from "./info.module.css"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

function Info() {
  return (
      <section className={styles.partThree}>
      <Header />
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
          <Footer />
        </section>
  )
}

export default Info