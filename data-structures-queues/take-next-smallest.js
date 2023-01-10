/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) { return undefined; }
  const one = queue.dequeue();
  if (queue.peek() === undefined) {
    return one;
  }
  let check = false;
  let inline = one;
  while (!check) {
    const second = queue.peek();
    if (inline <= second) {
      check = true;
      return inline;
    }
    queue.enqueue(inline);
    inline = queue.dequeue(second);
  }
}
