// Card Carousel JS

$("#recipeCarousel").carousel({
  interval: 2000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

//backend js
const fs = require('fs');
const { throws } = require('assert');

window.addEventListener("DOMContentLoaded", () => {
  let loginForm = document.querySelector("#loginForm");


  loginForm.addEventListener("submit", async () => {
    await fetch("http://127.0.0.1:5500/login.html", () => {
      method: "POST";
      body: JSON.stringify({
        username: loginForm["username"].value,
        password: loginForm["password"].value
      });

      fs.writeFile("abc.txt", "login.html", (err, file) => {
        if (err) throw err
        console.log("STore");
      })
    });
  });
});
