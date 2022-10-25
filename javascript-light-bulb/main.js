var $button = document.querySelector('button');
var $body = document.querySelector('body');
var clicks = 0;
function clickCounter(event) {
  clicks++;

}
$button.addEventListener('click', clickCounter);

function flipped(event) {
  if (clicks % 2 === 0) {
    $button.className = 'lightswitch hello';
    $body.className = 'yellow';
  } else {
    $button.className = 'lightswitch bye';
    $body.className = 'grey';

  }

}
$button.addEventListener('click', flipped);
