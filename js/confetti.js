/**
 * =============================================================================
 * Archivo: confetti.js
 * -----------------------------------------------------------------------------
 * Encapsula el uso de la librería canvas-confetti.
 * =============================================================================
 */

import {

    CONFETTI

} from "./config.js";

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Lanza el efecto de confetti.
 */
export function launchConfetti() {

    if (typeof window.confetti === "undefined")
        return;

    window.confetti({

        particleCount: CONFETTI.PARTICLE_COUNT,

        spread: CONFETTI.SPREAD,

        origin: {

            y: CONFETTI.ORIGIN_Y

        }

    });

}