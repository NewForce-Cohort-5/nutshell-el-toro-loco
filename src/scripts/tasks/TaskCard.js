

export const Task = (task) => {
    `
    <div class="taskTag">
  <div class="taskName">${task.taskName}</div>
  <div class="taskDetails">${task.taskDetail}</div>
  <div class="taskComplete">${task.completeBy}</div>
  
 <button id="edit--${task.id}">Edit</button>
    
</div>
`
}



// ${singleTask.complete ?
//     `<p class="complete"></p>`
//     :
//     `<p class="incomplete"></p>`
    // }
