import React,{Component} from 'react';

const Joke=({joke:{setup,punchline}})=>(<p style={{margin:20}}>{setup}<em>{punchline}</em></p>)

class Jokes extends Component
{
    state={joke:{},jokes:[]};

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>response.json())
        .then(json=>this.setState({joke:json}))
        .catch(error=>alert(error.message));

    }
    fetchJokes=()=>
    {
        fetch('https://foo/random_ten')
        .then(response=>response.json())
        .then(json=>this.setState({jokes:json}))
        .catch(error=>alert(error.message));
        
    

    }

    render()
    {
        return(
        <div>
             <h1>Highlighted joke</h1>
            <Joke joke={this.state.joke} />
            <hr />
            <h3>Want ten new Jokes?</h3>
            <button onClick={this.fetchJokes}>Click me</button>
            {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
        </div>
        )
    }
}
export default Jokes;