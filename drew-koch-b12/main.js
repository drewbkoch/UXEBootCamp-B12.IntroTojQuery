$("h1").css("color", "lightskyblue");

$("#penguin").mouseenter(function() {
  $(this).css("background-color", "lightgreen");
});

$("#penguin").mouseleave(function() {
  $(this).css("background-color", "white");
});

$("#penguin").parent().css("color", "lightgreen");

$(".crazy-skills ul").append('<li>New Line Item!!!!</li>');

$('img').click(function(){
  alert("Ouch. Stop it :(");
})

$("#name").on("blur", function() {
  var name = $(this).val();
  if (name === "Dale" || name === "DALE" || name === "dale") {
    $('.contact-us').fadeOut(1000, function() {
      alert("STOP HARRASING US, DALE");
    });
  } else {
  $('#submit').text('Press me, ' + name + "!");
  }
});