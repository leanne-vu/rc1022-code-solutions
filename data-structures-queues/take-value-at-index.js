/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) { return undefined; }
  let count = index;
  while (count > 0) {
    const hello = queue.dequeue();
    queue.enqueue(hello);
    count--;
  }
  return queue.dequeue();
}
