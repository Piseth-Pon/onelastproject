import { getAllPosts, getOnePost } from "./api.js"


window.addEventListener("DOMContentLoaded", async () => {

  console.log("everything is running from here")
  const posts = await getAllPosts()
  console.log(posts)

})