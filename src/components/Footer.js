import React from "react";

class Footer extends React.Component {
    
    render() {
        return (
            <footer class="footer">
                <div className="container">
                    <p>Skyler Dyess {new Date().getFullYear()} | Any opinions expressed here are my own and do not represent the opinons of my employer in any way.</p>
                </div>
            </footer>  
        )
    }
}

export default Footer;