$(document).ready(function() {


  if (height < 100) {
    $('.children').addClass("children2");
  }
  else if (height <180) {
    $('.teenagers').addClass("teenagers2");
    $('.adults').addClass("adults2");
  }
  else {
    alert("Sorry, you're just too tall to ride any of our rides!");
  }
});


$(document).ready(function() {
  $("form#politics").submit(function(event) {
    var climate = parseInt($("#climate").val());
    var peta = parseInt($("#peta").val());

    var sum = climate + peta

    if (sum === 0) {
      alert('Please make a selection.');
    }
    else {
      if (sum <= 2) {
        $("#voter").empty().append("Conservative");
        $("#answer").show();
      }
      else if (sum >2 && sum <5 ) {
        $("#voter").empty().append("Neutral");
        $("#answer").show();
      }
      else {
        $("#voter").empty().append("Liberal");
        $("#answer").show();
      }
    }

    event.preventDefault();
  });
});
