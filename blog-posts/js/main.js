fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => { 
          
              for(let i = 95; i < json.length; i++) {
              let elem = json[i];
              // console.log(elem);
              let singlePostDiv = document.createElement("div");
              singlePostDiv.classList.add('post')

              let postHeadnig = document.createElement("h2");
              postHeadnig.classList.add('title')
              postHeadnig.innerText = elem.title;

              let postContent = document.createElement("p");
              postContent.classList.add('content')
              postContent.innerText = elem.body;

              let postLink = document.createElement("a");
              postLink.setAttribute("href", "");
              postLink.setAttribute("data-id", elem.id);
              postLink.classList.add('link')
              postLink.innerText = 'Pokaz komentarze';

              singlePostDiv.appendChild(postHeadnig);
              singlePostDiv.appendChild(postContent);
              singlePostDiv.appendChild(postLink);
              
              document.getElementById('posts-list').appendChild(singlePostDiv);

              function hideComments(e) {
                e.preventDefault();

                let commentsContainers = document.getElementsByClassName('comments-container');
                let commentHeadnigs = document.getElementsByClassName('comments-heading');
  
                for(let i = 0; i<commentsContainers.length; i++) {
                  commentsContainers[i].parentElement.removeChild(commentsContainers[i]);
                  commentHeadnigs[i].parentElement.removeChild(commentHeadnigs[i])
                }

                postLink.innerText = 'Pokaz komentarze';
                postLink.removeEventListener('click', hideComments);
                postLink.addEventListener("click", getComments);

              }

             function getComments(e) {
                e.preventDefault();
                let commentHeadnig = document.createElement("h3");
                commentHeadnig.classList.add('comments-heading');
                commentHeadnig.innerText = 'Komentarze';
                singlePostDiv.appendChild(commentHeadnig);

                let commentsContainer = document.createElement("div");
                commentsContainer.classList.add('comments-container');
                singlePostDiv.appendChild(commentsContainer);
                console.log('test');
                fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postLink.dataset.id)
                .then(response => response.json()) 
                .then(json => {
                  json.forEach(data => {

                    let emailComment = document.createElement("a");
                    emailComment.classList.add('email');
                    emailComment.setAttribute("href", "mailto:" + data.email);
                    emailComment.innerText = data.email;
                    commentsContainer.appendChild(emailComment);
                    
                    let postComment = document.createElement("p");
                    postComment.classList.add('comment');
                    postComment.innerText = data.body;
                    commentsContainer.appendChild(postComment);

                    

                    postLink.innerText = 'Schowaj komentarze';
                    postLink.removeEventListener("click", getComments);
                    postLink.addEventListener('click', hideComments);

                  })
                });
              }

              postLink.addEventListener("click", getComments);
              
          } 
  });



