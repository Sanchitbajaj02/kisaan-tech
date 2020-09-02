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

window.addEventListener("DOMContentLoaded", () => {
  let loginForm = document.querySelector("#loginForm");

  let responseCode;
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const resp = await fetch(constants.baseURL + "/auth/local", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: loginForm["username"].value,
        password: loginForm["password"].value,
      }),
    });

    responseCode = resp.status;

    const result = await resp.json();
    console.log(result);
    if (responseCode == 200) {
      window.localStorage.setItem("jwt", result.jwt);
      window.localStorage.setItem("userId", result.user.id);
      window.localStorage.setItem("email", result.user.email);
      //   window.location.href = "/index.html";
    } else {
      console.log("invalid credentials");
    }
  });
});
