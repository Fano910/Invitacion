/**
 * =============================================================================
 * Archivo: config.js
 * -----------------------------------------------------------------------------
 * Centraliza toda la configuración de la aplicación.
 * Ningún valor constante debe declararse fuera de este archivo.
 * =============================================================================
 */

/*==============================================================================
    FECHA DEL EVENTO
==============================================================================*/

/**
 * Fecha y hora del evento.
 * @type {Date}
 */
export const EVENT_DATE = new Date("2026-07-18T10:00:00");

/*==============================================================================
    ENLACES
==============================================================================*/

/**
 * Ubicación principal.
 * @type {string}
 */
export const MAPS_URL =
    "https://maps.app.goo.gl/3yHWdpz5kMuYyrAd8";

/**
 * Ubicación para pruebas.
 * @type {string}
 */
export const MAPS_TEST_URL =
    "https://maps.app.goo.gl/iJ3LDftN8YF4kCpv5";

/**
 * Confirmación por WhatsApp.
 * @type {string}
 */
export const WHATSAPP_URL =
    "https://wa.me/525642127674?text=¡Hola! Confirmo mi asistencia al Baby Shower. 🩷💙";

/*==============================================================================
    AUDIO
==============================================================================*/

/**
 * Ruta del archivo de audio.
 * @type {string}
 */
export const AUDIO_PATH =
    "assets/atlasaudio-nostalgic-piano.mp3";

/**
 * Volumen inicial.
 * @type {number}
 */
export const AUDIO_VOLUME = .35;

/*==============================================================================
    CALENDARIO
==============================================================================*/

export const CALENDAR = Object.freeze({

    TITLE: "Baby Shower",

    START: "20260718T100000",

    END: "20260718T140000"

});

/*==============================================================================
    CONFETTI
==============================================================================*/

export const CONFETTI = Object.freeze({

    PARTICLE_COUNT: 180,

    SPREAD: 120,

    ORIGIN_Y: .65

});

/*==============================================================================
    CORAZONES
==============================================================================*/

export const HEARTS = Object.freeze({

    INTERVAL: 450,

    LIFE_TIME: 15000,

    MIN_SIZE: 18,

    MAX_SIZE: 42,

    MIN_DURATION: 6,

    MAX_DURATION: 14

});

/*==============================================================================
    PARTÍCULAS
==============================================================================*/

export const PARTICLES = Object.freeze({

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

});