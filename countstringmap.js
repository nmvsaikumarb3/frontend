let st='asdasdfasf';

let letters=new Map();

for(let i=0;i<st.length;i++)
{
  let letter=st[i];
  if(!letters.has(letter))
  {
    letters.set(letter,1)

  }
  else {
    letters.set(letter,letters.get(letter)+1);
    }
  }
  console.log(letters);
