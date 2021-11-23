//Dummy data for json
"tasks" [
    {
      "id": 1,
      "userId": 1,
      "taskName": "Garbage",
      "taskDetail": "Take out garbage",
      "completeBy": "2021-11-17",
      "complete": false
    },
    {
      "id": 2,
      "userId": 1,
      "taskName": "Dishes",
      "taskDetail": "Wash Dishes",
      "completeBy": "2021-11-18",
      "complete": false
    },
    {
      "userId": 1,
      "taskName": "House",
      "taskDetail": "Clean gutters",
      "completeBy": "2021-11-30",
      "complete": false,
      "id": 3
    },
    {
      "userId": 1,
      "taskName": "Car",
      "taskDetail": "Wash the car when you get home.",
      "completeBy": "2021-11-20",
      "complete": false,
      "id": 4
    },
    {
      "userId": 1,
      "taskName": "Carpets",
      "taskDetail": "Shampoo carpets.",
      "completeBy": "2021-11-14",
      "complete": false,
      "id": 5
    },
    {
      "userId": 1,
      "taskName": "Dog",
      "taskDetail": "Meela needs her nails trimmed.",
      "completeBy": "2021-12-02",
      "complete": false,
      "id": 6
    }]
    },
    {
      "userId": 1,
      "taskName": "Christmas Presents",
      "taskDetail": "We need all presents to be wrapped.",
      "completeBy": "2021-12-25",
      "complete": false,
      "id": 7
    }

    document.querySelector(".task-list").addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveTaskButton") {
        
        //Make a new object representation of the task
        const newTask = {
          //Key value pairs here
          //Add + to id to make it a number
          userId: 1,      
          taskName: document.querySelector(`#taskName`).value,
          taskDetail: document.querySelector(`#taskDetails`).value,
          completeBy: document.querySelector(`#taskDate`).value,
          complete: false
        }
        console.log(newTask)
        saveTask(newTask)
        .then(taskList)
      }
    })
    
