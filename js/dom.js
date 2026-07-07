/**
 * =============================================================================
 * Archivo: dom.js
 * -----------------------------------------------------------------------------
 * Centraliza el acceso a todos los elementos del DOM.
 * Ningún otro módulo debe utilizar document.getElementById() ni
 * document.querySelector().
 * =============================================================================
 */

/*==============================================================================
    SECCIONES
==============================================================================*/

export const hero =
    document.querySelector(".hero");

export const invitation =
    document.getElementById("invitation");

export const background =
    document.getElementById("background");

export const particles =
    document.getElementById("particles");

/*==============================================================================
    BOTONES
==============================================================================*/

export const discover =
    document.getElementById("discover");

export const maps =
    document.getElementById("maps");

export const calendar =
    document.getElementById("calendar");

export const confirm =
    document.getElementById("confirm");

/*==============================================================================
    REPRODUCTOR DE MÚSICA
==============================================================================*/

export const musicPlayer = {
    container: document.getElementById("music-player"),
    playPauseBtn: document.getElementById("play-pause"),
    prevBtn: document.getElementById("prev-song"),
    nextBtn: document.getElementById("next-song"),
    songName: document.getElementById("song-name"),
    artistName: document.getElementById("artist-name"),
    artistLink: document.getElementById("artist-link"),
    songTime: document.getElementById("song-time"),
    progressContainer: document.getElementById("progress-container"),
    progressBar: document.getElementById("progress-bar"),
    volumeSlider: document.getElementById("volume-slider")
};

/*==============================================================================
    CUENTA REGRESIVA
==============================================================================*/

export const countdown = Object.freeze({

    days: document.getElementById("days"),

    hours: document.getElementById("hours"),

    minutes: document.getElementById("minutes"),

    seconds: document.getElementById("seconds")

});

/*==============================================================================
    COLECCIONES
==============================================================================*/

export const boxes =
    document.querySelectorAll(".box");

export const actions =
    document.querySelectorAll(".action");