/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  } return newArray;
}
