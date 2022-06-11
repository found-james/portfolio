
import Home from "../../pages/Home/Home"
import Projects from "../../pages/Projects/Projects"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"

import { Routes, Route } from"react-router-dom"

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />  
      </Routes>
  );
}

export default App
