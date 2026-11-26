/* ============ Daten: Über mich ============ */
const INTRO = [
  "Transformationen und digitale Produkte scheitern selten an der Strategie, sondern an der Umsetzung im Alltag. Ich schließe diese Lücke als eingebettete Führungskraft, die selbst mitliefert. Ich führe Transformationen vom ersten Workshop bis in den Betrieb und entwickle die digitalen Produkte, Plattformen und Prozesse dahinter selbst mit.",
  "Ich arbeite direkt im Team, bringe Business und IT an einen Tisch und mache den Ist-Zustand im Service Blueprint transparent, bevor Budget gebunden wird. KI setze ich dort ein, wo sie Wirkung bringt: in der Analyse, im Design, im Prototyping, in der Auswertung von Nutzerfeedback und in der laufenden Optimierung. Skaliert wird nur, was sich im Betrieb messbar bewährt.",
  "Ich führe cross-funktional, denke End-to-End und verantworte die Umsetzung bis in den Live-Betrieb. 18 Jahre Track Record, vom Startup bis zu Samsung, DHL und Mercedes-AMG. Für Unternehmen, die sofortigen Impact brauchen."
];const INTRO_NOTE = 'Red Dot Best of the Best 2018, Cristal Festival Grand Cristal 2017, Cresta Awards Gold 2020, New York Festivals Gold 2022. Alle auf der Seite <a href="awards.html">Awards</a>.';

/* ============ Daten: Cases ============
   images: Pfade unter /cases/<id>/ (jpg, webp oder mp4). Leer = grauer Platzhalter.
   Ordner auf deinem Rechner: smartways=SmartWay, reisacher=Reisacher, eintracht=Eintracht Frankfurt,
   auris=Soundbar-Samsung, games=BlackFriday, emojis=LoE-Samsung, cosmos=cosmos, amg=AMG */
