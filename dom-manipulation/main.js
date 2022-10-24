var numbersClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  numbersClicked++;
}
$hotButton.addEventListener('click', clickCounter);

function updateCounter(event) {
  $clickCount.textContent = 'Clicks: ' + numbersClicked;
}
$hotButton.addEventListener('click', updateCounter);

function updateClass(event) {
  if (numbersClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numbersClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numbersClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numbersClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numbersClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else $hotButton.className = 'hot-button nuclear';
}
$hotButton.addEventListener('click', updateClass);
