# Audrey-2

> View Control for Command Line Interface

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/audrey.png)

When we build a CLI (Command Line Interface) we can find some troubles. While the software stays small it's easy to mantain and work with it. But as much a it grows... It could be a work for someone out of space.


Click this [link](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) if you'r interested in the MVC architecture style that Audrey want to apply.


## Specifications

This code try to complement other CLI tools like commander, unicorn etc., to implement the MVC on your terminal apps.
If you bind Audrey with them you can convert this tools in a complete and functional controller.
Commander and others update the model, and call Audrey to give you the power of update view/s. 

Audrey it's build as a nodeJS module, precisely as an clousure object factory. That way Audrey doesn't inffer in the code of your app.

## How it does? 

Feed Audrey with object errors and data extracted from your commands actions. This carnivorous plant get charge of the output console display and give to your users a little of sugar rather than only an ugly output option. 

You can combine one or more Audreys with your favorite nodeJS-CLI. Then you get more control of what you display and the way you do. And of course, you don't need to think so much about code-flow.


If you feed Audrey with a header, footer & data for displaying... 
It'll grow big and strong!


## Install

```
$ npm install audrey2
```


## Usage

```js
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
adrey.feed("S002", "This is a new kind of plant!", cli.name);
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

You can hide the errors by passing a boolean false to the method. In this case audrey only print the header and the body. This is a feature added for --verbose cli option. 

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura2.png)


```js
audrey.debug(false);
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

This is the view of the MVC. You can customize almoust everything in Audrey View. The view is divided, as a basic HTML does. 

>Header 

>Body

>Footer

You must use this parts to organize your view. Include name components inside this arrays and define them outside using the same name.

Look at this terminal options defined before send it to Audrey.

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
## Colors

Audrey also gives you some colors to choose.


```js
var red='red';//'blue', 'green', etc.,  
```

You also can use your own chalk color
combinations to give it more style
as..

```js
  var color=chalk.bgGreen;
```
Remember to install the chalk module or you'lll find an error.


## Contribute

Help Audrey to grow with human blood..
Now, choose one of this topics and don't become a dentist!

-terriffic table display
-bloody progress bar
-Feed audrey with data from temp files

<!---display of more than ascii symbols
-->

## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)