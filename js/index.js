// for non-auth protected routes (basically no authenticaion requirement)
window.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch(constants.baseURL + "/products");
  const result = await resp.json();
  console.log(result);
});

// for auth protected routes
window.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch(constants.baseURL + "/orders", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  const result = await resp.json();
  console.log(result);
});

// for auth protected routes
window.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch(
    constants.baseURL + "/users/" + window.localStorage.getItem("userId"),
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  const result = await resp.json();
  console.log(result);
});
