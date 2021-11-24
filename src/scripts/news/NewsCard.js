//author: Akiko Endo --purpose: 1. to generate HTML representations and to delete the spefici news item,  2. to generate an edit form, and 3. update the database based on the information in the edit form
import { deleteNews, updateNews } from "./NewsDataProvider.js";
import { NewsList } from "./NewsList.js";
// import { NewsEditForm } from "./NewsEditForm.js"

//   <p>Date of the article saved: ${new Date (taco.dateSaved).toLocaleDateString('en-US')}</p>
// ${ taco.dateUpdated === "" ?
// ` <p id="newsDateUpdated-edit">Date of the article last updated: It has not been updated</p>`
// :
// ` <p id="newsDateUpdated-edit">Date of the article last updated: ${new Date (taco.dateUpdated).toLocaleDateString('en-US')}</p>`}
//    <p id="newsDateUpdated-edit">Date of the article updated: ${taco.dateUpdated}</p>
//<button id="edit--${taco.id}" class="btn btn-primary">Edit</button> from the news after the delete
export const news = (taco) =>  {
    if (taco.userId === +sessionStorage.activeUser){
    
    return `
    <div class="newsCard" id="${taco.id}">
    <p>Title: ${taco.title}</p>
    <p><a href=${taco.url} target="_blank" rel="noopener noreferrer"> the article url </a></p>
    <p id="newsDateUpdated-edit">Date of the article saved: ${new Date (taco.dateSaved).toLocaleDateString('en-US')}</p>


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
    <div class="modal-content" style=" background-color: rgba(200, 200, 200, 0.8);">
      <div class="modal-header">Change Article Details</div>
        <div class="modal-body">
        <form class="newsEditForm">

        <div action="newsTitle">
            <input style=" background-color: rgba(228, 230, 230, 0.8);" id="newsTitleEdit--${taco.id}" type="text" value="${taco.title}">
        </div>

        <div action="newsUrl">
            <input style=" background-color: rgba(228, 230, 230, 0.8);" name="" type="text" id="newsUrlEdit--${taco.id}" cols="30" rows="10" value="${taco.url}">
        </div>

        <div action="newsSynopsis">
            <textarea style=" background-color: rgba(228, 230, 230, 0.8);" name="newsSynopsis" id="newsSynopsisEdit--${taco.id}" placeholder="News Synopsis goes here">${taco.synopsis}</textarea>
        </div>

        <div action="newsDateSaved">
            <input style=" background-color: rgba(228, 230, 230, 0.8);" id="newsDateSavedEdit--${taco.id}"  value="${new Date (taco.dateSaved).toLocaleDateString('en-US')}"</input>
        </div>

        <div action="newsDateUpdated">
            
            
            
          
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
    `}
    else {
       return ` `
    }

}



document.querySelector(".news-list").addEventListener("click", (event) => {
 
    if(event.target.id.startsWith("saveNewsChanges")){
        const nowDate = new Date()
        const editedNews = {
            id: event.target.id.split("--")[1],
            userId:+sessionStorage.getItem("activeUser"),
            url: document.querySelector(`#newsUrlEdit--${+event.target.id.split("--")[1]}`).value,
            title: document.querySelector(`#newsTitleEdit--${+event.target.id.split("--")[1]}`).value,
            synopsis:document.querySelector(`#newsSynopsisEdit--${+event.target.id.split("--")[1]}`).value,
            dateSaved:document.querySelector(`#newsDateSavedEdit--${+event.target.id.split("--")[1]}`).value,
            dateUpdated: nowDate
           
        }

        if ( editedNews.url === '' ||  editedNews.title === '' ||  editedNews.synopsis === '' ||  editedNews.dateSaved === '') {
            alert('Please enter valid values')}
         else{

        console.log(editedNews)
       
        updateNews(editedNews).then(NewsList)}
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