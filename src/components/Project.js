import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

class Project extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row projectTitle">
                    <div className="col-md-12">
                        <h3>Project Name</h3>
                        <a href="#"><FontAwesomeIcon icon={faGithub} size="lg"/></a> <a href="#"><FontAwesomeIcon icon={faExternalLinkAlt} size="lg"/></a>
                    </div>
                </div>
                <div className="row projectDesc">
                    <div className="col-md-12">
                        <p>
                            Integer ultricies pulvinar arcu, vitae viverra magna vestibulum a. Ut tellus dolor, finibus in nisi in, bibendum facilisis sapien. 
                            Praesent vel mauris at augue volutpat tincidunt sit amet nec est. Proin semper, orci id dapibus ultricies, nunc sem tempor urna, sit 
                            amet euismod est nibh non neque. In ut pharetra metus, sed luctus est. Nulla elementum maximus tortor in ultrices. Aenean venenatis 
                            cursus metus nec lacinia. Nulla metus sapien, ultricies consequat pulvinar id, pharetra pellentesque nulla. Fusce tincidunt justo at 
                            magna hendrerit, eget cursus nibh commodo. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Project;