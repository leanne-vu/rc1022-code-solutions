/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) { return undefined; }
  const put = stack.pop();
  var hello = stack.peek();
  stack.push(put);
  return hello;
}
