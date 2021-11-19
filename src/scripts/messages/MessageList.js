//Author: Jordan
//Purpose: Convert input message to HTML and print list to DOM

import { getUsers, useUsers } from "../users/UsersDataProvider.js";
import { Message } from "./MessageCard.js"
import { getMessage, useMessage} from "./MessageDataProvider.js";
import { MessageForm } from "./MessageForm.js";







export const MessageList = () => {
    
    const contentTarget = document.querySelector('.chat-list');
    
getMessage()
.then(getUsers)
.then(() => {

    
    
    let allMessages = useMessage();
    let users = useUsers()

    let chatHTML = '';


    
    allMessages.forEach(singleMessage => {
        let singleUser = users.find(x => singleMessage.userId === x.id)
        // if(singleMessage.userId === +sessionStorage.activeUser)
    chatHTML += Message(singleMessage, singleUser)

});

contentTarget.innerHTML = `
    
<article>
${chatHTML}
</article>
`

});
}