/**
 * =============================================================================
 * Archivo: hearts.js
 * -----------------------------------------------------------------------------
 * Genera los corazones flotantes del fondo.
 * =============================================================================
 */

import {

    HEARTS

} from "./config.js";

import {

    background

} from "./dom.js";

/*==============================================================================
    CONSTANTES
==============================================================================*/

const HEARTS_ICONS = [

    "💙",

    "🩷"

];

/*==============================================================================
    FUNCIONES PRIVADAS
==============================================================================*/

/**
 * Devuelve un número aleatorio.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function random(min, max) {

    return min + Math.random() * (max - min);

}

/**
 * Crea un corazón flotante.
 */
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        HEARTS_ICONS[
        Math.floor(Math.random() * HEARTS_ICONS.length)
        ];

    heart.style.left =
        `${Math.random() * 100}vw`;

    heart.style.fontSize =
        `${random(HEARTS.MIN_SIZE, HEARTS.MAX_SIZE)}px`;

    heart.style.animationDuration =
        `${random(HEARTS.MIN_DURATION, HEARTS.MAX_DURATION)}s`;

    background.appendChild(

        heart

    );

    setTimeout(() => {

        heart.remove();

    }, HEARTS.LIFE_TIME);

}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa la animación de corazones.
 */
export function initializeHearts() {

    for (let i = 0; i < 15; i++) {

        setTimeout(

            createHeart,

            i * 250

        );

    }

    setInterval(

        createHeart,

        HEARTS.INTERVAL

    );

}