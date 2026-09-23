/* ==========================================================================
   UNSA Forlì — shared layout, navigation, "next chapter" and News & Events
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- External links (replace "#" with the real ones) ---------- */
  var LINKS = {
    instagram: "https://www.instagram.com/unsaforli/",
    email: "unstudentsassociation@gmail.com",
    membershipForm: "#",
    candidacyForm: "#",
    munClubForm: "#",
    whatsapp: "#",
    donate: "#"
  };

  var page = document.body.getAttribute("data-page") || "";
  /* News detail pages opened from the Home page are stand-alone: they only lead back to the Home */
  var fromHome = page === "event" && new URLSearchParams(location.search).get("from") === "home";

  /* ---------- Navigation (flat, no dropdowns) ---------- */
  var NAV = [
    { id: "about", label: "Who we are", href: "about.html" },
    { id: "what-we-do", label: "What we do", href: "what-we-do.html", also: ["mun-club", "mun-conference", "critical-lens"] },
    { id: "structure", label: "Our structure", href: "structure.html" },
    { id: "events", label: "News", href: "events.html", also: ["event"] },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  /* ---------- The progressive path through the site (follows the menu order) ---------- */
  var NEXT = {
    "home":           { href: "about.html",          title: "Who we are",        text: "Our mission, our values and our story." },
    "about":          { href: "what-we-do.html",     title: "What we do",        text: "MUN Club, MUN Conference, talks, community and our magazine." },
    "what-we-do":     { href: "structure.html",      title: "Our structure",     text: "The Board and the six departments that run UNSA." },
    "structure":      { href: "events.html",         title: "News",              text: "What's on at UNSA, and what we have done so far." },
    "events":         { href: "contact.html",        title: "Contact",           text: "Questions, ideas or partnerships? Write to us." },
    "contact":        { href: "get-involved.html",   title: "Get involved",      text: "Become a member, volunteer or support us." },
    /* activity detail pages: one after the other, then back on the main path */
    "mun-club":       { href: "mun-conference.html", title: "The MUN Conference", text: "Put everything into practice." },
    "mun-conference": { href: "critical-lens.html",  title: "The Critical Lens",  text: "Our student magazine on international affairs." },
    "critical-lens":  { href: "structure.html",      title: "Our structure",      text: "The Board and the six departments that run UNSA." }
  };

  function a(item) {
    var active = !fromHome && (item.id === page || (item.also || []).indexOf(page) !== -1);
    return '<a href="' + item.href + '"' + (active ? ' class="is-active"' + (item.id === page ? ' aria-current="page"' : "") : "") + ">" + item.label + "</a>";
  }

  var header = document.getElementById("site-header");
  if (header) {
    var bar = document.createElement("div");
    bar.className = "utility-bar";
    bar.innerHTML = '<div class="container"><span class="ub-left">University of Bologna · Forlì Campus · Est. 2024</span>' +
      '<span class="ub-right"><a href="' + LINKS.instagram + '" target="_blank" rel="noopener">Instagram</a><a href="mailto:' + LINKS.email + '">Email</a><a href="get-involved.html#support">Support us</a></span></div>';
    header.parentNode.insertBefore(bar, header);

    header.className = "site-header";
    header.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="UNSA Forlì — Home">' +
          '<img src="assets/img/brand/unsa-emblem-navy.png" alt="" width="54" height="48">' +
          '<span class="brand__text"><strong>UNSA</strong><span>United Nations Student Association</span></span>' +
        "</a>" +
        '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>' +
        '<nav class="main-nav" id="main-nav" aria-label="Main"><ul>' +
          NAV.map(function (item) { return "<li>" + a(item) + "</li>"; }).join("") +
          '<li><a class="nav-cta" href="get-involved.html">Join UNSA</a></li>' +
        "</ul></nav>" +
      "</div>";

    var toggle = header.querySelector(".nav-toggle");
    var menu = header.querySelector(".main-nav");
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    window.addEventListener("scroll", function () { header.classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });
  }

  /* ---------- Next chapter ---------- */
  var nextSlot = document.getElementById("next-chapter");
  if (nextSlot && NEXT[page]) {
    var n = NEXT[page];
    nextSlot.outerHTML = '<a class="next" href="' + n.href + '"><div class="container"><div><span class="label">Continue</span><strong>' + n.title +
      "</strong><p>" + n.text + '</p></div><span class="arrow" aria-hidden="true">→</span></div></a>';
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="meridians" aria-hidden="true"></div>' +
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-brand"><img src="assets/img/brand/unsa-emblem-white.png" alt="UNSA emblem">' +
            "<p>United Nations Student Association<br>University of Bologna — Forlì Campus</p></div>" +
          "<div><h4>UNSA</h4><ul>" +
            '<li><a href="about.html">Who we are</a></li><li><a href="structure.html">Our structure</a></li>' +
            '<li><a href="events.html">News</a></li><li><a href="contact.html">Contact</a></li></ul></div>' +
          "<div><h4>What we do</h4><ul>" +
            '<li><a href="mun-club.html">MUN Club</a></li><li><a href="mun-conference.html">MUN Conference</a></li>' +
            '<li><a href="what-we-do.html#talks">Talks &amp; Seminars</a></li><li><a href="what-we-do.html#community">Community</a></li><li><a href="critical-lens.html">The Critical Lens</a></li></ul></div>' +
          "<div><h4>Get involved</h4><ul>" +
            '<li><a href="get-involved.html">Become a member</a></li><li><a href="structure.html">Volunteer</a></li>' +
            '<li><a href="get-involved.html#support">Support us</a></li>' +
            '<li><a href="' + LINKS.instagram + '" target="_blank" rel="noopener">Instagram @unsaforli</a></li></ul></div>' +
        "</div>" +
        '<div class="footer-partners"><span class="label">With the support of</span>' +
          '<span class="p">Alma Mater Studiorum – Università di Bologna</span>' +
          '<span class="p"><img src="assets/img/brand/partner-orizzonti-politici.jpg" alt="">Orizzonti Politici</span></div>' +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " UNSA Forlì · United Nations Student Association · A.D. 2024</span>" +
          '<a href="mailto:' + LINKS.email + '">' + LINKS.email + "</a></div>" +
      "</div>";
  }

  /* ---------- Link placeholders ---------- */
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    if (LINKS[key]) el.setAttribute("href", key === "email" ? "mailto:" + LINKS.email : LINKS[key]);
  });

  /* ==========================================================================
     NEWS & EVENTS  (data in data/news.js)
     ========================================================================== */
  var NEWS = (window.UNSA_NEWS || []).slice();
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var CAT = { MUN: "MUN Conference", Panel: "Panel discussion", Seminar: "Seminar", Social: "Community", Club: "MUN Club", Publication: "Publication", Association: "Communiqué" };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function parse(d) { var p = d.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function today() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  function fmt(d) { var x = parse(d); return x.getDate() + " " + MONTHS[x.getMonth()] + " " + x.getFullYear(); }
  function fmtRange(i) {
    if (!i.endDate) return fmt(i.date);
    var s = parse(i.date), e = parse(i.endDate);
    return s.getMonth() === e.getMonth() ? s.getDate() + "–" + e.getDate() + " " + MONTHS[e.getMonth()] + " " + e.getFullYear()
      : s.getDate() + " " + MONTHS[s.getMonth()] + " – " + fmt(i.endDate);
  }
  function upcoming(i) { return i.type === "event" && parse(i.endDate || i.date) >= today(); }
  function url(i, fromHomePage) { return "event.html?id=" + encodeURIComponent(i.id) + (fromHomePage ? "&from=home" : ""); }
  function asc(a, b) { return parse(a.date) - parse(b.date); }
  function desc(a, b) { return parse(b.date) - parse(a.date); }
  function facts(i) {
    return '<div class="facts-inline"><span>' + esc(fmtRange(i)) + "</span>" + (i.time ? "<span>" + esc(i.time) + "</span>" : "") +
      (i.location ? "<span>" + esc(i.location) + "</span>" : "") + "</div>";
  }

  function agendaItem(i) {
    var d = parse(i.date);
    return '<a class="agenda-item" href="' + url(i, true) + '">' +
      '<div class="a-date"><span class="d">' + d.getDate() + '</span><span class="m">' + MONTHS[d.getMonth()] + '</span><span class="y">' + d.getFullYear() + "</span></div>" +
      '<div><span class="cat up">' + esc(CAT[i.category] || i.category) + "</span><h4>" + esc(i.title) + "</h4>" + facts(i) + "</div>" +
      '<div class="duo"><img src="' + esc(i.image) + '" alt="" loading="lazy"></div></a>';
  }
  function communique(i) {
    return '<a class="communique" href="' + url(i, true) + '"><time datetime="' + i.date + '">' + esc(fmt(i.date)) + "</time>" +
      (i.pinned ? '<span class="pin">◆</span>' : "") + "<h4>" + esc(i.title) + "</h4><p>" + esc(i.summary) + "</p></a>";
  }
  function card(i) {
    var up = upcoming(i);
    return '<a class="card" href="' + url(i) + '"><div class="card__poster' + (/\/photos\//.test(i.image) ? " photo" : "") + '"><img src="' + esc(i.image) + '" alt="" loading="lazy"></div>' +
      '<span class="cat' + (up ? " up" : "") + '">' + (up ? "Upcoming · " : "") + esc(CAT[i.category] || i.category) + "</span>" +
      "<h4>" + esc(i.title) + "</h4>" + facts(i) + "<p>" + esc(i.summary) + "</p></a>";
  }

  /* Home */
  var homeAgenda = document.getElementById("home-agenda");
  if (homeAgenda) {
    var up = NEWS.filter(upcoming).sort(asc).slice(0, 3);
    homeAgenda.innerHTML = up.length ? up.map(agendaItem).join("")
      : '<div class="empty">New events coming soon — follow <a href="' + LINKS.instagram + '" target="_blank" rel="noopener">@unsaforli</a>.</div>';
  }
  var homeNews = document.getElementById("home-news");
  if (homeNews) {
    homeNews.innerHTML = NEWS.filter(function (i) { return i.type !== "event"; })
      .sort(function (x, y) { return (y.pinned ? 1 : 0) - (x.pinned ? 1 : 0) || desc(x, y); })
      .slice(0, 3).map(communique).join("");
  }

  /* Events page */
  var upEl = document.getElementById("events-upcoming"), pastEl = document.getElementById("events-past");
  if (upEl && pastEl) {
    var groups = { all: null, mun: ["MUN", "Club"], talks: ["Panel", "Seminar"], community: ["Social"], news: ["Association", "Publication"] };
    var current = (location.hash || "").replace("#", "");
    if (!(current in groups)) current = "all";
    var render = function () {
      var ok = function (i) { return !groups[current] || groups[current].indexOf(i.category) !== -1; };
      var u = NEWS.filter(function (i) { return upcoming(i) && ok(i); }).sort(asc);
      var p = NEWS.filter(function (i) { return !upcoming(i) && ok(i); }).sort(desc);
      upEl.innerHTML = u.length ? u.map(card).join("") : '<div class="empty" style="grid-column:1/-1">Nothing scheduled in this category yet — stay tuned.</div>';
      pastEl.innerHTML = p.length ? p.map(card).join("") : '<div class="empty" style="grid-column:1/-1">Nothing here yet.</div>';
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        var on = b.getAttribute("data-filter") === current;
        b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on);
      });
    };
    document.querySelectorAll(".filter-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        current = b.getAttribute("data-filter");
        history.replaceState(null, "", current === "all" ? location.pathname : "#" + current);
        render();
      });
    });
    render();
  }

  /* Event detail */
  var detail = document.getElementById("event-detail");
  if (detail) {
    var id = new URLSearchParams(location.search).get("id");
    var it = NEWS.filter(function (i) { return i.id === id; })[0];
    if (!it) {
      detail.innerHTML = '<div class="empty">This item could not be found. <a href="' + (fromHome ? "index.html" : "events.html") + '">Go back</a>.</div>';
    } else {
      document.title = it.title + " — UNSA Forlì";
      var t = document.getElementById("event-title"); if (t) t.textContent = it.title;
      var c = document.getElementById("event-crumb"); if (c) c.textContent = CAT[it.category] || it.category;
      var crumbs = document.getElementById("event-crumbs");
      if (crumbs && fromHome) crumbs.innerHTML = '<a href="index.html">Home</a><span>' + esc(CAT[it.category] || it.category) + "</span>";
      var back = fromHome ? '<a class="back" href="index.html#news">Back to Home</a>' : '<a class="back" href="events.html">Back to News</a>';
      var isUp = upcoming(it);
      detail.innerHTML = '<div class="event-detail">' +
        '<div class="event-detail__poster"><img src="' + esc(it.image) + '" alt="' + esc(it.title) + '"></div>' +
        "<div>" +
          '<span class="label">' + (isUp ? "Upcoming" : it.type === "event" ? "Past event" : "Communiqué") + " · " + esc(CAT[it.category] || it.category) + "</span>" +
          '<p class="lead mt-1">' + esc(it.summary) + "</p>" +
          '<div class="factbox"><div class="factbox__head"><span class="label">Key facts</span></div><dl>' +
            "<div><dt>Date</dt><dd>" + esc(fmtRange(it)) + "</dd></div>" +
            (it.time ? "<div><dt>Time</dt><dd>" + esc(it.time) + "</dd></div>" : "") +
            (it.location ? "<div><dt>Where</dt><dd>" + esc(it.location) + "</dd></div>" : "") +
          "</dl></div>" +
          (it.body || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
          (it.speakers ? '<h3 class="mt-2">Speakers</h3><div class="speakers">' + it.speakers.map(function (s) {
            return '<div class="speaker"><img src="' + esc(s.photo) + '" alt="' + esc(s.name) + '" loading="lazy"><div><strong>' + esc(s.name) + "</strong><span>" + esc(s.role) + "</span></div></div>";
          }).join("") + "</div>" : "") +
          '<p class="mt-3">' + back + "</p>" +
        "</div></div>";
    }
  }

  /* ---------- Reveal on scroll (after dynamic content) ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
