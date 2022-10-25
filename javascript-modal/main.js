var $openModal = document.querySelector('.button-left');
var $no = document.querySelector('.no-button');
var $row = document.querySelector('.row');
var openModalclicker = 0;
var noclicker = 0;

function openModalClick(event) {
  openModalclicker++;

}
$openModal.addEventListener('click', openModalClick);

function noClick(event) {
  noclicker++;
}
$no.addEventListener('click', noClick);

function clickedOpenModal(event) {
  if (openModalclicker % 2 === 0) {
    $row.className = 'row hello';
  } else $row.className = 'row bye';
  openModalclicker = 0;
}
$openModal.addEventListener('click', clickedOpenModal);

function noClickedOn(event) {
  if (noclicker % 2 === 0) {
    $row.className = 'row bye';
  } else $row.className = 'row hello';
  noclicker = 0;
}
$no.addEventListener('click', noClickedOn);
