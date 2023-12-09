"use server"

import styles from '../page.module.css'
import {Form} from "./form"
import {Suspense} from "react"
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Login</h1>
      <p>Session via server component</p>
      <Suspense fallback={<p className="text-lg">Loading...</p>}>
        <Form/>
      </Suspense>
      <p>
        <Link href="/">← Back</Link>
      </p>
    </main>
  )
}
