var $span = document.querySelectorAll('span');
document.addEventListener('keydown', right);
var $popout = document.querySelector('.popout');
var counter = 0;
function right(event) {
  if (counter === $span.length - 1) {
    $popout.className = 'row bye';
  }
  if (event.key === $span[counter].textContent) {
    $span[counter].className = 'green';
    $span[counter + 1].className = 'normal';
    counter++;
  } else if (event.key !== $span[counter].textContent) {
    $span[counter].className = 'red';
  }
}

var $button = document.querySelector('.no-button');
$button.addEventListener('click', close);
function close(event) {
  $popout.className = 'row hello';
  counter = 0;
  for (var i = 0; i < $span.length; i++) { $span[i].className = 'redo'; }
}
