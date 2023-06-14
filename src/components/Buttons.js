import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        //? si on a une props left on affiche la flèche gauche pareil pour la droite
        <div className='scroll-bottom'>
            {props.left && (
            <NavLink to={props.left} className="left hover">
                <span>&#10092;</span>
            </NavLink>
            )}
            {props.right && (
            <NavLink to={props.right} className="right hover">
                <span>&#10093;</span>
            </NavLink>
            )}
            
        </div>
    );
};

export default Buttons;