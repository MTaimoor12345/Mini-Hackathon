import React, { useRef, useState } from 'react'
import { signOut } from "next-auth/react";
import Link from 'next/link';
import {getSession} from "next-auth/react"
import { Card } from './component/card';
import { getAl } from '@/server/server';
import axios from 'axios';


export const dashboard = ({data}) => {

  const tittleRef= useRef();
  const descriptionRef=useRef();
  const HandleUpdate=async(id)=>{
    const tittle = tittleRef.current.value;
const description= descriptionRef.current.value;
e.preventDefault();
         try {
          await axios.put(`/api/dash/${id}`,)
          
         } catch (error) {
          
         }

  }


  const handleDelete = async (id,e) => {
    alert("Press f5 And Show Your Blog Is Delelted");
    try {
      await axios.delete(`/api/dash/${id}`);
      // Refresh the page or update the state to reflect the changes
      setdata1()
      e.preventDefault();
    } catch (error) {
      console.error('Error:', error);
    }
  }
 
  
  


  const onSubmitHandler= async(e)=>{
const tittle = tittleRef.current.value;
const description= descriptionRef.current.value;
e.preventDefault();


try {
  const response = await fetch("/api/dash", {
      method: "POST",
      body: JSON.stringify({tittle,description}),
      headers: {
          "Content-Type": "application/json"
      }
  } );
  if (response.ok) {
      alert("Blog Add Succesful Press F5 Button And Show Your New Blog");
      tittleRef.current.value = "";
     descriptionRef.current.value="";
   
  }
} catch (err) {
  console.error(err);
}  

  }
  const [data1,setdata1]=useState(data);
  console.log(data1)
  
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
          <h5 className='col1 mt-1'></h5>
          <a class="btn col1" href="/profile">ProFile</a>

        <Link class="btn col1" onClick={signOut} href={`/login`}>Logout</Link>

      </form>
    </div>
  </div>
</nav>

<h1 className='container mt-1'>
  Dashboard
</h1>


<form onSubmit={onSubmitHandler} className='container'>
<div class="mb-3 mt-3">
    <label for="tittle" class="form-label">First Name</label>
    <input type="text" class="form-control"ref={tittleRef} id="tittle" placeholder="tittle" name="tittle" required minLength={5} maxLength={50}/>
  </div>
  <div class="mb-3">
    <label for="descriptionRef" class="form-label">last Name</label>
    <input type="textarea" class="form-control" ref={descriptionRef} id="descriptionRef" placeholder="Last Name" name="descriptionRef" required maxLength={500}/>
  </div>
 


  <button type="submit" class="btn btn-success bg1 col1" >Add Vlog</button>
</form>

<div className='container'>

{data1.map((pro)=>( 
<div className={"card mt-5"} style={{width: "100%"}}>
  <img src='/image/cube-442544_1280.jpg' class="card-img-top" alt="..."style={{width: "18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{pro.tittle}</h5>
    <p class="card-text">{pro.description}</p>
    <p class="card-text">{pro.datetime}</p>
    <button class="btn btn-primary"  onClick={()=>HandleUpdate(pro.id)}>Update</button>
    <button class="btn btn-primary"  onClick={()=>handleDelete(pro.id)}>Delet</button>
  </div>
</div> ))} 

    </div>
    </div>
 )
}



export default dashboard;




export const getServerSideProps = async({req})=>{
  const session =await getSession({req});
  if (!session) {
    return {
      redirect: {
          destination: "/login",
          permanent: false
        }
    }
  }
  const data = getAl();
return {
  props:{
    data,
  }
}

}