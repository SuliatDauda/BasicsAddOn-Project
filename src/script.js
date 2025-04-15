function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function prompt() {
  let name = prompt("What is your Name?");
  alert("Welcome" + " " + name + "!");
  let nationality = prompt("What is your Nationality");
  if (nationality === "Nigerian" || "Nigeria") {
    alert("My Person Welcome!");
  } else {
    alert("We are Thrilled to have you🥰");
  }
  let food = prompt("Which Nigerian food do you want to try?");
  alert("Place your Order!");
}

let otherButton = document.querySelector("#otherButton");
otherButton.addEventListener("click", prompt);
