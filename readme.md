# Audrey-2

> View Control for CLI

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/audrey.png)


Node module as an object factory. Create a VCCLI and apply the model-view-control on your nodeJS command line apps. 


Feed Audrey with object errors after commands actions. This carnivorous plant get charge of the output console display and give a little sugar for your console users.

Feed Audrey with a header, footer & data for displaying. She'll grow big and strong!


## Install

```
$ npm install audrey2
```


## Usage

```js
var color='red';//'blue', 'green', etc.,  

/* You also can use your own chalk color
 * combinations to give it more style
 * as 
 * var chalk=require('chalk');
 * var color=chalk.bgGreen;
 */


var audrey2= require('audrey2');
var audrey= audrey(myTerminalDisplay);

//run your command and pass error objects to audrey

audrey.feed(code, message);
//if it's and error code start with "E"
audrey.feed("E02", "You'll be a deeeentist...");
//Warnings Start in "W"
audrey.feed("W01", "A plant from out Space!");
//you can show success on the console too
audrey.feed("S001", "I'm Alive!");
//or pass some auxiliar to print in the same line
adrey.feed("s002", "This is an new kind of plant", cli.name);
audrey.debug();
```


![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura.png)


## Printing

Audrey doesn't print nothing till "adrey.debug()" call. And then everything it's printed with your custom choices. Audrey also has two methods to inject data into it. As if it was "console.log()" but doesn't print it till the debug call and when it does, print it in the body. Look at customization for details. 

```js
//write on the same line
audrey.write(data);
//write on different line samea as console.log
audrey.writeLine(data);
```

## Debug mode on... off

You can hide the errors by passing a boolean false to the method.

```js
audrey.debug();
``` 

## View Components

Audrey has some basic components to give you a some custom options. Put, whatever you want in the custom object.

1. brand -- string
2. logo -- string
3. copyright -- string | with this \xA9  symbol
4. info --string | change color with errors
5. symbolProgress -- string | change color with errors you can use it as jasmine/mocha color option
5. colors -- {name:string, name2:string} | you can add color to any part of the view with mocha or basic color names.


## Custom Object

You can customize almoust everything in Audrey VCCLI. The view is divided, as a basic HTML does. 

>Header 

>Body

>Footer

You must use this parts to organize your view.
Create an object as next and send it to Audrey.


```js
var terminal={ 
          header: [ "brand" , "symbolProgress"],
          brand: "this is Audrey2",
          copyright: "Seymour",
          symbolProgress: "o",
          colors:{ 
           brand: "red", 
           copyright: chalk.blue}
         /* footer: ["something"] 
          * if you ommit footer and header every component will  be placed into the body.
          */
        }
}
```



## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)