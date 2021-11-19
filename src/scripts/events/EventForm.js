import { getEvents, useEvents } from "./EventDataProvider.js"
import { saveEvents } from "./EventDataProvider.js"
import { EventList } from "./EventList.js"





const contentTarget = document.querySelector(".event-form")
//sort then map

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvents") {

        const newEvent = {

            eventName: document.querySelector("#eventName").value,
            eventDate: document.querySelector("#eventDate").value,
            eventLocation: document.querySelector("#eventLocation").value,
            userId: 1
            // +sessionStorage.getItem("activeUser")
        }
        console.log(newEvent)
        document.querySelector("#eventName").value = ""
        document.querySelector("#eventDate").value = ""
        document.querySelector("#eventLocation").value = ""
       
        saveEvents(newEvent)
        .then(EventList) // Refresh your list of events once you've saved your new one
    }
})

export const EventForm = () => {
    return getEvents ()
    .then(() => {
        //do i need a line here to useEvents

    contentTarget.innerHTML = `
    <button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#eventModal">
       Add Event
     </button>
     
     <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
           <div class="modal-header">Add Task</div>
             <div class="modal-body">
             <form class="eventForm">
                 <div action="eventName">
                     <input id="eventName" type="text" placeholder="Enter the name of your event here">
                 </div>
                 <div action="eventLocation">
                 <textarea name="" id="eventLocation" placeholder="Enter the location of your event here"></textarea>
                 </div>
                 <div action="addDate" class="addDate">Select the date of your event
                         <input type="Date" name="Date" id="eventDate">        
                 </div>
             </form>
           <div class="modal-footer">
             <button type="button" id="saveEvents" class="btn btn-primary" data-bs-dismiss="modal">Save Event</button>
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit Event</button>      
           </div>
       </div>
    </div>
    </div>
    </div>
    `    
    })
}



