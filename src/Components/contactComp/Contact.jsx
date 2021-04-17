const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-left">
                <h2>Get in touch</h2>
                <p>Feel free to shoot me an email.</p>
            <div className="contact-social-header">
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
                  <li><a href="mailto:josht@kth.se"><span className="iconify" data-icon="clarity:email-line" data-inline="false"></span></a></li>
                </ul>
            </div>

            </div>
            <div className="contact-right">
                <form name="contact v1" method="post" onSubmit="submit" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact v1"/>
                    <div>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder=" Message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
   )
}

export default Contact
