import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FcGoogle} from "react-icons/fc"
import { BsGithub, BsFacebook } from "react-icons/bs"
import "./Styles/Login.scss"
import { Link } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.post("http://localhost:3001/auth/register", {username, password})
        alert("Registration completed")
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className='auth-container'>
            <form onSubmit={onSubmit}>
                <h2 className='sign'> Sign Up</h2>
                <div className='form-group'>
                    <label htmlFor='username'> Username: </label>
                    <input 
                        type='text' 
                        id="username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'> Password: </label>
                    <input 
                        type='password' 
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>

                <button className='submit-main' type='submit'>Sign Up</button>
                <div className='dont'>
                    <p>Have an account already?</p>
                    <h3 className='here'><Link to="/auth">Sign In Here</Link></h3>
                </div>
                <div className='or'>
                    
                    <p className='or'>OR</p>
                    
                </div>
                <button className='log google' ><FcGoogle className='icon-google'/>Sign up with Google</button>
                <button className='log github'><BsGithub className='icon-google git'/>Sign up with Github</button>
                <button className='log facebook'><BsFacebook className='icon-google face'/>Sign up with Facebook</button>
            </form>
        </div>
  )
}

export default Register