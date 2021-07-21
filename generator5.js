function* arrayiterator()
{
    yield arguments;
}

var it=arrayiterator(1,2,3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
