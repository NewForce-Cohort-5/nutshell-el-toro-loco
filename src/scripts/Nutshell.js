import {LogOutButton} from "./auth/LogoutButton.js"
import { newArticle, articleForm } from "./news/NewsForm.js"
import {NewsList} from "./news/NewsList.js"
import { taskList } from "./Tasks/TaskList.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { MessageForm } from "./messages/MessageForm.js"
import { MessageList } from "./messages/MessageList.js"

export const Nutshell = () => {
    LogOutButton()

    newArticle()
    articleForm()
    NewsList()

  
    taskList()
    taskForm()
    
    EventList()
    EventForm()

    MessageList();
    MessageForm();
 
   
      // Render all your UI components here
      
}