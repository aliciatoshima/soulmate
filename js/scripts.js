$(document).ready(function() {
  $("form#politics").submit(function(event) {
    debugger;
    var age = parseInt($("input#age").val());
    var gender = $("#gender").val();

    if (age) {
      if (age <50  && gender === "male") {
        //show young lady
        $("#braces").show();
      }
      else if (age <50  && gender === "female") {
        //show young man
        $("#headgear").show();
      }
      else if (age >50  && gender === "female") {
        //crazy cat lady
        $("#catlady").show();
      }
      else {
        //how playboys (aka many young women)
        $("#oldman").show();
      }
    }
    else {
      alert('Please input your age.');
      }


    event.preventDefault();
  });
});
