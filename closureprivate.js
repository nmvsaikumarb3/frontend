const budget=()=>
{
  let balance=0;
  let changebal=(val)=>
  {
    return balance+=val;
  }
  const deposit=()=>changebal(20);
  const withdraw=()=>changebal(-20);
  const check=()=>balance;


  return{
    deposit,withdraw,check
  }
}
  let wallet=budget();

  wallet.deposit();
  wallet.withdraw();
  wallet.deposit();
  wallet.deposit();
  console.log(wallet.check());
