import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {FaCartPlus} from 'react-icons/fa';
const Navigation = () => {
    return(
        <div className="nav">
            <div className="logo">Clean Juice</div>
            <div className="nav-links">
                <ul>
                    <li>Locations</li>
                    <li>Our Menu</li>
                    <li>Our Story</li>
                    <li>Meet Our Team</li>
                    <li>Own A Clean Juice</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="search"><FaSearch/></div>
            <div className="account">My Account</div>
            <div className="cart"><FaCartPlus/></div>
        </div>
    )
}

export default Navigation;