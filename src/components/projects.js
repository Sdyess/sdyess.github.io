import React from "react"

export default () => (
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div class="w-100">
        <h2 class="mb-5">Projects</h2>
        <ul class="fa-ul mb-0">
          <li>
            <i class="fa-li fa fa-gamepad text-warning"></i>
            Hangman Server/Client in Go <a href="https://github.com/Sdyess/SchoolStuff/tree/master/CS435/Hangman">(Source)</a>
            <ul>
              <li>This project is an implementation of the game of Hangman utilizing networking to make a playable game.</li>
              <li>Written as a final project for a networking course.</li>
              <li>Written in 100% Go.</li>
            </ul>
          </li>
          <br/>
          <li>
            <i class="fa-li fa fa-video text-warning"></i>
            TwitchFlix <a href="https://github.com/Sdyess/StreamSweeper">(Live Preview)</a> <a href="https://github.com/Sdyess/StreamSweeper">(Source)</a>
            <ul>
                <li>
                  An ongoing project that aims to provide a way for people to find streamers they may not have normally discovered by allowing the user to apply filters
                  and be randomly provided with a streamer that matches those filters.
                </li>
                <li>A learning experience for both consuming Twitch's API and the use of VueJS.</li>
                <li>Written in Javascript using VueJS</li>
              </ul>
          </li>
          <br/>
          <li>
            <i class="fa-li fa fa-comments text-warning"></i>
            AlfredBot <a href="https://github.com/Sdyess/AlfredBot">(Source)</a>
            <ul>
                <li>
                  An older project that I had used as a learning tool for Golang. 
                  Would like to eventually pick the project back up and continue it further when time allows.
                </li>
                <li>Written using Go and discordgo as a discord library.</li>
              </ul>
          </li>
          <br/>
          <li>
            <i class="fa-li fab fa-bootstrap text-warning"></i>
            SFASU CS Programming Contest Website <a href="https://taft.me/SFA-CSClubWebsite/">(Live Preview)</a> <a href="https://github.com/Sdyess/SFA-CSClubWebsite">(Source)</a>
            <ul>
                <li>
                  Created to replace the old version of the programming contest website with something a bit more modern and responsive.
                  Currently used by the university.
                </li>
                <li>Created with Bootstrap.</li>
              </ul>
          </li>
          <br/>
          <li>
            <i class="fa-li fab fa-bootstrap text-warning"></i>
            SFASU CS Club Website <a href="https://taft.me/SFA-CSClubWebsite/">(Live Preview)</a> <a href="https://github.com/Sdyess/SFA-CSClubWebsite">(Source)</a>
            <ul>
                <li>
                  Created to serve as a website for the Computer Science Club at SFASU. Currently not being used, but might end up being used in the near future.
                </li>
                <li>Created with Bootstrap.</li>
              </ul>
          </li>
          <br/>
          <li>
            <i class="fa-li fa fa-comments text-warning"></i>
            TwitchBot <a href="https://github.com/Sdyess/TwitchBot">(Source)</a>
            <ul>
                <li>
                  An ongoing project that will be featured in some upcoming blog posts. Originally this project served as a learning tool for 
                  C++ with WinSock, but the limitations of WinSock makes it less desirable, so I'll be moving to boost asio instead.
                  Eventually planning to be a full featured, modular twitch bot.
                </li>
                <li>Written in C++. Uses MySQL Connector, Boost, and Winsock.</li>
              </ul>
          </li>
        </ul>
      </div>
    </section>
)