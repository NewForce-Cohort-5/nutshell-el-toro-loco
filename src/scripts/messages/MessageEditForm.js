import { getUsers, useUsers } from "../users/UsersDataProvider.js";
import { useMessage, getMessage,  } from "./MessageDataProvider.js";
import { MessageList } from "./MessageList.js";


export const MessageEditForm = (chatId) => {
    const contentTarget = document.querySelector('.chat-form');


// Give compenent access to app messages

    const alltheMessages = useMessage();

    const messageWeWantToEdit = alltheMessages.find(singleMessage => singleMessage.id === chatId)

    contentTarget.innerHTML = `
    <section class="edit-chat-container">
    <h3>Edit Message</h3>
    <input type="textarea" id="edit-chat-text" class="edit-chat-text" placeholder="enter message..">
    <button id="sendEditedMessage">Send</button>
    </section>
    `

    contentTarget.addEventListener("click", e => {
        if(e.target.id.startsWith("sendEditedMessage")){


            // new object representation
            const editedMessage = {
                id: event.target.id.split('-')[1], // how can you get the note's id?
                message: document.querySelector('#edit-chat-text').value, // get value of text from input
            }

            console.log(editedMessage)

            ;

            if (editedMessage.message === ''){
            alert('Please enter valid input values')}
            else{

                // send to json-server and refresh the list
                updateMessage(editedMessage).then(MessageList);
            }


        }
    })
}