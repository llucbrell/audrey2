
![](https://raw.githubusercontent.com/llucbrell/audrey2/master/audrey.png)

# audrey-two

> View Control for Command Line Interface

When we build a CLI (Command Line Interface) we can find some troubles. While the software stays small it's easy to mantain and work with it. But as much a it grows... It could be a work for something out of space.


Click this [link](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) if you'r interested in the MVC architecture style that Audrey want to apply.


## Specifications

This code try to complement other CLI tools like commander, unicorn, etc., to implement the MVC on your terminal apps.
If you bind Audrey with them you can convert this tools in a complete and functional controller.
Commander and others update the model, and call Audrey to give you the power of update view/s. 

Audrey it's build as a nodeJS module, precisely as an clousure object factory. In that way, Audrey doesn't inffer in the code of your app.

## What it does? 

Feed Audrey with object errors and data extracted from your command actions. This carnivorous plant get charge of the output console display and give to your users a little of sugar rather than only an ugly output option. 

You can combine one or more Audreys with your favorite nodeJS-CLI. Then you get more control of what you display and the way you do. Of course, after install audrey, you don't need to think so much about code-flow.


If you feed Audrey with a header, body, footer & data for displaying... 
It'll grow big and strong!


## Install

Example
```
$ npm install --save audrey-two
```

## Usage

Example
```js
var audrey2= require('audrey-two');
var audrey= audrey2(myTerminalDisplay);

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

Audrey doesn't print nothing untill "adrey.debug()" call. And then everything it's printed with your custom choices. 
Audrey has two methods to inject data. As if it was "console.log()" printing into the body. Or by assignation of the values in the custom-object (view). Look at customization for details. 

Example
```js
//write on the same line
audrey.write(data);
//write on different line samea as console.log
audrey.writeLine(data);
```

## Debug mode on... off

You can not execute the error debugger by passing a boolean false to the method. By this method, audrey only print the header, the body and the footer if you include some. It xcludes the execution of error list. This option is good for make --verbose cli option for your apps. 

![](https://raw.githubusercontent.com/llucbrell/audrey2/master/captura.png)

Example
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

Example
```js
var terminal-view={ 
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

Audrey has some basic components to give you some custom options. Every component is more or less as if it was a tag. They have a reserved characther (taggy) at the beggining of each string. You have to include this taggies into the header, body and footer's array or audrey will not see them.

Example
```js
var view= 
{header:[">brand",">brand2","?advise"]
 body:["%errorsBar"],
 footer:["&mycopyright"]}
```

## Components

1. &gt;mystrings: "string" | any string
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

If you want to add colors to your view, you only have to add a property colors with an object of whatever component you want to color.

Example
```js
  var view= 
 {header:[">brand",">brand2","?advise"]
  body:["%errorsBar"],
  footer:["&mycopyright"],
  colors:{
  brand: "red",
  advise: "green";
  }}
```

Example
```js
  var red= "red";  //other colors as green
  view.colors.advise= red;
```
Audrey also gives you chalk suport colors. But you have to install this module or node will bring you an error.

Example
```js
  var chalk= require('chalk');
  var red= chalk.red.bold.underline;
  view.colors.advise= red;
```

## Dependencies

Audrey-two make use of...


* [text-table](https://www.npmjs.com/package/text-table) module for a correct table display.
  
* [chalk](https://www.npmjs.com/package/chalk) module for the color display.

* [string-length](https://www.npmjs.com/package/string-length) module for the color display.


People and plants really appreciate your great code!

## Contribute

Help Audrey to grow with human blood..
Now, choose one of this topics and don't become a dentist!

- horrible transformations from string to big fonts
- bloody progress bar for lots of data
- hypnotic frame animation support
- strange image display
- terriffic code examples and possible app structures


<!-- Feed audrey with data from temp files
-->
<!---display more than ascii symbols
-->

## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)