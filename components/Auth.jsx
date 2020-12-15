import firebase from 'firebase/app';
import 'firebase/auth';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export const Auth = () => {
  const router = useRouter(); 

  useEffect(() => {
    !firebase.auth().currentUser ? router.push("/") : true;
  }, [firebase.auth().currentUser])

  return true;
}
