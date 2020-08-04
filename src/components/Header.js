import React from 'react';

const Header = () => {
    return(
        <div className="header">
            <div className="tagline">Find Your Clean Juice</div>
            <div className="title">ORANGE</div>
            <div className="more"><a href="#">Show All Juices</a></div>
            <div className="description">
                <p className="p1">
                    Your <span>healthy</span> life <br/>
                    starts here with us
                </p>
                <p className="p2">
                    A family owned company founded with the <br/> purpose of giving your family access to clean, <br/> organic products while
                    you are on the go.
                </p>
            </div>
        </div>
    )
}

export default Header;