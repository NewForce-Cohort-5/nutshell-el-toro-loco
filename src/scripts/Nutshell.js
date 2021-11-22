import {LogOutButton} from "./auth/LogoutButton.js"
import { MessageForm } from "./messages/MessageForm.js"
import { MessageList } from "./messages/MessageList.js"

import { taskList } from "./Tasks/TaskList.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"

import { taskForm } from "./Tasks/TaskForm.js"

export const Nutshell = () => {

    LogOutButton();
    showChat();
    MessageList();
    MessageForm();
    taskList()
    taskForm()
// EventList()
// EventForm()

   
      // Render all your UI components here
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