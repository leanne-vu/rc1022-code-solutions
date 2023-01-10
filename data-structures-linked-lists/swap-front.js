/* exported swapFront */

function swapFront(list) {
  if (list.next === null) { return list; } else {
    var hello1 = list.data;
    var hello2 = list.next.data;
    list.data = hello2;
    list.next.data = hello1;
    return list;
  }
}
