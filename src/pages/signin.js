import Link from 'next/link';
import React, { useRef } from 'react'
import {getSession} from "next-auth/react"

const signin = () => {
const fname = useRef();
const lname = useRef();
const emailRef= useRef();
const pass =useRef();
const pass1 = useRef();


const onSubmitHandler=async(e)=>{
  const firstname = fname.current.value;
  const lastname =lname.current.value;
  const email =emailRef.current.value;
  const password =pass.current.value;
  const password1 =pass1.current.value;
  e.preventDefault();
  console.log(firstname,lastname,email, password1)
if (password === password1) {
  try {
    const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({firstname,lastname,email, password}),
        headers: {
            "Content-Type": "application/json"
        }
    } );
    if (response.ok) {
        alert("Sign up Succesful");
    }
} catch (err) {
    console.error(err);
}  
  
}else{
  alert("password Are Not Same")
}



}


  return (
    <div>
     



<nav class="navbar navbar-expand-lg navbar-light  bg1">
  <div class="container">
    <a class="navbar-brand col1" href="#">Personal Blogging App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          
        </li>
        <li class="nav-item">
          
        </li>
        <li class="nav-item dropdown">
         
        
        </li>
        <li class="nav-item">
         
        </li>
      </ul>
      <form class="d-flex">
     
        <Link class="btn col1" type="submit" href={`/login`}>Login</Link>
      </form>
    </div>
  </div>
</nav>

<h1 className='container mt-1'>Signup</h1>

<div className='container p-5'>
<form onSubmit={onSubmitHandler}>
<div class="mb-3 mt-3">
    <label for="firstname" class="form-label">First Name</label>
    <input type="text" class="form-control"ref={fname} id="firstname" placeholder="First Name" name="firstname" required minLength={3} maxLength={20}/>
  </div>
  <div class="mb-3">
    <label for="lastname" class="form-label">last Name</label>
    <input type="text" class="form-control" ref={lname} id="lastname" placeholder="Last Name" name="lastname" required maxLength={20}/>
  </div>
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" ref={emailRef} placeholder="Enter email" name="email" required/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd"ref={pass} placeholder="Enter password" name="pswd" required minLength={8}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more"/>
  </div>
  <div class="mb-3">
    <label for="pwd1" class="form-label">Re Password:</label>
    <input type="password" class="form-control" ref={pass1} id="pwd1" placeholder="Enter password" name="pwd1" required minLength={8}/>
  </div>

  <button type="submit" class="btn bg1 col1" >Signup</button>
</form>
</div>


    </div>
  )
}
export default signin;



export async function getServerSideProps ({req}) {
  const session = await getSession({req});
  console.log(session);
   if (session) {
    return {
      redirect: {
          destination: "/dashboard",
          permanent: false
        }
    }
  }

  return {
    props: {
        session
      }
  }
}