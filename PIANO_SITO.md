# UNSA Forlì — Piano del sito web

> **Aggiornamento v2 (redesign):** la struttura attuale è progressiva e sostituisce la mappa della sezione 2.
> Menu piatto, senza tendine: **Who we are** · **What we do** · **Our structure** · **News** · **Contact** · pulsante **Get involved**.
> Percorso "Continue": Home → Who we are → What we do → Our structure → News → Contact → Get involved. La pagina What we do elenca le 5 attività (MUN Club, MUN Conference, Talks & Seminars, Community, The Critical Lens). Le pagine di approfondimento MUN Club → MUN Conference → The Critical Lens si concatenano tra loro e l'ultima rimanda a Our structure.
> Ogni pagina si chiude con un link "Continue" alla tappa successiva. Ogni informazione compare in una sola pagina; le altre pagine vi rimandano.
> Stile "istituzionale-diplomatico": blu profondo, oro e avorio; titoli in Cormorant Garamond e testi in Source Sans 3; sezioni numerate come articoli; missione in forma di risoluzione ONU; motivo a meridiani ispirato all'emblema ONU; foto in grigio-blu che tornano a colori al passaggio del mouse.

> Documento operativo per la costruzione del sito. Si basa su [CONTENUTI_UNSA.md](CONTENUTI_UNSA.md) (dati estratti dai materiali) e sulle immagini già organizzate in [assets/](assets/).
>
> **Legenda:** 🟡 **[DA CONFERMARE]** = dato scelto tra versioni ambigue o **inventato** perché mancante. Tutti questi punti sono elencati nella sezione 9, da sottoporre all'associazione.
>
> **Lingua del sito:** inglese (tutti i materiali UNSA sono in inglese e il pubblico è internazionale). I testi da pubblicare sono quindi scritti in inglese; le note di lavoro sono in italiano.

---

## 1. Decisioni prese sui dati ambigui o mancanti

| Tema | Scelta | Motivo |
|---|---|---|
| Orario MUN Club | **Every Thursday, 15:00–17:00, Room Dewey 999, Ruffilli Library** | È l'ultimo aggiornamento presente nelle storie ("New time!") |
| MUN Conference 2026 | **29 maggio 2026**, topic *Weaponizing Economic **Interdependence***, UNGA First Committee | Ultima delle 5 versioni del flyer |
| Forlì Walking Tour | **Sabato 27 settembre 2025, 15:30**, Piazza Saffi | Coerente con il calendario della Welcome Week |
| Maggioranze nelle Rules of Procedure | **2/3** (quorum, maggioranza qualificata, approvazione risoluzioni) | Standard MUN; nel PDF la frazione non è leggibile 🟡 |
| Women in Diplomacy Seminar | **13 marzo 2026** 🟡 | Anno mancante |
| Panel EU Trade Policy (con Orizzonti Politici) | **23 aprile 2026** 🟡 | Anno mancante |
| International Potluck | **16 maggio 2025** 🟡 | Anno mancante |
| Panel "The United Nations at 80" | **24 ottobre 2025** (UN Day, 80° anniversario ONU), 17:00–19:00, Aula 3, Teaching Hub 🟡 | Data e luogo mancanti |
| Panel "The Contested Middle East" | **20 novembre 2025**, 17:00–19:00, Aula 3, Teaching Hub 🟡 | Data e luogo mancanti |
| Struttura per dipartimenti | **Proposta ex novo** (sezione 5.3) 🟡 | **Non presente in nessun file**: nei materiali si parla solo genericamente di "committees" e di un "Editorial Committee" |
| Quota associativa | **€10 per anno accademico** 🟡 | Inventata; i materiali indicano solo gli sconti per i soci |
| Link (form, WhatsApp, donazioni) | Pulsanti con link segnaposto `#` | Nessun link reale nei file |

---

## 2. Mappa del sito

