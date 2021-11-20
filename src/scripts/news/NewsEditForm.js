// //author: Akiko Endo --purpose: 1. to generate an edit form, and 2. update the database based on the information in the edit form

// import {useNews, updateNews} from "./NewsDataProvider.js"
// import {NewsList} from "./NewsList.js"

// const contentTarget = document.querySelector(".news-list")

// export const NewsEditForm = (newsId) => {

// const allNews = useNews()

// const newsWeWantToEdit = allNews.find(singleNews => singleNews.id === newsId)

// contentTarget.innerHTML = `
// <!-- Modal -->
// <div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered">
//     <div class="modal-content">
//       <div class="modal-header">Add News</div>
//         <div class="modal-body">
//         <form class="newsEditForm">

//         <div action="newsTitle">
//             <input id="newsTitle-edit" type="text" value="${newsWeWantToEdit.title}">
//         </div>

//         <div action="newsUrl">
//             <input name="" type="text" id="newsUrl-edit" cols="30" rows="10" value="${newsWeWantToEdit.url}">
//         </div>

//         <div action="newsSynopsis">
//             <textarea name="newsSynopsis" id="newsSynopsis" placeholder="News Synopsis goes here">${newsWeWantToEdit.synopsis}</textarea>
//         </div>

//         <div action="newsDate">
//             <p>Date of the article saved: ${new Date (newsWeWantToEdit.date).toLocaleDateString('en-US')}</p>
//         </div>

//         </form>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-primary"  id="saveNewsChanges--${newsId}" data-bs-dismiss="modal">Save this changes</button>
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
//         </div>

//   </div>
// </div>
// </div>
// </div>

// `
// }

// contentTarget.addEventListener("click", (event) => {
//     if(event.target.id.startsWith("saveNewsChanges")){

//         const editedNews = {
//             id: event.target.id.split("--")[1],
//             userId:+sessionStorage.getItem("activeUser"),
//             url: document.querySelector("#newsUrl").value,
            
//         }
//         updateNews(editedNews).then(NewsList)
//     }
// })