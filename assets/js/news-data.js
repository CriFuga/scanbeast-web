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
    ver: "2.0.38",
    date: "21 Aug 2026",
    title: "Favourite beasts, clearer icons",
    items: [
      "Open a beast card and tap the heart at the top right: that beast stays on top of the lists, both in the bestiary for its element and in the card picker when a battle starts. The filter panel can also show favourites only.",
      "One symbol, one meaning: coins now use a money bag, experience points take the star, and the bolt stands only for the daily login streak. A player asked what the bolt in the daily reward meant, and he was right to — it was doing two jobs at once.",
      "Updating players get a short walkthrough that points to where favourites are marked."
    ],
    tags: ["Bestiary", "Quality of life"]
  },
  {
    ver: "2.0.37",
    date: "20 Aug 2026",
    title: "The Rock Shield holds again",
    items: [
      "Air already beats Earth, and its Gust skill ignored defense completely — including the Rock Shield, the one thing an Earth beast does. Shield up or not, the damage was the same.",
      "Gust still pierces the parry and the passive evolution defense, but the shield now cuts a third of it. It stays the answer to turtling without erasing an entire element.",
      "Fixed the rarity tag spilling out of its border in the bestiary after sorting the list."
    ],
    tags: ["Battle", "Balance"]
  },
  {
    ver: "2.0.36",
    date: "20 Aug 2026",
    title: "Search and sort in the bestiary",
    items: [
      "A search bar finds a beast by name instead of scrolling the whole collection, and the button beside it opens sorting by HP, attack or speed plus a rarity filter.",
      "Search and filters work together: search with the Epic filter on and it stays on. A dot on the button marks active filters, and an empty list clears them in one tap."
    ],
    tags: ["Bestiary", "Quality of life"]
  },
  {
    ver: "2.0.35",
    date: "19 Aug 2026",
    title: "Rarity finally counts in battle",
    items: [
      "Beast cards now show the battle stats — HP, attack and defense — right next to the nutritional values, so the numbers you fight with are no longer a mystery.",
      "Rarity affects combat at last: rare beasts hit harder and take more punishment against the AI, and attack is rebalanced over a wider range so beasts feel different from each other.",
      "Private chat: press and hold a message to reply, report or delete it. Reporting is offered on incoming messages, deleting on your own.",
      "Notification banners stay on screen for at least four seconds, and the X closes them straight away."
    ],
    tags: ["Battle", "Cards", "Chat"]
  },
  {
    ver: "2.0.33",
    date: "19 Aug 2026",
    title: "Duel preview, instant clan chat",
    items: [
      "Online duels open with a versus preview of the two beasts, and the battle HUD shows what each side is bringing to the fight.",
      "The clan chat is loaded in the background at startup, so it opens on the latest messages instead of staying empty for a couple of seconds.",
      "Long beast names stay inside the card in the duel preview, and the leaderboard profile popup shows total XP with the player name centred."
    ],
    tags: ["Duels", "Clans"]
  },
  {
    ver: "2.0.30",
    date: "19 Aug 2026",
    title: "Messages from the creator",
    items: [
      "ScanBeast can now deliver special messages — and rewards — straight from the game's creator, shown in a dedicated in-app popup.",
      "The top players on the leaderboard are the first to be thanked, with a coin and essence reward."
    ],
    tags: ["Community", "Rewards"]
  },
  {
    ver: "2.0.29",
    date: "19 Aug 2026",
    title: "Creator badge fix",
    items: [
      "Fixed the game creator badge so the second star stays next to the name instead of jumping to the end of the line — in the clan member list, the leaderboard and private messages."
    ],
    tags: ["Creator", "Fix"]
  },
  {
    ver: "2.0.28",
    date: "18 Aug 2026",
    title: "Creator badge and clan chat polish",
    items: [
      "The game creator is now recognisable everywhere — a gold name between two stars, on the leaderboard, in clans, in messages and on the profile.",
      "A jump-to-bottom button appears in the clan chat when you have scrolled up, so you can return to the latest message in one tap.",
      "Fixed the chat jumping to the top while typing or deleting, and the clan friendly result card now always shows up in chat even after reopening the app."
    ],
    tags: ["Creator", "Clans"]
  },
  {
    ver: "2.0.26",
    date: "18 Aug 2026",
    title: "Bigger clan chat box",
    items: [
      "The clan chat input is bigger and grows as you type, so you can see what you are writing, and the chat now stays on the latest message.",
      "Clan friendly challenge: it now starts correctly even if you fully close the app after sending it, instead of breaking when your opponent accepts."
    ],
    tags: ["Clans", "Chat"]
  },
  {
    ver: "2.0.25",
    date: "18 Aug 2026",
    title: "Clan challenge, no more broken start",
    items: [
      "If you send a clan friendly challenge, then close and reopen the app before your opponent accepts, the match now starts correctly instead of breaking and dropping you back home."
    ],
    tags: ["Clans", "Fixes"]
  },
  {
    ver: "2.0.24",
    date: "18 Aug 2026",
    title: "Fair duel endings",
    items: [
      "Fixed a false \"win by forfeit\": whoever lost an online duel could be handed the win while the opponent had actually won.",
      "The result screen now spells out the reason under Victory and Defeat.",
      "Accepting a challenge gives you 30 seconds to pick your beast, with a countdown — no more getting stuck on that screen.",
      "If the room is already gone you leave in a few seconds instead of waiting."
    ],
    tags: ["Duels", "Fixes"]
  },
  {
    ver: "2.0.23",
    date: "18 Aug 2026",
    title: "Matchmaking, clans and a new language picker",
    items: [
      "After an online duel you are no longer dragged into your opponent's next match, and looking for a new challenger will not pick the player you just faced.",
      "The wait for a challenge drops from 90 to 30 seconds, with a countdown, and the invite no longer stays stuck for the sender.",
      "Friends are recognised right away on the leaderboard, and clan member levels are finally up to date.",
      "Redesigned language picker, with flags."
    ],
    tags: ["Duels", "Clans", "Polish"]
  },
  {
    ver: "2.0.22",
    date: "17 Aug 2026",
    title: "Leaderboard rows, finally readable",
    items: [
      "On the leaderboard the clan now has a line of its own under the name, so long clan names read in full even in the top spots.",
      "Leaderboard cards are taller and all the same height, clan or no clan."
    ],
    tags: ["Leaderboard", "Polish"]
  },
  {
    ver: "2.0.21",
    date: "17 Aug 2026",
    title: "Duels go fully online",
    items: [
      "Duels between nearby phones (local WiFi and Bluetooth) have been removed. Friend challenges, clan friendlies and random matchmaking all stay — online.",
      "The app no longer asks for Bluetooth and location permissions.",
      "Fixed the \"no connection\" notice that flashed at startup even with a working network.",
      "On the leaderboard the clan name is no longer cut off in the top spots."
    ],
    tags: ["Duels", "Permissions", "Fixes"]
  },
  {
    ver: "2.0.19",
    date: "17 Aug 2026",
    title: "Chat day separators & connection warning",
    items: [
      "Clan chat now separates the days — \"Today\", \"Yesterday\" or the date — so you can see at a glance when each message arrived.",
      "ScanBeast now warns you when there is no connection: the game is fully online and needs WiFi or mobile data to play."
    ],
    tags: ["Clans", "Chat"]
  },
  {
    ver: "2.0.18",
    date: "17 Aug 2026",
    title: "One profile card, unique names",
    items: [
      "New profile card with level, rank, XP, captures and wins — it opens from the leaderboard, from friends and from the clan.",
      "A language flag sits next to the name, with the clan right below it.",
      "Names are now unique: you can no longer take someone else's.",
      "Change your name and everyone sees it, clan chat included.",
      "In the clan, players who are already your friends show \"Message\" instead of \"Add\"."
    ],
    tags: ["Profile", "Social"]
  },
  {
    ver: "2.0.17",
    date: "16 Aug 2026",
    title: "Mentions that actually reach you",
    items: [
      "Mentions with @ in clan chat now notify you even when the app is closed.",
      "The clan friendly result always lands in the chat, instead of showing up now and then.",
      "Opening the clan no longer flashes \"no messages\" over a chat full of them.",
      "Direct messages open on the latest message, and it stays in view when the keyboard opens.",
      "Fixed the turn animation in battle."
    ],
    tags: ["Notifications", "Chat", "Fixes"]
  },
  {
    ver: "2.0.16",
    date: "16 Aug 2026",
    title: "Clan chat unblocked",
    items: [
      "Clan chat fixed: messages send again, both with the send button and the keyboard Enter key.",
      "Mentions with @ now work — tap the member in the list and the name goes into the message.",
      "On Samsung phones the send button lights up as you type, not only after a space.",
      "In direct messages a quoted reply no longer spills out of the bubble.",
      "The clan friendly result no longer goes missing from the chat."
    ],
    tags: ["Chat", "Fixes"]
  },
  {
    ver: "2.0.15",
    date: "16 Aug 2026",
    title: "Friendly duels, for real this time",
    items: [
      "Clan friendly duels now work: the challenger drops into the battle as soon as someone accepts, and one tap goes back to the clan at the end.",
      "Decline a challenge and the sender is no longer stuck waiting.",
      "The result is a card with both fighters and the winner.",
      "Reply to a message: swipe the bubble or hold it, in clan chat and in direct messages.",
      "Mentions with @, a player menu in the clan info, and fixed sending on tablets."
    ],
    tags: ["Clans", "Duels", "Chat"]
  },
  {
    ver: "2.0.13",
    date: "16 Aug 2026",
    title: "Reply, mention, tap a member",
    items: [
      "Clan friendly duels: whoever posts the challenge drops into the battle as soon as someone accepts, and the result lands in the clan chat.",
      "Reply to a message — swipe the bubble sideways or hold it, in clan chat and direct messages.",
      "Mentions with @: pick a clan member and only they get notified.",
      "Tap a member in the clan info for their profile, a friend request or a direct message.",
      "Fixed sending on tablets and widened the language filter."
    ],
    tags: ["Chat", "Clans"]
  },
  {
    ver: "2.0.12",
    date: "16 Aug 2026",
    title: "Three captures a day & shop reveal",
    items: [
      "The same food now counts up to three times a day, so re-scanning your favourite product keeps feeding its evolution.",
      "Every shop purchase asks for a confirmation and ends in a reveal popup showing what you got — with a \"don't ask again\" option.",
      "The keyboard opens on the first tap in every chat and input field, not the second.",
      "Clan chat opens on the latest message, and the clan badge no longer lights up with no pending requests.",
      "Wider profanity filter across all 6 languages."
    ],
    tags: ["Capture", "Shop", "Fixes"]
  },
  {
    ver: "2.0.11",
    date: "16 Aug 2026",
    title: "Real Nutri-Score grades & working DMs",
    items: [
      "Beasts from products with no official Nutri-Score no longer end up as the worst grade: they now get a fair, consistent one, and older cards are corrected on sight.",
      "The first message from a new contact shows up in your Messages list instead of an empty screen.",
      "Incoming direct messages raise an in-app alert while you're playing.",
      "Push notifications no longer go silently dead after a while.",
      "Water and other near-zero-calorie products no longer produce absurd HP."
    ],
    tags: ["Health", "Messages", "Fixes"]
  },
  {
    ver: "2.0.10",
    date: "03 Aug 2026",
    title: "Mystery beasts in your language",
    items: [
      "Mystery beast names are now translated in battle, in the lore and in trade notices — not only in the bestiary."
    ],
    tags: ["Languages"]
  },
  {
    ver: "Launch",
    date: "01 Aug 2026",
    title: "ScanBeast is out — now on Google Play!",
    items: [
      "ScanBeast has left beta: the game is now live for everyone on the Google Play Store — download it free.",
      "Scan real grocery barcodes, forge unique beasts from real nutrition, evolve them and duel friends live or online.",
      "Clans, card trading, Season Pass, global leaderboard and 6 languages — all in.",
      "Thank you to every beta tester who got us here. An iOS version is on the way."
    ],
    tags: ["Release", "Google Play"]
  },
  {
    ver: "2.0.9",
    date: "01 Aug 2026",
    title: "Display fit on notch phones",
    items: [
      "Fixed doubled-up padding that could push the interface off-centre on phones with a notch or punch-hole."
    ],
    tags: ["Display", "Fixes"]
  },
  {
    ver: "2.0.8",
    date: "01 Aug 2026",
    title: "16 MB lighter",
    items: [
      "Music now plays through Android's own media engine: the app is around 16 MB smaller and quicker to install."
    ],
    tags: ["Performance", "Size"]
  },
  {
    ver: "2.0.7",
    date: "01 Aug 2026",
    title: "Ready for the newest Android devices",
    items: [
      "Rebuilt for the 16 KB memory page size the latest Android phones require, so ScanBeast stays installable and stable on them."
    ],
    tags: ["Compatibility"]
  },
  {
    ver: "2.0.6",
    date: "01 Aug 2026",
    title: "Cleaner chats",
    items: [
      "Bad language is masked in clan chat and direct messages, in all 6 languages, on both sides of the conversation."
    ],
    tags: ["Moderation", "Chat"]
  },
  {
    ver: "2.0.5",
    date: "30 Jul 2026",
    title: "Smoother clan trades",
    items: [
      "Accepting a clan trade now opens straight into the trade room with the offered card already on the table."
    ],
    tags: ["Clans", "Trading"]
  },
  {
    ver: "2.0.4",
    date: "30 Jul 2026",
    title: "Offer cards restyled",
    items: [
      "Clan trade and duel offers are now proper cards in the chat: clear title, icon badge and a single button to jump in.",
      "Friendly duel offers are labelled \"friendly · no ranking\", so nobody joins one by mistake."
    ],
    tags: ["Clans", "UI"]
  },
  {
    ver: "2.0.3",
    date: "29 Jul 2026",
    title: "Friendly duels fixed",
    items: [
      "Clan friendly duels start correctly again — they had been broken since the feature shipped.",
      "Post a trade offer and your card goes on the table automatically: only the other side has to pick.",
      "Trade and duel offers moved into the chat flow, newest last, instead of a fixed strip pinned at the top."
    ],
    tags: ["Clans", "Duels", "Fixes"]
  },
  {
    ver: "2.0.2",
    date: "29 Jul 2026",
    title: "Post-launch fixes",
    items: [
      "The What's New carousel shows in your language instead of falling back to Italian.",
      "The \"found your first clan\" hint no longer flashes at players who already have one.",
      "Post a trade or duel offer in clan chat and you now see your own banner, with a Cancel button."
    ],
    tags: ["Fixes", "Clans"]
  },
  {
    ver: "2.0.1",
    date: "29 Jul 2026",
    title: "Trade cards & friendly clan duels",
    items: [
      "Trade cards directly with your clan members: offer a trade in the clan chat and seal the deal.",
      "Challenge your clanmates to friendly duels, with no impact on the ranking — just train and have fun together.",
      "Clan chat now announces when a member leaves or is kicked from the clan.",
      "More clan improvements and stability fixes."
    ],
    tags: ["Clans", "Trading"]
  },
  {
    ver: "1.9.8",
    date: "28 Jul 2026",
    title: "Invite friends & clan chat tools",
    items: [
      "Invite your friends: share your link, and when a friend installs and plays, you both earn coins.",
      "Clan chat now announces when someone joins, and leaders choose who can post: everyone, leader and officers, or leader only.",
      "Report or delete messages to keep clan and friend chats clean.",
      "Bigger coin rewards from watching ads.",
      "More clan improvements and fixes."
    ],
    tags: ["Referral", "Clans"]
  },
  {
    ver: "1.9.3",
    date: "26 Jul 2026",
    title: "Clan social upgrade",
    items: [
      "Get notified the moment someone asks to join your clan — even with the app closed — and the request goes straight to the leader.",
      "Browse every clan and the leaderboard from inside your own clan, and edit your clan's name, flag and who can join.",
      "If the leader goes quiet for too long, leadership passes automatically to the most active member — no clan left stuck.",
      "Removed from a clan? You'll know right away, with a heads-up notification."
    ],
    tags: ["Clans", "Notifications"]
  },
  {
    ver: "1.9.0",
    date: "26 Jul 2026",
    title: "Clans have arrived",
    items: [
      "Found or join a clan, team up and climb the clan leaderboard by earning XP together.",
      "Every clan gets its own group chat to plan, brag and rally the troops.",
      "Your very first clan is free — go raise your banner.",
      "Choose a name, tag, flag and who can join: open, on request, or invite-only."
    ],
    tags: ["Clans", "Social"]
  },
  {
    ver: "1.8.5",
    date: "25 Jul 2026",
    title: "Ready for the newest Android",
    items: [
      "Updated for the latest Android versions, so ScanBeast stays smooth and stable on every phone.",
      "Small under-the-hood fixes and improvements."
    ],
    tags: ["Compatibility"]
  },
  {
    ver: "1.8.4",
    date: "18 Jul 2026",
    title: "Friend request & language fixes",
    items: [
      "Fixed friend requests that could get stuck and refuse to be accepted — they now clear correctly.",
      "Corrected a few menu labels that could show up in the wrong language."
    ],
    tags: ["Friends", "Fixes"]
  },
  {
    ver: "1.8.2",
    date: "17 Jul 2026",
    title: "Mystery beasts, properly named",
    items: [
      "Beasts from unknown products now always get a proper name, shown in your language — no more blank cards.",
      "Steadier scanning: a brief warm-up when the scanner opens avoids the occasional misread."
    ],
    tags: ["Scanning", "Polish"]
  },
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
