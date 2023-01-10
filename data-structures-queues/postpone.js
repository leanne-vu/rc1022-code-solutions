/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return queue;
  else {
    const front = queue.peek();
    queue.dequeue(front);
    queue.enqueue(front);
    return queue;
  }
}
