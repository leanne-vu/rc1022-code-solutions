function getRangeReport(start, end) {
  var object = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  };
  for (var i = start; i <= end; i++) {
    object.range.push(i);
    object.total += i;
    if (i % 2 === 0) { object.evens.push(i); }
    if (i % 2 !== 0) { object.odds.push(i); }
  } object.average = (object.total) / (object.range.length);
  return object;
}
