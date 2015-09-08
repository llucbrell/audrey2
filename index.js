
module.exports= function(object){

var terminal=object;
var terminalColors={};

//modules load
var chalk= require('chalk');

checkOptions();
//set the colors of the terminal
setUserColors(terminal.colors);

var ers;
var warn;
var suc;
var mess="";
//console.log(terminal);

return{  
    //control error array
            feed: function(index, message, aux){ addControl(index, message, aux);},
    //simple error messages
    printSuccess: function(message){aSuccess(message);},
    printWarning: function(message){aWarning(message);},
      printError: function(message){aError(message);},
    //run the debuger and print into terminal
           debug: function(bool){printErrors(bool);},
       getErrors: function(){return terminal.errors;},
           write: function(data){mess+=data;},
       writeLine: function(data){mess+=data+"\n";}
};



//FUNCTIONS FOR THE CLI RESPONSE..

function checkOptions(){
  for(var option in terminal){
    if(!terminal.colors.info){
      terminal.colors.info= chalk.grey; 
    }
    if(!terminal.colors.warning){
      terminal.colors.warning= chalk.yellow; 
    }
    if(!terminal.colors.error){
      terminal.colors.error= chalk.red; 
    }
    if(!terminal.colors.brand){
      terminal.colors.brand= chalk.blue; 
    }
    if(!terminal.colors.success){
      terminal.colors.success= chalk.green; 
    }
  }
}


 function setUserColors(colorUser){
 

    for(var name in colorUser){
      
       switch (name){
                case 'copyright':
                  terminalColors.copyright=userColor(colorUser.copyright);
                  break;
                case 'info':
                  terminalColors.info=userColor(colorUser.info);
                  break;
                case 'success':
                  terminalColors.success=userColor(colorUser.success);
                  break;
                case 'warning':
                  terminalColors.warning=userColor(colorUser.warning);
                  break;
                case 'error':
                  terminalColors.error=userColor(colorUser.error);
                  break;
                case 'aux':
                  terminalColors.aux=userColor(colorUser.aux);
                  break;
                case 'brand':
                  terminalColors.brand=userColor(colorUser.brand);
                  break;     
              }
        
      
      }
  
}


function userColor(option){
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
function printBrand(){
 if(terminal.brand){
  console.log(); 
  process.stdout.write(terminalColors.brand(terminal.brand));
 // console.log(); 
  }
}
//print the info message
function infoSuccess(){
  if(terminal.info){ 
 // console.log(); 
  console.log(terminalColors.success(terminal.info));
  console.log(); 
  }

}

function infoWarning(){
  if(terminal.info){
  //console.log(); 
  console.log(terminalColors.warning(terminal.info));
  console.log(); 
  }
}

function infoError(){
  if(terminal.info){
 // console.log(); 
  console.log(terminalColors.error(terminal.info));
  console.log();
  }   
}

function addControl(ucode, umessage, uaux){
  if(uaux && !terminalColors.aux) terminalColors.aux=terminalColors.info;
  if(!terminal.errors) terminal.errors=[];
  var errObject={code: ucode, message: umessage, aux: uaux};
  terminal.errors.push(errObject);
}

function printErrors(bool){
  
   warn=0;
   ers=0;
   suc=0;
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
 
//check the header and print it!
checkHeader();

  
printMess();
//displays the error messages
if(bool!==false){
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
  }

 // Check the footer and print it
 checkFooter();
 
}

function checkFooter(){
  if(terminal.footer){
    printBlock(terminal.footer); 
   /* if(terminal.brand && terminal.footer.indexOf("brand")<=0){printBrand();}
    if(terminal.logo && terminal.footer.indexOf("logo")<=0) printLogo();   
    if(terminal.copyright && terminal.footer.indexOf("copyright")<=0) printCopyright();
    if(terminal.info && terminal.footer.indexOf("info")<=0) printInfo();   
    if(terminal.symbolProgress && terminal.footer.indexOf("symbolProgress")<=0) printProgress();  
   */ } 
   
}

function checkHeader(){
  if(terminal.header){
    printBlock(terminal.header);  
   /* if(terminal.brand && terminal.header.indexOf("brand")<=0){printBrand();}
    if(terminal.info && terminal.header.indexOf("info")<=0) printInfo(); 
    if(terminal.symbolProgress && terminal.header.indexOf("symbolProgress")<=0) printProgress();
    if(terminal.copyright && terminal.header.indexOf("copyright")<=0) printCopyright();
    if(terminal.logo && terminal.header.indexOf("logo")<=0) printLogo();     
  */  } 
    else{
      if(terminal.brand) printBrand();
      if(terminal.logo) printLogo(); 
      if(terminal.copyright) printCopyright();
      if(terminal.info) printInfo();
      if(terminal.symbolProgress) printProgress();   
    }
}

function printBlock(block){
  for(var name in block){            
//console.log(block[name]);
       switch (block[name]){
                case 'brand':
                  printBrand();
                  break;
                case 'logo':
                  printLogo();
                  break;
                case 'info':
                  printInfo();
                  break;
                case 'copyright':
                  printCopyright();
                  break;
                case 'symbolProgress':
                  printProgress();
                  break;              
                

              }       
      
      }
}


function printMess(){
  process.stdout.write(mess+"\n\n");
}

function printCopyright(){ 
if(terminal.copyright){
  console.log(); 
  console.log(terminalColors.copyright("\xA9 "+terminal.copyright));
  console.log(); 
  }
}

function printLogo(){
if(terminal.logo){
 // console.log(); 
  console.log(terminal.colors.logo(terminal.logo));
 // console.log(); 
  }
}

function printProgress(){
process.stdout.write("   ");    
 
terminal.errors.forEach(function(element){
   if(element.code[0]=== "E"){
      process.stdout.write(terminalColors.error(terminal.symbolProgress));    
    }
    else if(element.code[0]=== "W"){
      process.stdout.write(terminalColors.warning(terminal.symbolProgress));    
   }
   else{
      process.stdout.write(terminalColors.success(terminal.symbolProgress));    
   }
  
  });
process.stdout.write("\n");    
  console.log();    

}

function printInfo(){
  if(ers>0){infoError();}
  if(ers===0 && warn===0){infoSuccess();}
  if(ers===0 && warn>0){infoWarning();}

}

function aError(errorObject){
  if(errorObject.aux){
  console.log(terminalColors.error("o Error: "+errorObject.message)+ " " +terminalColors.aux(errorObject.aux));
  console.log();  
  }
  else{
  console.log(terminalColors.error("o Error: "+errorObject.message));
  console.log();
  }
    
}

function aSuccess(errorObject){
  if(errorObject.aux){

   console.log(terminalColors.success("o Success: "+errorObject.message) +" " +terminalColors.aux(errorObject.aux));
   console.log();
    }
  else{
   console.log(terminalColors.success("o Success: "+errorObject.message));
   console.log();
  }
}

function aWarning(errorObject){
  if(errorObject.aux){
    console.log(terminalColors.warning("o Warning: "+errorObject.message)+" " +terminalColors.aux(errorObject.aux));
    console.log();
  }
  else{
    console.log(terminalColors.warning("o Warning: "+errorObject.message));
    console.log();
  }
}




};

/*JAVASCRIPT AUDREYII OBJECT EXAMPLE


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
