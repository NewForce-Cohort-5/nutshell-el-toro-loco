import {LogOutButton} from "./auth/LogoutButton.js"
import { newArticle, articleForm } from "./news/NewsForm.js"
import {NewsList} from "./news/NewsList.js"

export const Nutshell = () => {
    
    newArticle()
    articleForm()
    NewsList()
    LogOutButton()
      // Render all your UI components here
      
}