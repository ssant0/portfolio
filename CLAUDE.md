# Portfolio — Manuel Samaniego

Astro 5 + Tailwind CSS 4 static site. Personal portfolio targeting SME clients.

## Commands

```bash
npm run dev      # Dev server (accessible on network via --host)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## Architecture

```
src/
  layouts/       # Layout.astro — html shell, fonts, animate.css, footer
  pages/         # index.astro, projects/[project].astro, 404.astro
  views/
    home/
      sections/  # Intro, RecentProjects, Technologies (full-page sections)
      components/ # ProjectCard
    shared/      # NavBar, Contact, Footer
  data/          # allProjects.ts, technologies.ts, socialLinks.ts
  scripts/       # animate-on-view.ts (Intersection Observer)
  styles/        # global.css
  types/         # Project.ts
public/
  css/           # fonts.css (animate_config.css inlined in Layout.astro)
  og-home.png    # OG image 1200×630 (social sharing)
```

## Design System

- Brand teal: `#2d5d54` — hover: `#3e8b7d`
- Background: `linear-gradient(170deg, #daeee9 0%, #f1f2f5 14%) fixed`
- Fonts: `.codec-pro` (headings) / `.rubik` (body)
- Animations: Animate.css 4.1.1 + `animate-on-view` class + `data-aov-animation` attribute

### Reusable UI patterns

```html
<!-- Eyebrow label (above every section h2) -->
<p class="text-xs font-semibold tracking-widest text-[#2d5d54] uppercase mb-2
          animate__animated animate__fast animate-on-view"
   data-aov-animation="animate__fadeInUp">— LABEL</p>

<!-- Tech pill -->
<span class="bg-[#2d5d54]/8 text-[#2d5d54] text-xs px-2 py-0.5 rounded-full font-medium">
  Tech
</span>
```

## Adding Content

**New project** — add entry to `src/data/allProjects.ts`:
- Required: `title`, `shortDescription`, `longDescription`, `image`, `liveLink`, `technologies[]`, `keywords[]`
- Image: import from `src/assets/img/` (Astro optimizes to WebP)
- URL slug is auto-generated from `title` (spaces/dots → hyphens, lowercase)

**New technology** — add entry to `src/data/technologies.ts` with `name` and inline SVG `icon`.

## SEO Strategy

### Identidad y posicionamiento
- **Persona**: Manuel Samaniego — nombre propio, no marca/agencia
- **Servicio core**: Desarrollo web para pymes con futuro en México
- **Mercado primario**: Pymes mexicanas (Sinaloa como base geográfica, México en general)
- **Mercado secundario**: Empresas medianas, sector empresarial hispanohablante
- **Dominio**: manuelsamaniego.com.mx (~2 años de antigüedad)
- **Herramientas activas**: Google Search Console + Google Analytics

### Keywords objetivo
| Intención | Keyword |
|-----------|---------|
| Principal | páginas web para empresas México |
| Principal | desarrollo web para pymes |
| Marca | Manuel Samaniego desarrollador web |
| Local | desarrollo web Sinaloa |
| Local | páginas web Culiacán (o ciudad de Sinaloa) |
| Servicio | diseño web para negocios México |
| Servicio | páginas web profesionales para pymes |

### Reglas SEO para cada página

**`<title>`** — formato: `Keyword principal | Manuel Samaniego`
**`<meta description>`** — 150–160 caracteres, incluir keyword + CTA implícito
**`<h1>`** — una sola por página, incluir keyword principal
**Jerarquía de headings** — h1 → h2 → h3, nunca saltarse niveles
**Alt text en imágenes** — descriptivo y con keyword cuando sea natural

### Estructura de URLs futura
```
/                        → home (ya existe)
/proyectos/[slug]        → project pages (ya existe como /projects/[slug])
/servicios               → página de servicios (próxima)
/blog/[slug]             → artículos (próximo)
/blog                    → índice del blog (próximo)
```

### Schema.org (JSON-LD) — estado actual
- ✅ `Person` + `WebSite` en home — implementados en `src/pages/index.astro`
- ⏳ `BreadcrumbList` en páginas de proyecto — pendiente (ver `seo-pendings.md`)
- ⏳ `BlogPosting` en cada artículo del blog — pendiente

### Open Graph / Social — implementado
- ✅ `og:title`, `og:description`, `og:image`, `og:url` en todas las páginas (via `Layout.astro`)
- ✅ `og:image` — `public/og-home.png` (1200×630px)
- ✅ `twitter:card` — `summary_large_image`

### Sitemap y robots — implementado
- ✅ `@astrojs/sitemap` instalado y configurado en `astro.config.mjs`
- ✅ `site: 'https://www.manuelsamaniego.com.mx'` en `astro.config.mjs`
- ✅ `public/robots.txt` existe con directiva `Sitemap:`
- ✅ Canonical tag dinámico por página (usa `Astro.url.pathname`)

### Layout.astro — props actuales
```ts
interface Props {
  title: string;       // formato: "Keyword | Manuel Samaniego"
  description: string; // 150–160 chars, incluir keyword + geo
  keywords: string;    // lista separada por comas
  schema?: string;     // JSON.stringify() de JSON-LD, solo en páginas que lo necesiten
}
```

### Prioridades pendientes
Ver `seo-pendings.md` en la raíz del proyecto para el backlog completo organizado por sprints.

### Proyectos como contenido SEO
- Los proyectos son reales y los clientes pueden ser nombrados
- Cada página de proyecto debe mencionar el sector del cliente y la tecnología
- `longDescription` debe incluir naturalmente keywords de servicio

## Gotchas

- **Astro `Image` + `inferSize`** injects inline `width`/`height`, overriding CSS height. Fix: `relative` on wrapper + `absolute inset-0 w-full h-full object-cover` on the image.
- **Hero animation delays**: kept at 1s / 2s / 3s — don't increase, CTAs must appear fast.
- **`prefers-reduced-motion`** is handled in `Layout.astro` `<style>` block (not global.css).
- **`animate-on-view`** only triggers once per element (no re-trigger on scroll up).
- Scroll restoration is disabled on page load (`history.scrollRestoration = 'manual'`).
