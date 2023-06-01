import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitch } from "react-icons/fa"
import { BsGithub, BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs"
import { GoMail} from "react-icons/go"
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/")
  }

  return (
    <div className='nav-main'>
        <div className='nav-left'>
            <Link to="https://www.linkedin.com/in/roquebernedo/" target='_blank' className='menu-link linkedin'><FaLinkedin /></Link>
            <Link className='menu-link github'><BsGithub /></Link>
            <Link className='menu-link youtube'><BsYoutube /></Link>
            <Link className='menu-link twitter'><BsTwitter /></Link>
            <Link className='menu-link twitch'><FaTwitch /></Link>
            <Link className='menu-link facebook'><BsFacebook /></Link>
        </div>
        <div className='nav-center'>
            <div className='nav-menu'>
                <Link className='nav-link' to="/"><div className='div-link'>Home</div></Link>
                <Link className='nav-link' to="/about"><div className='div-link'>About</div></Link>
                <Link className='nav-link' to="/ideas" ><div className='div-link'>Ideas</div></Link>
                {!cookies.access_token ? (<Link className='nav-link' to="/auth"><div className='div-link'>Login</div></Link>)
                : ( <>
                      <Link className='nav-link' to="/save" >
                        <div className='div-link'>Favorites</div>
                      </Link>
                      <Link onClick={logout} to="/auth" className='nav-link'>
                        <div className='div-link'>Logout</div>
                      </Link>
                      <Link to="/profile" className='nav-link'>
                        <div className='div-link'>Profile</div>
                      </Link>
                    </>
                )}
            </div>
        </div>
        <div className='nav-right'>
            <Link className='Signup' to="/register">Sign Up</Link>
            <Link className='mail'><GoMail /></Link>
        </div> 
    </div>
  )
}

export default Navbar