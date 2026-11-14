// Everything the site says that may change: contacts, the app file, the services.
import gasFlame from "./assets/photos/gas-flame.webp";
import waterBottles from "./assets/photos/water-bottles.webp";
import packageHandover from "./assets/photos/package-handover.webp";
import riderFuel from "./assets/photos/rider-fuel.webp";

export const PHONE = "+256 751 523 232";
export const PHONE_LINK = "tel:+256751523232";
export const WHATSAPP_LINK = "https://wa.me/256751523232";
/** The Android app, served from this site's public/ folder (kept on the server between deploys). */
export const APK_LINK = "/pesa_app/elevate_pesa_prod.apk";
export const APK_SIZE = "41 MB";
export const PLACE = "Bukoto, Kampala, Uganda";

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#pay-later", label: "Pay later" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "gas",
    title: "Cooking gas",
    text: "Refills and new cylinders from the brands you know, with regulators, burners and other accessories.",
    photo: gasFlame,
    alt: "A blue gas flame on a stove burner",
  },
  {
    id: "water",
    title: "Drinking water",
    text: "Bottled water and dispenser jars for the home or the office, brought to the door.",
    photo: waterBottles,
    alt: "Two bottles of clean drinking water",
  },
  {
    id: "packages",
    title: "Package delivery",
    text: "Send a parcel across town. Up to 15 kg, anything that fits on a motorcycle.",
    photo: packageHandover,
    alt: "A courier handing over a parcel with a smile",
  },
  {
    id: "fuel",
    title: "Fuel financing",
    text: "Fuel now, paid back over time, for riders and small businesses that keep moving.",
    photo: riderFuel,
    alt: "A rider with a delivery box on his scooter in the city",
  },
];

export const STEPS = [
  { title: "Order in the app", text: "Pick gas, water or accessories, or book a package pickup. Your order gets its number at once." },
  { title: "Pay now or later", text: "Pay the full amount, or choose Buy now, pay later and clear it in instalments." },
  { title: "Follow it to your door", text: "See your order move from placed to on the way to delivered, and call us any time." },
];
