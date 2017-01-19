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
  this.contents = contents;
}
Notes.prototype.createNote=function(contents)
{
     firebase.database().ref("note").push({content: contents
    });
}
Notes.prototype.listNotes = function (){
   var query = database.ref("note");
    query.on("value", function(snapshot){
        var count = 1 ;
        var data=snapshot.val();
        snapshot.forEach(function(childSnapshot){
          console.log("\t" + count + " - " + childSnapshot.key + " " + data[childSnapshot.key].content);
          ++count ;
        });
        process.exit();
      });
}
Notes.prototype.viewNote = function(note_id){
  var query = firebase.database.ref("note");
  query.once("value", function(note_id){
    var data = note_id.val();
    console.log("You wrote the note " + data.content)
  })
}
module.exports = {Notes: Notes};