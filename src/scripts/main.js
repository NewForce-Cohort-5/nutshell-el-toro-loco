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

//Had to add this function because css was messed up for this container
//Also had to add display type on index



