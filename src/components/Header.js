import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="navbar">
            <span className="navbar-bar"></span>
            <img className="logoMain" src="images/WOODSTOCK.png" alt="Wood logo" />
                <nav className="container-nav">
                    <div className="left-nav">
                        <img className="logo items" src="images/menus.svg" alt="burger" />
                        <span className="bar"></span>
                        <img className="logo-nav items "src="images/WOOD.png" alt="Wood logo"/>
                    </div>
                    <ul className="navlinks">
                        <li className="link"><a href="#">About</a></li>
                        <li className="link"><a href="#">Furnitures</a></li>
                        <li className="link"><a href="#">Shop</a></li>
                        <li className="link"><a href="#">Contact</a></li>    
                    </ul>
                </nav>
            </div>  
        </header>
    );
};

export default Header;