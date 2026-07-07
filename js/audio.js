import { AUDIO_PATH, AUDIO_VOLUME } from "./config.js";

/**
 * ============================================================================
 * Archivo: audio.js
 * ----------------------------------------------------------------------------
 * Administra la reproducción de la música de fondo.
 * ============================================================================
 */

/**
 * Reproductor principal.
 * @type {HTMLAudioElement}
 */
const audio = new Audio(AUDIO_PATH);

audio.loop = true;
audio.volume = AUDIO_VOLUME;

/**
 * Indica si actualmente se está reproduciendo música.
 * @type {boolean}
 */
let playing = false;

/**
 * Reproduce la música si aún no está sonando.
 *
 * @returns {Promise<void>}
 */
export async function play() {

    if (playing)
        return;

    try {

        await audio.play();

        playing = true;

    } catch {

        console.log("El navegador bloqueó la reproducción automática.");

    }

}

/**
 * Pausa la música.
 */
export function pause() {

    if (!playing)
        return;

    audio.pause();

    playing = false;

}

/**
 * Alterna entre reproducir y pausar.
 */
export function toggle() {

    if (playing)
        pause();
    else
        play();

}

/**
 * Indica si la música está reproduciéndose.
 *
 * @returns {boolean}
 */
export function isPlaying() {

    return playing;

}

/**
 * Devuelve la instancia del reproductor.
 *
 * @returns {HTMLAudioElement}
 */
export function getAudio() {

    return audio;

}