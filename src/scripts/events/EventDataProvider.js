let eventsArray = []

export const useEvents = () => {
    return eventsArray.slice()
}

export const getEvents = () => {
    return fetch('http://localhost:8088/events')
        .then(oldEvents => oldEvents.json())
        .then(newEvents => {
            eventsArray = newEvents
        })
}

export const saveEvents = (events) => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
    .then(getEvents)
}

export const updateEvent = events => {

    return fetch(`http://localhost:8088/events/${events.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })

}