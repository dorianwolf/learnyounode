var path = require('path');
var fs = require('fs');
fs.readdir(process.argv[2], function (err, files){
  var suffix = '.' + process.argv[3];
  for(var i = 0; i < files.length; i++){
    if(path.extname(files[i]) == suffix){
      console.log(files[i]);
    }
  };
});
