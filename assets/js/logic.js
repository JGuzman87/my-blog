document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modeToggle = document.getElementById('mode-toggle');
    const validationMessage = document.getElementById('validationMessage');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        if (!username || !title || !content) {
            validationMessage.style.display = 'block';
        }else{
            validationMessage.style.display = 'none';
            const newPost = {
                username: username,
                title: title,
                content: content
            };
            let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            blogPosts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        window.location.href = 'https://jguzman87.github.io/my-blog/blog.html';

     
        }
        
        

        
    });

    let isDarkMode = false;
    modeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';



});


    
    
    
});
