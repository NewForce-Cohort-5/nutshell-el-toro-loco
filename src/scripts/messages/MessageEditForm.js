import { getUsers, useUsers } from "../users/UsersDataProvider.js";
import { Message } from "./MessageCard.js";
import { useMessage, getMessage, updateMessage,  } from "./MessageDataProvider.js";
import { MessageForm } from "./MessageForm.js";
import { MessageList } from "./MessageList.js";


export const MessageEditForm = (chatId) => {
    const contentTarget = document.querySelector('.chat-form');


// Give compenent access to app messages

    const alltheMessages = useMessage();
    const usersArray = useUsers()

    const messageWeWantToEdit = alltheMessages.find(singleMessage => singleMessage.id === chatId)

    const cancelButton = () => {
        document.getElementById('edit-chat-form').reset();
    
    }

    contentTarget.innerHTML = `
    <section class="edit-chat-form">
    <input type="textarea" id="edit-chat-text" value="${messageWeWantToEdit.message}"placeholder="edit message.."></textarea>
    <button id="sendEditedMessage-${chatId}" class="btn btn-primary">Send</button>
    <button type="cancel" class="btn btn-secondary"  id=cancelButton-${chatId}>Cancel</button>
    </section>
    `
    
    
    contentTarget.addEventListener("click", e => {
        if(e.target.id.startsWith("sendEditedMessage")){

            // confirm('Are you sure you want to send this edited message?')


            // new object representation
            const editedMessage = {
                id: +e.target.id.split('-')[1], // how can you get the note's id?
                message: document.querySelector('#edit-chat-text').value, // get value of text from input
                userId: +sessionStorage.activeUser
            }
            console.log(editedMessage)

            ;

            if (editedMessage.message === ''){
            alert('Please enter valid input values')}

            else{

                // send to json-server and refresh the list
                updateMessage(editedMessage).then(MessageList);
            }
            
            // if (eventObject.target.id.startsWith("cancelButton")) {
      
            //     MessageList()
            // }

        }
    })
  
}

