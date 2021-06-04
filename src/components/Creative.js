import React from 'react';
import './Creative.css';
const Creative = () => {
    return (
        <section className="explained-creative">
            <img className="logo-creative" src="images/WOOD.png" alt="logo creative"/>
            <div className="creative-title">
                    <h1>CREATIVE TEAM</h1>
            </div>
            <div className="creative-container">
                <div className="desktop-img">
                    <img className="desktop-picture" src="images/desktop.png" alt="desktop image" />
                </div>

                <div className="creative-description">
                    <h2>GOOG MINDSET</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <button className="btn-explained"> Meet the team </button>
                </div>
            </div>
        </section>
    );
};

export default Creative;