import { PARTICLES } from "./config.js";
import { particles } from "./dom.js";

/**
 * ============================================================================
 * Archivo: particles.js
 * ----------------------------------------------------------------------------
 * Administra las partículas decorativas del fondo.
 * ============================================================================
 */

/**
 * Obtiene un número aleatorio dentro de un rango.
 *
 * @param {number} min Valor mínimo.
 * @param {number} max Valor máximo.
 * @returns {number}
 */
function random(min, max) {

    return min + Math.random() * (max - min);

}

/**
 * Devuelve un color aleatorio para la partícula.
 *
 * @returns {string}
 */
function randomColor() {

    const index = Math.floor(Math.random() * PARTICLES.COLORS.length);

    return PARTICLES.COLORS[index];

}

/**
 * Crea una partícula decorativa.
 */
function createParticle() {

    const particle = document.createElement("div");

    particle.className = "particle";

    const size = random(PARTICLES.MIN_SIZE, PARTICLES.MAX_SIZE);

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}vw`;

    particle.style.animationDuration =
        `${random(PARTICLES.MIN_DURATION, PARTICLES.MAX_DURATION)}s`;

    particle.style.background = randomColor();

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, PARTICLES.LIFE_TIME);

}

/**
 * Inicializa la generación automática de partículas.
 */
export function initializeParticles() {

    setInterval(createParticle, PARTICLES.INTERVAL);

}