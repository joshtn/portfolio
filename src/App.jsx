import './Assets/scss/default.scss'
import Nav from './Components/navComp/Nav.jsx'
import Hero from './Components/heroComp/Hero.jsx'
import About from './Components/aboutComp/About.jsx'
import Project from './Components/projectComp/Project.jsx'
import Contact from './Components/contactComp/Contact.jsx'
import ScrollTop from './Components/scrollComp/ScrollTop.jsx'
import {useEffect, useRef, useCallback} from 'react'
import {useWindowSize} from './Hooks/useWindowSize.jsx'

function App() {
    const projectSection = useRef(null)

    const goToProjectSection = () => window.scrollTo({ top: projectSection.current.offsetTop, behavior: 'smooth'})
    
    const goToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth'})

    const size = useWindowSize()
    const containerRef = useRef(null)

    const data = {
        ease: 0.1,
        curr: 0,
        prev: 0,
        rounded: 0,
    }

    const setBodyHeight = () => {
        document.body.style.height = `${
            containerRef.current.getBoundingClientRect().height
        }px`
    }


    const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`

    requestAnimationFrame(() => smoothScroll());
  }, [data]);

     useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [smoothScroll]);

    useEffect(() => {
        setBodyHeight()
    }, [size.height])



  return (
      <div className="App">
          <div className="scroll" ref={containerRef}>
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
