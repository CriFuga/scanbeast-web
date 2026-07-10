/*
 * Devlog ScanBeast — sorgente unica delle news.
 * Per aggiungere un post: copia un blocco in cima all'array e modificalo.
 * Nessun build, nessun fetch: viene letto direttamente da news.js.
 *
 * Campi:
 *   ver   -> etichetta versione (es. "1.4.0")
 *   date  -> data leggibile (es. "10 Jul 2026")
 *   title -> titolo del post
 *   items -> elenco puntato delle novita'
 *   tags  -> etichette brevi (opzionale)
 */
window.SCANBEAST_NEWS = [
  {
    ver: "1.4.0",
    date: "10 Jul 2026",
    title: "Trade cards with your friends",
    items: [
      "Peer-to-peer card trading: send an offer, pick a card, both sides confirm.",
      "Friend notifications now arrive even when the app is closed.",
      "Groundwork for the upcoming iOS version.",
      "Full documentation pass and polish across the app."
    ],
    tags: ["Trading", "Friends", "Polish"]
  },
  {
    ver: "1.3.0",
    date: "08 Jul 2026",
    title: "Friends, sharing & deep links",
    items: [
      "Share a friend link — tapping it adds you automatically.",
      "Friend request and acceptance push notifications with the sender's name.",
      "Reliability fixes for closed-app notifications."
    ],
    tags: ["Friends", "Online"]
  },
  {
    ver: "1.2.0",
    date: "07 Jul 2026",
    title: "Shop, health & account tools",
    items: [
      "Consumables shop: potions, shields and elixirs to spend your coins in battle.",
      "Health corner: real Nutri-Score and macros on every beast.",
      "Account deletion and forced in-app updates for fair online play."
    ],
    tags: ["Shop", "Health"]
  },
  {
    ver: "1.1.0",
    date: "03 Jul 2026",
    title: "Live PvP arrives",
    items: [
      "Duel a friend in the same room over WiFi or Bluetooth — no internet required.",
      "First public release on itch.io."
    ],
    tags: ["PvP", "Release"]
  }
];
