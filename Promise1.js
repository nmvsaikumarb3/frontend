let a=new Promise((resolve,reject)=>
{
  resolve("resolve the issue");
});
a.then(respond=>console.log(respond));
