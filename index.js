/*
       dP                dP       dP                                                          dP          
       88                88       88                                                          88          
       88d888b. .d8888b. 88d888b. 88d888b. .d8888b. .d8888b. .d8888b. .d8888b. .d8888b. .d888b88 .d8888b. 
       88'  `88 88'  `88 88'  `88 88'  `88 88ooood8 Y8ooooo. 88'  `"" 88'  `"" 88'  `88 88'  `88 88ooood8 
       88    88 88.  .88 88.  .88 88.  .88 88.  ...       88 88.  ... 88.  ... 88.  .88 88.  .88 88.  ... 
       dP    dP `88888P' 88Y8888' 88Y8888' `88888P' `88888P' `88888P' `88888P' `88888P' `88888P8 `88888P' 
                                                                                                    

                                                                                             
                                   i8@@8Li.                t@8000                                   
                                 .GitL:::GGGC;             G8ifGt80LtL11,.                          
                                  C,Li;i8i;Ci:ti  i11i:;i::i00ii;;ifffi;;f@8                        
                                  ,L;0L88iCf;L01f.   ,;  ifG0101f0t:;:;;;1GC                        
                                    t@80CL0LfC,    ,1i :;ii CGti1;G8fi::fCiL:                       
                                      L0C11tGf;      ,1;   L .;:.         Lii                       
                                      ,i0fLGt;f1.    t:                    1.                       
                                    ;0C8Li;t88L;:,,i  :t,          :1 .,  .t                        
                                  18i;i;1fC8tL,      .             ,  1. :L                         
                                1C:;G8Gf;f;             ::::      ;LG0t. iLG0CCi                    
            ..t0fC0tGt,       iC:ifCGCt:             ;,    ;L  i G1G0C11CLCL1C88CGti                
          ,Li;G01f01C::GC.   C8G1;:;:;              t           ii8@@@@@C  ;G81iGfitCtt1tf:         
        .CiGtL,      :0:;8: Gi:i08@8.           ..                .ifft,       iL:.       .1        
       .0CLfi          Ct;;08Cffti1.          .,                                f.  i   it:         
       t1i:L            0GLf:::;;;i          ;.                                 i  :.  ;   ::       
       0@@@;            ,iGt:::;:1          f                                    ;; ,i  i1ti        
       C@@@.             18888@@8C         .f     :t11:                               t. i          
       .8@0               G;:::;C8f      :;.L   ,i   , f                                            
                          ff:C8L;;;: t81,:8::f..f    @1 1                                           
                          G0i:::i8L10@8,,ff,f0L0. t@,.f.1                                           
                           C1:18L:i8;88,:Lf8t:f:   : Lt:.                                           
                           ,80C:::8t:L8f:G@G,:L   ,@8  i   ;i.                                      
                            ,8:::t8i::C8C1@8CfG   f@G i ;;    ;1                                    
                              tC:t8f::,;C8C1L0f     .G1f..1 G@,1                                    
                                i0t01::::::f01,f1,iG0;1  Gf    1                                    
                                   :tC00Lt:.      ;G,       8L1.           
                          .LG:;                    f.  f@@1  t.            
                      ,;.0ttC::::                   L   :t: ,:             
                 i;ftttttttt8:::;                    .L.  :1.              
             .:Gtttttfttttttttf;::;                                        
         i8tttttft::Cttttttttt;::::                                        
         tttC,.;;:::::fttttttttt::::;                                      
       ,::1Lt8;:::::::tttttttttt;:::f                                      
     8:0tttttttG;::::::;tttttttttt:::;                                     
   CtfttttttttttG::::::::tttttttttt:::i                                    
   ttttttttttttttt:::::::;tttttttttC:::                                    
    Gtttttttttttttt:::::::Gtttttttttf::t                                   
    .ttttttttttttttt:L.Cii;tttttttttL;f1                                   
     Lttttttttttttttfift,8ttttttttff            
      Gttttttttttttt0fttttttttt,                
       tttttttt1GGttCtLtG8G                     
        .1ft.i,.  t18i           GGGf;;;:::::;::i;:;C  
                t          .ifi:::;:;1fft11if;L11LLf1itC8fi   
                   ;  C8LttttCCLttttttttG1ft1f        
                   :         t                             
                  ;         ;                 Project-->      AUDREY-TWO v2.0        
                 L        t                 
               C       t                      Author---> Lucas_C/llucbrell/hobbescode         
                 8    C                       
                 ;Ct                          License-->      MIT-license        
  

  
*************************************************************************************
Copyright (c) 2015 Lucas_C/llucbrell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

***********************************************************************************
*/

                                                                                              


