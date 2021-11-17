import { getEvents, useEvents } from "./EventDataProvider";
import { Event } from "./EventCard.js";




const contentTarget = document.querySelector(".event-container")

export const EventList = () => {
    getEvents()
    .then(() => {

        let allTheEvents = useEvents();

        let EventsHTML = "";

        allTheEvents.forEach((singleEvent) => {

            EventsHTML += Event(singleEvent);

        });
       
        contentTarget.innerHTML = 
        `
    <h3>Events</h3>
    ${EventsHTML}
    ` 
    });
};

//where would i call eventForm and EventList