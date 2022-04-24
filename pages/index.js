/* eslint-disable @next/next/no-img-element */
import { useSession,signOut } from "next-auth/react";
import {useRouter} from "next/router"




function Home() {

const {data: session, status} = useSession()
const router = useRouter()

if (status === 'loading') {
  return <p>loading...</p>
}

if (status === 'unauthenticated') {
  router.push('/login');
}
  return (
    <div>
      {
        session ? (
          <div>
                  <h1>{session.user.name}</h1>
                  <p>{session.user.email}</p>
                  <img src={session.user.image } alt="" />
          </div>
        ):(
          <p>Skeleton</p>
        )
      }

      <button onClick={()=> signOut()}>
        Logout
      </button>
    </div>
  )
}

export default Home