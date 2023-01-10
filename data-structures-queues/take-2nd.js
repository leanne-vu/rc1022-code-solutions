/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return undefined;
  else {
    const hello = queue.peek();
    const remove = queue.dequeue(hello);
    if (queue.peek() === undefined) {
      return remove;
    } else {
      var second = queue.peek();
      queue.dequeue(second);
      queue.enqueue(hello);
      return second;
    }
  }
}
