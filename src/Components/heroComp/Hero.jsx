import {useEffect} from 'react'
import gsap from 'gsap'


const Hero = () => {
    var tl = gsap.timeline()

    useEffect(() => {
    tl.from('.content', {
        y: '-30%',
        opacity: 0,
        duration: 2,
        ease: 'power4.easeOut'
    })
    tl.from('.stagger1', {
        y: -50,
        opacity: 0,
        duration: 2,
        ease: 'power4.easeOut',
        stagger: .3
    }, '-=1.5')
    tl.from('.hero-design', {
        y: 50,
        opacity:0,
        ease: 'pwer4.easeOut',
        duration: 1
    }, '-=2')
    gsap.from('.square-anim', {
        stagger: .2,
        scale: 0.1,
        duration: 1,
        ease: 'back.out(1.7)'
    })
    }, [])

    gsap.from('.transition2', {
        scrollTrigger: {
            trigger: '.transition2',
            start: 'top bottom'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: .3
    }, [tl])


    return (
        <div className="hero">
            <div className="content">
                <h1 className="stagger1">Great Handtyped <br/> Web Experiences</h1>
                <div className="meet stagger1">
                   <div className="arrow">
                        <span></span>
                        <span></span>
                        <span className="bottom"></span>
                   </div>
                </div>
            </div>
 <svg  className="hero-design" width="234" height="488" viewBox="0 0 234 488" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path  className="square-anim" d="M4 487C8.45603 355.728 8.98293 279.21 66.5 226.5C115.276 188.346 130.697 139.191 136.5 1" stroke="#12302D" strokeWidth="7"/>
<path className="square-anim" d="M51 487C55.456 355.728 55.9829 279.21 113.5 226.5C162.276 188.346 177.697 139.191 183.5 1" stroke="#12302D" strokeWidth="7"/>
<path className="square-anim" d="M98 487C102.456 355.728 102.983 279.21 160.5 226.5C209.276 188.346 224.697 139.191 230.5 1" stroke="#12302D" strokeWidth="7"/>
</svg>           
        </div>
    )
}

export default Hero
