//IREACT
import React from 'react'
//NEXTJS
import Head from 'next/head'

export default function Home(): React.ReactElement {

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