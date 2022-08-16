import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
const Register = () => {
  const [registerUser,setRegisterUser]=useState({
    UserName:"",
    UserMobile:"",
    UserEmail:"",
    UserPassword:""
  })
  const {UserName,UserMobile,UserEmail,UserPassword} = registerUser
  const navigate = useNavigate()

const handleChange=(e)=>{
    setRegisterUser({...registerUser,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(registerUser);
}

const navigateHandle=()=>{
navigate('/login')
}

    return (
    <>
<form onSubmit={handleSubmit}>
    <label htmlFor="UserName">Your Name</label> <br />
    <input type="text" name="UserName" value={UserName} onChange={handleChange} /><br />
    <label htmlFor="UserMobile">Mobile Number</label><br />
    <input type="text" name="UserMobile" value={UserMobile} onChange={handleChange} /><br />
    <label htmlFor="UserEmail">Email</label><br />
    <input type="text" name="UserEmail" value={UserEmail} onChange={handleChange}/><br />
    <label htmlFor="UserPassword">Password</label><br />
    <input type="text" name="UserPassword" value={UserPassword} onChange={handleChange} /><br />
    <button type='submit'>Register</button>
</form>

<h5>Already a member? Please login
<button onClick={navigateHandle}>Login</button>
</h5>
    </>
  )
}

export default Register
