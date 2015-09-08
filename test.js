var color='red'; 
var chalk=require('chalk');

var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={brand: "YUUUUUJU", 
				logo: "logo",
				info: "What?",
				commandPocess: "tellMe",
				copyright:"LucasC", 
				colors:[{info: "grey"}, 
				  {warning: "yellow"}, 
				  {error: "red"},
				  {success: "green"}, 
				  {normal:"white"}, 
				  {brand:"blue"}], 
				processes:[],
				};

var audrey2= require('./index.js');
var audrey= audrey2(myTerminal);



audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");

audrey.debug();
