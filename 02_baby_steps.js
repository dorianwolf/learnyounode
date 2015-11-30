var sum = 0;
var array = process.argv;
array.splice(0, 2);
for(var i = 0; i < array.length; i++){
  sum += +array[i];
};
console.log(sum);
