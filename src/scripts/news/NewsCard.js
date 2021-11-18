//author: Akiko Endo --purpose: to generate HTML representations
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
    <button id="deleteNote--${taco.id}">Delete</button>
    <button id="edit--${taco.id}">Edit</button>
    </div>
        `
}

