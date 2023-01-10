/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    var hello = stack.pop();
    stack.push(value);
    stack.push(hello);
  }
}
