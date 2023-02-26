import React from 'react'
import './Login.css'

function Login() {
    const logIntoApp=()=>{}
    const register=()=>{

    }
  return (
    <div className="login">
       <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"></img> 
       <form>
        <input placeholder="Full Name" type="text"/>
        <input placeholder="Profile picture(Optional)" type="text"/>
        <input placeholder="Email" type="email"/>
        <input placeholder="Password" type="password"/>
        <button type="submit" Onclick={logIntoApp}>Sign In</button>
        </form>
        <p>Not a member?
        <span className="login_register" Onclick={register}>Register Now</span>
        </p>
        </div>
  )
}

export default Login