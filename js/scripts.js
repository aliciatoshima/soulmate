$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (In cm)"));

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
