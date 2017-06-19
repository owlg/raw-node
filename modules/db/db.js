// http://mongoosejs.com/docs/index.html
var mongoose = require('mongoose');


var db_name = 'test';

// Establish Connection
mongoose.connect('mongodb://localhost' + db_name);

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){

  //we are connected ! :)
});


// ATTACH Schemas!

var usersSchema = mongoose.Schema({
  name: String

});

// Compile Schema into a Model

var Users = mongoose.model('Users', usersSchema);

/*
A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:
*/
var JianYueUser = new Users({name: 'Jian Yue'});
console.log(JianYueUser.name); //Shows Jian Yue

// Methods can be added

/*
NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);


*/


// NEED TO SAVE!

JianYueUser.save(function (err, JianYueUser)) {
  if (err) return console.error(err);

}


// FINDING documents

Users.find({name: /^jian yue/ }, callback);
