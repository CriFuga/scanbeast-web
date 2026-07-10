/* Renderizza le news di news-data.js dentro #news-list. Nessuna dipendenza esterna. */
(function () {
  "use strict";

  var mount = document.getElementById("news-list");
  if (!mount) return;

  var posts = window.SCANBEAST_NEWS;
  if (!Array.isArray(posts) || posts.length === 0) {
    mount.innerHTML = '<p class="news-empty">No updates yet — check back soon.</p>';
    return;
  }

  // Escape difensivo: i dati sono nostri, ma evita sorprese se un domani arrivano da altrove.
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var html = posts.map(function (p) {
    var items = (p.items || []).map(function (it) {
      return "<li>" + esc(it) + "</li>";
    }).join("");

    var tags = (p.tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("");

    return (
      '<article class="post reveal">' +
        '<div class="meta">' +
          '<span class="ver">v' + esc(p.ver) + "</span>" +
          '<span class="date">' + esc(p.date) + "</span>" +
        "</div>" +
        "<h3>" + esc(p.title) + "</h3>" +
        (items ? "<ul>" + items + "</ul>" : "") +
        (tags ? '<div class="tags">' + tags + "</div>" : "") +
      "</article>"
    );
  }).join("");

  mount.innerHTML = html;
})();
