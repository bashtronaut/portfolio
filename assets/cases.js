/* ============ Daten: Über mich ============ */
const INTRO = [
  "Seit 18 Jahren beseitige ich die Engpässe, an denen Unternehmen Zeit, Geld und Kunden verlieren, in Apps, Plattformen, Shops und auf der Verkaufsfläche.",
  "Ich fange nicht beim Design an, sondern beim Kunden. Ich spreche mit den Menschen, die dem Problem am nächsten sind, von der Geschäftsführung bis zur Werkstatt, untersuche den tatsächlichen Ablauf und finde den einen Hebel mit der größten Wirkung. Danach entwerfe, teste und führe ich die Lösung ein, bis sie läuft.",
  "Meine Arbeit reicht von Startups über Mittelständler bis zu Samsung, DHL und Mercedes-AMG. Ich habe Teams geführt, Design und Entwicklung an einen Tisch gebracht und Projekte von der ersten Idee über das Konzept bis zum Rollout verantwortet.",
  "Wer nur einen Screen gestaltet haben will, findet günstigere Anbieter. Wer wissen will, warum Kunden abspringen, und das ändern will, ist bei mir richtig."
];const INTRO_NOTE = 'Red Dot Best of the Best 2018, Cresta Awards 2023 und 2024, Eurobest 2017, New York Festivals. Weitere auf der Seite <a href="awards.html">Awards</a>.';

/* ============ Daten: Cases ============
   images: Pfade unter /cases/<id>/ (jpg, webp oder mp4). Leer = grauer Platzhalter.
   Ordner auf deinem Rechner: smartways=SmartWay, reisacher=Reisacher, eintracht=Eintracht Frankfurt,
   auris=Soundbar-Samsung, games=BlackFriday, emojis=LoE-Samsung, cosmos=cosmos, amg=AMG */
