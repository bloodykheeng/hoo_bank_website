// Everything the site says that may change: contacts, the app file, what we sell, prices and offers.
// Client brief of 15 Nov 2026 (workspace .claude/plans/2026-11-15-client-changes-gas-fuel-and-fixes.md):
// only gas (Elevate Pesa's own, Shell, Total and other brands) and fuel.
import gasFlame from "./assets/photos/gas-flame.webp";
import riderFuel from "./assets/photos/rider-fuel.webp";
import elevateCylinder from "./assets/photos/elevate-cylinder-tall.webp";
import fumbira from "./assets/offers/fumbira-13kg.webp";
import kubaEgyiko from "./assets/offers/kuba-egyiko-6kg.webp";
import walletSmile from "./assets/offers/wallet-will-smile.webp";
import pricelist from "./assets/offers/refill-pricelist.webp";
import efumbe from "./assets/offers/discount-efumbe.webp";
import eid from "./assets/offers/eid-al-adha.webp";

/** Orders and delivery (the numbers on the client's posters). */
export const ORDER_LINES = [
  { label: "0708 172 725", link: "tel:+256708172725" },
  { label: "0794 902 921", link: "tel:+256794902921" },
];
/** WhatsApp and the office. */
export const OFFICE = { label: "+256 751 523 232", link: "tel:+256751523232" };
export const WHATSAPP_LINK = "https://wa.me/256751523232";
/** The Android app, served from this site's public/ folder (kept on the server between deploys). */
export const APK_LINK = "/pesa_app/elevate_pesa_prod.apk";
export const APK_SIZE = "41 MB";
export const PLACE = "Bukoto, Kampala, Uganda";

export const NAV = [
  { href: "#services", label: "What we sell" },
  { href: "#prices", label: "Prices" },
  { href: "#offers", label: "Offers" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "elevate-gas",
    title: "Elevate Pesa gas",
    text: "Our own cylinders, 6 kg to 45 kg: full sets with burner and grill, and refills.",
    photo: elevateCylinder,
    alt: "An Elevate Pesa gas cylinder",
    light: true,
  },
  {
    id: "brands",
    title: "Shell, Total and other brands",
    text: "Refills and new cylinders from the gas brands you already cook with.",
    photo: gasFlame,
    alt: "A blue gas flame on a stove burner",
  },
  {
    id: "fuel",
    title: "Fuel",
    text: "Fuel for riders and small businesses that keep moving, paid at once or over time.",
    photo: riderFuel,
    alt: "A rider with a delivery box on his scooter in the city",
  },
];

/** Elevate Pesa gas refill prices (the client's pricelist poster), UGX. */
export const REFILLS = [
  { size: "6 kg", price: "48,000" },
  { size: "12 kg", price: "100,000" },
  { size: "45 kg", price: "250,000" },
];

/** The client's posters, all current (the user, 15 Nov 2026). Each carries its own terms. */
export const OFFERS = [
  { id: "wallet", src: walletSmile, title: "Even your wallet will smile", alt: "Elevate Pesa gas on discount: 6 kg full set UGX 150,000, 12 kg full set UGX 240,000" },
  { id: "fumbira", src: fumbira, title: "Fumbira mu budde: 13 kg", alt: "13 kg Elevate Pesa gas with burner and cylinder, UGX 250,000" },
  { id: "kuba", src: kubaEgyiko, title: "Kuba egyiko: 6 kg", alt: "6 kg Elevate Pesa gas with grill, burner and cylinder, UGX 130,000" },
  { id: "pricelist", src: pricelist, title: "Refill prices", alt: "Elevate Pesa refill prices: 6 kg 48,000, 12 kg 100,000, 45 kg 250,000" },
  { id: "efumbe", src: efumbe, title: "Discount efumbe", alt: "Discount efumbe: 6 kg refill 45,000 instead of 53,000" },
  { id: "eid", src: eid, title: "Eid al-Adha", alt: "Eid al-Adha greetings from Elevate Pesa" },
];

export const STEPS = [
  { title: "Order in the app", text: "Pick Elevate Pesa gas, another brand or fuel. Your order gets its number at once." },
  { title: "Pay now or later", text: "Pay the full amount, or choose Buy now, pay later and clear it in instalments." },
  { title: "Follow it to your door", text: "See your order move from placed to on the way to delivered, and call us any time." },
];
