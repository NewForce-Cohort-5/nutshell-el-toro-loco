//author: Akiko Endo --purpose: to print news on DOM
import { useNews, getNews, saveNews } from "./NewsDataProvider.js"
import { news } from "./NewsCard.js"
import { articleForm } from "./NewsForm.js"

const listContentTarget = document.querySelector(".news-list")

export const NewsList = () => {
    getNews ()
    .then (() => {
        let articlesArray = useNews ()
        let articlesArraySortedbyDate = articlesArray.sort((a,b) => { return new Date(b.date) - new Date(a.date )})

        
        console.log(articlesArraySortedbyDate)
        let newsHTML = ""

        articlesArraySortedbyDate.forEach((singleObj) => {
            newsHTML+= news(singleObj)
        });
        
        listContentTarget.innerHTML = `
        <h2>List of articles</h2>
        ${newsHTML}`
    })
}