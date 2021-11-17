import { saveMessage } from "./MessageDataProvider";
import { MessageList } from "./MessageList";




const contentTarget = document.querySelector('body');


 
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






const render = () => {
    contentTarget.innerHTML += `
        <section class="message-container">
            <input id="message__name" type="text" placeholder="Enter Name..">
            <input id="message__text" type="text" placeholder="New message..">
            <button id="sendMessage">Send</button>
        </section>
    `
}

export const MessageForm = () => {
    render()
}