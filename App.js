import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfile';
import profile from './assets/nmvsaikumar.png'

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
        <p>I am a Software Engineer.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in India and i am Proud to be a indian.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and cricket</p>
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
      </div>
    )
  }
}

export default App;
