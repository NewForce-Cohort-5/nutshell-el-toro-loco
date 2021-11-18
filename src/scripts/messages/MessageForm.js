//Author: Jordan
//Purpose: Make a form to enter new message


import { getMessage, saveMessage, useMessage } from "./MessageDataProvider.js";
import { MessageList } from "./MessageList.js";





const contentTarget = document.querySelector('.chat-list');


 
contentTarget.addEventListener("click", event => {
  if (event.target.id === "sendMessage") {
    // console.log('hello

    event.preventDefault();

    // Convert the date from it's default value
    
    const newChat = {
      name: document.querySelector('#message-name').value,
      text: document.querySelector('#message-text').value,
    }

    // Clear form values after creating form body data
    document.querySelector('#message-name').value = '';
    document.querySelector('#message-text').value = '';



    // If any of the form values are empty then display where valid information is needed
    if (newChat.name === 'Invalid Date' ||  newChat.text === '') {
      alert('Please enter name and/or message')

    // Otherwise we can go ahead and make this a new note
    } else {



      saveMessage(newChat)
      .then(MessageList);
    }
  }
});


const openChat = () => {
  document.getElementById('chat-box').style.display='block';
  $('.chat-button').hide()
}

const closeChat = () => {
  document.getElementById('chat-box').style.display='none';
  $('.chat-button').show()
}



export const MessageForm = () => {
  return getMessage()
  .then(() =>{
    contentTarget.innerHTML += `
        <section class="message-container">
        <button type="button" class="chat-button" onclick="${openChat()}">Chat</button>
            
        
        <div class="chat-box" id="chat-box">
        <h2>Message</h2>
        <form class="form-container">
            <textarea id="message-text" type="text" placeholder="New message.." required=""></textarea>
            <button type="submit" id="sendMessage">Send</button>
            <button type="button" onclick="${closeChat()}">Close</button>
            </form>
            </div>
        </section>
    `
  })
}


 
