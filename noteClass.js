var firebase = require('firebase');
var config = 
 {
    apiKey: "AIzaSyDjv5X95Er3PDb6paAc0iDkiTdfGzK-glA",
    authDomain: "notetakingapp-3a885.firebaseapp.com",
    databaseURL: "https://notetakingapp-3a885.firebaseio.com",
    storageBucket: "notetakingapp-3a885.appspot.com",
    messagingSenderId: "270142462172"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

var app = require('./noteClass.js');
function Notes(contents){
  // if(!contents)
  // {
  //   throw new Error("Enter the contents of your note")
  // }
  this.contents = contents;
}
Notes.prototype.createNote=function(contents)
{
     firebase.database().ref("note").push({content: contents
    });
}
Notes.prototype.listNotes = function (){

  var ref = database.child('note').on('value', function(snap) {
      var result = snap.val();
  });
}

  /*for (var i=0; i < this.notes.length; i++)
  return "note_id: " + i + '\n' + this.note[i];
*/

module.exports = {Notes: Notes};