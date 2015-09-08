var color='red'; 
var chalk=require('chalk');
var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={//header: ["logo", "brand" , "copyright", "info", "symbolProgress"],
			    brand: "audrey", 
			    logo: "logo",		
				info: "What?",					
				copyright:"LucasC",
				symbolProgress:"*",
				colors:
				{ info: "grey",
				  mess:  chalk.bgGreen,
				  warning: "yellow", 
				  error: "red",
				  success: "green", 
				  normal:"white",
				  copyright:"grey",
				  logo:chalk.yellow.bold,				 
				 }, 
				//footer:[],
				};

var audrey2= require('./index.js');
var audrey= audrey2(myTerminal);

audrey.writeLine("Primera cosa");

audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.write("estoes mucho");
audrey.write("mas datos");

audrey.debug();
