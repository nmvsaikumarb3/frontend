import React,{Component} from 'react'; /* here component is insert because it is not a default class like React and React-DOM*/

/*
class Regular{}
class Componentclass extends Component{}

const regularinstance=new Regular();
const componentclassinstance=new Componentclass();

console.log('regularinstance',regularinstance);
console.log('componentclassinstance',componentclassinstance);
*/

class App extends Component
{
    constructor()
    {
        super();
        this.state={displayBio:false};
        console.log('Component this',this);
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }
   
 
        toggleDisplayBio()
        {
            this.setState({displayBio :!this.state.displayBio});

        }
    
    render(){               
        const bio=this.state.displayBio? ( <div>                   
        <p>i am learning react and doing the things practically</p>
        <p>i am done with javascript and it was a great experience</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
    </div>):(
        <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
    );

  
        return (
            <div>
                <h1>hello</h1>
                <p>i am sai .i am a software engineer</p>
                <p>i used to work in the nagra vision company</p>
              {bio}
            </div>
        )
    }
}

export default App;