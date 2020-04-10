

var fs = require('fs');
//run ======> node app.js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  

 var data;
 var user;
try { 
  data = fs.readFileSync('./myJson.json', (err, data) => { 
    console.log(err);
    console.log(data); 
   
  });
  if(data != null)
  {
    user = JSON.parse(data)
    
  }
  else
  {
   console.log("data is null")
  }
 
} 
catch (err) 
{ 
  console.log(err) 
}




 readline.question('Please Enter File Name:  ', name => {
    console.log(`Hey there ${name}!`);
    if(user != null)
    {
      user.push({"filename":name});
    }else{
    
      console.log("push data")
    user = [{ 
      filename :name  
  }];
}
   /////push the data the json file
  let data = JSON.stringify(user, null, 2);

  fs.writeFileSync('./myJson.json', data);


// writeFile function with filename and put it in the file
fs.writeFile(`${name}.txt`, `you are awesome ${name}`, function (err) {
  if (err) 
  {
      throw err;
    }else{
  console.log('File is created successfully.');
    }
}); 


});

