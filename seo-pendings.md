# SEO Pendientes

Auditoría completa realizada el 2026-03-10. Score inicial: **41/100**.
Sprint 1 completado — ver CLAUDE.md para lo que ya está implementado.

---

## Sprint 2 — Performance (LCP crítico) ✅ Completado 2026-03-16

- [x] **Reemplazar CDN Animate.css con keyframes self-hosted** (`src/styles/global.css`)
  - Solo se usan `zoomIn` y `fadeInUp` — keyframes inline vs 77KB externos
  - Elimina dependencia externa render-blocking + DNS lookup a cdnjs.cloudflare.com
- [x] **Corregir carga de Google Fonts** (`public/css/fonts.css`)
  - Eliminados `@import` bloqueantes de fonts.css
  - Work Sans e Inter Tight eliminados (no se usaban)
  - Carga vía `<link rel="stylesheet">` en `<head>` de Layout.astro
- [x] **Agregar `<link rel="preconnect">` para fonts** (`src/layouts/Layout.astro`)
  - `<link rel="preconnect" href="https://fonts.googleapis.com" />`
  - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`
- [x] **Quitar delay de animación del wrapper del hero** (`src/views/home/sections/Intro.astro`)
  - Removido `animate__animated animate__zoomIn animate__delay-1s animate__fast` del wrapper
  - H1 y contenido del hero renderizan inmediatamente
  - CTAs y social links conservan sus delays (2s y 3s)
- [x] **Convertir NavBar `<button>` a `<a href>`** (`src/views/shared/NavBar.astro`)
  - Los 3 botones convertidos a `<a href="#section-id">`
  - JS mantiene scroll suave + estado activo con `e.preventDefault()`
  - CTA "Ver proyectos" en Intro.astro también convertido a `<a href>`

---

## Sprint 3 — Contenido (~170 palabras en home, mínimo 500)

- [ ] **Crear sección "Sobre mí"** (`src/views/home/sections/About.astro`)
  - Mínimo 150 palabras: años de experiencia, ubicación (Sinaloa/México), especialización en pymes, proceso de trabajo
  - Agrega señales E-E-A-T de Experience, Expertise y Trustworthiness simultáneamente
- [ ] **Agregar ciudad/estado al contenido visible de home**
  - "Sinaloa" y "Culiacán" no aparecen en ningún texto renderizado del home
  - Al menos mencionarlo en hero subtitle o sección de contacto
- [ ] **Reescribir meta descriptions de páginas de proyecto** (`src/pages/projects/[project].astro`)
  - Actualmente usa `longDescription` crudo (hasta 230 chars, no optimizado como snippet SERP)
  - Cada proyecto necesita una meta description de 150 chars con CTA implícito
  - Agregar campo `metaDescription` al tipo `Project` en `src/types/Project.ts`
- [ ] **Agregar año de completado a proyectos** (`src/data/allProjects.ts`, `src/types/Project.ts`)
  - Agregar campo `year` al tipo Project y mostrarlo en cards y páginas de proyecto
  - Da señales de frescura a Google y permite al visitante evaluar experiencia en el tiempo
- [ ] **Agregar métricas de resultado a al menos 2 proyectos** (`src/data/allProjects.ts`)
  - Ej: "reducción del tiempo de carga ~60%", "migración sin downtime"
  - Transforma narrativa thin en contenido citable y creíble para AI
- [ ] **`BreadcrumbList` JSON-LD en páginas de proyecto** (`src/pages/projects/[project].astro`)
  - Mejora visualización en SERPs (breadcrumbs en resultado de búsqueda)
- [ ] **Renombrar `/projects/` → `/proyectos/`** (requiere 301 redirects)
  - CLAUDE.md ya especifica `/proyectos/[slug]` como URL objetivo
  - Actualizar: directorio de páginas, todos los links internos, ProjectCard href, footer
- [ ] **Agregar `trailingSlash: 'never'` a astro.config.mjs**
  - Evita contenido duplicado por consistencia de URLs con/sin trailing slash
- [ ] **Crear página `/servicios`**
  - Página de mayor valor para keywords de servicio ("páginas web para empresas México")
  - Sin esta página no hay URL dedicada para rankear queries de intención comercial

---

## Sprint 4 — Trust y AI Readiness

- [ ] **Crear página de Política de Privacidad** (`src/pages/privacidad.astro`)
  - Requerido para cumplimiento de Google Analytics y trust signals B2B
  - Linkear desde el footer
- [ ] **Crear `public/_headers`** (seguridad a nivel hosting)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- [ ] **Agregar número de teléfono o formulario de contacto**
  - El CTA primario actual (`mailto:`) abre el cliente de email — fricción alta en móvil
  - Un formulario embebido o WhatsApp link aumenta conversión
- [ ] **Agregar señal de disponibilidad en el hero**
  - "Disponible para nuevos proyectos" — responde pregunta implícita del visitante
- [ ] **Investigar y corregir bloqueo de bfcache**
  - Lighthouse detectó fallo de Back/Forward Cache
  - Causa probable: `history.scrollRestoration = 'manual'` en `Layout.astro`

---

## Low priority / Backlog

- [ ] Eliminar `<meta name="generator">` (fingerprinting del tech stack)
- [ ] Eliminar `<meta name="keywords">` o reducir a 5 términos (ignorado por Google desde 2009)
- [ ] Agregar `rel="noopener noreferrer"` a los social links en `Intro.astro`
- [ ] Cambiar heading de ProjectCard de `<h2>` a `<h3>` (están dentro de una sección con `<h2>`)
- [ ] Agregar `noindex` a la página 404 (`src/pages/404.astro`)
- [ ] Quitar `target="_self"` en el link de ProjectCard (es el comportamiento por defecto)
- [ ] Crear OG images específicas por proyecto (actualmente todas usan `/og-home.png`)
