//Author: Nick
//Purpose: Make a form to enter new tasks and function to save new tasks.

import { saveTask } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";



export const taskForm = () => {
  const contentTarget = document.querySelector(".task-form")  
  contentTarget.innerHTML = `
    
    
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#taskModal">
  Add Task
</button>

<!-- Modal -->
<div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Add Task</div>
        <div class="modal-body">
        <form class="taskForm">
            <div action="taskName">
            <input id="newTaskName" type="text" placeholder="Task">
            </div>
            
            <div action="taskDetails">
            <textarea name="" id="newTaskDetails" cols="30" rows="10" placeholder="Details"></textarea>
            </div>
    
            <div action="newAddDate" class="taskDate">Complete by:
            <input type="Date" name="Date" id="newTaskDate">        
            </div>
    
        </form>
      <div class="modal-footer">
        <button id="saveNewTask" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
      </div>
    
  </div>
</div>
</div>
</div>
    
    `
}

//Target body
const newTaskHub = document.querySelector("body")
//Click event to save new task
newTaskHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNewTask") {

    //Make a new object representation of the task
    const newTask = {
      //Key value pairs here
      //Add + to id to make it a number
      userId: +sessionStorage.getItem("activeUser"),     
      taskName: document.querySelector(`#newTaskName`).value,
      taskDetail: document.querySelector(`#newTaskDetails`).value,
      completeBy: document.querySelector(`#newTaskDate`).value,
      complete: false
    }
    console.log(newTask)
    saveTask(newTask)
    .then(taskList)
  }
})


// document.querySelector(".task-list").addEventListener("click", clickEvent => {
//   if (clickEvent.target.id === "saveEditTask") {
    
//     //Make a new object representation of the task
//     const editedTask = {
//       //Key value pairs here
//       //Add + to id to make it a number
//       userId: 1,      
//       taskName: document.querySelector(`#taskName`).value,
//       taskDetail: document.querySelector(`#taskDetails`).value,
//       completeBy: document.querySelector(`#taskDate`).value,
//       complete: false
//     }
//     updateTask(editedTask)
//     .then(taskList)
//   }
// })


//userId: +sessionStorage.getItem("activeUser"),