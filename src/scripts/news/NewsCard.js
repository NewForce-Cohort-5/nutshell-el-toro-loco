//author: Akiko Endo --purpose: to generate HTML representations and to delete the spefici news item
import { deleteNews } from "./NewsDataProvider.js";
import { NewsList } from "./NewsList.js";
// import { NewsEditForm } from "./NewsEditForm.js"

export const news = (taco) =>  {
    return `
    <div class="newsCard">
    <h3>Title: ${taco.title}</h3>
    <p><a href=${taco.url} target="_blank" rel="noopener noreferrer"> the article url </a></p>
    <p>Date of the article saved: ${new Date (taco.date).toLocaleDateString('en-US')}</p>
    <p>Summary: ${taco.synopsis}</p>
    <button id="deleteNews--${taco.id}" class="btn btn-primary">Delete</button>
    <button id="edit--${taco.id}" class="btn btn-primary">Edit</button>
    </div>
        `
}

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