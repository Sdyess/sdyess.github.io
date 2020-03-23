import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"
import Contact from "../components/contact"
import Experience from "../components/experience"
import Education from "../components/education"
import Projects from "../components/projects"

import { Link } from "gatsby"

export default () => (
    <html>
        <Header />
        <body id="page-top">
            <Nav/>
            <div class="container-fluid p-0">
                <Contact/>
                <hr class="m-0"/>
                <Experience/>
                <hr class="m-0"/>
                <Education/>
                <hr class="m-0"/>
                <Projects/>
            </div>
            <script src="./static/vendor/jquery/jquery.min.js"></script>
            <script src="./static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="./static/vendor/jquery-easing/jquery.easing.min.js"></script>
            <script src="./static/resume.min.js"></script>
        </body>
    </html>
    

)