import React, { useEffect } from 'react';

const Mouse = () => {

    //? Déplacer le curseur en fonction de la position de la souris

    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + 'px';
            cursor.style.left = e.x+ 'px';
        });

        //? Ajouter la classe hovered au curseur quand la souris est sur un lien (diminuer la taille du curseur)
        document.querySelectorAll('.hover').forEach((link) => {
            link.addEventListener('mouseover', () => {
            cursor.classList.add('hovered');
            });

        //? Retirer la classe hovered au curseur quand la souris n'est plus sur un lien (revenir à la taille initiale du curseur)

        link.addEventListener('mouseleave', () => {
            cursor.style.transition = '.3s ease-out';
            cursor.classList.remove('hovered');
            });



        
        });

        

    }, []);


    return (

            <div className="span cursor"></div>

    );
};

export default Mouse;