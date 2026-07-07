import { EVENT_DATE } from "./config.js";
import { countdown } from "./dom.js";

/**
 * ============================================================================
 * Archivo: countdown.js
 * ----------------------------------------------------------------------------
 * Controla la cuenta regresiva del evento.
 * ============================================================================
 */

/**
 * Convierte un número a formato de dos dígitos.
 *
 * @param {number} value Número a formatear.
 * @returns {string} Número con dos dígitos.
 */
function format(value) {

    return value.toString().padStart(2, "0");

}

/**
 * Actualiza el contador mostrado en pantalla.
 */
export function updateCountdown() {

    const now = new Date();

    const diff = EVENT_DATE - now;

    if (diff <= 0) {

        countdown.days.textContent = "00";
        countdown.hours.textContent = "00";
        countdown.minutes.textContent = "00";
        countdown.seconds.textContent = "00";

        return;

    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    countdown.days.textContent = format(days);
    countdown.hours.textContent = format(hours);
    countdown.minutes.textContent = format(minutes);
    countdown.seconds.textContent = format(seconds);

}

/**
 * Inicializa la cuenta regresiva.
 */
export function initializeCountdown() {

    updateCountdown();

    setInterval(updateCountdown, 1000);

}