import React from "react";
import Project from "./Project";

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <br/>
                <hr/>
                <br/>
                <h2>Project Showcase</h2>
                <Project
                    projectTitle="TwitchFlix" 
                    srcLink="https://github.com/Sdyess/StreamSweeper" 
                    extLink="https://twitchflix.net/"
                    summary="An ongoing project that aims to provide a way for people to find Twitch streamers they may not have normally discovered by allowing the user to apply filters
                    and be randomly provided with a streamer that matches those filters. Written using VueJs and takes advantage of the Twitch API for functionality."
                />
                <Project 
                    projectTitle="AlfredBot"
                    srcLink="https://github.com/Sdyess/AlfredBot/"
                    summary="This is a discord bot written in Go. It still only has limited functionality, but can currently create polls and perform auto moderation. The plan
                             is to extend the bot further to be a multi purpose AIO discord bot for people who livestream and adding some web server component for easier
                             control over the bot."
                />
                <Project 
                    projectTitle="GoMixer"
                    srcLink="https://github.com/Sdyess/gomixer"
                    summary="This is a go package written for the Mixer API. Currently only contains non-authenticated endpoints but I'll be adding the authenticated endpoints and
                             handling for rate limit buckets in the near future."
                />
            </div>
        )
    }
}

export default Projects;