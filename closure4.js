const product=(x)=>
{
  return y=>
  {
    return y*x;

  }
}

let s1=product(5);
console.log(s1(8));
let s2=product(4);
console.log(s2(3));
