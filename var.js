var limit=10;
{
  var limit=20;
  console.log(limit);           //here the var is not working in blockscope beacause it take the last declare variable
                               //as output but let and const can in blockscope
}
console.log(limit);
