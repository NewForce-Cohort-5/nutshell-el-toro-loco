//Author: Nick
//Purpose: Make a form to enter new tasks and function to save new tasks.

import { saveTask, getTasks, useTasks } from "./TaskDataProvider.js";
import { taskList } from "./TaskList.js";



export const taskForm = () => {
  const contentTarget = document.querySelector(".task-form")
  contentTarget.innerHTML = `
    
    
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#eateriesModal">
  Add Task
</button>

<!-- Modal -->
<div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Add Task</div>
        <div class="modal-body">
        <form class="taskForm">
            <div action="taskName">
                <input id="taskName" type="text" placeholder="Task">
            </div>
            
            <div action="taskDetails">
            <textarea name="" id="taskDetails" cols="30" rows="10" placeholder="Details"></textarea>
            </div>
    
            <div action="addDate" class="taskDate">Complete by:
                    <input type="Date" name="Date" id="taskDate">        
            </div>
    
        </form>
      <div class="modal-footer">
        <button id="saveTaskButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
      </div>
    
  </div>
</div>
</div>
</div>
    
    `


}

//Click event to save new task
// contentTarget.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id === "saveTaskButton") {

//     //Make a new object representation of the task
//     const newTask = {
//       //Key value pairs here
//       //Add + to id to make it a number
//       userId: 1,      
//       taskName: document.querySelector(`#taskDate`).value,
//       taskDetail: document.querySelector(`#taskDetails`).value,
//       completeBy: document.querySelector(`#taskDate`).value,
//       complete: false
//     }
//     saveTask(newTask)
//     .then(taskList)
//   }
// })

//userId: +sessionStorage.getItem("activeUser"),