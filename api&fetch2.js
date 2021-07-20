const root='https://jsonplaceholder.typicode.com/posts/1';

fetch(root,{method:"GET"})
.then(response =>response.json())
.then(json =>console.log(json));
