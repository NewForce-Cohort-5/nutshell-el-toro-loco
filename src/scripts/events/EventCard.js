import { EventEditForm } from "./EventEditForm.js"
import { EventList } from "./EventList.js"

//do i need two parameters here, one to get the events data and one to get the users id or will it be able to tie userid back to id?

export const Event = (events) => {
    return `
    <section class="eventCard"> 
           <div class="event-identifier">${events.id}</div>
           <div class="event-name">${events.eventName}</div>
           <div class="event-date">${events.eventDate}</div>
           <div class="event-location">${events.eventLocation}</div>
    </section>
    `
}

// const eventHub = document.querySelector("body")
// eventHub.addEventListener("click", Object => {
//     if (Object.target.id.startsWith("deleteNote")) {

//         const idToDelete = Object.target.id.split("--")[1]
    

//         console.log(idToDelete)
//         deleteNote (idToDelete)
//         .then(NoteList)

//     }
// });



const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit--")){
        const eventId = +eventObject.target.id.split("--")[1]
        EventEditForm(eventId);
    }
})

