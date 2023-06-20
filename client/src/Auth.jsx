import React, { useState } from 'react'
import axios from "axios"
import { useCookies } from 'react-cookie'
import { useNavigate} from "react-router-dom"
import "./Styles/Login.scss"
import { FcGoogle} from "react-icons/fc"
import { BsGithub, BsFacebook } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Auth = () => {
    return (
      <div className='auth'>
          <Login/>
      </div>
    )
}   

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    // eslint-disable-next-line no-unused-vars
    const [_, setCookies] = useCookies(["access_token"])

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login",{username, password});
            
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            //window.location.pathname = "/"
            navigate("/")
        } catch(err){
            console.error(err);
        }
    }

    return (
        <div className='auth-container'>
            <form onSubmit={onSubmit}>
                <h2 className='sign' >Sign in</h2>
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

                <button className='submit-main' type='submit'>Sign in</button>
                <div className='dont'>
                    <p>Don't have an account?</p>
                    <h3 className='here'><Link to="/register">Sign Up Here</Link></h3>
                </div>
                <div className='or'>
                    <div className='space'></div>
                    <p className='or'>OR</p>
                    <div className='space'></div>
                </div>
                <button className='log google' ><FcGoogle className='icon-google'/>Sign in with Google</button>
                <button className='log github'><BsGithub className='icon-google git'/>Sign in with Github</button>
                <button className='log facebook'><BsFacebook className='icon-google face'/>Sign in with Facebook</button>
            </form>
        </div>
    )   
}


// const Register = () => {

//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     const onSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             await axios.post("http://localhost:3001/auth/register", {username, password})
//             alert("Registration completed")
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     return (
//             <Form
//                 username={username}
//                 setUsername={setUsername}
//                 password={password}
//                 setPassword={setPassword}
//                 label="Register"
//                 onSubmit={onSubmit}
//            />
//     )   
    
// }

// const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
//     return(
//         <div className='auth-container'>
//             <form onSubmit={onSubmit}>
//                 <h2>{label}</h2>
//                 <div className='form-group'>
//                     <label htmlFor='username'> Username: </label>
//                     <input 
//                         type='text' 
//                         id="username" 
//                         value={username}
//                         onChange={(event) => setUsername(event.target.value)} 
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='password'> Password: </label>
//                     <input 
//                         type='password' 
//                         id="password"
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)} 
//                     />
//                 </div>

//                 <button type='submit'>{label}</button>
//             </form>
//         </div>
//     )
// }



export default Auth