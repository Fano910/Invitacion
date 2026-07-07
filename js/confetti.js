import { CONFETTI } from "./config.js";

/**
 * ============================================================================
 * Archivo: confetti.js
 * ----------------------------------------------------------------------------
 * Encapsula el uso de canvas-confetti.
 * ============================================================================
 */

/**
 * Lanza el efecto de confetti.
 */
export function launchConfetti() {

    if (typeof confetti === "undefined")
        return;

    confetti({

        particleCount: CONFETTI.PARTICLES,

        spread: CONFETTI.SPREAD,

        origin: {
            y: CONFETTI.ORIGIN_Y
        }

    });

}