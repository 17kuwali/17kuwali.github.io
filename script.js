$(document).ready(function() {


var quotation = [];

quotation[0] = "You will be very succesful in life";
quotation[1] = "You will lose all your money and your home";
quotation[2] = "BEWARE OF TURTLES";
quotation[3] = "Don't kiss that magic frog... I think you know what I mean";
quotation[4] = "RUN in 5...4...3...2...1...GO GO GO";
quotation[5] = "You will create a company and within 2 years it will make millions";
quotation[6] = "Do not take public transportation for a week from today";
quotation[7] = "Do not eat Chinese food for the rest of 2015";
quotation[8] = "Do nice things and good things will happen to you";
quotation[9] = "Your day will be full of joy and excitment";

var q = quotation.length;
var whichquotation = Math.round(Math.random()*(q-1));
function showQuotation(){
  return quotation[whichquotation];
};
// showquotation();

$(".test").click(function(event) {
  event.preventDefault();
  $(".quote").css("display", "block");
  $(".quote").prepend("<p>"+showQuotation()+"</p>");
//   event.prevent.default();
});


  $("#cookie1").load( function() {
    $( "#cookie1" ).animate({
      left: "1000",
    }, 1400, function() {
      // Animation complete.
    });
  });
});