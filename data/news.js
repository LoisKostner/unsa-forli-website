/* ==========================================================================
   UNSA Forlì — NEWS & EVENTS
   --------------------------------------------------------------------------
   HOW TO ADD A NEWS ITEM OR AN EVENT
   1. Upload the flyer/photo to  assets/img/flyers/
   2. Copy one of the blocks below, paste it at the TOP of the list and edit it.
   3. Save. The Home page and the Events page update automatically.

   Fields:
   id        unique, lowercase, dashes only (used in the page URL)
   type      "event" | "announcement" | "publication"
   category  "MUN" | "Panel" | "Seminar" | "Social" | "Club" | "Publication" | "Association"
   title     headline
   date      "YYYY-MM-DD" (event day, or publication day for announcements)
   endDate   optional, "YYYY-MM-DD" for events lasting several days
   time      optional, e.g. "17:00–19:00"
   location  optional
   summary   1–2 sentences shown on cards
   body      optional list of paragraphs shown on the detail page
   image     path to the image
   pinned    true = marked with ◆ on the Home page (order is always newest first)
   speakers  optional list: { name, role, photo }
   ========================================================================== */

window.UNSA_NEWS = [

  /* ------------------------- 2026-27 ------------------------- */
  {
    id: "welcome-back-2026",
    type: "announcement",
    category: "Association",
    title: "Welcome back! UNSA 2026-27 starts now",
    date: "2026-09-15",
    summary: "A new academic year is here: new MUN Club sessions, a new MUN Conference, panels, social events and Volume 2 of The Critical Lens. Stay tuned!",
    body: [
      "Welcome back to campus! We are thrilled to start our third year of activities at the Forlì Campus of the University of Bologna.",
      "This year we will bring back the weekly MUN Club, organise a new edition of our MUN Conference, host panel discussions with professors and guest speakers, and publish the second volume of our student magazine, The Critical Lens.",
      "Follow us on Instagram @unsaforli so you don't miss any update. UNSA Mode is On!"
    ],
    image: "assets/img/photos/group-photo-unsa-flag.jpg",
    pinned: true
  },
  {
    id: "welcome-week-2026",
    type: "event",
    category: "Social",
    title: "Welcome Week 2026",
    date: "2026-09-28",
    endDate: "2026-10-03",
    time: "See programme",
    location: "Teaching Hub, Forlì Campus & Piazza Saffi",
    summary: "Meet & Greet, Intro to MUN Club, Welcome Aperitivo and the Forlì Walking Tour: a whole week to get to know UNSA.",
    body: [
      "Monday 28 September · 11:00–13:00 / 15:00–17:00 — Meet & Greet at the Teaching Hub.",
      "Tuesday 29 September · 17:00–19:00 — Intro to MUN Club.",
      "Wednesday 30 September · 11:00–13:00 / 15:00–17:00 — Meet & Greet at the Teaching Hub.",
      "Thursday 1 October · 17:00 — Welcome Aperitivo.",
      "Saturday 3 October · 15:30 — Forlì Walking Tour, meeting point Piazza Saffi."
    ],
    image: "assets/img/photos/forli-piazza-saffi-night.jpg"
  },
  {
    id: "recruiting-2026",
    type: "announcement",
    category: "Association",
    title: "We're recruiting! Join one of our committees",
    date: "2026-09-20",
    summary: "UNSA is looking for new volunteers — and you could be one of them! Applications are open until 15 October.",
    body: [
      "UNSA is run entirely by student volunteers. Whether you love diplomacy, writing, design, event planning or building partnerships, there is a place for you in one of our committees: Treasury, Secretariat, Academics, Communications, Socials or the Editorial Committee.",
      "No previous experience is required: just motivation and curiosity. Applications are open until 15 October 2026."
    ],
    image: "assets/img/photos/mun-delegates-lobby.jpg"
  },
  {
    id: "critical-lens-call-vol2",
    type: "announcement",
    category: "Publication",
    title: "Call for papers — The Critical Lens, Volume 2",
    date: "2026-09-22",
    summary: "Want to see your essay published? Submissions for the second volume of our student magazine are open until 30 November 2026.",
    body: [
      "The Critical Lens offers students a platform to share well-researched, nuanced and thoughtful essays on the events shaping our international landscape.",
      "The theme of Volume 2 will be announced soon. Send your essay to unstudentsassociation@gmail.com by 30 November 2026."
    ],
    image: "assets/img/flyers/critical-lens-vol1-cover.jpg"
  },
  {
    id: "mun-club-2026",
    type: "event",
    category: "Club",
    title: "MUN Club is officially back!",
    date: "2026-10-08",
    time: "15:00–17:00",
    location: "Room Dewey 999, Ruffilli Library",
    summary: "Our weekly MUN Club restarts: every Thursday, learn to research, debate and negotiate like a real diplomat.",
    body: [
      "The MUN Club introduces students to international diplomacy through UN simulations. Members represent countries, debate global issues, and develop negotiation and public speaking skills.",
      "The programme culminates in a final simulation, where everything learned is put into practice in a formal committee setting.",
      "Step forward. Take the floor. Make your voice count."
    ],
    image: "assets/img/photos/mun-club-library-wide.jpg"
  },

  /* ------------------------- 2025-26 ------------------------- */
  {
    id: "critical-lens-vol1",
    type: "publication",
    category: "Publication",
    title: "The Critical Lens — Volume 1 is out!",
    date: "2026-07-01",
    summary: "The first volume of UNSA's student magazine is dedicated to the theme of war: three essays and a report by students of the University of Bologna.",
    body: [
      "In this inaugural volume, we invited students to engage and reflect on the theme of war. The essays selected stood out for their depth, originality and analytical cut.",
      "Inside: The Olympics as a Mirror of Conflict (Greta Schoensberg), Merchants of War (Ryan Sardi), The Evolution of War and the Role of Perception of Actors Involved in Armed Conflicts (Aurora Franchini) and the report The Era of Impunity (Mariagledis Kohilamulla A.)."
    ],
    image: "assets/img/flyers/critical-lens-vol1-cover.jpg"
  },
  {
    id: "human-rights-day-2026",
    type: "event",
    category: "Panel",
    title: "UNSA Human Rights Day",
    date: "2026-05-25",
    time: "11:00–13:00 · 15:00–18:00",
    location: "Aula 3, Teaching Hub",
    summary: "A panel on Rwanda and the Responsibility to Protect, and a workshop on international law and the use of force — with Prof. Lyal S. Sunga and Prof. Marco Balboni.",
    body: [
      "11:00–13:00 — Panel discussion: \"The Case of Rwanda — the UN and Responsibility to Protect — Never Again Genocide?\" A moderated discussion on one of the darkest moments in modern history and the international community's failure to prevent it: the role of the United Nations, international accountability and the principle of the Responsibility to Protect (R2P).",
      "15:00–18:00 — Workshop: \"Is International Law Dead? Current Violations and the Use of Force\". Led by Lyal S. Sunga, an interactive workshop on human rights violations, armed conflicts and the use of force, closing with a debate on the future and relevance of international law.",
      "With the contribution of the Alma Mater Studiorum – University of Bologna."
    ],
    image: "assets/img/flyers/human-rights-day.jpg",
    speakers: [
      { name: "Prof. Lyal S. Sunga", role: "Special guest — Professor at John Cabot University of Rome; former Human Rights Officer at the UN OHCHR, investigated the 1994 Rwandan genocide for the UN Security Council", photo: "assets/img/people/lyal-sunga.jpg" },
      { name: "Prof. Marco Balboni", role: "Full Professor of International Law, University of Bologna", photo: "assets/img/people/marco-balboni.jpg" }
    ]
  },
  {
    id: "mun-conference-2026",
    type: "event",
    category: "MUN",
    title: "MUN Conference 2026 — UNGA First Committee",
    date: "2026-05-29",
    time: "09:00–17:00",
    location: "Aula 2, Teaching Hub, Forlì Campus",
    summary: "Topic: Weaponizing Economic Interdependence — Sanctions, Trade Wars, and the Militarization of Strategic Interests.",
    body: [
      "Our 2026 MUN Conference simulated the First Committee of the United Nations General Assembly (Disarmament and International Security).",
      "Topic: Weaponizing Economic Interdependence: Sanctions, Trade Wars, and the Militarization of Strategic Interests.",
      "With the contribution of the Alma Mater Studiorum – University of Bologna."
    ],
    image: "assets/img/flyers/mun-conference-2026.jpg"
  },
  {
    id: "panel-eu-trade-policy",
    type: "event",
    category: "Panel",
    title: "Panel: EU Trade Policy as a Geopolitical Tool",
    date: "2026-04-23",
    time: "17:00–19:00",
    location: "Aula 3, Teaching Hub",
    summary: "Brussels Effect, Energy Crisis and Climate Conditionality — an UNSA and Orizzonti Politici collaboration.",
    body: [
      "A panel discussion on the European Union's trade policy as a geopolitical tool: the Brussels Effect, the energy crisis and climate conditionality.",
      "The discussion started from Orizzonti Politici's reports, presented by analysts Beatrice Manaresi and Gianluca Magrini, with guest speakers Prof. Carlo Tovo and Prof. Riccardo Rovelli.",
      "An UNSA and Orizzonti Politici collab."
    ],
    image: "assets/img/flyers/panel-eu-trade-policy.jpg",
    speakers: [
      { name: "Prof. Carlo Tovo", role: "Guest speaker — Tenure-track Researcher, Department of Sociology and Law and Economics", photo: "assets/img/people/carlo-tovo.jpg" },
      { name: "Prof. Riccardo Rovelli", role: "Guest speaker — Professor, Department of Political and Social Sciences, University of Bologna", photo: "assets/img/people/riccardo-rovelli.jpg" },
      { name: "Beatrice Manaresi", role: "Analyst at Orizzonti Politici; Economics and Finance student", photo: "assets/img/people/beatrice-manaresi.jpg" },
      { name: "Gianluca Magrini", role: "Analyst at Orizzonti Politici; Applied Economics student", photo: "assets/img/people/gianluca-magrini.jpg" }
    ]
  },
  {
    id: "women-in-diplomacy",
    type: "event",
    category: "Seminar",
    title: "Women in Diplomacy Seminar",
    date: "2026-03-13",
    time: "17:00–19:00",
    location: "Aula 17, Teaching Hub",
    summary: "Analyzing women's role and participation in today's international affairs in the UN and beyond — on the occasion of International Women's Day.",
    body: [
      "On the occasion of International Women's Day, UNSA presented the seminar Women in Diplomacy, a space created by and for students to explore the role of women in international diplomacy, with particular attention to the historical, institutional, and contemporary dynamics of the United Nations.",
      "Women's inclusion in peacebuilding processes is essential for long-term success: gender-equal participation contributes to longer and more lasting peace after conflict. Yet, despite strong evidence in favour of their inclusion, women remain largely invisible in and sidelined from formal peace processes and negotiations.",
      "Since the adoption of the Beijing Declaration and Platform for Action in 1995 there has been some progress, but inequality persists. According to UN sources, between 1992 and 2018 women were only 13% of negotiators, 3% of mediators and 4% of signatories in major peace processes."
    ],
    image: "assets/img/flyers/women-in-diplomacy.jpg"
  },
  {
    id: "mun-conference-dec-2025",
    type: "event",
    category: "MUN",
    title: "MUN Conference 2025 — UNGA Committee",
    date: "2025-12-06",
    time: "09:00–16:00",
    location: "Sala Gianni Donati, Forlì",
    summary: "Topic: Regulating Artificial Intelligence in Military Applications and Maintaining Strategic Stability.",
    body: [
      "A one-day simulation of the United Nations General Assembly on one of the most pressing issues of our time: Regulating Artificial Intelligence in Military Applications and Maintaining Strategic Stability.",
      "Entry fees: €8 for UNSA members, €12 for non-members. Applications closed on 26 November."
    ],
    image: "assets/img/flyers/mun-conference-dec-2025.jpg"
  },
  {
    id: "panel-contested-middle-east",
    type: "event",
    category: "Panel",
    title: "Panel: The Contested Middle East",
    date: "2025-11-20",
    time: "17:00–19:00",
    location: "Aula 3, Teaching Hub",
    summary: "International Law and Energy Markets on the Line — with Prof. Francesca Ragno, Prof. Arūnas Molis and Prof. Francesca Biancani.",
    body: [
      "A panel discussion on the Middle East at the crossroads of international law and global energy markets."
    ],
    image: "assets/img/flyers/panel-contested-middle-east.jpg",
    speakers: [
      { name: "Prof. Francesca Ragno", role: "Full Professor, Director of BIS, Department of Political and Social Sciences, University of Bologna", photo: "assets/img/people/francesca-ragno.jpg" },
      { name: "Prof. Arūnas Molis", role: "Adjunct Professor, Faculty of Political Science and Diplomacy, Vytautas Magnus University", photo: "assets/img/people/arunas-molis.jpg" },
      { name: "Prof. Francesca Biancani", role: "Associate Professor, Department of Political and Social Sciences, University of Bologna", photo: "assets/img/people/francesca-biancani.jpg" }
    ]
  },
  {
    id: "panel-un-at-80",
    type: "event",
    category: "Panel",
    title: "Panel: The United Nations at 80",
    date: "2025-10-24",
    time: "17:00–19:00",
    location: "Aula 3, Teaching Hub",
    summary: "Reflections on its present and future — with Prof. Angela Romano and Prof. Matteo Dian, on the 80th anniversary of the UN.",
    body: [
      "On United Nations Day, eighty years after the entry into force of the UN Charter, we reflected on the present and the future of the Organization."
    ],
    image: "assets/img/flyers/panel-un-at-80.jpg",
    speakers: [
      { name: "Prof. Angela Romano", role: "Associate Professor, Department of Political and Social Sciences, University of Bologna", photo: "assets/img/people/angela-romano.jpg" },
      { name: "Prof. Matteo Dian", role: "Associate Professor, Department of Political and Social Sciences, University of Bologna", photo: "assets/img/people/matteo-dian.jpg" }
    ]
  },
  {
    id: "welcome-week-2025",
    type: "event",
    category: "Social",
    title: "Welcome Week 2025",
    date: "2025-09-22",
    endDate: "2025-09-27",
    location: "Teaching Hub, Forlì Campus & Piazza Saffi",
    summary: "Meet & Greet, Intro to MUN Club, Welcome Aperitivo and Forlì Walking Tour.",
    body: [
      "Monday 22 · 11:00–13:00 / 15:00–17:00 — Meet & Greet.",
      "Tuesday 23 · 17:00–19:00 — Intro to MUN Club.",
      "Wednesday 24 · 11:00–13:00 / 15:00–17:00 — Meet & Greet.",
      "Thursday 25 · 17:00 — Welcome Aperitivo.",
      "Saturday 27 · 15:30 — Forlì Walking Tour, meeting point Piazza Saffi."
    ],
    image: "assets/img/flyers/welcome-week-events.jpg"
  },

  /* ------------------------- 2024-25 ------------------------- */
  {
    id: "mun-conference-may-2025",
    type: "event",
    category: "MUN",
    title: "MUN Conference 2025 — UNHRC + Gala Night",
    date: "2025-05-31",
    time: "09:00–16:00 · Gala from 21:00",
    location: "Sala Gianni Donati · Gala at Circolo Arci Asyoli",
    summary: "Topic: Reevaluating Migration Policies amid Humanitarian Crises and Climate Change — followed by our Gala Night.",
    body: [
      "Committee: United Nations Human Rights Council (UNHRC).",
      "Topic: Reevaluating Migration Policies amid Humanitarian Crises and Climate Change.",
      "On the same day, from 21:00, the Gala Night at Circolo Arci Asyoli. Dress to impress — black tie attire encouraged!"
    ],
    image: "assets/img/flyers/mun-conference-may-2025.jpg"
  },
  {
    id: "international-potluck-2025",
    type: "event",
    category: "Social",
    title: "International Potluck",
    date: "2025-05-16",
    time: "11:30",
    location: "Parco Urbano, Forlì",
    summary: "Bring a national dish from your country and share your culture! Ticket includes one welcome aperitif.",
    body: [
      "Bring a national dish from your country and share your culture with the UNSA community at Forlì's Parco Urbano.",
      "Ticket includes one welcome aperitif."
    ],
    image: "assets/img/flyers/international-potluck.jpg"
  }
];