const CASES = {
  reisacher:{name:"Reisacher", client:"Reisacher GmbH<br>Garage51 GmbH<br>2025–2026",
    lead1:"Vom Klemmbrett zum Live-Cockpit: Reisacher sieht die Auslastung von 8 Standorten in Echtzeit.",
    lead2:"Ich habe als Head of UX / CX Analyse, UX-Konzept und UI geleitet, mit Geschäftsführung, Werkstätten und Entwicklung.",
    body:"Papier-Checklisten, Zeitarbeit, Sprachbarrieren und langsame Software liefen nebeneinander. Die Geschäftsführung sah Engpässe erst, wenn sie Geld kosteten. Nach Gesprächen mit Mechanikern und Management entstand ein Portal mit zwei Sichten: Live-Dashboards fürs Management, geführte Checklisten für die Werkstatt. Ein klickbarer Prototyp stand vor dem Bau. Von den Wireframes bis zum Einsatz an allen Standorten begleitete ich die Umsetzung gemeinsam mit der Entwicklung.",
    result:"Jedes Team sieht die Auslastung live, Aufträge laufen ohne Umwege, Fehler werden seltener. Die Geschäftsführung verschiebt Kapazitäten zwischen den Häusern. Rollout an allen 8 Standorten in 3 Monaten.",
    metrics:[["8", "Standorte"], ["6 Monate", "vom Papier zum Live-Cockpit"], ["2", "Plattformen: Web und iOS"]],
    note:"Mittelstand · Head of UX / CX · Prozessdesign · Web und iOS", images:[]},

  ben:{name:"Ben App", client:"Ben App (eigenes Produkt)<br>Garage51 GmbH<br>seit 2024",
    lead1:"Ben holt Wartende aus dem Wartezimmer, ohne Konto, ohne App-Installation und ohne persönliche Daten.",
    lead2:"Ich habe gemeinsam mit den Gründern Produkt, UX, Design und Marke weitgehend allein entwickelt, von der ersten Skizze bis zum Marktstart.",
    body:"Volle Wartezimmer belasten Patienten und Personal. Bestehende Lösungen verlangen Telefonnummer, Konto oder App-Installation, das schafft Hürden und Datenschutzrisiken. Ben ist für jeden Dienstleister gebaut, bei dem Kunden warten. Das Konzept entwickelte ich mit den Gründern. Gespräche in Praxen und Krankenhäusern, Prototyp, MVP, App, Web-App, Website und Marke habe ich weitgehend allein umgesetzt.",
    result:"QR-Code an der Anmeldung scannen, gehen, per Push zurückgeholt werden, sobald man dran ist. Es wird nichts gespeichert, also gibt es nichts zu schützen. Grundlage: mehr als 40 Interviews mit der Zielgruppe.",
    metrics:[["0", "persönliche Daten nötig"], ["40+", "User Interviews"], ["3", "Plattformen: App, Web-App, Website"]],
    note:"SaaS · Produkt · Service Design · Behavioral Design", images:[]},

  cosmos:{name:"cosmos", client:"cosmos GmbH<br>Inhouse<br>2025",
    lead1:"cosmos zeigt Geschäftsführern in Echtzeit, ob ihre Maßnahmen die Unternehmensziele erreichen.",
    lead2:"Ich habe als Head of UX / CX die Geschäftsführung beraten, die UX-Strategie für den Rebrand gesetzt und aus zwei Teams ein Produktteam gemacht.",
    body:"Entscheider treffen Entscheidungen oft auf veralteten Zahlen. cosmos zeigt, wie Maßnahmen entlang der Customer Journey auf Unternehmensziele wirken. UX und Entwicklung arbeiteten getrennt, Releases stauten sich. Ich legte die UX-Strategie für den Rebrand fest, verband beide Teams zu einem Produktteam und baute Onboarding, TargetLens und KPI Map.",
    result:"Nach vier Wochen arbeitete das Produktteam in einem gemeinsamen Ablauf und lieferte schneller. Im März ging die Beta mit Marken aus dem DACH-Raum live. Nutzer bewerten cosmos auf OMR mit 4,9 von 5.",
    metrics:[["4 Wochen", "bis zum gemeinsamen Produktteam"], ["4 Monate", "vom Rebrand zur neuen Arbeitsweise"], ["4,9 / 5", "Bewertung auf OMR"]],
    note:"SaaS · Head of UX / CX · Teamaufbau · Rebrand", images:[]},

  auris:{name:"AURIS", client:"Samsung Deutschland und Österreich<br>Cheil Germany GmbH<br>2023–2024",
    lead1:"AURIS macht den Klang von 6 Soundbars mit einem Tipp vergleichbar, direkt am Regal.",
    lead2:"Ich habe als Head of UX / CX R&D das UX-Team geleitet, Samsung betreut und die Umsetzungspartner für den Rollout eingewiesen.",
    body:"Am Regal stehen immer mehr Soundbars, erklärt über Datenblätter, die niemand versteht. Den Unterschied hört man. Dazu ist es laut und die Aufmerksamkeit kurz. Ich reduzierte das Interface auf drei Informationen: welche Soundbar spielt, was sie unterscheidet, ein Tipp zum Wechseln. Film, Gaming und Sport bleiben beim Wechsel erhalten, damit Kunden denselben Moment vergleichen.",
    result:"Kunden wählen ein Szenario, tippen und hören den Unterschied sofort. Die Verweildauer stieg im Schnitt um 4 Minuten. Nach dem Start in DACH folgten weitere Länder. Samsung führt AURIS als Best Practice, mit Gold und Silber bei den Best Practice Shop Awards.",
    metrics:[["+4 Min.", "Verweildauer im Schnitt"], ["Gold und Silber", "Best Practice Shop Awards"], ["DACH", "Start, danach weitere Länder in Europa"]],
    note:"Retail · Phygital · Interface · Head of UX / CX R&D", images:[]},

  games:{name:"Black Friday", client:"Samsung Europe<br>Cheil Germany GmbH<br>2022–2025",
    lead1:"Samsung macht aus Black Friday ein Spiel, in dem Kunden den Rabatt selbst verdienen.",
    lead2:"Ich habe die Erlebnisse von 2022 bis 2025 mit Cheil Germany und BoraBora Studios für Samsung Europe gestaltet, 2023 als Head of UX.",
    body:"Zum Black Friday werben alle mit Rabatten. Samsung brauchte einen Grund, im Shop zu bleiben. Ich gestaltete drei Ausgaben: 2022 Level Up Your Deal, 2023 Smartopia (3D-Welt mit täglich neuem Spiel in 17 Ländern), 2025 Galaxy AI Arcade (26 Tage, 26 Länder, sechs Minispiele, Gewinner erhalten einen Rabattcode). Auszeichnungen: Cresta Bronze 2023, Cresta Finalist 2024.",
    result:"Smartopia 2023 war eine der erfolgreichsten Black-Weeks-Kampagnen von Samsung: 20 % mehr Umsatz als im Vorjahr, 63,5 % höhere Conversion bei Spielern, 27 % höherer Bestellwert pro Besucher.",
    metrics:[["+20 %", "Umsatz, Black Weeks 2023"], ["+63,5 %", "Conversion bei Spielern"], ["17", "Länder"]],
    note:"E-Commerce · Branded Game · Gamification · Head of UX", images:[]},

  amg:{name:"Mercedes-AMG", client:"Mercedes-AMG GmbH<br>BOLD digital GmbH<br>2018–2019",
    lead1:"Eine Bestellstrecke für Rennfahrzeuge, die der Käufer nie verlässt.",
    lead2:"Ich war Creative Lead bei BOLD digital GmbH, habe Markenwelt und Bestellprozess des AMG GT4 verantwortet und den Kundenkontakt bei AMG geführt.",
    body:"Ein Rennfahrzeug lässt sich in sehr vielen Varianten konfigurieren, und viele Optionen erschweren die Entscheidung. Ich analysierte alle digitalen Kanäle entlang der Customer Journey und entwarf eine zusammenhängende Erlebnisarchitektur: Konfigurator, Storytelling je Fahrzeug, Inhalte zu Events, die AMG-Performance-Website und der Bestellprozess für Kundensport-Fahrzeuge.",
    result:"Die Markenwelt führt von der Rennstrecke über die Konfiguration bis zum Kauf, ohne Sprung in einen Shop. Besucher blieben im Schnitt 4 Minuten länger, es gab 17 % mehr Konfigurationen und 35 % mehr Klicks.",
    metrics:[["+4 Min.", "Verweildauer im Schnitt"], ["+17 %", "Konfigurationen"], ["+35 %", "Click-through-Rate"]],
    note:"Premium-Marke · Creative Lead · Konfigurator und Bestellprozess", images:[]},

  smartways:{name:"SmartWays", client:"Samsung Deutschland<br>Cheil Germany GmbH<br>2019–2023",
    lead1:"SmartWays plant den Außendienst für 8.000 Samsung-Verkaufsstellen und spart Wege, Zeit und CO<sub>2</sub>.",
    lead2:"Ich habe als UX Lead im Cheil-Team Karte, Rollen und Designsystem für Web und Mobile gestaltet.",
    body:"Fahrer planten ihre Touren von Hand und schafften 2,5 Verkaufsstellen am Tag. Ich habe das Interaktionsmodell um die Karte gebaut: Disponenten sehen Fahrer, Gebiete und Ziele an einem Ort, Fahrer checken mobil ein. Ein Designsystem für Web und Mobile hält KI-Tourenplanung, Live-Tracking und Auswertung zusammen.",
    result:"Der Jahres-ROI stieg um 200 Prozent, die Store-Besuche verdoppelten sich, der CO<sub>2</sub>-Ausstoß im Außendienst sank um 22 Prozent und die Zeit im Back-Office um über 70 Prozent.",
    metrics:[["+200 %", "Jahres-ROI"], ["+100 %", "Store-Besuche"], ["−22 %", "CO<sub>2</sub> im Außendienst"]],
    note:"Plattform · UX Lead · Designsystem", images:[]},

  eintracht:{name:"mainaqila App", client:"Eintracht Frankfurt<br>Cheil Germany GmbH<br>2019–2023",
    lead1:"Die mainaqila-App von Eintracht Frankfurt bündelt Ticketing, Merchandising und mobiles Bezahlen und holte in zwei Wochen eine Million Downloads.",
    lead2:"Ich habe im Cheil-Team Strategie, Customer Journey im Stadion und UI mitgestaltet.",
    body:"Fans erleben ihren Verein im Stadion, im Shop und beim Ticketkauf, und jeder Weg lief getrennt. Ich habe die Herleitung in Workshops im Stadion mit den Projektverantwortlichen besprochen, die Customer Journey im Stadion als Entscheidungsgrundlage ausgearbeitet und das Core-Team von Sketch auf Figma umgestellt.",
    result:"Die App holte in zwei Wochen eine Million Downloads und Platz 1 im Store, die Mitgliederregistrierungen stiegen um 240 Prozent, die Nutzungszeit um 130 Prozent. Das Team arbeitete danach in einer gemeinsamen Figma-Datei.",
    metrics:[["1 Mio.", "Downloads in 2 Wochen"], ["+240 %", "Mitgliederregistrierung"], ["+130 %", "Nutzungszeit"]],
    note:"Mobile App · Strategie · Customer Journey · UI", images:[]},

  emojis:{name:"Land of Emojis", client:"Samsung Deutschland<br>Cheil Germany GmbH<br>2017",
    lead1:"Land of Emojis machte aus Selfies Emojis und aus einer Botschaft für Vielfalt ein Bild auf dem Brandenburger Tor.",
    lead2:"Ich war Art Director der App und aller digitalen Touchpoints im Cheil-Team, von der Landingpage bis zur Projektion.",
    body:"2017 standen Vielfalt und Zusammenhalt in Europa unter Druck. Die App macht aus einem Selfie ein persönliches Emoji-Set. Start war eine Anzeige in der BILD, dazu kamen interaktive Displays in Berlin. Am Tag der Deutschen Einheit zeigte eine Live-Projektion alle Emojis auf dem Brandenburger Tor, einer Fläche, die für Marken sonst gesperrt ist. Ich habe den Look and Feel von der Landingpage bis zur LED-Wand geführt.",
    result:"67 Millionen Medienkontakte, über 220.000 erstellte Emojis, nach Angaben von Cheil die bisher erfolgreichste Markenaktivierung von Samsung Deutschland. Dazu Red Dot Best of the Best 2018 (Lifestyle App), 3× Gold und der Grand Prix Digital beim Cristal Festival, der erste Grand Prix für Samsung Deutschland.",
    metrics:[["Red Dot", "Best of the Best 2018"], ["3× Gold", "Cristal Festival"], ["ca. 50", "Emotionen pro Emoji-Set"]],
    note:"Mobile App · Kampagne · Art Direction · UI", images:[]}
};

/* ============ Daten: Link-Profile (?f=plattform) ============ */
const PROFILES = {
  alle:{h1:"Customer Experience & Innovation Lead", cases:["reisacher","ben","cosmos","auris","games","amg","smartways","eintracht","emojis"]},
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
  return Object.prototype.hasOwnProperty.call(PROFILES, f) ? f : "alle";
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
  const h1 = $("h1");
  h1.textContent = "";
  p.h1.split("\n").forEach((line, i) => {
    if(i) h1.appendChild(document.createElement("br"));
    h1.appendChild(document.createTextNode(line));
  });
  $("intro").innerHTML = INTRO.map(t=>`<p>${t}</p>`).join("");
  $("intro-note").innerHTML = INTRO_NOTE;
  $("cases").innerHTML = p.cases.map(caseHTML).join("");
  measure();
  document.querySelectorAll(".slider").forEach(initSlider);
}
render();
window.addEventListener('resize', measure);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
