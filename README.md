# Elevate Pesa landing site

The public site on `https://elevatepesa.com`: what Elevate Pesa delivers, how ordering and pay later work, the
Android app download, and contacts. React 18, Vite 5, Tailwind 3. Redesigned 2026-11-15 (it began as the "HooBank"
template).

## Run and build

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/, uploaded to the server (workspace docs/redeployment.md)
```

## Where things are

| What | File |
| --- | --- |
| Phone, WhatsApp, place, the app file, services, steps | `src/content.js` |
| Colours (the admin dashboard's, light and dark) | `src/index.css` (CSS variables), `tailwind.config.js` |
| Light/dark: the visitor's choice, else the phone's | `index.html` (before paint), `src/theme.js` |
| Page sections | `src/site/` (`Hero`, `OrderTicket`, `Sections`, `Header`, `Footer`) |
| Privacy policy (the app's store listing links here; keep `/privacy-policy`) | `src/components/PrivacyPolicy.jsx` |

Fonts: Bricolage Grotesque (headings), Figtree (text), JetBrains Mono (order numbers, money), from Google Fonts.

The Android app is `public/pesa_app/elevate_pesa_prod.apk`: git-ignored (41 MB) and kept on the server between
deploys, so never delete `pesa_app/` there.

## Photos

Free under the [Pexels licence](https://www.pexels.com/license/) (no attribution required), resized to WebP in
`src/assets/photos/`:

| File | Pexels photo |
| --- | --- |
| `rider-delivery.webp` | 30661401, Motorcycle delivery in Nairobi street scene |
| `rider-fuel.webp` | 30661393, Motorcyclist in Nairobi street scene |
| `gas-flame.webp` | 6126281, Close-up of a blue flame on a gas burner |
| `water-bottles.webp` | 11860560, Bottles of water |
| `package-handover.webp` | 6995144, A delivery man handing packages |
| `customer-phone.webp` | 30677594, Smiling woman with smartphone in Lagos |

`app-home.webp` and `app-send.webp` are screenshots of the Elevate Pesa app.
