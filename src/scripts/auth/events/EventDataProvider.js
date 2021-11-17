let eventsArray = []

export const useEvents = () => {
    return eventsArray.slice()
}

export const getEvents = () => {
    return fetch('http://localhost:8088/database')
        .then(oldEvents => oldEvents.json())
        .then(newEvents => {
            eventsArray = newEvents
        })
}

export const saveEvents = (events) => {
    return fetch('http://localhost:8088/database', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
    .then(getEvents)
}