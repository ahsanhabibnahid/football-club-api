import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faPodcast, faVenusMars} from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'
import facebookIcon from '../../images/Facebook.png'
import youtubeIcon from '../../images/YouTube.png'
import twitterIcon from '../../images/Twitter.png'


const TeamDetails = () => {
    let { teamId } = useParams();
    const [teamInfo, setTeamInfo] = useState([])
    const { 
        strTeamBadge, strTeam, intFormedYear, strCountry,
        strLeague, strGender, strDescriptionEN, strFacebook,
        strTwitter,strYoutube
    } = teamInfo

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))
    }, [teamId])

    return (
        <div className='bg-dark'>
            <Header strTeamBadge={strTeamBadge}></Header>

            <div className="container mt-5">
                <div className="card bg-info">
                    <div className="row g-0 p-4">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{strTeam}</h5>
                                <p className="card-text fs-5"><FontAwesomeIcon icon={faPodcast} /> Founded : {intFormedYear}</p>
                                <p className="card-text fs-5"><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                                <p className="card-text fs-5"><FontAwesomeIcon icon={faFutbol} /> League : {strLeague}</p>
                                <p className="card-text fs-5"><FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={strTeamBadge} style={{ height: '250px' }} className="img-fluid rounded-start" alt="..."></img>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-secondary mt-5'>{strDescriptionEN}</p>
                </div>
                <div className="icon-bar d-flex justify-content-center">
                    <a target='_blank' href={'https://' + strFacebook}><img src={facebookIcon} alt="" /></a>
                    <a target='_blank' href={'https://' + strYoutube}><img src={youtubeIcon} alt="" /></a>
                    <a target='_blank' href={'https://' + strTwitter} ><img src={twitterIcon} alt="" /></a>
                </div>
            </div>

        </div>
    );
};

export default TeamDetails;