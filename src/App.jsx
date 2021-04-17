import './Assets/scss/default.scss'
import Nav from './Components/navComp/Nav.jsx'
import Hero from './Components/heroComp/Hero.jsx'
import About from './Components/aboutComp/About.jsx'
import Project from './Components/projectComp/Project.jsx'
import Contact from './Components/contactComp/Contact.jsx'
import ScrollTop from './Components/scrollComp/ScrollTop.jsx'
import {useRef} from 'react'

function App() {
    const projectSection = useRef(null)

    const goToProjectSection = () => window.scrollTo({ top: projectSection.current.offsetTop, behavior: 'smooth'})
    
    const goToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth'})




  return (
      <div className="App">
          <div className="scroll">
            <Nav goToPro={goToProjectSection} goToBot={goToBottom}/>
            <Hero/>
            <About/>
            <div ref={projectSection}></div>
            <Project />
            <Contact/>
            <ScrollTop showBelow={2300}/>
          </div>
        </div>
  )
}

export default App