const CASES = {
  reisacher:{name:"Reisacher", client:"Reisacher GmbH, Autohausgruppe",
    lead1:"Vom Klemmbrett zum Live-Cockpit: Reisacher sieht die Auslastung von 8 Standorten in Echtzeit.",
    lead2:"Ich habe das Portal als Head of UX / CX von der Analyse bis zum Rollout verantwortet.",
    body:"In den Werkstätten liefen Papier-Checklisten, Zeitarbeit, Sprachbarrieren und eine langsame Planungssoftware nebeneinander. Die Geschäftsführung sah Engpässe erst, wenn sie schon Geld kosteten. Ich habe mit Aufbereitern, Mechanikern und Management gesprochen und alle Prozesse aufgenommen, bevor der erste Screen entstand. Daraus wurde eine rollenbasierte Informationsarchitektur: Live-Dashboards für das Management, geführte Checklisten für die Werkstatt. Ein klickbarer Figma-Prototyp stand vor der Entwicklung, damit alle das System anfassen konnten, bevor es gebaut wurde. Wireframes, UI, eine iOS-App für die Werkstatt, QA und Rollout habe ich bis zum Einsatz an allen Standorten begleitet.",
    result:"Jedes Team sieht die Auslastung live, Aufträge laufen ohne Umwege durch, Fehler werden seltener. Die Geschäftsführung erkennt Engpässe früher und verschiebt Kapazitäten zwischen den Häusern, statt jeden Standort einzeln zu retten. Der Rollout an allen acht Standorten dauerte drei Monate. Das Portal wurde angenommen, weil es dem Arbeitstag an der Theke folgt und niemandem einen neuen Prozess aufzwingt.",
    metrics:[["8", "Standorte"], ["6 Monate", "vom Papier zum Live-Cockpit"], ["2", "Plattformen: Web und iOS"]],
    note:"Mittelstand · Head of UX / CX · Prozessdesign · Web und iOS", images:[]},

  ben:{name:"Ben App", client:"Garage51 GmbH, eigenes Produkt",
    lead1:"Ben holt Wartende aus dem Wartezimmer, ohne Konto, ohne App-Installation und ohne ein einziges persönliches Datum.",
    lead2:"Ich habe als Head of UX / CX Idee, Produkt, Marke und Auftritt von der ersten Skizze bis zum Marktstart gebaut.",
    body:"Volle Wartezimmer belasten Patienten und Personal. Bestehende Lösungen verlangen zuerst Telefonnummer, Konto oder App-Installation, und genau dort entstehen Hürden und Datenschutzrisiken. Ben ist deshalb für jeden Dienstleister gebaut, bei dem Kunden warten: Praxis, Krankenhaus, Werkstatt, Amt, Ladengeschäft. Ich habe gemeinsam mit den Gründern das Produktkonzept entwickelt, in Praxen und Krankenhäusern mit Ärzten, Personal und Patienten gesprochen und Customer Journey und Service Blueprint erarbeitet. Daraus entstanden Wireframes, klickbare Prototypen und der MVP, getestet mit echten Nutzern. Dazu kamen App, Web-App, Website, Marke, App-Store-Auftritt, Flyer und Pitch-Deck.",
    result:"Wer an der Anmeldung einen QR-Code scannt, kann gehen: ins Café, an die frische Luft, nach Hause. Eine Push-Nachricht holt ihn zurück, sobald er dran ist. Was nicht gespeichert wird, muss keine Praxis schützen und kein Patient fürchten. Datenschutz wird zu einer Eigenschaft, die man spürt. Ben läuft als App, Web-App und Website und basiert auf mehr als 40 Interviews mit der Zielgruppe.",
    metrics:[["0", "persönliche Daten nötig"], ["40+", "User Interviews"], ["3", "Plattformen: App, Web-App, Website"]],
    note:"SaaS · Produkt · Service Design · Behavioral Design", images:[]},

  cosmos:{name:"cosmos", client:"cosmos GmbH, vormals borntocreate",
    lead1:"cosmos zeigt Geschäftsführern in Echtzeit, ob ihre Maßnahmen die Unternehmensziele erreichen.",
    lead2:"Ich habe als Head of UX / CX die Geschäftsführung beraten, die UX-Strategie für den Rebrand gesetzt und aus zwei Teams ein Produktteam gemacht.",
    body:"Entscheider treffen Entscheidungen oft auf Basis veralteter Zahlen. cosmos verbindet Zielgruppen, Kennzahlen und Markenausrichtung und zeigt, wie Maßnahmen entlang der Customer Journey auf die Unternehmensziele wirken. Die Produktidee war größer als der Ablauf, der sie liefern sollte: UX und Entwicklung arbeiteten getrennt, Releases stauten sich. Ich habe die UX-Strategie für den Rebrand von borntocreate zu cosmos festgelegt, UX und Entwicklung zu einem Produktteam verbunden, Konflikte gelöst und feste Abläufe geschaffen. Als UX-Architekt habe ich Onboarding, TargetLens und KPI Map aufgebaut, vom ersten Login bis zur Warnung bei verfehlten Zielen.",
    result:"Das Produktteam arbeitete nach vier Wochen in einem gemeinsamen Ablauf und lieferte schneller und mit weniger Abstimmung. Im März ging die Beta mit Marken aus dem DACH-Raum live. Heute bewerten Nutzer die Plattform mit 4,9 von 5 Punkten auf OMR.",
    metrics:[["4 Wochen", "bis zum gemeinsamen Produktteam"], ["4 Monate", "vom Rebrand zur neuen Arbeitsweise"], ["4,9 / 5", "Bewertung auf OMR"]],
    note:"SaaS · Head of UX / CX · Teamaufbau · Rebrand", images:[]},

  auris:{name:"AURIS", client:"Samsung Germany und Österreich, Garage51 GmbH",
    lead1:"AURIS macht den Klang von 6 Soundbars mit einem Tipp vergleichbar, direkt am Regal.",
    lead2:"Ich habe das Projekt als Head of UX / CX R&D geleitet: Nutzerführung, Interface, Kundenbetreuung und Projektorganisation.",
    body:"Im Handel stehen immer mehr Soundbars nebeneinander, erklärt über Datenblätter, die niemand versteht. Den Unterschied hört man, man liest ihn nicht. Bisher mussten dafür Geräte umgesteckt oder im Fernseher neu verbunden werden. Am Regal ist es laut, die Aufmerksamkeit kurz, und niemand liest eine Anleitung. Ich habe Durchlauf, Lautstärke und Aufmerksamkeitsspanne ausgewertet und das Interface auf drei Informationen reduziert: welche Soundbar spielt, was sie von den anderen unterscheidet, ein Tipp zum Wechseln. Film, Gaming und Sport bleiben beim Wechsel erhalten, damit Kunden denselben Moment vergleichen. Dazu habe ich Samsung betreut, das UX-Team angeleitet und die Umsetzungspartner für den Rollout in Deutschland, Österreich und der Schweiz eingewiesen.",
    result:"Kunden wählen ein Szenario, tippen und hören den Unterschied sofort. Die durchschnittliche Verweildauer stieg um vier Minuten, an einem Ort, an dem sonst Sekunden zählen. Nach dem Start in Deutschland, Österreich und der Schweiz folgten weitere europäische Länder. Samsung führt das Projekt intern als Best Practice und zeichnete es bei den Best Practice Shop Awards mit Gold und Silber aus.",
    metrics:[["+4 Min.", "Verweildauer im Schnitt"], ["Gold und Silber", "Best Practice Shop Awards"], ["DACH", "Start, danach weitere Länder in Europa"]],
    note:"Retail · Phygital · Interface · Head of UX / CX R&D", images:[]},

  games:{name:"Black Friday", client:"Samsung Europe, Cheil Germany, BoraBora Studios",
    lead1:"Samsung macht aus Black Friday ein Spiel, in dem Kunden den Rabatt selbst verdienen.",
    lead2:"Ich habe die Erlebnisse von 2022 bis 2025 gestaltet, 2023 als Head of UX.",
    body:"Zum Black Friday werben alle mit Rabatten, ein Prozentzeichen mehr unterscheidet niemanden. Samsung brauchte einen Grund, im Shop zu bleiben und zu kaufen. Ich habe drei Ausgaben gestaltet. 2022 Level Up Your Deal: Jedes Level verbessert den Deal (Cresta Bronze 2023, New York Festivals Finalist). 2023 Smartopia: eine 3D-Welt mit täglich neuem Spiel für Deutschland und 16 weitere Länder, von der Spielwelt bis zum Kaufabschluss (Cresta Finalist 2024). 2025 Galaxy AI Arcade: 26 Tage, 26 Länder, sechs Minispiele, wer gewinnt, bekommt einen Rabattcode.",
    result:"Smartopia 2023 war eine der erfolgreichsten Black-Weeks-Kampagnen von Samsung: 20 Prozent mehr Umsatz als im Vorjahr, 63,5 Prozent höhere Conversion bei Besuchern, die gespielt haben, und 27 Prozent höherer Bestellwert pro Besucher. Spiel und Warenkorb sind ein Ablauf: Wer gespielt hat, landet ohne Umweg beim Deal.",
    metrics:[["+20 %", "Umsatz, Black Weeks 2023"], ["+63,5 %", "Conversion bei Spielern"], ["17", "Länder"]],
    note:"E-Commerce · Branded Game · Gamification · Head of UX", images:[]},

  amg:{name:"Mercedes-AMG", client:"Mercedes-AMG, BOLD digital",
    lead1:"Eine Bestellstrecke für Rennfahrzeuge, die der Käufer nie verlässt.",
    lead2:"Ich habe als Creative Lead die digitale Markenwelt und den Online-Bestellprozess für den AMG GT4 verantwortet.",
    body:"Mercedes-AMG steht für Leistung, Präzision und eine direkte Verbindung zwischen Mensch und Maschine. Das musste digital genauso spürbar werden wie auf der Rennstrecke, bis zur Bestellung. Ein Rennfahrzeug lässt sich in sehr vielen Varianten konfigurieren, und viele Optionen erschweren die Entscheidung. Ich habe alle digitalen Kanäle und Touchpoints entlang der Customer Journey analysiert und dem Kunden vorgestellt, daraus eine zusammenhängende Erlebnisarchitektur für Fahrzeuge, Stories und die AMG-Community entworfen und komplexe Leistungsdaten in emotional aufgeladene Module übersetzt: Konfigurator, Storytelling je Fahrzeug, Inhalte zu Events. Dazu kamen die AMG-Performance-Website und der Online-Bestellprozess für Kundensport-Fahrzeuge wie den AMG GT4.",
    result:"Die Markenwelt beginnt auf der Rennstrecke, führt durch Ausstattung und Konfiguration und endet beim Kauf, ohne Sprung in einen Shop. Besucher blieben im Schnitt 4 Minuten länger, es gab 17 Prozent mehr Konfigurationen, die Klickrate stieg um 35 Prozent. Kundenkontakt und Präsentationen bei AMG habe ich über die gesamte Projektzeit selbst geführt.",
    metrics:[["+4 Min.", "Verweildauer im Schnitt"], ["+17 %", "Konfigurationen"], ["+35 %", "Click-through-Rate"]],
    note:"Premium-Marke · Creative Lead · Konfigurator und Bestellprozess", images:[]},

  smartways:{name:"SmartWays", client:"Samsung Electronics Germany, Produkt von Cheil",
    lead1:"SmartWays plant den Außendienst für 8.000 Samsung-Verkaufsstellen und spart Wege, Zeit und CO<sub>2</sub>.",
    lead2:"Ich habe das Produkt als UX Lead gestaltet: Karte, Rollen und Designsystem für Web und Mobile.",
    body:"Fahrer planten ihre Touren von Hand und schafften 2,5 Verkaufsstellen am Tag. Ich habe das Interaktionsmodell um die Karte gebaut: Disponenten sehen Fahrer, Gebiete und Ziele an einem Ort, Fahrer checken mobil ein. Ein Designsystem für Web und Mobile hält KI-Tourenplanung, Live-Tracking und Auswertung zusammen.",
    result:"Der Jahres-ROI stieg um 200 Prozent, die Store-Besuche verdoppelten sich, der CO<sub>2</sub>-Ausstoß im Außendienst sank um 22 Prozent und die Zeit im Back-Office um über 70 Prozent.",
    metrics:[["+200 %", "Jahres-ROI"], ["+100 %", "Store-Besuche"], ["−22 %", "CO<sub>2</sub> im Außendienst"]],
    note:"Plattform · UX Lead · Designsystem", images:[]},

  eintracht:{name:"Eintracht Frankfurt", client:"Cheil Germany",
    lead1:"Die Eintracht-App bringt Ticketing, Merchandising und mobiles Bezahlen in eine App und holte in zwei Wochen eine Million Downloads.",
    lead2:"Ich habe Strategie, Customer Journey im Stadion und UI mitgestaltet.",
    body:"Fans erleben ihren Verein im Stadion, im Shop und beim Ticketkauf, und jeder Weg lief getrennt. Ich habe die Herleitung in Workshops im Stadion mit den Projektverantwortlichen besprochen, die Customer Journey im Stadion als Entscheidungsgrundlage ausgearbeitet und das Core-Team von Sketch auf Figma umgestellt.",
    result:"Die App holte in zwei Wochen eine Million Downloads und Platz 1 im Store, die Mitgliederregistrierungen stiegen um 240 Prozent, die Nutzungszeit um 130 Prozent. Das Team arbeitete danach in einer gemeinsamen Figma-Datei.",
    metrics:[["1 Mio.", "Downloads in 2 Wochen"], ["+240 %", "Mitgliederregistrierung"], ["+130 %", "Nutzungszeit"]],
    note:"Mobile App · Strategie · Customer Journey · UI", images:[]},

  emojis:{name:"Land of Emojis", client:"Samsung Germany, Cheil Germany",
    lead1:"Land of Emojis machte aus Selfies Emojis und aus einer Botschaft für Vielfalt ein Bild auf dem Brandenburger Tor.",
    lead2:"Ich war Art Director der App und der digitalen Touchpoints.",
    body:"Im Wahljahr 2017 stand Vielfalt in Europa unter Druck. Ich habe die App gestaltet, die aus einem Selfie ein persönliches Emoji-Set erzeugt, und Look and Feel von der Landingpage über LED-Wände bis zur Live-Projektion am Tag der Deutschen Einheit geführt.",
    result:"Red Dot Best of the Best 2018 in der Kategorie Lifestyle App. Dazu kamen 3× Gold und der Grand Prix Digital beim Cristal Festival.",
    metrics:[["Red Dot", "Best of the Best 2018"], ["3× Gold", "Cristal Festival"], ["ca. 50", "Emotionen pro Emoji-Set"]],
    note:"Mobile App · Kampagne · Art Direction · UI", images:[]}
};

