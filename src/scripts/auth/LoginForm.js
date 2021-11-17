import {Nutshell} from "../Nutshell.js"
const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector(".container")

// When the user clicks the login button
eventHub.addEventListener("click", e => {
    if (e.target.id === "login__button") {

        // Get their email from the login form
        const email = document.querySelector("#login__email").value

        // Query the databaes for users that have that email
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(response => response.json())
            .then(users => {

                // if a matching user is found (i.e. if the user exists in the database)
                if (users.length > 0) {
                    const user = users[0]
                    // Add their id to session storage, which logs them in
                    sessionStorage.setItem("activeUser", user.id)

                    // clear both forms
                    document.querySelector(".auth--login").innerHTML = ""
                    document.querySelector(".auth--register").innerHTML = ""

                    // print the page
                    Nutshell()
                } else {
                    window.alert("User does not exist! 😭 Please register.")
                }
            })
    }
})


const render = () => {
    contentTarget.innerHTML += `
        <section class="login">
            <input id="login__email" type="text" placeholder="Log In With Email">
            <button id="login__button">Log In</button>
        </section>
    `
}

export const LoginForm = () => {
    render()
}
