function* letters()
{
  yield 'a';
  yield 'b';
  yield 'c';

}
 let gen=letters();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
