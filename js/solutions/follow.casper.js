var users = ['subelsky','bmorejs'];
var casper = require('casper').create();

var idx,data,user;
var length = users.length;

casper.start();

for (idx=0; idx < length; idx++) {
  user = users[idx];

  casper.thenOpen('http://mobile.twitter.com/' + user,function() {
    data = this.evaluate(function(location) {
      return document.querySelector('div.profile td.stat.stat-last div.statnum').innerText;
    });

    this.echo(user + ": " + data);
  });
}

casper.run();
