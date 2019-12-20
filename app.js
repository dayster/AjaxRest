document.querySelector('#load').addEventListener('click', loadPosts);

function loadPosts(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function(){
        
        if(this.status === 200){
            const posts = JSON.parse(this.response);

            let output = '';
            posts.forEach(post => {
                output += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}