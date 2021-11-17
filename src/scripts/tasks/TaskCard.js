

export const Task = (singleTask) => {
    `
    <div class="taskTag">
  <div class="taskName">${singleTask.taskName}</div>
  <div class="taskDetails">${singleTask.taskDetail}</div>
  <div class="taskComplete">${singleTask.completedBy}</div>
  
  ${singleTask.complete ?
    `<p class="complete"></p>`
    :
    `<p class="incomplete"></p>`
    }

    <button id="edit--${singleTask.id}">Edit</button>
</div>
`
}