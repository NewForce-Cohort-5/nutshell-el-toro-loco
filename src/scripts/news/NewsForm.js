//author: Akiko Endo --purpose: to a save form 
const newArticleContentTarg = document.querySelector(".news-container") 

export const newArticle = () => {
    

    newArticleContentTarg.innerHTML = `
<button id="new-article" class="#" >New Article</button>
`
}

//this is an event listner to bring up the form when a user clicks the newArticle button

newArticleContentTarg.addEventListener("clicks", clickEvent => {

    if (clickEvent.target.id = "new-article" ){
        articleForm ()
    }

})

export const articleForm ()