/* ============ Daten: Link-Profile (?f=plattform) ============ */
const PROFILES = {
  alle:{h1:"Erlebnisse, die Kunden binden und sich rechnen.", cases:["reisacher","ben","cosmos","auris","games","amg","smartways","eintracht","emojis"]},
  plattform:{h1:"Plattformen, die Teams jeden Tag benutzen.", cases:["smartways","reisacher","ben","cosmos"]},
  mobile:{h1:"Apps, die man auch zum zweiten Mal öffnet.", cases:["eintracht","emojis","ben","reisacher"]},
  retail:{h1:"Erlebnisse am Regal, die Kaufabsicht messen.", cases:["auris","games","smartways"]},
  marke:{h1:"Ideen, die Preise gewinnen und verkaufen.", cases:["amg","emojis","games"]},
  mittelstand:{h1:"Abläufe, die Geld sparen, bevor es jemand sieht.", cases:["reisacher","ben","smartways","cosmos"]}
};

/* ============ Rendering ============ */
const $ = (id) => document.getElementById(id);
const ARROW_L = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2 4 7l5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW_R = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="m5 2 5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const nb = (s) => s.replace(/ (%|Mio\.|Min\.|Monate|Standorte|Länder)/g, " $1");

function profileKey(){
  let f = "";
  try{ f = new URLSearchParams(location.search).get("f") || ""; }catch(e){}
  if(!f) f = (location.hash || "").replace("#","");
  return PROFILES[f] ? f : "alle";
}

