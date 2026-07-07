/**
 * ============================================================================
 * Archivo: hearts.js
 * ----------------------------------------------------------------------------
 * Genera y administra los corazones flotantes del fondo.
 * ============================================================================
 */

import { HEARTS } from "./config.js";
import { background } from "./dom.js";

const ICONS = ["💙", "🩷"];

/**
 * Devuelve un número aleatorio.
 */
function random(min, max) {

    return min + Math.random() * (max - min);

}

/**
 * Crea un corazón.
 */
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        ICONS[Math.floor(Math.random() * ICONS.length)];

    heart.style.left = `${Math.random() * 100}vw`;

    heart.style.fontSize =
        `${random(HEARTS.MIN_SIZE, HEARTS.MAX_SIZE)}px`;

    heart.style.animationDuration =
        `${random(HEARTS.MIN_DURATION, HEARTS.MAX_DURATION)}s`;

    background.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, HEARTS.LIFE_TIME);

}

/**
 * Inicializa el módulo.
 */
export function initializeHearts() {

    createHeart();

    for (let i = 0; i < 15; i++) {

        setTimeout(createHeart, i * 250);

    }

    setInterval(createHeart, HEARTS.INTERVAL);

}