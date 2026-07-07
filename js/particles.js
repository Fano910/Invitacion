/**
 * =============================================================================
 * Archivo: particles.js
 * -----------------------------------------------------------------------------
 * Genera las partículas decorativas del fondo.
 * =============================================================================
 */

import {

    PARTICLES

} from "./config.js";

import {

    particles

} from "./dom.js";

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
 * Devuelve un color aleatorio.
 *
 * @returns {string}
 */
function randomColor() {

    return PARTICLES.COLORS[
        Math.floor(Math.random() * PARTICLES.COLORS.length)
    ];

}

/**
 * Crea una partícula.
 */
function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    const size = random(

        PARTICLES.MIN_SIZE,

        PARTICLES.MAX_SIZE

    );

    particle.style.width = `${size}px`;

    particle.style.height = `${size}px`;

    particle.style.left = "50vw";
    particle.style.top = "50vh";

    // Sesgo hacia los lados para las partículas también
    const angle = Math.random() * Math.PI * 2;
    const distanceX = random(40, 90); 
    const distanceY = random(20, 70); 
    
    const tx = Math.cos(angle) * distanceX;
    const ty = Math.sin(angle) * distanceY;
    const scale = random(1, 4);

    particle.style.setProperty("--tx", `${tx}vw`);
    particle.style.setProperty("--ty", `${ty}vh`);
    particle.style.setProperty("--s", scale);

    particle.style.animationDuration =
        `${random(PARTICLES.MIN_DURATION, PARTICLES.MAX_DURATION)}s`;

    particle.style.background = randomColor();

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, PARTICLES.LIFE_TIME);

}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa el sistema de partículas.
 */
export function initializeParticles() {

    for (let i = 0; i < 20; i++) {

        setTimeout(

            createParticle,

            i * 180

        );

    }

    setInterval(

        createParticle,

        PARTICLES.INTERVAL

    );

}