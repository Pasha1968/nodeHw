const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
  
app.get("/:path", function(req, res){
       
    const path = req.params.path;
    fs.readdir(path, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
});
// получение одного пользователя по id

   
async function start(){
    try{
    app.listen(3000,function(){
        console.log('started on 3000')
    })
    }catch(e){
        console.log(e)
    }
}

start()