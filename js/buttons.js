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
    musicPlayer
} from "./dom.js";

import {
    toggle,
    next,
    prev,
    seek,
    setVolume
} from "./audio.js";

/*==============================================================================
    FUNCIONES PRIVADAS
==============================================================================*/

/**
 * Abre Google Maps.
 */
function openMaps() {
    window.open(MAPS_URL, "_blank");
}

/**
 * Abre WhatsApp.
 */
function confirmAttendance() {
    window.open(WHATSAPP_URL, "_blank");
}

/**
 * Agrega el evento al calendario.
 */
function openCalendar() {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(CALENDAR.TITLE)}&dates=${CALENDAR.START}/${CALENDAR.END}`;
    window.open(url, "_blank");
}

/**
 * Seek within the song
 */
function handleSeek(e) {
    if (!musicPlayer.progressContainer) return;
    const rect = musicPlayer.progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seek(Math.max(0, Math.min(1, percent)));
}

/*==============================================================================
    API PÚBLICA
==============================================================================*/

/**
 * Inicializa todos los botones.
 */
export function initializeButtons() {
    maps?.addEventListener("click", openMaps);
    confirm?.addEventListener("click", confirmAttendance);
    calendar?.addEventListener("click", openCalendar);

    // Music Player Controls
    if (musicPlayer.playPauseBtn) {
        musicPlayer.playPauseBtn.addEventListener("click", toggle);
    }
    if (musicPlayer.prevBtn) {
        musicPlayer.prevBtn.addEventListener("click", prev);
    }
    if (musicPlayer.nextBtn) {
        musicPlayer.nextBtn.addEventListener("click", next);
    }
    if (musicPlayer.progressContainer) {
        musicPlayer.progressContainer.addEventListener("click", handleSeek);
    }
    if (musicPlayer.volumeSlider) {
        // Inicializar el color del track
        musicPlayer.volumeSlider.style.setProperty('--val', `${musicPlayer.volumeSlider.value * 100}%`);
        
        musicPlayer.volumeSlider.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value);
            e.target.style.setProperty('--val', `${val * 100}%`);
            setVolume(val);
        });
    }
}