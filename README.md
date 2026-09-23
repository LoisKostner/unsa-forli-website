# UNSA Forlì — website (preview)

Website of the **United Nations Student Association** (UNSA), University of Bologna — Forlì Campus.

This is a **preview version** for internal review: some contents (departments, links, a few dates and news items) are placeholders to be confirmed by the association. Pages are marked `noindex` so they don't appear on search engines.

## How to update News & Events
Edit `data/news.js`: copy an existing block to the top of the list and change title, date, place and image (images go in `assets/img/flyers/` or `assets/img/photos/`). The Home page and the News & Events page update automatically; past events move to the archive by themselves.

## External links
Sign-up forms, WhatsApp group and donation links are set in one place, at the top of `js/main.js` (`LINKS`).

## Structure
- `index.html` — Home
- `about.html`, `structure.html` — About
- `what-we-do.html`, `mun-club.html`, `mun-conference.html`, `critical-lens.html` — What we do
- `events.html`, `event.html` — News & Events
- `get-involved.html`, `contact.html`, `404.html`
- `css/style.css`, `js/main.js`, `data/news.js`, `assets/`
- `CONTENUTI_UNSA.md`, `PIANO_SITO.md` — project notes (in Italian)
