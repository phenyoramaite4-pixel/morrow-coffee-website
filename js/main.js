// Real photos: drop files named as below into the images/ folder (or change the paths/URLs).
// Any slot whose file is missing keeps the built-in artwork.
var IMAGES={hero:"images/hero.jpg",about:"images/about.jpg",brew:"images/brew.jpg",latte:"images/latte.jpg",croissant:"images/croissant.jpg",espresso:"images/espresso.jpg"};
document.querySelectorAll(".ph[data-k]").forEach(function(f){var u=IMAGES[f.dataset.k],i=f.querySelector("img");if(u&&i){i.onload=function(){f.classList.add("on")};i.src=u}});
document.querySelectorAll(".pile").forEach(function(g,n){var s=11+n*37,h="";function r(){s=(s*9301+49297)%233280;return s/233280}
for(var k=0;k<150;k++){var x=r()*470-10,y=r()*410-10,w=34+r()*16;h+='<use href="#bean" x="'+x.toFixed(0)+'" y="'+y.toFixed(0)+'" width="'+w.toFixed(0)+'" height="'+(w*1.4).toFixed(0)+'" transform="rotate('+(r()*360).toFixed(0)+' '+(x+w/2).toFixed(0)+' '+(y+w*.7).toFixed(0)+')"/>'}
g.innerHTML=h});
var P=["home","about","menu","brew","serve","visit"],T={home:"Home",about:"About",menu:"Our Menu",brew:"How We Brew",serve:"Who We Serve",visit:"Visit"};
function route(){var h=(location.hash||"").slice(1);if(P.indexOf(h)<0)h="home";
P.forEach(function(p){document.getElementById("p-"+p).hidden=(p!==h)});
document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
document.title=(h==="home"?"":T[h]+" · ")+"Morrow Coffee Roasters";window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
document.getElementById("bk").addEventListener("submit",function(e){e.preventDefault();var d=new FormData(e.target);
var b="Name: "+d.get("name")+"\nContact: "+d.get("contact")+"\nDate and time: "+d.get("when")+"\nGuests or items: "+d.get("qty")+"\n\n"+d.get("msg");
var o=document.getElementById("ok");o.textContent="Thanks, "+d.get("name")+". We’ve received your request ("+d.get("type").toLowerCase()+") and will confirm by email shortly.";o.hidden=false;e.target.reset()});
