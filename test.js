var color='red'; 
var chalk=require('chalk');
var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={header: [ "brand" ,"logo", "info", "symbolProgress"],
			    brand:
     " █████╗ ██╗   ██╗██████╗ ██████╗ ███████╗██╗   ██╗    ██████╗ \n"
    +"██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝    ╚════██╗\n"
    +"███████║██║   ██║██║  ██║██████╔╝█████╗   ╚████╔╝      █████╔╝\n"
    +"██╔══██║██║   ██║██║  ██║██╔══██╗██╔══╝    ╚██╔╝      ██╔═══╝ \n"
    +"██║  ██║╚██████╔╝██████╔╝██║  ██║███████╗   ██║       ███████╗\n"
    +"╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝       ╚══════╝\n"



			    ,logo: "           View Control for CLI"
                    
			    ,info:     
 "  .__                       \n"   
+"  [__)._. _  _ ._. _  __ __ \n"   
+"  |   [  (_)(_][  (/,_) _)  \n"   
+"            ._| "
   
   			   ,copyright:"Lucas_C / llucbrell",
				symbolProgress:"o",
				colors:
				{ info: "grey",
				  mess:  chalk.bgGreen,
				  warning: chalk.yellow.bold, 
				  error: chalk.red.bold,
				  success: chalk.green.bold, 
				  normal:"white",
				  copyright:chalk.blue.bold,
				  brand: chalk.green,
				  logo:chalk.red.bold,				 
				 }, 
				footer:["copyright"],
				};

var audrey2= require('./index.js');
var audrey= audrey2(myTerminal);

audrey.writeLine("");

audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.write("Feed meeeeee..");
audrey.write("feeeeed meeee.... Seymour!!!");

audrey.debug(false);
