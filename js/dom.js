/**
 * ============================================================================
 * Archivo: dom.js
 * ----------------------------------------------------------------------------
 * Centraliza todas las referencias al DOM.
 * Este archivo debe ser el único responsable de obtener elementos mediante
 * document.getElementById() o document.querySelector().
 * ============================================================================
 */

/**
 * Hero principal.
 * @type {HTMLElement}
 */
export const hero = document.querySelector(".hero");

/**
 * Sección de invitación.
 * @type {HTMLElement}
 */
export const invitation = document.getElementById("invitation");

/**
 * Fondo animado.
 * @type {HTMLElement}
 */
export const background = document.getElementById("background");

/**
 * Contenedor de partículas.
 * @type {HTMLElement}
 */
export const particles = document.getElementById("particles");

/**
 * Botón para descubrir la invitación.
 * @type {HTMLButtonElement}
 */
export const discover = document.getElementById("discover");

/**
 * Botón de Google Maps.
 * @type {HTMLButtonElement}
 */
export const maps = document.getElementById("maps");

/**
 * Botón para agendar.
 * @type {HTMLButtonElement}
 */
export const calendar = document.getElementById("calendar");

/**
 * Botón para confirmar asistencia.
 * @type {HTMLButtonElement}
 */
export const confirm = document.getElementById("confirm");

/**
 * Botón para controlar la música.
 * @type {HTMLButtonElement}
 */
export const music = document.getElementById("music");

/**
 * Etiquetas del contador.
 */
export const countdown = {

    days: document.getElementById("days"),

    hours: document.getElementById("hours"),

    minutes: document.getElementById("minutes"),

    seconds: document.getElementById("seconds")

};

/**
 * Todas las tarjetas de información.
 * @type {NodeListOf<HTMLElement>}
 */
export const boxes = document.querySelectorAll(".box");

/**
 * Todos los botones de acciones.
 * @type {NodeListOf<HTMLButtonElement>}
 */
export const actions = document.querySelectorAll(".action");