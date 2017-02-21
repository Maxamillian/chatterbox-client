// YOUR CODE HE
var runApp = function() {
  //Allow for folks to select a username
  //Allow for them to send messages
  //display messages received from the server
  //create rooms and enter existing rooms
  //display messages sent by friends in bold
  // debugger;


  //WHAT WE WANT THE HELPER FUNCTIONS TO DO:
    //1.  PUT PROPER SECURITY PROTOCALLS IN PLACE
    //2.  GENERATE DOM NODES
    //3.  PUT DIFFERENT ROOMS IN CHAT BOX
    //4.  PUT IN A TEXT BOX TO ENTER A MESSAGE IN (WITH A BUTTON)
    //5.  EVENT HANDLER FUNCTION (FOR BUTTON) THAT PUSHES NEW MESSAGE INTO THE SERVER


  // var app;
  var getMessages = function(input) {
    for (var i = 0; i < input.results.length; i++) {
      console.log(input.results[i].text);
    }
  };

//   $.ajax({
//   url: "http://parse.hrr.hackreactor.com/chatterbox/classes/messages",
//   context: document.body
// }).done(function() {
//   $( this ).addClass( "done" );
// });

  $.ajax({
    url: 'http:/parse.hrr.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    datatype: 'jsonp',
    success: function(data) {
      // app = data;
      //console.log(data);
      getMessages(data);
    }
  });

  // return app;


};

runApp();
