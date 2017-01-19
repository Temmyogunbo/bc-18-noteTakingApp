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
  .command('viewNote <note_id>', 'Output "note_id"')
  .action(function(args, callback) {
    var note = new app.Notes(args.note_id)
    note.viewNote(args.note_id)
    this.log("You have one note viewed")
    callback();
  });
vorpal
  .delimiter('Mynote$:')
  .show()