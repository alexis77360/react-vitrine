import React, { useEffect } from 'react';


const DynamicText = () => {

    useEffect(() => {

        const target = document.getElementById("text-target");
        let array = ["simple", "propre", "rapide"];
        let wordIndex = 0;
        let letterIndex = 0;

        //?créer un enfant span pour chaque lettre
        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            //? fait disparaitre la lettre après 2 secondes
            setTimeout(() => {
                letter.remove();
            }
                , 2000);
        };

        const loop = () => {
            setTimeout(() => {
                //? si on a pas atteint la fin du tableau on continue
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                    //? si on a pas atteint la fin du mot on continue 
                } else if (letterIndex < array[wordIndex].length){
                    createLetter();
                    letterIndex++;
                    loop();
                    //? si on a atteint la fin du mot on passe au suivant
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 2000);
                }
                //? vitesse de la boucle 
            }, 80);
        }
        loop();

    }, []);

    return (
        <span className='dynamic-text'>
            <span>Simply</span>
            <span id="text-target"></span>

        </span>
    );
};

export default DynamicText;