import {LogOutButton} from "./auth/LogoutButton.js"
import { taskList } from "./Tasks/TaskList.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"

export const Nutshell = () => {

    LogOutButton()
      // Render all your UI components here
taskList()
taskForm()
EventList()
EventForm()
}

