function wizard(name,house,pet)
{
  this.name=name;
  this.house=house;
  this.pet=pet;

  this.great=()=>`i am ${this.name} from ${this.house}`
}
wizard.prototype.hobby="playing";

wizard.prototype.vinay=function()
{
  return `hi this is ${this.name} my hobby is ${this.hobby}`;
};

let hey=new wizard("sai","sullurpeta","dog");
console.log(hey);
console.log(hey.great());
console.log(hey.hobby);
console.log(hey.vinay());
