import React from 'react';
import './About.css';
const About = () => {
    return (
        <section className="explained-section">
            <div className="explained-item about-us">
                <div className="image-item-one">
                    <img className="chair-img-top" src="images/image2.1.png" alt="desktop image"></img>
                </div>
               
                <div className="explained-container about-item">
                    <h1>About US</h1>
                    <p>
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus
                        to  throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks.
                        Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                    <button className="btn-explained">Learn More</button>
                </div>
                
            </div>
            
            <div className="explained-item shop">
                <div className="image-item-two">
                    <img className="chair-img-bot" src="images/wood-restaurant.png" alt="desktop image"></img>
                </div>
               
                <div className="explained-container about-item">
                    <h1>About US</h1>
                    <p>
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus
                        to  throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks.
                        Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                        <button className="btn-explained">Learn More</button>
                </div>
                
            </div>


        </section>
    );
};

export default About;