/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  var previous = stack.pop();
  while (stack.peek() !== undefined) {
    const next = stack.pop();
    if (next > previous) {
      previous = next;
    }
  }
  return previous;
}
