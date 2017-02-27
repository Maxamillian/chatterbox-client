var x = document.createElement("input");
x.setAttribute("name", "company_name");
x.setAttribute("value", '<%=Encoder.encodeForJS(companyName)%>');
var form1 = document.forms[0];
form1.appendChild(x);

//http://parse.hrr22.hackreactor.com/chatterbox/classes/messages

$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});



//jQuery effectively escapes HTML elements when using .text(data)


// $(document).ready(function() {
//   $('body').append('<p>Test</p>');
// });
