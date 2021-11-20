import { LoginForm } from "./LoginForm.js"
import { RegisterForm } from "./RegisterForm.js"

const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".logOutButton")

export const LogOutButton = () => {
    contentTarget.innerHTML += `<button id="logout-button" class="btn btn-primary">Log Out</button>`
}

eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "logout-button"){
        // clear session storage
        sessionStorage.clear()

        // clear the DOM
        document.querySelector(".chat-list").innerHTML = ""
        document.querySelector(".chat-form").innerHTML = ""
        // Reprint the login and register form
        LoginForm()
        RegisterForm()
    }
})