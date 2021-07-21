const arrayiterator=(array)=>
{
  let index=0;

  return{
    next:()=>
    {
      if(index<array.length)
      {
        let next=array[index];
        index +=1;
        return next;
      }
    }
  }
}

let it=arrayiterator([4,5,6]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
