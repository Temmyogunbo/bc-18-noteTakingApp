//var app = require('./logic')
var app = require('./noteClass.js');
const vorpal = require('vorpal')();
vorpal
  .command('createNote <contents>', 'Output "contents"')
  .action(function(args, callback) {
  	var note = new app.Notes(args.contents)
  	this.log(args.contents);
  	note.createNote(args.contents)
  	this.log("You have one note created")
    callback();
  });

vorpal
  .command('listNotes')
  .action(function(callback) {
    this.log("Listing your notes")
  	app.Notes("").listNotes().result.keys
    callback();
  });


vorpal
  .delimiter('Mynote$:')
  .show()



// const vorpal = require('vorpal')();
 
// vorpal
//   .command('foo', 'Outputs "bar".')
//   .action(function(args, callback) {
//     this.log('bar');
//     callback();
//   });
 
// vorpal
//   .delimiter('myapp$')
//   .show();