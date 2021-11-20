//author: Akiko Endo --purpose: to print a new-article-button and if a user clicks the button, the info input field will be displayed.  And save data in the field into the database when the user clicked the save button in the input field.

import {saveNews} from "./NewsDataProvider.js"


export const newArticle = () => {
  const newArticleContentTarg = document.querySelector(".news-form") 


    newArticleContentTarg.innerHTML = `
<button id="new-article" class="#" >New Article</button>
`
}

//this is an event listner to bring up the form when a user clicks the newArticle button

document.querySelector(".news-form").addEventListener("clicks", clickEvent => {

    if (clickEvent.target.id = "new-article" ){
        articleForm ()
    }

})

export const articleForm = () => {
  const newArticleContentTarg = document.querySelector(".news-form") 

newArticleContentTarg.innerHTML = `
    
    
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#eateriesModal">
  Add News
</button>

<!-- Modal -->
<div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">Add News</div>
        <div class="modal-body">
        <form class="newsForm">
            
            <div action="newsTitle">
                <input id="newsTitle" type="text" placeholder="News Title goes here">
            </div>
            
            <div action="newsUrl">
                <input name="" type="text" id="newsUrl" cols="30" rows="10" placeholder="News url goes here">
            </div>
    
            <div action="newsSynopsis">
                <textarea name="newsSynopsis" id="newsSynopsis" placeholder="News Synopsis goes here"></textarea>        
            </div>
    
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"  id="saveArticle" data-bs-dismiss="modal">Save this article</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>        
      </div>
    
  </div>
</div>
</div>
</div>
    `

}

//below is a function to send the new data to the JSON server


document.querySelector(".news-form").addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveArticle"){
   

    console.log("you clicked")
    const nowDate = new Date()
    
            const articleToAdd = { 
                        // Key/value pairs here
                        userId:+sessionStorage.getItem("activeUser"),
                        url: document.querySelector("#newsUrl").value,
                        title:document.querySelector("#newsTitle").value,
                        synopsis: document.querySelector("#newsSynopsis").value,
                        date: nowDate
 }
 debugger
 console.log(articleToAdd)
      document.querySelector("#newsUrl").value = ""
      document.querySelector("#newsTitle").value = ""
      document.querySelector("#newsSynopsis").value = ""

 saveNews(articleToAdd)
 .then(NewsList)

}                })