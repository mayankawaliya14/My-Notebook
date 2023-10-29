import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", Username: "", email: "", password: ""})
  let history = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {name, Username, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({name, Username, email, password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.AuthToken);
      history("/");
      props.showAlert("User created successfully", "success")
    }
    else{
      props.showAlert("USer with this email or Username already exist", "danger")
    }
  }
  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='my-3'>
      <form onSubmit={handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter name" onChange={onChange}  minLength={3} required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="Username">Username</label>
    <input type="text" className="form-control" id="Username" name='Username' aria-describedby="emailHelp" placeholder="Enter Username" onChange={onChange}  minLength={4} required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}  minLength={5} required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
