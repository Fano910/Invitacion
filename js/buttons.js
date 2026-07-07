import { MAPS_URL, WHATSAPP_URL, CALENDAR } from "./config.js";
import {
    maps,
    confirm,
    calendar,
    music
} from "./dom.js";
import { toggle } from "./audio.js";

/**
 * ============================================================================
 * Archivo: buttons.js
 * ----------------------------------------------------------------------------
 * Administra todos los botones interactivos de la invitación.
 * ============================================================================
 */

/**
 * Abre la ubicación en Google Maps.
 */
function openMaps() {

    window.open(MAPS_URL, "_blank");

}

/**
 * Abre WhatsApp para confirmar asistencia.
 */
function confirmAttendance() {

    window.open(WHATSAPP_URL, "_blank");

}

/**
 * Abre Google Calendar con el evento preparado.
 */
function openCalendar() {

    const url =
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(CALENDAR.TITLE)}&dates=${CALENDAR.START}/${CALENDAR.END}`;

    window.open(url, "_blank");

}

/**
 * Cambia el estado de reproducción de la música.
 */
function toggleMusic() {

    toggle();

}

/**
 * Inicializa todos los botones de la interfaz.
 */
export function initializeButtons() {

    maps.addEventListener("click", openMaps);

    confirm.addEventListener("click", confirmAttendance);

    calendar.addEventListener("click", openCalendar);

    music.addEventListener("click", toggleMusic);

}