function slideHTML(src, alt){
  if(/\.(mp4|webm)$/i.test(src)) return `<figure class="slide"><video src="${src}" muted loop playsinline autoplay preload="metadata" aria-label="${alt}"></video></figure>`;
  return `<figure class="slide"><img src="${src}" alt="${alt}" loading="lazy" decoding="async"></figure>`;
}

function caseHTML(id, i){
  const c = CASES[id];
  const slides = (c.images.length ? c.images.map((s,k)=>slideHTML(s, `${c.name}, Bild ${k+1}`)) : [0,1,2].map(()=>'<figure class="slide" aria-hidden="true"></figure>')).join("");
  const count = c.images.length || 3;
  const dots = Array.from({length:count}, (_,k)=>`<button class="dot" type="button" aria-label="Bild ${k+1}"${k===0?' aria-current="true"':''}></button>`).join("");
  const parts = c.note.split(". ");
  const tags = parts[0].split(" · ").map(t=>`<li>${t}</li>`).join("");
  const metrics = c.metrics.map(m=>`<div class="metric"><b>${nb(m[0])}</b><span>${m[1]}</span></div>`).join("");
  return `<article class="block" ${i===0?'id="arbeiten"':''} data-case="${id}">
    <div class="label"><b>${c.name}</b><br>${c.client}</div>
    <div class="main">
      <div class="stack">
        <h2 class="lead">${c.lead1} <span>${c.lead2}</span></h2>
        <p class="body">${c.body}</p>
        ${c.result?`<p class="body">${c.result}</p>`:""}
        <ul class="tags" aria-label="Kategorien">${tags}</ul>
        <div class="metrics">${metrics}</div>
      </div>
      <div class="slider" role="region" aria-roledescription="Karussell" aria-label="Bilder zu ${c.name}">
        <div class="track" tabindex="0">${slides}</div>
        <div class="controls">
          <div class="dots">${dots}</div>
          <div class="arrows">
            <button class="arrow" type="button" data-dir="-1" aria-label="Vorheriges Bild">${ARROW_L}</button>
            <button class="arrow" type="button" data-dir="1" aria-label="Nächstes Bild">${ARROW_R}</button>
          </div>
        </div>
      </div>
    </div>
  </article>`;
}

