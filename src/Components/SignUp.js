import React, { useState } from 'react'
import {Alert, Button,Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';


function SignUp() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {signUp} =useUserAuth();
    const[error,setError]=useState("")
    const navigate=useNavigate()


const handleSubmit= async (e)=>{
    e.preventDefault()
    setError("")
    try{
        await signUp(email,password)
        navigate('/')
    }
    catch(err){
     setError(err.message)
    }
}

  return (
    <div className='container mt-3 pt-2 '>
       <div className='row'>
      <div className='mx-auto my-auto col-8 col-md-6 col-lg-6 login rounded'>
      <h2 className='mb-3 text-center login_header pt-2'>Sign Up</h2>
      {error&&<Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      <div className='p-4 box mt-3 text-center'>
        Already have an acoount? <Link to='/' className='signupLink px-1'> <strong>Log In</strong> </Link>
      </div>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default SignUp
