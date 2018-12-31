// parallax for Materialize
$(document).ready(function () {
  $('.parallax').parallax();
});

// const apiKey = require("./keys.js");
// console.log(apiKey.emailjs.id);

$("#sendForm").click(sendForm());

function sendForm() {

  emailjs.init("user_lPrFltY6lZ0e4aF7Z77Zh");
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const userData = {
          firstName: $("#first_name").val().trim(),
          lastName: $("#last_name").val().trim(),
          email: $("#email").val().trim(),
          message: $("#textarea1").val().trim()
        };
        // console.log(userData);
        emailjs.send('personal_gmail', 'template_T9qPtWr2', userData);
    });
  }
}

