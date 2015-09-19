
module.exports= function(object){
"use strict";
//stores all the options for the user
var terminal=object;
var taggies=[]; //stores the taggy codes

//modules load
var chalk= require('chalk');
var Q= require('q');
terminal.colors.default= chalk.white.bold;
terminal.default="";

//for error in the use of this library
var audreyErrors={
  color:{code:"E01", message:"There is no color defined in the view for "},
defined:{code:"E02", message:"Not defined "},
noComponent:{code:"E03", message:"There isn't a tag deffined in the view for "},
noColor:{code:"E04", message:"There is no colors object defined"},
};

//set the colors of the terminal
checkUserColors(terminal.colors);

var bool=true;
var ers;
var warn;
var suc;
var mess="";
var ret;

var properties= Object.getOwnPropertyNames(terminal);
var colors=Object.getOwnPropertyNames(terminal.colors);

//variables to control interfaces
var interf;
var interfPath;

var indexb;
var scionName;
var scionBlock;
var actualBlock;

var childProcess=[];
var count=0;
var recallback;

return{  
    //control error and mdules arrays
            seed: function(arrayPaths){ putSeeds(arrayPaths);},
            feed: function(index, message, aux){ addControl(index, message, aux);},
    //simple error messages
    printSuccess: function(message){aSuccess(message);},
    printWarning: function(message){aWarning(message);},
      printError: function(message){aError(message);},
    //run the debuger and print into terminal
           debug: function(boolean){bool= boolean;},
            talk: function(){talk();}, //print over screen
           write: function(data){mess+=data;},
       writeLine: function(data){mess+=data+"\n";},
    //return errors and other staff to the user        
       getErrors: function(){return terminal.errors;},
      getTaggies: function(){return taggies;},
         getData: function(){return updatedData;}
          
};

//SETS THE NEW AUDREY-TWO-MODULES
function putSeeds(arrayPaths){
  arrayPaths.forEach(function(element){
    var tagy={code:"", path:""};
    tagy.code= element.substr(element.length-2, element.length-1);
    tagy.path= element.substr(0, element.length-3);
    taggies.push(tagy);
  });

}


//FUNCTIONS FOR THE CLI RESPONSE..

 function checkUserColors(colorUser){
  if(terminal.colors){
    for(var name in colorUser){
      colorUser[name]= setUserColor(colorUser[name]);
      }
  }
  else{
    throw new Error("There is no colors object defined");
  }
}


function setUserColor(option){
  var col;

   switch (option){
          
                  case 'red':
                    col=chalk.red;
                    break;
                  case 'green':
                    col=chalk.green;
                    break;
                  case 'yellow':
                    col=chalk.yellow;
                    break;
                  case 'blue':
                    col=chalk.blue;
                    break;
                  case 'grey':
                    col=chalk.grey;
                    break;
                  case 'white':
                    col=chalk.white;
                    break;     
                  default:
                    col=option;
                    break;
                }
                return col;
}
//checks the colors in printBrand
function checkColors(name){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  var bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}

//print the ascii image brand
function printBrand(simName){
var name= simName.slice(2); //delete simbol of the name 
  checkProperties(name); 
  checkColors(name);
      console.log(); 
      process.stdout.write(terminal.colors[name](terminal[name]));
}

function addControl(ucode, umessage, uaux){//add error to audrey
  if(uaux && !terminal.colors.aux) terminal.colors.aux=terminal.colors.info;
  if(!terminal.errors) terminal.errors=[];
  var errObject={code: ucode, message: umessage, aux: uaux};
  terminal.errors.push(errObject);
}

function talk(){
/* prints on the console, check first for errors and 
 * prints the structure, it's the core of this program
 * follow it and you follow the code flow 
 */ 
   warn=0;
   ers=0;
   suc=0;
  //count errors and breaks if something is wrong
  terminal.errors.forEach(function(element){
    if(element.code[0]=== "E" ||element.code[0]=== "e"){
          ers++;
         // break;
    }
    else if(element.code[0]=== "W"|| element.code[0]=== "w"){
          warn++;       
   }
   else suc++;
 });
  terminal.ers= ers;
  terminal.warn=warn;
  terminal.suc=suc;

//check the header and print it, then the body
steps(function(){
checkCallback("header", function(){
  console.log("heelo");

  checkCallback("body", function(){
    printMess();
    //displays the error messages
    if(bool!==false){
     terminal.errors.forEach(function(element){
        if (element.code[0]=== "S" || element.code[0]=== "s"){
          aSuccess(element);
        }
        else if(element.code[0]=== "W" || element.code[0]=== "w"){
          aWarning(element);
        }
        else if(element.code[0]=== "E" || element.code[0]=== "e"){
          aError(element);
        }
       });
      }

     // Check the footer and print it
     checkCallback("footer", function(){console.log(" ");});
     
    });
  }); 
});

}

function check(name){
 var deferred= Q.defer();
 if(terminal[name]){
  reRunBlock(terminal[name],0);

 }
}

function steps(callback){
  callback();
}

function checkCallback(name, callback){
 if(terminal[name]){
  reRunBlock(terminal[name],0, function() {
    console.log("callback"+name);
    callback()
  });

 }
}



function runInterf(block){
  var audreyInterf= require(interfPath);
  var scion= audreyInterf();

  
scionBlock.splice(0, indexb);
if (scionBlock[0]===undefined) scionBlock.push(">>default");
console.log(scionBlock);
indexb=undefined;

//var args = [scionName, terminal];
childProcess[count] = require('child_process').fork(interfPath, scion.grow(scionName, terminal));
//console.log(interfPath);

process.on('exit', function (block, indexb) {
    childProcess[count].kill();
    processReinit();
});

}

function processReinit(){
  
//console.log("scion");
//console.log("reinit"+scionBlock);
//console.log(scionBlock);
    reRunBlock(scionBlock, 0);
}

function reRunBlock(block, index, callback){
  /*debugger
  console.log("\nBLOCK"+block);
  console.log("INDEX"+index);
  console.log("myIND"+indexb); */
  growing:
  for(var i=index; i<block.length; i++){
    //console.log("i"+i);
    var code=block[i].substr(0,2);
    if (code=== ">>") {
      printBrand(block[i]);
      if(block[i].substr(2)==="default"){
        recallback();
      }}
    for(var ii=0; ii<taggies.length;ii++){
        
        if(taggies[ii].code === code){
         /*debugger
          console.log("COD"+code+" "+"TAG"+taggies[ii].code);
          console.log("NAME"+block[i]);
          console.log("myIND"+indexb);*/
          if (code==="xx") {//user lib needs all control-->callback-mode
          interf=true;
          interfPath="../"+taggies[ii].path+"/index.js";
          indexb=i+1;
          scionBlock=block;
          scionName= block[i];
          break growing;
        }
           //console.log("PATH"+taggies[i].path);
           var audreySeed= require("../"+taggies[ii].path+"/index.js");
           var seed= audreySeed();
           var callbackname=block[i];
           seed.grow(callbackname, terminal);
        
           if(i===block.length-1){
            if( callback) callback();
            else recallback();
           }
        }

    }
  }
  if(interf){
    interf=undefined;
    recallback= callback;
    /*debugger
    console.log("RUNINTERF");
    console.log("\nBLOCK"+block);
    console.log("INDEX"+index);
    console.log("myIND"+indexb);*/
    runInterf(block);
  }
 
}
 


// direct injection of data after body
function printMess(){
  process.stdout.write(mess+"\n\n");
}
function printCBrand(name, tagColor){
  console.log(); 
      process.stdout.write(tagColor(name));
}


function checkProperties(name){
  var bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){// it isn't finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}

function aError(errorObject){
  if(errorObject.aux){
  console.log(terminal.colors.error(terminal.symbolProgress+" Error: "+errorObject.message)+ " " +terminal.colors.aux(errorObject.aux));
  console.log();  
  }
  else{
  console.log(terminal.colors.error(terminal.symbolProgress+" Error: "+errorObject.message));
  console.log();
  }
    
}

function aSuccess(errorObject){
  if(errorObject.aux){
   console.log(terminal.colors.success(terminal.symbolProgress+" Success: "+errorObject.message) +" " +terminal.colors.aux(errorObject.aux));
   console.log();
    }
  else{
   console.log(terminal.colors.success(terminal.symbolProgress+" Success: "+errorObject.message));
   console.log();
  }
}

function aWarning(errorObject){
  if(errorObject.aux){
    console.log(terminal.colors.warning(terminal.symbolProgress+" Warning: "+errorObject.message)+" " +terminal.colors.aux(errorObject.aux));
    console.log();
  }
  else{
    console.log(terminal.colors.warning(terminal.symbolProgress+" Warning: "+errorObject.message));
    console.log();
  }
}

};
