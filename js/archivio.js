const infoButtonOpen = document.querySelector('.info-button-open');
const infoButtonClose = document.querySelector('.info-button-close');
const infoBox = document.querySelector('.info-box');

infoButtonOpen.addEventListener('click', e => {
  infoBox.style.transform = 'translateX(-430px)';
  prevButton.classList.add('is-hidden');
  nextButton.classList.add('is-hidden');
})

infoButtonClose.addEventListener('click', e => {
  infoBox.style.transform = 'translateX(430px)';
  prevButton.classList.remove('is-hidden');
  nextButton.classList.remove('is-hidden');
  
})