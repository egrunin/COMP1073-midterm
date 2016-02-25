// grunin-midterm
// Jack Evgeni Grunin 200310426
// COMP1073-MidTermExam-master/Scripts/app.js
// javascript for grunin-midterm text content

"use strict";
// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

console.log("App Started...")

//declare variables and create a reference to form elements
        var firstname = document.getElementById("firstname");
        var lastname = document.getElementById("lastname");
        var email = document.getElementById("email");
        var comments = document.getElementById("comments");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre
		
		submitButton.addEventListener("click", function(event){
            event.preventDefault();
            console.log("First name: " + firstname.value);
            console.log("Last name: " + lastname.value);
            console.log("Email: " + email.value);
            console.log("Comments: " + comments.value);
        });  


})();

