//Author: Nick
//Purpose:Task card, edit form and edit save in form.

import { updateTask, useTasks } from "./TaskDataProvider.js"
import { taskList } from "./TaskList.js"

export const Task = (task) => {
  if (task.userId === +sessionStorage.activeUser) {
  return `
    <div class="taskTag">
    <div class="taskName">Task: ${task.taskName}</div>
    <div class="taskDetails">Details: ${task.taskDetail}</div>
    <div class="taskComplete">Complete By: ${task.completeBy}</div>
    <div class="completedCSS">
    <div><label for="completed">Completed</label></div>
    <div><input class="completeTask" type="checkbox" placeholder="completed" id="completeNote--${task.id}"></div>
    </div>
     
</div>


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="taskEditModalButton-${task.id}" data-bs-toggle="modal" data-bs-target="#taskEditModal-${task.id}">
 Edit Task
</button>

<!-- Modal -->
<div class="modal fade" id="taskEditModal-${task.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Edit Task</div>
        <div class="modal-body">
       
            <div >
                <input id="taskEditName-${task.id}" type="text" value="${task.taskName}">
            </div>
            
            <div >
            <textarea name="" id="taskEditDetails-${task.id}" cols="30" rows="10">${task.taskDetail}</textarea>
            </div>
    
            <div action="addDate" id="editTaskDate">Complete by:
                    <input type="Date" name="Date" id="taskEditDate-${task.id}" value="${task.completeBy}">        
            </div>
    
        
      <div class="modal-footer">
        <button id="saveEditedTask-${task.id}" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
      </div>
    
  </div>
</div>
</div>
</div>
  
`
  } else {
    return ``
  }
}

 //Target save button.
const eventHub = document.querySelector("body")

//Event Listener for edit form.  
eventHub.addEventListener("click", (event) => {
  if(event.target.id.startsWith("saveEditedTask")) {

    //Make a new object representation of the task
    //Add + in front of any number
    //The id is pulled from the save button
    const editedTask = {
      userId: +sessionStorage.getItem("activeUser"),      
      taskName: document.querySelector(`#taskEditName-${+event.target.id.split("-")[1]}`).value,
      taskDetail: document.querySelector(`#taskEditDetails-${+event.target.id.split("-")[1]}`).value,
      completeBy: document.querySelector(`#taskEditDate-${+event.target.id.split("-")[1]}`).value,
      complete: false,
      id: +event.target.id.split("-")[1],
    }
         
    // document.querySelector(`#taskEditName`).value = ""
    // document.querySelector(`#taskEditDetails`).value = ""
    // document.querySelector(`#taskEditDate`).value = ""
    
    console.log(editedTask)
    
    //Send new form to json server and refresh task list
    updateTask(editedTask)
    .then(taskList)
  }
})



// export const CheckedTask = (task) => {
//     return `
//     <section class = "task-container flex-container"
//         <div class = "task-card">
//             <p>Task: ${task.task}</p>
//             <p>Date: ${task.date}</p>
//             <div class = "checkbox"
//             <p>Completed?<input type="checkbox" class="checkboxflag" id="completeNote--${taskNote.id}" checked></p>
//             </div>
//         </div>
//     </section>
//     `
// }