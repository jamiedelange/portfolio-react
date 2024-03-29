import React from 'react';
import ss1 from '../../assets/1.png'
import ss2 from '../../assets/2.png'
import ss3 from '../../assets/3.png'
import ss4 from '../../assets/4.png'
import ss5 from '../../assets/5.png'
import ss8 from '../../assets/8.png'
import githubIcon from '../../assets/github-icon.png';

function Portfolio() {
    return (
        <section className="portfolio-box">
            <div className="portfolio-header">
                <h2>Portfolio</h2>
            </div>
            <div className="grid">
                <div className="grid-row">
                <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="https://whereswaldentour.com">
                            <img className="img-thumbnail" src={`${ss8}`} alt='ss8'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="https://whereswaldentour.com">
                                <h3 id="project-title">Where's Walden Tour</h3>
                            </a>
                            {/* <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/budget-tracker">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon"></img>
                            </a> */}
                        </div>
                    </div>
                    <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="https://jamiedelange.github.io/3D-hike/">
                            <img className="img-thumbnail" src={`${ss1}`} alt='ss1'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="https://jamiedelange.github.io/3D-hike/">
                                <h3 id="project-title">3D-Hike</h3>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/3D-hike">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="https://guarded-harbor-93701.herokuapp.com">
                            <img className="img-thumbnail" src={`${ss2}`} alt='ss2'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="https://guarded-harbor-93701.herokuapp.com">
                                <h3 id="project-title">Tech Blog</h3>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/tech-blog">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon"></img>
                            </a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="https://hidden-shelf-19065.herokuapp.com/">
                            <img className="img-thumbnail" src={`${ss5}`} alt='ss5'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="https://hidden-shelf-19065.herokuapp.com/">
                                <h3 id="project-title">Budget Tracker</h3>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/budget-tracker">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon"></img>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="grid-row">
                    <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="https://gentle-hollows-60962.herokuapp.com/login">
                            <img className="img-thumbnail" src={`${ss4}`} alt='ss4'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="https://gentle-hollows-60962.herokuapp.com/login">
                                <h3 id="project-title">Doorman</h3>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/Doorman">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon" ></img>
                            </a>
                        </div>
                    </div>
                    <div className="grid-item">
                        <a target="_blank" rel="noreferrer" href="http://note-wizard.herokuapp.com/">
                            <img className="img-thumbnail" src={`${ss3}`} alt='ss3'></img>
                        </a>
                        <div className="grid-text">
                            <a target="_blank" rel="noreferrer" className="grid-text-a" href="http://note-wizard.herokuapp.com/">
                                <h3 id="project-title">Note Wizard</h3>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/jamiedelange/note-wizard">
                                <img className="icon-p" src={`${githubIcon}`} alt="github icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;