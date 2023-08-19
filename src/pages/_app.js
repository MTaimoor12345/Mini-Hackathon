import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return(<>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <SessionProvider>
  <Component {...pageProps} />
  </SessionProvider>
  </>) 
}
