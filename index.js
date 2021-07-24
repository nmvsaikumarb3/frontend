import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root')); //<App/> it is the self enclosing tag if dont want write anything in the middle of the tags







/*
class Animal
{
    constructor(name,age)
    {
        this.name=name;
        this.age=name;
    }
    speak()
    {
        console.log('i am',this.name,'my age is',this.age);
    }
}
const Animal1=new Animal('simba',10);
Animal1.speak();
console.log(Animal1);

class Lion extends Animal
{
    // eslint-disable-next-line
    constructor(name,age,furcolour,speed)
    {
        super(name,age);
        this.furcolour=furcolour;
        this.speed=speed;
    }
    raor()
    {
        console.log('i have ',this.furcolour,'and i can run',this.speed,'miles per hour');
    }
}
const Lion1=new Lion('shaar',5,'golden',3);
Lion1.raor();
Lion1.speak();
console.log(Lion1);
*/