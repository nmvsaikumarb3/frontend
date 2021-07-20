const addsuffix=(x)=>
{
  const concat=(y)=>
  {
    return x+y;
  }
  return concat;
}

let addness=addsuffix("happi");
console.log(addness);
let hi=addness("full");
console.log(hi);
