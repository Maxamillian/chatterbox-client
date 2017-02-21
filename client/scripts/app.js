// YOUR CODE HERE
var app = {
  server: 'http:/parse.hrr.hackreactor.com/chatterbox/classes/messages',
  init: function() {},

  send: function(message) {
    //Should perform the ajax request for sending a message
    $.ajax({
      data: JSON.stringify(message),
      dataType: 'json',
      url: 'http:/parse.hrr.hackreactor.com/chatterbox/classes/messages',
      type: 'POST'
    });
  },

  fetch: function() {
    //Should perform the ajax request for sending a message
    // var info = $.parseJSON(
    $.ajax({
      // data: JSON.stringify(message),
      // dataType: 'json',
      url: 'http:/parse.hrr.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      dataType: 'json'
    });
    // );
  }
};



// var runApp = function() {

//  $(document).ready(function(){

  // var data = $.parseJSON($.ajax({
  //   url:  'http:/parse.hrr.hackreactor.com/chatterbox/classes/messages',
  //   dataType: "json",
  //   async: false
  // }).responseText);
  //app = data;

//   var makeNodes = function(){
//     var res = app.results;
//     for(var i = 0; i < res.length; i++){
//        // console.log()
//        // if()
//       $('div').last().append('<p></p>');
//       $('p').last().text(res[i].username);
//       $('p').last().append('<br><span></span>');
//       $('span').last().text(res[i].text);

//     }
//   };

//   makeNodes();
//   console.log(app.results[0].createdAt)
//   });
// };

//   // runApp();

// //WHEN MESSAGE IS ENTERED INTO THE TEXT FIELD AND SUBMIT IS PRESSED
//   //CONSTRUCT AN OBJECT
//   var Message = function(username, text, room) {
//     this.username = username;
//     this.text = text;
//     this.roomname = room;
//     this.createdAt = this.timestamp();
//     this.objectId = this.createID();


//   };
//   Message.prototype.timestamp = function() {
//     // body...
//   };
//   Message.prototype.createID = function() {
//     // body...
//   };

  //TRIGGERS AN AJAX REQUEST (WITH ROOM NAME, USERNAME, TIME CREATED, ETC);
  //STICK INTO OUR GLOBAL VARIABLE