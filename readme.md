# Audrey II

> Java Script CLV- Command Line View 

Node module as an object factory. Create a CLI and feed Audrey with object errors after the end of your commands actions. This carnivorous plant get charge of error display and give a little sugar for your console.


![](https://raw.githubusercontent.com/llucbrell/jaskit/master/captura.png)



## Install

```
$ npm install jaskit
```


## Usage

```js
var color='red';//'blue', 'green', etc.,  

/*You also can use your own chalk color
 *combinations to give it more style
 *as 
 *var chalk=require('chalk');
 *var color=chalk.bgGreen;
 */


var jaskit= require('jaskit');
var cli= jaskit('promt', color);

//display some message before start questions    
jaskit.header('This is my question'); 
      jaskit.ask('This is other question');
      jaskit.ask('This is another question');
   jaskit.end();
```

## Mix It!

Use it alone or with your favorite CLI, like commander.

```js
program
  .command('write [name]') 
  .description('Ask some cuestions and write them on a file')
  .action(function(name){
    //body...
    jaskit.ask('This is my question');     
      jaskit.ask('This is other question');
      jaskit.ask('This is another question');
      jaskit.to('name.txt');
    jaskit.end();
    
  }); 
```

## Change format!

Change the user response with a JavaScript object and regular expressions.

###Format object
>before property -- Add something before the user's answer.

>replace property -- Regular expression to match with the user'

>put property -- the text or characthers to put in place.

>after proprety -- Add something after the user's answer.

```js
var formatFor1={before: "", replace:/fine/ 
                                 , put:"Ok", after:""};


cli.ask("Hi.. How'r you?");
      cli.header("JaSkIt.. Java-Script-Interface CLI");
      cli.ask("Can I ask you somethin?");
 cli.change(1, formatFor1); //params(questionID, formatObjct)  
      cli.ask("How about continue asking you..?");
      cli.to("file.JSON");   
      cli.end("Every little thing is gonna be alright!\n    y or n");
```


## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)