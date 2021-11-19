import { getEvents, useEvents } from "../events/EventDataProvider.js";
import { Event } from "../events/EventCard.js";


const contentTarget = document.querySelector(".event-list")

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