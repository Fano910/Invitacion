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
 * Lista de reproducción de música.
 * @type {Array<{name: string, path: string}>}
 */
export const PLAYLIST = [
    {
        name: "Nostalgic Piano",
        artist: "AtlasAudio",
        url: "https://pixabay.com/users/atlasaudio-54514918/",
        path: "assets/playlist/atlasaudio-nostalgic-piano.mp3"
    },
    {
        name: "Inside You",
        artist: "LemonMusicStudio",
        url: "https://open.spotify.com/artist/4XWZhZ32YrVV5lvpF7cr1E?si=tnbSklR7SJyPNKiHP4MbHA",
        path: "assets/playlist/lemonmusicstudio-inside-you.mp3"
    },
    {
        name: "Lofi Beats",
        artist: "MondaMusic",
        url: "https://pixabay.com/users/mondamusic-54713575/",
        path: "assets/playlist/mondamusic-lofi-beats.mp3"
    },
    {
        name: "Baby Smile",
        artist: "Angel4Leon",
        url: "https://pixabay.com/users/angel4leon-560486/",
        path: "assets/playlist/angel4leon-baby-smile.mp3"
    },
    {
        name: "Mothers Day",
        artist: "JonasBlakewood",
        url: "https://pixabay.com/users/jonasblakewood-48502311/",
        path: "assets/playlist/jonasblakewood-mothers-day.mp3"
    },
    {
        name: "Background Music",
        artist: "Alex Morgan",
        url: "https://pixabay.com/users/alex-morgan-54692529/",
        path: "assets/playlist/alex-morgan-background-music.mp3"
    },
    {
        name: "Inspiring",
        artist: "SigmaMusicArt",
        url: "https://pixabay.com/users/sigmamusicart-36860929/",
        path: "assets/playlist/sigmamusicart-background-music-inspiring.mp3"
    }
];

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

    LIFE_TIME: 25000,

    MIN_SIZE: 18,

    MAX_SIZE: 42,

    MIN_DURATION: 12,

    MAX_DURATION: 24

});

/*==============================================================================
    PARTÍCULAS
==============================================================================*/

export const PARTICLES = Object.freeze({

    INTERVAL: 220,

    LIFE_TIME: 28000,

    MIN_SIZE: 6,

    MAX_SIZE: 24,

    MIN_DURATION: 14,

    MAX_DURATION: 28,

    COLORS: [

        "#ffd4e8",

        "#bfe8ff"

    ]

});