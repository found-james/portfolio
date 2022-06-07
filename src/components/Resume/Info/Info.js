import data from "./data"
import styles from "./info.module.css"

function Info() {
  return (
      <section className={styles.partThree}>
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
        </section>
  )
}

export default Info