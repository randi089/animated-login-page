const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const h1 = document.querySelector(".h1");
const p = document.querySelector(".p");

registerBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  setTimeout(() => {
    registerBtn.textContent =
      registerBtn.textContent == "Sign up" ? "Sign in" : "Sign up";
    h1.innerHTML =
      h1.textContent == "Hii Coder's"
        ? "Welcome To <br>Code with Ranfeb"
        : "Hii Coder's";
    p.textContent =
      p.textContent == 'Join "Code with Ranfeb" to Improve Your Coding Skills'
        ? "Sign in with ID & Password"
        : 'Join "Code with Ranfeb" to Improve Your Coding Skills';
  }, 300);
});
