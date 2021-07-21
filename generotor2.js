function*  counting()
{
  let count=0;
  while(count<3)
  {
    yield count +=1;

  }
}

let gen=counting();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
