import React, { useEffect } from 'react';
import {projectsData} from '../data/projectsData';
import { useState } from 'react';

const Project = ({projectNumber}) => {

    //? on récupère le projet en cours avec les props projectNumber
    const [currentProject] = useState(projectsData[projectNumber]);

    //? on déclare les states pour le cercle aléatoire 
    const[left, setLeft] = useState();
    const[top, setTop] = useState();
    const[size, setSize] = useState();
    
    //? génére la taille du cercle aléatoirement a la création du composant
    useEffect(() => {
        
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize("scale(" + (Math.random() + 0.7) + ")");

    }, []);

    return (
      <div className="project-main">
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                <ul className="languages">
                    {currentProject.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>

            </div>
                <div className="img-content">
                    <div className="img-container hover">
                        <span>
                            <h3>{currentProject.title}</h3>
                            <p>{currentProject.infos}</p>
                        </span>
                        <img src={currentProject.img} alt={currentProject.title} className='img'/>
                    </div>
                <div className="button-container">
                    <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="hover">
                        <span className="button">Voir le site</span>
                    </a>
                </div>
                </div> 
                {/* //? on affiche le cercle aléatoire */}
                <span className='random-circle' style={{left,top,transform:size}}></span>
      </div>
    );
};

export default Project;