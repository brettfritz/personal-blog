// pulling IDs from html

const username = document.getElementById('username');
const title = document.getElementById('title');
const msg = document.getElementById('msg');
const submitButton = document.getElementById('submit-button')

let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// submit button for the form takes all of the content and makes it a single object and pushes it to the posts array in local storage
// Also upon clicking of the post, changes the window to the blog.html page
submitButton.addEventListener('click', function (event){
    event.preventDefault();
    
    const blogPost = {
        username: username.value,
        title: title.value,
        msg: msg.value.trim(),
    };

    blogPosts.push(blogPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';

});