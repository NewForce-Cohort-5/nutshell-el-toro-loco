const eventHub = document.querySelector(".chat-list")

  eventHub.addEventListener("click", (eventObject) => {

    const chatId = eventObject.target.id.split("--")[1];

    if (eventObject.target.id.startsWith("editChat")) {
      // console.log("hello world")
     NoteEditForm(chatId);
    }

    export const Message = message => {
        return `
        <section class="message-card">
<div class="message-text">${message.userId}: ${message.text}</div>+
<button class="message-edit id="editChat">modify</button>
</section>
        `
    }