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
| Order lines, office, WhatsApp, place, the app file, what we sell, refill prices, offers, steps | `src/content.js` |
| Colours (the admin dashboard's, light and dark) | `src/index.css` (CSS variables), `tailwind.config.js` |
| Light by default; dark when the visitor picks it (remembered) | `index.html` (before paint), `src/theme.js` |
| Page sections | `src/site/` (`Hero`, `OrderTicket`, `Sections`, `Header`, `Footer`, `ScrollTop`: back-to-top button, new pages open at the top) |
| Privacy policy (the app's store listing links here; keep `/privacy-policy`) | `src/components/PrivacyPolicy.jsx` |

Fonts: Bricolage Grotesque (headings), Figtree (text), JetBrains Mono (order numbers, money), from Google Fonts.

The Android app is `public/pesa_app/elevate_pesa_prod.apk`: git-ignored (41 MB) and kept on the server between
deploys, so never delete `pesa_app/` there.

## Pictures

The client's own (15 Nov 2026, workspace `../changes/15-11-2026/images/`), as WebP:

| File | What |
| --- | --- |
| `src/assets/offers/*.webp` | The six posters shown under Offers: Even your wallet will smile, Fumbira mu budde (13 kg), Kuba egyiko (6 kg), refill pricelist, Discount efumbe, Eid al-Adha |
| `src/assets/photos/elevate-cylinder-*.webp` | Elevate Pesa cylinder renders (What we sell, Prices) |
| `src/assets/photos/app-home.webp`, `app-support.webp`, `app-signin.webp` | Screenshots of the current app (15 Nov). `app-home` is edited: the greeting's name replaced ("Sarah") and the empty adverts card filled with an Elevate Pesa gas offer, in the app's font (Rubik) |

Free under the [Pexels licence](https://www.pexels.com/license/) (no attribution required):

| File | Pexels photo |
| --- | --- |
| `rider-delivery.webp` | 6867941, Man in orange shirt riding on a motorbike making a delivery |
| `rider-fuel.webp` | 7362948, Man with food delivery bag riding a motorcycle |
| `gas-flame.webp` | 6126281, Close-up of a blue flame on a gas burner |
| `customer-phone.webp` | 30677594, Smiling woman with smartphone in Lagos |

What the site sells and says (gas and fuel only, order lines, prices, offers) is all in `src/content.js`; the client's
brief: workspace `.claude/plans/2026-11-15-client-changes-gas-fuel-and-fixes.md`.
