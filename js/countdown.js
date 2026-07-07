/**
 * =============================================================================
 * Archivo: countdown.js
 * -----------------------------------------------------------------------------
 * Controla la cuenta regresiva del evento.
 * =============================================================================
 */

import {

    EVENT_DATE

} from "./config.js";

import {

    countdown

} from "./dom.js";

/*==============================================================================
    FUNCIONES PRIVADAS
==============================================================================*/

/**
 * Formatea un número a dos dígitos.
 *
 * @param {number} value
 * @returns {string}
 */
function format(value) {

    return value
        .toString()
        .padStart(2, "0");

}

/**
 * Actualiza los valores mostrados.
 */
function update() {

    const diff = EVENT_DATE - new Date();

    if (diff <= 0) {

        countdown.days.textContent = "00";
        countdown.hours.textContent = "00";
        countdown.minutes.textContent = "00";
        countdown.seconds.textContent = "00";

        return;

    }

    const days =
        Math.floor(diff / 86400000);

    const hours =
        Math.floor(diff % 86400000 / 3600000);

    const minutes =
        Math.floor(diff % 3600000 / 60000);

    const seconds =
        Math.floor(diff % 60000 / 1000);

    countdown.days.textContent = format(days);

    countdown.hours.textContent = format(hours);

    countdown.minutes.textContent = format(minutes);

    countdown.seconds.textContent = format(seconds);

}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa el contador.
 */
export function initializeCountdown() {

    update();

    setInterval(update, 1000);

}