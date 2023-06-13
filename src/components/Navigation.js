import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    
                    <NavLink to ="/" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                        <li>accueil</li>
                    </NavLink>


                    <li className="nav-portfolio">
                        portfolio

                        <ul className="nav-projects">
                            <NavLink to="/project-1" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                                <li>projet 1</li>
                            </NavLink>

                            <NavLink to="/project-2" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                                <li>projet 2</li>
                            </NavLink>

                            <NavLink to="/project-3" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                                <li>projet 3</li>
                            </NavLink>

                            <NavLink to="/project-4" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                                <li>projet 4</li>
                            </NavLink>


                        </ul>

                    </li>


                    <NavLink to ="/" className={(nav) => (nav.isActive? "nav-active hover" : "hover")}>
                        <li>accueil</li>
                    </NavLink>

                    
                </ul>

            </div>
            
        </div>
    );
};

export default Navigation;