/* ============ Slider: Feder-Physik, Mausziehen, Gummiband ============
   Touch und Trackpad scrollen nativ (Scroll-Snap, Systemphysik, läuft ohne JavaScript).
   Maus, Pfeile, Tastatur und Punkte nutzen dieselbe gedämpfte Feder. */
const REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Gedämpfte Feder: Position zur Zeit t (Sekunden), Startgeschwindigkeit v0 (px/s) bleibt erhalten */
function spr(x0, v0, to, w, z, t){
  const a = x0 - to;
  if(z >= 1) return to + (a + (v0 + w * a) * t) * Math.exp(-w * t);
  const wd = w * Math.sqrt(1 - z * z), b = (v0 + z * w * a) / wd;
  return to + Math.exp(-z * w * t) * (a * Math.cos(wd * t) + b * Math.sin(wd * t));
}
function cancelGlide(track){
  if(track._raf){ cancelAnimationFrame(track._raf); track._raf = 0; }
  track.classList.remove("anim");
}
function glide(track, to, v0){
  /* anim zuerst setzen: jeder Layout-Zugriff davor würde das Einrasten auslösen und die Position verschieben */
  if(track._raf){ cancelAnimationFrame(track._raf); track._raf = 0; }
  track.classList.add("anim");
  to = Math.max(0, Math.min(track.scrollWidth - track.clientWidth, to));
  const from = track.scrollLeft;
  const rb0 = parseFloat(track.style.getPropertyValue("--rb")) || 0;
  const finish = ()=>{ track.scrollLeft = to; track.style.removeProperty("--rb"); track.classList.remove("anim"); track._raf = 0; };
  if(REDUCE || (Math.abs(to - from) < 1 && Math.abs(rb0) < 1)){ finish(); return; }
  const t0 = performance.now(), W = 11, Z = 0.82;
  const tick = (now)=>{
    const t = (now - t0) / 1000;
    const x = spr(from, v0, to, W, Z, t);
    const r = rb0 ? spr(rb0, 0, 0, 14, 1, t) : 0;
    track.scrollLeft = x;
    if(rb0) track.style.setProperty("--rb", r.toFixed(2) + "px");
    const v = (spr(from, v0, to, W, Z, t + 0.01) - x) / 0.01;
    if(t > 2 || (t > 0.1 && Math.abs(x - to) < 0.3 && Math.abs(v) < 8 && Math.abs(r) < 0.3)) finish();
    else track._raf = requestAnimationFrame(tick);
  };
  track._raf = requestAnimationFrame(tick);
}

