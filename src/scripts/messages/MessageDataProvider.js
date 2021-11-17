let messages = [];

export const useMessage = () => {
  return messages.slice();
}


export const getMessage = () => {
  return fetch('http://localhost:8088/messages')
      .then(response => response.json())
      .then(parsedMessages => {
          messages = parsedMessages
      })

}

export const saveMessage = message => {
  return fetch('http://localhost:8088/messages', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
  })
  .then(getMessage) // After we add a message, get them all again so our new note appears in our collection
}



// export const updateMessage = message => {

//     return fetch(`http://localhost:8088/messages/${message.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(message)
//     })
  
//   }