/**
 * ============================================================================
 * Archivo: config.js
 * ----------------------------------------------------------------------------
 * Centraliza toda la configuración de la invitación.
 * Ningún otro archivo debe contener valores "quemados".
 * ============================================================================
 */

/**
 * Fecha y hora del evento.
 * @type {Date}
 */
export const EVENT_DATE = new Date("2026-07-18T10:00:00");

/**
 * URL principal de Google Maps.
 * @type {string}
 */
export const MAPS_URL = "https://maps.app.goo.gl/3yHWdpz5kMuYyrAd8";

/**
 * URL de pruebas.
 * @type {string}
 */
export const MAPS_URL_TEST = "https://maps.app.goo.gl/iJ3LDftN8YF4kCpv5";

/**
 * URL de confirmación por WhatsApp.
 * @type {string}
 */
export const WHATSAPP_URL =
    "https://wa.me/525642127674?text=¡Hola! Confirmo mi asistencia al Baby Shower. 🩷💙";

/**
 * Archivo de música de fondo.
 * @type {string}
 */
export const AUDIO_PATH = "assets/atlasaudio-nostalgic-piano.mp3";

/**
 * Configuración del calendario.
 */
export const CALENDAR = {

    START: "20260718T100000",

    END: "20260718T140000",

    TITLE: "Baby Shower"

};

/**
 * Configuración del confetti.
 */
export const CONFETTI = {

    PARTICLES: 180,

    SPREAD: 120,

    ORIGIN_Y: .65

};

/**
 * Configuración de los corazones.
 */
export const HEARTS = {

    INTERVAL: 450,

    LIFE_TIME: 15000,

    MIN_SIZE: 18,

    MAX_SIZE: 42,

    MIN_DURATION: 6,

    MAX_DURATION: 14

};

/**
 * Configuración de partículas.
 */
export const PARTICLES = {

    INTERVAL: 220,

    LIFE_TIME: 18000,

    MIN_SIZE: 6,

    MAX_SIZE: 24,

    MIN_DURATION: 8,

    MAX_DURATION: 18,

    COLORS: [
        "#ffd4e8",
        "#bfe8ff"
    ]

};

/**
 * Volumen inicial de la música.
 * @type {number}
 */
export const AUDIO_VOLUME = 0.35;