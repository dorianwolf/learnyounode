var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err){
    console.log('error!');
  }else{
    var array = data.toString().split('\n');
    console.log(array.length -1);
  };
});
