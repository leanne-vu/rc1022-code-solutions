/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next === null) { return list; } else {
    const hello = new LinkedList(value);
    var hello1 = list.next;
    list.next = hello;
    list.next.next = hello1;
  }
}
