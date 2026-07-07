/**
 * ============================================================================
 * Archivo: invitation.js
 * ----------------------------------------------------------------------------
 * Controla la pantalla de bienvenida.
 * ============================================================================
 */

import { hero, invitation, discover } from "./dom.js";
import { play } from "./audio.js";
import { launchConfetti } from "./confetti.js";

/**
 * ============================================================================
 * Archivo: invitation.js
 * ----------------------------------------------------------------------------
 * Controla la transición entre la pantalla inicial y la invitación.
 * ============================================================================
 */

/**
 * Muestra la invitación con una transición suave.
 */
async function showInvitation() {

    hero.style.display = "none";

    invitation.style.display = "block";

    requestAnimationFrame(() => {

        invitation.style.transition = "opacity 1s ease";

        invitation.style.opacity = "1";

    });

    await play();

    launchConfetti();

}

/**
 * Inicializa los eventos de la pantalla principal.
 */
export function initializeInvitation() {

    if (!discover)
        return;

    discover.addEventListener("click", showInvitation);

}