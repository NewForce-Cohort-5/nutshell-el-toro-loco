let taskArray = []

//copy clean information to use
export const useTasks = () => {
    return taskArray.slice()
}

//git clean information
export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(dirtyTask => dirtyTask.json())
        .then(cleanTask => {
            taskArray = cleanTask
        })
}

//Make a save request
export const saveTask = () => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}

//deleteTask fetch call. Needs to target task id

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
}

//updateTask fetch call. 
export const updateTask = task => {

    return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}


