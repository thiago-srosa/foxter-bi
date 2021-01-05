//Import React
import React from 'react'
import { useEffect } from 'react'

//Import NextJS
import Head from 'next/head'
import { useRouter } from 'next/router'

//Import Store Types
import { RootState } from '../../../store/reducers'

//Import React Redux
import { useSelector } from "react-redux";

function HomePage() {
  const router = useRouter();
  const userIsLoggedIn = useSelector((state: RootState) => state.user.userIsLoggedIn);

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])

  function ChangeTitle(): React.ReactElement {
    return (
      <Head>
        <title>Página Inicial</title>
      </Head>
    )
  }
  return (
    <>
      <ChangeTitle />

      <p>Painel não desenvolvido.</p>

    </>
  )
}

export default HomePage