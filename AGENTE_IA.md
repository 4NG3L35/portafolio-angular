# Agente de IA – Portafolio personal en Angular 22

## 1. Datos generales

| Campo | Detalle |
|---|---|
| Proyecto | Portafolio personal multimedia – `portafolio-angular` |
| Materia | Programación Gráfica y Multimedia I – Evaluación Continua H3 |
| Estudiante | Luis Angel Hurtado Sanchez – UNIFRANZ, Ingeniería de Sistemas |
| Agente de IA | Claude Code (Anthropic), modelo Claude Sonnet 5.5 |
| Tipo de agente | Agente de programación en la terminal: lee archivos, busca imágenes, escribe código, compila, prueba en un navegador y publica |
| Framework | Angular 22 (componentes standalone, signals, zoneless, control flow `@if` / `@for`) |
| Plantilla de referencia | iPortfolio de BootstrapMade: https://builder.bootstrapmade.com/demo/iPortfolio/ |

## 2. Objetivo

Reconstruir en Angular 22 el portafolio de la plantilla iPortfolio, con el contenido y las imágenes personales del estudiante, sin copiar el código de la plantilla ni depender de jQuery o de librerías externas de JavaScript.

## 3. Instrucciones dadas al agente

**Consigna del docente (Evaluación Continua H3):**

> Desarrollar una página web multimedia Portafolio Personal utilizando Angular 22 y como referencia el template iPortfolio, más sus imágenes personales.

**Instrucciones del estudiante durante el trabajo:**

1. Usar Angular 22 (el agente instaló Node 24 LTS porque Angular 22 no funciona con Node 22.14).
2. Buscar las fotos personales del estudiante en la carpeta de fondos y usarlas.
3. Reutilizar lo que ya existía en un proyecto anterior de la materia (`mvc3`, la misma plantilla en PHP + PostgreSQL): datos personales, fotos y textos.
4. Publicar el resultado en GitHub Pages (entregable opcional).

**Reglas que siguió el agente:**

- Código mínimo y limpio, sin comentarios, con identificadores en inglés y textos de la página en español.
- Todo el contenido personal sale del proyecto `mvc3` y de las carpetas del estudiante; el agente no inventó datos personales.
- Las imágenes se recortan y comprimen para la web (de varios MB a 25–220 KB).
- Revisar cada sección con capturas reales del navegador antes de entregar.

## 4. Herramientas usadas por el agente

| Herramienta | Uso |
|---|---|
| Lectura y búsqueda de archivos | Encontrar el proyecto `mvc3`, el script SQL con los datos del perfil y las carpetas de fotos |
| Pillow (Python) | Armar hojas de miniaturas para ubicar las fotos del estudiante, recortar y comprimir imágenes |
| Terminal | Instalar Node 24, crear el proyecto con Angular CLI, compilar con `ng build` |
| Chrome headless (protocolo CDP) | Abrir la página, desplazarse por las secciones, usar los filtros y la galería, y sacar capturas de escritorio y móvil |
| GitHub CLI | Crear el repositorio y publicar en GitHub Pages |

## 5. Flujo de trabajo

```
Analizar plantilla ──► Buscar contenido e imágenes ──► Diseñar componentes ──► Programar
        ▲                                                                         │
        └──────────── Corregir ◄── Revisar capturas ◄── Compilar y probar ◄──────┘
```

1. **Análisis de la plantilla.** Descargó el HTML y el CSS de iPortfolio para copiar la estructura (barra lateral fija, hero con efecto de escritura, sobre mí, habilidades, currículum, portafolio con filtros y contacto), la paleta (`#149ddd`, `#040b14`) y las fuentes (Raleway, Poppins, Roboto).
2. **Búsqueda del contenido.** Encontró `mvc3`, el portafolio previo del estudiante, y de ahí tomó sus datos reales: nombre, edad, cumpleaños, teléfono, ciudad, biografía, roles, habilidades, formación y experiencia en soporte TI.
3. **Búsqueda de imágenes.** Revisó las carpetas del estudiante con hojas de miniaturas, encontró su foto de la playa (fondo del inicio), recortó su foto de perfil y eligió fotografías de su trabajo de planos para la galería. Agregó también capturas de sus proyectos (SIGEBRI, un panel en Angular y topologías de redes).
4. **Programación.** Un componente por sección, una directiva para las animaciones y un archivo de datos central.
5. **Pruebas.** Compiló con `ng build`, levantó `ng serve` y comprobó con Chrome headless las seis secciones, el filtro de la galería, el visor de imágenes, el menú móvil y que ninguna imagen estuviera rota.
6. **Correcciones.** Arregló un error de tipos en la directiva `reveal` (el atributo llegaba como texto) y el corte del correo electrónico en "Sobre mí".

## 6. Estructura del proyecto

```
portafolio-angular/
├── AGENTE_IA.md              ← este documento
├── public/img/               ← imágenes personales y capturas de proyectos
└── src/
    ├── index.html
    ├── styles.css            ← estilos y paleta de la plantilla
    └── app/
        ├── app.ts / app.html ← compone las secciones, marca la sección activa del menú
        ├── profile.ts        ← todos los datos del portafolio (perfil, habilidades, trabajos)
        ├── reveal.ts         ← directiva: animación de aparición al hacer scroll
        └── sections/
            ├── sidebar.ts    ← barra lateral con foto, redes y menú (móvil: botón)
            ├── hero.ts       ← portada con foto de fondo y texto que se escribe solo
            ├── about.ts      ← sobre mí
            ├── skills.ts     ← barras de habilidades animadas
            ├── resume.ts     ← línea de tiempo de educación y experiencia
            ├── portfolio.ts  ← filtros por categoría y visor de imágenes (lightbox)
            └── contact.ts    ← datos de contacto, mapa y formulario
```

## 7. Qué se reemplazó de la plantilla

| iPortfolio (jQuery y librerías) | Angular 22 |
|---|---|
| `typed.js` | Señal con un temporizador en `Hero` |
| AOS | Directiva `reveal` con `IntersectionObserver` |
| Isotope (filtros) | `computed()` sobre la lista de trabajos |
| GLightbox | Visor propio con teclado (Esc y flechas) |
| Waypoints (barras y menú activo) | `IntersectionObserver` |
| Formulario PHP | `FormsModule`: abre el correo o WhatsApp con el mensaje |
| Bootstrap Icons | Paquete `bootstrap-icons` |

## 8. Cómo ejecutar

Requiere Node 22.22 o superior (o Node 24).

```bash
npm install
npm start
```

Abrir `http://localhost:4200`. Para producción: `npm run build`.

## 9. Limitaciones y supervisión humana

- Es una página estática: el formulario no envía correos desde un servidor; abre el programa de correo o WhatsApp del visitante.
- Los porcentajes de las habilidades y los textos de la sección "Sobre mí" los toma de `mvc3`; el estudiante puede ajustarlos en `src/app/profile.ts`.
- El estudiante revisó el resultado; el agente propone y ejecuta, pero las decisiones sobre qué datos y fotos mostrar las toma el estudiante.
