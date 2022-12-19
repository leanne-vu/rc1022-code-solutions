const express = require('express');
const path = require('path');
var app = express();

const paths = path.join(__dirname, 'public');
const middleware = express.static(paths);
app.use(middleware);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
