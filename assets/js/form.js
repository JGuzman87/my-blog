document.addEventListener('DOMContentLoaded', function () {
const container = document.querySelector('.container');
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

function renderBlogPostData() {
    if (blogPosts) {
        container.innerHTML = '';
        blogPosts.forEach(post => {
        

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

            const postContent = document.createElement('p');
            postContent.innerHTML = post.content;

            const postAuthor = document.createElement('p');
            postAuthor.innerHTML = `Posted by: ${post.username}`;

            container.appendChild(postTitle);
            container.appendChild(postContent);
            container.appendChild(postAuthor);

           
           

        });
      
        
    }
}

renderBlogPostData();

});