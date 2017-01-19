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
  	var note = new app.Notes("").listNotes();
  });
vorpal
  .delimiter('Mynote$:')
  .show()