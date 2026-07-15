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
    ver: "1.8.0",
    date: "15 Jul 2026",
    title: "Season Pass & guided onboarding",
    items: [
      "New Season Pass: play to earn XP and unlock 25 tiers of free rewards — coins, essence and chests. A fresh season every 30 days.",
      "A guided tutorial walks new hunters through their first scan and first battle, with a welcome gift at the end.",
      "Interface adapted to notch and punch-hole displays, plus various fixes and improvements."
    ],
    tags: ["Season Pass", "Onboarding"]
  },
  {
    ver: "1.7.1",
    date: "14 Jul 2026",
    title: "Fixes & smoother contributing",
    items: [
      "Fixed an issue from the previous update that could show your name twice on the leaderboard or ask you to set it again — your progress is safe.",
      "Product not on Open Food Facts yet? We now open the OFF app so you can add it and get an accurate card.",
      "More reliable accounts plus a batch of stability fixes under the hood."
    ],
    tags: ["Fixes", "Reliability"]
  },
  {
    ver: "1.7.0",
    date: "14 Jul 2026",
    title: "Optional rewards, more coins",
    items: [
      "Watch a short optional ad to boost your run — bonus shop coins, double a battle's XP and coins, or a free daily chest on the home screen.",
      "Ads are always optional and reward-only: nothing interrupts play, you choose when to watch.",
      "Battle coins now scale with your opponent — tougher enemies and bosses pay out more."
    ],
    tags: ["Rewards", "Coins", "Ads"]
  },
  {
    ver: "1.6.4",
    date: "13 Jul 2026",
    title: "Notifications your way",
    items: [
      "Pick exactly which push alerts you receive — duels, trades, messages and friend requests — from the newly reorganised Settings.",
      "No more double notifications: with the app open you get a single in-app heads-up instead of a duplicate system notification.",
      "A small dot now flags pending friend requests and unread messages on the home menu and the leaderboard."
    ],
    tags: ["Notifications", "Settings"]
  },
  {
    ver: "1.6.3",
    date: "13 Jul 2026",
    title: "New shop, chests & card frames",
    items: [
      "Revamped shop with coin chests and an animated reveal — unbox items, essence and rare beasts.",
      "Cosmetic card frames: unlock silver, emerald, ruby, gold and even animated borders in the new Style tab.",
      "Boss of the day: a shared daily challenge with a free rare chest when you beat it.",
      "Fairer PvP — opponents matched by evolution stage, speed decides who strikes first, plus anti-farm tweaks and new missions."
    ],
    tags: ["Shop", "Cosmetics", "Balance"]
  },
  {
    ver: "1.6.2",
    date: "13 Jul 2026",
    title: "Security hardening",
    items: [
      "App Check enforcement is now live, protecting online play and the leaderboard from tampering."
    ],
    tags: ["Security"]
  },
  {
    ver: "1.6.1",
    date: "13 Jul 2026",
    title: "Smoother updates & safer accounts",
    items: [
      "Returning players get a quick feedback prompt on update instead of replaying the whole tutorial.",
      "The 'Rate ScanBeast' button now reliably opens the Play Store listing.",
      "Sturdier account handling: if your online profile is ever reset, the app guides you back in — your local collection stays safe."
    ],
    tags: ["Updates", "Accounts", "Fixes"]
  },
  {
    ver: "1.6.0",
    date: "13 Jul 2026",
    title: "A full guided tutorial",
    items: [
      "Brand-new guided tutorial that walks you through every part of the game — scanning, health & Nutri-Score, evolution, battles, the coin economy, contributing missing products, trading, messages and languages.",
      "Existing players get the refreshed tutorial too, so the newer features don't go unnoticed.",
      "Optional, privacy-first usage analytics: off by default — you're always in control."
    ],
    tags: ["Tutorial", "Privacy"]
  },
  {
    ver: "1.5.1",
    date: "12 Jul 2026",
    title: "Speak your language & sharper scanning",
    items: [
      "ScanBeast now speaks 6 languages: English, Italian, Portuguese, Spanish, French and German.",
      "Much better barcode scanning — faster, and it reads more barcode types.",
      "Push notifications now arrive in your language.",
      "Product not in the database? Generate a mystery beast or help add it to Open Food Facts."
    ],
    tags: ["Languages", "Scanning"]
  },
  {
    ver: "1.5.0",
    date: "10 Jul 2026",
    title: "Chat with friends & a fresh new look",
    items: [
      "Direct messages: chat privately with your friends, right inside the app.",
      "Redesigned home menu, cleaner navigation and a card-style shop with new battle items.",
      "Server-side username filter for a healthier community.",
      "Smoother animations and lots of fixes under the hood."
    ],
    tags: ["Chat", "Redesign", "Polish"]
  },
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
