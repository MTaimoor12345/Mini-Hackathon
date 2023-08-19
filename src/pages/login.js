import Link from 'next/link'
import React, { useRef } from 'react'
import {signIn} from "next-auth/react"
import {getSession} from "next-auth/react"




export const login = () => {



// if(session1){
//   redirect:{

//   }
// }

  const emailRef = useRef();
  const passwordRef=useRef(); 
const loginHandler=(e)=>  {

  e.preventDefault();
  const email = emailRef.current.value;
  const password=passwordRef.current.value;
   
   signIn('credentials',{redirect:"/dashboard",email,password});


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
     
        <Link class="btn col1" type="submit" href={`/signin`}>SignUp</Link>
      </form>
    </div>
  </div>
</nav>

<h1 className='container mt-1'>
  Login
</h1>


<div className='container p-5'>
<form onSubmit={loginHandler}>

  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" ref={emailRef} id="email" placeholder="Enter email" name="email" required/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" ref={passwordRef} id="pwd" placeholder="Enter password" name="pswd" required />
  </div>
 
  <button type="submit" class="btn bg1 col1" >Login</button>
</form>
</div>


    </div>
  )
}
export default login;




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