import { Nutshell } from "../Nutshell.js";

const contentTarget = document.querySelector(".auth--register");
const eventHub = document.querySelector(".container");

// When the user clicks on the register button
eventHub.addEventListener("click", (e) => {
  if (e.target.id === "register--button") {
    // Get the email they typed into the form
    const email = document.querySelector("#register--email").value;

    if (email !== "") {
      // Check to see if the user exists
      fetch(`http://localhost:8088/users?email=${email}`)
        .then((response) => response.json())
        .then((users) => {
          if (users.length === 0) {
            // If not, create them (register them)
            fetch("http://localhost:8088/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
              }),
            })
              .then((response) => response.json())
              .then((newUser) => {
                // Once we register them, log them in
                sessionStorage.setItem("activeUser", newUser.id);

                // clear both forms
                document.querySelector(".auth--login").innerHTML = "";
                document.querySelector(".auth--register").innerHTML = "";

                // print the page
                document.querySelector("#clear-dashboard").classList.remove("hide")
                Nutshell();
              });
          } else {
            // If the user does already exist, throw an alert
            window.alert("Email already exists! 😭 Please log in.");
          }
        });
    }
  }
});

const render = () => {
  contentTarget.innerHTML += `
   
  
 
    `;
};

export const RegisterForm = () => {
  render();
};
