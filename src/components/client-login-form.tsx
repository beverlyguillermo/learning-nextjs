"use client"

import useSession from "@/app/api/sessions/client"
import { defaultSession } from "@/models/session"
import Link from "next/link";

export default function ClientLoginForm() {
  const { session, isLoading } = useSession()

  if (isLoading) {
    return <p className="text-lg">Loading...</p>
  }

  if (session.isLoggedIn) {
    return (
      <>
        <p className="text-lg">
          Logged in user: <strong>{session.username}</strong>
        </p>
        <LogoutButton />
        <NavLinks/>
      </>
    )
  }

  return (
    <>
      <LoginForm />
      <div>
        <p>All of these should redirect back here except for server-login.</p>
      </div>
      <NavLinks/>
    </>
  )
}

function NavLinks() {
  return (
    <>
      <ul>
        <li><Link href="/protected-client">Protected Client Page</Link></li>
        <li><Link href="/protected-middleware">Protected Middleware Page</Link></li>
        <li><Link href="/protected-server">Protected Server</Link></li>
        <li><Link href="/server-login">Server Login</Link></li>
      </ul>
    </>
  )
}

function LoginForm() {
  const {login} = useSession()

  return (
    <form
      onSubmit={function (event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get("username") as string
        login(username, {
          optimisticData: {
            isLoggedIn: true,
            username,
          },
        })
      }}
      method="POST"
    >
      <label className="block text-lg">
        <span>Username</span>
        <input
          type="text"
          name="username"
          placeholder=""
          defaultValue="Robot"
          required
          // disabling autocomplete
          autoComplete="off"
        />
      </label>
      <p><label>Workspace: <input /></label></p>
      <p><label>Email: <input /></label></p>
      <p><label>Password: <input /></label></p>

      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}

function LogoutButton() {
  const { logout } = useSession()

  return (
    <p>
      <a
        onClick={(event) => {
          event.preventDefault()
          logout(null, {
            optimisticData: defaultSession,
          })
        }}
      >
        Logout
      </a>
    </p>
  )
}
