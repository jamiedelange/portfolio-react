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
            I am a full stack developer based in Nashville, Tennessee. I
            have a background in geology and music. I am a graduate of the
            University of Georgia, and I have recently acquired a certificate in
            full stack web development from Vanderbilt University. I am seeking an
            internship in full stack, front end or back end development. I am a
            dedicated worker passionate about producing functional applications of
            the highest possible quality. When I'm not coding you can find me
            playing music or riding my bike. Thanks for visiting my page.
            </p>
        </div>
        <div className="portrait-column">
            <img src={portrait} className="portrait" alt="portrait" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
