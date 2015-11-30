var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var array = buff.toString().split('\n');
console.log(array.length -1);
