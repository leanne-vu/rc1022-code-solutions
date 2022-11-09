var $display = document.querySelector('.countdown-display');
var count = 4;
function text() {
  if (count > 0) { count--; }
  $display.textContent = count;
  if (count === 0) {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(hello);
  }
}
var hello = setInterval(text, 1000);
