const express = require('express');
var nextId = 1;
const grades = {};

const app = express();
app.get('/api/grades', (req, res) => {
  var array = [];
  for (var key in grades) {
    array.push(grades[key]);
  }
  res.status(200).json(array);
}
);

app.use(express.json());
app.post('/api/grades', (req, res) => {
  grades[nextId] = (req.body);
  req.body.id = nextId;
  nextId++;
  res.sendStatus(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
