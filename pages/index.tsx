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

declare const window: any

export default function Home(): React.ReactElement {
  const router = useRouter();
  const { userIsLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('controlling', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('activated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = event => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.

        wb.addEventListener('install', function (event) {
          window.location.reload()
        });

        self.addEventListener('activate', function(event) {
          window.location.reload()
        });
      
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)
      wb.addEventListener('externalwaiting', promptNewVersionAvailable)

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      /*
      wb.addEventListener('redundant', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      wb.addEventListener('externalinstalled', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      wb.addEventListener('externalactivated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      */

      // never forget to call register as auto register is turned off in next.config.js
      wb.register()
    }
  }, [])

  return (
    <>
      <ChangeTitle />

      <p>nullo</p>

    </>
  )
}