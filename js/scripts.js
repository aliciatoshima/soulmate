$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (In cm)"));

  if (height < 100) {
    $('.children').addClass("children2");
  }
  else if (height <150) {
    $('.teenagers').addClass("teenagers2");
  }
  else {
    $('.adults').addClass("adults2");
  }
});
