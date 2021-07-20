let m=[[1,'sai'],[2,'nmv'],[3,'kumar']];  //maping each key to the value
let n=new Map(m);

for(let[key,value] of n.entries())
{
  console.log(`${key} points to ${value}`);
}
