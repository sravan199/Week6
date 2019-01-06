var express=require("express");
var app =express();
var loginDetails=require("../apiGateway/login.json");

let BodyParser=require('body-parser');
app.use(BodyParser.json({limit :'10mb'}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})

app.get("/",function(req,res){
res.json(loginDetails);
})


app.all('*',(req,res)=>{ 
    
    res.end(" 404 error ");
    });
    
app.listen(1000,function(re,res){
    console.log("port 1000 started");
})