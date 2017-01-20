# bc-18-noteTakingApp
Getting Started

The note taking application is a console application that allows users to create notes, list notes, view single notes and do host of other things through the command prompt.
The application is written in javascript programming language with a server side framework-node.js. 
Vorpal module is used to specifically customize the command prompt and make it more interactive.

The firebase, a NoSQL type of database is used to store the contents of users notes.
To retrieve notes and delete notes a unique key from the firebase has to be used as such, users are expected to list notes before they can delete or view a single note.

Note:
To create a note, you type the command createNote "note content"

To list notes, you type the command listNotes

To view notes, you type the command viewNote "note id".

As Karl Popper will say, “No book can ever be finished. While working on it we learn just enough to find it immature the moment we turn away from it”. Critisms are welcome to improve the application. 
Enjoy it!