```
/                         Home (con blocco News & Events)
/about                    About Us — chi siamo, missione, valori, storia
/structure                Our Structure — Board + Departments   ← pagina chiave
/mun                      Model United Nations (hub)
   /mun/club              MUN Club (attività settimanale)
   /mun/conference        MUN Conference (edizione corrente + archivio + regolamento)
/events                   News & Events — elenco completo + archivio
   /events/<slug>         Scheda singola di una news o di un evento
/critical-lens            The Critical Lens — la rivista
/get-involved             Get Involved — diventa socio, volontario, sostienici
/contact                  Contact
/404                      Pagina non trovata
```

**Menu principale:** Home · About · Structure · MUN ▾ (MUN Club, MUN Conference) · Events · The Critical Lens · Contact · pulsante evidenziato **Join UNSA** (→ /get-involved)

**Footer (tutte le pagine):** emblema bianco (`assets/img/brand/unsa-emblem.png` in negativo) · "United Nations Student Association — University of Bologna, Forlì Campus — A.D. 2024" · link rapidi · Instagram @unsaforli · unstudentsassociation@gmail.com · "Con il contributo dell'Alma Mater Studiorum – Università di Bologna" · © 2026 UNSA Forlì

---

## 3. Sistema News & Events (aggiornabile)

Serve un sistema che si possa aggiornare **senza modificare l'HTML delle pagine**.

**Soluzione proposta:** un unico file dati **`data/news.json`**. La Home e la pagina /events lo leggono e generano le schede automaticamente. Per aggiungere una news basta aggiungere una voce al file e caricare la locandina in `assets/img/flyers/`.

### Struttura di una voce
```json
{
  "id": "mun-conference-2026",
  "type": "event",               // "event" | "announcement" | "publication"
  "category": "MUN",             // MUN | Panel | Seminar | Social | Club | Publication
  "title": "MUN Conference 2026",
  "date": "2026-05-29",          // data dell'evento (o di pubblicazione per gli annunci)
  "time": "09:00–17:00",
  "location": "Aula 2, Teaching Hub, Forlì Campus",
  "summary": "UNGA First Committee — Weaponizing Economic Interdependence...",
  "body": "Testo esteso opzionale (paragrafi)",
  "image": "assets/img/flyers/mun-conference-2026.jpg",
  "cta": { "label": "Register", "url": "#" },
  "pinned": false
}
```

### Logica di visualizzazione
- **Home → "Upcoming Events"**: eventi con data ≥ oggi, ordinati dal più vicino; massimo 3.
- **Home → "Latest News"**: annunci e pubblicazioni più recenti; massimo 3. Le voci con `pinned: true` compaiono sempre per prime.
- Se non ci sono eventi futuri, compare il messaggio *"New events coming soon — follow @unsaforli"*.
- **/events**: tutte le voci, con filtri per categoria (All · MUN · Panels & Seminars · Social · Club · Publications) e divise in "Upcoming" e "Past events" (archivio).
- **/events/<slug>**: scheda singola con locandina, data, luogo, testo e pulsante di iscrizione.

### Contenuto iniziale di `news.json` (oggi è il 23/09/2026)

