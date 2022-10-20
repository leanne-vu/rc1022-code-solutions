/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  var string = '';
  for (var i = 0; i < values.length; i++) {
    var index = values[i];
    if (typeof index === 'string') { values.slice(string); } else { array.push(index); }
  } return array;
}
