//function SayHello(name){
    //console.log('Hello '+name);}

//SayHello('Zeena');

//var message="Hi";
//console.log(global.message);

//console.log(); global


//console.log(module);

//var logger = require('./Logger');

//logger("message");
//console.log(__filename);
//console.log(__dirname);


//path module
//const path = require('path');

//var pathobj= path.parse(__filename);
//console.log(pathobj);


//os module
//var os = require('os');

//var totalmemory= os.totalmem();
//var freeMem= os.freemem();

//console.log(`TotalMemory ${totalmemory}`);
//console.log(`FreeMemory ${freeMem}`);

//filesystem module
//const fs= require('fs');

//const file=fs.readdirSync('./');

//console.log(file);

//fs.readdir('./j',function(err,files){
   // if(err) console.log("Error",err);
 //   else console.log('Result',files);
//})

//event module
const EventEmitter = require('events');

const emmiter= new EventEmitter();

//emmiter.on('MessageLogged',function(){
//    console.log('Worked');
//});

//emmiter.emit('MessageLogged');

//Event Arguments
emmiter.on('MessageLogged',(arg)=>{
    console.log("listner",arg);
});

emmiter.emit('MessageLogged',{
    id:1,
    url:'zeena'
});
