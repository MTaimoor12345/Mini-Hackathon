import { signOut } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

import {getSession} from "next-auth/react"
import {useSession} from "next-auth/react"

export const profile = () => {
  let {data} =useSession();

  console.log(data)
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
     
        <a className={"btn col1"} type="submit" href="/dashboard">Dashboard</a>
        <Link class="btn col1" onClick={signOut} href={`/login`}>Logout</Link>
      </form>
    </div>
  </div>
</nav>

<div className='container'>
  <h1>Profile</h1>

  <div className={"card mt-5"} style={{width: "30%"}}>
  <img src='/image/cube-442544_1280.jpg' class="card-img-top" alt="..."style={{width: "100%"}}/>
  <div class="card-body">
    <h5 class="card-title">M Taimoor</h5>
    <p class="card-text">Password</p>
    <input type="password" placeholder='OLd Password' id="inputPassword6" class="form-control mt-5" aria-describedby="passwordHelpInline"/>
    <input type="password" id="inputPassword6" placeholder='New Password' class="form-control mt-5" aria-describedby="passwordHelpInline"/>
    <input type="password" id="inputPassword6" placeholder='New Password' class="form-control mt-5" aria-describedby="passwordHelpInline"/>
    <button class="btn btn-primary mt-5">update Password</button>
  </div>
</div>

</div>

    </div>
  )
}




export default profile;




export async function getServerSideProps ({req}) {
  const session =await getSession({req});
  
  console.log();
   if (!session) {
    return {
      redirect: {
          destination: "/login",
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