//author: Akiko Endo --purpose: 1. to generate HTML representations and to delete the spefici news item,  2. to generate an edit form, and 3. update the database based on the information in the edit form
import { deleteNews, updateNews } from "./NewsDataProvider.js";
import { NewsList } from "./NewsList.js";
// import { NewsEditForm } from "./NewsEditForm.js"
//<button id="edit--${taco.id}" class="btn btn-primary">Edit</button> from the news after the delete
export const news = (taco) =>  {
    
    return `
    <div class="newsCard" id="${taco.id}">
    <h3>Title: ${taco.title}</h3>
    <p><a href=${taco.url} target="_blank" rel="noopener noreferrer"> the article url </a></p>
    <p>Date of the article saved: ${new Date (taco.dateSaved).toLocaleDateString('en-US')}</p>
    <p>Last updated on ${new Date (taco.dateUpdated).toLocaleDateString('en-US')}</p>
    <p>Summary: ${taco.synopsis}</p>
    <button id="deleteNews--${taco.id}" class="formButton">Delete</button>
    
    </div>
        
    <!-- thi is for the edit form -->
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="newsEditModalButton--${taco.id}" data-bs-toggle="modal" data-bs-target="#newsEditModal-${taco.id}">
 Edit news details
</button>
    <!-- Modal -->
<div class="modal fade" id="newsEditModal-${taco.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Change Article Details</div>
        <div class="modal-body">
        <form class="newsEditForm">

        <div action="newsTitle">
            <input id="newsTitle-edit" type="text" value="${taco.title}">
        </div>

        <div action="newsUrl">
            <input name="" type="text" id="newsUrl-edit" cols="30" rows="10" value="${taco.url}">
        </div>

        <div action="newsSynopsis">
            <textarea name="newsSynopsis" id="newsSynopsis-edit" placeholder="News Synopsis goes here">${taco.synopsis}</textarea>
        </div>

        <div action="newsDateSaved">
            <input id="newsDateSaved-edit" value="${new Date (taco.dateSaved).toLocaleDateString('en-US')}"</input>
        </div>

        <div action="newsDateUpdated">
            <p id="newsDateUpdated-edit">Date of the article last updated: ${new Date (taco.dateUpdated).toLocaleDateString('en-US')}</p>
        </div>

        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"  id="saveNewsChanges--${taco.id}" data-bs-dismiss="modal">Save this changes</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>

  </div>
</div>
</div>
</div>
    `

}

//this is to overlap the dateUpdated for the empty string

if (document.getElementById("newsDateUpdated-edit") === " "){
    document.getElementById("newsDateUpdated-edit").innerHTML = `<p> It has not been updated</p>`
}

document.querySelector(".news-list").addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNewsChanges")){
        const nowDate = new Date()
        const editedNews = {
            id: event.target.id.split("--")[1],
            userId:+sessionStorage.getItem("activeUser"),
            url: document.querySelector("#newsUrl-edit").value,
            title: document.querySelector("#newsTitle-edit").value,
            synopsis:document.querySelector("#newsSynopsis-edit").value,
            dateSaved:document.querySelector("#newsDateSaved-edit").value,
            dateUpdated: nowDate
           
        }
        console.log(editedNews)
        debugger
        updateNews(editedNews).then(NewsList)
    }
})

const eventHub = document.querySelector(".news-list")

eventHub.addEventListener("click", removeEvent => {
    if (removeEvent.target.id.startsWith("deleteNews")) {
      
      const idToDelete = removeEvent.target.id.split("--")[1]
      // ---------- Write your code here -------------//
      // Call the deleteNote function and pass in the appropriate id
      
      console.log(idToDelete)
      deleteNews (idToDelete)
      .then(NewsList)
      // Then call NoteList to refresh the list of notes
  
    }
  });