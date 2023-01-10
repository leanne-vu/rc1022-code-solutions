/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return undefined;
  const one = queue.dequeue();
  if (queue.peek() === undefined) {
    return one;
  }
  const second = queue.dequeue();
  if (one < second) {
    queue.enqueue(second);
    return one;
  }
  queue.enqueue(one);
  return second;
}
