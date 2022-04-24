/* eslint-disable react-hooks/rules-of-hooks */

import { getProviders, signIn, useSession } from "next-auth/react"
import {useRouter} from "next/router"



function login() {

    const {data: session, status} = useSession()
    const router = useRouter()



    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    

  return (
    <div>
        <button onClick={() => signIn('github')} >
            Signin with Github
        </button>
    </div>
  )
}

export default login