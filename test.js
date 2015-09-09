var color='red'; 
var chalk=require('chalk');
var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={header: [ "brand" , "symbolProgress"],
			    brand:



	 "    .-._.;;;'                                         \n"  
+"   (_).;                 .'                               \n"
+"     .:--..-.  .-.  .-..'     . ,';.,';.  .-.  .-.        \n"
+"    .:' .;.-'.;.-' :   ;      ;;  ;;  ;;.;.-'.;.-' .-..-. \n"
+"  .-:    `:::'`:::'`:::'`.   ';  ;;  ';  `:::'`:::'`-'`-' \n"
+" (_/                        _;        `-'                 \n\n"

			    /*
     " █████╗ ██╗   ██╗██████╗ ██████╗ ███████╗██╗   ██╗    ██████╗ \n"
    +"██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝    ╚════██╗\n"
    +"███████║██║   ██║██║  ██║██████╔╝█████╗   ╚████╔╝      █████╔╝\n"
    +"██╔══██║██║   ██║██║  ██║██╔══██╗██╔══╝    ╚██╔╝      ██╔═══╝ \n"
    +"██║  ██║╚██████╔╝██████╔╝██║  ██║███████╗   ██║       ███████╗\n"
    +"╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝       ╚══════╝\n"


*/

			    ,logo: "           View Control for CLI"
                    
			    //,info:  
/*    "  .__                       \n"   
+"  [__)._. _  _ ._. _  __ __ \n"   
+"  |   [  (_)(_][  (/,_) _)  \n"   
+"            ._| "*/
   
   			   ,copyright:"Lucas_C / llucbrell",
				symbolProgress:".-",
				colors:
				{ info: chalk.magenta,
				  mess:  chalk.bgGreen,
				  warning: chalk.yellow.bold, 
				  error: chalk.red.bold,
				  success: chalk.green.bold, 
				  normal:"white",
				  copyright:chalk.blue.bold,
				  brand: chalk.red.bold,
				  //logo:chalk.red.bold,				 
				 }, 
				footer:["copyright"],
				};

var audrey2= require('./index.js');
var audrey= audrey2(myTerminal);

audrey.writeLine("");


audrey.feed("W05", "Does it have to be human?", "Feed me!");
audrey.feed("W05", "Does it have to be mine?", "Feed me!");
audrey.feed("S002", "The Audrey Two is not a healthy girl.", "Strictly between us - neither is the Audrey One");
audrey.feed("S002", "Does this look 'inanimate' to you, punk? If I can move and I can talk, who's to say I can't do anything I want?");
audrey.feed("E02", "It's your professionalism that I respect");
audrey.feed("E02", " I find a little giggle-gas before I begin increases my pleasure enormously. ");
audrey.feed("W05", "this is an warning");
audrey.feed("E02", "You'll be a deeeentist...");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
audrey.feed("E05", "this is an error");
audrey.write("I'm starving ");
audrey.write("feeeeed meeee.... Seymour!!!");

audrey.debug();
