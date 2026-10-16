// Write your code here!
async function fetchPosts(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()  
    displayPosts(posts)
}
fetchPosts()

function displayPosts(posts){
    const postlist = document.querySelector(`#post-list`)
    posts.forEach( post => {
        
        const li = document.createElement(`li`)  

        const h1 = document.createElement(`h1`)   
        h1.textContent = post.title

        const p = document.createElement(`p`) 
        p.textContent = post.body

        li.appendChild(h1)
        li.appendChild(p)
        postlist.appendChild(li)
    });
}


