require('dotenv').config()
var firebase = require('firebase');
var config = 
 {
   apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
  };
  firebase.initializeApp(config);
  var database = firebase.database();
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
      });
}
Notes.prototype.viewNote = function(note_id){
  note_id = "-" + note_id
  var query = database.ref("note");
  query.on("value", function(snapshot)
  {
    var data = snapshot.val();
    var keystore = [];
    for(var i in data)
    {
      keystore.push(i);
    }
    for (var i = 0; i < keystore.length; i++)
    {
      if(keystore[i] === note_id){
        console.log("You wrote the note " + data[note_id].content);
        break;
      }
    }   
  })
}
module.exports = {Notes: Notes};