async function async_one()
{
  return "one";
}

async_one().then(responce=>console.log(responce));

async function async_two()
{
  throw new Error('issue with async');
}
async_two().catch(error=>console.log(error));
