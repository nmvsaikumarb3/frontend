import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfile';
import profile from '../assets/nmvsaikumar.png'
import Title from './Title';
import Jokes from './Jokes';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
      <img src={profile} alt='profile'className='profile'/>
        <h1>Hello Developer</h1>
        <p>My name is sai.</p>
        <Title/>
        {
          this.state.displayBio ? (
            <div>
              <p>My Hobbies are Playing Cricket,reading Novels.</p>
              <p>My favorite language is JAVA,SQL,JavaScript and I think React.js is awesome.</p>
              <p>I am Working in NagraVision Company</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfile />
        <hr />
        <Jokes />
        <hr />
      </div>
    )
  }
}

export default App;
