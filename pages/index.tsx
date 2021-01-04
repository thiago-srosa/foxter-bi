import * as React from 'react'
import { useEffect } from 'react'

//Import NextJS
import Head from 'next/head'
import { useRouter } from 'next/router'

//Import React Redux
import { useSelector } from "react-redux";

function ChangeTitle(): React.ReactElement {
  return (
    <Head>
      <title>Página Inicial</title>
    </Head>
  )
}

export default function Home(): React.ReactElement {
  const router = useRouter();
  const { userIsLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])


  return (
    <>
      <ChangeTitle />

      <p>nullo</p>

    </>
  )
}