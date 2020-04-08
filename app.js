

//run ======> node app.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
 readline.question('Please Enter File Name:  ', name => {
    console.log(`Hey there ${name}!`);
    if(`${name}.txt`)



var fs = require('fs');
// writeFile function with filename, content and callback function
fs.writeFile(`./data/${name}.txt`, `you are awesome ${name}`, function (err) {
  if (err) 
  {
      throw err;
    }else{
  console.log('File is created successfully.');
    }
}); 
});