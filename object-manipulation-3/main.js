console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Jack',
    hand: ''
  },
  {
    name: 'Jill',
    hand: ''
  },
  {
    name: 'Kate',
    hand: ''
  },
  {
    name: 'Eric',
    hand: ''
  }
];
const rank = ['Ace', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

function shuffle() {
  var shuffled = {
    rankShuffle: [],
    suitShuffle: []
  };
  shuffled.rankShuffle.push(_.shuffle(rank));
  shuffled.suitShuffle.push(_.shuffle(suit));
  return shuffled;
}

function deal() {
  for (var i = 0; i < players.length; i++) {
    players[i].hand = shuffle().rankShuffle[0][i] + ' ' + shuffle().suitShuffle[0][i];
  }
}
deal();
console.log(players);

function score() {
  const scores = [];
  for (var i = 0; i < players.length; i++) {
    var cardDealt = players[i].hand.split(' ');
    var scoreNum = cardDealt[0];
    switch (scoreNum) {
      case 'Ace':
        scores.push(11);
        break;
      case '1':
        scores.push(1);
        break;
      case '2':
        scores.push(2);
        break;
      case '3':
        scores.push(3);
        break;
      case '4':
        scores.push(4);
        break;
      case '5':
        scores.push(5);
        break;
      case '6':
        scores.push(6);
        break;
      case '7':
        scores.push(7);
        break;
      case '8':
        scores.push(8);
        break;
      case '9':
        scores.push(9);
        break;
      case '10':
        scores.push(10);
        break;
      case 'Jack':
        scores.push(10);
        break;
      case 'Queen':
        scores.push(10);
        break;
      case 'King':
        scores.push(10);
        break;
    }
  }
  console.log(players[_.indexOf(scores, _.max(scores))].name + ' is the winner!');
}
score();
