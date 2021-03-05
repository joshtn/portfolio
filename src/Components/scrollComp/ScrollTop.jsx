import {useState, useEffect} from 'react'

const ScrollTop = ({ showBelow }) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if(window.pageYOffset > showBelow) {
            if(!show) setShow(true)
        } else {
            if(show) setShow(false)
        }
    }

    useEffect(() => {
        if(showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <>
        {show &&
        <div  className="scroll-top" onClick={handleClick}>
            👆
        </div>
        }
        </>
    )
}

export default ScrollTop
