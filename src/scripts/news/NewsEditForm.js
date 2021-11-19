//author: Akiko Endo --purpose: 1. to generate an edit form, and 2. update the database based on the information in the edit form

import {useNews, updateNews} from "./NewsDataProvider.js"
import {NewsList} from "./NewsList.js"

const contentTarget = document.querySelector(".news-list")

export const NewsEditForm = (newsId) => {

const allNews = useNews()

const newsWeWantToEdit = allNews.find(singleNews => singleNews.id === newsId)

contentTarget.innerHTML = `
<!-- Modal -->
<div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Add News</div>
        <div class="modal-body">
        <form class="newsEditForm">


        
<h3>Title: ${newsWeWantToEdit.title}</h3>
<p><a href=${newsWeWantToEdit.url} target="_blank" rel="noopener noreferrer"> the article url </a></p>
<p>Date of the article saved: ${new Date (newsWeWantToEdit.date).toLocaleDateString('en-US')}</p>
<p>Summary: ${newsWeWantToEdit.synopsis}</p>
<button id="saveNewsChanges--${newsId}" class="btn btn-primary">Save Changes</button>
</div>
`
}

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNewsChanges")){

        const editedNews = {
            id: event.target.id.split("--")[1],
            userId:+sessionStorage.getItem("activeUser"),
            url: document.querySelector("#newsUrl").value,
        }

    }
} 
)