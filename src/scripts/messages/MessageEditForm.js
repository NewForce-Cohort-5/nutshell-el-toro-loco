import { getUsers, useUsers } from "../users/UsersDataProvider.js";
import { Message } from "./MessageCard.js";
import { useMessage, getMessage, updateMessage,  } from "./MessageDataProvider.js";


export const MessageEditForm = (chatId) => {
    const contentTarget = document.querySelector('.chat-form');


// Give compenent access to app messages

    const alltheMessages = useMessage();
    const usersArray = useUsers()

    const messageWeWantToEdit = alltheMessages.find(singleMessage => singleMessage.id === chatId)

    contentTarget.innerHTML = `
    <section class="edit-chat-container">
    <input type="textarea" id="edit-chat-text" class="edit-chat-text" value="${messageWeWantToEdit.message}" placeholder="edit message..">
    <button id="sendEditedMessage-${chatId}" class="btn btn-primary">Send</button>
    </section>
    `

    contentTarget.addEventListener("click", e => {
        if(e.target.id.startsWith("sendEditedMessage")){


            // new object representation
            const editedMessage = {
                id: +e.target.id.split('-')[1], // how can you get the note's id?
                message: document.querySelector('#edit-chat-text').value, // get value of text from input
                userId: +document.querySelector("#users-FK").value
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