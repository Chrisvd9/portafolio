import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portafolio from './components/portafolio/Portafolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Video from './assests/video-2.mp4'


const App = () => {
    return (
        <>
        <video 
        autoPlay
        loop
        muted>
            <source src={Video} type="video/mp4" />
        </video>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portafolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
