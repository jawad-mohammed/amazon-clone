import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [loginUser,setloginUser]=useState({
   
    UserEmail:"",
    UserPassword:""
  })
  const {UserEmail,UserPassword} = loginUser
  const navigate = useNavigate()


const handleChange=(e)=>{
    setloginUser({...loginUser,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(loginUser);
}


const handleRegister =()=>{
navigate('/register')
}
    return (
    <>
<form onSubmit={handleSubmit}>
   
    <label htmlFor="UserEmail">Email</label><br />
    <input type="text" name="UserEmail" value={UserEmail} onChange={handleChange}/><br />
   
    <label htmlFor="UserPassword">Password</label><br />
    <input type="text" name="UserPassword" value={UserPassword} onChange={handleChange} /><br />
   
    <button type='submit'>Login</button>
  
  <h5>Not a member? Please register 
    <button onClick={handleRegister}>Register</button>
    </h5>
</form>


    </>
  )
}

export default Login
