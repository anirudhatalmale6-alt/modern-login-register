/* ==========================================================================
   Módulo de Autenticación — Lógica de la interfaz
   --------------------------------------------------------------------------
   Responsabilidades:
     1. Alternar (toggle) entre los paneles de Login y Registro con animación.
     2. Validación básica de los campos en el lado del cliente.
     3. Punto de integración para conectar con tu backend / API real.

   Nota: Este archivo es solo Front-End. Los envíos de formulario se
   interceptan y se validan; la llamada real al servidor debe colocarse
   donde se indica con el comentario "INTEGRACIÓN BACKEND".
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. TOGGLE DE PANELES (animación deslizante)                        */
  /* ------------------------------------------------------------------ */
  const container = document.getElementById("container");
  const signUpBtn = document.getElementById("signUpBtn"); // botón "Registrarse" del overlay
  const signInBtn = document.getElementById("signInBtn"); // botón "Iniciar Sesión" del overlay

  // Al pulsar "Registrarse": activa el estado que desliza los paneles.
  signUpBtn.addEventListener("click", function () {
    container.classList.add("right-panel-active");
  });

  // Al pulsar "Iniciar Sesión": vuelve al estado inicial (login visible).
  signInBtn.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
  });

  /* ------------------------------------------------------------------ */
  /* 2. UTILIDADES DE VALIDACIÓN                                        */
  /* ------------------------------------------------------------------ */

  // Expresión regular sencilla para validar el formato del correo.
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Muestra un mensaje de error bajo un campo y lo marca como inválido.
   * @param {HTMLInputElement} input  Campo afectado.
   * @param {string} message          Texto del error.
   */
  function setError(input, message) {
    input.classList.add("invalid");
    const msgEl = input.parentElement.querySelector(".error-msg");
    if (msgEl) msgEl.textContent = message;
  }

  /**
   * Limpia el estado de error de un campo.
   * @param {HTMLInputElement} input
   */
  function clearError(input) {
    input.classList.remove("invalid");
    const msgEl = input.parentElement.querySelector(".error-msg");
    if (msgEl) msgEl.textContent = "";
  }

  /**
   * Valida un conjunto de campos requeridos.
   * @param {HTMLInputElement[]} fields
   * @returns {boolean} true si todos los campos son válidos.
   */
  function validateFields(fields) {
    let valid = true;

    fields.forEach(function (input) {
      clearError(input);
      const value = input.value.trim();

      // Regla 1: campo obligatorio vacío.
      if (!value) {
        setError(input, "Este campo es obligatorio.");
        valid = false;
        return;
      }

      // Regla 2: formato de correo electrónico.
      if (input.type === "email" && !EMAIL_REGEX.test(value)) {
        setError(input, "Introduce un correo válido.");
        valid = false;
        return;
      }

      // Regla 3: longitud mínima de contraseña.
      if (input.type === "password" && value.length < 6) {
        setError(input, "La contraseña debe tener al menos 6 caracteres.");
        valid = false;
        return;
      }

      // Regla 4: teléfono con dígitos suficientes.
      if (input.type === "tel" && value.replace(/\D/g, "").length < 7) {
        setError(input, "Introduce un teléfono válido.");
        valid = false;
        return;
      }
    });

    return valid;
  }

  // Limpia el error de un campo en cuanto el usuario empieza a corregirlo.
  document.querySelectorAll(".input-group input").forEach(function (input) {
    input.addEventListener("input", function () {
      clearError(input);
    });
  });

  /* ------------------------------------------------------------------ */
  /* 3. ENVÍO DE FORMULARIOS                                            */
  /* ------------------------------------------------------------------ */

  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");

  // --- Login ---
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = [
      document.getElementById("si-email"),
      document.getElementById("si-password"),
    ];

    if (!validateFields(fields)) return;

    // Datos listos para enviar al servidor.
    const payload = {
      email: fields[0].value.trim(),
      password: fields[1].value,
    };

    // ==== INTEGRACIÓN BACKEND ====
    // Reemplaza este bloque por tu llamada real, por ejemplo:
    // fetch("/api/login", { method: "POST", body: JSON.stringify(payload) })
    console.log("Login enviado:", payload);
    alert("Inicio de sesión válido (demo). Conecta aquí tu backend.");
  });

  // --- Registro ---
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = [
      document.getElementById("su-nombres"),
      document.getElementById("su-apellidos"),
      document.getElementById("su-ciudad"),
      document.getElementById("su-telefono"),
      document.getElementById("su-email"),
      document.getElementById("su-password"),
      document.getElementById("su-fecha"),
    ];

    if (!validateFields(fields)) return;

    // Datos listos para enviar al servidor.
    const payload = {
      nombres: fields[0].value.trim(),
      apellidos: fields[1].value.trim(),
      ciudad: fields[2].value.trim(),
      telefono: fields[3].value.trim(),
      email: fields[4].value.trim(),
      password: fields[5].value,
      fechaNacimiento: fields[6].value,
    };

    // ==== INTEGRACIÓN BACKEND ====
    // Reemplaza este bloque por tu llamada real, por ejemplo:
    // fetch("/api/register", { method: "POST", body: JSON.stringify(payload) })
    console.log("Registro enviado:", payload);
    alert("Registro válido (demo). Conecta aquí tu backend.");
  });
})();
