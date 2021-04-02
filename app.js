const express = require("express");
const fs = require("fs");
const dirTree = require("directory-tree");
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
  
// app.get("/:path", function(req, res){
app.get("/", function(req, res){
    var responce
   // const path = req.params.path;
    const path = req.param('path');
    const tree = dirTree(path);
    if (tree.type == "file") {
        console.log("file chel");
        res.send(
            tree.path
        )
    }
    res.send({
        tree
    })
    console.log(path);
    // fs.readdir(path, (err, files) => {
    //   files.forEach(file => {
    //     console.log(file);
    //     responce = file;
    //   });
    // });
    // console.log(responce);
    // res.send({
    //     responce,
    // })
});

   
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