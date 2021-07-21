function* arrayiterator()
{
  for(let arg of arguments)
  {
    yield arg;
  }
}

var it=arrayiterator(1,2,3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
