//Author: Jordan
//Purpose: Make a form to enter new message


import { getMessage, saveMessage, useMessage } from "./MessageDataProvider.js";
import { MessageList } from "./MessageList.js";


// var button = document.getElementById("chat-send");
// var messages = document.getElementById("chat-text");
// var textBox = document.getElementById("chat-list");

// button.addEventListener("click", function() {
//   var newChat = document.createElement("li");
//   newChat.innerHTML = textBox.value;
//   messages.appendChild(newChat);
//   textBox.value=""; 
  
// })





 
document.querySelector("body").addEventListener("click", event => {
 
  if (event.target.id === "sendMessage") {
    // console.log('hello')

    // event.preventDefault();

    // Convert the date from it's default value
    
    const newChat = {
      message: document.querySelector('#chat-text').value,
      userId: +sessionStorage.activeUser
      // userId: parseInt (sessionStorage.setItem('#activeUser').value)
    }

    console.log(newChat)

    // Clear form values after creating form body data
    document.querySelector('#chat-text').value = '';



    // If any of the form values are empty then display where valid information is needed
    if ( newChat.message === '') {
      alert('Please enter message')

    // Otherwise we can go ahead and make this a new note
    } else {



      saveMessage(newChat)
      .then(MessageList);
    }
  }
});






export const MessageForm = () => {
  const contentTarget = document.querySelector('.chat-form');

  // const openChat = () => {
  //   document.getElementById('chat-box').style.display='block';
  //   $('.chat-button').hide()
  // }
  
  // const closeChat = () => {
  //   document.getElementById('chat-box').style.display='none';
  //   $('.chat-button').show()
  // }
  

  
  
    contentTarget.innerHTML =  `
    <section class="chat-form">
    <textarea type="textarea" id="chat-text" class="chat-text" placeholder="enter message.."></textarea>
    <button id="sendMessage" class="btn btn-primary">Send</button>
    </section>
    `
  }

  



 
