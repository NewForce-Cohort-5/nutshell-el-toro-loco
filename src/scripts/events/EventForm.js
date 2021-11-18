import { getEvents, useEvents } from "./EventDataProvider.js"
import { saveEvents } from "./EventDataProvider.js"
import { EventList } from "./EventList.js"





const contentTarget = document.querySelector(".event-form")


document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {

        const newEvent = {
            eventName: document.querySelector("#eventName-text").value,
            eventDate: document.querySelector("#eventDate-text").value,
            eventLocation: document.querySelector("#eventLocation").value
            //also need to save userid
        }
        // console.log(newNote)
        document.querySelector("#eventName-text").value = ""
        document.querySelector("#eventDate-text").value = ""
        document.querySelector("#eventLocation-text").value = ""
       
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
                         <input type="Date" name="Date" id="Date">        
                 </div>
             </form>
           <div class="modal-footer">
             <button type="button" class="btn btn-primary">Save Event</button>
            
           </div>
       </div>
    </div>
    </div>
    </div>
    `    
    })
}

{/* <section>
        <H3 class="event-header">Please enter the details of your event here...</H3>
        <input class="form-control" type="textarea" id="eventName-text" placeholder="Enter name of event here...">
        <input class="form-control" type="date" id="eventDate-text">
        <input class="form-control" type="textarea" id="eventLocation-text" placeholder="Enter the location of the event here...">
        <button id="saveEvent">Save Event</button>
    </section>  */}