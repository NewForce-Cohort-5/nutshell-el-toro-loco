// When the user logs in, they should see their data printed to the DOM. You can accomplish this by retrieving their user Id from session storage and using it to query json-server for their associated data.


import {Nutshell} from "../Nutshell.js"
import { LogOutButton } from "./LogoutButton.js"
import { RegisterForm } from "./RegisterForm.js"

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
                    document.querySelector(".auth").innerHTML = ""

                    // print the page
                    document.querySelector("#clear-dashboard").classList.remove("hide")
                    Nutshell()
                } else {
                    window.alert("User does not exist! 😭 Please register.")
                }
            })
    }
})




const render = () => {
    contentTarget.innerHTML += 
    `
    <div class="row">
    <div class="col-md-6 mx-auto p-0">
        <div class="card">
            <div class="login-box">
                <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-space">
                        <div class="login">
                            <div class="group"> <label for="user" class="label">Email Address</label> <input id="login__email" type="text" class="input" placeholder="Enter your email"> </div>
                            <div class="group"> <input type="submit" id="login__button" class="button" value="Sign In"> </div>
                            <div class="hr"></div>
                            
                        </div>
                        <div class="sign-up-form">
                            <div class="group"> <label for="pass" class="label">Email Address</label> <input id="register--email" type="text" class="input" placeholder="Enter your email address"> </div>
                            <div class="group"> <input type="submit" id="register--button" class="button" value="Sign Up"> </div>
                            <div class="hr"></div>
                            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
    `
}

export const LoginForm = () => {
    render()
}


// const hideChatContainer = document.querySelector("#login__button")

// hideChatContainer.addEventListener("click", function() {
//     const bodyElement = document.querySelector("body")
    
// })


// const bodyElement = document.querySelector("hidden")

// bodyElement.classList.toggle("chat-container")