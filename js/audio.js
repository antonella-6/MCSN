var isBusy = false;
const evento = new Event("end");
var audio = new Audio();
const iconImg = document.querySelectorAll('.icon');
var mainAudio = document.querySelectorAll('.main-audio');
var noAudio = document.querySelectorAll('.no-audio');
var items = document.getElementsByClassName("audioControl");
var btnAudio = document.querySelectorAll('.btnAudio');

for (var i = 0; i < iconImg.length; i++) {
  var iconType = iconImg[i].getAttribute('data-type');
  var iconSrc = "assets/icons/" + iconType + ".svg";
  iconImg[i].style.backgroundImage = 'url(' + iconSrc + ')';

  iconImg[i].addEventListener("click", function () {
    if ((event.target.classList.contains('image')) == true) {
      removeClass();
    } else {
      removeClass();
      var imgName = event.target.getAttribute("content");
      var imgSrc = "assets/images/" + imgName + ".jpg";
      this.style.backgroundImage = 'url(' + imgSrc + ')';
      this.classList.remove('icon');
      this.classList.add('image');
      this.classList.add('active');
      console.log('clicked ' + imgName);
    }
  });
};

for (var i = 0; i < noAudio.length; i++) {
  noAudio[i].addEventListener("click", function () {
    audio.pause();
    for (var j = 0; j < items.length; j++) {
      items[j].style.opacity = 0;
    };
  });
};

for (var i = 0; i < mainAudio.length; i++) {
  mainAudio[i].addEventListener("click", function () {
    if ((event.target.classList.contains('active')) == true) {
      removeClass();
    } else { 
      removeClass();
      this.classList.add('active');
    }
  });
}

function removeClass() {
  for (var i = 0; i < iconImg.length; i++) {
    var iconType = iconImg[i].getAttribute('data-type');
    var iconSrc = "assets/icons/" + iconType + ".svg";
    iconImg[i].style.backgroundImage = 'url(' + iconSrc + ')';
    iconImg[i].classList.remove('image');
    iconImg[i].classList.remove('active');
    iconImg[i].classList.add('icon');
  }
  for (var i = 0; i < mainAudio.length; i++) {
    mainAudio[i].classList.remove('active');
  }
}


$(".btnAudio").on("click", function () { 
  console.log("active is: " + event.target.classList.contains('active'));
  
  if ((event.target.classList.contains('active') == true) ) {
    var src =
      "./assets/sounds/" +
      this.id +
      ".mp3"; /* AUDIO FILE NAME SAME INTO THE HTML AUDIO LOAD */
    audio.src = src;
    audio.dispatchEvent(evento);

    isBusy = true;
  
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
        console.log("Audio Finished");
        for (var j = 0; j < items.length; j++) {
          items[j].style.opacity = 0;
        }
      } 
    });
  
    audio.addEventListener("end", () => {
      audio.pause();
      console.log("audio paused");
    });
  
  } else if ( (event.target.classList.contains('active') == false)) {
    audio.pause();
    console.log("here");
    for (var i = 0; i < items.length; i++) {
      items[i].style.opacity = 0;
    }
  }
});



var preload = new Array();

// List the images to be loaded, each 
//   image assigned to preload[#], with 
//   consecutive numbering starting at 0.

preload[0] = "https://juanalzate29.github.io/MCSN/assets/images/aquila_reale.jpg";
preload[1] = "https://juanalzate29.github.io/MCSN/assets/images/arvicola_delle_nevi.jpg";
preload[2] = "https://juanalzate29.github.io/MCSN/assets/images/camoscio_F.jpg";
preload[3] = "https://juanalzate29.github.io/MCSN/assets/images/camoscio_M.jpg";
preload[4] = "https://juanalzate29.github.io/MCSN/assets/images/codirosso_spazzacamino.jpg";
preload[5] = "https://juanalzate29.github.io/MCSN/assets/images/codirossone.jpg";
preload[6] = "https://juanalzate29.github.io/MCSN/assets/images/coturnice.jpg";
preload[7] = "https://juanalzate29.github.io/MCSN/assets/images/culbianco.jpg";
preload[8] = "https://juanalzate29.github.io/MCSN/assets/images/gracchio_alpino.jpg";
preload[9] = "https://juanalzate29.github.io/MCSN/assets/images/gracchio_corallino.jpg";
preload[10] = "https://juanalzate29.github.io/MCSN/assets/images/lucertola_vivipera.jpg";
preload[11] = "https://juanalzate29.github.io/MCSN/assets/images/marasso.jpg";
preload[12] = "https://juanalzate29.github.io/MCSN/assets/images/marmotta.jpg";
preload[13] = "https://juanalzate29.github.io/MCSN/assets/images/merlo_dal_collare.jpg";
preload[14] = "https://juanalzate29.github.io/MCSN/assets/images/passera_scopaiola.jpg";
preload[15] = "https://juanalzate29.github.io/MCSN/assets/images/picchio_muraiolo.jpg";
preload[16] = "https://juanalzate29.github.io/MCSN/assets/images/salamandra_nera.jpg";
preload[17] = "https://juanalzate29.github.io/MCSN/assets/images/sordone.jpg";
preload[18] = "https://juanalzate29.github.io/MCSN/assets/images/spioncello.jpg";
preload[19] = "https://juanalzate29.github.io/MCSN/assets/images/stambecco_alpino_F.jpg";
preload[20] = "https://juanalzate29.github.io/MCSN/assets/images/stambecco_alpino_M.jpg";
preload[21] = "https://juanalzate29.github.io/MCSN/assets/images/topo_selvatico_alpino.jpg";
preload[22] = "https://juanalzate29.github.io/MCSN/assets/images/toporagno_alpino.jpg";

// Leave the next 5 lines as they are.
var loadedimages = new Array();
for (var i = 0; i < preload.length; i++) {
  loadedimages[i] = new Image();
  loadedimages[i].src = preload[i];
}