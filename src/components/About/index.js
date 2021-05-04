import React from "react";
import portrait from "../../assets/0.png";
import resume from "../../assets/jamie_delange_resume.pdf"

function About() {
  return (
    <section className="my-5">
    <div className="info-box">
      <div className="info-row">
        <div className="summary-column">
        <h3 id="about1">Hey, I'm Jamie. Thank <br/>you for visiting my page!</h3>
            <p className="summary">
            I'm a full stack developer based in Nashville, Tennessee, seeking an internship, contract or freelance work
            in full stack, front-end or back-end development. My expertise is in web development, geology
            and music, and my educational background includes a B.S. in Geology from the University of Georgia
            and a certificate in full stack web development from Vanderbilt University.
            <br/>
            <br/>
            When I'm not working on freelance development projects or learning new programming languages and tools, you can 
            find me playing music or riding a bike.
            </p>
            <div className="download">
                    <a className="download-text" href={resume} target="_blank">Download resume</a>
            </div>
        </div>
        <div className="portrait-column">
            <img src={portrait} className="portrait" alt="portrait" />
            <h3 className="contact-header">Let's chat! E-mail me at <a className="email-link" href="mailto:jamie.de.lange@mac.com">jamie.de.lange@mac.com</a></h3>
        </div>
      </div>
    <div className="resume-box">
            <div className="skill-box">
            <h2 className="proficiencies">Proficiencies</h2>
                <div id="skill-columns" className="skill-column-left">
                    <h2 id="skill-headings">Front-end</h2>
                    <ul className="skill-ul">
                        <li>JavaScript ES6+</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Webpack</li>
                        <li>Handlebars</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div id="skill-columns" className="skill-column-right">
                    <h2 id="skill-headings">Back-end</h2>
                    <ul className="skill-ul">
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
    </div>
    </div>
    </section>
  );
}

export default About;
