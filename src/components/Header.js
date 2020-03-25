import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="container center">
                <img src="./static/images/profile.jpg" alt="Profile" className="rounded-circle center" width="120px" height="120px"/>
                <br/><br/>
                <h3>Skyler Dyess</h3>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Social</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
