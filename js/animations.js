/**
 * ============================================================================
 * Archivo: animations.js
 * ----------------------------------------------------------------------------
 * Administra todas las animaciones de la interfaz.
 *
 * - Aparición de tarjetas.
 * - Efecto hover de botones.
 * - Efecto de brillo sobre tarjetas.
 * ============================================================================
 */

import { boxes, actions } from "./dom.js";

/**
 * Inicializa la aparición de las tarjetas mediante IntersectionObserver.
 */
function initializeCards() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(60px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 700,
                    fill: "forwards"
                });

        });

    });

    boxes.forEach(box => {

        box.style.opacity = 0;

        observer.observe(box);

    });

}

/**
 * Inicializa la animación hover de los botones principales.
 */
function initializeButtons() {

    actions.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.06)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 300
                });

        });

    });

}

/**
 * Inicializa el efecto de iluminación de las tarjetas.
 */
function initializeGlow() {

    boxes.forEach(box => {

        box.addEventListener("mousemove", event => {

            const rect = box.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            box.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(255,255,255,.95),
                #fafafa 65%)`;

        });

        box.addEventListener("mouseleave", () => {

            box.style.background =
                "linear-gradient(180deg,#fff,#fafafa)";

        });

    });

}

/**
 * Inicializa todas las animaciones de la interfaz.
 */
export function initializeAnimations() {

    initializeCards();

    initializeButtons();

    initializeGlow();

}