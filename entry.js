var app = require('./noteClass.js');
var vorpal = require('vorpal')();  //Vorpal command to customize the command prompt
vorpal
  .command('createNote <contents>', 'Output "contents"')  //A creteNote command
  .action(function(args, callback) {
  	var note = new app.Notes(args.contents)
  	this.log(args.contents);
  	note.createNote(args.contents)
  	this.log("You have one note created")
    callback();
  });
vorpal
  .command('listNotes')         //A listNote command
  .action(function(callback) {
    this.log("Listing your notes")
  	var note = new app.Notes("").listNotes();
  });
vorpal
  .command('viewNote <note_id>', 'Output "note_id"')  //A viewNote command
  .action(function(args, callback) {
    var note = new app.Notes(args.note_id)
    note.viewNote(args.note_id)
    callback();
  });
vorpal
  .delimiter('Mynote$:')
  .show()