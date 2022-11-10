
function buttonClicked(event) {
  for (var i = 0; i < $button.length; i++) {
    if (event.target.tagName === 'BUTTON') {
      if ($button[i] === event.target) {
        $button[i].className = 'display';
        $img[i].className = 'show';
      }
      if ($button[i] !== event.target) {
        $button[i].className = 'non-display';
        $img[i].className = 'hidden';
      }
    }
  }
}

var $img = document.querySelectorAll('img');
var $button = document.querySelectorAll('button');
var $parent = document.querySelector('#buttons');
$parent.addEventListener('click', buttonClicked);

var count = 0;
function imageShown() {
  if (count >= 0) {
    $img[count].className = 'show';
    $button[count].className = 'display';
    for (var i = 0; i < $img.length; i++) {
      if ($img[i] !== $img[count]) {
        $img[i].className = 'hidden';
        $button[i].className = 'non-display';
      }
    }
  }count++;
  if (count > 4) { count = 0; } else if (count < 0) { count = 4; }
}
setInterval(imageShown, 3000);

document.addEventListener('click', arrowClicked);
function arrowClicked(event) {
  if (event.target.tagName === 'I') {
    if (event.target.className === 'left fa-solid fa-chevron-left') {
      if (count === 0) { count = $img.length; }
      if (count >= 0 + 1) { count--; }
      if (count >= 0 && count <= $img.length - 1) {
        $img[count].className = 'show';
        $button[count].className = 'display';
      }
    }
    if (event.target.className === 'right fa-solid fa-chevron-right') {
      if (count === ($img.length - 1)) { count = 0 - 1; }
      if (count <= $img.length - 2) { count++; }
      if ((count <= $img.length - 1) && (count >= 0)) {
        $img[count].className = 'show';
        $button[count].className = 'display';
      }
    } for (var i = 0; i < $img.length; i++) {
      if ($img[i] !== $img[count]) {
        $img[i].className = 'hidden';
        $button[i].className = 'non-display';
      }
    }
  }
}
