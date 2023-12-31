import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';


const Contact = () => {

    //? autre façon de définir l'animation avec framer-motion
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        }
    }


    return (
        <main>
            <Mouse />
            <motion.div className="contact"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{duration: 0.5}}
            
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="adress">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>1 rue du code</p>
                            <p>77000 Paris</p>
                        </div>
                        <div className="phone">
                            <h4>Téléphone</h4>
                            {/* //? React-copy-to-clipboard a librairie*/}
                            <CopyToClipboard text="0606060606" className="hover">
                            <p 
                            style={{cursor:"pointer"}} 
                            className='clipboard' 
                            onClick={ () => alert('Numéro de téléphone copié !')}>
                            0606060606</p>                            
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="alexisfavennec@gmail.com" className="hover">
                            <p
                            style={{cursor:"pointer"}}
                            className='clipboard'
                            onClick={ () => alert('Email copié !')}>
                            alexisfavennec@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits"> 
                        <p>AlexFav-Dev  2023</p>
                    </div>
                        
                </div>    
                <Buttons left={'/project-4'} right={''} />
                    
            </motion.div>
        </main>
    );
};

export default Contact;