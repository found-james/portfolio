
import Home from "../../pages/Home/Home"
import Projects from "../../pages/Projects/Projects"
import Resume from "../../pages/Resume/Resume"

import { Routes, Route } from"react-router-dom"

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route exact path="/resume" element={ <Resume /> } />
      </Routes>
  );
}

export default App
