


//do i need two parameters here, one to get the events data and one to get the users id or will it be able to tie userid back to id?

export const Event = (events) => {
    return `
    <section id="--${users.userId}"> 
           <div class="event-identifier">${events.id}</div>
           <div class="event-name">${events.eventName}</div>
           <div class="event-date">${events.eventDate}</div>
           <div class="event-location">${events.eventLocation}</div>
    </section>
    `
}