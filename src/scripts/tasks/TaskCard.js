//Author: Nick
//Purpose:Task card

export const Task = (task) => {
    return `
    <div class="taskTag">
    <div class="taskName">Task: ${task.taskName}</div>
    <div class="taskDetails">Details: ${task.taskDetail}</div>
    <div class="taskComplete">Complete By: ${task.completeBy}</div>
    <div class="completedCSS">
    <div><label for="completed">Completed</label></div>
    <div><input class="completeTask" type="checkbox" placeholder="completed" id="completeNote--${task.id}""></div>
    </div>
 <button class="formButton" id="edit--${task.id}">Edit</button>
    
</div>
`
}




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