//Author: Jordan
//Purpose: Create a message component with event listener for events


import { MessageEditForm } from "./MessageEditForm.js";










    export const Message = (message) => {
        return `
        <section class="message-card">
<div class="message-text"><b>Anon:</b> <em>${message.message}</em></div>
<button class="message-edit btn btn-primary" id="editChat">modify</button>
</section>
        `
    }

    const eventHub = document.querySelector(".chat-list")
    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("editChat")) {
        const chatId = +e.target.id.split("--")[1]
        MessageEditForm(chatId);
        }}
        )