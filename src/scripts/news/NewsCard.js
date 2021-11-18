//author: Akiko Endo --purpose: to generate HTML representations
import { deleteNews } from "./NewsDataProvider.js";
import { NewsList } from "./NewsList.js";
import { NewsEditForm } from "./NewsEditForm.js"

export const news = (taco) =>  {
    return `
    <div class="newsCard">
    <h3>Title: ${taco.title}</h3>
    <p>Date: ${new Date (taco.dateOfNote).toLocaleDateString('en-US')}</p>
    <p>Note : ${taco.noteText}</p>
    <button id="deleteNote--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}

