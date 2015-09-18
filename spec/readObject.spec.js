
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



var customObject={
  header:[">b"],
  body:[">b", "#0t"],
  footer:[">b"],
  b:"print this",
  t:{data:[["please", "print", "this"]], align:["l","r","l"]},
  colors:{b:"red"}
}

//optional for object factories
var audrey=audrey2(customObject);
   

it("must admit path array of tables", function() {
audrey.seed(["audrey-tables-#0", "audrey-chorri-?0"]);



expect(audrey.taggyHarvest()).toEqual([{code:"#0",path:"audrey-tables-#0"},{code:"?0", path:"audrey-chorri-?0"}]);

}); 

t("must recognize new taggies", function() {

expect(audrey.talk()).toEqual('algo');

}); 


});

