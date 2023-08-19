import {getSession} from "next-auth/react"

export default function Home() {
  return (
    <>
     <div>hello</div>
  

     <button className='btn btn-large btn-danger'>click</button>
  
   
    </>
  )
}




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
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
        }
  

  
}