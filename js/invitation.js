/**
 * =============================================================================
 * Archivo: invitation.js
 * -----------------------------------------------------------------------------
 * Controla la transición entre la portada y la invitación.
 * =============================================================================
 */

import {

    hero,

    invitation,

    discover,
    
    musicPlayer

} from "./dom.js";

import {

    play

} from "./audio.js";

import {

    launchConfetti

} from "./confetti.js";

/*==============================================================================
    FUNCIONES PRIVADAS
==============================================================================*/

/**
 * Muestra la invitación.
 */
async function showInvitation() {

    hero.style.display = "none";

    invitation.style.display = "block";

    setTimeout(() => {

        invitation.style.transition = "1s";

        invitation.style.opacity = "1";

    }, 100);

    try {

        await play();

    } catch (e) {

        console.log("El navegador bloqueó la reproducción automática.");

    }

    launchConfetti();
    
    // Mostrar reproductor
    if (musicPlayer.container) {
        musicPlayer.container.classList.add("visible");
    }

}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa el módulo.
 */
export function initializeInvitation() {

    if (!discover)
        return;

    discover.addEventListener(

        "click",

        showInvitation

    );

}