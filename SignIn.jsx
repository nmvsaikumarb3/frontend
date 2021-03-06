import React,{Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:'',
      error:{
        messsge:''
      }
    }
  }
signIn()
{
  console.log('this.state',this.state);
  const {email,password}=this.state;
  firebaseApp.auth().signInWithEmailAndPassword(email,password)
  .catch(error=>{
    this.setState({error})
  })
}

  render(){
    return(
      <div className="form-inline" style={{margin:'5%'}}>
      <h2>SignIn</h2>
      <div className="form-group">
      <input
      className="form-control"
      type="text"
      style={{marginRight:'5%'}}
      placeholder="email"
      onChange={event=>this.setState({email:event.target.value})}
       />
       <input
       className="form-control"
       type="password"
       placeholder="password"
       onChange={event=>this.setState({password:event.target.value})}
       />
       <button
       className="btn btn-primary"
       type="button"
       onClick={()=>this.signIn()}>
       Sign In
       </button>
      </div>
      <div>{this.state.error.messsge}</div>
      <div><Link to={'/signup'}>Sign Up Instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
