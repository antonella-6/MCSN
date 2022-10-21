var isBusy = false;
const evento = new Event("end");
var audio = new Audio();
const iconImg = document.querySelectorAll('.icon');
var mainAudio = document.querySelectorAll('.main-audio')

for (var i = 0; i < iconImg.length; i++) {
  /* console.log(iconImg[i]); */
  var iconType = iconImg[i].getAttribute('data-type');
  var iconSrc = "assets/icons/" + iconType + ".svg";
  iconImg[i].classList.remove('image');

  console.log(iconType);
  console.log(iconSrc);

  iconImg[i].style.backgroundImage = 'url(' + iconSrc + ')';

  iconImg[i].addEventListener("click", function () {
    removeClass();
    var imgName = event.target.getAttribute("content");
    var imgSrc = "assets/images/" + imgName + ".jpg";
    console.log('cliked');
    this.style.backgroundImage = 'url(' + imgSrc + ')';
    this.classList.remove('icon');
    this.classList.add('image');
  });
};

for (var i = 0; i < mainAudio.length; i++) {
  mainAudio[i].addEventListener("click", function () {
    console.log('hello');
    removeClass();
    
  
  });

  }

function removeClass() {
  for (var i = 0; i < iconImg.length; i++) {
    var iconType = iconImg[i].getAttribute('data-type');
    var iconSrc = "assets/icons/" + iconType + ".svg";
    iconImg[i].style.backgroundImage = 'url(' + iconSrc + ')';
    iconImg[i].classList.remove('image');
    iconImg[i].classList.add('icon');
  }
}


$(".btnAudio").on("click", function () {
  var src =
    "./assets/sounds/" +
    this.id +
    ".mp3"; /* AUDIO FILE NAME SAME INTO THE HTML AUDIO LOAD */
  audio.src = src;
  audio.dispatchEvent(evento);

  isBusy = true;

  var items = document.getElementsByClassName("audioControl");
  for (var i = 0; i < items.length; i++) {
    items[i].style.opacity = 1;
  }

  audio.play();

  audio.addEventListener("timeupdate", () => {
    var seconds = audio.currentTime;
    minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    document.getElementById(
      "progressAudioTime"
    ).innerHTML = `${minutes}:${seconds}`;
    document.getElementById("progressAudioBar").value =
      (audio.currentTime / audio.duration) * 100;
  });

  audio.addEventListener("ended", () => {
    isBusy = false;
    for (var i = 0; i < iconImg.length; i++) {
      var iconType = iconImg[i].getAttribute('data-type');
      var iconSrc = "assets/icons/" + iconType + ".svg";
      iconImg[i].style.backgroundImage = 'url(' + iconSrc + ')';
      iconImg[i].classList.remove('image');
      iconImg[i].classList.add('icon');
    }

  });

  audio.addEventListener("end", () => {
    audio.pause();

  });
});


function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
      $('<img/>')[0].src = this;
      // Alternatively you could use:
      // (new Image()).src = this;
  });
}

// Usage:

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