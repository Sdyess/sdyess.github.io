import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faTwitter, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
    render() {
        return (
            <div className="container center">
                <img src={process.env.PUBLIC_URL + "/./static/images/profile.jpg"} alt="Profile" className="rounded-circle center" width="120px" height="120px"/>
                <br/><br/>
                <h3>Skyler Dyess</h3>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/skylerdyess"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.github.com/sdyess"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://twitter.com/GuacSenpai"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://stackoverflow.com/users/3347630/sdyess"><FontAwesomeIcon icon={faStackOverflow} size="2x"/></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
