
import Home from "../../pages/Home/Home"
import Projects from "../../pages/Projects/Projects"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"

import { Routes, Route } from"react-router-dom"

function App() {
  return (
    
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />  
      </Routes>
  );
}

export default App
