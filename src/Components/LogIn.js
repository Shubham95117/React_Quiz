import React,{useState} from 'react'
import {Alert, Button,Form} from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import GoogleButton from 'react-google-button'
function LogIn() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {logIn,googleSignIn} =useUserAuth();
    const[error,setError]=useState("")
    const navigate=useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        setError("")
        try{
            await logIn(email,password)
            navigate('/home')
        }
        catch(err){
         setError(err.message)
        }
    }

    const handleGoogleSignIn=async(e)=>{
      e.preventDefault()
      try{
       await googleSignIn()
       navigate('/home')
      }
      catch(err){
       setError(err.message)
      }

    }
  return (
    <div className='login-page'>
      <div className='container mt-3 pt-2  '>
        <div className='row'>
      <div className='mx-auto my-auto col-8 col-md-6 col-lg-6 login rounded'>
      <h2 className='mb-3 text-center login_header pt-2'>LogIn</h2>
      {error&&<Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary text-center" type="submit" className='mb-2'>
        LogIn
      </Button>
      <div>
        <GoogleButton className='g-btn mx-0 w-100' onClick={handleGoogleSignIn} ></GoogleButton>
      </div>
      <div className='p-4 box mt-3 text-center'>
        Don't have an acoount?   <Link to='/signUp' className='signupLink px-1'> <strong>Sign Up</strong> </Link>
      </div>
    </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default LogIn
