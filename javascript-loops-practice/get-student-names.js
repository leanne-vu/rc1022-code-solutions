/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    var index = students[i].name;
    names.push(index);
  } return names;
}
