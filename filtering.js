var fs = require('fs');
var path = require('path');

module.exports = function(filepath, extension, callback){
  fs.readdir(filepath, function (err, files){
    if(err){
      callback(err);
    }else{
      var suffix = '.' + extension;
      var output = []
      for(var i = 0; i < files.length; i++){
        if(path.extname(files[i]) == suffix){
          output.push(files[i]);
        }
      };
      callback(null, output);
    }
  });
};
