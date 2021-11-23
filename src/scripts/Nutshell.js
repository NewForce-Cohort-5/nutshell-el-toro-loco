import {LogOutButton} from "./auth/LogoutButton.js"
import { MessageForm } from "./messages/MessageForm.js"
import { MessageList } from "./messages/MessageList.js"
import { taskList } from "./Tasks/TaskList.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"

import { taskForm } from "./Tasks/TaskForm.js"

export const Nutshell = () => {

    LogOutButton();
    MessageList();
    MessageForm();
    taskList()
    taskForm()
    EventList()
    EventForm()
}

