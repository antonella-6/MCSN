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

/* Translation Functions */


var italian = localStorage.getItem('[lang="it"]');
var english = localStorage.getItem('[lang="en"]');
var french = localStorage.getItem('[lang="fr"]');
var german = localStorage.getItem('[lang="de"]');
console.log("Italian is " + italian);
console.log("English is " + english);
console.log("French is " + french);
console.log("German is " + german);

$(document).ready(function() {

if (german == 'true') {
  $('[lang="it"]').hide();
  $('[lang="en"]').hide();
  $('[lang="fr"]').hide();
  $('#switch-de').addClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
  $('#switch-it').removeClass('active-language');
} else if (italian == 'true') {
  $('[lang="en"]').hide();
  $('[lang="fr"]').hide();
  $('[lang="de"]').hide();
  $('#switch-it').addClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
  $('#switch-de').removeClass('active-language');
} else if (english == 'true') {
  $('[lang="it"]').hide();
  $('[lang="fr"]').hide();
  $('[lang="de"]').hide();
  $('#switch-en').addClass('active-language');
  $('#switch-it').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
  $('#switch-de').removeClass('active-language');
} else if (french == 'true') {
  $('[lang="it"]').hide();
  $('[lang="en"]').hide();
  $('[lang="de"]').hide();
  $('#switch-fr').addClass('active-language');
  $('#switch-it').removeClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-de').removeClass('active-language');
}
});

$('#switch-it').click(0, function() {
  if ( $('[lang="it"]').is(':visible')) {
    console.log("Italian Selected.");
} else {
  $('[lang="it"]').toggle();
  $('[lang="en"]').hide();
  $('[lang="fr"]').hide();
  $('[lang="de"]').hide();
  localStorage.setItem('[lang="it"]', true);
  localStorage.setItem('[lang="en"]', false);
  localStorage.setItem('[lang="fr"]', false);
  localStorage.setItem('[lang="de"]', false);
  $('#switch-it').addClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
  $('#switch-de').removeClass('active-language');

}
});

$('#switch-en').click(function() {
  if ( $('[lang="en"]').is(':visible')) {
    console.log("English Selected.");
} else {
  $('[lang="en"]').toggle();
  $('[lang="it"]').hide();
  $('[lang="fr"]').hide();
  $('[lang="de"]').hide();
  localStorage.setItem('[lang="it"]', false);
  localStorage.setItem('[lang="en"]', true);
  localStorage.setItem('[lang="fr"]', false);
  localStorage.setItem('[lang="de"]', false);
  $('#switch-en').addClass('active-language');
  $('#switch-it').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
  $('#switch-de').removeClass('active-language');
}
});

$('#switch-fr').click(function() {
  if ( $('[lang="fr"]').is(':visible')) {
    console.log("French Selected.");
} else {
  $('[lang="fr"]').toggle();
  $('[lang="it"]').hide();
  $('[lang="en"]').hide();
  $('[lang="de"]').hide();
  localStorage.setItem('[lang="it"]', false);
  localStorage.setItem('[lang="en"]', false);
  localStorage.setItem('[lang="fr"]', true);
  localStorage.setItem('[lang="de"]', false);
  $('#switch-fr').addClass('active-language');
  $('#switch-it').removeClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-de').removeClass('active-language');
}
});

$('#switch-de').click(function() {
  if ( $('[lang="de"]').is(':visible')) {
    console.log("German Selected.");
} else {
  $('[lang="de"]').toggle();
  $('[lang="it"]').hide();
  $('[lang="en"]').hide();
  $('[lang="fr"]').hide();
  localStorage.setItem('[lang="it"]', false);
  localStorage.setItem('[lang="en"]', false);
  localStorage.setItem('[lang="fr"]', false);
  localStorage.setItem('[lang="de"]', true);
  $('#switch-de').addClass('active-language');
  $('#switch-it').removeClass('active-language');
  $('#switch-en').removeClass('active-language');
  $('#switch-fr').removeClass('active-language');
}
});