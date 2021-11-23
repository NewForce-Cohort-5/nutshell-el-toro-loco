//Author: Nick
//Purpose:

import { getTasks, useTasks } from "./TaskDataProvider.js";
import { Task } from "./TaskCard.js";
import { completeTask } from "./TaskDataProvider.js";




export const taskList = () => {
    //get referecnce to array
    const contentTarget = document.querySelector(".task-list")

    getTasks()
    .then(() => {
        let allTheTasks = useTasks()
        
        let sortedTasks = allTheTasks.sort((a,b) => {
            return new Date(a.completeBy) - new Date (b.completeBy)})

        let taskHTML = ""
     
        sortedTasks.forEach((singleTask) => {
            if (singleTask.complete === false) {
            taskHTML += Task(singleTask)
            
        }})
        contentTarget.innerHTML = `
        ${taskHTML}
        `
    })
}

//Make a function to change completed status if checkbox is checked

document.querySelector(".task-list").addEventListener("change" , (eventObject) => {
    
    if (eventObject.target.checked === true) {
        const checkedTask = eventObject.target.id.split("--")[1]

        completeTask(checkedTask)
        .then(taskList)
    }
})