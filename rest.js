function rest(...args)        //it will make the individual value into array
                              //depend on the required situation we have use rest or spread
{
  let sum=0;
  for(const arg of args)
  {
    sum+=arg;
  }
  return sum;
}
console.log(rest(4,5));
