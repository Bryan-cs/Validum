# Validum — Landing

Sitio de **Grupo Empresarial Validum S.A.S.** (outsourcing administrativo en Colombia).
Construido con **Astro 5 + Tailwind v4**, animaciones con **GSAP + Lenis**, y una sección 3D con **Three.js**.

## Stack

- **Astro 5** — componentes `.astro`, build estático, cero JS por defecto.
- **Tailwind v4** (`@tailwindcss/vite`) — tokens de diseño en `src/styles/global.css` (`@theme`).
- **GSAP + ScrollTrigger** — reveals al hacer scroll, contadores animados.
- **Lenis** — smooth scroll con inercia.
- **Three.js** — red de nodos 3D (sección "Ecosistema"), cargada de forma diferida (`import()` dinámico) solo cuando la sección se acerca al viewport.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
src/
  data/content.ts        # todo el contenido + íconos SVG (una sola fuente de verdad)
  layouts/Base.astro     # <head>, fuentes, SEO, JSON-LD, grain
  components/            # Nav, Hero, Marquee, About, Services, Ecosystem,
                        #  Values, Benefits, Audience, KeyMessage, Contact, Whatsapp
  scripts/
    main.ts             # Lenis, GSAP reveals/counters, parallax, scroll-spy, form, magnetic
    ecosystem.ts        # red de nodos Three.js (chunk diferido)
  pages/index.astro
```

## Pendientes / TODO

- **WhatsApp**: reemplazar el número placeholder en `src/components/Whatsapp.astro` (`phone`).
- **Formulario**: hoy solo valida y muestra confirmación; conectar a un backend / email / WhatsApp Business API.
- **Datos de contacto**: correo, horario y cobertura están en `src/data/content.ts` (`contactInfo`).
- **Fotos**: actualmente de Unsplash (uso libre). Cambiar por fotos reales de Validum cuando estén.

## Paleta

| Token       | Hex       | Uso                       |
|-------------|-----------|---------------------------|
| `ink`       | `#1B2A31` | lienzo oscuro             |
| `blue`      | `#3D8FD4` | acento de marca           |
| `slate`     | `#5C7E8F` | acento medio / mensaje    |
| `paper`     | `#EEF2F4` | secciones claras          |

Tipografía: **Bricolage Grotesque** (display) + **Hanken Grotesque** (cuerpo).
