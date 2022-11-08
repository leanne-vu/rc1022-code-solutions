/* exported todos */
var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON != null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function storage(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});