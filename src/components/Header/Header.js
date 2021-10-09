import React from 'react';
import './Header.css'

const Header = (props) => {
    const strTeamBadge = props.strTeamBadge
    return (

        <div className="Header">
            {
                strTeamBadge ? <img src={strTeamBadge} style={{height:'100px'}} alt="" /> : <h1>English Premier League</h1>
            }
            
        </div>

    );
};

export default Header;