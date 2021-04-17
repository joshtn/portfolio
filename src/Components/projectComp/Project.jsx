import img1 from '../../Assets/img/emp-sys.png'
import img2 from '../../Assets/img/grisinne.png'
import img3 from '../../Assets/img/explormax.png'

const Project = () => {
    return (
        <section className="portfolio">

            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Project 1</p>
                        <p className="featured-title">Employee System</p>
                      <p className="featured-desc">A Full-stack CRUD application with a login system. Login info below...<br/> Username: guest1 <br/>  Password: hello</p>
                         <div className="tech-container">
                            <div className="tech">React</div>
                            <div className="tech">Javascript</div>
                            <div className="tech">Material-Ui</div>
                            <div className="tech">SQL</div>
                            <div className="tech">Express</div>
                            <div className="tech">netlify</div>
                        </div>
                        <div className="link-container">
                            <div className="link">
                              <a href="https://github.com/joshtn/Employee-System" target="_blank">
                                <span className="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span> Code
                              </a>
                            </div>
                            <div className="link">
                              <a href="https://dazzling-keller-4102cc.netlify.app/" target="_blank">
                                <span className="iconify" data-icon="bi:globe" data-inline="false"></span> Site
                              </a>
                            </div>
                        </div>
                   </div>
                </div>
              <a  href="https://dazzling-keller-4102cc.netlify.app/" target="_blank" alt="employee homepage"><img src={img1}/></a>
            </div>

            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Project 2</p>
                        <p className="featured-title">Grisinne - Learn zhuyin</p>
                        <p className="featured-desc">Flashcard app to help you remember the charachters and their prononication.</p>
                        <div className="tech-container">
                            <div className="tech">React</div>
                            <div className="tech">Javascript</div>
                            <div className="tech">sass</div>
                        </div>
                        <div className="link-container">
                            <div className="link">
                              <a href="https://github.com/joshtn/grisinne" target="_blank">
                                <span className="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span> Code
                              </a>
                            </div>
                            <div className="link">
                              <a href="https://joshtn.github.io/grisinne" target="_blank">
                                <span className="iconify" data-icon="bi:globe" data-inline="false"></span> Site
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a  href="https://joshtn.github.io/grisinne" target="_blank "alt="grisinne screen"><img src={img2}/></a>
            </div>

            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Project 3</p>
                        <p className="featured-title">EXPLORMAX - Travel</p>
                        <p className="featured-desc">A place for the travel interested. Figure out where you want to travel to next and let us handle the booking.</p>
                          <div className="tech-container">
                            <div className="tech">React</div>
                            <div className="tech">Javascript</div>
                            <div className="tech">Gatsby</div>
                            <div className="tech">Styled components</div>
                        </div>
                        <div className="link-container">
                            <div className="link">
                              <a href="https://github.com/joshtn/travel-explormax" target="_blank">
                                <span className="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span> Code
                              </a>
                            </div>
                            <div className="link">
                              <a href="https://explormax.netlify.app/" target="_blank">
                                <span className="iconify" data-icon="bi:globe" data-inline="false"></span> Site
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a  href="https://explormax.netlify.app/" target="_blank" alt="explormax screen"><img src={img3}/></a>
            </div>
 
 
        </section>
    )
}

export default Project
