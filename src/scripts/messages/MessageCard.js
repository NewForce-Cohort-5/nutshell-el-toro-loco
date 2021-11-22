//Author: Jordan
//Purpose: Create a message component with event listener for events


import { MessageEditForm } from "./MessageEditForm.js";










    export const Message = (message, user) => {

        const eventHub = document.querySelector("body")
eventHub.addEventListener("click", e => {
    
    if (e.target.id.startsWith("editChat")) {
    const chatId = +e.target.id.split("-")[1]
    MessageEditForm(chatId);
    }}
    )


        if (message.userId === +sessionStorage.activeUser) {
            
        return `
        <section class="message-card">
<div class="message-text"><b>${user.email}:</b> <em>${message.message}</em></div>
<button class="message-edit btn btn-primary" id="editChat-${message.id}">modify</button>
</section>
        `
        
    } else {
        return `<section class="message-card">
        <div class="message-text"><b>${user.email}:</b> <em>${message.message}</em></div>
        </section>`
    }

    }

    // ${sessionStorage.getItem("activeUser", user.id)? `<button class="message-edit btn btn-primary" id="editChat-${message.id}">modify</button>` : ""}