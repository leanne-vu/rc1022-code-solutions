/* exported removeNext */

function removeNext(list) {
  if (list.next === null) { return list; } else {
    var bye = list.next.next;
    list.next = bye;
  }
}
