/**
 * =============================================================================
 * Archivo: buttons.js
 * -----------------------------------------------------------------------------
 * Administra todos los botones de la aplicación.
 * =============================================================================
 */

import {

    MAPS_URL,

    WHATSAPP_URL,

    CALENDAR

} from "./config.js";

import {

    maps,

    confirm,

    calendar,

    music

} from "./dom.js";

import {

    toggle

} from "./audio.js";

/*==============================================================================
    FUNCIONES PRIVADAS
==============================================================================*/

/**
 * Abre Google Maps.
 */
function openMaps() {

    window.open(

        MAPS_URL,

        "_blank"

    );

}

/**
 * Abre WhatsApp.
 */
function confirmAttendance() {

    window.open(

        WHATSAPP_URL,

        "_blank"

    );

}

/**
 * Agrega el evento al calendario.
 */
function openCalendar() {

    const url =
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(CALENDAR.TITLE)}&dates=${CALENDAR.START}/${CALENDAR.END}`;

    window.open(

        url,

        "_blank"

    );

}

/**
 * Cambia el estado del reproductor.
 */
function toggleMusic() {

    toggle();

}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa todos los botones.
 */
export function initializeButtons() {

    maps?.addEventListener(

        "click",

        openMaps

    );

    confirm?.addEventListener(

        "click",

        confirmAttendance

    );

    calendar?.addEventListener(

        "click",

        openCalendar

    );

    music?.addEventListener(

        "click",

        toggleMusic

    );

}