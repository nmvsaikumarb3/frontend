function* evens()
{
  let count=0;
  while(true)
  {
    count +=2;
    let reset=yield count;          //reset generators
    if(reset)
    {
      count=0;
    }
  }
}

let se=evens();
console.log(se.next().value);
console.log(se.next().value);
console.log(se.next().value);
console.log(se.next(true).value);
console.log(se.next().value);
