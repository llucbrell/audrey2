
![](https://raw.githubusercontent.com/llucbrell/audrey2/master/audrey.png)

# audrey-two

> View Control for Command Line Interface

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
$ npm install --save audrey-two
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

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura2.png)

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

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura.png)


```js
audrey.debug(false);
``` 

## Custom Object

This is the view of the MVC. You can customize almoust everything in Audrey View. The view is divided, as a basic HTML does. 

>Header 

>Body

>Footer

You must use this parts to organize your view. Include name components inside this arrays and define them outside using their name without the taggy.

Look at this terminal options defined before send it to Audrey.

```js
var terminal={ 
          header: [ ">Title" , "%symbol"],
          brand: "this is Audrey2",
          copyright: "MIT Seymour",
          symbolProgress: "o",
          colors:{ 
           brand: "red", 
           copyright: chalk.blue}         
        };
}
```

## View Components

Audrey has some basic components to give you some custom options. Any component is more or less as if it was a tag. They have a reserved characther at the beggining of each string you include in the array. You only have to take care to include  this signs into the header, body and footer's array.

For example
```js
var object= 
{header:[">brand",">brand2","?advise"]
 body:["%errorsBar"],
 footer:["&mycopyright"]}
```

##Components

1. >mystrings: "string" | any string
2. &copyright: "string" | get two or more words. First, license's name and then the author, add the copyright symbol 
4. ?info: "string" | change color of the string with the errors
5. %symbolProgress:  "string" | change color symbol with errors you can use it as jasmine/mocha error checker
6. ~change: ["three","srting","array"] | three strings that change if there are errors or not. If it's not a color defined uses the success, warning, error colors.
7. #table: {array:[["array","of", "arrays"]["each", "array", "for"]["each", "line.", "Colors"]["only", "with", "chalk"]], align: ["letter", "for", "column"]}

Alignment types:

* `'l'` - left
* `'r'` - right
* `'c'` - center
* `'.'` - decimal

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura3.png)


## Colors

If you want to add colors to your view, only add a property colors with an object of whatever component you want to color  with chalk.colorName.

```js
  var color=chalk.bgGreen;
```

Audrey also gives you some colors to choose if you don't want to install chalk.js

```js
  var red='red';//'blue', 'green', etc.,  
```

## Dependencies

Audrey-two make use of...

*![text-table](https://www.npmjs.com/package/text-table) module for a correct table display.
*![chalk](https://www.npmjs.com/package/chalk)module for the color display.

People and plants really appreciate your great job!

## Contribute

Help Audrey to grow with human blood..
Now, choose one of this topics and don't become a dentist!

- horrible big fonts support - from string to big font
- bloody progress bar
- terriffic 


<!-- Feed audrey with data from temp files
-->
<!---display of more than ascii symbols
-->

## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)