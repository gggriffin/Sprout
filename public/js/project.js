$(document).ready(function () {  
  $("#pbtn").on("click", function(event) {
   event.preventDefault();
   var newProject = {
     title: $("#ptitle").val().trim(),
     body: $("#pbody").val().trim(),
     skills: $("#pskill").val().trim(),
     link: $("#plink").val().trim()
   };
   $.post("/api/newProject", newProject)
   .done(function(data){
     console.log(data);
   });
   $("#ptitle").val("");
   $("#pbody").val("");
   $("#pskill").val("");
   $("#plink").val("");
 });
 });
