# Módulo de Autenticación — Login & Registro

Módulo Front-End moderno de **Inicio de Sesión y Registro** con diseño de dos
paneles y **animación deslizante** (sliding panel). 100% responsive, código
limpio, comentado y documentado.

## Vista previa

- **Login (Sign In):** botones sociales (Google / Facebook / LinkedIn),
  separador "O", correo, contraseña, enlace "¿Olvidaste tu contraseña?" y
  botón *Iniciar Sesión*.
- **Panel de bienvenida:** mensaje de invitación y botón grande *Registrarse*
  que desliza el panel.
- **Registro:** botones sociales, separador "O", y campos Nombres, Apellidos,
  Ciudad, Teléfono, Correo, Contraseña y Fecha de Nacimiento.

## Estructura

```
auth-module/
├── index.html        # Marcado principal
├── css/
│   └── style.css     # Estilos, tema (variables CSS) y animaciones
├── js/
│   └── main.js       # Toggle de paneles + validación de formularios
├── assets/
│   └── logo.svg      # <-- Coloca aquí tu logo
└── README.md
```

## Cómo usar

Abre `index.html` en el navegador. No requiere instalación ni dependencias
de compilación (los iconos y la tipografía se cargan por CDN).

## Personalización

### 1. Colores de marca
Edita las variables al inicio de `css/style.css`:

```css
:root {
  --color-primary: #6a11cb;
  --color-primary-2: #2575fc;
  --gradient-brand: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
}
```

### 2. Logo
Reemplaza `assets/logo.svg` por tu archivo (o usa `.png` y actualiza la ruta
en el atributo `src` de las dos etiquetas `<img>` dentro de `.brand-logo`).
Mientras no exista un logo, se muestra un recuadro guía "TU LOGO".

### 3. Conectar con el backend
En `js/main.js`, busca los comentarios `==== INTEGRACIÓN BACKEND ====` dentro
de los manejadores de envío. Ahí puedes reemplazar el `console.log` por tu
llamada real (por ejemplo `fetch("/api/login", ...)`).

## Validación incluida (lado cliente)

- Campos obligatorios.
- Formato de correo electrónico.
- Contraseña de al menos 6 caracteres.
- Teléfono con dígitos suficientes.

Los errores se muestran bajo cada campo y se limpian al corregir.

## Responsive

- **Escritorio:** animación deslizante horizontal entre Login y Registro.
- **Móvil / tablet:** el diseño se apila y la animación pasa a ser vertical.
