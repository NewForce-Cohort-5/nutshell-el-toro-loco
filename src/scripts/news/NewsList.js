//author: Akiko Endo --purpose: 1.to print news on DOM, 2.to delete a specific news item
 
import { useNews, getNews, saveNews } from "./NewsDataProvider.js"
import { news } from "./NewsCard.js"
import { articleForm } from "./NewsForm.js"


export const NewsList = () => {
    const listContentTarget = document.querySelector(".news-list")
    
getNews ()
    .then (() => {
        let articlesArray = useNews ()
        let articlesArraySortedbyDate = articlesArray.sort((a,b) => { return new Date(b.dateSaved) - new Date(a.dateSaved )})

        
        console.log(articlesArraySortedbyDate)
        let newsHTML = ""
//this below, maybe we can use filter or map to find object.userID === activeUser

        articlesArraySortedbyDate.forEach((singleObj) => {
            newsHTML+= news(singleObj)
            
        });
        
        listContentTarget.innerHTML = `
        <h2>List of articles</h2>
        ${newsHTML}`
    })
}