module.exports= function(object){
"use strict";
//BASIC INITIAL ACTIONS

//stores all the options for the user
var terminal=object;
var taggies=[]; //stores the taggy codes

//modules load
var chalk= require('chalk');
terminal.colors.default= chalk.white.bold;
terminal.default="";

//set the colors of the terminal
checkUserColors(terminal.colors);

var bool=true;
var ers;
var warn;
var suc;
var mess="";
//to control the view properties and colors
var properties= Object.getOwnPropertyNames(terminal);
var colors=Object.getOwnPropertyNames(terminal.colors);

//variables to control interfaces
var interf;
var interfPath;
//to control the "re-loop" -rerun-function
var indexb;
var scionName;
var scionBlock;
//to controll the child process
var childProcess=[];
var count=0;
var recallback;

return{  //THE USER LIBRARY METHODS
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

//SETS THE NEW AUDREY-TWO-MODULES-SEEDS
function putSeeds(arrayPaths){
  arrayPaths.forEach(function(element){
    var tagy={code:"", path:""};
    tagy.code= element.substr(element.length-2, element.length-1);//save the user custom tag
    tagy.path= element.substr(0, element.length-3);//save the path to the seed
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
//pass the basic colors --> chalk-colors
function setUserColor(option){
  var col;
   switch (option){//good for passing only chalk.colors to seeds 
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
//add error to audrey
function addControl(ucode, umessage, uaux){
  if(uaux && !terminal.colors.aux) terminal.colors.aux=terminal.colors.info;
  if(!terminal.errors) terminal.errors=[];
  var errObject={code: ucode, message: umessage, aux: uaux};
  terminal.errors.push(errObject);
}
/* prints on the console, check first for errors and 
 * prints the structure, it's the core of this program
 * follow it and you follow the code flow 
 */
function talk(){ 
   warn=0;
   ers=0;
   suc=0;
  //count errors and breaks if something is wrong
  terminal.errors.forEach(function(element){ //iterates over user-erros injected
    if(element.code[0]=== "E" ||element.code[0]=== "e"){
          ers++;
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
//steps(function(){
checkCallback("header", function(){
  checkCallback("body", function(){
    printMess();
    //displays the error debug audrey-messages
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
     checkCallback("footer", function(){console.log("");});     
    });
  }); 
//});
}
/*
function steps(callback){
  callback();
}*/
//is the callback function, controls the view display is called several times
function checkCallback(name, callback){
 if(terminal[name]){
    reRunBlock(terminal[name],0, function() {
    //console.log("callback"+name);
    callback();
  });
 }
}
//run a node fork process child to execute complexes IO (scions)
function runInterf(block){
  var audreyInterf= require(interfPath);
  var scion= audreyInterf();  
  scionBlock.splice(0, indexb);

if (scionBlock[0]===undefined) scionBlock.push(">>default");
  indexb=undefined;
  childProcess[count] = 
    require('child_process')
      .fork(interfPath, scion.grow(scionName, terminal));
      //add a listener to the child to know when finishes the action
    process.on('exit', function (block, indexb) {
        childProcess[count].kill();
        processReinit();
    });
}
//works as caller from inside child-process-listener //no args can be passed
function processReinit(){
    reRunBlock(scionBlock, 0);
}
//second version of print-block--> used as init and re-loop builder
function reRunBlock(block, index, callback){
  growing:
  for(var i=index; i<block.length; i++){ //iterate over the block [body, header, etck] |
    //console.log("i"+i);                                                              |
    var code=block[i].substr(0,2);//                                                   |
    if (code=== ">>") {//The only tagy by deffault                                     |
      printBrand(block[i]);//                                                          |
      if(block[i].substr(2)==="default"){// fixes the bug of last element              |
        recallback();//                                                                |
      }//                                                                              |
    }//                                                                                |
    for(var ii=0; ii<taggies.length;ii++){//                                           |
        //match user taggies and control if there are some seeds  so executes... |     |
        if(taggies[ii].code === code){//                                         |     |
          if (code==="xx") {//user lib needs all control-->callback-mode         |     |
            interf=true;//                                                       |     |
            interfPath="../"+taggies[ii].path+"/index.js";//                     |     |
            indexb=i+1;//                                                        |     |
            scionBlock=block;//                                                  |     |
            scionName= block[i];//                                               |     |
            break growing;//  BREAK THE TWO LOOPS                                |     |
          }//if there are no seeds then, executes next                    |      |     |
           var audreySeed= require("../"+taggies[ii].path+"/index.js");// |      |     |
           var seed= audreySeed();//                                      |      |     |
           var callbackname=block[i];//                                   |      |     |
           seed.grow(callbackname, terminal);//                           V      |     |
           //if it's the last elemente of the block, so executes |               |     |
          if(i===block.length-1){ //                             |               |     |
            if(callback) callback();//                           |               |     |
            else recallback();//if it's other                    v               |     |
          }//                                                                    |     |
        }//                                                                      |     |
    }//                                                                          v     |
  }//                                                                                  v
  if(interf){//if the element was a seed then executes interface
    interf=undefined;
    recallback= callback;
    runInterf(block);
  }
}
 
// direct injection of data after body
function printMess(){
  process.stdout.write(mess+"\n\n");
}
/*
function printCBrand(name, tagColor){
  console.log(); 
  process.stdout.write(tagColor(name));
}*/
//control if the view has the correct properties if not throw error
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

//FUNCTIONS FOR PRINTING ON SCREEN

//print error message for debug
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
//print success error for debug
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
//print warning error for debug
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
//print the ascii strings--> used by default
function printBrand(simName){
  var name= simName.slice(2); //delete simbol of the name 
    checkProperties(name); 
    checkColors(name);
        console.log(); 
        process.stdout.write(terminal.colors[name](terminal[name]));
}

//END
};
