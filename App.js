import React,{Component} from 'react'; /* here component is insert because it is not a default class like React and React-DOM*/


class Regular{}
class Componentclass extends Component{}

const regularinstance=new Regular();
const componentclassinstance=new Componentclass();

console.log('regularinstance',regularinstance);
console.log('componentclassinstance',componentclassinstance);

class App extends Component
{
    render(){
        return (
            <div>
                <h1>hello</h1>
                <p>i am sai .i am a software engineer</p>
                <p>i used to work in the nagra vision company</p>
            </div>
        )
    }
}

export default App;