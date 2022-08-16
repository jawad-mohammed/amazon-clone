import React from 'react'
import {useNavigate} from 'react-router-dom'
const Layout = () => {
  const navigate = useNavigate()
  
const registerHandle=()=>{
    navigate('/register')
}

const  loginHandle=()=>{
    navigate('/login')
}


    return (
    <div>
   <button onClick={registerHandle}>Register</button>
   <button onClick={loginHandle}>Login</button>
    </div>
  )
}

export default Layout
