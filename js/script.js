document.addEventListener("DOMContentLoaded", function(){

  var form = document.getElementById("form");

  form.addEventListener("submit", function(){
      event.preventDefault();
      alert("Form submitted successfully");
  });
});
