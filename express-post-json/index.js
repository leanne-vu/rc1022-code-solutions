const express = require('express');
var nextId = 1;
const grades = [];

const app = express();
app.get('/api/grades', (req, res) => {
  res.status(200).json(grades);
}
);

app.use(express.json());
app.post('/api/grades', (req, res) => {
  grades.push(req.body);
  req.body.id = nextId;
  nextId++;
  res.sendStatus(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
