import React from "react";

//Footer text will have a year generated in it, so let's keep this as a component
class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div className="container">
                <p>Any opinions expressed here are my own and do not represent the opinons of my employer in any way.</p>
                </div>
            </footer>  
        )
    }
}

export default Footer;