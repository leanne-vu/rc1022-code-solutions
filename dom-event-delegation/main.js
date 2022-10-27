var $tasklist = document.querySelector('.task-list');
$tasklist.addEventListener('click', tasklistclick);

function tasklistclick(event) {
  console.log('event target', event.target);
  console.log('event target tagname', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', closest);
    closest.remove();
  }

}
