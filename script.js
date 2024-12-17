import { url, getAllPosts, getOnePost } from "./api.js"


function displayAllPosts(posts) {
  const postsWrapper = document.querySelector(".postsWrapper")
  postsWrapper.innerHTML = ``
  for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i]
    postsWrapper.innerHTML = postsWrapper.innerHTML + `
    <div class="post">
      <img src="${url}/api/files/${currentPost.collectionName}/${currentPost.id}/${currentPost.thumbnail}" alt="">
      <h4>${currentPost.title}</h4>
      <p>${currentPost.content}</p>
    </div>
    
    `

  }
}


window.addEventListener("DOMContentLoaded", async () => {

  console.log("everything is running from here")
  const posts = await getAllPosts()
  console.log(posts)
  displayAllPosts(posts)

})