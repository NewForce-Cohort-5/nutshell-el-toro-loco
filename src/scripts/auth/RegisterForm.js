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
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" id="taskEditModalButton" data-bs-toggle="modal" data-bs-target="#registerModal">
   Register
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">Edit Task</div>
          <div class="modal-body">
         
               <section class="register">
            <input id="register--email" class="formInput" type="text" placeholder=" Register with email">

            <button class="formButton" data-bs-dismiss="modal" id="register--button">Register</button>
        </section>
      
          
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
        </div>
      
    </div>
  </div>
  </div>
  </div>      
  
 
    `;
};

export const RegisterForm = () => {
  render();
};
