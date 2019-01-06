var http =require("http");
var express=require("express");
var app =express();
var loginDetails=require("./login.json");

let BodyParser=require('body-parser');
app.use(BodyParser.json({limit :'10mb'}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})

var value=false;

app.get("/",function(req,res){
let route={
    host:'localhost',
    port:1000,
    path:req.originalUrl
    };
    console.log(req.originalUrl+" url path");

http.get(route,function(response){

    var data="";
    response.on('data', (chunk) => {
       // response.setEncoding('utf8');
        data += chunk;
      });
     
      response.on('end', () => {
         console.log(data +" data received from microserve2 ");
          res.send(data);
    });
    }).on('error', function(error) {
        console.log("Got error: " + error.message);
      });

})


app.post("/",function(req,res){
    let body=req.body;

    let index=loginDetails.findIndex(x=>((x.name==body.userNameEmail)||(x.email==body.userNameEmail))&&(x.password==body.password))
    if(index==-1){
           res.send({id:0,msg:"user doesn't exist / password incorrect"});
          
    }
    else {
         res.send({id:1,msg:"user  exist"});
      
    }
})

app.post("/register",function(req,res){
    let body=req.body;

    let index=loginDetails.findIndex(x=>((x.name==body.name)||(x.email==body.email) ))

 if(index==-1){
     console.log("regestration details  "+body.name);
    loginDetails.push(body);
    console.log("register post below");
    console.log(loginDetails);
    res.send(loginDetails);
    // let route={
    //     host:'localhost',
    //     port:1000,
    //     path:req.originalUrl
    //     };
    //     console.log(req.originalUrl+" url path");

    // http.post(route,function(response){
    
    //     var data="";
    //     response.on('data', (chunk) => {
    //         data += chunk;
    //       });
         
    //       response.on('end', () => {
    //          console.log(data +" data received from microserve2 ");
    //           res.send(data);
    //     });
    //     }).on('error', function(error) {
    //         console.log("Got error: " + error.message);
    //       });
         
    }
 else {
         res.send({id:1,msg:"user already exist"});
  
    }
})



app.all('*',(req,res)=>{ 
res.end(" 404 error ");
});


app.listen(3000,function(){
    console.log("port 3000 started");
})