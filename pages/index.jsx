import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Head from 'next/head'
import { useDispatch } from "react-redux";

import Link from 'next/link';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';

const ChangeTitle = () => {
  return (
    <Head>
      <title>Página Inicial</title>
    </Head>
  )
}

export default function Home() {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(firebase.auth());
  const [queryAdmin, setAdmin] = useState([]);

  const Administrador = ({ queryAdmin }) => {
    if (queryAdmin.length > 0) {
      return <p>administrador</p>;
    }
    else { return null }
  }

  var content;

  if (loading) {
    content = (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    content = (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    content = (
      <>
        <p>Current User: {user.email}</p>
        <Administrador queryAdmin={queryAdmin} />
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