| Tipo | Titolo | Data | Immagine | Note |
|---|---|---|---|---|
| announcement 📌 | **Welcome back! UNSA 2026-27 starts now** | 2026-09-15 | `photos/group-photo-unsa-flag.jpg` | 🟡 inventato — apertura del nuovo anno |
| event | **Welcome Week 2026** — Meet & Greet, Intro to MUN Club, Welcome Aperitivo, Forlì Walking Tour | 2026-09-28 → 10-03 | `flyers/welcome-week-events.jpg` (in attesa di quella nuova) | 🟡 inventato, ricalcato sul programma 2025 |
| announcement | **We're recruiting! Join one of our departments** — candidature aperte fino al 15 ottobre | 2026-09-20 | `photos/mun-delegates-lobby.jpg` | 🟡 inventato |
| event | **MUN Club is back** — primo incontro giovedì 8 ottobre, 15:00, Room Dewey 999 | 2026-10-08 | `flyers/mun-club-weekly.jpg` | 🟡 data inventata |
| announcement | **Call for papers — The Critical Lens Vol. 2** (scadenza 30 novembre 2026) | 2026-09-22 | `flyers/critical-lens-vol1-cover.jpg` | 🟡 inventato |
| publication | **The Critical Lens — Volume 1 is out!** | 2026-07-01 | `flyers/critical-lens-vol1-cover.jpg` | reale |
| event | MUN Conference 2026 — UNGA First Committee | 2026-05-29 | `flyers/mun-conference-2026.jpg` | reale → archivio |
| event | Panel: EU Trade Policy as a Geopolitical Tool (con Orizzonti Politici) | 2026-04-23 🟡 | `flyers/panel-eu-trade-policy.jpg` | reale |
| event | Women in Diplomacy Seminar | 2026-03-13 🟡 | `flyers/women-in-diplomacy.jpg` | reale |
| event | MUN Conference — UNGA, AI in Military Applications | 2025-12-06 | `flyers/mun-conference-dec-2025.jpg` | reale |
| event | Panel: The Contested Middle East | 2025-11-20 🟡 | `flyers/panel-contested-middle-east.jpg` | reale |
| event | Panel: The United Nations at 80 | 2025-10-24 🟡 | `flyers/panel-un-at-80.jpg` | reale |
| event | Welcome Week 2025 | 2025-09-22 | `flyers/welcome-week-events.jpg` | reale |
| event | MUN Conference — UNHRC + Gala Night | 2025-05-31 | `flyers/mun-conference-may-2025.jpg` | reale |
| event | International Potluck | 2025-05-16 🟡 | `flyers/international-potluck.jpg` | reale |

> Opzione futura: se chi aggiorna il sito non vuole toccare il JSON, si può aggiungere un pannello di amministrazione gratuito (es. Decap CMS) che scrive nello stesso file. Il sito resta statico, quindi l'hosting è gratuito (GitHub Pages / Netlify).

---

## 4. Linee guida visive

