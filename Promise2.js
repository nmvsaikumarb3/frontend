let a=new Promise((resolve,reject)=>
{
  reject("reject the issue");
});
a.then(respond=>console.log(respond))
.catch(error=>console.log(error));
