//author: jonah
// save and edit form

// import { EventEditForm } from "./EventEditForm.js"
import { EventList } from "./EventList.js"
import { useEvents } from "./EventDataProvider.js"
import { updateEvent } from "./EventDataProvider.js"

//do i need two parameters here, one to get the events data and one to get the users id or will it be able to tie userid back to id?
/* <button class="formButton" id="edit-${events.id}">Edit</button> */


// const contentTarget = document.querySelector(".event-list")

export const Event = (events) => {
  if (events.userId === +sessionStorage.activeUser) {
    return `
    <section class="eventCard"> 
           <div class="event-name">${events.eventName}</div>
           <div class="event-date">${events.eventDate}</div>
           <div class="event-location">${events.eventLocation}</div>

    </section>

    <button type="button" class="btn btn-primary" id="EventEditModal--${events.id}" data-bs-toggle="modal" data-bs-target="#EventEditModality-${events.id}">
       Edit Event
     </button>

     <div class="modal fade" id="EventEditModality-${events.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content" style=" background-color: rgba(200, 200, 200, 0.8);">
           <div class="modal-header">Add Event</div>
             <div class="modal-body">
             <form class="eventForm">
                 <div  style=" background-color: rgba(228, 230, 230, 0.8);">
                    <input style=" background-color: rgba(228, 230, 230, 0.8);" id="eventNameChanges-${events.id}" type="text" value="${events.eventName}">
                 </div>
                 <div action="eventLocation">
                    <input style=" background-color: rgba(228, 230, 230, 0.8);" id="eventLocationChanges-${events.id}" type="text" value="${events.eventLocation}">
                 </div>
                 <div action="addDate" class="addDate">
                         <input style=" background-color: rgba(228, 230, 230, 0.8);" type="Date" name="Date" id="eventDateChanges-${events.id}" value="${events.eventDate}">        
                 </div>
             </form>
           <div class="modal-footer">
             <button type="button" id="saveEditedEvent-${events.id}" class="btn btn-primary" data-bs-dismiss="modal">Save Event</button>      
           </div>
       </div>
    </div>
    </div>
    </div>
    `
} else {
  return ``
}
}


document.querySelector("body").addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEditedEvent")){
        // console.log("you got mail")
        // Make a new object representation of a note
        const editedEvent = {
            id: event.target.id.split("-")[1],
            userId: +sessionStorage.getItem("activeUser"),
            eventName: document.querySelector(`#eventNameChanges-${+event.target.id.split("-")[1]}`).value,
            eventDate: document.querySelector(`#eventDateChanges-${+event.target.id.split("-")[1]}`).value,
            eventLocation: document.querySelector(`#eventLocationChanges-${+event.target.id.split("-")[1]}`).value
        }
        //  console.log(editedEvent)

        if ( editedEvent.eventName === '' ||  editedEvent.eventDate === '' ||  editedEvent.eventLocation === '') {
          alert('Please enter valid values')}
       else{
        
        // Send to json-server and refresh the list
        updateEvent(editedEvent).then(EventList)
       }
    }
})



const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit-")){
        const eventId = +eventObject.target.id.split("--")[1]
        EventEditForm(eventId);
    }
})

