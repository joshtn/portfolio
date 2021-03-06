
const Nav = ({ goToPro, goToBot }) => {


    return (
        <div className="nav-container">
            <header>
                <a href="/" className="logo">Josh Tan</a>

                <nav>
                    <ul>
                        <li><button onClick={goToPro}>My work</button></li>
                        <li><button onClick={goToBot}>Contact</button></li>
                    </ul>
                </nav>
            </header>
            <div className="social-header">
                <ul>
                    <li>
                        <a href="https://github.com/joshtn" target="_blank" rel="noopener noreferrer">
                            <span className="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/josh-tan-910" target="_blank" rel="noopener noreferrer">
                            <span className="iconify" data-icon="akar-icons:linkedin-fill" data-inline="false"></span>
                        </a>
                    </li>
                  <li><a href="mailto:joshtan.email@gmail.com"><span className="iconify" data-icon="clarity:email-line" data-inline="false"></span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
