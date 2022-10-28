const infoButtonOpen = document.querySelector(".info-button-open");
const infoButtonClose = document.querySelector(".info-button-close");
const infoBox = document.querySelector(".info-box");
const closeBox = document.querySelector(".close-box");

function openInfo() {
  document.getElementById("myInfoBox").style.width = "436px";
  document.getElementById("myInfoBox").style.left = "calc(100% - 436px)";
  closeBox.style.width = "calc(100% - 436px)";
  audio.pause();
  for (var i = 0; i < iconImg.length; i++) {
    removeClass();
  };
  for (var j = 0; j < items.length; j++) {
    items[j].style.opacity = 0;
  };
};

function closeInfo() {
  document.getElementById("myInfoBox").style.width = "0";
  document.getElementById("myInfoBox").style.left = "100%";
  closeBox.style.width = "0";
}