
import React, { useState } from 'react'

export const Card = () => {

  return (
    <div className='container'>

 
<div class="card mt-5" style={{width: "100%"}}>
  <img src='/image/cube-442544_1280.jpg' class="card-img-top" alt="..."style={{width: "18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">hjkhlkj.m,</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Update</a><a href="#" class="btn btn-primary">Delet</a>
  </div>
</div> 

    </div>
  )
}



export async function getStaticProps() {
  const data = getAl()
   return { props: { data } }
 }