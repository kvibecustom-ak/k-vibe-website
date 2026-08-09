let collection="all",menTheme="all",womenTheme="all",kidsTheme="all";
const cards=[...document.querySelectorAll(".card")];

function apply(){
  cards.forEach(c=>{
    let ok=collection==="all"||c.dataset.cat===collection;
    if(collection==="men"&&menTheme!=="all") ok=ok&&c.dataset.theme===menTheme;
    if(collection==="women"&&womenTheme!=="all") ok=ok&&c.dataset.theme===womenTheme;
    if(collection==="kids"&&kidsTheme!=="all") ok=ok&&c.dataset.theme===kidsTheme;
    c.classList.toggle("hidden",!ok);
  });
}

document.querySelectorAll(".main").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".main").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  collection=b.dataset.filter;
  document.getElementById("menThemes")?.classList.toggle("show",collection==="men");
  document.getElementById("womenThemes")?.classList.toggle("show",collection==="women");
  document.getElementById("kidsThemes")?.classList.toggle("show",collection==="kids");
  apply();
});

document.querySelectorAll(".theme").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".theme").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); menTheme=b.dataset.theme; apply();
});

document.querySelectorAll(".wtheme").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".wtheme").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); womenTheme=b.dataset.theme; apply();
});

document.querySelectorAll(".ktheme").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".ktheme").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); kidsTheme=b.dataset.theme; apply();
});