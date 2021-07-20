let a=new Promise((resolve,reject)=>
{
  setTimeout(()=>resolve('resolve the issue'),3000)
})


a.then(response=>console.log(response))
.catch(error=>console.log(error));

console.log('after promise comsumption');
