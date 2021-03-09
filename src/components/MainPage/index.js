import React from 'react';
import portrait from "../../assets/0.png";
import Footer from '../Footer';

function MainPage() {
    return ( 
        <section className="">
            <div className="portrait-box">
                <img src={portrait} className="portrait" alt="portrait" />
            </div>
            <div className="summary-box">
                <p>Full Stack Web Developer with a background in geology and music. 
                    Graduate of University of Georgia with a certificate from Vanderbilt University in Full Stack Web Development. </p>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default MainPage;