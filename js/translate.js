/* Translation Functions */

var italian = localStorage.getItem('[lang="it"]');
var english = localStorage.getItem('[lang="en"]');
var french = localStorage.getItem('[lang="fr"]');
var german = localStorage.getItem('[lang="de"]');
console.log("Italian is " + italian);
console.log("English is " + english);
console.log("French is " + french);
console.log("German is " + german);

if ((italian == null) && (english == null) && (french == null) && (german == null) ){
    localStorage.setItem('[lang="it"]', true);
    $('#switch-it').addClass('active-language');
  } else if (german == 'true') {
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
  audio.pause();
  removeClass();
  for (var i = 0; i < items.length; i++) {
    items[i].style.opacity = 0;
  }

}
});

/* console.log("set lenguage"); */

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
  audio.pause();
  removeClass();
  for (var i = 0; i < items.length; i++) {
    items[i].style.opacity = 0;
  }
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
  audio.pause();
  removeClass();
  for (var i = 0; i < items.length; i++) {
    items[i].style.opacity = 0;
  }
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
  removeClass();
  audio.pause();
  for (var i = 0; i < items.length; i++) {
    items[i].style.opacity = 0;
  }
}
});


