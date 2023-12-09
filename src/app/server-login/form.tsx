"use server"

import {Input} from "./input"
import {SubmitButton} from "./submit-button"
import {getSession, login, logout} from "@/app/api/sessions/service"

export async function Form() {
  const session = await getSession()

  if (session.isLoggedIn) {
    return (
      <>
        <p className="text-lg">
          Logged in user: <strong>{session.username}</strong>
        </p>
        <LogoutButton />
      </>
    )
  }

  return <LoginForm />
}

function LoginForm() {
  return (
    <form action={login}>
      <label className="block text-lg">
        <span>Username</span>
        <Input />
      </label>
      <div>
      <SubmitButton value="Login" />
      </div>
    </form>
  )
}


function LogoutButton() {
  return (
    <form action={logout}>
      <div>
        <SubmitButton value="Logout" />
      </div>
    </form>
  )
}
