// import { useEvents, getEvents } from "./EventDataProvider.js";
// import { EventList } from "./EventList.js";
// import { updateEvent } from "./EventDataProvider.js";


// const contentTarget = document.querySelector(".event-list")

// export const EventEditForm = (eventId) => {
//     // Give this component access to our application's state
//     const allEvents = useEvents();

//     // Find the note that we clicked on by its unique id
//     const eventWeWantToEdit = allEvents.find(singleEvent=> singleEvent.id === eventId)

//     contentTarget.innerHTML = `
//         <h2>Edit Event</h2>
//             <input type="text" value="${eventWeWantToEdit.eventName}" id="eventNameChanges" />
//             <input type="date" id="eventDateChanges" value="${eventWeWantToEdit.eventDate}" />
//             <input type="text" value="${eventWeWantToEdit.eventLocation}" id="eventLocationChanges" />
//             <button id="saveEventChanges-${eventId}">Save Changes</button>
//     `
// }

// contentTarget.addEventListener("click", (event) => {
//     if(event.target.id.startsWith("saveEventChanges")){

//         // Make a new object representation of a note
//         const editedEvent = {
//             id: event.target.id.split("-")[1],
//             eventName: document.querySelector("#eventNameChanges").value,
//             eventDate: document.querySelector("#eventDateChanges").value,
//             eventLocation: document.querySelector("#eventLocationChanges").value
//         }
//         // console.log(editedEvent)
//         // Send to json-server and refresh the list
//         updateEvent(editedEvent).then(EventList)

//     }
// })

















contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEvent")){

        // Make a new object representation of a note
        const editedNote = {
            id: event.target.id.split("-")[1],
            noteText: document.querySelector("#note-stuff").value,
            criminalId: +document.querySelector("#criminalEdit-FK").value,
            dateOfNote: document.querySelector("#note-date").value
        }
        // console.log(editedNote)
        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)

    }
})