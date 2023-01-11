/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var hello = new LinkedList(value);
  hello.next = list;
  return hello;
}
