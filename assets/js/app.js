/*
 * ScanBeast — interattivita' del sito statico.
 * Nessuna dipendenza esterna, nessun build. Ogni blocco e' difensivo:
 * parte solo se gli elementi che gli servono esistono nella pagina,
 * cosi' lo stesso file va bene sia su index.html sia su news.html.
 */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal, .reveal-group");
    if (!els.length) return;

    // Motion ridotto o browser vecchio: mostra tutto subito, niente animazione.
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    els.forEach(function (el) { io.observe(el); });

    // Sicurezza: se qualcosa resta nascosto dopo il load, rivela cio' che e' in vista.
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.querySelectorAll(".reveal:not(.in), .reveal-group:not(.in)").forEach(function (el) {
          if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
        });
      }, 400);
    });
  }

  /* ---------- Nav mobile (hamburger) ---------- */
  function initNav() {
    var btn = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;

    function setOpen(open) {
      btn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    // Chiudi al click su un link o con Esc.
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Braci animate nell'hero ---------- */
  function initEmbers(canvas) {
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var COUNT = 42;
    var w = 0, h = 0, dpr = 1, parts = [], raf = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn() {
      return {
        x: Math.random() * w,
        y: h + Math.random() * h,
        r: 1 + Math.random() * 2.4,
        vy: 0.3 + Math.random() * 0.9,
        drift: (Math.random() - 0.5) * 0.4,
        a: 0.2 + Math.random() * 0.6,
        hue: 18 + Math.random() * 24            // arancio/oro
      };
    }

    function reset() {
      resize();
      parts = [];
      for (var i = 0; i < COUNT; i++) parts.push(spawn());
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.y -= p.vy;
        p.x += p.drift;
        if (p.y < -10) { parts[i] = spawn(); parts[i].y = h + 10; continue; }
        ctx.beginPath();
        var col = "hsla(" + p.hue + ", 100%, 60%, " + p.a + ")";
        ctx.fillStyle = col;
        ctx.shadowColor = col;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(frame);
    }

    reset();
    if (prefersReduced) return;   // resta statico e trasparente

    window.addEventListener("resize", reset, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { window.cancelAnimationFrame(raf); }
      else { frame(); }
    });
    frame();
  }

  /* ---------- Demo interattiva: barcode -> beast ---------- */
  function initScan() {
    var form  = document.getElementById("scan-form");
    var input = document.getElementById("scan-code");
    var rnd   = document.getElementById("scan-random");
    var card  = document.getElementById("beast-card");
    var hint  = document.getElementById("scan-hint");
    if (!form || !card) return;

    var ELEMENTS = {
      fire:  { name: "Fire",  color: "var(--fire)",  svg: '<path d="M12 3c1.2 3 4 4 4 8a4 4 0 0 1-8 0c0-2 1-3.2 2-4.2 0 2 2 2 2 4"/>' },
      water: { name: "Water", color: "var(--water)", svg: '<path d="M12 3c3 4 6 7 6 10a6 6 0 0 1-12 0c0-3 3-6 6-10z"/>' },
      earth: { name: "Earth", color: "var(--earth)", svg: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>' },
      air:   { name: "Air",   color: "var(--air)",   svg: '<path d="M4 9h11a3 3 0 1 0-3-3M4 14h15a3 3 0 1 1-3 3"/>' }
    };
    var keys = Object.keys(ELEMENTS);
    var PRE = ["Em", "Char", "Pyro", "Aqua", "Terra", "Gale", "Fer", "Vol", "Cryo", "Glim", "Umbra", "Bram", "Scor", "Vex", "Nix", "Zeph", "Ob", "Kra"];
    var SUF = ["fang", "maw", "scale", "horn", "wing", "tail", "claw", "bane", "thorn", "gale", "drift", "shard", "husk", "brand", "crest", "spire"];
    var NUTRI = [["A", "#1e8f3e"], ["B", "#5db500"], ["C", "#f2c200"], ["D", "#f28c00"], ["E", "#e8003a"]];
    // Rarita' pesata: estratta dallo stesso PRNG, quindi deterministica sul barcode.
    var RARITY = [
      { key: "common",    name: "Common",    color: "#9aa0aa", p: 0.55 },
      { key: "rare",      name: "Rare",      color: "#3aa0ff", p: 0.28 },
      { key: "epic",      name: "Epic",      color: "#b45cff", p: 0.13 },
      { key: "legendary", name: "Legendary", color: "#ffcc00", p: 0.04 }
    ];
    function rollRarity(r) {
      var x = r(), acc = 0;
      for (var i = 0; i < RARITY.length; i++) { acc += RARITY[i].p; if (x < acc) return RARITY[i]; }
      return RARITY[0];
    }

    // Hash deterministico (FNV-1a 32-bit): stesso barcode -> stessa beast.
    function hash(s) {
      var h = 0x811c9dc5;
      for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
      return h >>> 0;
    }
    // PRNG seedabile (mulberry32) per estrarre piu' valori dallo stesso hash.
    function mulberry32(a) {
      return function () {
        a = a + 0x6D2B79F5 | 0;
        var t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }
    function randInt(r, min, max) { return min + Math.floor(r() * (max - min + 1)); }
    function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
    function esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }
    function randomBarcode() {
      var s = "" + (1 + Math.floor(Math.random() * 9));
      for (var i = 0; i < 12; i++) s += Math.floor(Math.random() * 10);
      return s;
    }

    function generate(code) {
      var r = mulberry32(hash(code));
      var el = ELEMENTS[keys[Math.floor(r() * keys.length)]];
      return {
        el: el,
        name: pick(r, PRE) + pick(r, SUF),
        stats: { HP: randInt(r, 60, 150), ATK: randInt(r, 30, 99), DEF: randInt(r, 30, 99), SPD: randInt(r, 30, 99) },
        nutri: NUTRI[Math.floor(r() * NUTRI.length)],
        rarity: rollRarity(r),
        code: code
      };
    }

    function statRow(lbl, val, max) {
      var pct = Math.round(val / max * 100);
      return '<div class="stat"><span class="lbl">' + lbl + '</span>' +
             '<span class="bar"><span data-w="' + pct + '"></span></span>' +
             '<span class="val">' + val + "</span></div>";
    }

    function render(b) {
      card.style.setProperty("--el", b.el.color);
      card.style.setProperty("--rar", b.rarity.color);
      card.setAttribute("data-rarity", b.rarity.key);
      card.innerHTML =
        '<div class="beast-head">' +
          '<div class="beast-avatar"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">' + b.el.svg + "</svg></div>" +
          "<div>" +
            '<h3 class="beast-name">' + esc(b.name) + "</h3>" +
            '<div class="beast-sub"><span class="beast-el">' + b.el.name + "</span>" +
              '<span class="beast-rarity">' + b.rarity.name + "</span>" +
              '<span class="beast-code">#' + esc(b.code) + "</span></div>" +
          "</div>" +
        "</div>" +
        '<div class="beast-stats">' +
          statRow("HP", b.stats.HP, 150) +
          statRow("ATK", b.stats.ATK, 100) +
          statRow("DEF", b.stats.DEF, 100) +
          statRow("SPD", b.stats.SPD, 100) +
        "</div>" +
        '<div class="beast-foot"><span>Nutri-Score</span>' +
          '<span class="nutri" style="background:' + b.nutri[1] + '">' + b.nutri[0] + "</span>" +
          "<span>· forged from a real product</span></div>";

      card.hidden = false;
      // Ri-triggera l'animazione di entrata.
      card.classList.remove("show");
      void card.offsetWidth;
      card.classList.add("show");
      // Barre: larghezza a 0 nel markup, animata al frame successivo.
      window.requestAnimationFrame(function () {
        card.querySelectorAll(".bar > span").forEach(function (s) { s.style.width = s.dataset.w + "%"; });
      });
      if (hint) hint.textContent = "Same barcode always forges the same beast — compare a friend's pantry.";
    }

    var scanning = false;
    // Fase "scansione": scanline per ~700ms, poi la card entra col flip.
    function playScan(done) {
      if (prefersReduced) { done(); return; }
      scanning = true;
      card.hidden = false;
      card.removeAttribute("data-rarity");
      card.classList.remove("show");
      card.classList.add("scanning");
      card.innerHTML = '<div class="scanline"></div><p class="scan-progress">Scanning…</p>';
      window.setTimeout(function () { card.classList.remove("scanning"); scanning = false; done(); }, 700);
    }
    function run(raw) {
      if (scanning) return;   // ignora click ripetuti durante la scansione
      var code = (raw || "").replace(/\D/g, "").slice(0, 13);
      if (!code) code = randomBarcode();
      if (input) input.value = code;
      var beast = generate(code);
      playScan(function () { render(beast); });
    }

    form.addEventListener("submit", function (e) { e.preventDefault(); run(input && input.value); });
    if (rnd) rnd.addEventListener("click", function () { run(randomBarcode()); });
    if (input) input.addEventListener("input", function () {
      input.value = input.value.replace(/\D/g, "").slice(0, 13);
    });
  }

  /* ---------- Phone hero: crossfade tra gli screenshot ---------- */
  function initPhone() {
    var phone = document.getElementById("phone");
    if (!phone) return;
    var first = phone.querySelector(".phone-shot");
    if (!first) return;
    var shots = ["shot-1", "shot-2", "shot-5", "shot-4", "shot-6", "shot-3"];
    var layers = [first];
    for (var i = 1; i < shots.length; i++) {
      var img = document.createElement("img");
      img.className = "phone-shot";
      img.src = "assets/img/" + shots[i] + ".webp";
      img.alt = ""; img.loading = "lazy"; img.width = 720; img.height = 1600;
      phone.appendChild(img);
      layers.push(img);
    }
    if (prefersReduced) return;   // resta sul primo shot
    var idx = 0;
    window.setInterval(function () {
      layers[idx].classList.remove("active");
      idx = (idx + 1) % layers.length;
      layers[idx].classList.add("active");
    }, 3200);
  }

  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var box = document.getElementById("lightbox");
    var imgs = Array.prototype.slice.call(document.querySelectorAll(".gallery img"));
    if (!box || !imgs.length) return;
    var lbImg = box.querySelector(".lb-img");
    var idx = 0;

    function show(n) {
      idx = (n + imgs.length) % imgs.length;
      lbImg.src = imgs[idx].currentSrc || imgs[idx].src;
      lbImg.alt = imgs[idx].alt || "";
    }
    function open(n) { show(n); box.hidden = false; box.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
    function close() { box.hidden = true; box.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

    imgs.forEach(function (img, n) {
      img.style.cursor = "zoom-in";
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.addEventListener("click", function () { open(n); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(n); }
      });
    });
    box.querySelector(".lb-close").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
    box.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  function boot() {
    initReveal();
    initNav();
    var canvas = document.querySelector(".embers");
    if (canvas) initEmbers(canvas);
    initScan();
    initPhone();
    initLightbox();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
