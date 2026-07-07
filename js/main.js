/**
 * =============================================================================
 * Archivo: main.js
 * -----------------------------------------------------------------------------
 * Punto de entrada de la aplicación.
 * =============================================================================
 */

import {

    initializeInvitation

} from "./invitation.js";

import {

    initializeCountdown

} from "./countdown.js";

import {

    initializeButtons

} from "./buttons.js";

import {

    initializeHearts

} from "./hearts.js";

import {

    initializeParticles

} from "./particles.js";

import {

    initializeAnimations

} from "./animations.js";

/*==============================================================================
    INICIALIZACIÓN
==============================================================================*/

/**
 * Inicializa completamente la aplicación.
 */
function initializeApplication() {

    initializeInvitation();

    initializeCountdown();

    initializeButtons();

    initializeHearts();

    initializeParticles();

    initializeAnimations();

}

/*
 * main.js es cargado como módulo al final del <body>,
 * por lo que el DOM ya está completamente construido.
 */
initializeApplication();