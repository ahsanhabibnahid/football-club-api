import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Teams = ({team}) => {
    const {idTeam, strTeam, strTeamBadge, strStadium} = team
    return (
        <div className="card col-md-3 col-sm-6 mx-3 mt-5 p-3 text-center">
            <img src={strTeamBadge} className="img-thumbnail" alt="" />
            <div className ="card-body">
            <h5 className ="card-title">{strTeam}</h5>
            <p className ="card-text">Stadium : {strStadium}</p>
            <Link to={`/team/${idTeam}`} className ="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Link >
            </div>
        </div>
    );
};

export default Teams;