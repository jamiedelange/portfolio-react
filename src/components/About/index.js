import React from "react";
import portrait from "../../assets/0.png";

function About() {
  return (
    <section className="my-5">
    <div className="info-box">
      <div className="info-row">
        <div className="summary-column">
        <h3 id="about1">Hey, I'm Jamie. Thank <br/>you for visiting my page!</h3>
            <p className="summary">
            I am a full stack developer based in Nashville, Tennessee, with 
            a background in geology and music. I am a graduate of the
            University of Georgia, and I have recently acquired a certificate in
            full stack web development from Vanderbilt University. I'm seeking an
            internship in full stack, front end or back end development. I am a
            dedicated worker passionate about producing functional applications of
            the highest possible quality. When I'm not coding you can find me
            playing music or riding my bike. Thanks for visiting my page.
            </p>
        </div>
        <div className="portrait-column">
            <img src={portrait} className="portrait" alt="portrait" />
            <h3 className="contact-header">Let's chat! E-mail me at <a className="email-link" href="mailto:jamie.de.lange@mac.com">jamie.de.lange@mac.com</a></h3>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
