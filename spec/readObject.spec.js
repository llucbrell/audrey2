
var audrey2 = require('../index.js');



describe("Object reading", function() {
  //var variableglobal for the scope;

   //SOME CALLING FUNCTIONS

var customObject={
	header:[">b"],
	body:[">b"],
	footer:[">b"],
	b:"print this",
	colors:{b:"red"}
}

//optional for object factories
var audrey=audrey2(customObject);
   

//BEFORE EACH TEST-- do

  beforeEach(function() {

/*
    player = new player();
    song = new Song(); 
*/


  });

//TESTS

  it("must admit errors and return an array", function() {  
var expectErrors= [
{code:"W05", message:"Does it have to be human?", aux:"Feed me!"},
{code:"W05", message:"Does it have to be mine?", aux:"Feed me!"}];

audrey.feed("W05", "Does it have to be human?", "Feed me!");
audrey.feed("W05", "Does it have to be mine?", "Feed me!");

    //EXPECTATION 1
    expect(audrey.getErrors()).toEqual(expectErrors);

  });




});

