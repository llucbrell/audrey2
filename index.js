
module.exports= function(object){

var terminal=object;
var terminalColors={};

//modules load
var chalk= require('chalk');

//set the colors of the terminal
setColor(terminal.colors);



console.log(terminal);

return{
     //header error controller
         success: function(){printStyle(); },
         warning: function(){printHardly(); },
           error: function(){printWoops(); },
    //control error array
            feed: function(index, message){ addControl(index, message);},
//simple error messages
    printSuccess: function(message){gSuccess(message);},
    printWarning: function(message){gWarning(message);},
      printError: function(message){gError(message);},
           debug: function(program){printErrors(program);},
      getIErrors: function(){return indexErrors;},
      getMErrors: function(){return messageErrors;}
};



//FUNCTIONS FOR THE CLI RESPONSE..


 function setColor(colorUser){
  if(!colorUser){
     
      terminalColors={
          info:chalk.grey, 
          warning:chalk.yellow, 
          err:chalk.red,
          success: chalk.green, 
          normal:chalk.white,
          brand: chalk.blue
          };
  }
  else{


    console.log(terminal.colors);
   terminal.colors.forEach(function(element){

      switch (element){
            case 'red':
              element=chalk.red;
              break;
            case 'green':
              element=chalk.green;
              break;
            case 'yellow':
              element=chalk.yellow;
              break;
            case 'blue':
              element=chalk.blue;
              break;
            case 'grey':
              element=chalk.grey;
              break;
            case 'white':
              element=chalk.white;
              break;     
            default:
              element=colorUser;
              break;
          }
   });  
   console.log(terminalColors);
  }
}

//print the ascii image brand
function printBrand(){
  if(terminal.brand){
  console.log(); 
  console.log(terminalColors.brand(terminal.brand));
  console.log(); 
  }
}
//print the info message
function infoSuccess(){
  if(terminal.info){ 
  console.log(); 
  console.log(terminalColors.success(terminal.info));
  console.log(); 
  }

}

function infoWarning(){
  if(terminal.info){
  console.log(); 
  console.log(terminalColors.warning(terminal.info));
  console.log(); 
  }
}

function infoError(){
  if(terminal.info){
  console.log(); 
  console.log(terminalColors.err(terminal.info));
  console.log();
  }   
}

function addControl(ucode, umessage, uaux){
  if(!terminal.errors) terminal.errors=[];
  var errObject={code: ucode, message: umessage, aux: uaux};
  terminal.errors.push(errObject);
}

function printErrors(program){
  
  var warn=0;
  var ers=0;
  var suc=0;
  //count errors and breaks if something is wrong
  terminal.errors.forEach(function(element){
    if(element.code[0]=== "E"){
          ers++;
         // break;
    }
    else if(element.code[0]=== "W"){
          warn++;       
   }
   else{
          suc++;      
   }

 });
 

  if (terminal.brand){printBrand();}
  if(ers>0){infoError();}
  if(ers===0 && warn===0){infoSuccess();}
  if(ers===0 && warn>0){infoWarning();}


//displays the error messages
//if(program.verbose){
 terminal.errors.forEach(function(element){
  //console.log(indexErrors[i], messageErrors[i]);
    if (element.code[0]=== "S"){
      aSuccess(element);
    }
    else if(element.code[0]=== "W"){
      aWarning(element);
    }
    else if(element.code[0]=== "E"){
      aError(element);
    }
   });

console.log(terminal.errors);
 // }
}


function aError(errorObject){
  if(errorObject.aux){

  }
  else{
  console.log(terminalColors.err("o "+errorObject.message));
  console.log();
  }
    
}

function aSuccess(errorObject){
  if(errorObject.aux){

    }
  else{
   console.log(terminalColors.success("o Success: "+errorObject.message));
   console.log();
  }
}

function aWarning(errorObject){
  if(errorObject.aux){

  }
  else{
    console.log(terminalColors.warning("o Warning: "+errorObject.message));
    console.log();
  }
}




};

/*JAVASCRIPT AUDREYII OBJECT


{brand: string, 
logo:string,
info: string,
commandMessage: string,
copyright:string, 
colors:{info: grey, warning: yellow, error: red,
  succes: green, normal:white, brand:blue}, 
processes:[arraycommandactions],
errors:[array{code:E01, message:string, aux:[array]}]}

*/
