import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  const [userData, setUserData] = useState({
   
    email: '',
    password: '',

  })


  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState,[e.target.name] :e.target.value}
    })
  }

  return (
    <section className='login'>
      <div className='content container'>
        <h2>Sign In</h2>
        <form className='form login_form'>
          <p className='form_error-message'>This is an error message</p>
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus />
          <button type='submit' className='btn primary' >Login</button>
          <small>Dont have an account ? <Link to='/register'>sign up</Link></small>
        </form>
      </div>
     
    </section>
  )
}

export default Login
