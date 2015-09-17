
module.exports= function(object){
"use strict";
//stores all the options for the user
var terminal=object;

//modules load
var chalk= require('chalk');

//for error in the use of this library
var audreyErrors={
  color:{code:"E01", message:"There is no color defined in the view for "},
defined:{code:"E02", message:"Not defined "},
noComponent:{code:"E03", message:"There isn't a tag deffined in the view for "},
noColor:{code:"E04", message:"There is no colors object defined"},
maxArrayLength:{code:"E05", message:"Array can't be bigger than 3 -arrayName -->"},
minArrayLength:{code:"E06", message:"Array can't be smaller than 3 -arrayName -->"}
};

//set the colors of the terminal
checkUserColors(terminal.colors);

var bool=true;
var ers;
var warn;
var suc;
var mess="";


var properties= Object.getOwnPropertyNames(terminal);
var colors=Object.getOwnPropertyNames(terminal.colors);

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
    //return the errors to the user        
       getErrors: function(){return terminal.errors;}
          
};


function putSeeds(arrayPaths){

}


//FUNCTIONS FOR THE CLI RESPONSE..

 function checkUserColors(colorUser){
  if(terminal.colors){
    for(var name in colorUser){
      colorUser[name]= setUserColor(colorUser[name]);
      }
  }
  else{
    throw audreyErrors.noColor.message;
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

//print the ascii image brand
function printBrand(simName){
var name= simName.slice(1); //delete simbol of the name 
  checkProperties(name); 
  checkColors(name);
      console.log(); 
      process.stdout.write(terminal.colors[name](terminal[name]));
}

//print the info message
function infoSuccess(simName){
var name= simName.slice(1); //delete simbol of the name
checkProperties(name);//checks if exists
checkColors(name);//checks if there is colors
     console.log(); 
     process.stdout.write(terminal.colors.success(terminal[name]));
}

function infoWarning(simName){
var name= simName.slice(1); //delete simbol of the name
checkProperties(name);//checks if exists
checkColors(name);//checks if there is colors
     console.log(); 
     process.stdout.write(terminal.colors.warning(terminal[name]));
}

function infoError(simName){
var name= simName.slice(1); //delete simbol of the name
checkProperties(name);
checkColors(name);
     console.log(); 
     process.stdout.write(terminal.colors.error(terminal[name]));
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
 
//check the header and print it, then the body
check("header");
check("body");
  
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
 check("footer");
 
}

function check(name){
 if(terminal[name]){
  printBlock(terminal[name]);
 }
}

//checks the different components
function printBlock(block){
  for(var name in block){            
       switch (block[name][0]){
                case '>':
                  printBrand(block[name]);
                  break;
                case '?':
                  printInfo(block[name]);
                  break;
                case '&':
                  printCopyright(block[name]);
                  break;
                case '%':
                  printProgress(block[name]);
                  break; 
                case '~':
                  printChange(block[name]); 
                  break;
                case '#':
                  printTable(block[name]); 
                  break;            
                default:
                  var audreyErrorNoComp= audreyErrors.noComponent.message + block[name];
                  throw audreyError;
              }       
      
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

function printChange(simName){
  var name= simName.slice(1); //delete simbol of the name
  checkProperties(name);
  checkArrayLength(name, 3, 3);
  if(terminal.colors[name]){
    if(ers>0){printCBrand(terminal[name][2], terminal.colors[name]);}
    if(ers===0 && warn===0){printCBrand(terminal[name][0],terminal.colors[name]);}
    if(ers===0 && warn>0){printCBrand(terminal[name][1],terminal.colors[name]);}
  }
  else{
    checkColors("error");
    checkColors("warning");
    checkColors("success");
    if(ers>0){printCBrand(terminal[name][2], terminal.colors.error);}
    if(ers===0 && warn===0){printCBrand(terminal[name][0], terminal.colors.success);}
    if(ers===0 && warn>0){printCBrand(terminal[name][1], terminal.colors.warning);}  
  }
 
}

function checkArrayLength(name, minLength, maxLength){
   if(terminal[name].length> maxLength){
    var audreyErrorMax= audreyErrors.maxArrayLength + name;
    throw audreyError;
   } 
   if(terminal[name].length< minLength){
    var audreyErrorMin=audreyErrors.minArrayLength + name;
    throw audreyError;
   }
}


function checkColors(name){
  var bul=false; // boolean to control if its defined the property
  for(var i=0; i<colors.length; i++){//iterate over prop names
    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    //throw audreyErrors.color.message+= name;
    terminal.colors[name]=chalk.white.bold;
    } 
}

function checkProperties(name){
  var bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    var audreyErrorDefined=audreyErrors.defined.message + name;
    throw audreyErrorDefined;
    }  
}

function printCopyright(simName){ 
var name= simName.slice(1); //delete simbol of the name 
  checkProperties(name);
  checkColors(name);
    var copyoutput=terminal[name].split(" ");//get the words
    console.log(); 
    console.log(terminal.colors[name](copyoutput[0] +" \xA9 "+copyoutput.slice(1).join(" ")));
    console.log();//output the license name + symbol + name
}


function printProgress(simName){
  var name= simName.slice(1); //delete simbol of the name 
checkProperties(name);
checkColors("error");
checkColors("warning");
checkColors("success");
process.stdout.write("   ");    
 
terminal.errors.forEach(function(element){
   if(element.code[0]=== "E"){    
      process.stdout.write(terminal.colors.error(terminal.symbolProgress));    
    }
    else if(element.code[0]=== "W"){
      process.stdout.write(terminal.colors.warning(terminal.symbolProgress));    
   }
   else{
      process.stdout.write(terminal.colors.success(terminal.symbolProgress));    
   }
  
  });
process.stdout.write("\n");    
  console.log();    

}

function printInfo(simName){
  checkColors("error");
  checkColors("warning");
  checkColors("success");
  checkColors("aux");
  if(ers>0){infoError(simName);}
  if(ers===0 && warn===0){infoSuccess(simName);}
  if(ers===0 && warn>0){infoWarning(simName);}
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

function printTable(simName){

var stringL= require('string-length');
var table= require('text-table');

var name= simName.slice(1); //delete simbol of the name 

checkProperties(name);

var opts = {
        stringLength: function(tbl) { return stringL(tbl); }
        };
if(terminal[name].align) opts.align= terminal[name].align;        
var tbl = table(terminal[name].data, opts);    

 console.log();
 console.log(tbl);
}

};
