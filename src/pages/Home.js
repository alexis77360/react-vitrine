import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';


const Home = () => {

    //? Définie l'animation avec framer-motion et les paramètres de l'animation
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        }

    }
    return (
        <div>
            <Mouse />
            {/*//! Définie l'animation avec framer-motion */}
            <motion.div 
            className="home" 
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variants}
            
            >

            <Navigation />
            <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">

                        {/*//! Définie l'animation avec framer-motion */}
                        <motion.h1 
                        drag
                        dragConstraints={{
                            left: -250,
                            right: 750,
                            top: -200,
                            bottom: 250
                        }}
                        > REACT AGENCY</motion.h1>
                        <motion.h2 
                        drag
                        dragConstraints={{
                            left: -100,
                            right: 750,
                            top: -200,
                            bottom: 250
                        }}
                        > <DynamicText /></motion.h2>

                    </div>

                </div>
                <Buttons right={"/project-1"} />
            </motion.div>
            
        </div>
    );
};

export default Home;