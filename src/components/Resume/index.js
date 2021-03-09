import React from 'react';

function Resume() {
    return (
        <section>
            <div className="resume-box">
                <div className="download">
                    <a className="download-text"href="../../assets/resume.pdf" download>Click to download resume</a>
                </div>
            </div>
            <div className="skill-box">
                <div className="skill-column-left">
                    <h2>Front-end proficiencies</h2>
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
                <div className="skill-column-right">
                    <h2>Back-end proficiencies</h2>
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
        </section>
    )
}

export default Resume;