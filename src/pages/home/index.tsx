//REACT
import React from 'react'
import { useEffect } from 'react'
//import Head from 'next/head'
import { useRouter } from 'next/router'
//STATE TYPES
import { RootState } from '../../../store/reducers'
//REACT-REDUX
import { useSelector } from "react-redux"
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const Head = loadable(() => import('next/head'))

const HomePage = (): JSX.Element => {
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