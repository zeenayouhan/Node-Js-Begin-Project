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

const path = require('path');

var pathobj= path.parse(__filename);
console.log(pathobj);