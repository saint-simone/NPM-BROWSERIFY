var moment = require("moment");
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format('LL');

var myList = [1, 2, 1, 1, 4, 4, 7, 6, 5, 4, 9, 3, 3];

var myUniqueList = unique(myList);

console.log(myUniqueList);


// I experienced an error when using 'require' because I understand node
// is a server side technology but I used a website called browserify so that the browser can understand the language.
// https://browserify.org/
