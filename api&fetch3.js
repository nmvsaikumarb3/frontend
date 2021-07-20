const root='https://www.googleapis.com/books/v1/volumes?q=isbn:07475322699';

fetch(root,{method:"GET"})
.then(response =>response.json())
.then(json =>console.log(json));
