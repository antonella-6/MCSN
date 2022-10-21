const infoButtonOpen = document.querySelector(".info-button-open");
const infoButtonClose = document.querySelector(".info-button-close");
const infoBox = document.querySelector(".info-box");

function openInfo() {
  document.getElementById("myInfoBox").style.width = "436px";
  document.getElementById("myInfoBox").style.left = "calc(100% - 436px)";
  prev.classList.add("is-hidden");
  next.classList.add("is-hidden");
  
}

function closeInfo() {
  document.getElementById("myInfoBox").style.width = "0";
  document.getElementById("myInfoBox").style.left = "100%";
  prev.classList.remove("is-hidden");
  next.classList.remove("is-hidden");
}

function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
      $(new Image()).src = this;

  });
}


preload([
  'assets/images/aquila_reale.jpg',
  'assets/images/arvicola_delle_nevi.jpg',
  'assets/images/camoscio_F.jpg',
  'assets/images/camoscio_M.jpg',
  'assets/images/codirosso_spazzacamino.jpg',
  'assets/images/codirossone.jpg',
  'assets/images/coturnice.jpg',
  'assets/images/culbianco.jpg',
  'assets/images/fringuello_alpino.jpg',
  'assets/images/gracchio_alpino.jpg',
  'assets/images/gracchio_corallino.jpg',
  'assets/images/lucertola_vivipera.jpg',
  'assets/images/marasso.jpg',
  'assets/images/marmotta.jpg',
  'assets/images/merlo_dal_collare.jpg',
  'assets/images/passera_scopaiola.jpg',
  'assets/images/picchio_muraiolo.jpg',
  'assets/images/salamandra_nera.jpg',
  'assets/images/sordone.jpg',
  'assets/images/spioncello.jpg',
  'assets/images/stambecco_alpino_F.jpg',
  'assets/images/stambecco_alpino_M.jpg',
  'assets/images/topo_selvatico_alpino.jpg',
  'assets/images/toporagno_alpino.jpg'
]);
console.log('preloaded!');