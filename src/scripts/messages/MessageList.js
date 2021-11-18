//Author: Jordan
//Purpose: Convert input message to HTML and print list to DOM

import { Message } from "./MessageCard.js"
import { getMessage, useMessage } from "./MessageDataProvider.js";
import { MessageForm } from "./MessageForm.js";



const contentTarget = document.querySelector('.chat-list');



export const MessageList = () => {
    
getMessage()
.then(() => {

    let chatHTML = '';
    
    const allMessages = useMessage();


    
    allMessages.forEach(singleMessage => chatHTML += Message(singleMessage));


    contentTarget.innerHTML = `${chatHTML}`
})
}