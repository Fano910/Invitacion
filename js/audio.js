/**
 * =============================================================================
 * Archivo: audio.js
 * -----------------------------------------------------------------------------
 * Administra toda la reproducción de música de la aplicación.
 * =============================================================================
 */

import {

    AUDIO_PATH,

    AUDIO_VOLUME

} from "./config.js";

/*==============================================================================
    AUDIO
==============================================================================*/

/**
 * Reproductor principal.
 * @type {HTMLAudioElement}
 */
const player = new Audio(AUDIO_PATH);

player.loop = true;

player.volume = AUDIO_VOLUME;

/**
 * Estado de reproducción.
 * @type {boolean}
 */
let playing = false;

/*==============================================================================
    MÉTODOS
==============================================================================*/

/**
 * Reproduce el audio.
 *
 * @returns {Promise<void>}
 */
export async function play() {

    if (playing)
        return;

    try {

        await player.play();

        playing = true;

    } catch (error) {

        console.warn(error);

    }

}

/**
 * Pausa la reproducción.
 */
export function pause() {

    if (!playing)
        return;

    player.pause();

    playing = false;

}

/**
 * Alterna entre reproducir y pausar.
 */
export function toggle() {

    playing
        ? pause()
        : play();

}

/**
 * Indica si el audio está reproduciéndose.
 *
 * @returns {boolean}
 */
export function isPlaying() {

    return playing;

}