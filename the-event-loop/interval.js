let count = 3;
var interval = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else { console.log(count); }
  count--;
}, 1000);
