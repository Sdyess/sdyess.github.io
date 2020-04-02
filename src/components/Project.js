import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

class Project extends React.Component {

    render() {
        const srcLinkExists = this.props.srcLink != null;
        const extLinkExists = this.props.extLink != null;

        console.log(srcLinkExists);
        return (
            <div className="container">
                <div className="row projectTitle">
                    <div className="col-md-12">
                        <h3>{this.props.projectTitle}</h3>
                        {srcLinkExists &&
                            <a href={this.props.srcLink}><FontAwesomeIcon icon={faGithub} size="lg"/></a> 
                        }
                        {extLinkExists &&
                            <a href={this.props.extLink}><FontAwesomeIcon icon={faExternalLinkAlt} size="lg"/></a>
                        }
                    </div>
                </div>
                <div className="row projectDesc">
                    <div className="col-md-12">
                        <p>
                            {this.props.summary}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Project;