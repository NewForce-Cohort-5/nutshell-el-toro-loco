import { getTasks, useTasks } from "./TaskDataProvider.js";
import { Task } from "./TaskCard.js";

const contentTarget = document.querySelector(".event-list")

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