module.exports= function(objName, object){
"use strict";
//BASIC INITIAL ACTIONS

//stores all the options for the user
var terminal=object;
var taggies=[]; //stores the taggy codes

//modules load
var chalk= require('chalk');

var bool;
var ers;
var warn;
var suc;
var mess="";
//to control the view properties and colors

var properties=Object.getOwnPropertyNames(terminal);
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

var views={};
views[objName]=object;

init();

return{  //THE USER LIBRARY METHODS
    //control error, views and mdule arrays
            seed: function(arrayPaths){ putSeeds(arrayPaths);},
            feed: function(name, view){ views[name]=view; init();},
             err: function(index, message, aux){ addControl(index, message, aux);},
             dry: function(name){ delete views[name];},
    //simple error messages and printing functions
           write: function(data){mess+=data;},
       writeLine: function(data){mess+=data+"\n";},
    //run the debuger change or add to terminal object
       fertilise: function(objectName, value, color, blockPos){fertilise(objectName, value, color, blockPos);},
       fertilize: function(objectName, blockPos){ fertilize(objectName, blockPos);},
       fertzView: function(objectName, blockPos, viewName){fertilize(objectName, blockPos, viewName);},   
           debug: function(boolean){bool= boolean;},
        fumiGate: function(nuObject){ terminal= nuObject; init();}, //put new one ready to print //you'll lost the view if you change after
         replant: function(name){terminal=views[name]; init();},
            sing: function(name){terminal=views[name]; init(); run();},    
          encore: function(){run();}, //print the last view on the console
    //return errors and other staff to the user        
       getErrors: function(){return terminal.errors;},
        getViews: function(){return views;},
      getTaggies: function(){return taggies;},
         getData: function(){return updatedData;}        
};
//to reinit the audrey view when is updated
function init(){
//modules load
terminal.colors.default= chalk.white.bold;
terminal.default="";
//set the colors of the terminal
checkUserColors(terminal.colors);
bool=true;
//to control the view properties and colors
properties= Object.getOwnPropertyNames(terminal);
colors=Object.getOwnPropertyNames(terminal.colors);
}

//SETS THE NEW AUDREY-TWO-MODULES-SEEDS
//---------------------------------------------------
function putSeeds(arrayPaths){
  arrayPaths.forEach(function(element){
    var tagy={code:"", path:""};
    tagy.code= element.substr(element.length-2, element.length-1);//save the user custom tag
    tagy.path= element.substr(0, element.length-3);//save the path to the seed
    taggies.push(tagy);
  });
}

//SET ERRORS
//------------------------------------------------------
//add error to audrey
function addControl(ucode, umessage, uaux){
  if(uaux && !terminal.colors.aux) terminal.colors.aux=terminal.colors.info;
  if(!terminal.errors) terminal.errors=[];
  var errObject={code: ucode, message: umessage, aux: uaux};
  terminal.errors.push(errObject);
}

//SETS NEW OBJECTS INTO THE VIEW
//-----------------------------------------------------
//using an object
function fertilize(objectName, blockPos, viewName){
  var actualTer;
  if(!objectName.name || !objectName.value || !objectName.color || !blockPos) throw new Error("incorrect call to fertilize method");
  if(viewName) actualTer= views[viewName];
  else actualTer= terminal;
    var name= objectName.name.slice(2);
    actualTer[name]=objectName.value;
    actualTer.colors[name]=objectName.color;
    setOnBlock(objectName.name, blockPos);
    checkUserColors(actualTer.colors);
  init();
}
//by name, value,color block
function fertilise(objectName, value, color, blockPos){
  if(!blockPos) throw new Error("incorrect call to fertilise method");
    var name= objectName.slice(2);
    terminal[name]=value;
    terminal.colors[name]=color;
    setOnBlock(objectName, blockPos);
    checkUserColors(terminal.colors);
  init();
}

//FUNCTIONS FOR THE CLI RESPONSE..
//check if there is defined object colors if not, throw error
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
//adds new object to list of print
function setOnBlock(objectName, blockPos){
  switch(blockPos){//check where to add in the structure
    case 'header':
      terminal.header.push(objectName);
      break;
    case 'body':
      terminal.body.push(objectName);
      break;
    case 'footer':
      terminal.footer.push(objectName);
      break; 
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
/*
 * prints on the console, check first for errors and 
 * prints the structure, it's the flow of this softwr
 * follow it and you follow the code flow 
 */
function run(){ 
   warn=0;
   ers=0;
   suc=0;
  //count errors and breaks if something is wrong
  if(terminal.errors){
   terminal.errors.forEach(function(element){ //iterates over user-erros injected
    if(element.code[0]=== "E" ||element.code[0]=== "e"){
          ers++;
    }
    else if(element.code[0]=== "W"|| element.code[0]=== "w"){
          warn++;       
    } 
    else suc++;
   
  });
  } 
  terminal.ers= ers;
  terminal.warn=warn;
  terminal.suc=suc;
//check the header and print it, then the body
//steps(function(){  
if(terminal.header && terminal.header[0]){
checkCallback("header", function(){
  if(terminal.body && terminal.body[0]){
  checkCallback("body", function(){
    printMess();
    //displays the error debug audrey-messages
    if(bool!==false){
  if(terminal.errors){
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
     } 
     // Check the footer and print it
     checkCallback("footer", function(){console.log("");});     
    });
  }
  else{
    if(bool!==false){
     console.log("\n");
    if(terminal.errors) {
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
     } 
    if (terminal.footer) checkCallback("footer", function(){console.log("");});
  }
  });
  }
  else{
    if(terminal.body && terminal.body[0]){
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
  }
  else{

    if (terminal.footer && terminal.footer[0]) checkCallback("footer", function(){console.log("");});
  }

  }
   
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
  for(var i=index; i<block.length; i++){ //iterate over the block [body, header, etck] *
    var code=block[i].substr(0,2);//                                            |      |
    if (code=== ">>") {//The only tag  by deffault                         |    |      |
      printBrand(block[i]);//                                              |    |      |
    /*  if(block[i].substr(2)==="default"){                                |    |      |
        if(callback) callback();// // fixes the bug of last element        |    |      |
        else recallback();//                                               |    v      |
      }//                                                                  |           |
   */ //                                                                   v           |
    }//                                                                                |
    for(var ii=0; ii<taggies.length;ii++){//                                           |
        //match user taggies and control if there are some seeds  so executes... *     |
        if(taggies[ii].code === code){//                                         |     |
          if (code[0]==="x") {//user lib needs all control-->callback-mode       |     |
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
        }//                                                                      |     |
    }//                                                                          |     |
   //if it's the last element, callback                                          |     |
     if(i===block.length-1){ //                                    |             |     |
              if(callback) callback();//                           |             |     |
              else recallback();//if it's other                    v             |     |
        }//                                                                      v     |
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
  if(!terminal.symbolProgress) terminal.symbolProgress="? ";
  if(errorObject.aux){
    if(!terminal.colors.aux) terminal.colors.aux= chalk.white;
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
  if(!terminal.symbolProgress) terminal.symbolProgress="? ";
  if(errorObject.aux){
   if(!terminal.colors.aux) terminal.colors.aux= chalk.white; 
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
  if(!terminal.symbolProgress) terminal.symbolProgress="? ";
  if(errorObject.aux){
    if(!terminal.colors.aux) terminal.colors.aux= chalk.white;
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


};
//END

                  
/*
888               888       888                                                       888      
888               888       888                                                       888      
888               888       888                                                       888           
888-~88e  e88~-_  888-~88e  888-~88e   e88~~8e   d88~\  e88~~\  e88~~\  e88~-_   e88~\888  e88~~8e  
888  888 d888   i 888  888b 888  888b d888  88b C888   d888    d888    d888   i d888  888 d888  88b 
888  888 8888   | 888  8888 888  8888 8888__888  Y88b  8888    8888    8888   | 8888  888 8888__888 
888  888 Y888   ' 888  888P 888  888P Y888    ,   888D Y888    Y888    Y888   ' Y888  888 Y888    , 
888  888  "88_-~  888-_88"  888-_88"   "88___/  \_88P   "88__/  "88__/  "88_-~   "88_/888  "88___/  
                        
                                                                        copyright Lucas_C/llucbrell
                                                                           hobbescode@gmail.com    
            :088C;                                                      
          ,008000LtCCt.  it;1;tC00G00LfLG0t                             
         :800808000Gt.t0GCCGGG00L; ...:tLCt1tt0G,                       
          i0800LCL880C.,;  fG0t                ,8G0G000GC,               
          ;0080C.    .    f0C                   ,80000GG00;              
           :8080GftC.                .           .; 1GfGGLi              
             ,LG80C.             1G1 .0C; .1CCG1    :8GL0L.              
               .C800Gf:        ,t. 1   G0fL.C  Cf    ;                   
              18@0G80GCf     ::   :0G0 1t  :0G t1   i,                  
               t01     L     ,i         t:      ,L ..11                  
            .Gti@.1i ,C1C    ;         ;1       11:GG0f                  
         .1C1..L8018C8C0:    f        1G;      :L   ,Lf                  
          ,C0t  ;C,CG000    1       C,fi      G     C.                  
      18G1            :C,   1,   ,LGCG01    .Gt  LftL                   
        :1f01                 .f08080G00Gtf0L, fC0080G1                 
      tC1;                  :0LLt,.,,,,tL0G.    ;:t8C.                  
     C808Lt10,              @G f800G88881 1G:      ;C0C0C.              
          i0                i0808808088C81;GC       ff:                 
        ;01:i1:               f0000GG008000G.        ;ff,               
        :f1. 1i                 .f@0000000,        ii   .               
           iG.                                      .1f.                
          ,1CG88L     :       .                 ,   it,                 
                 .tt, tt      i1;;f0L          :,i0L:                   
               .i:    ,;L:                 G:   ,t                      
                        .G0t,           .f0  i;  ;:                     
                 tCGL       i@8G0LLLLC80f,. L                            
              ,LG1:            ..,,,.                                   
              18G000GGL.            .1.                                 
             LG;    .;LG           ft                                   
             G8i      ,fGL         1G:                                   
         .1G0G800CCG0G0i             1t;.                               
         .GGG0GGGCGCG0G0,            :Cf;.                              
          f0C        .GL            ;10L                                
         fGG.       if                ;C;                               
         100GG00C;,Ct;:.           .0f,if1                              
        .G0CGG08L000:GL.            :C.                                 
        10G  ,1CG00GG:               .Ci                                
*/