/* Maus und Stift ziehen: 1:1 mit der Hand, Gummiband am Rand, Schwung beim Loslassen */
function enableDrag(track, step){
  let id = null, moved = false, startX = 0, startL = 0, startI = 0, startRb = 0, samples = [];
  const rubber = (x)=>{ const W = track.clientWidth; return (1 - 1 / (x * 0.55 / W + 1)) * W; };
  track.addEventListener("pointerdown", (e)=>{
    if(e.pointerType === "touch" || e.button !== 0 || id !== null) return;
    track.classList.add("drag");   /* vor dem Lesen von scrollLeft, sonst rastet der Browser ein */
    cancelGlide(track);
    startRb = parseFloat(track.style.getPropertyValue("--rb")) || 0;
    id = e.pointerId; moved = false; startX = e.clientX; startL = track.scrollLeft;
    startI = Math.round(startL / step());
    samples = [[e.timeStamp, e.clientX]];
    track.setPointerCapture(id);
  });
  track.addEventListener("pointermove", (e)=>{
    if(e.pointerId !== id) return;
    const dx = e.clientX - startX;
    if(Math.abs(dx) > 4) moved = true;
    const max = track.scrollWidth - track.clientWidth;
    const raw = startL - dx, pos = Math.max(0, Math.min(max, raw)), over = raw - pos;
    track.scrollLeft = pos;
    const rb = over > 0 ? -rubber(over) : over < 0 ? rubber(-over) : startRb;
    track.style.setProperty("--rb", rb.toFixed(2) + "px");
    samples.push([e.timeStamp, e.clientX]);
    while(samples.length > 2 && e.timeStamp - samples[0][0] > 90) samples.shift();
  });
  const end = (e)=>{
    if(e.pointerId !== id) return;
    id = null;
    if(track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    const s = step(), last = track.children.length - 1, dx = e.clientX - startX;
    const a = samples[0], b = samples[samples.length - 1];
    const stale = e.timeStamp - b[0] > 80;                     /* Hand lag still: kein Schwung */
    let v = (!stale && b[0] > a[0]) ? -(b[1] - a[1]) / (b[0] - a[0]) * 1000 : 0; /* Scroll-px pro Sekunde */
    v = Math.max(-6000, Math.min(6000, v));
    let i = Math.round((track.scrollLeft + v * 0.22) / s);
    if(i === startI && Math.abs(dx) > s * 0.12) i = startI + (dx < 0 ? 1 : -1);
    i = Math.max(0, Math.min(last, Math.max(startI - 1, Math.min(startI + 1, i))));
    glide(track, i * s, v);
    track.classList.remove("drag");
  };
  track.addEventListener("pointerup", end);
  track.addEventListener("pointercancel", end);
  track.addEventListener("click", (e)=>{ if(moved){ e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  track.addEventListener("dragstart", (e)=>e.preventDefault());
  ["wheel","touchstart"].forEach(n=>track.addEventListener(n, ()=>cancelGlide(track), {passive:true}));
}

function initSlider(root){
  const track = root.querySelector(".track");
  const slides = [...track.children];
  const dots = [...root.querySelectorAll(".dot")];
  const prev = root.querySelector('[data-dir="-1"]');
  const next = root.querySelector('[data-dir="1"]');
  const step = () => slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
  const index = () => Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / step())));
  const sync = () => {
    const i = index();
    dots.forEach((d,k)=>{ if(k===i) d.setAttribute("aria-current","true"); else d.removeAttribute("aria-current"); });
    prev.disabled = i === 0;
    next.disabled = i >= slides.length - 1;
  };
  /* Ziel zählt weiter, wenn schnell hintereinander geklickt wird */
  const goTo = (i)=>{
    i = Math.max(0, Math.min(slides.length - 1, i));
    track._target = i;
    glide(track, i * step(), 0);
  };
  const current = () => track._raf ? track._target : index();
  prev.addEventListener("click", ()=>goTo(current() - 1));
  next.addEventListener("click", ()=>goTo(current() + 1));
  dots.forEach((d,k)=>d.addEventListener("click", ()=>goTo(k)));
  track.addEventListener("scroll", ()=>requestAnimationFrame(sync), {passive:true});
  track.addEventListener("keydown", (e)=>{
    if(e.key==="ArrowRight"){ e.preventDefault(); next.click(); }
    if(e.key==="ArrowLeft"){ e.preventDefault(); prev.click(); }
    if(e.key==="Home"){ e.preventDefault(); goTo(0); }
    if(e.key==="End"){ e.preventDefault(); goTo(slides.length - 1); }
  });
  enableDrag(track, step);
  /* Videos nur abspielen, solange sie sichtbar sind */
  const vids = track.querySelectorAll("video");
  if(vids.length && "IntersectionObserver" in window){
    const io = new IntersectionObserver((es)=>es.forEach((en)=>{ if(en.isIntersecting) en.target.play().catch(()=>{}); else en.target.pause(); }), {threshold:0.35});
    vids.forEach(v=>io.observe(v));
  }
  window.addEventListener("resize", sync);
  sync();
}


/* Slider über die ganze Fensterbreite: Maße der Textspalte messen */
function measure(){
  const m = document.querySelector("#cases .main");
  if(!m) return;
  const b = document.body.getBoundingClientRect();
  const r = m.getBoundingClientRect();
  const root = document.documentElement.style;
  const left = Math.round(r.left - b.left);
  root.setProperty("--vw", b.width + "px");
  root.setProperty("--main-left", left + "px");
  root.setProperty("--main-w", Math.round(r.width) + "px");
  root.setProperty("--main-right", Math.max(0, Math.round(b.width - left - r.width)) + "px");
}
function render(){
  const key = profileKey(), p = PROFILES[key];
  $("h1").textContent = p.h1;
  $("intro").innerHTML = INTRO.map(t=>`<p>${t}</p>`).join("");
  $("intro-note").innerHTML = INTRO_NOTE;
  $("cases").innerHTML = p.cases.map(caseHTML).join("");
  measure();
  document.querySelectorAll(".slider").forEach(initSlider);
}
render();
window.addEventListener('resize', measure);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
