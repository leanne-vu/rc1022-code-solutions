const fs = require('fs');
function bye() {
  for (var i = 2; i < process.argv.length; i++) {
    if (i < i + 1) {
      fs.readFile(process.argv[i], 'utf8', (err, data) => {
        if (err) { throw err; }
        var hello = '';
        hello += data;
        console.log(hello);
      });

    }
  }
}
bye();
