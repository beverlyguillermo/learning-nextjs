import styles from '../page.module.css'
import { Suspense } from "react"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getIronSession } from "iron-session"
import Link from "next/link"
import {SessionData, sessionOptions} from "@/models/session"


// Broken: None of these parameters is working, thus we have caching issues
// TODO fix this
// from https://github.com/vvo/iron-session/blob/f8cb1d6e91db63d71ef79e4f258f03b77b8cc302/examples/next/src/app/app-router-client-component-route-handler-swr/protected-middleware/page.tsx#L9-L10
export const dynamic = "force-dynamic"
export const revalidate = 0

async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  return session
}

export default function ProtectedServer() {
  return (
    <main className={styles.main}>
      <h1>Protected Server</h1>
      <Suspense fallback={<p className="text-lg">Loading...</p>}>
        <Content />
      </Suspense>
      <p>
        <Link href="/">← Back</Link>
      </p>
    </main>
  )
}

async function Content() {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/")
  }

  return (
    <div className="max-w-xl space-y-2">
      <p>
        Hello <strong>{session.username}!</strong>
      </p>
      <p>
        This page is protected and can only be accessed if you are logged in.
        Otherwise you will be redirected to the login page.
      </p>
      <p>The check is done via a server component.</p>
    </div>
  )
}
