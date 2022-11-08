/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var hello = new Transaction('deposit', amount);
    this.transactions.push(hello);
    return true;
  } else return false;

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var bye = new Transaction('withdrawal', amount);
    this.transactions.push(bye);
    return true;
  } else return false;
};

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    }
  }
  var total = deposits - withdrawals;
  return total;
};
