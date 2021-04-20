import React from "react";
import portrait from "../../assets/0.png";

function About() {
  return (
    <section className="my-5">
      <h2 id="about1">About Me</h2>
      <div className="info-box">
        <div className="portrait-box">
            <img src={portrait} className="portrait" alt="portrait" />
        </div>
        <div className="summary-box">
            <p>
            Hello! I am a full stack developer based in Nashville, Tennessee. I
            have a background in geology and music. I am a graduate of the
            University of Georgia, and I have recently acquired a certificate in
            full stack web development from Vanderbilt University. I am seeking an
            internship in full stack, front end or back end development. I am a
            dedicated worker passionate about producing functional applications of
            the highest possible quality. When I'm not coding you can find me
            playing music or riding my bike. Thanks for visiting my page.
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
