import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Hi, I'm Skyler!</h3>
                <p>
                    I'm a software engineer that currently lives in Austin, Texas. I currently work for The Charles Schwab Corporation creating backend services for mobile
                    clients as a Mobile Middleware Engineer. Before working at Charles Schwab, I was a full stack web developer for a medium sized distribution company.
                    I mostly work in the .NET stack, but I am fond of working with lower level programming languages in my free time and enjoy dabbling in languages such 
                    as Go, (Modern) C++, and Rust. I graduated from Stephen F. Austin State University with a degree in Computer Science.
                </p>
                <p>
                    Some other things I enjoy and/or I am trying to enjoy. I still play World of Warcraft on and off since the original game came out, it is an endless relationship, 
                    and it is the reason I ever gained an interest in going to school for computer science in the first place. I recently caught up on the books within 
                    <a href="https://en.wikipedia.org/wiki/The_Kingkiller_Chronicle"> The Kingkiller Chronicle</a> by Patrick Rothfuss. I recently bought some hiking shoes 
                    thinking I would get into hiking since moving to Austin, but it hasn't happened yet. Maybe soon.
                </p>
                <br/>
            </div>
        )
    }
}

export default About;