# 📸 SNAPSHOT "ANTES DEL SEO" — Big Cat Control de Plagas

> **Fecha:** 2026-07-09
> **Propósito:** Registro del estado exacto de la infraestructura SEO **antes** de aplicar las optimizaciones solicitadas por el cliente. Sirve como punto de restauración y comparación (evitar pérdidas).
> **Punto de restauración git:** commit `restore-point: estado ANTES del SEO` (ver `git log`).

---

## 1. Estado técnico general

| Aspecto | Estado ACTUAL (antes) |
|---|---|
| Framework | React 18 + Vite 6 (SPA, **client-side rendering puro**) |
| Renderizado | **CSR sin prerender/SSR** → el HTML inicial está vacío (`<div id="root">`) |
| Meta tags | Vía `react-helmet-async` (se inyectan **solo en cliente**, tras cargar JS) |
| Tailwind | Cargado por **CDN** (`cdn.tailwindcss.com`) — no óptimo para producción/CWV |
| Analytics | Google Analytics `G-05BP9YM1KM` (gtag) presente en `index.html` |
| Dominio | `https://bigcat.mx` |

### ⚠️ Riesgo SEO/GEO principal (antes)
El sitio es una **SPA sin prerenderizado**. Google puede renderizar JS, pero:
- Los crawlers de IA / GEO (ChatGPT, Perplexity, Google AI Overviews) **frecuentemente NO ejecutan JS** → ven una página vacía.
- Cada URL entrega el **mismo HTML base**; los títulos/descripciones únicos solo aparecen tras ejecutar React.
- Esto limita seriamente la posibilidad de posicionar **top 1-3** y de aparecer en respuestas de IA.

---

## 2. Meta tags actuales

### `index.html` (global, estático)
- **Title:** `Big Cat - Control de Plagas | Fumigaciones en México`
- **Description:** `Big Cat - Control de Plagas: Servicios profesionales de fumigación y control de plagas en México. Más de 29 años de experiencia...`
- **Keywords:** `big cat, bigcat, control de plagas, fumigaciones mexico, exterminador, fumigacion residencial, fumigacion comercial`
- Sin OG/Twitter en el HTML base (solo se agregan vía Helmet en cliente).

### Home (`src/pages/Home.tsx`) — vía Helmet
- Title + description + keywords + canonical + OG + Twitter. **Bien**, pero client-side.

### Location page (`src/pages/LocationPage.tsx`) — vía Helmet
- Title: `Control de Plagas en {ciudad} | Big Cat`
- Description genérica templada por ciudad.
- Canonical: `https://bigcat.mx/sedes/{id}`
- **Falta:** schema `LocalBusiness` por ciudad, contenido único por ciudad (texto muy plantillado), OG image real (`/og-image.jpg` puede no existir).

### Schema.org (App.tsx)
- Un único bloque `LocalBusiness / PestControlService` en la home, inyectado como `<script>` **dentro del Router** (renderizado por JS, no en el HTML base).
- `areaServed`: lista genérica de ciudades grandes.

---

## 3. Ciudades / Sedes ACTUALES (`BRANCHES` en constants.ts)

14 sedes existentes (id → nombre):

| id | Nombre |
|---|---|
| guadalajara | Guadalajara, Jal. |
| leon | León, Gto. |
| queretaro | Querétaro, Qro. |
| cdmx | Ciudad de México |
| monterrey | Monterrey, N.L. |
| puebla | Puebla, Pue. |
| tijuana | Tijuana, B.C. |
| merida | Mérida, Yuc. |
| sanluis | San Luis Potosí |
| aguascalientes | Aguascalientes |
| hermosillo | Hermosillo, Son. |
| mexicali | Mexicali, B.C. |
| culiacan | Culiacán, Sin. |
| juarez | Cd. Juárez, Chih. |

Rutas: `/sedes/:city` (renderizadas por `LocationPage`).

---

## 4. Ciudades PRIORITARIAS solicitadas por el cliente

**Estados foco:** Nuevo León, Coahuila, Jalisco, Querétaro.

**Ciudades foco (orden del cliente):**
Monterrey · San Pedro Garza García · Querétaro · San Juan del Río · San Miguel de Allende · Saltillo · Torreón · Reynosa · Tampico · Matamoros

### Gap analysis (antes)
| Ciudad prioritaria | ¿Existe sede? |
|---|---|
| Monterrey | ✅ Sí |
| Querétaro | ✅ Sí |
| San Pedro Garza García | ❌ **Falta** |
| San Juan del Río | ❌ **Falta** |
| San Miguel de Allende | ❌ **Falta** |
| Saltillo | ❌ **Falta** |
| Torreón | ❌ **Falta** |
| Reynosa | ❌ **Falta** |
| Tampico | ❌ **Falta** |
| Matamoros | ❌ **Falta** |

➡️ **8 ciudades prioritarias sin página** antes del SEO.

---

## 5. Sitemap y robots (antes)

- `public/robots.txt`: `Allow: /` + referencia a sitemap. OK básico.
- `public/sitemap.xml` + `scripts/generate-sitemap.js`:
  - Sedes en el generador: `guadalajara, leon, queretaro, cdmx, monterrey, puebla, tijuana, merida, sanluis, aguascalientes, hermosillo, mexicali, culiacan, juarez`.
  - **No incluye** ninguna de las 8 ciudades prioritarias faltantes.
  - Todas las URLs con `priority`/`changefreq` uniformes (no priorizadas por ciudad foco).
  - Sin `<lastmod>` salvo en blog.

---

## 6. Competencia de referencia

- **moshield.com** — competidor indicado por el cliente (benchmark a superar).

---

## 7. Componente de servicios (contexto)

- El slider de servicios (`EnvironmentalAdaptation.tsx`, Swiper) fue **re-conectado** al Home en esta sesión (antes estaba huérfano).
- `Services.tsx` (grid) queda sin usar.

---

## 8. Objetivo del trabajo SEO (después de este snapshot)

1. **Prerender/SEO estático** para que cada ruta entregue HTML completo (clave para top 1-3 y GEO).
2. **Crear las 8 ciudades prioritarias** con páginas locales ricas y únicas.
3. **Schema `LocalBusiness` por ciudad** + FAQ + Breadcrumb + servicio.
4. **Meta tags únicos y optimizados** por ciudad y servicio (title/description/keywords/canonical/OG).
5. **Sitemap priorizado** incluyendo ciudades foco con prioridad alta.
6. **Contenido local único** por ciudad (colonias, plagas estacionales, CPs) para relevancia local.
7. Optimización de rendimiento (Tailwind build vs CDN) para Core Web Vitals.

> Todo lo anterior a este punto queda preservado en el commit de restauración.
