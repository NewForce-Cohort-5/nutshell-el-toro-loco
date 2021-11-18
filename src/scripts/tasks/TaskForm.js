//Author: Nick
//Purpose: Make a form to enter new tasks

import { saveTask, getTasks, useTasks } from "./TaskDataProvider.js";

const contentTarget = document.querySelector(".event-form")

export const taskForm = () => {
    
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
    
            <div action="addDate" class="addDate">Complete by:
                    <input type="Date" name="Date" id="Date">        
            </div>
    
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
      </div>
    
  </div>
</div>
</div>
</div>
    
    `
}