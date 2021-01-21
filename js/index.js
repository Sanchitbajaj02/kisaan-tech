// login
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
        identifier: loginForm["email"].value,
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
      window.localStorage.setItem("username", result.user.username);
      window.location.href = "./index.html";
    } else {
      console.log("invalid credentials");
    }
  });
});

// signup
window.addEventListener("DOMContentLoaded", () => {
  let signupForm = document.querySelector("#signupForm");

  let responseCode;
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const resp = await fetch(constants.baseURL + "/auth/local/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: signupForm["email"].value,
        username: signupForm["username"].value,
        password: signupForm["password"].value
      }),
    });

    responseCode = resp.status;

    const result = await resp.json();
    console.log(result);
    if (responseCode == 200) {
      // window.localStorage.setItem("jwt", result.jwt);
      // window.localStorage.setItem("userId", result.user.email);
      // window.localStorage.setItem("email", result.user.email);
      window.location.href = "./login.html";
    } else {
      console.log("invalid credentials");
    }
  });
});

// for non-auth protected routes (basically no authenticaion requirement)
// window.addEventListener("DOMContentLoaded", async () => {
//   const resp = await fetch(constants.baseURL + "/products");
//   const result = await resp.json();
//   console.log(result);
// });

// for auth protected routes
// window.addEventListener("DOMContentLoaded", async () => {
//   const resp = await fetch(constants.baseURL + "/orders", {
//     headers: {
//       Authorization: "Bearer " + jwt,
//     },
//   });
//   const result = await resp.json();
//   console.log(result);
// });

// for auth protected routes
// window.addEventListener("DOMContentLoaded", async () => {
//   const resp = await fetch(
//     constants.baseURL + "/users/" + window.localStorage.getItem("userId"),
//     {
//       headers: {
//         Authorization: "Bearer " + jwt,
//       },
//     }
//   );
//   const result = await resp.json();
//   console.log(result);
// });
