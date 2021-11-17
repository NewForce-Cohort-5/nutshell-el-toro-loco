import { Message } from "./MessageCard.js"
import { getMessage, useMessage } from "./MessageDataProvider";
import { MessageForm } from "./MessageForm";



const contentTarget = document.querySelector(`.chat-list`);



export const MessageList = () => {
    let chatHTML = '';
getMessage()
.then(() => {

    const allMessages = useMessage();

    chatHTML += `
    <section class=chat>
    <h2>Chat</h2>
    <div class ="chat-body>`
    
    allMessages.forEach(singMessage => chatHTML += Message(singMessage));


    contentTarget.innerHTML = `${chatHTML}`
})
}