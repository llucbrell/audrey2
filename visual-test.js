var color='red'; 
var chalk=require('chalk');
var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={header: [ ">>brand","xxask"],
			    brand:

   "                 _                      _           _    _ _   \n"
  +"                | |                 _  (_)         | |  (_) |  \n"
  +"  __ _ _   _  __| |_ __ ___ _   _ _| |_ _  __ _ ___| | ___| |_ \n"
  +" / _` | | | |/ _` | '__/ _ \\ | | |_   _| |/ _` / __| |/ / | __|\n"
  +"| (_| | |_| | (_| | | |  __/ |_| | |_| | | (_| \\__ \\   <| | |_ \n"
  +" \\__,_|\\__,_|\\__,_|_|  \\___|\\__, |     | |\\__,_|___/_|\\_\\_|\\__|\n"
  +"                             __/ |    _/ |                     \n"
  +"                            |___/    |__/                      \n"
  





			    
   
   			 ,copyright:"MIT Lucas_C / llucbrell",
   			  
				symbolProgress:"░",
				change:["success", "warning", "error"],
        derri:"",
				colors:
				{
         info: chalk.magenta,
				  mess:  chalk.bgGreen,
				  warning: chalk.yellow.bold, 
				  error: chalk.red.bold,
				  success: "green", 
				  normal:"white",
				  brandi: chalk.green.bold,
				  copyright:chalk.blue.bold,
				  brand: chalk.bgYellow,
          ask:"yellow"
				},
						 
				 ask:{prompt:"$" , data:["Does it have to be human?","Does it have to be mine?"]},
				footer:["&2copyright", ">>derri"],
				};

var audrey2= require('./index.js');
var audrey= audrey2("hello", myTerminal);


//audrey.feed("ter", myTerminal);
//myTerminal.nu="esto es UPDATED";
//myTerminal.colors.nu='red';
//myTerminal.header.push(">>nu");
//audrey.writeLine("");

audrey.seed(["audrey-tables-##",

  "audrey-sewcolor-text-~1",
  
  "audrey-copyright-&2",
  
 
  "audrey-jaskit-xx"]);
//audrey.replant("hello",myTerminal);
//audrey.fertilise("??nuevico","infooOooo", "green", "footer");
//var obj={name:">>otro nuevo", value:"aaaagh" ,color:'blue'};
//audrey.fertilize(obj, "body");
audrey.err("W05", "Does it have to be human?", "Feed me!");
audrey.err("W05", "Does it have to be mine?", "Feed me!");
audrey.err("S002", "The Audrey Two is not a healthy girl.", "Strictly between us - neither is the Audrey One");
audrey.err("S002", "Does this look 'inanimate' to you, punk? If I can move and I can talk, who's to say I can't do anything I want?");
//audrey.err("E02", "It's your professionalism that I respect");
//audrey.err("E02", " I find a little giggle-gas before I begin increases my pleasure enormously. ");
audrey.err("W05", "this is an warning");
//audrey.err("E02", "You'll be a deeeentist...");
audrey.err("W05", "this is an warning");
audrey.err("S05","this is an exit-o", "odifa");
audrey.err("S05", "this is an exit-o");
//audrey.err("E05", "this is an error");
//audrey.err("E05","this is an error");
audrey.err("W05", "this is an warning");
audrey.err("S05","this is an exit-o", "odifa");
audrey.err("S05", "this is an exit-o");
//audrey.err("E05", "this is an error");
//audrey.write("I'm starving ");
//audrey.write("feeeeed meeee.... Seymour!!!");

audrey.debug(false);
audrey.encore();
