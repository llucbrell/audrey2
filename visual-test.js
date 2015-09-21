var color='red'; 
var chalk=require('chalk');
var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var myTerminal={header: [ ">>brand","??info","xxask"],
			    brand:
  
   " ▄████▄   ▄▄▄        ██████ ▄▄▄█████▓ \n"
  +"▒██▀ ▀█  ▒████▄    ▒██    ▒ ▓  ██▒  ▒ \n"
  +"▒▓█    ▄ ▒██  ▀█▄  ░ ▓██▄   ▒  ██░ ▒░▒\n"
  +"▒▓▓▄ ▄██▒░██▄▄▄▄██   ▒   ██▒░  ██▓ ░ ░\n"
  +"▒ ▓███▀ ░ ▓█   ▓██▒▒██████▒▒  ▒██▒ ░ ░\n"
  +"░ ░▒ ▒  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░  ▒ ░░   ░\n"
  +"  ░  ▒     ▒   ▒▒ ░░ ░▒  ░ ░    ░     \n"
  +"░          ░   ▒   ░  ░  ░    ░       \n"
  +"░ ░            ░  ░      ░            \n"
  +"░                                     \n"


/*
	 "    .-._.;;;'                                         \n"  
+"   (_).;                 .'                               \n"
+"     .:--..-.  .-.  .-..'     . ,';.,';.  .-.  .-.        \n"
+"    .:' .;.-'.;.-' :   ;      ;;  ;;  ;;.;.-'.;.-' .-..-. \n"
+"  .-:    `:::'`:::'`:::'`.   ';  ;;  ';  `:::'`:::'`-'`-' \n"
+" (_/                        _;        `-'                 \n\n"*/

			    
  /*,brandi:" █████╗ ██╗   ██╗██████╗ ██████╗ ███████╗██╗   ██╗    ██████╗ \n"
    +"██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝    ╚════██╗\n"
    +"███████║██║   ██║██║  ██║██████╔╝█████╗   ╚████╔╝      █████╔╝\n"
    +"██╔══██║██║   ██║██║  ██║██╔══██╗██╔══╝    ╚██╔╝      ██╔═══╝ \n"
    +"██║  ██║╚██████╔╝██████╔╝██║  ██║███████╗   ██║       ███████╗\n"
    +"╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝       ╚══════╝\n"

*/

			    ,logo: "           View Control for CLI"
                    
			    /*,info: 
    "  .__                       \n"   
+"  [__)._. _  _ ._. _  __ __ \n"   
+"  |   [  (_)(_][  (/,_) _)  \n"   
+"            ._| "*/
    ,info: "ooooh... please... oh, oh, oh... pleeeeease!"
   			   ,copyright:"MIT Lucas_C / llucbrell",
   			   body:["~1change","??info", "##table" 
          ,"&2copyright"],
				symbolProgress:"░",
				change:["success", "warning", "error"],
				colors:
				{ info: chalk.magenta,
				  mess:  chalk.bgGreen,
				  warning: chalk.yellow.bold, 
				  error: chalk.red.bold,
				  success: "green", 
				  normal:"white",
				  brandi: chalk.green.bold,
				  copyright:chalk.blue.bold,
				  brand: chalk.red.bold,
          ask:"yellow"
				},
				table: {data:[
        [
            chalk.red.bold('character- name'), chalk.blue.bold("age")
           , chalk.green.bold('actor- name')
        ],
        [
            chalk.red.bold('---------------'), chalk.blue.bold("---")
           , chalk.green.bold("-----------")
        ],
        [
            chalk.white.bold('Seymour Krelborn'), chalk.white.underline('25'),
            chalk.cyan('Rick Moranis')
        ],
        [
            chalk.white.bold('Audrey-two voice'), chalk.white.underline('45'),
            chalk.cyan('Levi Stubbs')
        ],
         [
            chalk.white.bold('Audrey'), chalk.white.underline('21'),
            chalk.cyan('Ellen Greene')
        ],
        [
            chalk.white.bold('Mr. Mushnik'), chalk.white.underline('63'),
            chalk.cyan('Vincent Gardenia')
        ],
        [
            chalk.white.bold('Orin Scrivello'), chalk.white.underline('32'),
            chalk.bgBlue('Steve Martin')
        ],
        [
            chalk.white.bold('Arthur Denton'), chalk.white.underline('30'),
            chalk.cyan('Bill Murray')
        ]
         ], align:["l","r","l"]},
				  //logo:chalk.red.bold,	
				  //change: "blue",			 
				 ask:["first question","second", "third"],
				footer:["&2copyright", "??info", "??info"],
				};

var audrey2= require('./index.js');
var audrey= audrey2(myTerminal);
myTerminal.nu="esto es UPDATED";
myTerminal.colors.nu='red';
myTerminal.header.push(">>nu");
audrey.writeLine("");

audrey.seed(["audrey-tables-##",

  "audrey-sewcolor-text-~1",
  
  "audrey-copyright-&2"
  
  ,"audrey-sewcolor-??", 
  "audrey-jaskit-xx"]);
audrey.updateAll(myTerminal);
audrey.fertilise("??nuevico","infooOooo", "green", "footer");
var obj={name:">>otro nuevo", value:"aaaagh" ,color:'blue'};
audrey.fertilize(obj, "body");
audrey.feed("W05", "Does it have to be human?", "Feed me!");
audrey.feed("W05", "Does it have to be mine?", "Feed me!");
audrey.feed("S002", "The Audrey Two is not a healthy girl.", "Strictly between us - neither is the Audrey One");
audrey.feed("S002", "Does this look 'inanimate' to you, punk? If I can move and I can talk, who's to say I can't do anything I want?");
//audrey.feed("E02", "It's your professionalism that I respect");
//audrey.feed("E02", " I find a little giggle-gas before I begin increases my pleasure enormously. ");
audrey.feed("W05", "this is an warning");
//audrey.feed("E02", "You'll be a deeeentist...");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
//audrey.feed("E05", "this is an error");
//audrey.feed("E05","this is an error");
audrey.feed("W05", "this is an warning");
audrey.feed("S05","this is an exit-o", "odifa");
audrey.feed("S05", "this is an exit-o");
//audrey.feed("E05", "this is an error");
//audrey.write("I'm starving ");
//audrey.write("feeeeed meeee.... Seymour!!!");

audrey.debug(false);
audrey.sing();
