const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => {
  var array = [];
  for (var key in grades) {
    array.push(grades[key]);
  }
  res.status(200).json(array);
}
);
app.delete('/api/grades/:id', (req, res) => {
  if (!grades[req.params.id]) {
    res.sendStatus(404);
  } else {
    delete grades[req.params.id];
    res.sendStatus(204);
  }
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
