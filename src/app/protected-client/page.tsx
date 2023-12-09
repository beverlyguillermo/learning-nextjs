"use client"

import styles from '../page.module.css'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import useSession from "@/app/api/sessions/client"

export default function ProtectedClient() {
  return (
    <main className={styles.main}>
      <h1>Protected Client</h1>
      <Content />
      <p>
        <Link href="/" >
          ← Back
        </Link>
      </p>
    </main>
  )
}

function Content() {
  const { session, isLoading } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !session.isLoggedIn) {
      router.replace("/")
    }
  }, [isLoading, session.isLoggedIn, router])

  if (isLoading) {
    return <p className="text-lg">Loading...</p>
  }

  return (
    <div className="max-w-xl space-y-2">
      <p>
        Hello <strong>{session.username}!</strong>
      </p>
      <p>This is using the client javascript for session management and should only be seen if they are logged in.</p>
    </div>
  )
}
