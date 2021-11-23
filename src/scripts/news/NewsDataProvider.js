//author: Akiko Endo --purpose: to retireave, update, delete the data in the database.json

let news = []

export const useNews = () => {
    return news.slice()
}

export const getNews = () => {
    return fetch('http://localhost:8088/news')
        .then(response => response.json())
        .then(parsedNotes => {
            news = parsedNotes
        })

}

export const saveNews = (news) => {
    return fetch('http://localhost:8088/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
    
}

export const deleteNews = (newsId) => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE"
    })
}

export const updateNews = (news) => {
    return fetch(`http://localhost:8088/news/${news.id}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(news)
    })
}