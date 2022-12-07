const express = require('express');
const obj = require('./data.json');
const fs = require('fs');
const app = express();
app.get('/api/notes', (req, res) => {
  var array = [];
  for (var key in obj.notes) {
    array.push(obj.notes[key]);
  }

  res.status(200).json(array);
}
);
app.get('/api/notes/:id', (req, res) => {
  var number1 = Math.floor(req.params.id);

  if (number1 <= 0 || Number.isInteger(number1) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (obj.notes[number1]) {
    var note = obj.notes[req.params.id];
    res.status(200).json(note);
  }
  if (!obj.notes[number1]) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  }
}
);

app.use(express.json());

app.post('/api/notes', (req, res, err) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  if (req.body.content) {
    obj.notes[obj.nextId] = req.body;
    req.body.id = obj.nextId;
    obj.nextId++;
    const newObj = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', newObj, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  var number = Math.floor(req.params.id);
  if (number <= 0 || Number.isInteger(number) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!obj.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
    return;
  }

  delete obj.notes[req.params.id];
  const newObj = JSON.stringify(obj, null, 2);
  fs.writeFile('data.json', newObj, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(204).json(req.body);
    }
  });

});
app.put('/api/notes/:id', (req, res) => {
  var number = Math.floor(req.params.id);

  if (req.params.id <= 0 || Number.isInteger(number) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  if (req.params.id > 0 && req.body.content) {
    if (!obj.notes[req.params.id]) {
      res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
      return;
    } if (obj.notes[req.params.id]) {
      req.body.id = Number(req.params.id);
      obj.notes[req.params.id] = req.body;
      const newObj = JSON.stringify(obj, null, 2);
      fs.writeFile('data.json', newObj, 'utf8', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(200).json(req.body);
        }
      });
    }
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
