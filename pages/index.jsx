//Import NextJS
import Head from 'next/head'
import Link from 'next/link'

//Import Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'

const ChangeTitle = () => {
  return (
    <Head>
      <title>Página Inicial</title>
    </Head>
  )
}

export default function Home() {
  const { initialising, user } = useAuthState(firebase.auth());

  var content;

  if (initialising) {
    content = (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (user) {
    content = (
      <>
        <p>Current User: {user.email}</p>
        <Link href="/solicitar-contrato" >
          <a>Home</a>
        </Link>
      </>
    );
  }

  return (
    <>
      <ChangeTitle />
      {content}
    </>
  );
}

