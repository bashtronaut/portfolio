/* Gemeinsam für alle Seiten */
/* Einbettung in fremde Seiten verhindern (frame-ancestors geht per Meta-Tag nicht) */
try{ if(window.top !== window.self){ document.documentElement.style.display = "none"; } }
catch(e){ document.documentElement.style.display = "none"; }
const EMAIL = "alexander.neusinger@icloud.com";

/* Erfahrungsjahre live: Zahl = aktuelles Jahr minus Startjahr (data-years) */
(function(){
  var y = new Date().getFullYear();
  document.querySelectorAll("[data-years]").forEach(function(e){
    var s = parseInt(e.getAttribute("data-years"), 10);
    if(s > 1990 && s <= y) e.textContent = String(y - s);
  });
})();

(function(){
  var mail = document.getElementById("mail");
  if(mail){ mail.textContent = EMAIL; mail.href = "mailto:" + EMAIL; }

  /* Empfänger-Link (?f=plattform) bei der Navigation zwischen Seiten behalten */
  var f = "";
  try{ f = new URLSearchParams(location.search).get("f") || ""; }catch(e){}
  if(!/^[a-z0-9_-]{1,30}$/i.test(f)) return;
  document.querySelectorAll('a[href="/"],a[href^="/lebenslauf"],a[href^="/awards"],a[href^="/#"]').forEach(function(a){
    var h = a.getAttribute("href"), i = h.indexOf("#");
    var path = i > -1 ? h.slice(0, i) : h, hash = i > -1 ? h.slice(i) : "";
    a.setAttribute("href", path + "?f=" + encodeURIComponent(f) + hash);
  });
})();

/* Adressleiste ohne .html anzeigen */
(function(){try{var p=location.pathname,n=p.replace(/\/index\.html$/,"/").replace(/\.html$/,"");if(n!==p)history.replaceState(null,"",n+location.search+location.hash);}catch(e){}})();
