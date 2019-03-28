var express = require('express');
var socket = require('socket.io');
var Github = require('github-api');



//app setup
var app = express();
var server = app.listen(333, function(){
  console.log("listening to port 333");
});


app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
  console.log("connection made with " + socket.id);


  // Creates a new instance of the Github object exposed by Github.js
  var github = new Github({
    username: 'mohkan1',
    password: 'mohkan11399',
    auth: 'basic'
  });

  // Creates an object representing the repository you want to work with
  var repository = github.getRepo('mohkan1', 'code');

  // Creates a new file (or updates it if the file already exists)
  // with the content provided
  repository.create(
     'master', // e.g. 'master'
     'master.html', // e.g. 'blog/index.md'
     'THE_CONTENT', // e.g. 'Hello world, this is my new content'
     'YOUR_COMMIT_MESSAGE', // e.g. 'Created new index'
     function(err) {}
  );


});
