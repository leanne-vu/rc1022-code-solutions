/* exported omit */
function omit(source, keys) {
  var final = {};
  for (const key in source) {
    if (!keys.includes(key)) final[key] = source[key];
  } return final;
}
