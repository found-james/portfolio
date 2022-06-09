import Default from "../../layout/Default/Default"
import Info from "../../components/Home/Info/Info"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function Home() {
  return (
    <Default>
        <CSSTransition timeout={500} classNames="item">
          <Info />
        </CSSTransition>
    </Default> 
  )
 }

export default Home