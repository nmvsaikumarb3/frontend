import animal from "./animal.js"

class tiger extends animal
{
  constructor(name,height,colour)
  {
    super(name,height);
    this.colour;
  }
}

let h=new tiger("tiger",4.5,golden);
console.log(h);
h.hello();
