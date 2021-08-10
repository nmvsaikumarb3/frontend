import React,{Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignUp extends Component
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
signUp()
{
  console.log('this.state',this.state);
  const {email,password}=this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email,password)
  .catch(error=>{
    this.setState({error})
  })
}

  render(){
    return(
      <div className="form-inline" style={{margin:'5%'}}>
      <h2>SignUp</h2>
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
       onClick={()=>this.signUp()}>
       Sign Up
       </button>
      </div>
      <div>{this.state.error.messsge}</div>
      <div><Link to={'/signin'}>Already a user?SignIn Instead</Link></div>
      </div>
    )
  }
}

export default SignUp;
