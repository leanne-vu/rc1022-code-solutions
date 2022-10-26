var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var allinput = { name, email, message }; console.log('Message data:', allinput);
  $form.reset();
});