| Elemento | Scelta |
|---|---|
| Colore primario | Navy `#0A0A4A` (dall'emblema, `#060644`) |
| Secondario | Royal/indaco `#1B1F8A` |
| Accento | Oro `#C9A240` (dettagli, linee, date, come nei flyer delle MUN Conference) |
| Accento chiaro | Azzurro `#8FB8F0` |
| Sfondi | Bianco e carta chiara `#F6F3EC` (richiama i post Instagram con effetto carta) |
| Titoli | Sans pesante maiuscolo, es. *Montserrat 800* (come "MUN CONFERENCE", "WELCOME WEEK") |
| Testi / sottotitoli | Serif classico, es. *EB Garamond* o *Cormorant Garamond* (come logo e testi dei post) |
| Motivo grafico | Rami d'alloro ONU in trasparenza sugli sfondi navy (presenti in quasi tutti i flyer) |
| Tono | Istituzionale e diplomatico, ma accogliente |
| Foto | Sempre reali di UNSA dove possibile. `stock-un-general-assembly.jpg` è una foto d'archivio: usarla solo come sfondo in trasparenza |

**Immagini disponibili** (in `assets/img/`):
- `brand/`: `unsa-emblem.png`, `unsa-logo-horizontal.png`, `partner-orizzonti-politici.jpg`
- `photos/`: 16 foto (sessioni MUN, gruppo, MUN Club, Forlì, illustrazione Critical Lens)
- `people/`: 9 ritratti dei relatori. ⚠️ Romano, Dian, Ragno, Molis e Biancani sono piccoli (130–208 px): usarli solo come avatar tondi
- `flyers/`: 11 locandine (una per evento)
- `docs/`: PDF delle Rules of Procedure e di The Critical Lens Vol. 1, da scaricare

---

## 5. Pagine nel dettaglio

### 5.1 HOME `/`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | **Hero** (a tutto schermo, foto con velatura navy) | Emblema piccolo + titolo **"United Nations Student Association"** · sottotitolo *"University of Bologna — Forlì Campus"* · claim **"Step forward. Take the floor. Make your voice count."** · pulsanti **Join UNSA** e **Discover our MUN** | `photos/mun-placards-colombia.jpg` (delegati che alzano i placard). Alternativa: `mun-delegates-voting.jpg` |
| 2 | **News & Events** ⭐ | Due colonne: **Upcoming Events** (3 schede con locandina, data in oro, luogo, pulsante) e **Latest News** (3 schede). Link *"See all news & events →"*. Generata da `news.json` | locandine da `news.json` |
| 3 | **Who we are** (breve) | Testo breve (sotto) + link *"Learn more about us →"* | `photos/group-photo-unsa-flag.jpg` |
| 4 | **What we do** | 6 riquadri con icona e link: **MUN Club** · **MUN Conferences** · **Panels & Seminars** · **Debates & Workshops** · **Social & Multicultural Events** · **The Critical Lens** | icone, oppure mini-foto: `mun-club-library-wide.jpg`, `mun-conference-room-wide.jpg`, `speaker-podium-flags.jpg`, `mun-delegates-networking.jpg`, `forli-piazza-saffi-night.jpg`, `critical-lens-cover-illustration.jpg` |
| 5 | **UNSA in numbers** (fascia navy) | **2024** founded · **50+** active volunteers · **3** MUN Conferences · **4** panels & seminars · **1** student magazine | sfondo con alloro |
| 6 | **Featured: MUN Club** | "Every Thursday · 15:00–17:00 · Room Dewey 999, Ruffilli Library" + pulsante *Join the WhatsApp group* | `photos/mun-club-library-vertical.jpg` |
| 7 | **The Critical Lens** (banner) | "Vol. 1 is out — read it now" + *Call for papers Vol. 2* | `flyers/critical-lens-vol1-cover.jpg` |
| 8 | **Partners** | Università di Bologna (Alma Mater) · Orizzonti Politici | `brand/partner-orizzonti-politici.jpg` + logo UniBo (da reperire) |
| 9 | **Call to action finale** | "Want to be part of UNSA?" → Become a member / Volunteer / Support us | `photos/delegates-formal-outdoor.jpg` |

**Testo "Who we are" (breve):**
> We are an International Student Association of the University of Bologna based on the Forlì Campus. Our shared goal is to bring the Model United Nations experience to our student community while promoting diversity and youth empowerment — offering accessible opportunities for every student, regardless of academic background and origin.

---

### 5.2 ABOUT US `/about`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Page header | "About UNSA" | `photos/mun-conference-room-wide-2.jpg` |
| 2 | **Who we are** | Testo esteso della sezione 2.2 di CONTENUTI_UNSA.md | `photos/mun-chairs-desk.jpg` |
| 3 | **Our mission** | "Bringing the MUN experience to our student community, promoting diversity and youth empowerment, and helping students develop the hard and soft skills that enrich our journeys as global citizens." | — |
| 4 | **Our values** (4 riquadri) | **Diversity & Inclusion** — "our pillars" · **Youth Empowerment** · **Accessibility** — open to all, regardless of background · **Critical Thinking & Academic Excellence** | icone |
| 5 | **Our story** (timeline verticale) | 2024 Foundation → May 2025 first MUN Conference (UNHRC) + Gala Night → Sep 2025 Welcome Week & MUN Club → Oct–Nov 2025 panels → Dec 2025 MUN Conference (UNGA) → Mar–Apr 2026 Women in Diplomacy & EU Trade panel → May 2026 MUN Conference 2026 → Jul 2026 The Critical Lens Vol. 1 | miniature: `flyers/mun-conference-may-2025.jpg`, `photos/group-photo-unsa-flag.jpg`, `flyers/critical-lens-vol1-cover.jpg` |
| 6 | **A message from our Presidents** | Citazione di Catalina Molin (Founder & Co-President) e Candelaria Rodriguez (Co-President): *"UNSA stands as a platform for student engagement and empowerment... Our team works hard to bring to life new projects that bridge academic excellence and innovation."* | foto delle presidenti 🟡 **mancanti** → segnaposto con iniziali |
| 7 | **Our home: Forlì** | Poche righe sul Campus di Forlì dell'Università di Bologna e sulla città | `photos/forli-piazza-saffi-night.jpg` |
| 8 | CTA | "Meet our team →" (/structure) | — |

---

### 5.3 OUR STRUCTURE `/structure` ⭐ pagina chiave

> ⚠️ **Nei file forniti non c'è una struttura per dipartimenti.** Quella che segue è una **proposta** 🟡, costruita sulle attività che UNSA svolge davvero. I nomi delle persone sono reali solo dove indicato; negli altri casi ci sono segnaposto. **È la prima cosa da far validare all'associazione.**

**Intro:**
> UNSA is run entirely by student volunteers — more than 50 of them. Our work is organised into a Board and six departments, each responsible for a key area of the association's life. Every department is open to new members: find the one that suits you and apply!

**Layout:** in alto l'**organigramma** (Board al centro, 6 dipartimenti collegati). Sotto, una **scheda per dipartimento** con: icona · nome · descrizione · "What we do" (elenco puntato) · Head(s) · pulsante *Apply to this department*.

#### Board (Executive Board)
- **Composizione:** Catalina Molin — *Founder & Co-President* (reale) · Candelaria Rodriguez — *Co-President* (reale) · Secretary General 🟡 · Treasurer 🟡
- **Descrizione:** *"The Board sets UNSA's strategy, coordinates the departments, represents the association before the University of Bologna and external partners, and manages the budget and the membership."*

#### 1. MUN Department
- *"The heart of UNSA. The MUN Department designs and runs our Model United Nations activities: the weekly MUN Club and our MUN Conferences."*
- What we do: preparing the MUN Club programme and sessions · choosing committees and topics, writing study guides · training and appointing Chairs · maintaining the Rules of Procedure · conference logistics, staff and the **Purple Point** (delegate wellbeing)
- Head: 🟡 segnaposto
- Immagine: `photos/mun-delegates-voting.jpg`

#### 2. Academic Affairs Department
- *"We bring the classroom beyond the classroom: panel discussions, seminars, debates and workshops with professors of the University of Bologna and guest speakers."*
- What we do: organising panel discussions (e.g. *The United Nations at 80*, *The Contested Middle East*) · seminars (*Women in Diplomacy*) · debate sessions and skills workshops · relations with the faculty of the Department of Political and Social Sciences
- Head: 🟡 segnaposto
- Immagine: `photos/speaker-podium-flags.jpg`

#### 3. Editorial Department — *The Critical Lens*
- *"The Editorial Department publishes The Critical Lens, UNSA's student magazine, giving students a platform to share well-researched essays on international affairs."*
- What we do: call for papers and selection of essays · editing and proofreading · in-house reports · layout and illustration of each volume
- **Heads (reali):** M. Belen Camperos, Joel Schrader · **Team (reale):** Oscar Hennin Hetzinger, Mariagledis Kohilamulla A., Elena Lusetti (Text Creation); Giulia Malaspina, Sara Palotta (Graphics)
- Immagine: `photos/critical-lens-cover-illustration.jpg`

#### 4. Events & Community Department
- *"We make UNSA a community. From the Welcome Week to the International Potluck and the Gala Night, we create moments to meet, share cultures and feel at home in Forlì."*
- What we do: Welcome Week (Meet & Greet, Aperitivo, Forlì Walking Tour) · multicultural social events · Coffee Breaks · Gala Night · welcoming new international students
- Head: 🟡 segnaposto
- Immagine: `photos/mun-delegates-networking.jpg`

#### 5. Communication & Media Department
- *"We are UNSA's voice: we tell our story on Instagram, design our flyers, take photos at our events and keep this website up to date."*
- What we do: Instagram @unsaforli (posts and stories) · graphic design and visual identity · photography and video · newsletter and website news
- Head: 🟡 segnaposto
- Immagine: `photos/mun-placards-colombia.jpg` (oppure una delle locandine)

#### 6. External Relations & Fundraising Department
- *"We build bridges: we manage partnerships with the University, other student associations and organisations, and we raise the funds that make our activities possible."*
- What we do: partnerships (e.g. Orizzonti Politici, University of Bologna) · sponsorships and donations · contacts with other MUN associations · grant applications (e.g. university funding for student activities)
- Head: 🟡 segnaposto
- Immagine: `photos/delegates-formal-outdoor.jpg`

**Fondo pagina:** fascia "Want to join a department?" con pulsante **Send your candidacy** (form 🟡) e rimando a /get-involved.

---

### 5.4 MUN (hub) `/mun`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Header | "Model United Nations" + claim *"Step forward. Take the floor. Make your voice count."* | `photos/mun-conference-room-wide.jpg` |
| 2 | **What is a MUN?** | "Model United Nations are simulations of UN bodies in which students act as delegates of Member States: they research global issues, deliver speeches, negotiate and draft resolutions — developing diplomacy, public speaking and teamwork skills." | `stock-un-general-assembly.jpg` in trasparenza |
| 3 | Due grandi card | **MUN Club** (training settimanale) → /mun/club · **MUN Conference** (la simulazione ufficiale) → /mun/conference | `mun-club-library-wide.jpg` · `mun-placards-colombia.jpg` |
| 4 | **New to MUN?** | 3 passi: 1. Join the MUN Club → 2. Learn the Rules of Procedure → 3. Take part in our Conference | — |

### 5.5 MUN CLUB `/mun/club`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Header | "MUN Club" | `photos/mun-club-library-wide.jpg` |
| 2 | **What is the MUN Club?** | Testo ufficiale delle storie (research, arguments, collaboration → final simulation) | `photos/mun-club-library-vertical-2.jpg` |
| 3 | **When & where** (riquadro evidenziato) | 📅 Every **Thursday** · 🕒 **15:00–17:00** · 📍 **Room Dewey 999, Ruffilli Library**, Forlì · "Free for all students — no previous experience needed" 🟡 | mappa (Biblioteca Ruffilli) |
| 4 | **What you'll learn** | Researching international topics · Public speaking · Negotiation · Drafting resolutions · Rules of Procedure | icone |
| 5 | **How to join** | "Fill in the form and join our WhatsApp group — we'll send you all updates (schedule changes, cancellations, materials)." Pulsanti **Sign-up form** · **WhatsApp group** (link 🟡) | — |
| 6 | Galleria | 3 foto | `mun-club-library-vertical.jpg`, `mun-club-library-wide.jpg`, `mun-club-library-vertical-2.jpg` |

### 5.6 MUN CONFERENCE `/mun/conference`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Header | "UNSA MUN Conference" | `photos/mun-delegates-voting.jpg` |
| 2 | **Next edition** | "MUN Conference 2026-27 — coming soon" 🟡: committee and topic to be announced; *"Follow @unsaforli"* | — |
| 3 | **Past editions** (card con locandina) | **May 2026** · UNGA First Committee · *Weaponizing Economic Interdependence: Sanctions, Trade Wars, and the Militarization of Strategic Interests* · Aula 2, Teaching Hub · **Dec 2025** · UNGA · *Regulating AI in Military Applications and Maintaining Strategic Stability* · Sala Gianni Donati · fee €8 members / €12 non-members · **May 2025** · UNHRC · *Reevaluating Migration Policies amid Humanitarian Crises and Climate Change* · Sala Gianni Donati · + Gala Night at Circolo Arci Asyoli | `flyers/mun-conference-2026.jpg`, `flyers/mun-conference-dec-2025.jpg`, `flyers/mun-conference-may-2025.jpg` |
| 4 | **Rules of Procedure** | Sintesi a fisarmonica (Dress code · Conduct · Technology & AI policy · Chairs & Staff · Purple Point · Points & Motions · Documents · Voting) + **Download the full RoP (PDF)** | `docs/unsa-mun-rules-of-procedure-2nd-edition.pdf` |
| 5 | **Delegate FAQ** | *Do I need experience?* No — join the MUN Club first · *Dress code?* Formal business attire · *Can I use AI?* No, AI is not allowed during sessions or for position papers · *Language?* English · *Fees?* Reduced for UNSA members | — |
| 6 | Galleria | Foto delle conferenze | `mun-conference-room-wide.jpg`, `mun-delegates-voting.jpg`, `mun-chairs-desk.jpg`, `mun-delegates-lobby.jpg`, `group-photo-unsa-flag.jpg`, `delegates-formal-outdoor.jpg` |

---

### 5.7 NEWS & EVENTS `/events`

| # | Sezione | Contenuto |
|---|---|---|
| 1 | Header | "News & Events" — `photos/mun-delegates-networking.jpg` |
| 2 | Filtri | All · MUN · Panels & Seminars · Social · Club · Publications |
| 3 | **Upcoming** | Schede grandi generate da `news.json` |
| 4 | **Past events** | Griglia dell'archivio (locandina + titolo + data) |

**Scheda evento `/events/<slug>`:** locandina grande a sinistra, informazioni a destra (data, ora, luogo, categoria, pulsante di iscrizione), testo sotto. Per i panel si aggiunge la sezione **Speakers** con ritratti:
- *The United Nations at 80*: `people/angela-romano.jpg`, `people/matteo-dian.jpg`
- *The Contested Middle East*: `people/francesca-ragno.jpg`, `people/arunas-molis.jpg`, `people/francesca-biancani.jpg`
- *EU Trade Policy*: `people/carlo-tovo.jpg`, `people/riccardo-rovelli.jpg`, `people/beatrice-manaresi.jpg`, `people/gianluca-magrini.jpg` + logo Orizzonti Politici
- *Women in Diplomacy*: testo del carosello (dati ONU 13% / 3% / 4%, Dichiarazione di Pechino 1995)

---

### 5.8 THE CRITICAL LENS `/critical-lens`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Header | "The Critical Lens — UNSA's student magazine" (sfondo blu acceso come la copertina, `#4A7CF0`) | `photos/critical-lens-cover-illustration.jpg` |
| 2 | **Our mission** | Estratto della lettera editoriale (*"...in a time where we are encouraged to simplify narratives, this magazine aspires to challenge this dangerous assumption."*) | — |
| 3 | **Volume 1 — War** (July 2026) | Copertina + pulsante **Read / Download PDF** | `flyers/critical-lens-vol1-cover.jpg`, `docs/the-critical-lens-vol1.pdf` |
| 4 | **In this issue** | 4 card con titolo, autore e abstract breve: *The Olympics as a Mirror of Conflict* (Greta Schoensberg) · *Merchants of War* (Ryan Sardi) · *The Evolution of War and the Role of Perception...* (Aurora Franchini) · *The Era of Impunity* — Report (Mariagledis Kohilamulla A.) | — |
| 5 | **Editorial team** | Head Editors, Text Creation, Graphics, Cover (vedi 5.3) | — |
| 6 | **Call for papers — Vol. 2** 🟡 | "Theme to be announced · Deadline 30 November 2026 · Send your essay to unstudentsassociation@gmail.com" | — |

---

### 5.9 GET INVOLVED `/get-involved`

| # | Sezione | Contenuto | Immagini |
|---|---|---|---|
| 1 | Header | "Get Involved" — *"We can't wait to welcome you!"* | `photos/delegates-formal-outdoor.jpg` |
| 2 | **Three ways to join** (3 colonne) | **Become a member** — *"Do you want to join our initiatives?"* → vantaggi: reduced fees at MUN Conferences (€8 vs €12), priority for events, membership €10/year 🟡 → pulsante *Membership form* · **Volunteer with us** — *"Send your candidacy and become part of a department!"* → link a /structure + *Candidacy form* · **Attend the MUN Club** — free, every Thursday → /mun/club | icone |
| 3 | **Support us** | *"Support our mission by donating. Your funds will give us the ability to fund UNSA's main calendar of activities and events. The association is built with all our volunteer work and your support from afar!"* → pulsante **Donate** (🟡) | `photos/group-photo-unsa-flag.jpg` |
| 4 | **Write for The Critical Lens** | Rimando alla call for papers | — |
| 5 | **FAQ** | *Do I need to study Political Science?* No — UNSA is open to all students, regardless of academic background and origin · *Do I need to speak Italian?* No, our activities are in English · *Can non-UniBo students attend events?* Yes, at non-member rates 🟡 | — |

---

### 5.10 CONTACT `/contact`

| # | Sezione | Contenuto |
|---|---|---|
| 1 | Header | "Contact us" — `photos/forli-piazza-saffi-night.jpg` |
| 2 | Contatti | ✉️ unstudentsassociation@gmail.com · Instagram **@unsaforli** · WhatsApp (MUN Club group) |
| 3 | Dove siamo | University of Bologna — Forlì Campus (Teaching Hub — indirizzo esatto da verificare 🟡) · MUN Club: Ruffilli Library · mappa incorporata |
| 4 | Form di contatto | Nome · Email · Oggetto (General / Membership / Partnership / Press) · Messaggio. Senza backend: `mailto:` oppure un servizio come Formspree 🟡 |

### 5.11 404
Emblema + *"This delegation seems to have left the committee room."* + pulsante "Back to Home".

---

## 6. Elementi comuni e funzionalità

- **Header fisso** con logo orizzontale (`unsa-logo-horizontal.png`, versione bianca sugli hero scuri) e menu a hamburger su mobile.
- **Responsive**, pensato prima per lo smartphone: il pubblico arriva soprattutto da Instagram ("link in bio").
- **Accessibilità:** contrasto AA, testo alternativo su tutte le foto, contenuto delle locandine riportato anche come testo (le locandine sono immagini).
- **SEO base:** title e description per ogni pagina, immagine Open Graph (`photos/group-photo-unsa-flag.jpg`), favicon ricavata dall'emblema.
- **Prestazioni:** immagini in WebP con larghezza massima 2000 px (già ridimensionate), caricamento lazy.
- **Tecnologia consigliata:** sito statico HTML/CSS/JS con `data/news.json` e hosting gratuito (GitHub Pages / Netlify). Niente database, manutenzione minima.

---

## 7. Struttura dei file prevista

```
SITO UNSA/
├── index.html
├── about.html
├── structure.html
├── mun/index.html · mun/club.html · mun/conference.html
├── events.html · event.html (scheda, legge ?id= da news.json)
├── critical-lens.html
├── get-involved.html
├── contact.html · 404.html
├── css/style.css
├── js/main.js · js/news.js
├── data/news.json
└── assets/ (img/brand, img/photos, img/people, img/flyers, docs)  ← già pronti
```

---

## 8. Ordine di lavoro

1. Base grafica: CSS, header, footer, componenti (card, pulsanti, hero)
2. Home con il sistema News (`news.json` + `news.js`)
3. Structure (pagina chiave)
4. About, MUN (hub, Club, Conference), Critical Lens
5. Events e scheda singola
6. Get Involved, Contact, 404
7. Controllo su mobile, accessibilità, link

---

## 9. Da far confermare all'associazione (🟡)

1. **Struttura per dipartimenti** (nomi, descrizioni, responsabili): è una proposta, nei file non c'era
2. Nomi, ruoli e **foto del Board** e dei responsabili di dipartimento
3. **Link:** form soci, candidatura volontari, iscrizione al MUN Club, gruppo WhatsApp, donazioni
4. **Quota associativa** (ipotesi: €10 all'anno)
5. **Anni e date** di: Women in Diplomacy, EU Trade panel, Potluck, UN at 80, Contested Middle East
6. **News inventate** per settembre 2026: Welcome Week, recruiting, ripartenza del MUN Club, call for papers Vol. 2
7. Orario del MUN Club per il 2026-27
8. Frazioni delle Rules of Procedure (ipotesi: 2/3)
9. Tema e scadenza della call for papers di The Critical Lens Vol. 2
10. Logo UniBo: autorizzazione all'uso e file ufficiale
11. Consenso all'uso delle foto delle persone ritratte e dei ritratti dei relatori
12. Foto dei relatori in risoluzione più alta (Romano, Dian, Ragno, Molis, Biancani)
