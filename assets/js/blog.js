
// this function, upon page load, parses the string content in the local storage back into an object
// it then says, for each object, take the username, title, and msg, and create an html element for each
// then it appends each of those elements to the blog.html in a container

document.addEventListener('DOMContentLoaded', function() {

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPostsContainer = document.getElementById('blog-posts-container')

    blogPosts.forEach(function(post) {
        const postEl = document.createElement('div');
        postEl.classList.add('blog-post')

        const usernameEl = document.createElement('h4');
        usernameEl.textContent = post.username;

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;
        
        const msgEl = document.createElement('p');
        msgEl.textContent = post.msg;

        postEl.appendChild(titleEl);
        postEl.appendChild(msgEl);
        postEl.appendChild(usernameEl);
        blogPostsContainer.appendChild(postEl);
        
    });
});

// this is the function for the back button, where upon a click, changes the window href back to index.html

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');

    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});