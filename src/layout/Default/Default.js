import { Fragment } from "react"
import Header from "../../components/Header/Header"

function Default({ children }) {
  return (
    <Fragment>
    <Header />
    <main>
        { children }
    </main>
    </Fragment>
  )
}

export default Default