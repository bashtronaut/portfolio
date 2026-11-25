/* ============ Daten: Über mich ============ */
const INTRO = [
  "Zu mir kommen Teams, die feststecken. Ein Produkt, das niemand versteht. Eine Verkaufsfläche, an der Kunden vorbeilaufen. Ein Ablauf, der jeden Tag Geld kostet. Ich höre zu, messe, wähle den größten Hebel und baue die Lösung, bis sie läuft.",
  "In 18 Jahren habe ich für Samsung, DHL, Mercedes-AMG und Eintracht Frankfurt gearbeitet, in Konzernen, im Mittelstand und in Startups. Ich denke Design und Technik zusammen: Ich prüfe Machbarkeit und Aufwand, bevor ein Konzept Budget bekommt, und zeige Entscheidungen als klickbaren Prototyp statt als Folie."
];
const INTRO_NOTE = 'Red Dot Best of the Best 2018, Cresta Awards 2023 und 2024, Eurobest 2017, New York Festivals. Weitere auf der Seite <a href="awards.html">Awards</a>.';

/* ============ Daten: Cases ============
   images: Pfade unter /cases/<id>/ (jpg, webp oder mp4). Leer = grauer Platzhalter.
   Ordner auf deinem Rechner: smartways=SmartWay, reisacher=Reisacher, eintracht=Eintracht Frankfurt,
   auris=Soundbar-Samsung, games=BlackFriday, emojis=LoE-Samsung, cosmos=cosmos, amg=AMG */
