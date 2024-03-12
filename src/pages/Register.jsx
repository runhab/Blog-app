import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2:'',

  })


  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name] :e.target.value}
    })
  }

  return (
    <section className='register'>
      <div className='content container'>
        <h2>Sign Up</h2>
        <form className='form register_form'>
          <p className='form_error-message'>This is an error message</p>
          <input type='text' placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus />
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus />
          <input type='password' placeholder='Confirm Password' name='password2' value={userData.password2dhn} onChange={changeInputHandler} autoFocus />
          <button type='submit' className='btn primary' >Register</button>
          <small>Already have an account ? <Link to='/login'>sign in</Link></small>
        </form>
      </div>
     
    </section>
  )
}

export default Register
