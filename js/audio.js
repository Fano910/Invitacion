/**
 * =============================================================================
 * Archivo: audio.js
 * -----------------------------------------------------------------------------
 * Administra la reproducción de música y su interfaz de usuario (lista de rep.)
 * =============================================================================
 */

import {
    PLAYLIST,
    AUDIO_VOLUME
} from "./config.js";

import {
    musicPlayer
} from "./dom.js";

/*==============================================================================
    AUDIO
==============================================================================*/

let currentTrackIndex = 0;
const player = new Audio();
player.volume = AUDIO_VOLUME;

// Initial load
if (PLAYLIST.length > 0) {
    const track = PLAYLIST[currentTrackIndex];
    player.src = track.path;
    if (musicPlayer.songName) musicPlayer.songName.textContent = track.name;
    if (musicPlayer.artistName) musicPlayer.artistName.textContent = track.artist || "Desconocido";
    if (musicPlayer.artistLink) {
        musicPlayer.artistLink.href = track.url || "#";
        musicPlayer.artistLink.style.display = track.url ? "inline" : "none";
    }
}

/**
 * Estado de reproducción.
 * @type {boolean}
 */
let playing = false;

/*==============================================================================
    EVENTOS DEL REPRODUCTOR
==============================================================================*/

/**
 * Formatea segundos a MM:SS
 * @param {number} time 
 */
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

player.addEventListener("timeupdate", () => {
    if (!musicPlayer.progressBar || !musicPlayer.songTime) return;
    
    const { currentTime, duration } = player;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        musicPlayer.progressBar.style.width = `${progressPercent}%`;
        musicPlayer.songTime.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    }
});

player.addEventListener("ended", () => {
    next();
});

/*==============================================================================
    MÉTODOS
==============================================================================*/

function updateUIAndPlay() {
    if (PLAYLIST.length > 0) {
        const track = PLAYLIST[currentTrackIndex];
        player.src = track.path;
        if (musicPlayer.songName) musicPlayer.songName.textContent = track.name;
        if (musicPlayer.artistName) musicPlayer.artistName.textContent = track.artist || "Desconocido";
        if (musicPlayer.artistLink) {
            musicPlayer.artistLink.href = track.url || "#";
            musicPlayer.artistLink.style.display = track.url ? "inline" : "none";
        }
    }
    if (playing) {
        player.play().catch(e => console.warn(e));
    }
}

export async function play() {
    if (playing || PLAYLIST.length === 0) return;
    try {
        await player.play();
        playing = true;
        updatePlayPauseButton();
    } catch (error) {
        console.warn(error);
    }
}

export function pause() {
    if (!playing) return;
    player.pause();
    playing = false;
    updatePlayPauseButton();
}

export function toggle() {
    playing ? pause() : play();
}

export function next() {
    if (PLAYLIST.length <= 1) return;
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    updateUIAndPlay();
}

export function prev() {
    if (PLAYLIST.length <= 1) return;
    currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    updateUIAndPlay();
}

export function seek(percent) {
    if (player.duration) {
        player.currentTime = player.duration * percent;
    }
}

export function setVolume(val) {
    player.volume = Math.max(0, Math.min(1, val));
}

function updatePlayPauseButton() {
    if (musicPlayer.playPauseBtn) {
        musicPlayer.playPauseBtn.textContent = playing ? "⏸" : "▶";
    }
}

export function isPlaying() {
    return playing;
}