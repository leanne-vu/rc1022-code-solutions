/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    var index = values[i];
    if (index === null) { values.slice(null); } else { array.push(index); }
  } return array;
}
