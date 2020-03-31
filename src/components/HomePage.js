import React from 'react';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

class HomePage extends React.Component {

    render() {
        return (
            <>
                <About/>
                <Blog/>
                <Projects/>
            </>
        )
    }
    
}

export default HomePage;