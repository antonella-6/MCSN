const infoButtonOpen = document.querySelector('.info-button-open');
const infoButtonClose = document.querySelector('.info-button-close');
const infoBox = document.querySelector('.info-box');
const archivioTable = document.querySelector('.archivio-table');

infoButtonOpen.addEventListener('click', e => {
  infoBox.style.transform = 'translateX(-436px)';
  archivioTable.classList.add('fix-archivio');
})

infoButtonClose.addEventListener('click', e => {
  infoBox.style.transform = 'translateX(436px)';
  archivioTable.classList.remove('fix-archivio');
})