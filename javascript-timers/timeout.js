function timer() {
  var $message = document.querySelector('.message');
  if ($message.textContent === '...') { $message.textContent = 'Hello There'; }
}
setTimeout(
  timer, 2 * 1000
);