const CASES = {
  reisacher:{name:"Reisacher", client:"Reisacher GmbH, Autohausgruppe",
    lead1:"Reisacher ersetzt Papier-Checklisten durch ein Portal, in dem 8 Standorte ihre Auslastung sehen.",
    lead2:"Ich habe es als Head of UX / CX von der Analyse bis zum Rollout verantwortet.",
    body:"Die Werkstätten arbeiteten mit Papier und verstreuten Abläufen, die Geschäftsführung sah Engpässe erst, wenn sie da waren. Ich sprach mit Mechanikern und Management und nahm alle Prozesse auf, bevor ein Screen entstand. Jede Rolle bekommt ihr eigenes Dashboard, Mechaniker arbeiten mit geführten Checklisten, die Geschäftsführung sieht die Auslastung aller Standorte in Echtzeit. Ein klickbarer HTML-Prototyp stand vor der Entwicklung, Machbarkeit und Aufwand habe ich mit dem Entwickler abgestimmt.",
    result:"Service-Teams arbeiten mit weniger Fehlern, das Management verteilt Kapazitäten über Standorte, bevor ein Stau entsteht. Für die Werkstatt entstand zusätzlich eine iOS-App mit Tagesübersicht und Fokus-Modus für die Zeiterfassung. Die gewohnten Abläufe blieben erhalten, damit das System angenommen wird.",
    metrics:[["8","Standorte"],["3","Monate bis zum Rollout"],["2","Plattformen: Web und iOS"]],
    note:"Mittelstand · Head of UX / CX · Web und iOS", images:[]},

  ben:{name:"Ben App", client:"Garage51 GmbH, eigenes Produkt",
    lead1:"Ben ersetzt die Warteschlange im Raum durch eine Warteliste auf dem Handy, ohne Konto und ohne persönliche Daten.",
    lead2:"Ich habe als Head of UX / CX Produkt, Marke und Auftritt von der Idee bis zum Marktstart gebaut.",
    body:"Ben ist für jeden Dienstleister gedacht, bei dem Kunden warten: Praxis, Werkstatt, Amt, Ladengeschäft. Wer Wartende digital benachrichtigen will, sammelt sonst Telefonnummern oder Konten. Das schreckt Kunden ab und bringt Anbieter in Datenschutz-Risiken. Ich habe den Ablauf deshalb ohne persönliche Daten gebaut: Kunden verbinden sich über ein anonymes Token, für kurze Besuche genügt ein QR-Code, eine Push-Nachricht ruft sie zurück. Vor dem Gestalten habe ich Interviews mit Anbietern und Wartenden geführt. Daraus entstanden die UX für Web, iOS und Android, die Marke, das UI-System und die gesamte Kommunikation vom Pitch-Deck über die Website bis zum Flyer.",
    result:"Anbieter bleiben DSGVO-konform, Wartende warten draußen und kommen zurück, wenn sie dran sind. Der Anbieter richtet Ben in unter 10 Minuten ein. Belastbare Nutzungszahlen aus dem laufenden Betrieb liegen noch nicht vor.",
    metrics:[["0","persönliche Daten nötig"],["< 10 Min.","Einrichtung pro Anbieter"],["3","Plattformen: Web, iOS, Android"]],
    note:"SaaS · Produkt · Behavioral Design", images:[]},

  cosmos:{name:"cosmos", client:"cosmos GmbH, vormals borntocreate",
    lead1:"cosmos zeigt Geschäftsführern Kennzahlen, Ziele und Markenausrichtung in Echtzeit.",
    lead2:"Ich habe als Head of UX / CX das Team und die UX des Produkts neu aufgestellt.",
    body:"Die Firma wandelte sich von der Agentur zum SaaS-Anbieter. UX und Entwicklung arbeiteten getrennt, Releases stauten sich. Ich beriet die Geschäftsführung bei der Ausrichtung, rekrutierte und führte das UX-Team und legte UX und Entwicklung zu einem Produktteam zusammen, mit klaren Rollen und festen Abstimmungsrunden. Als UX-Architektur baute ich den Onboarding-Userflow mit interaktiven In-App-Tutorials und die Darstellung von Zielen und Abweichungen: Wer ein Ziel verfehlt, sieht es sofort.",
    result:"Das Produktteam arbeitete nach vier Wochen in einem gemeinsamen Ablauf, Releases liefen schneller und mit weniger Reibung. Die Stelle entfiel nach vier Monaten durch eine Umstrukturierung der Firma, das Arbeitszeugnis hält ausdrücklich fest, dass dies keine Bewertung der Leistung ist.",
    metrics:[["4 Wochen","bis zum gemeinsamen Produktteam"],["4 Monate","Zeitraum 01 bis 04/2025"],["Echtzeit","Sicht auf Kennzahlen und Ziele"]],
    note:"SaaS · Head of UX / CX · Teamaufbau", images:[]},

  auris:{name:"AURIS", client:"Samsung Germany und Österreich, Cheil Germany",
    lead1:"AURIS lässt Kunden Soundbars am Regal in Minuten vergleichen statt in Datenblättern.",
    lead2:"Ich leitete Interface, Kundenbetreuung und Projektorganisation.",
    body:"Im Handel stehen immer mehr Soundbars nebeneinander, und kaum ein Kunde hört den Unterschied. Am Regal bleiben Sekunden: Es ist laut, Kunden laufen weiter, niemand liest eine Spezifikation. Ich wertete Durchlauf, Lautstärke und Aufmerksamkeitsspanne aus und reduzierte das Interface auf drei Dinge: welche Soundbar spielt, was sie von den anderen unterscheidet, wie man wechselt. Kunden wählen ein Szenario, Film, Gaming oder Sport, und hören denselben Moment auf jedem Gerät.",
    result:"Kunden bleiben im Schnitt 4 Minuten an der Wand. Das Konzept lief 2023 zuerst in Österreich und wurde danach in mehreren europäischen Ländern ausgerollt. Samsung führt es intern als Best Practice und zeichnete es 2025 zweimal mit Silber beim Best Practice Shop D-A-C-H aus. Die Arbeit mit Umsetzungspartner und Stakeholdern bei Samsung lag bei mir, vom Konzept bis zum Rollout.",
    metrics:[["4 Min.","Verweildauer im Schnitt"],["2× Silber","Samsung Awards 2025"],["AT bis EU","Rollout ab 2023"]],
    note:"Retail · Phygital · Interface", images:[]},

  games:{name:"Black Friday", client:"Samsung Europe, Cheil Germany, BoraBora Studios",
    lead1:"Samsung macht Black Friday zum Spiel.",
    lead2:"Ich habe die Erlebnisse von 2022 bis 2025 gestaltet, 2023 als Head of UX.",
    body:"Zum Black Friday werben alle mit Rabatten, ein Prozentzeichen mehr unterscheidet niemanden. Samsung brauchte einen Grund, im Shop zu bleiben und zu kaufen. Ich habe drei Ausgaben gestaltet. 2022 Level Up Your Deal: Jedes Level verbessert den Deal (Cresta Bronze 2023, New York Festivals Finalist). 2023 Smartopia: eine 3D-Welt mit täglich neuem Spiel für Deutschland und 16 weitere Länder, von der Spielwelt bis zum Kaufabschluss (Cresta Finalist 2024). 2025 Galaxy AI Arcade: 26 Tage, 26 Länder, sechs Minispiele, wer gewinnt, bekommt einen Rabattcode.",
    result:"Cheil nennt die Black Weeks 2023 die erfolgreichste Black-Weeks-Kampagne in der Geschichte von Samsung: 20 Prozent mehr Umsatz als im Vorjahr, 63,5 Prozent höhere Conversion bei Besuchern, die gespielt haben, und 27 Prozent höherer Bestellwert pro Besucher. Spiel und Warenkorb sind ein Ablauf: Wer gespielt hat, landet ohne Umweg beim Deal.",
    metrics:[["+20 %","Umsatz, Black Weeks 2023"],["+63,5 %","Conversion bei Spielern"],["17","Länder"]],
    note:"E-Commerce · Branded Game · Head of UX", images:[]},

  amg:{name:"Mercedes-AMG", client:"Mercedes-AMG, BOLD digital",
    lead1:"AMG verkauft einen Rennwagen, den man online bestellt.",
    lead2:"Ich habe als Creative Lead die digitale Markenwelt und den Bestellprozess für den AMG GT4 verantwortet.",
    body:"Ein Fahrzeug mit sechsstelligem Preis verkauft sich über Vertrauen und Begeisterung, nicht über Klicks. Ich analysierte alle digitalen Kanäle von AMG und stellte die Ergebnisse dem Kunden vor. Daraus und aus dem Kundenfeedback entstanden interaktive Module: ein Konfigurator, Storytelling je Fahrzeug, Inhalte zu Events und Community. Dazu gestaltete ich die AMG-Performance-Website und den Online-Bestellprozess für Kundensport-Fahrzeuge wie den AMG GT4.",
    result:"Marke, Konfiguration und Bestellung laufen in einem Ablauf zusammen, die Seite vermittelt Leistung als Gefühl, bevor jemand eine Zahl liest. Kundenkontakt und Präsentationen vor AMG habe ich über die gesamte Projektzeit selbst geführt.",
    metrics:[["GT4","Online-Bestellung für den Kundensport"],["3","interaktive Module"],["2018–19","Projektzeit bei BOLD digital"]],
    note:"Premium-Marke · Creative Lead · Konfigurator und Bestellprozess", images:[]},

  smartways:{name:"SmartWays", client:"Samsung Electronics Germany, Produkt von Cheil",
    lead1:"SmartWays plant den Außendienst für 8.000 Samsung-Verkaufsstellen.",
    lead2:"Ich habe das Produkt als UX Lead gestaltet: Karte, Rollen und Designsystem für Web und Mobile.",
    body:"Fahrer planten Touren von Hand und schafften 2,5 Verkaufsstellen am Tag. Ich baute das Interaktionsmodell um die Karte: Disponenten sehen Fahrer, Gebiete und Ziele an einem Ort, Fahrer checken mobil ein. Ein Designsystem für Web und Mobile hält KI-Tourenplanung, Live-Tracking und Auswertung zusammen.",
    result:"Laut Cheil stieg der Jahres-ROI um 200 Prozent, die Store-Besuche verdoppelten sich, der CO<sub>2</sub>-Ausstoß im Außendienst sank um 22 Prozent. Laut smart-ways.com sank die Back-Office-Zeit um über 70 Prozent.",
    metrics:[["+200 %","Jahres-ROI"],["+100 %","Store-Besuche"],["−22 %","CO<sub>2</sub> im Außendienst"]],
    note:"Plattform · UX Lead · Designsystem", images:[]},

  eintracht:{name:"Eintracht Frankfurt", client:"Cheil Germany",
    lead1:"Die Eintracht-App bündelt Ticketing, Merchandising und mobiles Bezahlen.",
    lead2:"Ich habe Strategie, Customer Journey im Stadion und UI mitgestaltet.",
    body:"Fans erleben ihren Verein im Stadion, im Shop und beim Ticketkauf, jeder Weg lief getrennt. Ich besprach Herleitungen in Workshops im Stadion mit den Projektownern, arbeitete die Customer Journey im Stadion als Entscheidungsgrundlage aus und führte das Core-Team von Sketch auf Figma.",
    result:"Laut Cheil holte die App in zwei Wochen eine Million Downloads und Platz 1 im Store, die Mitgliederregistrierungen stiegen um 240 Prozent. Danach arbeitete das Team in einer gemeinsamen Figma-Datei.",
    metrics:[["1 Mio.","Downloads in 2 Wochen"],["+240 %","Mitgliederregistrierung"],["+130 %","Nutzungszeit"]],
    note:"Mobile App · Strategie · Customer Journey · UI", images:[]},

  emojis:{name:"Land of Emojis", client:"Samsung Germany, Cheil Germany",
    lead1:"Land of Emojis machte aus Selfies Emojis und aus einer Botschaft ein Bild auf dem Brandenburger Tor.",
    lead2:"Ich war leitender Art Director der digitalen Touchpoints.",
    body:"Im Wahljahr 2017 stand Vielfalt in Europa unter Druck. Ich gestaltete die App, die aus einem Selfie ein persönliches Emoji-Set erzeugt, und führte Look and Feel von der Landingpage über LED-Wände bis zur Live-Projektion am Tag der Deutschen Einheit.",
    result:"Red Dot Best of the Best 2018 in der Kategorie Lifestyle App, mit meinem Namen unter Art Direction. Laut Arbeitszeugnis Cheil 2018 kamen 3× Gold und der Grand Prix Digital beim Cristal Festival dazu.",
    metrics:[["Red Dot","Best of the Best 2018"],["3× Gold","Cristal Festival"],["ca. 50","Emotionen pro Emoji-Set"]],
    note:"Mobile App · Kampagne · Art Direction", images:[]}
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
