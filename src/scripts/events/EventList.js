import { getEvents, useEvents } from "../events/EventDataProvider.js";
import { Event } from "../events/EventCard.js";


const contentTarget = document.querySelector(".event-list")

export const EventList = () => {
    getEvents()
    .then(() => {

        let allTheEvents = useEvents();
        const eventsArraySortedByDate = allTheEvents.sort((a,b) => { return new Date(a.eventDate) - new Date(b.eventDate)})

        let EventsHTML = "";
        
        eventsArraySortedByDate.forEach((singleEvent) => {
            EventsHTML += Event(singleEvent);
        });
       //css selector first child
        contentTarget.innerHTML = 
        `
    <h3>Events</h3>
    
    <div class = "eventList"> ${EventsHTML} </div>
    ` 
    });
};

//where would i call eventForm and EventList