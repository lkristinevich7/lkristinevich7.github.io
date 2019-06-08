fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) //.then(function(response) { return response.json();})
  .then(json => { // .then(function(jsonResponseIbject) { console.log(jsonREsponseObject);})
          
              for(let i = 95; i < json.length; i++) {
              let elem = json[i];
              console.log(elem);

              //Stworz div z klasa post

              let singlePostDiv = document.createElement("div");
              singlePostDiv.classList.add('post')
             /*  let classForDiv = document.createAttribute("class")
              classForDiv.value = "post" */
              

              // Stworz h2 i ustaw w nim tekst bedacy wartoscia pola title

              let postHeadnig = document.createElement("h2");
              postHeadnig.classList.add('title')
              postHeadnig.innerText = elem.title;

              // Stworz p i ustaw w nim tekst bedacy wartoscia pola body

              let postContent = document.createElement("p");
              postContent.classList.add('content')
              postContent.innerText = elem.body;

              let postLink = document.createElement("a");
              postLink.setAttribute("href", "");
              postLink.classList.add('link')
              postLink.innerText = 'Show';


              // Dodaj h2 i p jako dzieci div.post
              singlePostDiv.appendChild(postHeadnig);
              singlePostDiv.appendChild(postContent);
              singlePostDiv.appendChild(postLink);
              
              //Doday div.post jako dziecko elementy div$post-list z dokumentu HTML
              document.getElementById('posts-list').appendChild(singlePostDiv);

              postLink.addEventListener("click", function(e){
                e.preventDefault();
              
                console.log('text');
              fetch('https://jsonplaceholder.typicode.com/comments')
              .then(response => response.json()) //.then(function(response) { return response.json();})
              .then(json => {
                json.forEach(data => {
                  let postComment = document.createElement("p");
                  postComment.classList.add('comment')
                  postComment.innerText = data.body;
                  singlePostDiv.appendChild(postComment);

                  // if (postComment.style.display = "block") {
                  //   postComment.style.display = "none";
                  //   postLink.innerText = "Hide";
                  // } else {
                  // postComment.style.display = "block";
                  // postLink.innerText = "Show";
                  // }

                })
              });
            })
              
          }
            
 
      
  });

 /*  json.forEach(function(elem){

  }); */

