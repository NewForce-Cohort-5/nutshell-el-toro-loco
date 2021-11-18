//Author: Nick
//Purpose:

import { getTasks, useTasks } from "./TaskDataProvider.js";
import { Task } from "./TaskCard.js";
import { completeTask } from "./TaskDataProvider.js";

const contentTarget = document.querySelector(".task-list")

export const taskList = () => {
    //get referecnce to array
    getTasks()
    .then(() => {
        let allTheTasks = useTasks()

        let taskHTML = ""
     
        allTheTasks.forEach((singleTask) => {
            taskHTML += Task(singleTask)
            
        });
        contentTarget.innerHTML = `
        ${taskHTML}
        `
    })
}

//Make a function to change completed status if checkbox is checked

contentTarget.addEventListener("change" , (eventObject) => {
    
    if (eventObject.target.checked === true) {
        const checkedTask = eventObject.target.id.split("--")[1]

        completeTask(checkedTask)
    }
})