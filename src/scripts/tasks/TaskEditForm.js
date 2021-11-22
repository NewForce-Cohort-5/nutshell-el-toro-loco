import { useTasks, getTasks } from "./TaskDataProvider.js"
import { taskList } from "./TaskList.js"
import { taskForm } from "./TaskForm.js"

// //Target the place we want the form to print
// const editTarget = document.querySelector("#formEditButton")

// //Make a task edit form
// export const taskEditForm = (taskID) => {
//     //Give this component access to our application's task state
//     const allTasks = useTasks() 

//     //find the task that we clicked by it's id using .find. The id needs to be in the button to be targeted.
//     const taskWeWantToEdit = allTasks.find(singleTask=> singleTask.id === taskID)

//     //Print the form.
//     return getTasks()
//     .then (() => {
      
//       //Give this component access to our application's task state for edit form
//     const allTasks = useTasks() 

//     //find the task that we clicked by it's id using .find. The id needs to be in the button to be targeted.
//     const taskWeWantToEdit = allTasks.find(singleTask=> singleTask.id === taskID)

//         editTarget.innerHTML `
        

// <!-- Modal -->
// <div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">Add Task</div>
//         <div class="modal-body">
//         <form class="taskForm">
//             <div action="taskName">
//                 <input id="taskName" type="text" placeholder="Task">
//             </div>
            
//             <div action="taskDetails">
//             <textarea name="" id="taskDetails" cols="30" rows="10" placeholder="Details"></textarea>
//             </div>
    
//             <div action="addDate" class="taskDate">Complete by:
//                     <input type="Date" name="Date" id="taskDate">        
//             </div>
    
//         </form>
//       <div class="modal-footer">
//         <button id="saveTaskButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
//       </div>
    
//   </div>
// </div>
// </div>
// </div>
        
//         `
//     })

// }

// checkbox.addEventListener("change", function() {
     


// //Find the task that we clicked on by its id
// const taskWeWantToEdit = allTasks.find(singleTask=> singleTask.id === taskId)   

//     if (complete.checked) {
//      const taskToEdit = {

//     id: +event.target.id.split("--")[1],
//     userId: +sessionStorage.getItem("activeUser"),
//     taskName: document.querySelector(`#taskDate`).value,
//     taskDetail: document.querySelector(`#taskDetails`).value,
//     completeBy: document.querySelector(`#taskDate`).value,
//     complete: true
        
       
//         }
//     updateTask(taskToEdit)
//     }
// })



// export const completedTask = (taskID) => {
    

    
// }


// editTarget.addEventListener()

