var SAI = require('sai-language'); 
SAI.Configure({paths:[__dirname]});
var num=process.argv[2];
if (!num) {
  console.log("USAGE: advent [1-25]");
} else {
  new SAI.Require('Advent'+process.argv[2])();  
}
