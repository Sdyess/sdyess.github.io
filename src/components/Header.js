import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="container">
                <img src="./static/images/profile.jpg" alt="Profile" class="rounded-circle" width="120px" height="120px"/>
                <br/><br/>
                <h3>Skyler Dyess</h3>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Social</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
