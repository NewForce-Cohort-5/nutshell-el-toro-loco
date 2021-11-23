import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { taskList } from "./Tasks/TaskList.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"
// import { EventEditForm } from "./events/EventCard.js"
import { taskForm } from "./Tasks/TaskForm.js"



/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/



const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    Nutshell()
}

function showChat() {
    document.getElementById("chat-container").style.display= "block"
}
const eventHub = document.querySelector("body")
//Event Listener for edit form.  
eventHub.addEventListener("click", (event) => {
    if (event.target.id === "login__button") {
showChat()
  } } )
// taskList()
// taskForm()
// EventList()
// EventForm()
// MessageList();
// MessageForm();


