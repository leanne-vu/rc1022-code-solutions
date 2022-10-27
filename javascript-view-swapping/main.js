var $tabcontainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', tabclicked);
function tabclicked(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else $tabs[i].className = 'tab';
    }
    var data = event.target.getAttribute('data-view');
    for (var z = 0; z < $views.length; z++) {
      if ($views[z].getAttribute('data-view') === data) {
        $views[z].className = 'view';
      } else $views[z].className = 'view hidden';
    }
  }
}
