import { Fragment } from "react"
import Header from "../../components/Header/Header"

function Default({ children }) {
  return (
    <Fragment>
    <Header />
        { children }
    </Fragment>
  )
}

export default Default