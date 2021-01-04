import * as React from 'react'
import { useEffect } from 'react'

//Import NextJS
import Head from 'next/head'
import Link from 'next/link'

//Import Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'

function ChangeTitle(): React.ReactElement {
  return (
    <Head>
      <title>Página Inicial</title>
    </Head>
  )
}

export default function Home(): React.ReactElement {
  const { initialising, user } = useAuthState(firebase.auth());


  return (
    <>
      <ChangeTitle />
      {initialising ?
        <div><p>Initialising User...</p></div>
        : null
      }

      {user ?
        <>
          <p>Current User: {user.email}</p>
          <Link href="/solicitar-contrato" >
            <a>Home</a>
          </Link>
        </>
        : null
      }

    </>
  )
}