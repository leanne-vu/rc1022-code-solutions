/* exported removeTail */

function removeTail(list) {
  if (list.next === null) { return list; } else {
    let previous;
    while (list.next !== null) {
      previous = list;
      list = list.next;
    } previous.next = null;
    return previous;
  }
}
